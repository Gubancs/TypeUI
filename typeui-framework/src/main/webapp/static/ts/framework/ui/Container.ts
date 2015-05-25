
class Container extends Component {

    private children: List<Component>;


    constructor(parent: Container, useWrapperContainer?: boolean) {
        super(parent, useWrapperContainer);

        this.children = new List<Component>();

        this.init();
        this.createComponents();
    }

    protected init() {
    }

    protected createComponents() {
    }


    render() {
        var divElement = ElementFactory.createDiv();
        this.doRender(divElement);
    }

    /**
     * Render container with child components
     * 
     * @protected
     */
    protected doRender(htmlElement: HTMLElement) {
        super.doRender(htmlElement);

        this.children.forEach(c => {
            c.render();
        });
    }

    /**
     * Add component to this container
     * 
     */
    add(component: Component) {
        this.children.add(component);
    }

    /**
     * Remove component from this container
     * 
     */
    remove(component: Component) {
        this.children.remove(component);
    }
    
    /**
     * Get children of this container
     */
    getChildren(): List<Component> {
        return this.children;
    }

    destroy() {
        this.children.forEach(c => {
            c.destroy();
        });

        super.destroy();
    }

}