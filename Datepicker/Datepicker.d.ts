import * as React from "react";
import "./date-picker-style.scss";
export interface DatepickerProps {
    calendarIcon?: JSX.Element;
    className?: string;
    clearable?: boolean;
    clearIcon?: JSX.Element;
    disabled?: boolean;
    error?: string;
    format?: string;
    id?: string;
    label?: string;
    locale?: string;
    maxDate?: Date;
    minDate?: Date;
    name: string;
    onChange: (value: Date) => void;
    placeHolder?: string;
    showLeadingZeros?: boolean;
    value: Date;
}
export declare const Datepicker: React.FunctionComponent<DatepickerProps>;
