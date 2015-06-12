

/**
 * Grid UI component
 * 
 * @author Gabor Kokeny
 */
class Grid extends Container {

    static DEFULT_CLASS = "ui-grid";
    static DEFULT_WRAPPER_CLASS = "ui-grid-wrapper";

    private sortable; boolean;

    private emptyMessage: string;

    private dataProvider: DataProvider;

    private gridHeader: GridHeader;
    private gridBody: Container;
    private gridFooter: Container;

    constructor(parent: Container) {
        super(parent, true);
    }

    protected init() {
        super.init();
        this.addClass(Grid.DEFULT_CLASS);
        this.getContainer().addClass(Grid.DEFULT_WRAPPER_CLASS);

        this.gridHeader = new GridHeader(this);
        this.gridBody = new GridBody(this);
    }

    render() {
        var htmlTableElement = ElementFactory.createGrid();
        super.doRender(htmlTableElement);
    }

    setDataProvider(dataProvider: DataProvider) {
        this.dataProvider = dataProvider;
    }

    setEmptyMessage(emptyMessage: string) {
        this.emptyMessage = emptyMessage;
    }

    getEmptyMessage(): string {
        return this.emptyMessage;
    }


    getColumnModel(): ColumnModel {
        return new ColumnModel();
    }

    getDataProvider(): DataProvider {
        return this.dataProvider;
    }
}

/**
 * Grid header
 * 
 * @author Gabor Kokeny
 */
class GridHeader extends Container {


    constructor(parent: Grid) {
        super(parent);
    }

    init() {
        super.init();
        this.addClass("ui-grid-header");


        var gridRow = new GridRow(this);
        this.getColumnModel().forEach(column => {
            new GridHeaderColumn(gridRow, column);
        });

    }

    render() {
        var htmlTableElement = document.createElement("thead");
        super.doRender(htmlTableElement);
    }

    protected getColumnModel(): ColumnModel {
        var grid = <Grid>this.getContainer();
        return grid.getColumnModel();
    }

}


/**
 * 
 * @author Gabor Kokeny
 */
class GridRow extends Container {

    init() {
        super.init();
        this.addClass("ui-grid-row");
    }

    render() {
        var htmlTableElement = document.createElement("tr");
        super.doRender(htmlTableElement);
    }
}


/**
 * 
 * @author Gabor Kokeny
 */
class GridHeaderColumn extends Container {

    private column: Column;

    private icon: Icon;

    private columnText; DisplayText;

    constructor(row: GridRow, column: Column) {
        super(row);

        this.column = column;
    }

    init() {
        super.init();
        this.addClass("ui-grid-header-column");
    }

    render() {
        var htmlTableElement = document.createElement("th");

        if (this.column.iconClass) {
            this.icon = new Icon(this);
            this.icon.setClass(this.column.iconClass);
        }
        
        this.columnText = new DisplayText(this);
        this.columnText.setText(this.column.title);

        super.doRender(htmlTableElement);
    }
}


/**
 * 
 * @author Gabor Kokeny
 */
class GridColumn extends Container {

    init() {
        super.init();
        this.addClass("ui-grid-column");
    }

    render() {
        var htmlTableElement = document.createElement("td");
        super.doRender(htmlTableElement);
    }
}

/**
 * 
 * @author Gabor Kokeny
 */
class GridBody extends Container {


    init() {
        super.init();
        this.addClass("ui-grid-body");

        var dataProvider = this.getGrid().getDataProvider();

        //        dataProvider.forEach(data => {
        //            var gridRow = new GridRow(this);
        //            this.getGrid().getColumnModel().forEach(column => {
        //                new GridColumn(gridRow);
        //            });
        //        });

    }

    render() {
        var htmlTableElement = document.createElement("tbody");
        super.doRender(htmlTableElement);
    }


    protected getGrid(): Grid {
        return <Grid>this.getContainer();
    }
}

