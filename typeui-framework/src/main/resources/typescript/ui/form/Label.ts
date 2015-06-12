

class Label extends Component {

    private text: string;

    private htmlFor: Component;

    constructor(container: Container) {
        super(container);

        this.addClass("ui-label");
    }

    setText(text: string) {

        if (this.isRendered()) {
            this.getElement().textContent = this.getText();
        }

        this.text = text;
    }

    getText(): string {
        return this.text;
    }


    render() {
        var element = ElementFactory.createLabel();
        super.doRender(element);
        if (this.htmlFor) {
            element.htmlFor = this.htmlFor.getId();
        }
        element.textContent = this.getText();
    }


    setHtmlFor(htmlFor: Component) {
        this.htmlFor = htmlFor;
    }
}