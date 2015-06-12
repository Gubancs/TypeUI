/**
 * @author Gabor Kokeny
 */
class Checkbox extends InputField {

    static DEFAULT_CLASS = "ui-checkbox";

    static DEFAULT_WRAPPER_CLASS = "ui-checkbox-wrapper";

    static DEFAULT_LABEL_CLASS = "ui-checkbox-label";

    private label: Label;

    private text: string;

    constructor(form: Form) {
        super(form, InputType.CHECKBOX, true);

        this.addClass(Checkbox.DEFAULT_CLASS);
        this.getContainer().addClass(Checkbox.DEFAULT_WRAPPER_CLASS);
    }

    render() {
        super.render();

        this.label = new Label(this.getContainer());
        this.label.setText(this.getText());
        this.label.setHtmlFor(this);
        this.label.setClass(Checkbox.DEFAULT_LABEL_CLASS);
        this.label.render();
    }


    setText(text: string) {
        if (this.isRendered()) {
            this.label.setText(text);
        }
        this.text = text;
    }

    getText(): string {
        return this.text;
    }
}