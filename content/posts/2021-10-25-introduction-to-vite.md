---
title: Introduction to Vite
subTitle: "Vite, a fast zero-config tool for developing front ends"
slug: introduction-to-vite
description: null
author: Sebastian Andersen
date: "2021-10-27T09:25:03.097Z"
lastmod: "2021-10-27T09:25:13.192Z"
draft: true
part: 1
series: Vite
tags:
  - series
  - vite
  - javascript
  - vanilla
categories: []
---

# Introduction

Vite is an awesome tool to use, when developing static websites in my experience, you get a zero-config environment with full support for ES Modules, giving you the comfort of code splitting, and out-of-the-box bundling.

## Initializing

!> Requires at least node@v12.0.0

To get started we need to initialize a project with Vite

```bash
npm init vite@latest
--OR--
yarn create vite
--OR--
pnpm create vite
```

In th wizard call your project whatever you wish to, and follow this list:

- Project name: whatever you wanna call it.
- Select a framework: vanilla
- Select a variant: vanilla(vanilla-ts, _if you're feeling adventurous_)

This will generate the base project for you, then you `cd [project folder]`, and run `install` with whichever package manager you used to _initialize_ your project with.

```bash
npm install
--OR--
yarn
--OR--
pnpm install
```
