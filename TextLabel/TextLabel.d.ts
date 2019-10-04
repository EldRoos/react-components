import * as React from "react";
import "./text-label-style.scss";
export interface TextLabelProps {
    className?: string;
    id?: string;
    label?: string;
    value: string | number;
}
export declare const TextLabel: React.FunctionComponent<TextLabelProps>;
