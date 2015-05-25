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
var DateField = (function (_super) {
    __extends(DateField, _super);
    function DateField(form) {
        _super.call(this, form);
        this.setClass("ui-datefield");
        this.getContainer().setClass("ui-datefield-wrapper");
        this.setTriggerIconClass("fa fa-calendar");
        this.setReadOnly(true);
        this.on("click", this.onTriggerClick);
    }
    return DateField;
})(TriggerField);
//# sourceMappingURL=DateField.js.map