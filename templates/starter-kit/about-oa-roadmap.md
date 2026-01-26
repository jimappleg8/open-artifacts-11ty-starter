---
layout: sidebar-page
title: About OA Roadmap Files
eleventyNavigation:
  key: Roadmap API
  parent: features
  order: 4
tags: starter-kit
navKey: starter-kit
---
{% section %}

# About OA Roadmap Files

The [Open Artifacts Hub](https://openartifacts.com) is a search engine that helps cultural creators find Open Artifacts that they can contribute to. By providing an `oa-roadmap.json` or `oa-roadmap.yaml` file at the root of your website, you can communicate current information to those creators about what kind of help you need.

To make things as simple as possible, we have created a JSON Schema (Draft 7 compatible) that defines how the oa-roadmap files need to be formatted. You can find it at [openartifacts.org/schemas/roadmap.json](https://openartifacts.org/schemas/roadmap.json). With this schema, code editors like VS Code can provide autocomplete automatically.

## Why this Schema is Powerful

This schema is designed to be flexible: it supports the "simple" mode (tasks as just a list of strings) that we designed for your starter, but it also allows for a "detailed" mode (tasks as objects) if a maintainer wants to add tags like difficulty or skills later for the Hub to filter by.

1. Hybrid Task Support (anyOf):

  - Simple: A maintainer can just write "Fix the typo" (a string).

  - Detailed: A maintainer can write {"description": "Fix the typo", "difficulty": "Good First Issue"}.

  - The Hub can handle both, but you lower the barrier to entry for new maintainers.

2. Enforced Enums:

- The status field is locked to specific values (Planned, In Progress, etc.). This ensures that when your Hub displays a "Status" filter, you don't end up with 50 variations like "doing it", "wip", "started", etc.

## How to use this in VS Code

If you include this schema in your starter project, VS Code will give you IntelliSense (autocomplete) while they edit their roadmap.json or roadmap.yaml.

For `roadmap.json`: Add the `$schema` key at the top of the file:

### JSON
```
{
  "$schema": "./schemas/open-artifacts-roadmap.schema.json",
  "project": "My Awesome Artifact",
  ...
}
```
For roadmap.yaml: Add a comment at the top of the file:

### YAML
```
# yaml-language-server: $schema=./schemas/open-artifacts-roadmap.schema.json

project: My Awesome Artifact
roadmap:
  - title: Phase 1
    status: Planned
    tasks:
      - Do the thing
```

{% endsection %}