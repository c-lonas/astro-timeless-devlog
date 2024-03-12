---
layout: ../../layouts/markdownPassLayout.astro

entryIndex: 12
title: 'Nuxt'
description: "Nuxt"
pubDate: '3/11/2024'
thumbnail: "/src/assets/images/coding/t2a2-stack/t2a2-example-thumbnail.png"
endResultGif: "/src/assets/images/coding/t2a2-stack/AstroTailwindAlpine.gif"
tags: ["nuxt"]
category: ["coding", "webdev"]
featured: 'false'
---



<br>

## Introduction



Prerequisites:
1. Node.js v18.0.0+

Steps


1. Create a new nuxt project

Run the following command with the name of your project, and answer 
```bash
npx nuxi@latest init <project-name>
```

cd into your project, and run `npm install` 

2. Add nuxt ui components

```bash
npm i @nuxt/ui
```

In your `nuxt.config.ts` file, add the `@nuxt/ui` module like so:

```js
export default defineNuxtConfig({
  modules: ['@nuxt/ui']
})
```

This automatically installs the nuxtjs/tailwindcss module for you. Test this by modifying your app.vue file. Delete the `NuxtWelcome` element and replace it with a `h1` element, and give it a tailwind utility class like so:

```js
<template>
  <div>
    <h1 class=" text-blue-500 ">Hello World!</h1>
  </div>
</template>
```

Run `npm run dev`, and the text should change color.