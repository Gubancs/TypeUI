

/**
 * 
 * @author Gabor Kokeny
 */
class Panel extends Container {

    private panelHeader: Container;

    private panelBody: Container;

    private panelFooter: Container;

    private panelTitle: DisplayText;

    
    /**
     * Create a new instance of Panel
     * 
     * @parent {Container} parent The parent container
     */
    constructor(parent: Container) {
        super(parent, false);
    }

    protected init() {
        this.setClass("ui-panel");

        //Create header
        this.panelHeader = new Container(this);
        this.panelHeader.addClass("ui-panel-header");
        this.panelTitle = new DisplayText(this.panelHeader, TextType.SPAN);
        this.panelTitle.addClass("ui-panel-title");

        
        //Create body
        this.panelBody = new Container(this);
        this.panelBody.addClass("ui-panel-body");
        
        //Create footer
        this.panelFooter = new Container(this);
        this.panelFooter.addClass("ui-panel-footer");

        super.init();
    }

    setTitle(title: string) {
        this.panelTitle.setText(title);
    }

    getBody(): Container {
        return this.panelBody;
    }
}