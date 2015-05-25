
/**
 * @author Gabor Kokeny
 */
class TextArea extends TextField {

    static DEFAULT_CLASS = "ui-textarea";

    constructor(form: Form) {
        super(form, false);

        this.addClass(TextArea.DEFAULT_CLASS);

    }

    render() {
        var textAreaHtmlElement = ElementFactory.createTextArea();
        textAreaHtmlElement.placeholder = this.getPlaceholder();
        textAreaHtmlElement.cols = 50;
        textAreaHtmlElement.rows = 8;
        super.doRender(textAreaHtmlElement);
    }

}