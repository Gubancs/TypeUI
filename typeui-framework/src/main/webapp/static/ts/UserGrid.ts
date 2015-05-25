

/**
 * 
 * @author Gabor Kokeny
 */
class UserGrid extends Grid {

    constructor(parent: Container) {
        super(parent);
    }

    protected  init() {
        super.init();
        this.setEmptyMessage("There is no registered users");
    }

    getColumnModel(): ColumnModel {
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
    }
}