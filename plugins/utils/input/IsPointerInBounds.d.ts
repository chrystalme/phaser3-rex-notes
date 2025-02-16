import * as Phaser from 'phaser';

type IsPointerInBounds = (
    gameObject: Phaser.GameObjects.GameObject,
    pointer?: Phaser.Input.Pointer,
    preTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
    postTest?: (gameObject: Phaser.GameObjects.GameObject, x: number, y: number) => boolean,
) => boolean;

export default IsPointerInBounds;