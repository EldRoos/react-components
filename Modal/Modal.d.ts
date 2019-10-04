import * as React from "react";
import "./modal.scss";
export declare type ModalPositionProp = "left" | "right";
export interface ModalProps {
    ariaDescribedby?: string;
    ariaLabel?: string;
    body?: React.ReactNode;
    className?: string;
    disableBackdropDismiss?: boolean;
    footer?: React.ReactNode;
    fullscreen?: boolean;
    header?: React.ReactNode;
    id?: string;
    onDismiss: () => void;
    position?: ModalPositionProp;
    toggle: boolean;
}
export declare const Modal: React.FunctionComponent<ModalProps>;
