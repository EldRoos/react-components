import * as React from "react";
import "./check-box-style.scss";
export interface CheckBoxProps {
    checked: boolean;
    className?: string;
    condensed?: boolean;
    description?: string;
    disabled?: boolean;
    id?: string;
    inline?: boolean;
    label: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reference?: React.RefObject<HTMLInputElement>;
    topLabel?: string;
}
declare const CheckBox: React.FunctionComponent<CheckBoxProps>;
export { CheckBox };
