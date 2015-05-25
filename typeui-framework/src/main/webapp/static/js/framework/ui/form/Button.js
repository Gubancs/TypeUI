var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["SUBMIT"] = 0] = "SUBMIT";
    ButtonType[ButtonType["BUTTON"] = 1] = "BUTTON";
})(ButtonType || (ButtonType = {}));
var IconAlign;
(function (IconAlign) {
    IconAlign[IconAlign["LEFT"] = 0] = "LEFT";
    IconAlign[IconAlign["RIGHT"] = 1] = "RIGHT";
})(IconAlign || (IconAlign = {}));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(parent) {
        _super.call(this, parent, true);
        this.text = null;
        this.iconAlign = 0 /* LEFT */;
        this.buttonType = 1 /* BUTTON */;
        this.addClass("ui-button");
        this.getContainer().setClass("ui-button-wrapper");
        this.icon = new Icon(this);
        this.text = new DisplayText(this, TextType.SPAN);
        this.text.addClass("ui-button-text");
    }
    Button.prototype.render = function () {
        var buttonElement = ElementFactory.createButton();
        buttonElement.type = ButtonType[this.getButtonType()].toLowerCase();
        _super.prototype.doRender.call(this, buttonElement);
    };
    Button.prototype.setText = function (text) {
        this.text.setText(text);
    };
    Button.prototype.getText = function () {
        return this.text.getText();
    };
    Button.prototype.setButtonType = function (buttonType) {
        this.buttonType = buttonType;
    };
    Button.prototype.getButtonType = function () {
        return this.buttonType;
    };
    Button.prototype.addClickListener = function (listener) {
        this.addEventListener(Button.EVENT_CLICK, listener);
    };
    Button.prototype.setIconClass = function (iconClass) {
        this.icon.setClass(iconClass);
    };
    Button.prototype.setIconAlign = function (iconAlign) {
        this.icon.addClass("ui-icon-" + IconAlign[iconAlign].toLowerCase());
        if (this.iconAlign === iconAlign) {
            return;
        }
        this.getChildren().reverse();
        if (this.isRendered()) {
        }
    };
    Button.EVENT_CLICK = "click";
    return Button;
})(Container);
//# sourceMappingURL=Button.js.map