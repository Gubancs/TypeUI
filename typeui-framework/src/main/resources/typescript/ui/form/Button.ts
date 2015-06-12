
enum ButtonType {
    SUBMIT, BUTTON
}

enum IconAlign {
    LEFT, RIGHT
}

class Button extends Container {

    static EVENT_CLICK: string = "click";

    private buttonType: ButtonType;

    private icon: Icon;

    private text: DisplayText;

    private iconAlign: IconAlign;

    constructor(parent: Container) {
        super(parent, true);

        this.text = null;
        this.iconAlign = IconAlign.LEFT;
        this.buttonType = ButtonType.BUTTON;
        this.addClass("ui-button");
        this.getContainer().setClass("ui-button-wrapper");
        this.icon = new Icon(this);
        this.text = new DisplayText(this, TextType.SPAN);
        this.text.addClass("ui-button-text");
    }

    render() {
        var buttonElement = ElementFactory.createButton();
        buttonElement.type = ButtonType[this.getButtonType()].toLowerCase();

        super.doRender(buttonElement);
    }

    setText(text: string) {
        this.text.setText(text);
    }

    getText(): string {
        return this.text.getText();
    }

    setButtonType(buttonType: ButtonType) {
        this.buttonType = buttonType;
    }

    getButtonType(): ButtonType {
        return this.buttonType;
    }

    addClickListener(listener: EventListener) {
        this.addListener(Button.EVENT_CLICK, listener);
    }

    setIconClass(iconClass: string) {
        this.icon.setClass(iconClass);
    }

    setIconAlign(iconAlign: IconAlign) {
        this.icon.addClass("ui-icon-" + IconAlign[iconAlign].toLowerCase());

        if (this.iconAlign === iconAlign) {
            return;
        }

        this.getChildren().reverse();


        if (this.isRendered()) {
            //this.doLayout();
        }
    }
}