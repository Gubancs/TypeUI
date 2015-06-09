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
var Progressbar = (function (_super) {
    __extends(Progressbar, _super);
    function Progressbar(container) {
        _super.call(this, container);
        this.addClass("ui-progressbar");
    }
    Progressbar.prototype.render = function () {
        var progressElement = ElementFactory.createProgress();
        if (this.getMaxValue())
            progressElement.max = this.getMaxValue();
        if (this.getValue())
            progressElement.value = this.getValue();
        _super.prototype.doRender.call(this, progressElement);
    };
    Progressbar.prototype.setMaxValue = function (maxValue) {
        if (this.isRendered()) {
            this.getElement().max = this.getMaxValue();
        }
        this.maxValue = maxValue;
    };
    Progressbar.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    Progressbar.prototype.setValue = function (value) {
        if (this.isRendered()) {
            this.getElement().value = this.getMaxValue();
        }
        this.value = value;
    };
    Progressbar.prototype.getValue = function () {
        return this.value;
    };
    Progressbar.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    return Progressbar;
})(Component);
//# sourceMappingURL=Progressbar.js.map