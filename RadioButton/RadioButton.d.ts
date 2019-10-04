import * as React from "react";
import "./radio-button-style.scss";
export interface RadioButtonProps {
    className?: string;
    condensed?: boolean;
    description?: string;
    disabled?: boolean;
    group?: string;
    id?: string;
    inline?: boolean;
    label: string;
    name: string;
    onChange: (value: any, e?: React.ChangeEvent<HTMLInputElement>) => void;
    radioValue: any;
    reference?: React.RefObject<HTMLInputElement>;
    topLabel?: string;
    value: any;
}
declare const RadioButton: React.FunctionComponent<RadioButtonProps>;
export { RadioButton };
