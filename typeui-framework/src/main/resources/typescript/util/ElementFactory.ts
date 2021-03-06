
/**
 * Factory class for creating html DOM elements
 * 
 * @author Gabor Kokeny
 */
class ElementFactory {

    /**
     * Create a first level header element
     * 
     * @return {HTMLHeadingElement}
     */
    static createHeader1(): HTMLHeadingElement {
        return DOMHelper.getDocument().createElement("h1");
    }

    /**
     * Create en empty label html element
     * 
     * @return {HTMLLabelElement}
     */
    static createLabel(): HTMLLabelElement {
        return DOMHelper.getDocument().createElement("label");
    }

    /**
     * Create a table element
     * 
     * @return {HTMLTableElement}
     */
    static createGrid(): HTMLTableElement {
        return DOMHelper.getDocument().createElement("table");
    }

    /**
     * Create a div element
     * 
     * @return {HTMLDivElement}
     */
    static createDiv(): HTMLDivElement {
        return DOMHelper.getDocument().createElement("div");
    }

    /**
     * 
     */
    static createForm(): HTMLFormElement {
        return DOMHelper.getDocument().createElement("form");
    }
    
    /**
     * Create an input element
     * 
     * @return {HTMLInputElement}
     */
    static createInput(): HTMLInputElement {
        return DOMHelper.getDocument().createElement("input");
    }
    
    /**
     * Create a Button element
     * 
     * @return {HTMLButtonElement} 
     */
    static createButton(): HTMLButtonElement {
        return DOMHelper.getDocument().createElement("button");
    }

    /**
     * Crate en empty span html lement
     * 
     * @return {HTMLSpanElement}
     */
    static createSpan(): HTMLSpanElement {
        return DOMHelper.getDocument().createElement("span");
    }


    /**
     * Create a textarea DOM element
     * 
     * @return {HTMLTextAreaElement}
     */
    static createTextArea(): HTMLTextAreaElement {
        return DOMHelper.getDocument().createElement("textarea");
    }
    
    /**
    * Create a select html element
    * 
    * @return {HTMLSelectElement}
    */
    static createSelect(): HTMLSelectElement {
        return DOMHelper.getDocument().createElement("select");
    }
    
    /**
     * Create an option html element
     * 
     * @return {HTMLOptionElement}
     */
    static createOption(): HTMLOptionElement {
        return DOMHelper.getDocument().createElement("option");
    }
    
    /**
   * Create an icon element
   * 
   * @return {HTMLPhraseElement}
   */
    static createIcon(): HTMLPhraseElement {
        return DOMHelper.getDocument().createElement("i");
    }


    /**
     * Create a progress html element
     * 
     * @return {HTMLProgressElement}
     */
    static createProgress(): HTMLProgressElement {
        return DOMHelper.getDocument().createElement("progress");
    }
    
    
    /**
     * Create a list html element
     * 
     * @return {HTMLOptionElement}
     */
    static createList(): HTMLUListElement {
        return DOMHelper.getDocument().createElement("ul");
    }
    
     /**
     * Create a list item html element
     * 
     * @return {HTMLOptionElement}
     */
    static createListItem(): HTMLLIElement {
        return DOMHelper.getDocument().createElement("li");
    }
}