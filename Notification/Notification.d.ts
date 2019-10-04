import * as React from "react";
import "./notification-style.scss";
declare type NotificationStyle = "slide-in" | "bar";
declare type NotificationPosition = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top" | "bottom";
declare type NotificationTheme = "purple" | "primary" | "danger" | "success" | "warning" | "inverted";
export interface NotificationAction {
    text: string;
    action: () => void;
}
export interface NotificationProps {
    actions?: Array<NotificationAction>;
    className?: string;
    dismissable?: boolean;
    dismissTimeout?: number;
    message?: string;
    onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
    onDismiss: () => void;
    persist?: boolean;
    position?: NotificationPosition;
    style?: NotificationStyle;
    theme?: NotificationTheme;
    title?: string;
    toggle: boolean;
}
export declare class Notification extends React.Component<NotificationProps> {
    timerRef: number;
    private defaultTimeout;
    constructor(props: NotificationProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: NotificationProps): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    /** Dismiss the notification */
    private dismiss;
    /** Start the timer to dismiss the notification */
    private startTimer;
    /** Clear the timer that dismisses the notification */
    private clearTimer;
    /**
     * Get the style class based on the theme passed through the props
     * @param {string} style The style passed through the props
     * @returns {string} The style class
     */
    private getStyleClass;
    /**
     * Get the theme class based on the theme passed though the props
     * @param {string} theme The theme passed through the props
     * @returns {string} The theme class
     */
    private getThemeClass;
    /**
     * Get the position class based on the position and style passed through the props
     * @param {string} position The position passed through the props
     * @param {string} style The style passed through the props
     * @returns {string} The position class
     */
    private getPositionClass;
}
export {};
