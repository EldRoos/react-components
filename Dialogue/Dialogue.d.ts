import * as React from "react";
import "./dialogue-style.scss";
export interface DialogueProps {
    className?: string;
    desc?: string | JSX.Element | React.ReactNode;
    disablePrimaryBtn?: boolean;
    disableSecondaryBtn?: boolean;
    enableBackdropDismiss?: boolean;
    enableCloseButton?: boolean;
    header?: string | JSX.Element | React.ReactNode;
    id?: string;
    onDismiss?: (e?: React.MouseEvent<HTMLDivElement>) => void;
    primaryAction?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    primaryBtn?: string | JSX.Element;
    secondaryAction?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    secondaryBtn?: string | JSX.Element;
    toggle: boolean;
}
declare const Dialogue: React.FunctionComponent<DialogueProps>;
export { Dialogue };
