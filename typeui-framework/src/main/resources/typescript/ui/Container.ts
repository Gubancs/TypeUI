
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
    
    /**
     * Destroy container with all children component
     */
    destroy() {
        Log.groupStart("Destroy container: " + this.getId());
        Log.debug("Destroy children components", this.getChildren().size());
        this.children.forEach(function(child) {

            console.debug("Destroy child component", child);

            child.destroy();
        });

        super.destroy();

        Log.groupEnd();
    }
    
    /**
     * Get child component by index
     * 
     * @param {number} itemIndex The index of the child component
     */
    getComponent(itemIndex: number) {
        Assert.notNull(itemIndex, "itemIndex");

        if (itemIndex < 0 || itemIndex >= this.getChildren().size()) {
            Log.error("Item index out of range", itemIndex);
            return null;
        }

        return this.getChildren().get(itemIndex);
    }
}