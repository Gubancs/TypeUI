var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TextType;
(function (TextType) {
    TextType[TextType["SPAN"] = 0] = "SPAN";
    TextType[TextType["H1"] = 1] = "H1";
    TextType[TextType["H2"] = 2] = "H2";
    TextType[TextType["H3"] = 3] = "H3";
    TextType[TextType["H4"] = 4] = "H4";
    TextType[TextType["H5"] = 5] = "H5";
    TextType[TextType["H6"] = 6] = "H6";
    TextType[TextType["PARAGRAPH"] = 7] = "PARAGRAPH";
})(TextType || (TextType = {}));
/**
 *
 * @author Gabor Kokeny
 */
var DisplayText = (function (_super) {
    __extends(DisplayText, _super);
    function DisplayText(parent, type) {
        _super.call(this, parent);
        this.type = type;
    }
    DisplayText.prototype.render = function () {
        var textElement = this.createElement(this.type);
        textElement.textContent = this.getText();
        _super.prototype.doRender.call(this, textElement);
    };
    DisplayText.prototype.createElement = function (type) {
        switch (type) {
            case 1 /* H1 */: return ElementFactory.createHeader1();
        }
        return ElementFactory.createSpan();
    };
    DisplayText.prototype.setText = function (text) {
        if (this.isRendered()) {
            this.getElement().textContent = text;
        }
        this.text = text;
    };
    DisplayText.prototype.getText = function () {
        return this.text;
    };
    return DisplayText;
})(Component);
//# sourceMappingURL=DisplayText.js.map