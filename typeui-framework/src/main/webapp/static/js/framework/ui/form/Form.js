var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LabelAlign;
(function (LabelAlign) {
    LabelAlign[LabelAlign["LEFT"] = 0] = "LEFT";
    LabelAlign[LabelAlign["RIGHT"] = 1] = "RIGHT";
})(LabelAlign || (LabelAlign = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
})(HttpMethod || (HttpMethod = {}));
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(parent) {
        _super.call(this, parent);
        if (parent instanceof Form) {
            Log.error("Unsupported parent type -> Form");
        }
        this.validateOnBlur = false;
        this.setHttpMethod(1 /* POST */);
        this.setLabelWidth(Form.DEFAULT_LABEL_WIDTH);
        this.setLabelAlign(0 /* LEFT */);
        this.addClass("ui-form");
    }
    Form.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    Form.prototype.createComponents = function () {
        _super.prototype.createComponents.call(this);
        this.bottomButtonBar = new ButtonBar(this);
        this.initButtons(this.bottomButtonBar);
    };
    Form.prototype.initButtons = function (buttonBar) {
    };
    Form.prototype.render = function () {
        var formElement = ElementFactory.createForm();
        formElement.method = HttpMethod[this.getHttpMethod()].toLowerCase();
        formElement.action = this.getAction();
        this.addClass("label-align-" + LabelAlign[this.labelAlign].toLowerCase());
        _super.prototype.doRender.call(this, formElement);
    };
    Form.prototype.clearValues = function () {
        //Log.debug("Clear form values", this);
        this.getChildren().forEach(function (child) {
            //            if (child instanceof FormField) {
            //                child.setValue(null);
            //            }
        });
    };
    Form.prototype.getValues = function () {
        var values = {};
        var inputFields = Form.getInputFields(this);
        Log.groupStart("-- Collect form values");
        inputFields.forEach(function (inputField) {
            Log.debug("Field value :", inputField.getName(), inputField.getValue());
            values[inputField.getName()] = inputField.getValue();
        });
        Log.debug("Collect form values finished", values);
        Log.groupEnd();
        return values;
    };
    Form.getInputFields = function (container) {
        var inputFields = new List();
        container.getChildren().forEach(function (child) {
            if (child instanceof Container) {
                inputFields.addAll(Form.getInputFields(child));
            }
            if (child instanceof InputField) {
                inputFields.add(child);
            }
        });
        return inputFields;
    };
    Form.prototype.setLabelWidth = function (labelWidth) {
        this.labelWidth = labelWidth;
    };
    Form.prototype.getLabelWidth = function () {
        return this.labelWidth;
    };
    Form.prototype.setLabelAlign = function (labelAlign) {
        this.labelAlign = labelAlign;
    };
    Form.prototype.setHttpMethod = function (httpMethod) {
        if (this.isRendered()) {
            this.getElement().method = HttpMethod[httpMethod].toLowerCase();
        }
        this.httpMethod = httpMethod;
    };
    Form.prototype.getHttpMethod = function () {
        return this.httpMethod;
    };
    Form.prototype.setAction = function (action) {
        if (this.isRendered()) {
            this.getElement().action = action;
        }
        this.action = action;
    };
    Form.prototype.getAction = function () {
        return this.action;
    };
    Form.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    /**
     * Turn on form validation on the focus lost event
     *
     * If set true, form will be validate on blur event
     *
     * @param {boolean} validateOnBlur
     */
    Form.prototype.setValidateOnBlur = function (validateOnBlur) {
        this.validateOnBlur = validateOnBlur;
    };
    /**
     * Check form validataion on blur event
     *
     * @return Return true if validateOnBlur turned on
     */
    Form.prototype.isValidateOnBlur = function () {
        return this.validateOnBlur;
    };
    Form.prototype.setModel = function (model) {
        this.model = model;
        var proto = Object.getPrototypeOf(model);
        var keys = Object.keys(proto);
        keys.forEach(function (key) {
            var propertyDescriptor = Object.getOwnPropertyDescriptor(proto, key);
            var fn = propertyDescriptor.value;
            //Log.info("Properties ", User.prototype.getFirstName);
            fn.call(model, "alma");
        });
    };
    Form.DEFAULT_LABEL_WIDTH = 140;
    return Form;
})(Container);
//# sourceMappingURL=Form.js.map