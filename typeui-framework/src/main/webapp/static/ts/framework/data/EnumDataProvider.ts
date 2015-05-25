
/**
 * 
 * Data provider for enumerations
 * 
 * @author Gabor Kokeny
 */
class EnumDataProvider implements DataProvider {

    private dataProvider: DataProvider;

    constructor(object: Object) {
        Log.info("Object ", object);

        var list = new List<any>();
        for (var val in object) {
            if (isNaN(val)) {
                list.add(val);
            }
        }
        this.dataProvider = new ListDataProvider<any>(list);
    }

    getValue<T>(data: T): string {
        return this.dataProvider.getValue(data);
    }

    forEach<T>(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        this.dataProvider.forEach(callbackfn);
    }
}