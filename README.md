# Ordent Component Template

## Disclaimer

before started to using this package, better understand atomic concept design
[Atomic Design Concept](https://atomicdesign.bradfrost.com/chapter-2/) to view documentation.

## Generator Component

Project Generator - Micro Generator framework that makes it easy for an entire team to create component or template filed with a level of uniformity

### Getting Started

Install plop-generator

```bash
npm i -g @ordent/generator

or

yarn add -g @ordent/generator
```

### Usage without custom cli command

```bash
// package.json

{
  "script" : {
    "plop" : "./node_modules/@ordent/generator/bin/cli.js"
  }
}
```

and then run `npm run plop` or `yarn plop`


## Add New Component or Template, following step below this

1. understand atomic design concept
2. create new folder in folder `src/stories`
3. create component based on extension `tsx` by example `label.tsx`
4. create file `stories` by example `Label.stories.ts`
5. and then run `npm run storybook` or `yarn storybook`

every after make story component don't forget add to folder `plop-template` with format `.hbs`
