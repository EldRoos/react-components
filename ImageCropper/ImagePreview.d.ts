import * as React from "react";
import "./image-preview-style.scss";
export interface ImagePreviewProps {
    cropResult?: string;
    previewSrc?: string;
    handleUploadImage: (e: any, cropResult?: string) => void;
    selectButtonText?: string;
    previewClassName?: string;
}
export interface ImagePreviewState {
    cropDataResult: string;
}
export declare class ImagePreview extends React.Component<ImagePreviewProps, ImagePreviewState> {
    fileInput: HTMLInputElement;
    constructor(props: ImagePreviewProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ImagePreviewProps): void;
    onFileInputClick(e: React.MouseEvent<HTMLButtonElement>): void;
    readonly defaultProfileSvg: JSX.Element;
    render(): JSX.Element;
}
