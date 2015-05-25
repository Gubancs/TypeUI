/**
 *
 * @author Gabor Kokeny
 */
declare class Panel extends Container {
    private panelHeader;
    private panelBody;
    private panelFooter;
    private panelTitle;
    private icon;
    /**
     * Create a new instance of Panel
     *
     * @parent {Container} parent The parent container
     */
    constructor(parent: Container);
    protected init(): void;
    setTitle(title: string): void;
    getBody(): Container;
    setIconClass(className: string): void;
}
