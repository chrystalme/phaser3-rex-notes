import * as Phaser from 'phaser';

import BadgeLabelFactory from './badgelabel/Factory';
import BBCodeTextFactory from './bbcodetext/Factory';
import ButtonsFactory from './buttons/Factory';
import CanvasFactory from './canvas/Factory';
import CircleMaskImageFactory from './circlemaskimage/Factory';
import CircularProgressCanvasFactory from './circularprogresscanvas/Factory';
import CircularProgressFactory from './circularprogress/Factory';
import ClickFactory from './click/Factory';
import ContainerFactory from './container/Factory';
import CustomShapesFactory from './customshapes/Factory';
import DialogFactory from './dialog/Factory';
import FlipFactory from './flip/Factory';
import FixWidthButtonsFactory from './fixwidthbuttons/Factory';
import FixWidthSizerFactory from './fixwidthsizer/Factory';
import GridButtonsFactory from './gridbuttons/Factory';
import GridSizerFactory from './gridsizer/Factory';
import GridTableFactory from './gridtable/Factory';
import KnobFactory from './knob/Factory';
import LabelFactory from './label/Factory';
import MenuFactory from './menu/Factory';
import NinePatchFactory from './ninepatch/Factory';
import NumberBarFactory from './numberbar/Factory';
import OverlapSizerFactory from './overlapsizer/Factory';
import PagesFactory from './pages/Factory';
import PanFactory from './pan/Factory';
import PerspectiveFactory from './perspective/Factory';
import PinchFactory from './pinch/Factory';
import PressFactory from './press/Factory';
import RotateFactory from './rotate/Factory';
import RoundRectangleCanvasFactory from './roundrectanglecanvas/Factory';
import RoundRectangleFactory from './roundrectangle/Factory';
import ScrollablePanelFactory from './scrollablepanel/Factory';
import SizerFactory from './sizer/Factory';
import SliderFactory from './slider/Factory';
import SwipeFactory from './swipe/Factory';
import TabsFactory from './tabs/Factory';
import TagTextFactory from './tagtext/Factory';
import TapFactory from './tap/Factory';
import TextAreaFactory from './textarea/Factory';
import TextBoxFactory from './textbox/Factory';
import ToastFactory from './toast/Factory';

import Edit from '../../plugins/behaviors/textedit/Edit';
import { GetParentSizer, GetTopmostSizer } from './utils/GetParentSizer';
import { Show, Hide, IsShown, } from './utils/Hide';
import SetChildrenInteractive from './utils/setchildreninteractive/SetChildrenInteractive';
import { WaitEvent, WaitComplete } from './utils/WaitEvent';
import WrapExpandText from './utils/wrapexpandtext/WrapExpandText';

declare class Factories {
    badgeLabel: BadgeLabelFactory;
    BBCodeText: BBCodeTextFactory;
    buttons: ButtonsFactory;
    canvas: CanvasFactory;
    circleMaskImage: CircleMaskImageFactory;
    circularProgressCanvas: CircularProgressCanvasFactory;
    circularProgress: CircularProgressFactory;
    clickFactory: ClickFactory;
    container: ContainerFactory;
    customShapes: CustomShapesFactory;
    dialog: DialogFactory;
    flip: FlipFactory;
    fixWidthButtons: FixWidthButtonsFactory;
    fixWidthSizer: FixWidthSizerFactory;
    gridButtons: GridButtonsFactory;
    gridSizer: GridSizerFactory;
    gridTable: GridTableFactory;
    knob: KnobFactory;
    label: LabelFactory;
    menu: MenuFactory;
    ninePatch: NinePatchFactory;
    numberBar: NumberBarFactory;
    overlapSizer: OverlapSizerFactory;
    pages: PagesFactory;
    pan: PanFactory;
    perspective: PerspectiveFactory;
    pinch: PinchFactory;
    press: PressFactory;
    rotate: RotateFactory;
    roundRectangleCanvas: RoundRectangleCanvasFactory;
    roundRectangle: RoundRectangleFactory;
    scrollablePanel: ScrollablePanelFactory;
    sizer: SizerFactory;
    slider: SliderFactory;
    swipe: SwipeFactory;
    tabs: TabsFactory;
    tagText: TagTextFactory;
    tap: TapFactory;
    textArea: TextAreaFactory;
    textBox: TextBoxFactory;
    toast: ToastFactory;
}

export default class UIFactories {
    constructor(scene: Phaser.Scene);

    add: Factories;

    edit: Edit;
    getParentSizer: GetParentSizer;
    getTopmostSizer: GetTopmostSizer;
    hide: Hide;
    show: Show;
    isShown: IsShown;
    setChildrenInteractive: SetChildrenInteractive;
    waitEvent: WaitEvent;
    waitComplete: WaitComplete;
    wrapExpandText: WrapExpandText;

    isInTouching(
        gameObject: Phaser.GameObjects.GameObject,
        pointer?: Phaser.Input.Pointer,
        preTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
        postTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
    ): boolean;

    readonly viewport: Phaser.Geom.Rectangle;
}

import { GeomTypes as CustomShapesGeomTypes } from '../../plugins/customshapes';
export { CustomShapesGeomTypes };