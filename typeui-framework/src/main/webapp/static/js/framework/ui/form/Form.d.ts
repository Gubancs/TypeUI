declare enum LabelAlign {
    LEFT = 0,
    RIGHT = 1,
}
declare enum HttpMethod {
    GET = 0,
    POST = 1,
}
declare class Form extends Container {
    static DEFAULT_LABEL_WIDTH: number;
    private labelAlign;
    private labelWidth;
    private httpMethod;
    private action;
    private ectype;
    private bottomButtonBar;
    private validateOnBlur;
    private model;
    constructor(parent: Container);
    protected init(): void;
    protected createComponents(): void;
    protected initButtons(buttonBar: ButtonBar): void;
    render(): void;
    clearValues(): void;
    getValues(): Object;
    static getInputFields(container: Container): List<InputField>;
    setLabelWidth(labelWidth: number): void;
    getLabelWidth(): number;
    setLabelAlign(labelAlign: LabelAlign): void;
    setHttpMethod(httpMethod: HttpMethod): void;
    getHttpMethod(): number;
    setAction(action: string): void;
    getAction(): string;
    getElement(): HTMLFormElement;
    /**
     * Turn on form validation on the focus lost event
     *
     * If set true, form will be validate on blur event
     *
     * @param {boolean} validateOnBlur
     */
    setValidateOnBlur(validateOnBlur: boolean): void;
    /**
     * Check form validataion on blur event
     *
     * @return Return true if validateOnBlur turned on
     */
    isValidateOnBlur(): boolean;
    setModel<T>(model: T): void;
}
