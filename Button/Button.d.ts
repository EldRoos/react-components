import * as React from "react";
import "./button-style.scss";
export declare type ButtonTheme = "primary" | "secondary" | "danger" | "alternative" | "ghost-dark" | "ghost-light" | "anchor";
export declare type ButtonSizes = "lg" | "md" | "sm";
export declare type ButtonIconPosition = "right" | "left";
export declare type ButtonType = "button" | "reset" | "submit";
export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: any;
    iconPosition?: ButtonIconPosition;
    id?: string;
    label: string;
    name?: string;
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    size?: ButtonSizes;
    theme?: ButtonTheme;
    title?: string;
    type?: ButtonType;
}
export declare const Button: React.NamedExoticComponent<ButtonProps>;
