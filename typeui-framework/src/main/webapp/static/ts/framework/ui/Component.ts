
enum VerticalAlign {
    TOP, BOTTOM, MIDDLE
}

/**
 * This class represents an UI component
 * 
 * @author Gabor Kokeny
 */
class Component extends Observable {

    /**
     * 
     * The id of this component, this is an auto generated Sequannce
     */
    private id: string;


    /**
     * 
     * The visiblity of this component in boolean
     */
    private visible: boolean;

    /**
     * 
     * The HTMLElement in  the DOM
     */
    private htmlElement: HTMLElement;

    
    /**
     * 
     * Parent contantainer
     */
    private parent: Container;
    
    /**
     * 
     * CSS class list for this component
     */
    private classList: List<string>;

    /**
     * 
     * Represents the component already rendered
     */
    private rendered: boolean;

    
    /**
     * 
     * The width of this component in pixels
     */
    private width: number;

    
    /**
     * 
     * Represents component disabled status
     */
    private disabled: boolean;

    
    /**
     * 
     * Vertical alignment inside the parent container
     */
    private verticalAlign: VerticalAlign;

    
    /**
     * 
     * Use wrapper container
     */
    private useWrapperContainer: boolean = false;

    

    /**
     * Create a new instance of component. Parent container is required.
     * 
     * @param {Container} parent The parent container is required
     * @param {boolean} useWrapperContainer This optional parameter. If useWrapperContainer is true,
     * the component will be rendered inside a wrapper Container
     */
    constructor(parent: Container, useWrapperContainer?: boolean) {
        super();
        this.useWrapperContainer = useWrapperContainer || this.useWrapperContainer;

        this.parent = this.useWrapperContainer ? new Container(parent) : parent;

        this.classList = new List<string>();
        this.visible = true;
        this.rendered = false;
        this.disabled = false;
        this.verticalAlign = VerticalAlign.MIDDLE;
        this.id = Sequence.next();
        
        if (this.parent) {
            this.parent.add(this);
        }
        
        ComponentManager.register(this);
    }


    setParent(parent: Container) {
        var c = this.useWrapperContainer ? this.getContainer() : this;
        this.getContainer().remove(c);

        this.parent = parent;
        this.parent.add(c);
    }
    
    /**
     * 
     * Render component
     */
    render() {
        if (this.isRendered()) {
            Log.error("Component is already rendered ", this);
        }
    }

    protected doRender(htmlElement: HTMLElement) {
        this.beforeRender();

        this.htmlElement = htmlElement;
        this.initEventListeners();
        if (this.parent) {
            DOMHelper.renderComponent(this);
            this.rendered = true;

            this.afterRender();
        }
    }

    protected beforeRender() {
    }

    protected afterRender() {
    }

    protected initEventListeners() {
        var htmlElement = this.getElement();
        var listeners = this.getAllListeners();

        listeners.forEach(eventName=> {
            listeners.get(eventName).forEach(listener=> {
                htmlElement.addEventListener(eventName, listener);

            });
           //Log.debug("Initialize listener", eventName, listeners.get(eventName));
        });

    }

    addListener(eventName: string, listener: EventListener) {
        super.addListener(eventName, listener);
    }

    removeListeners(eventName: string): boolean {
        var htmlElement = this.getElement();
        var listeners = super.getListeners(eventName);

        listeners.forEach(listener => {
            htmlElement.removeEventListener(eventName, listener);
        });

        return super.removeListeners(eventName);
    }

    on(eventName: string, listener: EventListener) {
        this.addListener(eventName, listener);
    }

    getContainer(): Container {
        return this.parent;
    }

    getElement(): HTMLElement {
        return this.htmlElement;
    }


    addClass(className: string) {
        if (this.isRendered()) {
            DOMHelper.addClass(this, className);
        }
        this.classList.add(className);
    }

    /**
     * 
     * Set the CSS class
     */
    setClass(className: string) {
        this.classList.clear();
        className.split(" ").forEach(cls=> {
            this.addClass(cls);
        });
    }
    
    /**
     * Remove CSS class from this component
     * 
     * @param {string} className The name of the CSS class that should be removed
     */
    removeClass(className:string){
        this.classList.remove(className);
    }

    getClassList(): List<string> {
        return this.classList;
    }

    isRendered(): boolean {
        return this.rendered;
    }

    /**
     * Remove htmlElement from the DOM and destroy itself.
     * 
     */
    destroy() {

        if (this.isRendered()) {
            DOMHelper.remove(this);
        }

        if (this.hasParent()) {
            this.getContainer().remove(this);
        }

        if (this.useWrapperContainer) {
            this.getContainer().destroy();
        }
        
        ComponentManager.unregister(this);
        //Log.debug("Destroy component ", this);
    }

    /**
     * Check the parent Component is null
     * 
     * @return {boolean} Return true if his parent is not null
     */
    hasParent(): boolean {
        return this.parent != null;
    }

    isRoot(): boolean {
        return !this.hasParent();
    }

    /**
     * Set visibility of this element
     * 
     * @param {boolean} visible 
     */
    setVisible(visible: boolean) {
        if (this.useWrapperContainer) {
            this.getContainer().setVisible(visible);
        } else {
            if (this.isRendered()) {
                CssHelper.setVisible(this.getElement(), visible);
            }
            this.visible = visible;
        }
    }

    isVisible(): boolean {
        return this.visible;
    }
    
    /**
     * 
     * Show  the component
     * 
     * @return {Component} Return the visible component
     */
    show(): Component {
        this.setVisible(true);
        return this;
    }
    
    /**
     * Hide the component
     * 
     * @return {Component} Return the hidden component
     */
    hide(): Component {
        this.setVisible(false);
        return this;
    }

    setWidth(width: number) {
        if (this.isRendered()) {
            CssHelper.setWidth(this.getElement(), width);
        }

        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }

    setId(id: string) {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    /**
     * Disabled the component
     * 
     * @param {boolean} disabled
     */
    setDisabled(disabled: boolean) {
        if (this.isRendered()) {
            this.getElement().disabled = this.isDisabled();
        }

        this.disabled = disabled;
    }

    /**
     * Check the component disabled state
     * 
     * @return Return true if the component is disabled
     */
    isDisabled(): boolean {
        return this.disabled;
    }
    
    /**
     * Set vertical align to this component
     * 
     * @param {VerticalAlign} verticalAlign
     */
    setVerticalAlign(verticalAlign: VerticalAlign) {
        if (this.isRendered()) {
            this.getElement().disabled = this.isDisabled();
        }

        this.verticalAlign = verticalAlign;
    }

    /**
     * Get vertical align position
     * 
     * @return {VerticalAlign}
     */
    getVerticalAlign(): VerticalAlign {
        return this.verticalAlign;
    }


}
