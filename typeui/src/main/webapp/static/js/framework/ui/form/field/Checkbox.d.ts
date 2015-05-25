/**
 * @author Gabor Kokeny
 */
declare class Checkbox extends InputField {
    static DEFAULT_CLASS: string;
    static DEFAULT_WRAPPER_CLASS: string;
    static DEFAULT_LABEL_CLASS: string;
    private label;
    private text;
    constructor(form: Form);
    render(): void;
    setText(text: string): void;
    getText(): string;
}
