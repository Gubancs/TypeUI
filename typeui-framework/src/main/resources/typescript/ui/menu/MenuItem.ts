
/**
 * 
 * @author Gabor Kokeny
 */
class MenuItem extends Container {

    private button: Button;

    constructor(menu: Menu) {
        super(menu);
        this.setClass("ui-menu-item");

        this.button = new Button(this);
    }

    render() {
        var listElement = ElementFactory.createListItem();
        super.doRender(listElement);
    }

    setText(text: string) {
        this.button.setText(text);
    }

    getText(): string {
        return this.button.getText();
    }

    setIconClass(iconClass: string) {
        this.button.setIconClass(iconClass);
    }

    addClickListener(e: EventListener) {
        this.button.addClickListener(e);
    }
}