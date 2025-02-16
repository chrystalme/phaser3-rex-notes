import * as Phaser from 'phaser';
import Scrollable from '../utils/scrollable/Scrollable';
import { IConfig as IConfigBase } from '../utils/scrollable/Scrollable';
import { TextGameObjectType } from '../../../plugins/utils/types/TextGameObjectType';


export interface IConfig extends IConfigBase {
    space?: {
        left?: number, right?: number, top?: number, bottom?: number,

        text?: number | {
            left?: number, right?: number, top?: number, bottom?: number,
        },

        header?: number,
        footer?: number,
    },

    text: TextGameObjectType,
    textWidth?: number | undefined,
    textHeight?: number | undefined,
    textMask?: boolean

    content?: string
}

export default class TextArea extends Scrollable {
    constructor(
        scene: Phaser.Scene,
        config?: IConfig
    );

    text: string;
    setText(text: string): this;
    appendText(text: string): this;

    readonly linesCount: number;
}