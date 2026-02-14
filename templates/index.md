---
layout: default
title: Open Artifacts 11ty Starter
eleventyNavigation:
  key: home
permalink: /index.html
---
{% from "macros/hero.njk" import hero %}
{% set options = {
  dark: true,
  titleText: "Welcome to the Open Artifacts 11ty Starter",
  subtitleText: "This starter template includes everything you need to quickly set up an Open Artifacts project website just like this one using Eleventy (11ty) as the static site generator.",
  buttonText: "Learn More About This Project",
  buttonLink: "/project/"
} %}
{{ hero(options) }}

{% section %}

## What Is This?

This site is a minimal starting point for an {% hilite "**Open Artifacts project**", "bg-primary-100" %}—something made to be shared, remixed, and improved over time. Whether you're documenting a local solution, a creative method, or a community idea, this starter helps you:

- Publish your idea as a clean, fast-loading site
- Invite others to read it, remix it, and contribute
- Ensure that your idea can live on even if you step away

### What You Can Do With This Project

- 💡 Click on the link in the top banner to learn what an **Open Artifact** is.
- 🔧 Learn [how to use this starter template](/starter-kit/using-this-starter/) to make a website of your own!
- ✍️ Add content using simple Markdown files.
- 💬 Let others contribute to your project by submitting suggestions in GitHub Issues.
- 🌍 Publish instantly using Netlify or GitHub Pages.

### Who It's For

If you're a **cultural creator**—someone who wants to make the world better by sharing your knowledge, ideas, or designs—this template is for you. You don’t need to know how to code, but if you’re willing to learn a little, this will give you a running start.

### Ready to Try It?

→ Visit the {% externalLink "GitHub repository", "https://github.com/jimappleg8/open-artifacts-11ty-starter" %} or look at the [Starter Kit](/starter-kit/) to find out what you're getting into.

This project is part of the {% externalLink "Evolve the World", "https://evolvetheworld.org/" %} initiative.

{% endsection %}