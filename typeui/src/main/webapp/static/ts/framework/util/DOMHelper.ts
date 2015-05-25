

/**
 * Helper class for manipulating the DOM
 */
class DOMHelper {
    


    /**
     * Append a Node to the Body
     * 
     * @param {Node} node The node instance that should be append to the body
     */
    static appendToBody(node: Node): Node {
        return DOMHelper.append(node, document.body);
    }

    /**
     * Append node to the target node
     * 
     * @param {Node} node The node instance that should be append to the body
     * @param {Node} target The target node
     */
    static append(node: Node, target: Node): Node {
        if (target == null) {
            Log.error("Couldn't append component to DOM, because target node is undefined", node);
            return;
        }
        return target.appendChild(node);
    }

    static findById(id: string): HTMLElement {
        var element = document.getElementById(id);

        if (!element) {
            Log.error("There is no element with id", id);
        }

        return element;
    }

    static findByClass(className: string) {
        var nodeList = document.getElementsByClassName(className);
    }


    static getDocument() {
        return document;
    }

    static getBody() {
        return document.body;
    }


    static setClass(component: Component, className: string) {
        component.getElement().className = className;
    }

    static addClass(component: Component, className: string) {
        component.getElement().classList.add(className);
    }



    /**
     * Add CSS classlist to the HTMLElement
     * 
     * @param {HTMLElement} htmlElement
     * @param {List<string>} classList
     */
    private static addClassList(htmlElement: HTMLElement, classList: List<string>) {
        if (!htmlElement || ListUtils.isEmpty(classList)) {
            return;
        }

        classList.forEach(c=> {
            htmlElement.classList.add(c);
        });
    }


    /**
     * Render component to the container
     * 
     * @param {Component} component The component that should be render to the Container
     * @param {Container} parent The parent container
     */
    static renderComponent(component: Component) {
        DOMHelper.append(component.getElement(), component.getContainer().getElement());
        DOMHelper.addClassList(component.getElement(), component.getClassList());

        component.getElement().id = component.getId();
        component.getElement().disabled = component.isDisabled();
        
        CssHelper.setWidth(component.getElement(), component.getWidth());

        CssHelper.setVisible(component.getElement(), component.isVisible());
    }

    /**
     * Remove Component from the DOM
     * 
     * @param {Component} component
     */
    static remove(component: Component) {
        if (component.hasParent()) {
            var container = component.getContainer();
            container.getElement().removeChild(component.getElement());
        }
    }


}

