import { PanGesture } from './drag-gesture';
/**
 * @private
 */
export declare class SlideGesture extends PanGesture {
    slide: SlideData;
    constructor(element: HTMLElement, opts?: {});
    getSlideBoundaries(slide: SlideData, ev: any): {
        min: number;
        max: number;
    };
    getElementStartPos(slide: SlideData, ev: any): number;
    onDragStart(ev: any): void;
    onDragMove(ev: any): void;
    onDragEnd(ev: any): void;
    onSlideBeforeStart(ev?: any): void;
    onSlideStart(slide?: SlideData, ev?: any): void;
    onSlide(slide?: SlideData, ev?: any): void;
    onSlideEnd(slide?: SlideData, ev?: any): void;
}
/**
 * @private
 */
export interface SlideData {
    min: number;
    max: number;
    distance: number;
    delta: number;
    started: boolean;
    pos: any;
    timestamp: number;
    pointerStartPos: number;
    elementStartPos: number;
    velocity: number;
}
