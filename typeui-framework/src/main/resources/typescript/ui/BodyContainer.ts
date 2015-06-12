

class BodyContainer extends Container {

    static DEFAULT_CLASS = "ui-body"
    
    constructor() {
        super(null);

        this.addClass(BodyContainer.DEFAULT_CLASS);
    }

    render() {
        super.doRender(DOMHelper.getBody());
    }
}
