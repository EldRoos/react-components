import * as React from "react";
import "./progress-bar-style.scss";
export interface ProgressBarProps {
    className?: string;
    id?: string;
    showProgress?: boolean;
    value: number;
}
export declare const ProgressBar: React.FunctionComponent<ProgressBarProps>;
