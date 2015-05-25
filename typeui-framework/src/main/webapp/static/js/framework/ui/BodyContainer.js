var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BodyContainer = (function (_super) {
    __extends(BodyContainer, _super);
    function BodyContainer() {
        _super.call(this, null);
        this.addClass(BodyContainer.DEFAULT_CLASS);
    }
    BodyContainer.prototype.render = function () {
        _super.prototype.doRender.call(this, DOMHelper.getBody());
    };
    BodyContainer.DEFAULT_CLASS = "ui-body";
    return BodyContainer;
})(Container);
//# sourceMappingURL=BodyContainer.js.map