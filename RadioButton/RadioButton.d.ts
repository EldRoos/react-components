import * as React from "react";
import "./radio-button-style.scss";
export interface RadioButtonProps<T = any> {
    className?: string;
    condensed?: boolean;
    description?: string;
    disabled?: boolean;
    group?: string;
    id?: string;
    inline?: boolean;
    label: string;
    name: string;
    onChange: (value: T, e?: React.ChangeEvent<HTMLInputElement>) => void;
    radioValue: T;
    reference?: React.RefObject<HTMLInputElement>;
    topLabel?: string;
    value: T;
}
declare const RadioButton: React.FunctionComponent<RadioButtonProps>;
export { RadioButton };
