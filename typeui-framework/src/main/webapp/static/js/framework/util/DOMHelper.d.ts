/**
 * Helper class for manipulating the DOM
 */
declare class DOMHelper {
    /**
     * Append a Node to the Body
     *
     * @param {Node} node The node instance that should be append to the body
     */
    static appendToBody(node: Node): Node;
    /**
     * Append node to the target node
     *
     * @param {Node} node The node instance that should be append to the body
     * @param {Node} target The target node
     */
    static append(node: Node, target: Node): Node;
    static findById(id: string): HTMLElement;
    static findByClass(className: string): void;
    static getDocument(): Document;
    static getBody(): HTMLElement;
    static setClass(component: Component, className: string): void;
    static addClass(component: Component, className: string): void;
    /**
     * Add CSS classlist to the HTMLElement
     *
     * @param {HTMLElement} htmlElement
     * @param {List<string>} classList
     */
    private static addClassList(htmlElement, classList);
    /**
     * Render component to the container
     *
     * @param {Component} component The component that should be render to the Container
     * @param {Container} parent The parent container
     */
    static renderComponent(component: Component): void;
    /**
     * Remove Component from the DOM
     *
     * @param {Component} component
     */
    static remove(component: Component): void;
}
