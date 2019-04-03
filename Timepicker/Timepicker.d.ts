import * as React from "react";
import "./time-picker-style.scss";
export interface TimepickerValue {
    hours: number;
    minutes: number;
    dayperiod: TimepickerDayperiodTypes;
}
export declare const enum TimepickerDayperiodTypes {
    AM = "AM",
    PM = "PM"
}
declare const enum TimerStepperTypes {
    Increment = "INCREMENT",
    Decrement = "DECREMENT"
}
declare const enum TimerStepperContext {
    Hours = "HOURS",
    Minutes = "MINUTES",
    Dayperiod = "DAYPERIOD"
}
interface TimepickerProps {
    value: TimepickerValue;
    onChange: (value: TimepickerValue) => any;
    name: string;
    className?: string;
}
export declare class Timepicker extends React.Component<TimepickerProps, any> {
    constructor(props: any);
    handleClick(context: TimerStepperContext, type: TimerStepperTypes, currentValue: TimepickerValue): TimepickerValue;
    handleChange(context: TimerStepperContext, value: number, currentValue: TimepickerValue): TimepickerValue;
    render(): JSX.Element;
}
export {};