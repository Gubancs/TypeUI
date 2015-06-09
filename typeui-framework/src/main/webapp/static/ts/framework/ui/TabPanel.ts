

/**
 * A TabPanel osztály egységbe foglal több Panel-t, és segíti azok kezelését.
 * 
 * 
 * @author Gabor Kokeny
 */
class TabPanel extends Container {

    /**
     * Ez a változó tárolja az aktív index értékét, amely egy pozitív egész szám.
     * 
     * @property {number} activeTabIndex
     */
    private activeIndex: number = null;

    private activePanel: Panel;

    private menu: TabPanelMenu;

    /**
     * 
     * @param {Container} parent
     * @constructor
     */
    constructor(parent: Container) {
        super(parent, true);

        this.setClass("ui-tabpanel");
        this.getContainer().setClass("ui-tabpanel-wrapper");

        this.menu = new TabPanelMenu(this.getContainer());
    }

    add(panel: Panel) {
        if (!(panel instanceof Panel)) {
            Log.error("Item couldn't add to tabpanel, because it is not a Panel", panel);
        }

        super.add(panel);

        //Log.debug("TabPanel children :", this.getChildren());

        this.setActiveTabIndex(0);
    }

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
    setActiveTabIndex(index: number) {
        this.checkTabIndex(index);

        if (this.activeIndex == index) {
            return;
        }

        var panel = this.getPanel(index);
        this.setActivePanel(panel);
        this.activeIndex = index;

        Log.debug("TabPanel:setActiveTabIndex - The active Tab index is", this.activeIndex);
    }

    /**
     * 
     * @param {Panel} panel
     * @private
     */
    private setActivePanel(panel: Panel) {
        Assert.notNull(panel, "panel");

        if (this.activePanel) {
            this.activePanel.removeClass("active");
        }

        this.activePanel = panel;
        this.activePanel.addClass("active");
    }
    
    /**
     * Ez a metódus vissza adja az aktív panel indexét.
     * @return {number} Vissza adja a jelenleg aktív panel indexet. Ha nincs még panel hozzáadva a TabPanel-hez,
     * akkor a -1 értékkel tér vissza.
     */
    getActiveTabIndex(): number {
        return this.activeIndex ? this.activeIndex : -1;
    }
    
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
    private checkTabIndex(tabIndex: number) {

        if (tabIndex === null || tabIndex === undefined) {
            Log.error("The active tab index cannot be null or undifined");
        }

        if (tabIndex < 0) {
            Log.error("The active tab index cannot be negative, it is should be a positve number!");
        }

        if (tabIndex >= this.getChildren().size()) {
            Log.error("The active tab index should be less then " + this.getChildren().size());
        }

    }

    /**
     * Vissza adja a jelenleg aktív panelt. Az aktív panel módosítása 
     * a setActiveTabIndex metódus meghívásával lehetséges.
     * 
     * @return {Panel} Az aktív panel vagy null érték, ha a TapPanel még üres.
     */
    getActivePanel(): Panel {
        return this.activePanel;
    }
    
    /**
     * 
     * @param {number} index
     * @return {Panel}
     */
    getPanel(index: number): Panel {
        
        //TODO check it
        return <Panel>super.getComponent(index);
    }
}

/**
 * 
 * @author Gabor Kokeny
 */
class TabPanelMenu extends Container {

    constructor(parent: Container) {
        super(parent);
        this.setClass("ui-tabpanel-menu");
    }

    render() {
        var listElement = ElementFactory.createList();

        super.doRender(listElement);
    }
}