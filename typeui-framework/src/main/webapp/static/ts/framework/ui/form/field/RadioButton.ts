

/**
 * @author Gabor Kokeny
 */
class RadioButton extends Checkbox {

    static DEFAULT_CLASS = "ui-radio";

    static DEFAULT_WRAPPER_CLASS = "ui-radio-wrapper";

    static DEFAULT_LABEL_CLASS = "ui-radio-label";

    constructor(form: Form) {
        super(form);

        this.setType(InputType.RADIO);
    }


}