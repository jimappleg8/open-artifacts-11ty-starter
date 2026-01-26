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

## Github

Github is one of several hosting services for Git repositories. Git is a code management software sometimes called a versioning system. It's designed to allow multiple people to make changes to a single code base without the changes I'm making accidentally overwriting your changes. Websites like this one are code, so Git works well to manage website files.

## Netlify

Netlify is a website hosting service that specializes in JAMStack websites. It can monitor your Github repository and when it sees a change it can automatically update your live website.

## Eleventy

Eleventy is the main tool that builds the website. It uses a number of different templating systems, but we're using Nunjucks. It also includes several plugins that we are using.

## Tailwind

Tailwind CSS is a CSS Framework that makes it simpler to format pages and make the site responsive. [Documentation](https://tailwindcss.com/docs/installation/using-vite).

### Tailwind Components

Components are bits of markup that you can use to build section of you web pages.

The Starter template uses the Tailwind CSS framework, and there are several places where you can find free Tailwind components:

- [Creative Tim: TW Components](https://www.creative-tim.com/twcomponents/)

### Icons

Tailwind doesn't have a set of built-in icons, but there are plenty of sources for these:

- [Heroicons](https://heroicons.com/outline)



{% endsection %}