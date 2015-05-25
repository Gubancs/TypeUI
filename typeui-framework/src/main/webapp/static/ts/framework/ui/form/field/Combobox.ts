
/**
 * @author Gabor Kokeny
 */
class Combobox extends TriggerField {
    
    static DEFAULT_CLASS: string = "ui-combobox";
    
    static DEFAULT_WRAPPER_CLASS: string = "ui-combobox-wrapper";

    private dataProvider: DataProvider;

    private labelProvider: LabelProvider;

    private options: List<ComboboxOption>;

    constructor(form: Form) {
        super(form);

        this.options = new List<ComboboxOption>();
        this.setClass(Combobox.DEFAULT_CLASS);
        this.getContainer().setClass(Combobox.DEFAULT_WRAPPER_CLASS);

    }

    render() {
        var htmlSelectelement = ElementFactory.createSelect();

        if (this.dataProvider != null) {
            this.dataProvider.forEach(data => {
                var option = new ComboboxOption(this.getContainer());

                if (this.labelProvider) {
                    option.setLabel(this.labelProvider.getLabel(data));
                }
                else {
                    option.setLabel(data.toString());
                }
                option.setValue(this.dataProvider.getValue(data));

                this.options.add(option);
            });
        }

        super.doRender(htmlSelectelement);
    }

    setDataProvider(dataProvider: DataProvider) {
        this.dataProvider = dataProvider;
    }

    setLabelProvider(labelProvider: LabelProvider) {
        this.labelProvider = labelProvider;
    }

}

class ComboboxOption extends Component {

    private label: string;

    private value: string;

    private selected: boolean;

    constructor(combobox: Container) {
        super(combobox);

        this.addClass("ui-option");
    }
    
    render() {
        var htmlOptionElement = ElementFactory.createOption();

        htmlOptionElement.text = this.getLabel();
        htmlOptionElement.label = this.getLabel();
        if (this.getValue()) {
            htmlOptionElement.value = this.getValue();
        }

        super.doRender(htmlOptionElement);
    }

    setLabel(label: string) {
        this.label = label;
    }

    getLabel(): string {
        return this.label;
    }

    getValue(): string {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
    }
    
}