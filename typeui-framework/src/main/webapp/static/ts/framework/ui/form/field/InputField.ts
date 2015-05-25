
enum InputType {
    TEXT, HIDDEN, PASSWORD, CHECKBOX, RADIO, DATE, EMAIL
}

/**
 * @author Gabor Kokeny
 */
class InputField extends Field {

    static EVENT_CHANGE: string = "change";
    static EVENT_BLUR: string = "blur";

    private type: InputType;

    private name: string;

    private value: string;

    private readOnly: boolean;

    private placeholder: string;

    private autoCompleteEnabled: boolean;

    constructor(form: Form, type: InputType, useWrapperContainer?: boolean) {
        super(form, useWrapperContainer);
        this.type = type;

        this.value = null;
        this.autoCompleteEnabled = false;
    }

    /**
     * Set value to this inputField
     * 
     * @param {string} value
     */
    setValue(value: string) {
        if (this.isRendered()) {
            this.getElement().value = value;
        }

        this.value = value;
    }

    /**
     * Get the value of this inputField
     * 
     * @return {stirng}
     */
    getValue(): string {
        return this.value;
    }

    setName(name: string) {
        if (this.isRendered()) {
            this.getElement().name = name;
        }
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    protected setType(inputType: InputType) {
        this.type = inputType;
    }

    getType(): InputType {
        return this.type;
    }


    setPlaceholder(placeholder: string) {
        if (this.isRendered()) {
            this.getElement().placeholder = placeholder;
        }
        this.placeholder = placeholder;
    }

    getPlaceholder(): string {
        return this.placeholder;
    }


    setAutoCompleteEnabled(autoCompleteEnabled: boolean) {
        if (this.isRendered()) {
            this.getElement().placeholder = autoCompleteEnabled ? "on" : "off";
        }
        this.autoCompleteEnabled = autoCompleteEnabled;
    }

    isAutoCompleteEnabled(): boolean {
        return this.autoCompleteEnabled;
    }


    render() {
        var inputElement = ElementFactory.createInput();
        inputElement.type = InputType[this.getType()].toLowerCase();
        if (this.getName())
            inputElement.name = this.getName();
        if (this.getValue)
            inputElement.value = this.getValue();
        if (this.getPlaceholder())
            inputElement.placeholder = this.getPlaceholder();
        if (this.isReadOnly())
            inputElement.readOnly = this.isReadOnly();

        inputElement.autocomplete = this.isAutoCompleteEnabled() ? "on" : "off";
        super.doRender(inputElement);
    }

    /**
     * Add changelistener 
     * 
     * @param {EventListener} listener
     */
    addChangeListener(listener: EventListener) {
        super.on(InputField.EVENT_CHANGE, listener);
    }

    /**
     * Add focus lost listener to this field
     * 
     * @param {EventListener} listener
     */
    addBlurListener(listener: EventListener) {
        super.on(InputField.EVENT_BLUR, listener);
    }

    getElement(): HTMLInputElement {
        return <HTMLInputElement>super.getElement();
    }

    setReadOnly(readOnly: boolean) {

        if (this.isRendered()) {
            this.getElement().readOnly = this.isReadOnly();
        }

        this.readOnly = readOnly;
    }

    isReadOnly(): boolean {
        return this.readOnly;
    }
}