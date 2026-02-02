---
layout: sidebar-page
title: Our Toolbox
eleventyNavigation:
  key: Our Toolbox
  parent: technical
  order: 1
tags: starter-kit
navKey: starter-kit
---
{% section %}

{% pageHeader "Our Toolbox", "Websites are complicated because so many tools and technologies have to work seamlessly together. We carefully chose the tools we used to build this website in order to keep it as simple as possible." %}

This website is simpler than most because it is static. It's made up of a bunch of files and some software that assembles those files into a complete website. Once you know what files to type into, it's pretty straight-forward. That also makes it easier for people around the world to contribute to your project.

## Github (Code Management)

Github is one of several hosting services for Git repositories. Git is a code management software sometimes called a versioning system. It's designed to allow multiple people to make changes to a single code base without the changes I'm making accidentally overwriting your changes. Websites like this one are code, so Git works well to manage website files.

## Netlify (Website Hosting)

Netlify is a website hosting service that specializes in JAMStack websites. It can monitor your Github repository and when it sees a change it can automatically update your live website.

## Node JS (Runtime Environment)

Javascript was originally only able to run inside a web browser, but Node.js came along and made it possible to run Javascript code on your computer or a server. Eleventy (see below) is written in Javascript and uses Node to run.

## Eleventy (Static Site Generator)

Eleventy is the main tool that builds the website. It uses a number of different templating systems, but we're using Nunjucks. It also includes several plugins that we are using. [Documentation](https://11ty.dev)

## Markdown (Markup Language)

To help ensure that you're not bogged down trying to learn and write in HTML, we recommend that all content for your Open Artifact be written using Markdown. Markdown is a simplified way to indicate the structure of your pages without using HTML. [Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## Nunjucks (Templating Engine)

Eleventy works by processing templates into pages. Nunjucks provides it own templating language that makes it possible for you to add limited logic to your templates. [Documentation](https://mozilla.github.io/nunjucks/templating.html)

## Tailwind (CSS Framework)

Tailwind CSS is a CSS Framework that makes it simpler to format pages and make the site responsive. [Documentation](https://tailwindcss.com/docs/installation/using-vite).

## Eleventy/Nunjucks Shortcodes and Macros

In order to give you some flexibility in the design of your web pages without cluttering up your markdown pages with HTML and CSS, we've created page elements (sometimes called components) as shortcodes and macros. You will see these used in these Starter Kit pages, but here's an example: the `pageHeader` code adds the header and overview text at the top of pages:

{% set shortcode = "{% pageHeader \"Page Title\", \"Short paragraph that goes below it.\" %}" %}

```js
{{ shortcode | safe }}
```

This gets converted to HTML with Tailwind CSS classes like this:

```html
{% pageHeader "Page Title", "Short paragraph that goes below it." %}
```


{% endsection %}