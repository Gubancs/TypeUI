/**
 *
 * @author Gabor Kokeny
 */
declare class Progressbar extends Component {
    private value;
    private maxValue;
    constructor(container: Container);
    render(): void;
    setMaxValue(maxValue: number): void;
    getMaxValue(): number;
    setValue(value: number): void;
    getValue(): number;
    getElement(): HTMLProgressElement;
}
/**
 *
 * Utility class for List
 */
declare class ListUtils {
    /**
     * Check the method parameter is null or is empty
     *
     * @return Return true if the parameter 'list' is null or is an empty list
     */
    static isEmpty(list: List<any>): boolean;
    /**
     * Find the minimum elements in a list that
     * contains a Comparable objects.
     *
     * @param {List<T>} list
     * @return If the method parameter 'list' is empty then return null,
     * else return the minium element in the list
     */
    static min<T extends Comparable>(list: List<T>): T;
    /**
     * Find the maximum elements in a list that
     * contains a Comparable objects.
     *
     * @param {List<T>} list
     * @return If the method parameter 'list' is empty then return null,
     * else return the max element in the list
     */
    static max<T extends Comparable>(list: List<T>): T;
    /**
     * Sort elements in the list
     *
     * @param {List<T>} list A list that should be sort
     * @return {List<T>} Return the sorted list
     */
    static sort<T extends Comparable>(list: List<T>): List<T>;
}
/**
 *
 * Data provider for enumerations
 *
 * @author Gabor Kokeny
 */
