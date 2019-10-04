import * as React from "react";
import "./stepper-style.scss";
export interface StepperProps {
    className?: string;
    disabled?: boolean;
    error?: string;
    id?: string;
    label?: string;
    max: number;
    min: number;
    name?: string;
    onDecrease: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onIncrease: (event: React.MouseEvent<HTMLButtonElement>) => void;
    reference?: React.RefObject<any>;
    value: number;
    warning?: string;
}
export declare const Stepper: React.FunctionComponent<StepperProps>;
