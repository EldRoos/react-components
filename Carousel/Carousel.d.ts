import * as React from "react";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./carousel-style.scss";
export interface CarouselItem {
    title?: string;
    desc?: string;
    image?: string;
}
export interface CarouselProps {
    afterChange?: (index: number) => void;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    backgroundPlacement?: string;
    className?: string;
    height?: number;
    id?: string;
    infinite?: boolean;
    list: Array<CarouselItem>;
}
export declare const Carousel: React.FunctionComponent<CarouselProps>;
