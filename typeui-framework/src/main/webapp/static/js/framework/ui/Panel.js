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
var Panel = (function (_super) {
    __extends(Panel, _super);
    /**
     * Create a new instance of Panel
     *
     * @parent {Container} parent The parent container
     */
    function Panel(parent) {
        _super.call(this, parent, false);
    }
    Panel.prototype.init = function () {
        this.setClass("ui-panel");
        //Create header
        this.panelHeader = new Container(this);
        this.panelHeader.addClass("ui-panel-header");
        this.icon = new Icon(this.panelHeader);
        this.panelTitle = new DisplayText(this.panelHeader);
        this.panelTitle.addClass("ui-panel-title");
        //Create body
        this.panelBody = new Container(this);
        this.panelBody.addClass("ui-panel-body");
        //Create footer
        this.panelFooter = new Container(this);
        this.panelFooter.addClass("ui-panel-footer");
        _super.prototype.init.call(this);
    };
    Panel.prototype.setTitle = function (title) {
        this.panelTitle.setText(title);
    };
    Panel.prototype.getBody = function () {
        return this.panelBody;
    };
    Panel.prototype.setIconClass = function (className) {
        this.icon.setClass(className);
    };
    return Panel;
})(Container);
//# sourceMappingURL=Panel.js.map