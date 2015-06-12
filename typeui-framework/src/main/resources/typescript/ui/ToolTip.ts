

/**
 * 
 * @author Gabor Kokeny
 */
class Tooltip extends Component {

    private icon: Icon;

    private displayText: DisplayText;

    constructor(parent: Container) {
        super(parent);
    }

    setText(text: string) {
        this.displayText.setText(text);
    }

    setIconClass(iconClass: string) {
        this.icon.setClass(iconClass);
    }
}