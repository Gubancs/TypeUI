/**
 *
 * @author Gabor Kokeny
 */
declare class Progressbar extends Component {
    private value;
    private maxValue;
    constructor(container: Container);
    render(): void;
    setMaxValue(maxValue: number): void;
    getMaxValue(): number;
    setValue(value: number): void;
    getValue(): number;
    getElement(): HTMLProgressElement;
}
