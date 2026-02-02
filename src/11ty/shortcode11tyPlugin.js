import path from "path";
import fs from "fs";

export default function (eleventyConfig) {

  /**
   * button
   * Creates a styled button element.
   */
  eleventyConfig.addShortcode("button", function(text, url) {
    return `<a href="${url}" class="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300">${text}</a>`;
  });

  /**
   * section
   * Creates a section with optional variant styles and layout styles.
   */
  eleventyConfig.addPairedShortcode("section", function(content, variant = "default", style = "full") {
    
    // 1. DEFINE VALID CLASS MAPPINGS
    // This translates "abstract names" into "concrete classes"
    const styles = {
      "default": {
        bg: "bg-surface",         // Was 'bg-default' (broken)
        text: "text-ink",         // Was 'text-on-default' (broken)
        prose: "prose-default"    // Your custom utility
      },
      "primary": {
        bg: "bg-primary",
        text: "text-on-primary",
        prose: "prose-primary"
      },
      "primary-subtle": {
        bg: "bg-primary-subtle",
        text: "text-on-primary-subtle",
        prose: "prose-primary-subtle"
      },
      "secondary": {
        bg: "bg-secondary",
        text: "text-on-secondary",
        prose: "prose-secondary"
      },
      "secondary-subtle": {
        bg: "bg-secondary-subtle",
        text: "text-on-secondary-subtle",
        prose: "prose-secondary-subtle"
      },
      "accent-warm": {
        bg: "bg-accent-warm",
        text: "text-accent-warm",
        prose: "prose-accent-warm"
      },
      "accent-warm-subtle": {
        bg: "bg-accent-warm-subtle",
        text: "text-accent-warm-subtle",
        prose: "prose-accent-warm-subtle"
      },
      "accent-cool": {
        bg: "bg-accent-cool",
        text: "text-accent-cool",
        prose: "prose-accent-cool"
      },
      "accent-cool-subtle": {
        bg: "bg-accent-cool-subtle",
        text: "text-accent-cool-subtle",
        prose: "prose-accent-cool-subtle"
      }
    };

    // 2. GET THE CLASSES (Fallback to default if not found)
    const currentStyle = styles[variant] || styles["default"];

    if (style === "card") {
      return `
        <section class="max-w-4xl mx-auto px-6 mt-0 mb-6">
          <div class="rounded-2xl p-8 pt-1 ${currentStyle.bg} ${currentStyle.text}">
            <div class="prose max-w-none ${currentStyle.prose}">
              ${content}
            </div>
          </div>
        </section>
      `;
    }
    
    return `
      <section class="w-full py-2 md:py-4 ${currentStyle.bg} ${currentStyle.text}">
        <div class="max-w-3xl mx-auto px-6">
          <div class="prose max-w-none ${currentStyle.prose}">
            ${content}
          </div>
        </div>
      </section>
    `;
  });

  /**
   * pageHeader component
   * Creates a styled page header with title and optional subtitle.
   */
  eleventyConfig.addShortcode("pageHeader", function(title, subtitle = "") {
    return `<div class="space-y-4 md:mb-12">
        <h1 class="text-4xl font-bold tracking-tight text-ink">${title}</h1>
        ${subtitle ? `<p class="text-xl text-base-500 max-w-2xl">${subtitle}</p>` : ""}
      </div>`.replace(/( ){6}/g, "");  // This was added to make demo code look cleaner
  });

  /**
   * icon shortcode
   * Embeds an SVG icon from the /templates/_includes/icons/ directory.
   * Usage: {% icon "icon-name" "optional-tailwind-classes" %}
   */
  eleventyConfig.addShortcode("icon", function(iconName, className = "w-6 h-6") {
    // 1. Resolve the path to your icon folder
    const iconPath = path.join("./templates/_includes/icons", `${iconName}.svg`);
    
    // 2. Read the file
    let data = fs.readFileSync(iconPath, "utf8");
    
    // 3. Accessibility & Tailwind Cleanup
    // If the SVG has a hardcoded fill (SimpleIcons usually does), replace it with currentColor
    // This allows classes like 'text-red-500' to actually change the color.
    if (data.includes("fill=")) {
      data = data.replace(/fill="[^"]*"/g, 'fill="currentColor"');
    } else {
      // If no fill exists, add it to the opening tag
      data = data.replace("<svg", '<svg fill="currentColor"');
    }

    // 4. Inject the class names passed into the shortcode
    // We stick the class attribute right after the <svg start tag
    data = data.replace("<svg", `<svg class="${className}"`);

    return data;
  });

};