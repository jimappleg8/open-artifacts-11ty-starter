---
layout: sidebar-page
title: The Open Artifacts Network
eleventyNavigation:
  key: The OA Network
  parent: features
  order: 4
tags: starter-kit
navKey: starter-kit
---
{% section %}

{% pageHeader "The Open Artifacts Network", "Open artifacts projects are independent and decentralized, so we have tools to help us connect our projects together into what we call the Open Artifacts Network. This starter automatically generates two data files that can connect your project into this network." %}

The [Open Artifacts Hub](https://openartifacts.com) is a search engine that helps cultural creators find Open Artifacts that they can contribute to. By providing information about your project and the tasks you need help with, you can help cultural creators find you and help you move your project forward.

## The `oa-roadmap.json` File

You define the work you need done (your roadmap) in a YAML data file at `templates/_data/roadmap.yaml`. YAML is a data file format that is more human-readable than alternatives like XML or JSON. To learn more about it, take a look at [this video on YouTube](https://www.youtube.com/watch?v=BEki_rsWu4E).

By providing an `oa-roadmap.json` or `oa-roadmap.yaml` file at the root of your website, you can communicate current information to those creators about what kind of help you need.

## The `open-artifact.json` file

The settings you provide in the `templates/_data/site.js` file are used to generate a second file that tells the Open Artifact Hub about your project in general. Comments in the `site.js` file should help you fill that out properly.

## Telling the Open Artifacts Hub about your project.

If the Open Artifacts Hub search engine knows about your project, the data in the `open-artifact.json` and `oa-roadmap.json` files will override any data stored on the Hub website. In that way, you can control how the Hub website presents your project.

If the Open Artifacts Hub search engine doesn't know about your project, you will need to tell it about it. You can either submit an issue in the hub's Github Issues section with information about your project, or you can add the data yourself to the database by submitting a change request. More information is available in the Open Artifacts Hub website.

{% endsection %}