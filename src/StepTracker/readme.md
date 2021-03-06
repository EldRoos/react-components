---
title: Step Tracker
componentid: component-steptracker
variantid: default
guid: 'steptracker-guid-default-component-react'
---

## Element name
```javascript
Name: Step Tracker Component
Module: "StepTracker"
Selector: "<StepTracker/>"
Import: "@sebgroup/react-components/dist/StepTracker"
Type: UI Component
```

## Element Information 
This React component supports customization and configurations. The component name is `StepTracker` and the selector is `<StepTracker/>`.

## Basic use
```html
<StepTracker
      step={valueObj}
      list={stepTrackerListObj}>
</StepTracker>
```

## Properties
These are the current available properties:

| Property       | Type                      | Description                                                                            |
| -------------- | ------------------------- | -------------------------------------------------------------------------------------- |
| className?     | `string`                  | Custom class                                                                           |
| id?            | `string`                  | Element id                                                                             |
| labelPosition? | `string`                  | Label position<sup>1</sup> (defaut: `bottom` for `horizontal`, `right` for `vertical`) |
| list           | `Array<string>`           | List of steps (titles)                                                                 |
| onClick?       | `(index: number) => void` | onClick event, passes the array index of the clicked step                              |
| orientation?   | `string`                  | Tracker orientation (default: `horizontal`)                                            |
| step           | `number`                  | Current step (value)                                                                   |
| useNumbers?    | `boolean`                 | Use numbers for each step                                                              |

## Footnote
1. Label positions supported `top` and `bottom` for `horizontal` orientation, `left` and `right` for `vertical` orientation.
