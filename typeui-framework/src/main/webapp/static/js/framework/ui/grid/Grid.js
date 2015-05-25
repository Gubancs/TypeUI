var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Grid UI component
 *
 * @author Gabor Kokeny
 */
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(parent) {
        _super.call(this, parent);
        this.addClass(Grid.DEFULT_CLASS);
    }
    Grid.prototype.render = function () {
        var htmlTableElement = ElementFactory.createGrid();
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    Grid.prototype.setDataProvider = function (dataProvider) {
        this.dataProvider = dataProvider;
    };
    Grid.prototype.setEmptyMessage = function (emptyMessage) {
        this.emptyMessage = emptyMessage;
    };
    Grid.prototype.getEmptyMessage = function () {
        return this.emptyMessage;
    };
    Grid.DEFULT_CLASS = "ui-grid";
    return Grid;
})(Container);
//# sourceMappingURL=Grid.js.map