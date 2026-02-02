---
layout: sidebar-page
title: The Starter Kit
eleventyNavigation:
  key: The Starter Kit
  parent: starting
  order: 1
tags: starter-kit
navKey: starter-kit
---
{% section %}

{% pageHeader "About the Starter Kit", "These pages are to help you get started creating your Open Artifacts project right away." %}

This starter template is designed to quickly set you up with the skeleton of an open artifacts project. Our goal is to give you what you need without getting in your way. This section can easily be hidden from your website, but the files will stay in place so that you can use these markdown files as examples to build your own pages.

To remove/hide them, you just need to edit the `templates/_data/site.js` file. Change the `showStarterKit` variable to `false` and you'll be all set. The menu item and the pages will no longer display on your website.

```js
showStarterKit = false,  // set to true by default
```

{% endsection %}