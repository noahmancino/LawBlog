---
title: "Why I switched to Tailwind"
date: 2023-07-10
excerpt: "Utility-first CSS frameworks often face skepticism, but the productivity gains are undeniable once you get past the initial learning curve. In this post, I discuss my journey away from BEM and SASS towards a more composable, rapid development workflow provided by Tailwind CSS."
---

Utility-first CSS frameworks often face skepticism, but the productivity gains are undeniable once you get past the initial learning curve. In this post, I discuss my journey away from BEM and SASS towards a more composable, rapid development workflow provided by Tailwind CSS.

## The Problem with BEM

BEM (Block Element Modifier) gave us a naming convention that solved specificity wars. But it also gave us class names like `.card__header--highlighted-active`, and stylesheet files that grew endlessly alongside our component trees.

The core issue: **you're maintaining two parallel structures** — your HTML and your CSS — and keeping them in sync becomes increasingly painful as a project scales.

## What Tailwind Gets Right

Tailwind's insight is that most CSS you write is not reusable. You write `margin-top: 1.5rem` once for one specific element. Why give it a name? Why put it in a separate file?

```html
<div class="mt-6 p-4 bg-white rounded-lg shadow-sm">
  <h2 class="text-xl font-semibold mb-2">Title</h2>
  <p class="text-gray-600 leading-relaxed">Content here.</p>
</div>
```

Every style decision is visible right where the element is defined. No context switching. No hunting through stylesheets.

## When Tailwind Is Wrong

It's not universally better. Long-form prose styling, complex animations, and highly dynamic themes are all cases where traditional CSS or CSS-in-JS solutions still shine. The key is knowing when to reach for which tool.
