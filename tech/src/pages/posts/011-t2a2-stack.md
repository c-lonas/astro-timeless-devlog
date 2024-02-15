---
layout: ../../layouts/markdownPassLayout.astro

entryIndex: 11
title: 'T2A2 Stack'
description: 
pubDate: ''
thumbnail: 
endResultGif: 
tags: ["UE5", "C++", "Core Movement"]
category: ["coding"]
featured: 'false'
---

Typescript

Astro

Tailwind

Alpine

<br>

## Introduction

Looking for a shiny new tech stack to try out for your next project? This is a fun one. The name is a play on the [T3 stack](https://create.t3.gg/), from which this stack takes some inspiration. Since the T3 stack is modular by nature (as is T<sup>2</sup>A<sup>2</sup>) and both the "T's" in this stack are also in T3, it might be fair to think of it is a T3 variation. But I think Next.js is pretty integral to T3, and swapping out the engine changes the character of the stack significantly.

In this post I'll give a brief explanation of the 'why', and then walk through setting up a simple project to cover the 'how'.

If you don't care about the 'why' and just want to follow along with bootstrapping the project, you can skip down to the [Getting Started](#getting-started) section.
All the code for this project is also available in a [GitHub repository](link-to-the-repo).

<br>

# The Goal

Lightweight | Efficient | Modular | Elegant | Declarative


## The Stack

# 🔒 [TypeScript](https://www.typescriptlang.org/)

Typesafety. Just do it.
Astro supports TypeScript out of the box, set yourself up for success by using it. Compiler errors are better than runtime errors.

# 🚀 [Astro](https://astro.build/)

Astro, a modern frontend framework, is the engine of the stack. Specializes in static site generation by default, but supports dynamic client-side interaction on an as-needed basis through an 'islands' model, loading javascript where (and only where) it is needed.

All the pieces of the stack have well-documented integration with Astro, facilitating a smooth developer experience.

# 🌀 [Tailwind](https://tailwindcss.com/)

It's remarkable how many problems Tailwind solves beyond just guiding you towards better styles. Time spent coming up with class names that are rarely re-used was a bigger time sink than I realized. Time spent organizing the stylesheet is something I didn't even realize I was doing until I stopped needing to do it. Tailwind syntax doesn't look pretty, but it makes it easier to create pretty webpages. Tailwind trades html files that look cleaner at first glance for an elegant, declarative workflow that is as easy to read as it is to write once you get the hang of it.

# 🗻 [Alpine](https://alpinejs.dev/)

Putting aside the fact that the Alpine.js website is blindingly-white and with no dark mode of which I'm aware, a clear sign it's a tool built by sociopaths, I think Alpine is criminally underrated. You don't need to import Home Depot every time you need to change a lightbulb- Alpine is the Swiss Army Knife you can carry around to get stuff done. Versatile, lightweight, elegant, it complements the stack perfectly. 👨‍🍳 💋

<br>

The whole is more than the sum of the parts. Taken together, this stack encourages a utility-first, declarative workflow that lets you avoid overhead without needing to constantly re-invent the wheel or clutter your codebase with boilerplate. Using Alpine and Tailwind together to add interaction and styles to your Astro components helps you to code your elements in the way that you want users to interact with them.


<br>

## Getting Started

# Step 1 - Create and Configure an Astro Project

This guide will aim to be sufficient, but if you run into difficulties that aren't covered here, the process is [well-documented](https://docs.astro.build/en/install/auto/) on astro's website.

This guide (and the documentation linked above) assumes you have node.js `v18.14.1` or higher already installed.

First, run this command to use Astro's cli to bootstrap the astro project. Note that while the fastest way to get up and running with Astro is to use one of Astro's templates, we'll be starting with a blank slate for the purposes of focusing on the T2A2 stack. 

```bash
# Using npm
npm create astro@latest
```

I selected an empty project, TypeScript, Strict, Initialize Dependencies, and a git repository.

![astroCreateSettings](/src/assets/images/coding/t2a2-stack/astro-create-settings.png)


This gives us a directory structure that looks like this

![initialAstroDirectoryTree](/src/assets/images/coding/t2a2-stack/astro-create-tree.png)
([rptree](https://github.com/night-cruise/rptree) is a nifty command line tool written in rust 🦀)

<br>

`index.astro` has some html/astro boilerplate, and in the body element, there's a single 

```html
<h1>Astro</h1>
``` 

And if we run the project like so:

```bash
npm run dev
```

we see a blank, unstyled webpage with the "Astro" heading.

I'll add a couple elements to the html so we have something to play with in the next steps

<br>

# Step 2 - Integrate Tailwind Styling


<br>

# Step 3 - Integrate Alpine 

<br>