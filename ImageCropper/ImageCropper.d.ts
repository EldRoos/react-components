import * as React from "react";
import Cropper from "cropperjs";
import "./image-cropper-style.scss";
export interface OptionProps {
    aspectRatio?: number;
    autoCrop?: boolean;
    autoCropArea?: number;
    background?: boolean;
    center?: boolean;
    checkCrossOrigin?: boolean;
    checkOrientation?: boolean;
    crop?: (event: CustomEvent) => void;
    cropBoxMovable?: boolean;
    cropBoxResizable?: boolean;
    cropend?: (event: CustomEvent) => void;
    cropmove?: (event: CustomEvent) => void;
    cropstart?: (event: CustomEvent) => void;
    data?: Cropper.Data;
    dragMode?: Cropper.DragMode;
    guides?: boolean;
    highlight?: boolean;
    initialAspectRatio?: number;
    minCanvasHeight?: number;
    minCanvasWidth?: number;
    minContainerHeight?: number;
    minContainerWidth?: number;
    minCropBoxHeight?: number;
    minCropBoxWidth?: number;
    modal?: boolean;
    movable?: boolean;
    preview?: Element | Array<Element> | NodeList | string;
    ready?: (event: CustomEvent) => void;
    responsive?: boolean;
    restore?: boolean;
    rotatable?: boolean;
    scalable?: boolean;
    toggleDragModeOnDblclick?: boolean;
    viewMode?: Cropper.ViewMode;
    wheelZoomRatio?: number;
    zoom?: (event: CustomEvent) => void;
    zoomable?: boolean;
    zoomOnTouch?: boolean;
    zoomOnWheel?: boolean;
}
export interface CanvasData {
    left: number;
    top: number;
    width: number;
    height: number;
    naturalWidth: number;
    naturalHeight: number;
}
export interface CropBoxData {
    left: number;
    top: number;
    width: number;
    height: number;
}
interface ImageCropperProps {
    toggle?: boolean;
    showCustomButton?: boolean;
    cropperConfigs: OptionProps;
    onCrop: (imageData: string) => void;
    onCustomButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    cropButtonText?: string;
    customButtonText?: string;
    cancelText?: string;
    selectButtonText?: string;
    previewClassName?: string;
    imageCropperClassName?: string;
    id?: string;
    previewSrc?: string;
    alt?: string;
    crossOrigin?: "anonymous" | "use-credentials" | "";
    enable?: boolean;
    rotateTo?: number;
    scaleX?: number;
    scaleY?: number;
    zoomTo?: number;
    moveTo?: Array<number>;
    reset?: boolean;
    cropBoxData?: CropBoxData;
    canvasData?: CanvasData;
    alwaysAlignedCropper?: boolean;
}
interface ImageCropperState {
    cropResult: string;
    isLoading: boolean;
    isImageLoaded: boolean;
    src: string;
    toggle: boolean;
    cropBoxData?: CropBoxData;
    alignCropper: boolean;
}
export declare class ImageCropper extends React.Component<ImageCropperProps, ImageCropperState> {
    private cropper;
    private image;
    constructor(props: ImageCropperProps);
    /**
     *
     * @param e : cropmove and end canvas evenht
     * performs corpper box calculations, align box position
     */
    alignCropBox(e: any): void;
    componentDidMount(): void;
    handleUploadImage(e: any, cropResult?: string): void;
    stopProp(e: React.MouseEvent<HTMLDivElement>): void;
    dismissCropper(): void;
    setDragMode(mode: Cropper.DragMode): Cropper;
    setAspectRatio(aspectRatio: number): Cropper;
    getCroppedCanvas(options: Cropper.GetCroppedCanvasOptions): HTMLCanvasElement;
    setCropBoxData(data: Cropper.SetCropBoxDataOptions): Cropper;
    getCropBoxData(): Cropper.CropBoxData;
    setCanvasData(data: Cropper.SetCanvasDataOptions): Cropper;
    getCanvasData(): Cropper.CanvasData;
    getImageData(): Cropper.ImageData;
    getContainerData(): Cropper.ContainerData;
    setData(data: Cropper.SetDataOptions): Cropper;
    getData(rounded: boolean): Cropper.Data;
    crop(image: string, callBack: () => void): void;
    onResfreshCropper(image: string, callBack: () => void): void;
    onCropClick(e: React.MouseEvent<HTMLButtonElement>): Cropper;
    onReset(): Cropper;
    move(offsetX: number, offsetY: number): Cropper;
    onMoveTo(x: number, y?: number): Cropper;
    zoom(ratio: number): Cropper;
    onZoomTo(ratio: number): Cropper;
    rotate(degree: number): Cropper;
    onRotateTo(degree: number): Cropper;
    onEnable(): Cropper;
    disable(): Cropper;
    clear(): Cropper;
    replace(url: string, onlyColorChanged: boolean): Cropper;
    scale(scaleX: number, scaleY: number): Cropper;
    setXScale(scaleX: number): Cropper;
    setYScale(scaleY: number): Cropper;
    componentDidUpdate(prevProps: ImageCropperProps, prevState: ImageCropperState): void;
    render(): JSX.Element;
}
export {};
