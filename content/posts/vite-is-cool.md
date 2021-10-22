---
title: Building a Very Simple Website using Vite
subTitle: Vite makes bundling super easy.
date: '2021-10-20T12:43:04.952Z'
author: Sebastian Andersen
draft: true
lastmod: '2021-10-21T10:24:03.047Z'
slug: building-simple-website-vite
description: 'Using Vite as a build or bundling tool for Front-End applications is a great way to use modern tech, with zero config. '
---

# Introduction
Vite is kind of a cool tool, to develop static
websites that will be bundled, & allow ES2015+
style modules.


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
