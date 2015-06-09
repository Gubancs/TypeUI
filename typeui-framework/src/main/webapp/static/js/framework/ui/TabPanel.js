var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * A TabPanel osztály egységbe foglal több Panel-t, és segíti azok kezelését.
 *
 *
 * @author Gabor Kokeny
 */
var TabPanel = (function (_super) {
    __extends(TabPanel, _super);
    /**
     *
     * @param {Container} parent
     * @constructor
     */
    function TabPanel(parent) {
        _super.call(this, parent, true);
        /**
         * Ez a változó tárolja az aktív index értékét, amely egy pozitív egész szám.
         *
         * @property {number} activeTabIndex
         */
        this.activeIndex = null;
        this.setClass("ui-tabpanel");
        this.getContainer().setClass("ui-tabpanel-wrapper");
        this.menu = new TabPanelMenu(this.getContainer());
    }
    TabPanel.prototype.add = function (panel) {
        if (!(panel instanceof Panel)) {
            Log.error("Item couldn't add to tabpanel, because it is not a Panel", panel);
        }
        _super.prototype.add.call(this, panel);
        //Log.debug("TabPanel children :", this.getChildren());
        this.setActiveTabIndex(0);
    };
    /**
     * Ezzel a metódussal lehet beállítani, hogy melyik legyen az aktív panel.
     * Paraméterként egy számot kell megadnunk, ami nem lehet null, undifined, vagy negatív érték.
     * A TabPanel 0 bázisindexű, így ha azt szeretnénk, hogy az első Panel legyen aktív akkor 0-t kell
     * paraméterként megadni.
     *
     * Ha a paraméterként megadott index megegyezik az aktuális aktív index értékével, akkor a metódus kilép.
     *
     * @param {number} activeIndex
     */
    TabPanel.prototype.setActiveTabIndex = function (index) {
        this.checkTabIndex(index);
        if (this.activeIndex == index) {
            return;
        }
        var panel = this.getPanel(index);
        this.setActivePanel(panel);
        this.activeIndex = index;
        Log.debug("TabPanel:setActiveTabIndex - The active Tab index is", this.activeIndex);
    };
    /**
     *
     * @param {Panel} panel
     * @private
     */
    TabPanel.prototype.setActivePanel = function (panel) {
        Assert.notNull(panel, "panel");
        if (this.activePanel) {
            this.activePanel.removeClass("active");
        }
        this.activePanel = panel;
        this.activePanel.addClass("active");
    };
    /**
     * Ez a metódus vissza adja az aktív panel indexét.
     * @return {number} Vissza adja a jelenleg aktív panel indexet. Ha nincs még panel hozzáadva a TabPanel-hez,
     * akkor a -1 értékkel tér vissza.
     */
    TabPanel.prototype.getActiveTabIndex = function () {
        return this.activeIndex ? this.activeIndex : -1;
    };
    /**
     * Ez a helper metódus eldönti, hogy a paraméterként kapott egész szám az megfelel-e
     * a TabPanel által megkövetelt elvárásoknak.
     *
     *  - Nem lehet null vagy undifined
     *  - Nem lehet negatív érték
     *  - Kisebb kell, hogy legyen mint a panelek száma.
     *
     * @param {number} tabIndex Az ellenőrizni kívánt index.
     * @private
     */
    TabPanel.prototype.checkTabIndex = function (tabIndex) {
        if (tabIndex === null || tabIndex === undefined) {
            Log.error("The active tab index cannot be null or undifined");
        }
        if (tabIndex < 0) {
            Log.error("The active tab index cannot be negative, it is should be a positve number!");
        }
        if (tabIndex >= this.getChildren().size()) {
            Log.error("The active tab index should be less then " + this.getChildren().size());
        }
    };
    /**
     * Vissza adja a jelenleg aktív panelt. Az aktív panel módosítása
     * a setActiveTabIndex metódus meghívásával lehetséges.
     *
     * @return {Panel} Az aktív panel vagy null érték, ha a TapPanel még üres.
     */
    TabPanel.prototype.getActivePanel = function () {
        return this.activePanel;
    };
    /**
     *
     * @param {number} index
     * @return {Panel}
     */
    TabPanel.prototype.getPanel = function (index) {
        //TODO check it
        return _super.prototype.getComponent.call(this, index);
    };
    return TabPanel;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var TabPanelMenu = (function (_super) {
    __extends(TabPanelMenu, _super);
    function TabPanelMenu(parent) {
        _super.call(this, parent);
        this.setClass("ui-tabpanel-menu");
    }
    TabPanelMenu.prototype.render = function () {
        var listElement = ElementFactory.createList();
        _super.prototype.doRender.call(this, listElement);
    };
    return TabPanelMenu;
})(Container);
//# sourceMappingURL=TabPanel.js.map