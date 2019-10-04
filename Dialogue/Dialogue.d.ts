import * as React from "react";
import "./dialogue-style.scss";
export interface DialogueProps {
    className?: string;
    desc?: string;
    enableBackdropDismiss?: boolean;
    enableCloseButton?: boolean;
    header?: string;
    id?: string;
    onDismiss?: (event: React.MouseEvent<HTMLDivElement>) => void;
    primaryAction?: () => void;
    primaryBtn?: string;
    secondaryAction?: () => void;
    secondaryBtn?: string;
    toggle: boolean;
}
declare const Dialogue: React.FunctionComponent<DialogueProps>;
export { Dialogue };
