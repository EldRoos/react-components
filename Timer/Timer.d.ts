import * as React from "react";
export interface TimerProps {
    callback?: () => void;
    className?: string;
    duration: number;
    id?: string;
}
interface TimerState {
    timer: string;
}
export declare class Timer extends React.Component<TimerProps, TimerState> {
    private innerInterval;
    constructor(props: TimerProps);
    startInterval(timeout: number): void;
    clearInterval(): void;
    convertMStoTime(value: number): string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: TimerProps): void;
    render(): React.ReactNode;
}
export {};
