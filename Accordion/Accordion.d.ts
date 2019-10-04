import * as React from "react";
import "./accordion-style.scss";
export declare type AccordionIconRotation = "deg-180" | "deg-180-counter" | "deg-90" | "deg-90-counter";
export interface AccordionContent {
    title?: string;
    desc?: string;
}
export declare type AccordionContentType = AccordionContent | Array<AccordionContent> | React.ReactNode;
export interface AccrodionListItem {
    header: string;
    subHeaderText?: string;
    content?: AccordionContentType;
}
export interface AccordionProps {
    className?: string;
    customIcon?: JSX.Element;
    customIconExpanded?: JSX.Element;
    iconPosition?: "left" | "right";
    iconRotation?: AccordionIconRotation;
    id?: string;
    list: Array<AccrodionListItem>;
    alternative?: boolean;
}
declare const Accordion: React.FunctionComponent<AccordionProps>;
export { Accordion };
