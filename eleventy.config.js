import YAML from "yaml";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImagePlugin } from "@11ty/eleventy-img";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import filter11tyPlugin from "./src/11ty/filter11tyPlugin.js";
import shortcode11tyPlugin from "./src/11ty/shortcode11tyPlugin.js";
import tailwind11tyPlugin from "./src/11ty/tailwind11tyPlugin.js";

export default async function (eleventyConfig) {

  // Custom 11ty plugins that consolidate a bunch of config options
  eleventyConfig.addPlugin(filter11tyPlugin);
  eleventyConfig.addPlugin(shortcode11tyPlugin);
  eleventyConfig.addPlugin(tailwind11tyPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyImagePlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy everything from the templates/_public/ folder to the output folder
  eleventyConfig.addPassthroughCopy({ "templates/_public": "/" });

  // Copy in the PrismJS theme we use for syntax highlighting
  eleventyConfig.addPassthroughCopy({ 
    "node_modules/prismjs/themes/prism-okaidia.min.css": "/assets/styles/prism-okaidia.min.css" 
  });

  // Allow using YAML files for data
  eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));

};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: 'templates',
    data: '_data',
    includes: '_includes',
    layouts: '_layouts',
    output: '_site'
  }
};