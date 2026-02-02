// Get the i18n dictionary
import translations from "../../templates/_data/i18n.js";

// Set up markdown-it for rendering markdown content
import markdownIt from 'markdown-it'
const md = new markdownIt({ html: true });

export default function (eleventyConfig) {
  
  /**
   * debug
   * Similar to jsonPretty, it displays data is more robust format.
   * https://github.com/11ty/eleventy/issues/1526
   */
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  /**
   * md
   * Render markdown content
   */
  eleventyConfig.addFilter("md", (content) => {
    return md.render(content);
  });

  /**
   * jsonify
   * Converts a JavaScript object to a JSON string.
   */
  eleventyConfig.addFilter("jsonify", (content) => {
    return JSON.stringify(content, null, 2);
  });

  /**
   * getActiveMenuItem
   * Determines the most specific active menu item based on the current page URL.
   * It checks for exact matches first, then section matches, and returns the longest matching path.
   * @param {Array} menuItems - Array of menu item objects with 'link' properties.
   * @param {string} pageUrl - The current page URL.
   * @returns {string} - The link of the most specific active menu item, or an empty string if none match.
   */
  eleventyConfig.addFilter("getActiveMenuItem", (menuItems, pageUrl) => {
    if (!menuItems || !pageUrl) return "";

    // Helper to ensure URLs start with a slash for consistent comparison
    const normalize = (url) => {
      if (!url.startsWith('/')) url = '/' + url;
      return url;
    };

    const currentUrl = normalize(pageUrl);

    // 1. Find all items that are potential matches
    const matches = menuItems.filter(item => {
      const itemUrl = normalize(item.link);
      
      // Match A: Exact Match (e.g., "/about" == "/about")
      if (currentUrl === itemUrl) return true;
      
      // Match B: Section Match (e.g., Current "/projects/app" starts with Item "/projects/")
      // We ensure the item path ends with '/' to avoid partial word matches (like /project matching /projection)
      const dirUrl = itemUrl.endsWith('/') ? itemUrl : itemUrl + '/';
      return currentUrl.startsWith(dirUrl);
    });

    // 2. If no matches found, return empty
    if (matches.length === 0) return "";

    // 3. The Logic Fix: Sort by length descending. 
    // The specific page link ("/projects/contribute/") is longer than the parent link ("/projects/").
    // By picking the longest one, we highlight the specific page and ignore the parent.
    matches.sort((a, b) => b.link.length - a.link.length);

    return matches[0].link;
  });

  // Usage: {{ 'read_more' | t(page.lang) }}
  eleventyConfig.addFilter("t", function(key, lang = "en") {
    
    // Safety check: Does key exist?
    if (!translations[key]) {
      console.warn(`Missing translation key: ${key}`);
      return key; // Fallback to printing the key name
    }
    
    // Safety check: Does language exist? Fallback to English.
    return translations[key][lang] || translations[key]["en"];
  });

};