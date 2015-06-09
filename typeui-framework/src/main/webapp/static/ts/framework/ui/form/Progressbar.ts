

/**
 * 
 * @author Gabor Kokeny
 */
class Progressbar extends Component {

    private value: number;

    private maxValue: number;
    

    constructor(container: Container) {
        super(container);

        this.addClass("ui-progressbar");
    }
    
    render() {
        var progressElement = ElementFactory.createProgress();

        if (this.getMaxValue())
            progressElement.max = this.getMaxValue();

        if (this.getValue())
            progressElement.value = this.getValue();

        super.doRender(progressElement);
    }

    setMaxValue(maxValue: number) {
        if (this.isRendered()) {
            this.getElement().max = this.getMaxValue();
        }
        this.maxValue = maxValue;
    }

    getMaxValue(): number {
        return this.maxValue;
    }

    setValue(value: number) {
        if (this.isRendered()) {
            this.getElement().value = this.getMaxValue();
        }
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    getElement(): HTMLProgressElement {
        return <HTMLProgressElement>super.getElement();
    }
}