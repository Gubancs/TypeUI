/**
 * Helper class for manipulating inline CSS of DOM elements
 *
 * @author Gabor Kokeny
 */
var CssHelper = (function () {
    function CssHelper() {
    }
    /**
     * Set width to htmlElement in pixels
     *
     * @param {HTMLElement} htmlElement
     * @param {number} width The number of width in pixels
     */
    CssHelper.setWidth = function (htmlElement, width) {
        htmlElement.style.width = width + "px";
    };
    /**
     * Set leftMargin to htmlElement in pixels
     *
     * @param {HTMLElement} htmlElement
     * @param {number} marginLeft The number of width in pixels
     */
    CssHelper.setLeftMargin = function (htmlElement, marginLeft) {
        htmlElement.style.marginLeft = marginLeft + "px";
    };
    /**
    * Set visibility the element
    *
    * @param {HTMLElement} htmlElement
    * @param {boolean} visible
    */
    CssHelper.setVisible = function (htmlElement, visible) {
        htmlElement.style.display = visible ? "" : "none";
    };
    return CssHelper;
})();
//# sourceMappingURL=CssHelper.js.map