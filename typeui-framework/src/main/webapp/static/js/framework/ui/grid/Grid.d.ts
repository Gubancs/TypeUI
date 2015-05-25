/**
 * Grid UI component
 *
 * @author Gabor Kokeny
 */
declare class Grid extends Container {
    static DEFULT_CLASS: string;
    static DEFULT_WRAPPER_CLASS: string;
    private sortable;
    boolean: any;
    private emptyMessage;
    private dataProvider;
    private gridHeader;
    private gridBody;
    private gridFooter;
    constructor(parent: Container);
    protected init(): void;
    render(): void;
    setDataProvider(dataProvider: DataProvider): void;
    setEmptyMessage(emptyMessage: string): void;
    getEmptyMessage(): string;
    getColumnModel(): ColumnModel;
    getDataProvider(): DataProvider;
}
/**
 * Grid header
 *
 * @author Gabor Kokeny
 */
declare class GridHeader extends Container {
    constructor(parent: Grid);
    init(): void;
    render(): void;
    protected getColumnModel(): ColumnModel;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridRow extends Container {
    init(): void;
    render(): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridHeaderColumn extends Container {
    private column;
    private icon;
    private columnText;
    DisplayText: any;
    constructor(row: GridRow, column: Column);
    init(): void;
    render(): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridColumn extends Container {
    init(): void;
    render(): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridBody extends Container {
    init(): void;
    render(): void;
    protected getGrid(): Grid;
}
