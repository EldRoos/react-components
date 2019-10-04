import * as React from "react";
import "./pagination-style.scss";
export interface PaginationProps {
    className?: string;
    firstText?: string;
    id?: string;
    lastText?: string;
    nextText?: string;
    offset?: number;
    onChange?: (value: number) => void;
    previousText?: string;
    size: number;
    useDotNav?: boolean;
    useFirstAndLast?: boolean;
    useTextNav?: boolean;
    value: number;
}
export declare const Pagination: React.FunctionComponent<PaginationProps>;
