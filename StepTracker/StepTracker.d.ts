import * as React from "react";
import "./step-tracker-style.scss";
export declare type StepTrackerLabelPosition = "right" | "left" | "bottom" | "top";
export declare type StepTrackerLabelOrientation = "horizontal" | "vertical";
export interface StepTrackerProps {
    className?: string;
    id?: string;
    labelPosition?: StepTrackerLabelPosition;
    list: Array<string>;
    onClick?: (index: number) => void;
    orientation?: StepTrackerLabelOrientation;
    step: number;
    useNumbers?: boolean;
}
export declare const StepTracker: React.FunctionComponent<StepTrackerProps>;
