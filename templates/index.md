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
  buttonLink: "/project/index.html"
} %}
{{ hero(options) }}

{% section %}

## What Is This?

This site is a minimal starting point for an **Open Artifacts project**—something made to be shared, remixed, and improved over time. Whether you're documenting a local solution, a creative method, or a community idea, this starter helps you:

- Publish your idea as a clean, fast-loading site
- Invite others to read it, remix it, and contribute
- Ensure it can live on even if you step away

### What You Can Do Here</h3>

- 💡 Learn what an <a href="#">Open Artifact</a> is</li>
- 🔧 <a href="https://github.com/jimappleg8/open-artifacts-11ty-starter">Fork this site</a> and make it your own</li>
- ✍️ Add content using simple Markdown files</li>
- 💬 Let others submit suggestions using a built-in form</li>
- 🌍 Publish instantly using Netlify or GitHub Pages</li>

### Who It's For</h3>

If you're a <strong>cultural creator</strong>—someone who wants to make the world better by sharing your knowledge, ideas, or designs—this template is for you. You don’t need to know code, but if you’re willing to learn a little, this will give you a running start.

### Ready to Try It?</h3>

→ Visit the [GitHub repository](https://github.com/jimappleg8/open-artifacts-11ty-starter)
→ Or follow the setup guide (coming soon)

Want to see real examples? Check out some [featured Open Artifacts](#).

This project is part of the [Evolve the World](https://evolvetheworld.org) initiative.

{% endsection %}