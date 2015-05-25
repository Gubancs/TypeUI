/**
 * The available align to ButtonBar
 *
 * @author Gabor Kokeny
 */
declare enum ButtonAlign {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
}
/**
 *
 * @author Gabor Kokeny
 */
declare class ButtonBar extends Container {
    static DEFAULT_CLASS: string;
    private buttonAlign;
    constructor(parent: Container);
    render(): void;
    setButtonAlign(buttonAlign: ButtonAlign): void;
}