declare class EnumDataProvider implements DataProvider {
    private dataProvider;
    constructor(object: Object);
    getValue<T>(data: T): string;
    forEach<T>(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    isEmpty(): boolean;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class Menu extends Container {
    constructor(parent: Container);
    render(): void;
}
interface DataProvider {
    isEmpty(): boolean;
    getValue<T>(data: T): string;
    forEach<T>(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): any;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class Tooltip extends Component {
    private icon;
    private displayText;
    constructor(parent: Container);
    setText(text: string): void;
    setIconClass(iconClass: string): void;
}
/**
 * Base class for form elements
 *
 * Sub classes
 *
 * @author Gabor Kokeny
 *
 */
declare class Field extends Component {
    private fieldLabel;
    private fieldWrapper;
    constructor(form: Form, useWrapperContainer?: boolean);
    doRender(htmlElement: HTMLElement): void;
    static getForm(component: Component): Form;
    setFieldLabel(fieldLabel: string): void;
    destroy(): void;
}
/**
 * This interface imposes a total ordering on the objects of each class that
 * implements it.
 *
 * @author Gabor Kokeny
 */
interface Comparable {
    /**
     * Compares this object with the specified object for order.  Returns a
     * negative integer, zero, or a positive integer as this object is less
     * than, equal to, or greater than the specified object.
     *
     * @param  {T} object the object to be compared.
     * @return {} a negative integer, zero, or a positive integer as this object
     *          is less than, equal to, or greater than the specified object.*
     */
    compareTo<T>(object: T): number;
}
/**
 *
 * @author Gabor Kokeny
 */
interface Validator {
    isValid<T>(object: T): boolean;
}
/**
 * @author Gabor Kokeny
 */
declare class Combobox extends TriggerField {
    static DEFAULT_CLASS: string;
    static DEFAULT_WRAPPER_CLASS: string;
    private dataProvider;
    private labelProvider;
    private options;
    constructor(form: Form);
    render(): void;
    setDataProvider(dataProvider: DataProvider): void;
    setLabelProvider(labelProvider: LabelProvider): void;
}
declare class ComboboxOption extends Component {
    private label;
    private value;
    private selected;
    constructor(combobox: Container);
    render(): void;
    setLabel(label: string): void;
    getLabel(): string;
    getValue(): string;
    setValue(value: string): void;
}
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
declare class TabPanelMenu extends Menu {
    constructor(parent: Container);
}
/**
 * An object that maps keys to values.  A map cannot contain duplicate keys;
 * each key can map to at most one value.
 *
 * @author Gabor Kokeny
 */
declare class HashMap<K, V> {
    private elements;
    private valuesArray;
    private keySet;
    constructor();
    get(key: K): V;
    put(key: K, value: V): void;
    /**
     * Remove an element from the HashMap by Key
     *
     * @return {boolean} Return false if the method parameter key is null, and return true
     * if the element successfully removed from the HashMap otherwise return false
     */
    remove(key: K): boolean;
    contains(key: K): boolean;
    values(): List<V>;
    keys(): List<K>;
    /**
     * Remove all elements from the HashMap
     *
     */
    clear(): void;
    /**
     * Get size of HashMap
     *
     * @return {number} Return the number of elements that contains this hashMap
     */
    size(): number;
    /**
     * Iterate on own keyset
     */
    forEach(callbackfn: (value: K, index: number, array: K[]) => void, thisArg?: any): void;
}
declare class KeyValue<K, V> {
    private key_;
    private value_;
    constructor(key: K, value: V);
    key: K;
    value: V;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class SearchField extends TriggerField {
    constructor(form: Form);
}
declare enum VerticalAlign {
    TOP = 0,
    BOTTOM = 1,
    MIDDLE = 2,
}
/**
 * This class represents an UI component
 *
 * @author Gabor Kokeny
 */
declare class Component extends Observable {
    static EVENT_BEFORE_RENDER: string;
    /**
     *
     * The id of this component, this is an auto generated Sequannce
     */
    private id;
    /**
     *
     * The visiblity of this component in boolean
     */
    private visible;
    /**
     *
     * The HTMLElement in  the DOM
     */
    private htmlElement;
    /**
     *
     * Parent contantainer
     */
    private parent;
    /**
     *
     * CSS class list for this component
     */
    private classList;
    /**
     *
     * Represents the component already rendered
     */
    private rendered;
    /**
     *
     * The width of this component in pixels
     */
    private width;
    /**
     *
     * Represents component disabled status
     */
    private disabled;
    /**
     *
     * Vertical alignment inside the parent container
     */
    private verticalAlign;
    /**
     *
     * Use wrapper container
     */
    private useWrapperContainer;
    private tooltip;
    /**
     * Create a new instance of component. Parent container is required.
     *
     * @param {Container} parent The parent container is required
     * @param {boolean} useWrapperContainer This optional parameter. If useWrapperContainer is true,
     * the component will be rendered inside a wrapper Container
     */
    constructor(parent: Container, useWrapperContainer?: boolean);
    setParent(parent: Container): void;
    /**
     *
     * Render component
     */
    render(): void;
    protected doRender(htmlElement: HTMLElement): void;
    protected beforeRender(): void;
    protected afterRender(): void;
    protected initEventListeners(): void;
    addListener(eventName: string, listener: EventListener): void;
    removeListener(eventName: string, listener: EventListener): boolean;
    removeListeners(eventName: string): boolean;
    on(eventName: string, listener: EventListener): void;
    getContainer(): Container;
    getElement(): HTMLElement;
    addClass(className: string): void;
    /**
     *
     * Set the CSS class
     */
    setClass(className: string): void;
    /**
     * Remove CSS class from this component
     *
     * @param {string} className The name of the CSS class that should be removed
     */
    removeClass(className: string): void;
    getClassList(): List<string>;
    getClassListAsString(): string;
    isRendered(): boolean;
    /**
     * Remove htmlElement from the DOM and destroy itself.
     *
     */
    destroy(): void;
    /**
     * Check the parent Component is null
     *
     * @return {boolean} Return true if his parent is not null
     */
    hasParent(): boolean;
    /**
     * Set visibility of this element
     *
     * @param {boolean} visible
     */
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    /**
     *
     * Show  the component
     *
     * @return {Component} Return the visible component
     */
    show(): Component;
    /**
     * Hide the component
     *
     * @return {Component} Return the hidden component
     */
    hide(): Component;
    setWidth(width: number): void;
    getWidth(): number;
    setId(id: string): void;
    getId(): string;
    /**
     * Disabled the component
     *
     * @param {boolean} disabled
     */
    setDisabled(disabled: boolean): void;
    /**
     * Check the component disabled state
     *
     * @return Return true if the component is disabled
     */
    isDisabled(): boolean;
    /**
     * Set vertical align to this component
     *
     * @param {VerticalAlign} verticalAlign
     */
    setVerticalAlign(verticalAlign: VerticalAlign): void;
    /**
     * Get vertical align position
     *
     * @return {VerticalAlign}
     */
    getVerticalAlign(): VerticalAlign;
    setTooltipText(tooltipText: string): void;
    setTooltip(tooltip: Tooltip): void;
    setTooltipIconClass(iconClass: string): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class Icon extends Component {
    constructor(parent: Container);
    render(): void;
    setClass(className: string): void;
    hasClass(): boolean;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class Panel extends Container {
    private panelHeader;
    private panelBody;
    private panelFooter;
    private panelTitle;
    private icon;
    /**
     * Create a new instance of Panel
     *
     * @parent {Container} parent The parent container
     */
    constructor(parent: Container);
    protected init(): void;
    getTitle(): string;
    setTitle(title: string): void;
    getBody(): Container;
    setIconClass(className: string): void;
    getIconClass(): string;
}
/**
 * The state provier
 *
 * @author Gabor Kokeny
 */
interface StateProvider {
    /**
     * Retrive state by key
     *
     * @param {string} key
     * @return {Object} Return the last state
     */
    getState<T>(key: string): T;
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {T} state The state that should be save
     */
    saveState<T>(key: string, state: T): any;
}
/**
 * The available align to ButtonBar
 *
 * @author Gabor Kokeny
 */
declare enum ButtonAlign {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
}
/**
 *
 * @author Gabor Kokeny
 */
declare class ButtonBar extends Container {
    static DEFAULT_CLASS: string;
    private buttonAlign;
    constructor(parent: Container);
    render(): void;
    setButtonAlign(buttonAlign: ButtonAlign): void;
}
/**
 * This is a static Logger class, it is allows you to disable the client side
 * application logging at runtime.
 * Set the DEBUG property false (default value is true) to disable the client side logging.
 *
 *
 * @author Gabor Kokeny
 */
declare class Log {
    static DEBUG: boolean;
    /**
     *
     * @param {string} message The log message
     * @param {any[]} The optionals parameters
     *
     * @return Return the reference of Log variable
     */
    static info(message: string, ...params: any[]): Log;
    static error(message: string, ...params: any[]): Log;
    static warn(message: string, ...params: any[]): Log;
    static debug(message: string, ...params: any[]): Log;
    static groupStart(title?: string): Log;
    static groupEnd(): Log;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class EmailField extends TextField {
    static DEFAULT_CLASS: string;
    constructor(form: Form);
}
/**
 * @author Gabor Kokeny
 */
declare class TextArea extends TextField {
    static DEFAULT_CLASS: string;
    constructor(form: Form);
    render(): void;
}
/**
 * Base class for trigger fields like DateField, Compobox,
 * Autocomplete, SearchField and so on.
 *
 * @author Gabor Kokeny
 */
declare class TriggerField extends TextField {
    /**
     * The trigger button
     */
    private triggerButton;
    /**
     * Create a new instance of trigger field
     *
     * @param {Form} form The parent form
     */
    constructor(form: Form);
    render(): void;
    /**
     * Set icon CSS class to the trigger button
     *
     * @param {string} triggerIconClass
     */
    setTriggerIconClass(triggerIconClass: string): void;
    /**
     * Event handler for trigger button click
     *
     * @param {MouseEvent} mouseEvent
     */
    onTriggerClick(mouseEvent: MouseEvent): void;
}
/**
 * @author Gabor Kokeny
 */
declare class RadioButton extends Checkbox {
    static DEFAULT_CLASS: string;
    static DEFAULT_WRAPPER_CLASS: string;
    static DEFAULT_LABEL_CLASS: string;
    constructor(form: Form);
}
/**
 *
 * @author Gabor Kokeny
 */
declare class Integer implements Comparable {
    private value;
    constructor(value: number);
    static valueOf(value: number): Integer;
    intValue(): number;
    parseInt(stringValue: string): void;
    compareTo(integer: Integer): number;
    static compare(x: number, y: number): number;
}
/**
 * Utility class for determine information of the user agent
 *
 * @author Gabor Kokeny
 */
declare class Device {
    /**
     *
     * The user agent as string
     */
    static AGENT: string;
    private static docMode;
    private static isStrict;
    private static opera;
    private static chrome;
    private static isWebKit;
    private static safari;
    private static isSafari2;
    private static isSafari3;
    private static isSafari4;
    private static ie;
    private static isIE7;
    private static isIE8;
    private static isIE9;
    private static isIE6;
    private static isGecko;
    private static isGecko2;
    private static isGecko3;
    private static windows;
    private static mac;
    private static adobeair;
    private static linux;
    /**
     * Check userAgent
     *
     * @param {RegExp} regexp The regular expression that sould be check
     */
    private static check(regExp);
    /**
     * Check the browser is Opera
     *
     * @return {boolean} Return true if the browser is Opera
     */
    static isOpera(): boolean;
    static isChrome(): boolean;
    static isSafari(): boolean;
    static isIE(): boolean;
    static isWindows(): boolean;
    static isMac(): boolean;
    static isLinux(): boolean;
    static isAdobeAir(): boolean;
}
interface LabelProvider {
    getLabel<T>(data: T): string;
    getIconClass?<T>(data: T): string;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class List<T> {
    private items;
    constructor();
    contains(t: T): boolean;
    /**
    * Gets the length of the array.
    * This is a number one higher than the highest element defined in an array.
    */
    size(): number;
    add(t: T): void;
    addAll(list: List<T>): void;
    /**
    * Returns the index of the first occurrence of a value in an List.
    * @param searchElement The value to locate in the array.
    * @param fromIndex The List index at which to begin the search.
    * If fromIndex is omitted, the search starts at index 0.
    */
    indexOf(t: T, fromIndex?: number): number;
    get(index: number): T;
    remove(element: T): boolean;
    removeAt(index: number): boolean;
    containsAnyOf(elements: T[]): boolean;
    containsAllOf(elements: T[]): boolean;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    /**
     * Remove all elements from the list
     *
     */
    clear(): List<T>;
    /**
     * Reverse the elements in a list
     *
     */
    reverse(): List<T>;
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the size of array equals zero
     */
    isEmpty(): boolean;
    /**
    * Adds all the elements of a list separated by the specified separator string.
    * @param separator A string used to separate one element of a list from the next in the resulting String.
    * If omitted, the list elements are separated with a comma.
    */
    join(separator?: string): string;
    /**
       * Sorts a list.
       * @param compareFn The name of the function used to determine
       * the order of the elements.
       */
    sort(compareFn?: (a: T, b: T) => number): void;
    /**
     * Get all items in an array.
     *
     * @return {Array} Return the copied array
     */
    toArray(): T[];
}
/**
 *
 * @author Gabor Kokeny
 */
declare class StateManager {
    private stateProvider;
    /**
        * Retrive state by key
        *
        * @param {string} key
        * @return {Object} Return the last state
        */
    loadState(stateful: Stateful): void;
    /**
     * Save state
     *
     */
    saveState(stateful: Stateful): void;
    /**
     * Set state provider
     *
     */
    setStateProvider(stateProvider: StateProvider): void;
    getStateProvider(): StateProvider;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class ComponentManager {
    private static components;
    static register(component: Component): void;
    static unregister(component: Component): void;
    static getComponent(componentId: string): Component;
    static getNumberOfComponents(): number;
}
/**
 * Utility class for Arrays
 *
 * @author Gabor Kokeny
 */
declare class ArrayUtils {
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the array is null or the lenght of array is zero
     */
    static isEmpty(array: Array<any>): boolean;
    /**
     * Check the array contains the element
     *
     * @param {Array<T>} array
     * @param {T} element
     *
     * @return {boolean} Return true if the array already contains the element
     */
    static contains<T>(array: Array<T>, element: T): boolean;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class ColumnModel {
    private columns;
    constructor();
    addColumn(column: Column): void;
    forEach(callbackfn: (value: Column, index: number, array: Column[]) => void, thisArg?: any): void;
}
interface Column {
    name: string;
    title: string;
    iconClass?: string;
    sortable?: boolean;
}
declare class BodyContainer extends Container {
    static DEFAULT_CLASS: string;
    constructor();
    render(): void;
}
/**
 * This class represents a Cache
 *
 * @author Gabor Kokeny
 */
declare class Cache {
    /**
     *
     * The unique name of a cache
     */
    private name;
    private elements;
    /**
     * Create a new instance of a cache
     *
     * @param {string} name The name of the cache
     */
    constructor(name: string);
    /**
     * Put an object to this cache
     *
     * @param {string} key
     * @param {Object} object
     */
    put(key: string, object: Object): void;
    get(key: string): Object;
    clear(): void;
    getName(): string;
}
/**
 * @author Gabor Kokeny
 */
declare class Checkbox extends InputField {
    static DEFAULT_CLASS: string;
    static DEFAULT_WRAPPER_CLASS: string;
    static DEFAULT_LABEL_CLASS: string;
    private label;
    private text;
    constructor(form: Form);
    render(): void;
    setText(text: string): void;
    getText(): string;
}
declare enum TextType {
    SPAN = 0,
    H1 = 1,
    H2 = 2,
    H3 = 3,
    H4 = 4,
    H5 = 5,
    H6 = 6,
    PARAGRAPH = 7,
}
/**
 *
 * @author Gabor Kokeny
 */
declare class DisplayText extends Container {
    private iconClass;
    private text;
    private type;
    constructor(parent: Container, type?: TextType);
    protected beforeRender(): void;
    render(): void;
    private createElement(type);
    setText(text: string): void;
    getText(): string;
    /**
     * Set the icon for this displaytext
     *
     * @param {string} iconClass
     */
    setIconClass(iconClass: string): void;
}
/**
 * @author Gabor Kokeny
 */
declare class TextField extends InputField {
    static EVENT_KEYUP: string;
    constructor(form: Form, useWrapperContainer?: boolean);
    addKeyupListener(listener: EventListener): void;
    destroy(): void;
}
declare class Label extends Component {
    private text;
    private htmlFor;
    constructor(container: Container);
    setText(text: string): void;
    getText(): string;
    render(): void;
    setHtmlFor(htmlFor: Component): void;
}
/**
 * Assertion utility class that assists in validating arguments.
 * Useful for identifying programmer errors early and clearly at runtime.
 *
 * @author Gabor Kokeny
 */
declare class Assert {
    /**
     * Assert that an object is not null
     *
     * @param {T} object the object to check
     * @param {string} name the parameter name
     */
    static notNull<T>(param: T, name?: string): void;
    /**
     * Assert that an object value is true
     *
     * @param {T} The object value that should be check
     */
    static isTrue<T>(param: T, name?: string): void;
    /**
     * Assert that an object value is false
     *
     * @param {T} The object value that should be check
     */
    static isFalse<T>(param: T, name?: string): void;
}
declare class BoxComponent extends Component {
}
/**
 * Helper class for manipulating inline CSS of DOM elements
 *
 * @author Gabor Kokeny
 */
declare class CssHelper {
    /**
     * Set width to htmlElement in pixels
     *
     * @param {HTMLElement} htmlElement
     * @param {number} width The number of width in pixels
     */
    static setWidth(htmlElement: HTMLElement, width: number): void;
    /**
     * Set leftMargin to htmlElement in pixels
     *
     * @param {HTMLElement} htmlElement
     * @param {number} marginLeft The number of width in pixels
     */
    static setLeftMargin(htmlElement: HTMLElement, marginLeft: number): void;
    /**
    * Set visibility the element
    *
    * @param {HTMLElement} htmlElement
    * @param {boolean} visible
    */
    static setVisible(htmlElement: HTMLElement, visible: boolean): void;
}
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
/**
 *
 * @author Gabor Kokeny
 */
declare class DateField extends TriggerField {
    constructor(form: Form);
}
declare class Container extends Component {
    private children;
    constructor(parent: Container, useWrapperContainer?: boolean);
    protected init(): void;
    protected createComponents(): void;
    render(): void;
    /**
     * Render container with child components
     *
     * @protected
     */
    protected doRender(htmlElement: HTMLElement): void;
    /**
     * Add component to this container
     *
     */
    add(component: Component): void;
    /**
     * Remove component from this container
     *
     */
    remove(component: Component): void;
    /**
     * Get children of this container
     */
    getChildren(): List<Component>;
    /**
     * Destroy container with all children component
     */
    destroy(): void;
    /**
     * Get child component by index
     *
     * @param {number} itemIndex The index of the child component
     */
    getComponent(itemIndex: number): Component;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class MenuItem extends Container {
    private button;
    constructor(menu: Menu);
    render(): void;
    setText(text: string): void;
    getText(): string;
    setIconClass(iconClass: string): void;
    addClickListener(e: EventListener): void;
}
/**
 * Grid UI component
 *
 * @author Gabor Kokeny
 */
declare class Grid extends Container {
    static DEFULT_CLASS: string;
    static DEFULT_WRAPPER_CLASS: string;
    private sortable;
    boolean: any;
    private emptyMessage;
    private dataProvider;
    private gridHeader;
    private gridBody;
    private gridFooter;
    constructor(parent: Container);
    protected init(): void;
    render(): void;
    setDataProvider(dataProvider: DataProvider): void;
    setEmptyMessage(emptyMessage: string): void;
    getEmptyMessage(): string;
    getColumnModel(): ColumnModel;
    getDataProvider(): DataProvider;
}
/**
 * Grid header
 *
 * @author Gabor Kokeny
 */
declare class GridHeader extends Container {
    constructor(parent: Grid);
    init(): void;
    render(): void;
    protected getColumnModel(): ColumnModel;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridRow extends Container {
    init(): void;
    render(): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridHeaderColumn extends Container {
    private column;
    private icon;
    private columnText;
    DisplayText: any;
    constructor(row: GridRow, column: Column);
    init(): void;
    render(): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridColumn extends Container {
    init(): void;
    render(): void;
}
/**
 *
 * @author Gabor Kokeny
 */
declare class GridBody extends Container {
    init(): void;
    render(): void;
    protected getGrid(): Grid;
}
declare enum ButtonType {
    SUBMIT = 0,
    BUTTON = 1,
}
declare enum IconAlign {
    LEFT = 0,
    RIGHT = 1,
}
declare class Button extends Container {
    static EVENT_CLICK: string;
    private buttonType;
    private icon;
    private text;
    private iconAlign;
    constructor(parent: Container);
    render(): void;
    setText(text: string): void;
    getText(): string;
    setButtonType(buttonType: ButtonType): void;
    getButtonType(): ButtonType;
    addClickListener(listener: EventListener): void;
    setIconClass(iconClass: string): void;
    setIconAlign(iconAlign: IconAlign): void;
}
/**
 * Validator for email addresses
 *
 * @author Gabor Kokeny
 */
declare class EmailValidator implements Validator {
    isValid<T>(object: T): boolean;
}
declare class Observable {
    private listeners;
    constructor();
    addListener(eventName: string, listener: EventListener): void;
    removeListeners(eventName: string): boolean;
    removeListener(eventName: string, listener: EventListener): boolean;
    purgeListeners(): void;
    getListeners(eventName: any): List<EventListener>;
    getAllListeners(): MultiMap<string, EventListener>;
    protected fireEvent(eventName: string, ...params: any[]): void;
}
declare class HashSet<T> extends List<T> {
    add(t: T): void;
}
declare enum NotificationType {
    WARNING = 0,
    ERROR = 1,
    INFO = 2,
    SUCCESS = 3,
}
/**
 * Inline notification for showing the error, warning and info messages
 *
 * @author Gabor Kokeny
 */
declare class Notification extends Container {
    static DEFAULT_CLASS: string;
    static EVENT_CLOSE: string;
    private delay;
    private closable;
    private type;
    private title;
    private message;
    private closeButton;
    /**
     * Create a new instance of notifiaction
     *
     * @param {Container} parent The parent container
     * @constructor
     */
    constructor(parent: Container);
    protected init(): void;
    protected beforeRender(): void;
    private static getIconClass(type);
    setDelay(delay: number): void;
    getDelay(): number;
    setClosable(closable: boolean): void;
    isClosable(): boolean;
    setMessage(message: string): void;
    getMessage(): string;
    setTitle(title: string): void;
    getTitle(): string;
    setIconClass(iconClass: string): void;
    /**
     *
     * @param {NotificationType} type
     */
    private setType(type);
    /**
     *
     * Create a new info notification
     */
    static info(parent: Container): Notification;
    /**
     *
     * Create a new error notification
     */
    static error(parent: Container): Notification;
    /**
    *
    * Create a new warning notification
    */
    static warning(parent: Container): Notification;
    /**
    *
    * Create a new SUCCES notification
    */
    static success(parent: Container): Notification;
    /**
     *
     *
     */
    private static newInstance(parent, type);
    /**
     *
     * @param {EventListener} listener
     */
    addCloseListener(listener: EventListener): void;
    /**
     * Remove event listener
     */
    removeCloseListener(listener: EventListener): void;
    protected onClose(): void;
}
declare class CacheManager {
    private static caches;
    static getCache(cacheName: string): Cache;
    static addCache(cache: Cache): void;
    static clearCache(cacheName: string): void;
    static removeCache(cacheName: string): boolean;
    static getCaches(): List<Cache>;
}
/**
 *
 * @author Gabor Kokeny
 */
interface Stateful {
    /**
     * The unique stateId
     */
    stateId: string;
    /**
     * Get current state
     *
     * @return {T} Return the current state of this bean
     */
    getState<T>(): T;
    /**
     *
     * Aplly state to this object
     *
     * @param {T} state
     */
    applyState<T>(state: T): any;
}
/**
 *
 *
 * @author Gabor Kokeny
 */
declare class LocalStorageStateProvider implements StateProvider {
    private storage;
    constructor();
    /**
     * Retrive state by key
     *
     * @param {string} key
     * @return {T} Return the last state
     */
    getState<T>(key: string): T;
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {T} state The state that should be save
     */
    saveState<T>(key: string, state: T): void;
}
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
    /**
    * Create a list item html element
    *
    * @return {HTMLOptionElement}
    */
    static createListItem(): HTMLLIElement;
}
declare class FormToolkit {
}
/**
 * Data provider for List impelementations
 *
 * @author Gabor Kokeny
 */
declare class ListDataProvider<T> implements DataProvider {
    private list;
    constructor(list: List<T>);
    getValue(data: T): string;
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    isEmpty(): boolean;
}
declare class Sequence {
    private counter;
    private static INSTANCE;
    static next(): string;
}
declare class MultiMap<K, V> {
    private map;
    constructor();
    get(key: K): List<V>;
    put(key: K, value: V): void;
    remove(key: K): boolean;
    removeElement(key: K, element: V): boolean;
    clear(): void;
    forEach(callbackfn: (value: K, index: number, array: K[]) => void, thisArg?: any): void;
}
declare enum LabelAlign {
    LEFT = 0,
    RIGHT = 1,
}
declare enum HttpMethod {
    GET = 0,
    POST = 1,
}
declare class Form extends Container {
    static DEFAULT_LABEL_WIDTH: number;
    private labelAlign;
    private labelWidth;
    private httpMethod;
    private action;
    private ectype;
    private bottomButtonBar;
    private validateOnBlur;
    private model;
    constructor(parent: Container);
    protected init(): void;
    protected createComponents(): void;
    protected initButtons(buttonBar: ButtonBar): void;
    render(): void;
    clearValues(): void;
    getValues(): Object;
    static getInputFields(container: Container): List<InputField>;
    setLabelWidth(labelWidth: number): void;
    getLabelWidth(): number;
    setLabelAlign(labelAlign: LabelAlign): void;
    setHttpMethod(httpMethod: HttpMethod): void;
    getHttpMethod(): number;
    setAction(action: string): void;
    getAction(): string;
    getElement(): HTMLFormElement;
    /**
     * Turn on form validation on the focus lost event
     *
     * If set true, form will be validate on blur event
     *
     * @param {boolean} validateOnBlur
     */
    setValidateOnBlur(validateOnBlur: boolean): void;
    /**
     * Check form validataion on blur event
     *
     * @return Return true if validateOnBlur turned on
     */
    isValidateOnBlur(): boolean;
    setModel<T>(model: T): void;
}
declare enum InputType {
    TEXT = 0,
    HIDDEN = 1,
    PASSWORD = 2,
    CHECKBOX = 3,
    RADIO = 4,
    DATE = 5,
    EMAIL = 6,
}
/**
 * @author Gabor Kokeny
 */
declare class InputField extends Field {
    static EVENT_CHANGE: string;
    static EVENT_BLUR: string;
    private type;
    private name;
    private value;
    private readOnly;
    private placeholder;
    private autoCompleteEnabled;
    private maxLength;
    constructor(form: Form, type: InputType, useWrapperContainer?: boolean);
    /**
     * Set value to this inputField
     *
     * @param {string} value
     */
    setValue(value: string): void;
    /**
     * Get the value of this inputField
     *
     * @return {stirng}
     */
    getValue(): string;
    setName(name: string): void;
    getName(): string;
    protected setType(inputType: InputType): void;
    getType(): InputType;
    setPlaceholder(placeholder: string): void;
    getPlaceholder(): string;
    setAutoCompleteEnabled(autoCompleteEnabled: boolean): void;
    isAutoCompleteEnabled(): boolean;
    render(): void;
    /**
     * Add changelistener
     *
     * @param {EventListener} listener
     */
    addChangeListener(listener: EventListener): void;
    /**
     * Add focus lost listener to this field
     *
     * @param {EventListener} listener
     */
    addBlurListener(listener: EventListener): void;
    getElement(): HTMLInputElement;
    setReadOnly(readOnly: boolean): void;
    isReadOnly(): boolean;
    getMaxLength(): number;
    setMaxLength(maxLength: number): void;
}
