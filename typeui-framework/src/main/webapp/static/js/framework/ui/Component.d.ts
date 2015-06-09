declare enum VerticalAlign {
    TOP = 0,
    BOTTOM = 1,
    MIDDLE = 2,
}
/**
 * This class represents an UI component
 *
 * @author Gabor Kokeny
 */
declare class Component extends Observable {
    /**
     *
     * The id of this component, this is an auto generated Sequannce
     */
    private id;
    /**
     *
     * The visiblity of this component in boolean
     */
    private visible;
    /**
     *
     * The HTMLElement in  the DOM
     */
    private htmlElement;
    /**
     *
     * Parent contantainer
     */
    private parent;
    /**
     *
     * CSS class list for this component
     */
    private classList;
    /**
     *
     * Represents the component already rendered
     */
    private rendered;
    /**
     *
     * The width of this component in pixels
     */
    private width;
    /**
     *
     * Represents component disabled status
     */
    private disabled;
    /**
     *
     * Vertical alignment inside the parent container
     */
    private verticalAlign;
    /**
     *
     * Use wrapper container
     */
    private useWrapperContainer;
    /**
     * Create a new instance of component. Parent container is required.
     *
     * @param {Container} parent The parent container is required
     * @param {boolean} useWrapperContainer This optional parameter. If useWrapperContainer is true,
     * the component will be rendered inside a wrapper Container
     */
    constructor(parent: Container, useWrapperContainer?: boolean);
    setParent(parent: Container): void;
    /**
     *
     * Render component
     */
    render(): void;
    protected doRender(htmlElement: HTMLElement): void;
    protected beforeRender(): void;
    protected afterRender(): void;
    protected initEventListeners(): void;
    addListener(eventName: string, listener: EventListener): void;
    removeListeners(eventName: string): boolean;
    on(eventName: string, listener: EventListener): void;
    getContainer(): Container;
    getElement(): HTMLElement;
    addClass(className: string): void;
    /**
     *
     * Set the CSS class
     */
    setClass(className: string): void;
    /**
     * Remove CSS class from this component
     *
     * @param {string} className The name of the CSS class that should be removed
     */
    removeClass(className: string): void;
    getClassList(): List<string>;
    isRendered(): boolean;
    /**
     * Remove htmlElement from the DOM and destroy itself.
     *
     */
    destroy(): void;
    /**
     * Check the parent Component is null
     *
     * @return {boolean} Return true if his parent is not null
     */
    hasParent(): boolean;
    isRoot(): boolean;
    /**
     * Set visibility of this element
     *
     * @param {boolean} visible
     */
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    /**
     *
     * Show  the component
     *
     * @return {Component} Return the visible component
     */
    show(): Component;
    /**
     * Hide the component
     *
     * @return {Component} Return the hidden component
     */
    hide(): Component;
    setWidth(width: number): void;
    getWidth(): number;
    setId(id: string): void;
    getId(): string;
    /**
     * Disabled the component
     *
     * @param {boolean} disabled
     */
    setDisabled(disabled: boolean): void;
    /**
     * Check the component disabled state
     *
     * @return Return true if the component is disabled
     */
    isDisabled(): boolean;
    /**
     * Set vertical align to this component
     *
     * @param {VerticalAlign} verticalAlign
     */
    setVerticalAlign(verticalAlign: VerticalAlign): void;
    /**
     * Get vertical align position
     *
     * @return {VerticalAlign}
     */
    getVerticalAlign(): VerticalAlign;
}
