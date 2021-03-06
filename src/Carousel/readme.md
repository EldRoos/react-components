---
title: Carousel
componentid: component-carousel
variantid: default
guid: "carousel-guid-default-component-react"
---

## Element name

```javascript
Name: Carousel Component
Component: "Carousel"
Selector: "<Carousel/>"
Import: "@sebgroup/react-components/dist/Carousel"
Type: UI Component
```

## Element information

This React component is based on `react-slick`. Supports customization and configurations. The component name is `Carousel` and the selector is `<Carousel/>`.

## Basic use

```html
<Carousel list="{this.state.list}" />
```

## Properties

These are the current available properties:

| Property             | Type                               | Description                                                                        |
| -------------------- | ---------------------------------- | ---------------------------------------------------------------------------------- |
| afterChange?         | `(index: number) => void`          | Callback triggered after carousel is changed                                       |
| autoPlay?            | `boolean`                          | Enable auto change mode. default is `false`                                        |
| autoPlaySpeed?       | `number`                           | Autoplay speed in milliseconds (default: 3000)                                     |
| backgroundPlacement? | `string`                           | CSS background-placement property, default is `cover`                              |
| className?           | `string`                           | Element class                                                                      |
| height?              | `number`                           | Height of carousel                                                                 |
| id?                  | `string`                           | Element id                                                                         |
| infinite?            | `boolean`                          | Coupled with autoPlay, enables the carousel to loop infinitely. default is `false` |
| list                 | `Array<CarouselItem>` <sup>1</sup> | An array of `CarouselItem`                                                         |

## Reference

This component is a wrapper around [react-slick](https://www.npmjs.com/package/react-slick) which uses [slick-carousel](https://www.npmjs.com/package/slick-carousel)

## Footnote

1. `list` items has an exported interface named `CarouselItem`

```typescript
interface CarouselItem {
    title?: string;
    desc?: string;
    image?: string;
}
```
