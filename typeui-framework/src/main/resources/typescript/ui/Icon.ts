

/**
 * 
 * @author Gabor Kokeny
 */
class Icon extends Component {

    constructor(parent: Container) {
        super(parent);
    }

    render() {
        var htmlElement = ElementFactory.createIcon();
        super.doRender(htmlElement);
    }

    setClass(className: string) {
        super.setClass(className);
        super.addClass("ui-icon");
    }

    hasClass(): boolean {
        return ListUtils.isEmpty(this.getClassList());
    }

}