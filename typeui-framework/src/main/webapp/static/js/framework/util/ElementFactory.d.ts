/**
 * Factory class for creating html DOM elements
 *
 * @author Gabor Kokeny
 */
declare class ElementFactory {
    /**
     * Create a first level header element
     *
     * @return {HTMLHeadingElement}
     */
    static createHeader1(): HTMLHeadingElement;
    /**
     * Create en empty label html element
     *
     * @return {HTMLLabelElement}
     */
    static createLabel(): HTMLLabelElement;
    /**
     * Create a table element
     *
     * @return {HTMLTableElement}
     */
    static createGrid(): HTMLTableElement;
    /**
     * Create a div element
     *
     * @return {HTMLDivElement}
     */
    static createDiv(): HTMLDivElement;
    /**
     *
     */
    static createForm(): HTMLFormElement;
    /**
     * Create an input element
     *
     * @return {HTMLInputElement}
     */
    static createInput(): HTMLInputElement;
    /**
     * Create a Button element
     *
     * @return {HTMLButtonElement}
     */
    static createButton(): HTMLButtonElement;
    /**
     * Crate en empty span html lement
     *
     * @return {HTMLSpanElement}
     */
    static createSpan(): HTMLSpanElement;
    /**
     * Create a textarea DOM element
     *
     * @return {HTMLTextAreaElement}
     */
    static createTextArea(): HTMLTextAreaElement;
    /**
    * Create a select html element
    *
    * @return {HTMLSelectElement}
    */
    static createSelect(): HTMLSelectElement;
    /**
     * Create an option html element
     *
     * @return {HTMLOptionElement}
     */
    static createOption(): HTMLOptionElement;
    /**
   * Create an icon element
   *
   * @return {HTMLPhraseElement}
   */
    static createIcon(): HTMLPhraseElement;
    /**
     * Create a progress html element
     *
     * @return {HTMLProgressElement}
     */
    static createProgress(): HTMLProgressElement;
    /**
     * Create a list html element
     *
     * @return {HTMLOptionElement}
     */
    static createList(): HTMLUListElement;
}
