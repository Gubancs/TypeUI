

/**
 * Grid UI component
 * 
 * @author Gabor Kokeny
 */
class Grid extends Container {

    static DEFULT_CLASS = "ui-grid";

    private sortable; boolean;

    private emptyMessage: string;

    private dataProvider: DataProvider;

    constructor(parent: Container) {
        super(parent);

        this.addClass(Grid.DEFULT_CLASS);
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

}