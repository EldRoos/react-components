import * as React from "react";
export interface RatingProps {
    className?: string;
    colors?: [string, string];
    disabled?: boolean;
    iconHeight?: number;
    iconWidth?: number;
    id?: string;
    initialValue?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    tooltipList?: Array<string>;
    useHollow?: boolean;
}
export declare const Rating: React.FunctionComponent<RatingProps>;
