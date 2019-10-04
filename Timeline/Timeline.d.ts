import * as React from "react";
import "./timeline-style.scss";
export interface TimelineListItem {
    title: string;
    time: string;
    desc?: string;
}
declare type TimelineDirection = "vertical" | "horizontal";
export interface TimelineProps {
    className?: string;
    direction?: TimelineDirection;
    id?: string;
    list: Array<TimelineListItem>;
    onClick?: (index: number) => void;
}
export declare const Timeline: React.FunctionComponent<TimelineProps>;
export {};
