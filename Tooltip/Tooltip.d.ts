import * as React from "react";
import "./tooltip-style.scss";
export interface TooltipMessageGroupItem {
    title?: string;
    message: string;
}
interface TooltipState {
    toggle: boolean;
}
export interface TooltipProps {
    className?: string;
    customSvg?: any;
    id?: string;
    message?: string;
    messageGroup?: Array<TooltipMessageGroupItem>;
    onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
    position?: string;
    theme?: string;
    title?: string;
    triggerOnHover?: boolean;
    width?: number;
}
export declare class Tooltip extends React.Component<TooltipProps, TooltipState> {
    constructor(props: TooltipProps);
    /**
     * Forces the tooltip to dismiss
     * @param {React.MouseEvent<HTMLDivElement>} e Mouse event
     */
    forceDismiss(e?: React.MouseEvent<HTMLDivElement>): void;
    /** Forces the tooltip to show */
    forceShow(): void;
    isPositioned(search: string): boolean;
    toggleTooltip(state?: boolean, e?: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
export {};
