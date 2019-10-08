import * as React from "react";
import "./tooltip-style.scss";
export interface TooltipMessageGroupItem {
    title?: string;
    message: string;
}
interface TooltipState {
    toggle: boolean;
}
export declare type TooltipTheme = "default" | "light" | "primary" | "warning" | "success" | "danger" | "purple";
export declare type TooltipPosition = "top" | "bottom" | "left" | "right" | "top-right" | "top-left" | "bottom-right" | "bottom-left" | "left-top" | "left-bottom" | "right-top" | "right-bottom";
export interface TooltipProps {
    className?: string;
    customSvg?: React.ReactNode;
    id?: string;
    message?: string;
    messageGroup?: Array<TooltipMessageGroupItem>;
    onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
    position?: TooltipPosition;
    theme?: TooltipTheme;
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
