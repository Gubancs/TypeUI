declare enum ButtonType {
    SUBMIT = 0,
    BUTTON = 1,
}
declare enum IconAlign {
    LEFT = 0,
    RIGHT = 1,
}
declare class Button extends Container {
    static EVENT_CLICK: string;
    private buttonType;
    private icon;
    private text;
    private iconAlign;
    constructor(parent: Container);
    render(): void;
    setText(text: string): void;
    getText(): string;
    setButtonType(buttonType: ButtonType): void;
    getButtonType(): ButtonType;
    addClickListener(listener: EventListener): void;
    setIconClass(iconClass: string): void;
    setIconAlign(iconAlign: IconAlign): void;
}
