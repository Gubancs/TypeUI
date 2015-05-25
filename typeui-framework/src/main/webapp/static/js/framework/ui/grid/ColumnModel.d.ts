/**
 *
 * @author Gabor Kokeny
 */
declare class ColumnModel {
    private columns;
    constructor();
    addColumn(column: Column): void;
    forEach(callbackfn: (value: Column, index: number, array: Column[]) => void, thisArg?: any): void;
}
interface Column {
    name: string;
    title: string;
    iconClass?: string;
    sortable?: boolean;
}
