import * as React from "react";
import "./text-label-style.scss";
export interface TextLabelProps {
    className?: string;
    id?: string;
    label?: string | React.ReactNode;
    value: string | number | React.ReactNode;
}
export declare const TextLabel: React.FunctionComponent<TextLabelProps>;
