import * as React from "react";
import "./video-style.scss";
export declare type VideoSourceType = "stream" | "local";
export interface VideoProps {
    allowFullScreen?: boolean;
    autoplay?: boolean;
    className?: string;
    height: string;
    id?: string;
    loop?: boolean;
    name: string;
    showControls?: boolean;
    showInfo?: boolean;
    sourceType: VideoSourceType;
    src: string;
    width: string;
}
export declare const Video: React.FunctionComponent<VideoProps>;
