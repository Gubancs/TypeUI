/**
 * A TabPanel osztály egységbe foglal több Panel-t, és segíti azok kezelését.
 *
 *
 * @author Gabor Kokeny
 */
declare class TabPanel extends Container {
    /**
     * Ez a változó tárolja az aktív index értékét, amely egy pozitív egész szám.
     *
     * @property {number} activeTabIndex
     */
    private activeIndex;
    private activePanel;
    private menu;
    /**
     *
     * @param {Container} parent
     * @constructor
     */
    constructor(parent: Container);
    add(panel: Panel): void;
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
    setActiveTabIndex(index: number): void;
    /**
     *
     * @param {Panel} panel
     * @private
     */
    private setActivePanel(panel);
    /**
     * Ez a metódus vissza adja az aktív panel indexét.
     * @return {number} Vissza adja a jelenleg aktív panel indexet. Ha nincs még panel hozzáadva a TabPanel-hez,
     * akkor a -1 értékkel tér vissza.
     */
    getActiveTabIndex(): number;
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
    private checkTabIndex(tabIndex);
    /**
     * Vissza adja a jelenleg aktív panelt. Az aktív panel módosítása
     * a setActiveTabIndex metódus meghívásával lehetséges.
     *
     * @return {Panel} Az aktív panel vagy null érték, ha a TapPanel még üres.
     */
    getActivePanel(): Panel;
    /**
     *
     * @param {number} index
     * @return {Panel}
     */
    getPanel(index: number): Panel;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class TabPanelMenu extends Container {
    constructor(parent: Container);
    render(): void;
}
