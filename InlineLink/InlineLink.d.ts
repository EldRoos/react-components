import * as React from "react";
import "./inline-link-style.scss";
export interface InlineLinkProps {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    onClick?: () => void;
}
export declare const InlineLink: React.NamedExoticComponent<InlineLinkProps>;
