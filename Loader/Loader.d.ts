import * as React from "react";
import "./loader-style.scss";
export interface LoaderProps {
    className?: string;
    fullscreen?: boolean;
    id?: string;
    size?: LoaderSize;
    toggle: boolean;
}
export declare type LoaderSize = "lg" | "md" | "sm";
export declare const Loader: React.FunctionComponent<LoaderProps>;
