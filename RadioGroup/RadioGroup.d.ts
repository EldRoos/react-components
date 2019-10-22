import * as React from "react";
import "./radio-group-style.scss";
export interface RadioListModel<T = any> {
    description?: string;
    disabled?: boolean;
    label: string;
    value: T;
}
export interface RadioGroupProps<T = any> {
    className?: string;
    condensed?: boolean;
    disableAll?: boolean;
    id?: string;
    inline?: boolean;
    label?: string;
    list: Array<RadioListModel<T>>;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: T;
}
export declare const RadioGroup: React.FunctionComponent<RadioGroupProps>;
