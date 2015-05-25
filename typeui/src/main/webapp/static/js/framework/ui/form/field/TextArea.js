var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * @author Gabor Kokeny
 */
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(form) {
        _super.call(this, form, false);
        this.addClass(TextArea.DEFAULT_CLASS);
    }
    TextArea.prototype.render = function () {
        var textAreaHtmlElement = ElementFactory.createTextArea();
        textAreaHtmlElement.placeholder = this.getPlaceholder();
        textAreaHtmlElement.cols = 50;
        textAreaHtmlElement.rows = 8;
        _super.prototype.doRender.call(this, textAreaHtmlElement);
    };
    TextArea.DEFAULT_CLASS = "ui-textarea";
    return TextArea;
})(TextField);
//# sourceMappingURL=TextArea.js.map