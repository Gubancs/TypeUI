/**
 * Grid UI component
 *
 * @author Gabor Kokeny
 */
declare class Grid extends Container {
    static DEFULT_CLASS: string;
    private sortable;
    boolean: any;
    private emptyMessage;
    private dataProvider;
    constructor(parent: Container);
    render(): void;
    setDataProvider(dataProvider: DataProvider): void;
    setEmptyMessage(emptyMessage: string): void;
    getEmptyMessage(): string;
}
