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
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon(parent) {
        _super.call(this, parent);
    }
    Icon.prototype.render = function () {
        var htmlElement = ElementFactory.createIcon();
        _super.prototype.doRender.call(this, htmlElement);
    };
    Icon.prototype.setClass = function (className) {
        _super.prototype.setClass.call(this, className);
        _super.prototype.addClass.call(this, "ui-icon");
    };
    return Icon;
})(Component);
//# sourceMappingURL=Icon.js.map