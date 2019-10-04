import * as React from "react";
import "./toggle.scss";
export interface ToggleProps {
    className?: string;
    disabled?: boolean;
    id?: string;
    label?: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reference?: React.RefObject<any>;
    value: boolean;
}
export declare const Toggle: React.FunctionComponent<ToggleProps>;
