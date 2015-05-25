

/**
 * 
 * @author Gabor Kokeny
 */
class ColumnModel {

    private columns: List<Column>;

    constructor() {
        this.columns = new List<Column>();
    }

    addColumn(column: Column) {
        this.columns.add(column);
    }

    forEach(callbackfn: (value: Column, index: number, array: Column[]) => void, thisArg?: any) {
        this.columns.forEach(callbackfn);
    }

}

interface Column {
    name: string;
    title: string;
    iconClass?: string;
    sortable?: boolean;
}