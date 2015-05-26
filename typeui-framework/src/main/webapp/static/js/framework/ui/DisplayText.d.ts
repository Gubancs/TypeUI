declare enum TextType {
    SPAN = 0,
    H1 = 1,
    H2 = 2,
    H3 = 3,
    H4 = 4,
    H5 = 5,
    H6 = 6,
    PARAGRAPH = 7,
}
/**
 *
 * @author Gabor Kokeny
 */
declare class DisplayText extends Container {
    private iconClass;
    private text;
    private type;
    constructor(parent: Container, type?: TextType);
    protected beforeRender(): void;
    render(): void;
    private createElement(type);
    setText(text: string): void;
    getText(): string;
    /**
     * Set the icon for this displaytext
     *
     * @param {string} iconClass
     */
    setIconClass(iconClass: string): void;
}
