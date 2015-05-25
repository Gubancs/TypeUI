
/**
 * Helper class for manipulating inline CSS of DOM elements
 * 
 * @author Gabor Kokeny
 */
class CssHelper {


    /**
     * Set width to htmlElement in pixels
     * 
     * @param {HTMLElement} htmlElement
     * @param {number} width The number of width in pixels
     */
    static setWidth(htmlElement: HTMLElement, width: number) {
        htmlElement.style.width = width + "px";
    }
    
    /**
     * Set leftMargin to htmlElement in pixels
     * 
     * @param {HTMLElement} htmlElement
     * @param {number} marginLeft The number of width in pixels
     */
    static setLeftMargin(htmlElement: HTMLElement, marginLeft: number) {
        htmlElement.style.marginLeft = marginLeft + "px";
    }
    
    /**
    * Set visibility the element
    * 
    * @param {HTMLElement} htmlElement
    * @param {boolean} visible 
    */
    static setVisible(htmlElement: HTMLElement, visible: boolean) {
        htmlElement.style.display = visible ? "" : "none";
    }
}