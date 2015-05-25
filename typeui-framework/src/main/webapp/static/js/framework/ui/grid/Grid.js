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
        _super.call(this, parent, true);
    }
    Grid.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass(Grid.DEFULT_CLASS);
        this.getContainer().addClass(Grid.DEFULT_WRAPPER_CLASS);
        this.gridHeader = new GridHeader(this);
        this.gridBody = new GridBody(this);
    };
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
    Grid.prototype.getColumnModel = function () {
        return new ColumnModel();
    };
    Grid.prototype.getDataProvider = function () {
        return this.dataProvider;
    };
    Grid.DEFULT_CLASS = "ui-grid";
    Grid.DEFULT_WRAPPER_CLASS = "ui-grid-wrapper";
    return Grid;
})(Container);
/**
 * Grid header
 *
 * @author Gabor Kokeny
 */
var GridHeader = (function (_super) {
    __extends(GridHeader, _super);
    function GridHeader(parent) {
        _super.call(this, parent);
    }
    GridHeader.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-header");
        var gridRow = new GridRow(this);
        this.getColumnModel().forEach(function (column) {
            new GridHeaderColumn(gridRow, column);
        });
    };
    GridHeader.prototype.render = function () {
        var htmlTableElement = document.createElement("thead");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    GridHeader.prototype.getColumnModel = function () {
        var grid = this.getContainer();
        return grid.getColumnModel();
    };
    return GridHeader;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridRow = (function (_super) {
    __extends(GridRow, _super);
    function GridRow() {
        _super.apply(this, arguments);
    }
    GridRow.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-row");
    };
    GridRow.prototype.render = function () {
        var htmlTableElement = document.createElement("tr");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    return GridRow;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridHeaderColumn = (function (_super) {
    __extends(GridHeaderColumn, _super);
    function GridHeaderColumn(row, column) {
        _super.call(this, row);
        this.column = column;
    }
    GridHeaderColumn.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-header-column");
    };
    GridHeaderColumn.prototype.render = function () {
        var htmlTableElement = document.createElement("th");
        if (this.column.iconClass) {
            this.icon = new Icon(this);
            this.icon.setClass(this.column.iconClass);
        }
        this.columnText = new DisplayText(this);
        this.columnText.setText(this.column.title);
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    return GridHeaderColumn;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridColumn = (function (_super) {
    __extends(GridColumn, _super);
    function GridColumn() {
        _super.apply(this, arguments);
    }
    GridColumn.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-column");
    };
    GridColumn.prototype.render = function () {
        var htmlTableElement = document.createElement("td");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    return GridColumn;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridBody = (function (_super) {
    __extends(GridBody, _super);
    function GridBody() {
        _super.apply(this, arguments);
    }
    GridBody.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-body");
        var dataProvider = this.getGrid().getDataProvider();
        //        dataProvider.forEach(data => {
        //            var gridRow = new GridRow(this);
        //            this.getGrid().getColumnModel().forEach(column => {
        //                new GridColumn(gridRow);
        //            });
        //        });
    };
    GridBody.prototype.render = function () {
        var htmlTableElement = document.createElement("tbody");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    GridBody.prototype.getGrid = function () {
        return this.getContainer();
    };
    return GridBody;
})(Container);
//# sourceMappingURL=Grid.js.map