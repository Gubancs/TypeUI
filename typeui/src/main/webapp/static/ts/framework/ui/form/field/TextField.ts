

/**
 * @author Gabor Kokeny
 */
class TextField extends InputField {

    static EVENT_KEYUP = "keyup";

    constructor(form: Form, useWrapperContainer?: boolean) {
        super(form, InputType.TEXT, useWrapperContainer);

        this.addClass("ui-textfield");
    }

    addKeyupListener(listener: EventListener) {
        super.on(TextField.EVENT_KEYUP, listener);
    }

}