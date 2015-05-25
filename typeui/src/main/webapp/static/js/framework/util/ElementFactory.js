/**
 * Factory class for creating html DOM elements
 *
 * @author Gabor Kokeny
 */
var ElementFactory = (function () {
    function ElementFactory() {
    }
    /**
     * Create a first level header element
     *
     * @return {HTMLHeadingElement}
     */
    ElementFactory.createHeader1 = function () {
        return DOMHelper.getDocument().createElement("h1");
    };
    /**
     * Create en empty label html element
     *
     * @return {HTMLLabelElement}
     */
    ElementFactory.createLabel = function () {
        return DOMHelper.getDocument().createElement("label");
    };
    /**
     * Create a table element
     *
     * @return {HTMLTableElement}
     */
    ElementFactory.createGrid = function () {
        return DOMHelper.getDocument().createElement("table");
    };
    /**
     * Create a div element
     *
     * @return {HTMLDivElement}
     */
    ElementFactory.createDiv = function () {
        return DOMHelper.getDocument().createElement("div");
    };
    /**
     *
     */
    ElementFactory.createForm = function () {
        return DOMHelper.getDocument().createElement("form");
    };
    /**
     * Create an input element
     *
     * @return {HTMLInputElement}
     */
    ElementFactory.createInput = function () {
        return DOMHelper.getDocument().createElement("input");
    };
    /**
     * Create a Button element
     *
     * @return {HTMLButtonElement}
     */
    ElementFactory.createButton = function () {
        return DOMHelper.getDocument().createElement("button");
    };
    /**
     * Crate en empty span html lement
     *
     * @return {HTMLSpanElement}
     */
    ElementFactory.createSpan = function () {
        return DOMHelper.getDocument().createElement("span");
    };
    /**
     * Create a textarea DOM element
     *
     * @return {HTMLTextAreaElement}
     */
    ElementFactory.createTextArea = function () {
        return DOMHelper.getDocument().createElement("textarea");
    };
    /**
    * Create a select html element
    *
    * @return {HTMLSelectElement}
    */
    ElementFactory.createSelect = function () {
        return DOMHelper.getDocument().createElement("select");
    };
    /**
     * Create an option html element
     *
     * @return {HTMLOptionElement}
     */
    ElementFactory.createOption = function () {
        return DOMHelper.getDocument().createElement("option");
    };
    /**
   * Create an icon element
   *
   * @return {HTML}
   */
    ElementFactory.createIcon = function () {
        return DOMHelper.getDocument().createElement("i");
    };
    return ElementFactory;
})();
//# sourceMappingURL=ElementFactory.js.map