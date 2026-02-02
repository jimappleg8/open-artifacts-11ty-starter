---
layout: sidebar-page
title: Using This Starter
eleventyNavigation:
  key: Using This Starter
  parent: starting
  order: 3
tags: starter-kit
navKey: starter-kit
---
{% section %}

{% pageHeader "Using This Starter" %}

To use this starter, you will need to create a version of it in your own Github account. There are several ways to do this, and because I have never found Git to be "intuitive" in how it works, I'm going to explain my recommended method here in detail.

The method I suggest is what you might call the "Clone and Rename" method. If you follow these steps, you'll have a clean copy of the starter files ready to customize to your own needs. As a bonus, your copy will still be aware of where it came from, so it will be easy for you to pull down updates from the original.

## Step 1: Clone the Starter (The "Parent")

Cloning means that you are going to create a copy of the project files on your computer. This downloads the starter along with its full history.

```bash
git clone https://github.com/jimappleg8/open-artifacts-11ty-starter.git my-new-website
cd my-new-website
```

## Step 2: Rename the Remote

Right now, `origin` points to your Starter repo. You don't want to push your specific website content back to the Starter. So, we rename that connection to `upstream` (a standard name for "the source I read updates from").

```bash
git remote rename origin upstream
```

## Step 3: Add Your New "Home"

Create a new empty repository on GitHub for your specific project (e.g., my-new-website). Then link it as the new origin.

```bash
git remote add origin https://github.com/jimappleg8/my-new-website.git
```

## Step 4: Push Your Project 

Now you push the starter code to your new repo.

```bash
git push -u origin main
```

You are now ready to make the website your own.

# Contributing to this project

Have you fixed a bug in your own website that helps the Starter? Please do not submit a Pull Request directly from your website repository. It likely contains your personal content and history.

Instead:

1. Fork the open-artifacts-starter on GitHub.
2. Clone a fresh copy of your fork to a separate folder.
3. Apply your fix to that clean copy.
4. Submit the Pull Request from there.

For more detail, visit [How to Contribute](/project/how-to-contribute/).

{% endsection %}