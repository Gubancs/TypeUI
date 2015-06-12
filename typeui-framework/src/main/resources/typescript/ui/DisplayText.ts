

enum TextType {
    SPAN, H1, H2, H3, H4, H5, H6, PARAGRAPH
}

/**
 * 
 * @author Gabor Kokeny
 */
class DisplayText extends Container {

    private iconClass: string;

    private text: string;

    private type: TextType;

    constructor(parent: Container, type?: TextType) {
        super(parent);

        this.type = type || TextType.SPAN;
    }

    protected beforeRender() {
        if (this.iconClass) {
            var icon = new Icon(this);
            icon.setClass(this.iconClass);
        }
        super.beforeRender();
    }

    render() {
        var textElement = this.createElement(this.type);
        textElement.textContent = this.getText();
        super.doRender(textElement);
    }

    private createElement(type: TextType): HTMLElement {
        switch (type) {
            case TextType.H1: return ElementFactory.createHeader1();
        }

        return ElementFactory.createSpan();
    }

    setText(text: string) {
        if (this.isRendered()) {
            this.getElement().textContent = text;
        }

        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    /**
     * Set the icon for this displaytext
     * 
     * @param {string} iconClass
     */
    setIconClass(iconClass: string) {
        this.iconClass = iconClass;
    }
}