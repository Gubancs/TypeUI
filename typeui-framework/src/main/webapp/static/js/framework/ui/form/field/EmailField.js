var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *
 * @author Gabor Kokeny
 */
var EmailField = (function (_super) {
    __extends(EmailField, _super);
    function EmailField(form) {
        _super.call(this, form);
        this.addClass(EmailField.DEFAULT_CLASS);
    }
    EmailField.DEFAULT_CLASS = "ui-emailfield";
    return EmailField;
})(TextField);
//# sourceMappingURL=EmailField.js.map