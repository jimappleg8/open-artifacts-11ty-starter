---
layout: sidebar-page
title: Starter Themes
eleventyNavigation:
  key: Themes
  parent: features
  order: 2
tags: starter-kit
navKey: starter-kit
---
{% section %}

# Starter Themes

*Themes are a simple way to change the look and feel of your Open Artifacts project. You can choose from a variety of pre-built themes or create your own custom theme to match your project's branding and style.*

---

## Using Pre-Built Themes

To use a pre-built theme, simply select the theme you want from the list of available themes in the project settings. Once selected, the theme will be applied to your entire project, changing the colors, fonts, and layout to match the chosen theme.

## Creating Custom Themes

If you want to create a custom theme, you can do so by creating a new CSS file and adding it to your project's assets. You can then reference this CSS file in your project's configuration to apply your custom styles.

## Available Themes

{% from "macros/swatches.njk" import swatches %}

### The "Open Artifacts" Default (Trust & Tech)

**Vibe:** Corporate, Clean, Trustworthy.

A reliable, professional look that works for almost any project. It feels like "software" and "stability."

{{ swatches("blue", "indigo", "slate", "sky", "amber") }}

### The "Evolve" Theme (Nature & Growth)

**Vibe:** Organic, Calming, Earthy.

Perfect for sustainability, biology, or community gardening projects.

{{ swatches("emerald", "teal", "stone", "lime", "orange") }}

### The "Disruptor" Theme (Innovation & Boldness)

**Vibe:** Modern, Electric, Aggressive.

High energy. Good for crypto, radical social movements, or cutting-edge tech.

{{ swatches("violet", "fuchsia", "zinc", "indigo", "rose") }}

### The "Sea Breeze" Theme (Health & Wellness)

**Vibe:** Clean, Peaceful, Light.

Soft and approachable. Great for non-profits, healthcare, or education.

{{ swatches("cyan", "sky", "neutral", "teal", "yellow") }}

### The "Maker" Theme (Industrial & pragmatic)

**Vibe:** Utilitarian, Stark, Strong.

Serious and functional. Good for hardware projects, blueprints, or manufacturing.

{{ swatches("slate", "zinc", "gray", "blue", "orange") }}

### The "Community" Theme (Social & Warm)

**Vibe:** Friendly, Urgent, Human.

Inviting and energetic. Good for local meetups, food banks, or art collectives.

{{ swatches("orange", "amber", "stone", "teal", "red") }}

### The "Royal" Theme (Luxury & Heritage)

**Vibe:** Expensive, Serious, Academic.

Deep and serious. Good for legal, historical, or high-value artifact projects.

{{ swatches("indigo", "purple", "gray", "violet", "yellow") }}

### The "Bubblegum" Theme (Playful & Creative)

**Vibe:** Pop-art, Loud, Fun.

Fun and non-traditional. Good for art projects, youth coding camps, or festivals.

{{ swatches("pink", "rose", "neutral", "purple", "yellow") }}

## Conclusion

Theming is a powerful way to customize the appearance of your Open Artifacts project. Whether you choose a pre-built theme or create your own, theming allows you to create a unique and engaging experience for your users.

{% endsection %}