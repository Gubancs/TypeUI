declare enum InputType {
    TEXT = 0,
    HIDDEN = 1,
    PASSWORD = 2,
    CHECKBOX = 3,
    RADIO = 4,
    DATE = 5,
    EMAIL = 6,
}
/**
 * @author Gabor Kokeny
 */
declare class InputField extends Field {
    static EVENT_CHANGE: string;
    static EVENT_BLUR: string;
    private type;
    private name;
    private value;
    private readOnly;
    private placeholder;
    private autoCompleteEnabled;
    constructor(form: Form, type: InputType, useWrapperContainer?: boolean);
    /**
     * Set value to this inputField
     *
     * @param {string} value
     */
    setValue(value: string): void;
    /**
     * Get the value of this inputField
     *
     * @return {stirng}
     */
    getValue(): string;
    setName(name: string): void;
    getName(): string;
    getType(): InputType;
    setPlaceholder(placeholder: string): void;
    getPlaceholder(): string;
    setAutoCompleteEnabled(autoCompleteEnabled: boolean): void;
    isAutoCompleteEnabled(): boolean;
    render(): void;
    /**
     * Add changelistener
     *
     * @param {EventListener} listener
     */
    addChangeListener(listener: EventListener): void;
    /**
     * Add focus lost listener to this field
     *
     * @param {EventListener} listener
     */
    addBlurListener(listener: EventListener): void;
    getElement(): HTMLInputElement;
    setReadOnly(readOnly: boolean): void;
    isReadOnly(): boolean;
}
