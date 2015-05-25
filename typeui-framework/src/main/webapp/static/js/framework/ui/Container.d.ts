declare class Container extends Component {
    private children;
    constructor(parent: Container, useWrapperContainer?: boolean);
    protected init(): void;
    protected createComponents(): void;
    render(): void;
    /**
     * Render container with child components
     *
     * @protected
     */
    protected doRender(htmlElement: HTMLElement): void;
    /**
     * Add component to this container
     *
     */
    add(component: Component): void;
    /**
     * Remove component from this container
     *
     */
    remove(component: Component): void;
    /**
     * Get children of this container
     */
    getChildren(): List<Component>;
    /**
     * Destroy container with all children component
     */
    destroy(): void;
}
