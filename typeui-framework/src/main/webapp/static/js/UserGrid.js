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
var UserGrid = (function (_super) {
    __extends(UserGrid, _super);
    function UserGrid(parent) {
        _super.call(this, parent);
    }
    UserGrid.prototype.init = function () {
        _super.prototype.init.call(this);
        this.setEmptyMessage("There is no registered users");
    };
    UserGrid.prototype.getColumnModel = function () {
        var columnModel = new ColumnModel();
        columnModel.addColumn({
            name: "lastName",
            title: "LastName",
            sortable: true,
            iconClass: "fa fa-user"
        });
        columnModel.addColumn({
            name: "userName",
            title: "Firstname",
            sortable: true,
        });
        columnModel.addColumn({
            name: "email",
            title: "Email"
        });
        columnModel.addColumn({
            name: "email",
            title: "Birth date",
            iconClass: "fa fa-calendar"
        });
        return columnModel;
    };
    return UserGrid;
})(Grid);
//# sourceMappingURL=UserGrid.js.map