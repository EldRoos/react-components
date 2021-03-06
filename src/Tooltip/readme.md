---
title: Tooltip
componentid: component-tooltip
variantid: default
guid: "tooltip-guid-default-component-react"
---

## Element name

```javascript
Name: Tooltip Component
Component: "Tooltip"
Selector: "<Tooltip/>"
Import: "@sebgroup/react-components/dist/Tooltip"
Type: UI Component
```

## Element information

This React component supports customization and configurations. The component name is `Tooltip` and the selector is `<Tooltip/>`. this component can recieve custom svg as its icon.

## Basic use

```html
<Tooltip
    message="Tooltip message could be long, therefore, controlling the position and width is important"
    position="right"
    width="{200}"
/>
```

## Properties

These are the current available properties:

| Property        | Type                                                 | Descrition                                                                                    |
| --------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| className?      | `string`                                             | Custom class                                                                                  |
| customSvg?      | `any`                                                | A direct svg code or a component with svg                                                     |
| id?             | `string`                                             | Element id                                                                                    |
| message?        | `string`                                             | Description                                                                                   |
| messageGroup?   | `Array<TooltipMessageGroupItem>`<sup>1</sup>         | Multiple titles/descriptions                                                                  |
| onClick         | `(event?: React.MouseEvent<HTMLDivElement>) => void` | click action                                                                                  |
| position?       | `string`                                             | Css style positions: top/bottom/left/right                                                    |
| theme?          | `string`                                             | Based on SEB predefined colors. (default: `'default'`)<sup>2</sup>                            |
| title?          | `string`                                             | Title                                                                                         |
| triggerOnHover? | `boolean`                                            | Enables the ability to show the tooltip on hover, click will be disabled (default: `'false'`) |
| width?          | `number`                                             | Width of the text holder                                                                      |

## Public Methods

These are the public methods accessible via [React ref](https://reactjs.org/docs/refs-and-the-dom.html)

| Name         | Parameters | type                     | Description                        |
| ------------ | ---------- | ------------------------ | ---------------------------------- |
| forceDismiss | event?     | `MouseEvent`<sup>3</sup> | Forces the tooltip to dismiss once |
| forceShow    |            |                          | Forces the tooltip to show once    |

##### Example usage of forceDismiss and ref. This example shows how to allow the tooltip to be dismissed when clicked outside

```javascript
const ExampleContainer: React.FunctionComponent = () => {
    myTooltip: Tooltip;

    dismissTooltip(e?: React.MouseEvent<HTMLDivElement>): void {
        const dismissableTooltip: HTMLElement = document.getElementById("dismissable-tooltip");
        if (event.target !== dismissableTooltip.firstChild) {
            myTooltip.forceDismiss(e);
        }
    }

    return (
        <div className="example-container" onClick={dismissTooltip}>
            <Tooltip
                message="Tooltip message"
                id="dismissable-tooltip"
                ref={(el: Tooltip) => {
                    this.myTooltip = el;
                }}
            />
        </div>
    );
};
```
* Place the `onClick` event on a higher parent if necessary so the listening would cover the full window

## Footnote

1. `messageGroup` items has an exported interface named `TooltipMessageGroupItem`

```typescript
interface TooltipMessageGroupItem {
      title?: string,
      message: string
}
```

2. Supported themes: `default`, `light`, `primary`, `warning`, `success`, `danger`, `purple`
3. Mouse event is used to determine if the clicked happened outside the tooltip to dismiss it. If you wanted to force it to dismiss regardless, you should not pass the event.
