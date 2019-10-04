import * as React from "react";
import "./slider-style.scss";
export declare type SliderTheme = "primary" | "inverted" | "success" | "danger" | "warning" | "purple";
export interface RangeSliderLabel {
    position: number;
    text: string;
}
export interface SliderProps {
    alwaysShowTooltip?: boolean;
    className?: string;
    disabled?: boolean;
    error?: string;
    id?: string;
    label?: string;
    labels?: Array<RangeSliderLabel>;
    max?: number;
    min?: number;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reference?: React.RefObject<any>;
    showTicks?: boolean;
    step?: number;
    theme?: SliderTheme;
    tooltipTheme?: SliderTheme;
    tooltipValue?: string;
    value: number;
}
declare const Slider: React.FunctionComponent<SliderProps>;
export { Slider };
