---
title: 'Building a Very Simple Website using Vite'
subTitle: 'Vite makes bundling super easy.'
date: '2021-10-19'
author: 'Sebastian Andersen'
---

> Vite is kind of a cool tool, to develop static
> websites that will be bundled, & allow ES2015+
> style modules.

## Getting Started
### Soo getting started
To get started we need to initialize a project with Vite

> Requires at least node@v12.0.0

```js
const fish = ({yay}) => {
  return yay.replace(/a/, '');
};
console.log(fish({yay: 'what?'}));
```

```shell
npm init vite@latest
--OR--
yarn create vite
--OR--
pnpm create vite
```

starts the vite init wizard, go like this:
- Project name: whatever you wanna call it.
- Select a framework: vanilla
- Select a variant: vanilla(vanilla-ts, _if you're feeling adventurous_)
