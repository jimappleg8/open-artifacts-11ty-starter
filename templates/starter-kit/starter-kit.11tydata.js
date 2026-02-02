/**
 * This file contains computed data for the Starter Kit templates.
 * It uses the global site setting `showStarterKit` to control visibility.
 * You should not have to touch this file.
 */
export default {

  // Computed data to control visibility based on global site settings
  eleventyComputed: {
    
    // 1. Control the Permalink (The Visibility)
    permalink: (data) => {
      // 1. Access Global Data (The "Kill Switch")
      if (data.site.showStarterKit === false) {
        return false; // Does not write file to disk
      }
      
      // 2. Check for explicit Front Matter overrides
      // We check 'typeof' to see if the variable exists at all.
      // This allows 'false' (boolean) to pass through as a valid value.
      if (typeof data.permalink !== "undefined") {
        return data.permalink;
      }

      // 3. Default behavior (Clean URLs)
      return `/starter-kit/${data.page.fileSlug}/index.html`;
    },

    // 2. Control Collections (The Search/Sitemap)
    eleventyExcludeFromCollections: (data) => {
      // If the kit is hidden, force exclusion from collections
      if (data.site.showStarterKit === false) {
        return true;
      }
      
      // Otherwise, respect any individual file settings or default to false
      return data.eleventyExcludeFromCollections || false;
    }
    
  }
}