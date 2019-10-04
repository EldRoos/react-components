import * as React from "react";
import "./icon-style.scss";
export interface IconProps {
    className?: string;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    size?: number;
    src: JSX.Element;
    title?: string;
}
export declare const Icon: React.FunctionComponent<IconProps>;
