

/**
 * 
 * @author Gabor Kokeny
 */
class Menu extends Container {

    constructor(parent: Container) {
        super(parent);
        this.setClass("ui-menu");
    }

    render() {
        var listElement = ElementFactory.createList();
        super.doRender(listElement);
    }
    
}