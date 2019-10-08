import * as React from "react";
import "./dropdown-style.scss";
export interface DropdownItem<T = any> {
    value: T;
    label: string;
}
export declare type DropdownChangeEvent = DropdownItem | Array<DropdownItem> | React.ChangeEvent<HTMLSelectElement>;
export interface DropdownProps {
    className?: string;
    clearable?: boolean;
    disabled?: boolean;
    error?: string;
    id?: string;
    label?: string;
    list: Array<DropdownItem>;
    more?: boolean;
    multi?: boolean;
    name?: string;
    native?: boolean;
    onChange: (event: DropdownChangeEvent) => void;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    selectedValue: DropdownItem | Array<DropdownItem>;
}
declare const Dropdown: React.FunctionComponent<DropdownProps>;
export { Dropdown };
