import * as React from "react";
import "./tabs-style.scss";
export interface TabsListItem {
    text: string;
    disabled?: boolean;
}
export interface TabsProps {
    activeTab: number;
    className?: string;
    id?: string;
    list: Array<TabsListItem>;
    onClick: (index: number) => any;
}
declare const Tabs: React.FunctionComponent<TabsProps>;
export { Tabs };
