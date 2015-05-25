declare class Label extends Component {
    private text;
    private htmlFor;
    constructor(container: Container);
    setText(text: string): void;
    getText(): string;
    render(): void;
    setHtmlFor(htmlFor: Component): void;
}
