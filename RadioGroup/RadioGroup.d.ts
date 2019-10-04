import * as React from "react";
import "./radio-group-style.scss";
export interface RadioListModel {
    description?: string;
    disabled?: boolean;
    group: string;
    label: string;
    value: any;
}
export interface RadioGroupProps {
    className?: string;
    condensed?: boolean;
    disableAll?: boolean;
    id?: string;
    inline?: boolean;
    label?: string;
    list: Array<RadioListModel>;
    name?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
}
export declare const RadioGroup: React.FunctionComponent<RadioGroupProps>;
