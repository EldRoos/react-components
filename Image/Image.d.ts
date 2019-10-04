import * as React from "react";
import "./image-style.scss";
export interface ImageProps {
    alt?: string;
    ariaDescribedBy?: string;
    ariaLabel?: string;
    className?: string;
    height: string;
    id?: string;
    onClick?: (event: any) => void;
    onLoad?: (event: any) => void;
    src: string;
    useImgTag?: boolean;
    width: string;
}
export declare const Image: React.FunctionComponent<ImageProps>;
