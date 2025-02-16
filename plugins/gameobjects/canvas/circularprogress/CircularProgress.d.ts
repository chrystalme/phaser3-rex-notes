import Canvas from '../canvas/Canvas';

export interface IConfig {
    x?: number, y?: number,
    radius?: number,

    color?: string | number,
    trackColor?: string | number,
    centerColor?: string | number,
    thickness?: number,
    startAngle?: number,
    anticlockwise?: boolean,

    textColor?: string | number,
    textStrokeColor?: string | number,
    textStrokeThickness?: number,
    textSize?: string,
    textFamily?: string,
    textStyle?: string,
    textFormatCallback?: (value: number) => string,
    textFormatCallbackScope?: unknown,

    value?: number,
}

export default class CircularProgressCanvas extends Canvas {
    constructor(
        scene: Phaser.Scene,
        config?: IConfig
    );

    value: number;
    setValue(value: number): this;

    radius: number;
    setRadius(radius: number): this;

    trackColor: string;
    setTrackColor(trackColor?: string | number): this;

    setThickness(thickness: number): this;

    barColor: string;
    setBarColor(barColor?: string | number): this;

    startAngle: number;
    setStartAngle(startAngle: number): this;

    anticlockwise: boolean;
    setAnticlockwise(anticlockwise: boolean): this;

    centerColor: string;
    setCenterColor(centerColor?: string | number): this;

    textColor: string;
    setTextColor(color?: string | number): this;

    textStrokeColor: string;
    textStrokeThickness: number;
    setTextStrokeColor(color?: string | number, thickness?: number): this;

    textFont: string;
    setTextFont(fontSize: string, fontFamily: string, fontStyle: string): this;

    setTextFormatCallback(
        callback: (value: number) => string,
        scope?: unknown
    ): this
}