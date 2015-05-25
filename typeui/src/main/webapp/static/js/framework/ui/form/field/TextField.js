var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * @author Gabor Kokeny
 */
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(form, useWrapperContainer) {
        _super.call(this, form, InputType.TEXT, useWrapperContainer);
        this.addClass("ui-textfield");
    }
    TextField.prototype.addKeyupListener = function (listener) {
        _super.prototype.on.call(this, TextField.EVENT_KEYUP, listener);
    };
    TextField.EVENT_KEYUP = "keyup";
    return TextField;
})(InputField);
//# sourceMappingURL=TextField.js.map