var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * The available align to ButtonBar
 *
 * @author Gabor Kokeny
 */
var ButtonAlign;
(function (ButtonAlign) {
    ButtonAlign[ButtonAlign["LEFT"] = 0] = "LEFT";
    ButtonAlign[ButtonAlign["RIGHT"] = 1] = "RIGHT";
    ButtonAlign[ButtonAlign["CENTER"] = 2] = "CENTER";
})(ButtonAlign || (ButtonAlign = {}));
/**
 *
 * @author Gabor Kokeny
 */
var ButtonBar = (function (_super) {
    __extends(ButtonBar, _super);
    function ButtonBar(parent) {
        _super.call(this, parent);
        this.addClass(ButtonBar.DEFAULT_CLASS);
        this.buttonAlign = 0 /* LEFT */;
    }
    ButtonBar.prototype.render = function () {
        var divElement = ElementFactory.createDiv();
        this.addClass("button-align-" + ButtonAlign[this.buttonAlign].toLowerCase());
        _super.prototype.doRender.call(this, divElement);
        var container = this.getContainer();
        if (container instanceof Form) {
            CssHelper.setLeftMargin(divElement, container.getLabelWidth());
        }
    };
    ButtonBar.prototype.setButtonAlign = function (buttonAlign) {
        this.buttonAlign = buttonAlign;
    };
    ButtonBar.DEFAULT_CLASS = "ui-buttonbar";
    return ButtonBar;
})(Container);
//# sourceMappingURL=ButtonBar.js.map