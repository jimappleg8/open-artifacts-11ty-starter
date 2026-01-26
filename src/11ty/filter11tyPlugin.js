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
   * isCurrentPageOrSection
   * Determines if a given link corresponds to the current page or its section.
   * Used for highlighting navigation menu items.
   */
  eleventyConfig.addFilter("isCurrentPageOrSection", (itemLink, pageUrl) => {
    // Safety check for empty URLs
    if (!itemLink || !pageUrl) return false;

    // 1. NORMALIZE LINKS
    // If the itemLink or the pageUrl ends with a "/", it is a directory; 
    // append "index.html" for comparison
    if (itemLink.endsWith('/')) {
      itemLink += 'index.html';
    }
    if (pageUrl.endsWith('/')) {
      pageUrl += 'index.html';
    }
    // If the itemLink doesn't start with a "/", add it for consistency
    if (!itemLink.startsWith('/')) {
      itemLink = '/' + itemLink;
    }

    // 2. EXACT MATCH (Always high priority)
    // This catches "Home" on the homepage, or exact pages like "How to Contribute"
    if (itemLink === pageUrl) {
      return true;
    }

    // 3. SECTION MATCH
    // Extract the directory from the menu link and check if the current page 
    // is inside that directory.
    // Example: "/project/about.html" becomes "/project/"
    const linkDirectory = itemLink.substring(0, itemLink.lastIndexOf('/') + 1);
    if (pageUrl.startsWith(linkDirectory) && linkDirectory !== "/") {
      return true;
    }
    return false;
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