declare enum TextType {
    SPAN = 0,
    H1 = 1,
    H2 = 2,
    H3 = 3,
    H4 = 4,
    H5 = 5,
    H6 = 6,
    PARAGRAPH = 7,
}
/**
 *
 * @author Gabor Kokeny
 */
declare class DisplayText extends Component {
    private text;
    private type;
    constructor(parent: Container, type?: TextType);
    render(): void;
    private createElement(type);
    setText(text: string): void;
    getText(): string;
}
