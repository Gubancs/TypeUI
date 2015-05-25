
/**
 * The available align to ButtonBar
 * 
 * @author Gabor Kokeny
 */
enum ButtonAlign {
    LEFT, RIGHT, CENTER
}

/**
 * 
 * @author Gabor Kokeny
 */
class ButtonBar extends Container {
    
    static DEFAULT_CLASS:string = "ui-buttonbar";

    private buttonAlign: ButtonAlign;

    constructor(parent: Container) {
        super(parent);

        this.addClass(ButtonBar.DEFAULT_CLASS);
        this.buttonAlign = ButtonAlign.LEFT;
    }

    render() {
        var divElement = ElementFactory.createDiv();
        this.addClass("button-align-" + ButtonAlign[this.buttonAlign].toLowerCase());
        super.doRender(divElement);

        var container = this.getContainer();
        if (container instanceof Form) {
            CssHelper.setLeftMargin(divElement, container.getLabelWidth());
        }
    }

    setButtonAlign(buttonAlign: ButtonAlign) {
        this.buttonAlign = buttonAlign;
    }
}