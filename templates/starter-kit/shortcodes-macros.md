---
layout: sidebar-page
title: Shortcodes and Macros
eleventyNavigation:
  key: Shortcodes and Macros
  parent: features
  order: 4
tags: starter-kit
navKey: starter-kit
---
{% section %}

{% pageHeader "Shortcodes and Macros", "", "Features" %}

Shortcodes and macros are features of the templating language Nunjucks. They allow us to provide you with some somewhat fancy formatting without you having to know HTML. They also make it so we don't have to mix HTML and Markdown in the same file, which makes Markdown editors like Obsidian happier.

This page is an overview of the shortcodes and macros that are available.

## {{ "{%" }} image %}

The Image shortcode uses the [Eleventy Image Plugin](https://www.11ty.dev/docs/plugins/image/) to create what are called "responsive images" for the website. You don't really need to know how it works; you just copy your image into `templates/_public/assets/images/` and set up the shortcode. The plugin will do the rest.

#### Usage

`{{ "{%" }} image "filename.jpg", "Alt text", "Caption", "alignment", "sizes" %}`

- **Caption** text can be HTML or Markdown.
- **Alignment** can be "left", "center", or "right". Default is "center".
- **Default size** is "100vw" (100% of viewport width). This will tell the plugin to generate several images optimized for mobile phones, tablets and desktop.

#### Example A

{% raw %}
```liquid
{% image "hannah-busing-Zyx1bK9mqmA-unsplash.jpg", "Community is important", "Photo by [Hannah Busing](https://unsplash.com/@hannahbusing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)", "center" %}
```
{% endraw %}

{% image "hannah-busing-Zyx1bK9mqmA-unsplash.jpg", "Community is important", "Photo by [Hannah Busing](https://unsplash.com/@hannahbusing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)", "center" %}
      

{% endsection %}