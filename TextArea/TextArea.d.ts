import * as React from "react";
import "./text-area-style.scss";
export interface TextAreaProps {
    className?: string;
    cols?: number;
    disabled?: boolean;
    error?: string;
    focus?: boolean;
    id?: string;
    label?: string;
    max?: number;
    name: string;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    readonly?: boolean;
    reference?: React.RefObject<HTMLTextAreaElement>;
    resizable?: boolean;
    rows?: number;
    value: string;
}
export declare const TextArea: React.FunctionComponent<TextAreaProps>;
