import * as React from "react";
import "./breadcrumb-style.scss";
export interface BreadcrumbProps {
    className?: string;
    id?: string;
    list: Array<string | React.ReactNode>;
    onClick?: (i: number, e?: React.MouseEvent<HTMLLIElement>) => void;
}
export declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
