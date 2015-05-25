


enum LabelAlign {
    LEFT, RIGHT
}

enum HttpMethod {
    GET, POST
}


class Form extends Container {

    static DEFAULT_LABEL_WIDTH = 140;

    private labelAlign: LabelAlign;

    private labelWidth: number;

    private httpMethod: HttpMethod;

    private action: string;

    private ectype: string;

    private bottomButtonBar: ButtonBar;

    private validateOnBlur: boolean;

    constructor(parent: Container) {
        super(parent);

        if (parent instanceof Form) {
            Log.error("Unsupported parent type -> Form");
        }

        this.validateOnBlur = false;
        this.setHttpMethod(HttpMethod.POST);
        this.setLabelWidth(Form.DEFAULT_LABEL_WIDTH);
        this.setLabelAlign(LabelAlign.LEFT);
        this.addClass("ui-form");
    }

    protected init() {
        super.init();
    }

    protected createComponents() {
        super.createComponents();

        this.bottomButtonBar = new ButtonBar(this);
        this.initButtons(this.bottomButtonBar);
    }

    protected initButtons(buttonBar: ButtonBar) {
    }

    render() {
        var formElement = ElementFactory.createForm();
        formElement.method = HttpMethod[this.getHttpMethod()].toLowerCase();
        formElement.action = this.getAction();
        this.addClass("label-align-" + LabelAlign[this.labelAlign].toLowerCase());

        super.doRender(formElement);
    }

    clearValues() {
        Log.debug("Clear form values", this);
        this.getChildren().forEach(child=> {
            //            if (child instanceof FormField) {
            //                child.setValue(null);
            //            }
        });
    }

    getValues(): Object {
        var values = {};

        this.getChildren().forEach(child=> {

            //            if (child instanceof FormField) {
            //                var inputField = child.getInputField();
            //                values[inputField.getName()] = inputField.getValue();
            //            }

            if (child instanceof InputField) {
                values[child.getName()] = child.getValue();
            }
        });

        return values;
    }

    setLabelWidth(labelWidth: number) {
        this.labelWidth = labelWidth;
    }

    getLabelWidth(): number {
        return this.labelWidth;
    }

    setLabelAlign(labelAlign: LabelAlign) {
        this.labelAlign = labelAlign;
    }

    setHttpMethod(httpMethod: HttpMethod) {
        if (this.isRendered()) {
            this.getElement().method = HttpMethod[httpMethod].toLowerCase();
        }

        this.httpMethod = httpMethod;
    }


    getHttpMethod(): number {
        return this.httpMethod;
    }


    setAction(action: string) {
        if (this.isRendered()) {
            this.getElement().action = action;
        }

        this.action = action;
    }

    getAction(): string {
        return this.action;
    }

    getElement(): HTMLFormElement {
        return <HTMLFormElement>super.getElement();
    }
    
    
    /**
     * Turn on form validation on the focus lost event
     * 
     * If set true, form will be validate on blur event
     * 
     * @param {boolean} validateOnBlur
     */
    setValidateOnBlur(validateOnBlur: boolean) {
        this.validateOnBlur = validateOnBlur;
    }
    
    /**
     * Check form validataion on blur event
     * 
     * @return Return true if validateOnBlur turned on
     */
    isValidateOnBlur(): boolean {
        return this.validateOnBlur;
    }
}

