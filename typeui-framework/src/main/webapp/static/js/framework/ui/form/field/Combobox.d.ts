/**
 * @author Gabor Kokeny
 */
declare class Combobox extends TriggerField {
    static DEFAULT_CLASS: string;
    static DEFAULT_WRAPPER_CLASS: string;
    private dataProvider;
    private labelProvider;
    private options;
    constructor(form: Form);
    render(): void;
    setDataProvider(dataProvider: DataProvider): void;
    setLabelProvider(labelProvider: LabelProvider): void;
}
declare class ComboboxOption extends Component {
    private label;
    private value;
    private selected;
    constructor(combobox: Container);
    render(): void;
    setLabel(label: string): void;
    getLabel(): string;
    getValue(): string;
    setValue(value: string): void;
}
