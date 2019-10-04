import * as React from "react";
import { ChartData, ChartOptions } from "chart.js";
import "./chart-style.scss";
import "chartjs-plugin-annotation";
export interface ExtendedChartOptions extends ChartOptions {
    annotation?: ChartAnnotation;
}
export declare type ChartType = "line" | "bar" | "horizontalBar" | "pie" | "doughnut" | "polar" | "radar" | "bubble" | "scatter";
export interface ChartProps {
    chartType: ChartType;
    className?: string;
    data: ChartData;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    options?: ExtendedChartOptions;
}
export declare class Chart extends React.Component<ChartProps, any> {
    constructor(props: any);
    renderChart(type: ChartType): JSX.Element;
    render(): JSX.Element;
}
export interface ChartAnnotation {
    type?: "line" | "box";
    drawTime?: "afterDraw" | "afterDatasetsDraw" | "beforeDatasetsDraw";
    events?: Array<string>;
    dblClickSpeed?: number;
    annotations?: Array<ChartAnnotationItem>;
}
export interface ChartAnnotationItem {
    id?: string;
    type?: "line" | "box";
    drawTime?: "afterDraw" | "afterDatasetsDraw" | "beforeDatasetsDraw";
    mode?: "horizontal" | "vertical";
    scaleID?: string;
    value?: number;
    endValue?: number;
    borderColor?: string;
    borderWidth?: number;
    borderDash?: [number, number];
    borderDashOffset?: number;
    label?: ChartAnnotationsLabel;
    onMouseenter?: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseover?: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseleave?: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseout?: (e: React.MouseEvent<HTMLElement>) => void;
    onMousemove?: (e: React.MouseEvent<HTMLElement>) => void;
    onMousedown?: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseup?: (e: React.MouseEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onDblclick?: (e: React.MouseEvent<HTMLElement>) => void;
    onContextmenu?: (e: React.MouseEvent<HTMLElement>) => void;
    onWheel?: (e: React.MouseEvent<HTMLElement>) => void;
}
export interface ChartAnnotationsLabel {
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: number | string;
    fontStyle?: string;
    fontColor?: string;
    xPadding?: number;
    yPadding?: number;
    cornerRadius?: number;
    position?: "top" | "bottom" | "left" | "right" | "center";
    xAdjust?: number;
    yAdjust?: number;
    enabled?: boolean;
    content?: string;
}
