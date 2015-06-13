var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 *
 * @author Gabor Kokeny
 */
var Progressbar = (function (_super) {
    __extends(Progressbar, _super);
    function Progressbar(container) {
        _super.call(this, container);
        this.addClass("ui-progressbar");
    }
    Progressbar.prototype.render = function () {
        var progressElement = ElementFactory.createProgress();
        if (this.getMaxValue())
            progressElement.max = this.getMaxValue();
        if (this.getValue())
            progressElement.value = this.getValue();
        _super.prototype.doRender.call(this, progressElement);
    };
    Progressbar.prototype.setMaxValue = function (maxValue) {
        if (this.isRendered()) {
            this.getElement().max = this.getMaxValue();
        }
        this.maxValue = maxValue;
    };
    Progressbar.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    Progressbar.prototype.setValue = function (value) {
        if (this.isRendered()) {
            this.getElement().value = this.getMaxValue();
        }
        this.value = value;
    };
    Progressbar.prototype.getValue = function () {
        return this.value;
    };
    Progressbar.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    return Progressbar;
})(Component);
/**
 *
 * Utility class for List
 */
var ListUtils = (function () {
    function ListUtils() {
    }
    /**
     * Check the method parameter is null or is empty
     *
     * @return Return true if the parameter 'list' is null or is an empty list
     */
    ListUtils.isEmpty = function (list) {
        return list == null || list.isEmpty();
    };
    /**
     * Find the minimum elements in a list that
     * contains a Comparable objects.
     *
     * @param {List<T>} list
     * @return If the method parameter 'list' is empty then return null,
     * else return the minium element in the list
     */
    ListUtils.min = function (list) {
        if (ListUtils.isEmpty(list)) {
            return null;
        }
        var candidate = list.get(0);
        list.forEach(function (next) {
            if (next.compareTo(candidate) < 0) {
                candidate = next;
            }
        });
        return candidate;
    };
    /**
     * Find the maximum elements in a list that
     * contains a Comparable objects.
     *
     * @param {List<T>} list
     * @return If the method parameter 'list' is empty then return null,
     * else return the max element in the list
     */
    ListUtils.max = function (list) {
        if (ListUtils.isEmpty(list)) {
            return null;
        }
        var candidate = list.get(0);
        list.forEach(function (next) {
            if (candidate.compareTo(next) < 0) {
                candidate = next;
            }
        });
        return candidate;
    };
    /**
     * Sort elements in the list
     *
     * @param {List<T>} list A list that should be sort
     * @return {List<T>} Return the sorted list
     */
    ListUtils.sort = function (list) {
        list.sort(function (a, b) {
            return a.compareTo(b);
        });
        return list;
    };
    return ListUtils;
})();
/**
 *
 * Data provider for enumerations
 *
 * @author Gabor Kokeny
 */
var EnumDataProvider = (function () {
    function EnumDataProvider(object) {
        Log.info("Object ", object);
        var list = new List();
        for (var val in object) {
            if (isNaN(val)) {
                list.add(val);
            }
        }
        this.dataProvider = new ListDataProvider(list);
    }
    EnumDataProvider.prototype.getValue = function (data) {
        return this.dataProvider.getValue(data);
    };
    EnumDataProvider.prototype.forEach = function (callbackfn, thisArg) {
        this.dataProvider.forEach(callbackfn);
    };
    EnumDataProvider.prototype.isEmpty = function () {
        return this.dataProvider.isEmpty();
    };
    return EnumDataProvider;
})();
/**
 *
 * @author Gabor Kokeny
 */
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu(parent) {
        _super.call(this, parent);
        this.setClass("ui-menu");
    }
    Menu.prototype.render = function () {
        var listElement = ElementFactory.createList();
        _super.prototype.doRender.call(this, listElement);
    };
    return Menu;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(parent) {
        _super.call(this, parent);
    }
    Tooltip.prototype.setText = function (text) {
        this.displayText.setText(text);
    };
    Tooltip.prototype.setIconClass = function (iconClass) {
        this.icon.setClass(iconClass);
    };
    return Tooltip;
})(Component);
/**
 * Base class for form elements
 *
 * Sub classes
 *
 * @author Gabor Kokeny
 *
 */
var Field = (function (_super) {
    __extends(Field, _super);
    function Field(form, useWrapperContainer) {
        _super.call(this, form, useWrapperContainer);
        var c = useWrapperContainer ? this.getContainer() : this;
        this.fieldWrapper = new Container(form);
        this.fieldWrapper.addClass("ui-formfield");
        this.fieldLabel = new Label(this.fieldWrapper);
        c.setParent(this.fieldWrapper);
        this.fieldLabel.setHtmlFor(this);
    }
    Field.prototype.doRender = function (htmlElement) {
        _super.prototype.doRender.call(this, htmlElement);
        CssHelper.setWidth(this.fieldLabel.getElement(), Field.getForm(this.getContainer()).getLabelWidth());
    };
    Field.getForm = function (component) {
        if (component instanceof Form) {
            return component;
        }
        return this.getForm(component.getContainer());
    };
    Field.prototype.setFieldLabel = function (fieldLabel) {
        this.fieldLabel.setText(fieldLabel);
    };
    Field.prototype.destroy = function () {
        this.fieldWrapper.destroy();
        this.fieldLabel.destroy();
        _super.prototype.destroy.call(this);
    };
    return Field;
})(Component);
/**
 * @author Gabor Kokeny
 */
var Combobox = (function (_super) {
    __extends(Combobox, _super);
    function Combobox(form) {
        _super.call(this, form);
        this.options = new List();
        this.setClass(Combobox.DEFAULT_CLASS);
        this.getContainer().setClass(Combobox.DEFAULT_WRAPPER_CLASS);
        this.setTriggerIconClass("fa fa-angle-down");
    }
    Combobox.prototype.render = function () {
        var _this = this;
        var htmlSelectelement = ElementFactory.createSelect();
        if (this.dataProvider != null) {
            this.dataProvider.forEach(function (data) {
                var option = new ComboboxOption(_this.getContainer());
                if (_this.labelProvider) {
                    option.setLabel(_this.labelProvider.getLabel(data));
                }
                else {
                    option.setLabel(data.toString());
                }
                option.setValue(_this.dataProvider.getValue(data));
                _this.options.add(option);
            });
        }
        _super.prototype.doRender.call(this, htmlSelectelement);
    };
    Combobox.prototype.setDataProvider = function (dataProvider) {
        this.dataProvider = dataProvider;
    };
    Combobox.prototype.setLabelProvider = function (labelProvider) {
        this.labelProvider = labelProvider;
    };
    Combobox.DEFAULT_CLASS = "ui-combobox";
    Combobox.DEFAULT_WRAPPER_CLASS = "ui-combobox-wrapper";
    return Combobox;
})(TriggerField);
var ComboboxOption = (function (_super) {
    __extends(ComboboxOption, _super);
    function ComboboxOption(combobox) {
        _super.call(this, combobox);
        this.addClass("ui-option");
    }
    ComboboxOption.prototype.render = function () {
        var htmlOptionElement = ElementFactory.createOption();
        htmlOptionElement.text = this.getLabel();
        htmlOptionElement.label = this.getLabel();
        if (this.getValue()) {
            htmlOptionElement.value = this.getValue();
        }
        _super.prototype.doRender.call(this, htmlOptionElement);
    };
    ComboboxOption.prototype.setLabel = function (label) {
        this.label = label;
    };
    ComboboxOption.prototype.getLabel = function () {
        return this.label;
    };
    ComboboxOption.prototype.getValue = function () {
        return this.value;
    };
    ComboboxOption.prototype.setValue = function (value) {
        this.value = value;
    };
    return ComboboxOption;
})(Component);
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
        var me = this;
        var listener = function (e) {
            var menuItem = new MenuItem(me.menu);
            menuItem.setText(panel.getTitle());
            menuItem.setIconClass(panel.getIconClass());
            menuItem.addClickListener(function (e) {
                me.setActivePanel(panel);
            });
            panel.removeListener(TabPanel.EVENT_BEFORE_RENDER, listener);
        };
        panel.addListener(TabPanel.EVENT_BEFORE_RENDER, listener);
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
    }
    return TabPanelMenu;
})(Menu);
/**
 * An object that maps keys to values.  A map cannot contain duplicate keys;
 * each key can map to at most one value.
 *
 * @author Gabor Kokeny
 */
var HashMap = (function () {
    function HashMap() {
        this.elements = new List();
        this.valuesArray = new List();
        this.keySet = new HashSet();
    }
    HashMap.prototype.get = function (key) {
        if (key == null) {
            return null;
        }
        var value;
        this.elements.forEach(function (e) {
            if (e.key == key) {
                value = e.value;
                return value;
            }
        });
        return value;
    };
    HashMap.prototype.put = function (key, value) {
        var oldValue = this.get(key);
        if (oldValue) {
            var index = this.valuesArray.indexOf(oldValue);
            this.elements[index].value = value;
            this.valuesArray[index] = value;
            return;
        }
        this.elements.add(new KeyValue(key, value));
        this.valuesArray.add(value);
        this.keySet.add(key);
    };
    /**
     * Remove an element from the HashMap by Key
     *
     * @return {boolean} Return false if the method parameter key is null, and return true
     * if the element successfully removed from the HashMap otherwise return false
     */
    HashMap.prototype.remove = function (key) {
        if (key == null) {
            return false;
        }
        var value = this.get(key);
        var index = this.valuesArray.indexOf(value);
        if (!value || index == -1) {
            return false;
        }
        this.keySet.remove(key);
        this.elements.removeAt(index);
        this.valuesArray.removeAt(index);
        return true;
    };
    HashMap.prototype.contains = function (key) {
        return this.keySet.contains(key);
    };
    HashMap.prototype.values = function () {
        return this.valuesArray;
    };
    HashMap.prototype.keys = function () {
        return this.keySet;
    };
    /**
     * Remove all elements from the HashMap
     *
     */
    HashMap.prototype.clear = function () {
        this.elements = new List();
        this.valuesArray = new List();
        this.keySet = new HashSet();
    };
    /**
     * Get size of HashMap
     *
     * @return {number} Return the number of elements that contains this hashMap
     */
    HashMap.prototype.size = function () {
        return this.elements.size();
    };
    /**
     * Iterate on own keyset
     */
    HashMap.prototype.forEach = function (callbackfn, thisArg) {
        this.keySet.forEach(callbackfn);
    };
    return HashMap;
})();
var KeyValue = (function () {
    function KeyValue(key, value) {
        this.key_ = key;
        this.value_ = value;
    }
    Object.defineProperty(KeyValue.prototype, "key", {
        get: function () {
            return this.key_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "value", {
        get: function () {
            return this.value_;
        },
        set: function (value) {
            this.value_ = value;
        },
        enumerable: true,
        configurable: true
    });
    return KeyValue;
})();
/**
 *
 * @author Gabor Kokeny
 */
var SearchField = (function (_super) {
    __extends(SearchField, _super);
    function SearchField(form) {
        _super.call(this, form);
    }
    return SearchField;
})(TriggerField);
var VerticalAlign;
(function (VerticalAlign) {
    VerticalAlign[VerticalAlign["TOP"] = 0] = "TOP";
    VerticalAlign[VerticalAlign["BOTTOM"] = 1] = "BOTTOM";
    VerticalAlign[VerticalAlign["MIDDLE"] = 2] = "MIDDLE";
})(VerticalAlign || (VerticalAlign = {}));
/**
 * This class represents an UI component
 *
 * @author Gabor Kokeny
 */
var Component = (function (_super) {
    __extends(Component, _super);
    /**
     * Create a new instance of component. Parent container is required.
     *
     * @param {Container} parent The parent container is required
     * @param {boolean} useWrapperContainer This optional parameter. If useWrapperContainer is true,
     * the component will be rendered inside a wrapper Container
     */
    function Component(parent, useWrapperContainer) {
        _super.call(this);
        /**
         *
         * Use wrapper container
         */
        this.useWrapperContainer = false;
        this.useWrapperContainer = useWrapperContainer || this.useWrapperContainer;
        this.parent = this.useWrapperContainer ? new Container(parent) : parent;
        this.classList = new List();
        this.visible = true;
        this.rendered = false;
        this.disabled = false;
        this.verticalAlign = 2 /* MIDDLE */;
        this.id = Sequence.next();
        if (this.parent) {
            this.parent.add(this);
        }
        ComponentManager.register(this);
    }
    Component.prototype.setParent = function (parent) {
        var c = this.useWrapperContainer ? this.getContainer() : this;
        this.getContainer().remove(c);
        this.parent = parent;
        this.parent.add(c);
    };
    /**
     *
     * Render component
     */
    Component.prototype.render = function () {
        if (this.isRendered()) {
            Log.error("Component is already rendered ", this);
        }
    };
    Component.prototype.doRender = function (htmlElement) {
        this.beforeRender();
        this.htmlElement = htmlElement;
        this.initEventListeners();
        if (this.parent) {
            DOMHelper.renderComponent(this);
            this.rendered = true;
            this.afterRender();
        }
    };
    Component.prototype.beforeRender = function () {
        this.fireEvent(Component.EVENT_BEFORE_RENDER, this);
    };
    Component.prototype.afterRender = function () {
    };
    Component.prototype.initEventListeners = function () {
        var htmlElement = this.getElement();
        var listeners = this.getAllListeners();
        listeners.forEach(function (eventName) {
            listeners.get(eventName).forEach(function (listener) {
                htmlElement.addEventListener(eventName, listener);
            });
            //Log.debug("Initialize listener", eventName, listeners.get(eventName));
        });
    };
    Component.prototype.addListener = function (eventName, listener) {
        _super.prototype.addListener.call(this, eventName, listener);
    };
    Component.prototype.removeListener = function (eventName, listener) {
        if (this.isRendered()) {
            var htmlElement = this.getElement();
            htmlElement.removeEventListener(eventName, listener);
        }
        return _super.prototype.removeListener.call(this, eventName, listener);
    };
    Component.prototype.removeListeners = function (eventName) {
        var _this = this;
        var listeners = _super.prototype.getListeners.call(this, eventName);
        listeners.forEach(function (listener) {
            _this.removeListener(eventName, listener);
        });
        return _super.prototype.removeListeners.call(this, eventName);
    };
    Component.prototype.on = function (eventName, listener) {
        this.addListener(eventName, listener);
    };
    Component.prototype.getContainer = function () {
        return this.parent;
    };
    Component.prototype.getElement = function () {
        return this.htmlElement;
    };
    Component.prototype.addClass = function (className) {
        if (this.isRendered()) {
            DOMHelper.addClass(this, className);
        }
        this.classList.add(className);
    };
    /**
     *
     * Set the CSS class
     */
    Component.prototype.setClass = function (className) {
        var _this = this;
        this.classList.clear();
        className.split(" ").forEach(function (cls) {
            _this.addClass(cls);
        });
    };
    /**
     * Remove CSS class from this component
     *
     * @param {string} className The name of the CSS class that should be removed
     */
    Component.prototype.removeClass = function (className) {
        if (this.isRendered()) {
            this.getElement().classList.remove(className);
        }
        this.classList.remove(className);
    };
    Component.prototype.getClassList = function () {
        return this.classList;
    };
    Component.prototype.getClassListAsString = function () {
        return this.classList.join(" ");
    };
    Component.prototype.isRendered = function () {
        return this.rendered;
    };
    /**
     * Remove htmlElement from the DOM and destroy itself.
     *
     */
    Component.prototype.destroy = function () {
        if (this.isRendered()) {
            DOMHelper.remove(this);
        }
        if (this.hasParent()) {
            this.getContainer().remove(this);
        }
        if (this.useWrapperContainer) {
            this.getContainer().destroy();
        }
        ComponentManager.unregister(this);
        //Log.debug("Destroy component ", this);
    };
    /**
     * Check the parent Component is null
     *
     * @return {boolean} Return true if his parent is not null
     */
    Component.prototype.hasParent = function () {
        return this.parent != null;
    };
    /**
     * Set visibility of this element
     *
     * @param {boolean} visible
     */
    Component.prototype.setVisible = function (visible) {
        if (this.useWrapperContainer) {
            this.getContainer().setVisible(visible);
        }
        else {
            if (this.isRendered()) {
                CssHelper.setVisible(this.getElement(), visible);
            }
            this.visible = visible;
        }
    };
    Component.prototype.isVisible = function () {
        return this.visible;
    };
    /**
     *
     * Show  the component
     *
     * @return {Component} Return the visible component
     */
    Component.prototype.show = function () {
        this.setVisible(true);
        return this;
    };
    /**
     * Hide the component
     *
     * @return {Component} Return the hidden component
     */
    Component.prototype.hide = function () {
        this.setVisible(false);
        return this;
    };
    Component.prototype.setWidth = function (width) {
        if (this.isRendered()) {
            CssHelper.setWidth(this.getElement(), width);
        }
        this.width = width;
    };
    Component.prototype.getWidth = function () {
        return this.width;
    };
    Component.prototype.setId = function (id) {
        this.id = id;
    };
    Component.prototype.getId = function () {
        return this.id;
    };
    /**
     * Disabled the component
     *
     * @param {boolean} disabled
     */
    Component.prototype.setDisabled = function (disabled) {
        if (this.isRendered()) {
            this.getElement().disabled = this.isDisabled();
        }
        this.disabled = disabled;
    };
    /**
     * Check the component disabled state
     *
     * @return Return true if the component is disabled
     */
    Component.prototype.isDisabled = function () {
        return this.disabled;
    };
    /**
     * Set vertical align to this component
     *
     * @param {VerticalAlign} verticalAlign
     */
    Component.prototype.setVerticalAlign = function (verticalAlign) {
        if (this.isRendered()) {
            this.getElement().disabled = this.isDisabled();
        }
        this.verticalAlign = verticalAlign;
    };
    /**
     * Get vertical align position
     *
     * @return {VerticalAlign}
     */
    Component.prototype.getVerticalAlign = function () {
        return this.verticalAlign;
    };
    Component.prototype.setTooltipText = function (tooltipText) {
        if (this.tooltip)
            this.tooltip.setText(tooltipText);
    };
    Component.prototype.setTooltip = function (tooltip) {
        this.tooltip = tooltip;
    };
    Component.prototype.setTooltipIconClass = function (iconClass) {
        if (this.tooltip)
            this.tooltip.setIconClass(iconClass);
    };
    Component.EVENT_BEFORE_RENDER = "beforerender";
    return Component;
})(Observable);
/**
 *
 * @author Gabor Kokeny
 */
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon(parent) {
        _super.call(this, parent);
    }
    Icon.prototype.render = function () {
        var htmlElement = ElementFactory.createIcon();
        _super.prototype.doRender.call(this, htmlElement);
    };
    Icon.prototype.setClass = function (className) {
        _super.prototype.setClass.call(this, className);
        _super.prototype.addClass.call(this, "ui-icon");
    };
    Icon.prototype.hasClass = function () {
        return ListUtils.isEmpty(this.getClassList());
    };
    return Icon;
})(Component);
/**
 *
 * @author Gabor Kokeny
 */
var Panel = (function (_super) {
    __extends(Panel, _super);
    /**
     * Create a new instance of Panel
     *
     * @parent {Container} parent The parent container
     */
    function Panel(parent) {
        _super.call(this, parent, false);
    }
    Panel.prototype.init = function () {
        this.addClass("ui-panel");
        //Create header
        this.panelHeader = new Container(this);
        this.panelHeader.addClass("ui-panel-header");
        this.icon = new Icon(this.panelHeader);
        this.panelTitle = new DisplayText(this.panelHeader);
        this.panelTitle.addClass("ui-panel-title");
        //Create body
        this.panelBody = new Container(this);
        this.panelBody.addClass("ui-panel-body");
        //Create footer
        this.panelFooter = new Container(this);
        this.panelFooter.addClass("ui-panel-footer");
        _super.prototype.init.call(this);
    };
    Panel.prototype.getTitle = function () {
        return this.panelTitle ? this.panelTitle.getText() : "";
    };
    Panel.prototype.setTitle = function (title) {
        this.panelTitle.setText(title);
    };
    Panel.prototype.getBody = function () {
        return this.panelBody;
    };
    Panel.prototype.setIconClass = function (className) {
        this.icon.setClass(className);
    };
    Panel.prototype.getIconClass = function () {
        return this.icon.getClassListAsString();
    };
    return Panel;
})(Container);
/**
 * The available align to ButtonBar
 *
 * @author Gabor Kokeny
 */
var ButtonAlign;
(function (ButtonAlign) {
    ButtonAlign[ButtonAlign["LEFT"] = 0] = "LEFT";
    ButtonAlign[ButtonAlign["RIGHT"] = 1] = "RIGHT";
    ButtonAlign[ButtonAlign["CENTER"] = 2] = "CENTER";
})(ButtonAlign || (ButtonAlign = {}));
/**
 *
 * @author Gabor Kokeny
 */
var ButtonBar = (function (_super) {
    __extends(ButtonBar, _super);
    function ButtonBar(parent) {
        _super.call(this, parent);
        this.addClass(ButtonBar.DEFAULT_CLASS);
        this.buttonAlign = 0 /* LEFT */;
    }
    ButtonBar.prototype.render = function () {
        var divElement = ElementFactory.createDiv();
        this.addClass("button-align-" + ButtonAlign[this.buttonAlign].toLowerCase());
        _super.prototype.doRender.call(this, divElement);
        var container = this.getContainer();
        if (container instanceof Form) {
            CssHelper.setLeftMargin(divElement, container.getLabelWidth());
        }
    };
    ButtonBar.prototype.setButtonAlign = function (buttonAlign) {
        this.buttonAlign = buttonAlign;
    };
    ButtonBar.DEFAULT_CLASS = "ui-buttonbar";
    return ButtonBar;
})(Container);
/**
 * This is a static Logger class, it is allows you to disable the client side
 * application logging at runtime.
 * Set the DEBUG property false (default value is true) to disable the client side logging.
 *
 *
 * @author Gabor Kokeny
 */
var Log = (function () {
    function Log() {
    }
    /**
     *
     * @param {string} message The log message
     * @param {any[]} The optionals parameters
     *
     * @return Return the reference of Log variable
     */
    Log.info = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (!Log.DEBUG) {
            return;
        }
        if (console) {
            console.info(message, params);
        }
        return this;
    };
    Log.error = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (!Log.DEBUG) {
            return;
        }
        if (console) {
            console.error(message, params);
        }
        return this;
    };
    Log.warn = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (!Log.DEBUG) {
            return;
        }
        if (console) {
            console.warn(message, params);
        }
        return this;
    };
    Log.debug = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (!Log.DEBUG) {
            return;
        }
        if (console) {
            console.debug(message, params);
        }
        return this;
    };
    Log.groupStart = function (title) {
        if (!Log.DEBUG) {
            return;
        }
        if (console) {
            console.groupCollapsed(title);
        }
        return this;
    };
    Log.groupEnd = function () {
        if (!Log.DEBUG) {
            return;
        }
        if (console) {
            console.groupEnd();
        }
        return this;
    };
    Log.DEBUG = true;
    return Log;
})();
/**
 *
 * @author Gabor Kokeny
 */
var EmailField = (function (_super) {
    __extends(EmailField, _super);
    function EmailField(form) {
        _super.call(this, form);
        this.addClass(EmailField.DEFAULT_CLASS);
    }
    EmailField.DEFAULT_CLASS = "ui-emailfield";
    return EmailField;
})(TextField);
/**
 * @author Gabor Kokeny
 */
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(form) {
        _super.call(this, form, false);
        this.setClass(TextArea.DEFAULT_CLASS);
    }
    TextArea.prototype.render = function () {
        var textAreaHtmlElement = ElementFactory.createTextArea();
        textAreaHtmlElement.placeholder = this.getPlaceholder();
        textAreaHtmlElement.cols = 50;
        textAreaHtmlElement.rows = 8;
        if (this.getMaxLength())
            textAreaHtmlElement.maxLength = this.getMaxLength();
        _super.prototype.doRender.call(this, textAreaHtmlElement);
    };
    TextArea.DEFAULT_CLASS = "ui-textarea";
    return TextArea;
})(TextField);
/**
 * Base class for trigger fields like DateField, Compobox,
 * Autocomplete, SearchField and so on.
 *
 * @author Gabor Kokeny
 */
var TriggerField = (function (_super) {
    __extends(TriggerField, _super);
    /**
     * Create a new instance of trigger field
     *
     * @param {Form} form The parent form
     */
    function TriggerField(form) {
        _super.call(this, form, true);
        this.getContainer().addClass("ui-triggerfield-wrapper");
        this.triggerButton = new Button(this.getContainer());
        this.triggerButton.addClickListener(this.onTriggerClick);
    }
    TriggerField.prototype.render = function () {
        this.triggerButton.setClass("ui-trigger-button");
        this.triggerButton.getContainer().setClass("ui-trigger-button-wrapper");
        _super.prototype.render.call(this);
    };
    /**
     * Set icon CSS class to the trigger button
     *
     * @param {string} triggerIconClass
     */
    TriggerField.prototype.setTriggerIconClass = function (triggerIconClass) {
        this.triggerButton.setIconClass(triggerIconClass);
    };
    /**
     * Event handler for trigger button click
     *
     * @param {MouseEvent} mouseEvent
     */
    TriggerField.prototype.onTriggerClick = function (mouseEvent) {
        Log.debug("Trigger click", this);
    };
    return TriggerField;
})(TextField);
/**
 * @author Gabor Kokeny
 */
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(form) {
        _super.call(this, form);
        this.setType(4 /* RADIO */);
    }
    RadioButton.DEFAULT_CLASS = "ui-radio";
    RadioButton.DEFAULT_WRAPPER_CLASS = "ui-radio-wrapper";
    RadioButton.DEFAULT_LABEL_CLASS = "ui-radio-label";
    return RadioButton;
})(Checkbox);
/**
 *
 * @author Gabor Kokeny
 */
var Integer = (function () {
    function Integer(value) {
        this.value = 0;
        this.value = value;
    }
    Integer.valueOf = function (value) {
        return new Integer(value);
    };
    Integer.prototype.intValue = function () {
        return this.value;
    };
    Integer.prototype.parseInt = function (stringValue) {
        this.value = parseInt(stringValue, 10);
    };
    Integer.prototype.compareTo = function (integer) {
        return Integer.compare(this.intValue(), integer.intValue());
    };
    Integer.compare = function (x, y) {
        Assert.notNull(x, "x");
        Assert.notNull(y, "y");
        return (x < y) ? -1 : ((x == y) ? 0 : 1);
    };
    return Integer;
})();
/**
 * Utility class for determine information of the user agent
 *
 * @author Gabor Kokeny
 */
var Device = (function () {
    function Device() {
    }
    /**
     * Check userAgent
     *
     * @param {RegExp} regexp The regular expression that sould be check
     */
    Device.check = function (regExp) {
        return regExp.test(Device.AGENT);
    };
    /**
     * Check the browser is Opera
     *
     * @return {boolean} Return true if the browser is Opera
     */
    Device.isOpera = function () {
        return Device.opera;
    };
    Device.isChrome = function () {
        return Device.chrome;
    };
    Device.isSafari = function () {
        return Device.safari;
    };
    Device.isIE = function () {
        return Device.ie;
    };
    Device.isWindows = function () {
        return Device.windows;
    };
    Device.isMac = function () {
        return Device.mac;
    };
    Device.isLinux = function () {
        return Device.linux;
    };
    Device.isAdobeAir = function () {
        return Device.adobeair;
    };
    /**
     *
     * The user agent as string
     */
    Device.AGENT = navigator.userAgent.toLowerCase();
    Device.docMode = document.documentMode;
    Device.isStrict = document.compatMode == "CSS1Compat";
    Device.opera = Device.check(/opera/);
    Device.chrome = Device.check(/\bchrome\b/);
    Device.isWebKit = Device.check(/webkit/);
    Device.safari = !Device.chrome && Device.check(/safari/);
    Device.isSafari2 = Device.safari && Device.check(/applewebkit\/4/);
    Device.isSafari3 = Device.safari && Device.check(/version\/3/);
    Device.isSafari4 = Device.safari && Device.check(/version\/4/);
    Device.ie = !Device.isOpera && Device.check(/msie/);
    Device.isIE7 = Device.ie && (Device.check(/msie 7/) || Device.docMode == 7);
    Device.isIE8 = Device.ie && (Device.check(/msie 8/) && Device.docMode != 7);
    Device.isIE9 = Device.ie && Device.check(/msie 9/);
    Device.isIE6 = Device.ie && !Device.isIE7 && !Device.isIE8 && !Device.isIE9;
    Device.isGecko = !Device.isWebKit && Device.check(/gecko/);
    Device.isGecko2 = Device.isGecko && Device.check(/rv:1\.8/);
    Device.isGecko3 = Device.isGecko && Device.check(/rv:1\.9/);
    Device.windows = Device.check(/windows|win32/);
    Device.mac = Device.check(/macintosh|mac os x/);
    Device.adobeair = Device.check(/adobeair/);
    Device.linux = Device.check(/linux/);
    return Device;
})();
/**
 *
 * @author Gabor Kokeny
 */
var List = (function () {
    function List() {
        this.items = new Array();
    }
    List.prototype.contains = function (t) {
        return this.items.indexOf(t) > -1;
    };
    /**
    * Gets the length of the array.
    * This is a number one higher than the highest element defined in an array.
    */
    List.prototype.size = function () {
        return this.items.length;
    };
    List.prototype.add = function (t) {
        this.items.push(t);
    };
    List.prototype.addAll = function (list) {
        if (ListUtils.isEmpty(list)) {
            return;
        }
        this.items = this.items.concat(list.items);
    };
    /**
    * Returns the index of the first occurrence of a value in an List.
    * @param searchElement The value to locate in the array.
    * @param fromIndex The List index at which to begin the search.
    * If fromIndex is omitted, the search starts at index 0.
    */
    List.prototype.indexOf = function (t, fromIndex) {
        return this.items.indexOf(t, fromIndex);
    };
    List.prototype.get = function (index) {
        if (this.isEmpty()) {
            return null;
        }
        if (index < 0 || index >= this.size()) {
            Log.error("Index out of bounds exception", index);
        }
        return this.items[index];
    };
    List.prototype.remove = function (element) {
        var index = this.items.indexOf(element);
        if (index == -1) {
            return false;
        }
        return this.removeAt(index);
    };
    List.prototype.removeAt = function (index) {
        var deletedElements = this.items.splice(index, 1);
        return ArrayUtils.isEmpty(deletedElements) || !this.containsAnyOf(deletedElements);
    };
    List.prototype.containsAnyOf = function (elements) {
        var _this = this;
        elements.forEach(function (e) {
            if (_this.contains(e))
                return true;
        });
        return false;
    };
    List.prototype.containsAllOf = function (elements) {
        var _this = this;
        elements.forEach(function (e) {
            if (!_this.contains(e))
                return false;
        });
        return true;
    };
    List.prototype.forEach = function (callbackfn, thisArg) {
        this.items.forEach(callbackfn);
    };
    /**
     * Remove all elements from the list
     *
     */
    List.prototype.clear = function () {
        this.items = new Array();
        return this;
    };
    /**
     * Reverse the elements in a list
     *
     */
    List.prototype.reverse = function () {
        this.items.reverse();
        return this;
    };
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the size of array equals zero
     */
    List.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    /**
    * Adds all the elements of a list separated by the specified separator string.
    * @param separator A string used to separate one element of a list from the next in the resulting String.
    * If omitted, the list elements are separated with a comma.
    */
    List.prototype.join = function (separator) {
        return this.items.join(separator);
    };
    /**
       * Sorts a list.
       * @param compareFn The name of the function used to determine
       * the order of the elements.
       */
    List.prototype.sort = function (compareFn) {
        this.items.sort(compareFn);
    };
    /**
     * Get all items in an array.
     *
     * @return {Array} Return the copied array
     */
    List.prototype.toArray = function () {
        var copy = new Array();
        return copy.concat(this.items);
    };
    return List;
})();
/**
 *
 * @author Gabor Kokeny
 */
var StateManager = (function () {
    function StateManager() {
    }
    /**
        * Retrive state by key
        *
        * @param {string} key
        * @return {Object} Return the last state
        */
    StateManager.prototype.loadState = function (stateful) {
        var state = this.stateProvider.getState(stateful.stateId);
        stateful.applyState(state);
    };
    /**
     * Save state
     *
     */
    StateManager.prototype.saveState = function (stateful) {
        this.stateProvider.saveState(stateful.stateId, stateful.getState());
    };
    /**
     * Set state provider
     *
     */
    StateManager.prototype.setStateProvider = function (stateProvider) {
        this.stateProvider = stateProvider;
    };
    StateManager.prototype.getStateProvider = function () {
        return this.stateProvider;
    };
    return StateManager;
})();
/**
 *
 * @author Gabor Kokeny
 */
var ComponentManager = (function () {
    function ComponentManager() {
    }
    ComponentManager.register = function (component) {
        ComponentManager.components.put(component.getId(), component);
    };
    ComponentManager.unregister = function (component) {
        ComponentManager.components.remove(component.getId());
    };
    ComponentManager.getComponent = function (componentId) {
        return ComponentManager.components.get(componentId);
    };
    ComponentManager.getNumberOfComponents = function () {
        return ComponentManager.components.size();
    };
    ComponentManager.components = new HashMap();
    return ComponentManager;
})();
/**
 * Utility class for Arrays
 *
 * @author Gabor Kokeny
 */
var ArrayUtils = (function () {
    function ArrayUtils() {
    }
    /**
     * Check the array is empty
     *
     * @return {boolean} Return true if the array is null or the lenght of array is zero
     */
    ArrayUtils.isEmpty = function (array) {
        return array == null || array.length == 0;
    };
    /**
     * Check the array contains the element
     *
     * @param {Array<T>} array
     * @param {T} element
     *
     * @return {boolean} Return true if the array already contains the element
     */
    ArrayUtils.contains = function (array, element) {
        return array.indexOf(element) > -1;
    };
    return ArrayUtils;
})();
/**
 *
 * @author Gabor Kokeny
 */
var ColumnModel = (function () {
    function ColumnModel() {
        this.columns = new List();
    }
    ColumnModel.prototype.addColumn = function (column) {
        this.columns.add(column);
    };
    ColumnModel.prototype.forEach = function (callbackfn, thisArg) {
        this.columns.forEach(callbackfn);
    };
    return ColumnModel;
})();
var BodyContainer = (function (_super) {
    __extends(BodyContainer, _super);
    function BodyContainer() {
        _super.call(this, null);
        this.addClass(BodyContainer.DEFAULT_CLASS);
    }
    BodyContainer.prototype.render = function () {
        _super.prototype.doRender.call(this, DOMHelper.getBody());
    };
    BodyContainer.DEFAULT_CLASS = "ui-body";
    return BodyContainer;
})(Container);
/**
 * This class represents a Cache
 *
 * @author Gabor Kokeny
 */
var Cache = (function () {
    /**
     * Create a new instance of a cache
     *
     * @param {string} name The name of the cache
     */
    function Cache(name) {
        this.elements = new HashMap();
        this.name = name;
    }
    /**
     * Put an object to this cache
     *
     * @param {string} key
     * @param {Object} object
     */
    Cache.prototype.put = function (key, object) {
        this.elements.put(key, object);
    };
    Cache.prototype.get = function (key) {
        return this.elements.get(key);
    };
    Cache.prototype.clear = function () {
        this.elements.clear();
    };
    Cache.prototype.getName = function () {
        return this.name;
    };
    return Cache;
})();
/**
 * @author Gabor Kokeny
 */
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(form) {
        _super.call(this, form, 3 /* CHECKBOX */, true);
        this.addClass(Checkbox.DEFAULT_CLASS);
        this.getContainer().addClass(Checkbox.DEFAULT_WRAPPER_CLASS);
    }
    Checkbox.prototype.render = function () {
        _super.prototype.render.call(this);
        this.label = new Label(this.getContainer());
        this.label.setText(this.getText());
        this.label.setHtmlFor(this);
        this.label.setClass(Checkbox.DEFAULT_LABEL_CLASS);
        this.label.render();
    };
    Checkbox.prototype.setText = function (text) {
        if (this.isRendered()) {
            this.label.setText(text);
        }
        this.text = text;
    };
    Checkbox.prototype.getText = function () {
        return this.text;
    };
    Checkbox.DEFAULT_CLASS = "ui-checkbox";
    Checkbox.DEFAULT_WRAPPER_CLASS = "ui-checkbox-wrapper";
    Checkbox.DEFAULT_LABEL_CLASS = "ui-checkbox-label";
    return Checkbox;
})(InputField);
var TextType;
(function (TextType) {
    TextType[TextType["SPAN"] = 0] = "SPAN";
    TextType[TextType["H1"] = 1] = "H1";
    TextType[TextType["H2"] = 2] = "H2";
    TextType[TextType["H3"] = 3] = "H3";
    TextType[TextType["H4"] = 4] = "H4";
    TextType[TextType["H5"] = 5] = "H5";
    TextType[TextType["H6"] = 6] = "H6";
    TextType[TextType["PARAGRAPH"] = 7] = "PARAGRAPH";
})(TextType || (TextType = {}));
/**
 *
 * @author Gabor Kokeny
 */
var DisplayText = (function (_super) {
    __extends(DisplayText, _super);
    function DisplayText(parent, type) {
        _super.call(this, parent);
        this.type = type || 0 /* SPAN */;
    }
    DisplayText.prototype.beforeRender = function () {
        if (this.iconClass) {
            var icon = new Icon(this);
            icon.setClass(this.iconClass);
        }
        _super.prototype.beforeRender.call(this);
    };
    DisplayText.prototype.render = function () {
        var textElement = this.createElement(this.type);
        textElement.textContent = this.getText();
        _super.prototype.doRender.call(this, textElement);
    };
    DisplayText.prototype.createElement = function (type) {
        switch (type) {
            case 1 /* H1 */: return ElementFactory.createHeader1();
        }
        return ElementFactory.createSpan();
    };
    DisplayText.prototype.setText = function (text) {
        if (this.isRendered()) {
            this.getElement().textContent = text;
        }
        this.text = text;
    };
    DisplayText.prototype.getText = function () {
        return this.text;
    };
    /**
     * Set the icon for this displaytext
     *
     * @param {string} iconClass
     */
    DisplayText.prototype.setIconClass = function (iconClass) {
        this.iconClass = iconClass;
    };
    return DisplayText;
})(Container);
/**
 * @author Gabor Kokeny
 */
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(form, useWrapperContainer) {
        _super.call(this, form, 0 /* TEXT */, useWrapperContainer);
        this.addClass("ui-textfield");
    }
    TextField.prototype.addKeyupListener = function (listener) {
        _super.prototype.on.call(this, TextField.EVENT_KEYUP, listener);
    };
    TextField.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    TextField.EVENT_KEYUP = "keyup";
    return TextField;
})(InputField);
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(container) {
        _super.call(this, container);
        this.addClass("ui-label");
    }
    Label.prototype.setText = function (text) {
        if (this.isRendered()) {
            this.getElement().textContent = this.getText();
        }
        this.text = text;
    };
    Label.prototype.getText = function () {
        return this.text;
    };
    Label.prototype.render = function () {
        var element = ElementFactory.createLabel();
        _super.prototype.doRender.call(this, element);
        if (this.htmlFor) {
            element.htmlFor = this.htmlFor.getId();
        }
        element.textContent = this.getText();
    };
    Label.prototype.setHtmlFor = function (htmlFor) {
        this.htmlFor = htmlFor;
    };
    return Label;
})(Component);
/**
 * Assertion utility class that assists in validating arguments.
 * Useful for identifying programmer errors early and clearly at runtime.
 *
 * @author Gabor Kokeny
 */
var Assert = (function () {
    function Assert() {
    }
    /**
     * Assert that an object is not null
     *
     * @param {T} object the object to check
     * @param {string} name the parameter name
     */
    Assert.notNull = function (param, name) {
        if (param == null) {
            Log.error("The function parameter " + name + " cannot be null");
        }
    };
    /**
     * Assert that an object value is true
     *
     * @param {T} The object value that should be check
     */
    Assert.isTrue = function (param, name) {
        if (!param) {
            Log.error("The function argument '" + name + "' must be true");
        }
    };
    /**
     * Assert that an object value is false
     *
     * @param {T} The object value that should be check
     */
    Assert.isFalse = function (param, name) {
        if (param) {
            Log.error("The function argument '" + name + "' must be false");
        }
    };
    return Assert;
})();
var BoxComponent = (function (_super) {
    __extends(BoxComponent, _super);
    function BoxComponent() {
        _super.apply(this, arguments);
    }
    return BoxComponent;
})(Component);
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
/**
 * Helper class for manipulating the DOM
 */
var DOMHelper = (function () {
    function DOMHelper() {
    }
    /**
     * Append a Node to the Body
     *
     * @param {Node} node The node instance that should be append to the body
     */
    DOMHelper.appendToBody = function (node) {
        return DOMHelper.append(node, document.body);
    };
    /**
     * Append node to the target node
     *
     * @param {Node} node The node instance that should be append to the body
     * @param {Node} target The target node
     */
    DOMHelper.append = function (node, target) {
        if (target == null) {
            Log.error("Couldn't append component to DOM, because target node is undefined", node);
            return;
        }
        return target.appendChild(node);
    };
    DOMHelper.findById = function (id) {
        var element = document.getElementById(id);
        if (!element) {
            Log.error("There is no element with id", id);
        }
        return element;
    };
    DOMHelper.findByClass = function (className) {
        var nodeList = document.getElementsByClassName(className);
    };
    DOMHelper.getDocument = function () {
        return document;
    };
    DOMHelper.getBody = function () {
        return document.body;
    };
    DOMHelper.setClass = function (component, className) {
        component.getElement().className = className;
    };
    DOMHelper.addClass = function (component, className) {
        component.getElement().classList.add(className);
    };
    /**
     * Add CSS classlist to the HTMLElement
     *
     * @param {HTMLElement} htmlElement
     * @param {List<string>} classList
     */
    DOMHelper.addClassList = function (htmlElement, classList) {
        if (!htmlElement || ListUtils.isEmpty(classList)) {
            return;
        }
        classList.forEach(function (c) {
            htmlElement.classList.add(c);
        });
    };
    /**
     * Render component to the container
     *
     * @param {Component} component The component that should be render to the Container
     * @param {Container} parent The parent container
     */
    DOMHelper.renderComponent = function (component) {
        DOMHelper.append(component.getElement(), component.getContainer().getElement());
        DOMHelper.addClassList(component.getElement(), component.getClassList());
        component.getElement().id = component.getId();
        component.getElement().disabled = component.isDisabled();
        CssHelper.setWidth(component.getElement(), component.getWidth());
        CssHelper.setVisible(component.getElement(), component.isVisible());
    };
    /**
     * Remove Component from the DOM
     *
     * @param {Component} component
     */
    DOMHelper.remove = function (component) {
        if (component.hasParent()) {
            var container = component.getContainer();
            container.getElement().removeChild(component.getElement());
        }
    };
    return DOMHelper;
})();
/**
 *
 * @author Gabor Kokeny
 */
var DateField = (function (_super) {
    __extends(DateField, _super);
    function DateField(form) {
        _super.call(this, form);
        this.setClass("ui-datefield");
        this.getContainer().setClass("ui-datefield-wrapper");
        this.setTriggerIconClass("fa fa-calendar");
        this.setReadOnly(true);
        this.on("click", this.onTriggerClick);
    }
    return DateField;
})(TriggerField);
var Container = (function (_super) {
    __extends(Container, _super);
    function Container(parent, useWrapperContainer) {
        _super.call(this, parent, useWrapperContainer);
        this.children = new List();
        this.init();
        this.createComponents();
    }
    Container.prototype.init = function () {
    };
    Container.prototype.createComponents = function () {
    };
    Container.prototype.render = function () {
        var divElement = ElementFactory.createDiv();
        this.doRender(divElement);
    };
    /**
     * Render container with child components
     *
     * @protected
     */
    Container.prototype.doRender = function (htmlElement) {
        _super.prototype.doRender.call(this, htmlElement);
        this.children.forEach(function (c) {
            c.render();
        });
    };
    /**
     * Add component to this container
     *
     */
    Container.prototype.add = function (component) {
        this.children.add(component);
    };
    /**
     * Remove component from this container
     *
     */
    Container.prototype.remove = function (component) {
        this.children.remove(component);
    };
    /**
     * Get children of this container
     */
    Container.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Destroy container with all children component
     */
    Container.prototype.destroy = function () {
        Log.groupStart("Destroy container: " + this.getId());
        Log.debug("Destroy children components", this.getChildren().size());
        this.children.forEach(function (child) {
            console.debug("Destroy child component", child);
            child.destroy();
        });
        _super.prototype.destroy.call(this);
        Log.groupEnd();
    };
    /**
     * Get child component by index
     *
     * @param {number} itemIndex The index of the child component
     */
    Container.prototype.getComponent = function (itemIndex) {
        Assert.notNull(itemIndex, "itemIndex");
        if (itemIndex < 0 || itemIndex >= this.getChildren().size()) {
            Log.error("Item index out of range", itemIndex);
            return null;
        }
        return this.getChildren().get(itemIndex);
    };
    return Container;
})(Component);
/**
 *
 * @author Gabor Kokeny
 */
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(menu) {
        _super.call(this, menu);
        this.setClass("ui-menu-item");
        this.button = new Button(this);
    }
    MenuItem.prototype.render = function () {
        var listElement = ElementFactory.createListItem();
        _super.prototype.doRender.call(this, listElement);
    };
    MenuItem.prototype.setText = function (text) {
        this.button.setText(text);
    };
    MenuItem.prototype.getText = function () {
        return this.button.getText();
    };
    MenuItem.prototype.setIconClass = function (iconClass) {
        this.button.setIconClass(iconClass);
    };
    MenuItem.prototype.addClickListener = function (e) {
        this.button.addClickListener(e);
    };
    return MenuItem;
})(Container);
/**
 * Grid UI component
 *
 * @author Gabor Kokeny
 */
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(parent) {
        _super.call(this, parent, true);
    }
    Grid.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass(Grid.DEFULT_CLASS);
        this.getContainer().addClass(Grid.DEFULT_WRAPPER_CLASS);
        this.gridHeader = new GridHeader(this);
        this.gridBody = new GridBody(this);
    };
    Grid.prototype.render = function () {
        var htmlTableElement = ElementFactory.createGrid();
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    Grid.prototype.setDataProvider = function (dataProvider) {
        this.dataProvider = dataProvider;
    };
    Grid.prototype.setEmptyMessage = function (emptyMessage) {
        this.emptyMessage = emptyMessage;
    };
    Grid.prototype.getEmptyMessage = function () {
        return this.emptyMessage;
    };
    Grid.prototype.getColumnModel = function () {
        return new ColumnModel();
    };
    Grid.prototype.getDataProvider = function () {
        return this.dataProvider;
    };
    Grid.DEFULT_CLASS = "ui-grid";
    Grid.DEFULT_WRAPPER_CLASS = "ui-grid-wrapper";
    return Grid;
})(Container);
/**
 * Grid header
 *
 * @author Gabor Kokeny
 */
var GridHeader = (function (_super) {
    __extends(GridHeader, _super);
    function GridHeader(parent) {
        _super.call(this, parent);
    }
    GridHeader.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-header");
        var gridRow = new GridRow(this);
        this.getColumnModel().forEach(function (column) {
            new GridHeaderColumn(gridRow, column);
        });
    };
    GridHeader.prototype.render = function () {
        var htmlTableElement = document.createElement("thead");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    GridHeader.prototype.getColumnModel = function () {
        var grid = this.getContainer();
        return grid.getColumnModel();
    };
    return GridHeader;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridRow = (function (_super) {
    __extends(GridRow, _super);
    function GridRow() {
        _super.apply(this, arguments);
    }
    GridRow.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-row");
    };
    GridRow.prototype.render = function () {
        var htmlTableElement = document.createElement("tr");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    return GridRow;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridHeaderColumn = (function (_super) {
    __extends(GridHeaderColumn, _super);
    function GridHeaderColumn(row, column) {
        _super.call(this, row);
        this.column = column;
    }
    GridHeaderColumn.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-header-column");
    };
    GridHeaderColumn.prototype.render = function () {
        var htmlTableElement = document.createElement("th");
        if (this.column.iconClass) {
            this.icon = new Icon(this);
            this.icon.setClass(this.column.iconClass);
        }
        this.columnText = new DisplayText(this);
        this.columnText.setText(this.column.title);
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    return GridHeaderColumn;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridColumn = (function (_super) {
    __extends(GridColumn, _super);
    function GridColumn() {
        _super.apply(this, arguments);
    }
    GridColumn.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-column");
    };
    GridColumn.prototype.render = function () {
        var htmlTableElement = document.createElement("td");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    return GridColumn;
})(Container);
/**
 *
 * @author Gabor Kokeny
 */
var GridBody = (function (_super) {
    __extends(GridBody, _super);
    function GridBody() {
        _super.apply(this, arguments);
    }
    GridBody.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass("ui-grid-body");
        var dataProvider = this.getGrid().getDataProvider();
        //        dataProvider.forEach(data => {
        //            var gridRow = new GridRow(this);
        //            this.getGrid().getColumnModel().forEach(column => {
        //                new GridColumn(gridRow);
        //            });
        //        });
    };
    GridBody.prototype.render = function () {
        var htmlTableElement = document.createElement("tbody");
        _super.prototype.doRender.call(this, htmlTableElement);
    };
    GridBody.prototype.getGrid = function () {
        return this.getContainer();
    };
    return GridBody;
})(Container);
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["SUBMIT"] = 0] = "SUBMIT";
    ButtonType[ButtonType["BUTTON"] = 1] = "BUTTON";
})(ButtonType || (ButtonType = {}));
var IconAlign;
(function (IconAlign) {
    IconAlign[IconAlign["LEFT"] = 0] = "LEFT";
    IconAlign[IconAlign["RIGHT"] = 1] = "RIGHT";
})(IconAlign || (IconAlign = {}));
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(parent) {
        _super.call(this, parent, true);
        this.text = null;
        this.iconAlign = 0 /* LEFT */;
        this.buttonType = 1 /* BUTTON */;
        this.addClass("ui-button");
        this.getContainer().setClass("ui-button-wrapper");
        this.icon = new Icon(this);
        this.text = new DisplayText(this, 0 /* SPAN */);
        this.text.addClass("ui-button-text");
    }
    Button.prototype.render = function () {
        var buttonElement = ElementFactory.createButton();
        buttonElement.type = ButtonType[this.getButtonType()].toLowerCase();
        _super.prototype.doRender.call(this, buttonElement);
    };
    Button.prototype.setText = function (text) {
        this.text.setText(text);
    };
    Button.prototype.getText = function () {
        return this.text.getText();
    };
    Button.prototype.setButtonType = function (buttonType) {
        this.buttonType = buttonType;
    };
    Button.prototype.getButtonType = function () {
        return this.buttonType;
    };
    Button.prototype.addClickListener = function (listener) {
        this.addListener(Button.EVENT_CLICK, listener);
    };
    Button.prototype.setIconClass = function (iconClass) {
        this.icon.setClass(iconClass);
    };
    Button.prototype.setIconAlign = function (iconAlign) {
        this.icon.addClass("ui-icon-" + IconAlign[iconAlign].toLowerCase());
        if (this.iconAlign === iconAlign) {
            return;
        }
        this.getChildren().reverse();
        if (this.isRendered()) {
        }
    };
    Button.EVENT_CLICK = "click";
    return Button;
})(Container);
/**
 * Validator for email addresses
 *
 * @author Gabor Kokeny
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.isValid = function (object) {
        return false;
    };
    return EmailValidator;
})();
var Observable = (function () {
    function Observable() {
        this.listeners = new MultiMap();
    }
    Observable.prototype.addListener = function (eventName, listener) {
        this.listeners.put(eventName, listener);
    };
    Observable.prototype.removeListeners = function (eventName) {
        return this.listeners.remove(eventName);
    };
    Observable.prototype.removeListener = function (eventName, listener) {
        return this.listeners.removeElement(eventName, listener);
    };
    Observable.prototype.purgeListeners = function () {
        this.listeners.clear();
    };
    Observable.prototype.getListeners = function (eventName) {
        return this.listeners.get(eventName);
    };
    Observable.prototype.getAllListeners = function () {
        return this.listeners;
    };
    Observable.prototype.fireEvent = function (eventName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var listeners = this.listeners.get(eventName);
        if (listeners) {
            var e = document.createEvent("Event");
            listeners.forEach(function (listener) {
                listener.call(e, params);
            });
        }
    };
    return Observable;
})();
var HashSet = (function (_super) {
    __extends(HashSet, _super);
    function HashSet() {
        _super.apply(this, arguments);
    }
    HashSet.prototype.add = function (t) {
        if (this.contains(t)) {
            return;
        }
        _super.prototype.add.call(this, t);
    };
    return HashSet;
})(List);
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["WARNING"] = 0] = "WARNING";
    NotificationType[NotificationType["ERROR"] = 1] = "ERROR";
    NotificationType[NotificationType["INFO"] = 2] = "INFO";
    NotificationType[NotificationType["SUCCESS"] = 3] = "SUCCESS";
})(NotificationType || (NotificationType = {}));
/**
 * Inline notification for showing the error, warning and info messages
 *
 * @author Gabor Kokeny
 */
var Notification = (function (_super) {
    __extends(Notification, _super);
    /**
     * Create a new instance of notifiaction
     *
     * @param {Container} parent The parent container
     * @constructor
     */
    function Notification(parent) {
        _super.call(this, parent);
        this.setClass(Notification.DEFAULT_CLASS);
    }
    Notification.prototype.init = function () {
        _super.prototype.init.call(this);
        this.title = new DisplayText(this);
        this.title.addClass("ui-notification-title");
        this.title.setIconClass(Notification.getIconClass(this.type));
        this.message = new DisplayText(this);
        this.message.addClass("ui-notification-message");
        this.closeButton = new Button(this);
        this.closeButton.getContainer().setClass("ui-closebutton-wrapper");
        this.closeButton.addClass("ui-closebutton");
        this.closeButton.setIconClass("fa fa-close");
        this.closeButton.addClickListener(this.onClose);
    };
    Notification.prototype.beforeRender = function () {
        this.addClass(NotificationType[this.type].toLowerCase());
        _super.prototype.beforeRender.call(this);
    };
    Notification.getIconClass = function (type) {
        switch (type) {
            case 2 /* INFO */: return "fa fa-info-circle";
            case 0 /* WARNING */: return "fa fa-warning";
            case 1 /* ERROR */: return "fa fa-warning";
            case 3 /* SUCCESS */: return "fa fa-info-circle";
            default: return "fa fa-info-circle";
        }
    };
    Notification.prototype.setDelay = function (delay) {
        this.delay = delay;
    };
    Notification.prototype.getDelay = function () {
        return this.delay;
    };
    Notification.prototype.setClosable = function (closable) {
        this.closable = closable;
    };
    Notification.prototype.isClosable = function () {
        return this.closable;
    };
    Notification.prototype.setMessage = function (message) {
        this.message.setText(message);
    };
    Notification.prototype.getMessage = function () {
        return this.message.getText();
    };
    Notification.prototype.setTitle = function (title) {
        this.title.setText(title);
    };
    Notification.prototype.getTitle = function () {
        return this.title.getText();
    };
    Notification.prototype.setIconClass = function (iconClass) {
        this.title.setIconClass(iconClass);
    };
    /**
     *
     * @param {NotificationType} type
     */
    Notification.prototype.setType = function (type) {
        this.type = type;
    };
    /**
     *
     * Create a new info notification
     */
    Notification.info = function (parent) {
        return Notification.newInstance(parent, 2 /* INFO */);
    };
    /**
     *
     * Create a new error notification
     */
    Notification.error = function (parent) {
        return Notification.newInstance(parent, 1 /* ERROR */);
    };
    /**
    *
    * Create a new warning notification
    */
    Notification.warning = function (parent) {
        return Notification.newInstance(parent, 0 /* WARNING */);
    };
    /**
    *
    * Create a new SUCCES notification
    */
    Notification.success = function (parent) {
        return Notification.newInstance(parent, 3 /* SUCCESS */);
    };
    /**
     *
     *
     */
    Notification.newInstance = function (parent, type) {
        var notification = new Notification(parent);
        notification.setType(type);
        return notification;
    };
    /**
     *
     * @param {EventListener} listener
     */
    Notification.prototype.addCloseListener = function (listener) {
        _super.prototype.addListener.call(this, Notification.EVENT_CLOSE, listener);
    };
    /**
     * Remove event listener
     */
    Notification.prototype.removeCloseListener = function (listener) {
        // super.removeListeners(Notification.EVENT_CLOSE, listener);
    };
    Notification.prototype.onClose = function () {
        Log.info("Close notification manually");
    };
    Notification.DEFAULT_CLASS = "ui-notification";
    Notification.EVENT_CLOSE = "close";
    return Notification;
})(Container);
var CacheManager = (function () {
    function CacheManager() {
    }
    CacheManager.getCache = function (cacheName) {
        var cache = this.caches.get(cacheName);
        if (cache == null)
            Log.error("There is no cache with name " + cacheName);
        return cache;
    };
    CacheManager.addCache = function (cache) {
        CacheManager.caches.put(cache.getName(), cache);
    };
    CacheManager.clearCache = function (cacheName) {
        this.caches.get(cacheName).clear();
    };
    CacheManager.removeCache = function (cacheName) {
        return this.caches.remove(cacheName);
    };
    CacheManager.getCaches = function () {
        return this.caches.values();
    };
    CacheManager.caches = new HashMap();
    return CacheManager;
})();
/**
 *
 *
 * @author Gabor Kokeny
 */
var LocalStorageStateProvider = (function () {
    function LocalStorageStateProvider() {
        this.storage = window.localStorage;
    }
    /**
     * Retrive state by key
     *
     * @param {string} key
     * @return {T} Return the last state
     */
    LocalStorageStateProvider.prototype.getState = function (key) {
        var stringState = this.storage.getItem(key);
        return JSON.parse(stringState);
    };
    /**
     * Save state
     *
     * @param {string} key A uniuqe key for this state
     * @param {T} state The state that should be save
     */
    LocalStorageStateProvider.prototype.saveState = function (key, state) {
        this.storage.setItem(key, JSON.stringify(state));
    };
    return LocalStorageStateProvider;
})();
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
   * @return {HTMLPhraseElement}
   */
    ElementFactory.createIcon = function () {
        return DOMHelper.getDocument().createElement("i");
    };
    /**
     * Create a progress html element
     *
     * @return {HTMLProgressElement}
     */
    ElementFactory.createProgress = function () {
        return DOMHelper.getDocument().createElement("progress");
    };
    /**
     * Create a list html element
     *
     * @return {HTMLOptionElement}
     */
    ElementFactory.createList = function () {
        return DOMHelper.getDocument().createElement("ul");
    };
    /**
    * Create a list item html element
    *
    * @return {HTMLOptionElement}
    */
    ElementFactory.createListItem = function () {
        return DOMHelper.getDocument().createElement("li");
    };
    return ElementFactory;
})();
var FormToolkit = (function () {
    function FormToolkit() {
    }
    return FormToolkit;
})();
/**
 * Data provider for List impelementations
 *
 * @author Gabor Kokeny
 */
var ListDataProvider = (function () {
    function ListDataProvider(list) {
        Assert.notNull(list, "list");
        this.list = list;
    }
    ListDataProvider.prototype.getValue = function (data) {
        return null;
    };
    ListDataProvider.prototype.forEach = function (callbackfn, thisArg) {
        this.list.forEach(callbackfn);
    };
    ListDataProvider.prototype.isEmpty = function () {
        return ListUtils.isEmpty(this.list);
    };
    return ListDataProvider;
})();
var Sequence = (function () {
    function Sequence() {
        this.counter = 1;
    }
    Sequence.next = function () {
        var str = "" + Sequence.INSTANCE.counter++;
        var pad = "cmp-";
        return pad.concat(str);
    };
    Sequence.INSTANCE = new Sequence();
    return Sequence;
})();
var MultiMap = (function () {
    function MultiMap() {
        this.map = new HashMap();
    }
    MultiMap.prototype.get = function (key) {
        return this.map.get(key);
    };
    MultiMap.prototype.put = function (key, value) {
        var elements = this.map.get(key) || new List();
        elements.add(value);
        this.map.put(key, elements);
    };
    MultiMap.prototype.remove = function (key) {
        return this.map.remove(key);
    };
    MultiMap.prototype.removeElement = function (key, element) {
        var elements = this.map.get(key);
        if (ListUtils.isEmpty(elements)) {
            return false;
        }
        return elements.remove(element);
    };
    MultiMap.prototype.clear = function () {
        this.map.clear();
    };
    MultiMap.prototype.forEach = function (callbackfn, thisArg) {
        this.map.forEach(callbackfn);
    };
    return MultiMap;
})();
var LabelAlign;
(function (LabelAlign) {
    LabelAlign[LabelAlign["LEFT"] = 0] = "LEFT";
    LabelAlign[LabelAlign["RIGHT"] = 1] = "RIGHT";
})(LabelAlign || (LabelAlign = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["POST"] = 1] = "POST";
})(HttpMethod || (HttpMethod = {}));
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(parent) {
        _super.call(this, parent);
        if (parent instanceof Form) {
            Log.error("Unsupported parent type -> Form");
        }
        this.validateOnBlur = false;
        this.setHttpMethod(1 /* POST */);
        this.setLabelWidth(Form.DEFAULT_LABEL_WIDTH);
        this.setLabelAlign(0 /* LEFT */);
        this.addClass("ui-form");
    }
    Form.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    Form.prototype.createComponents = function () {
        _super.prototype.createComponents.call(this);
        this.bottomButtonBar = new ButtonBar(this);
        this.initButtons(this.bottomButtonBar);
    };
    Form.prototype.initButtons = function (buttonBar) {
    };
    Form.prototype.render = function () {
        var formElement = ElementFactory.createForm();
        formElement.method = HttpMethod[this.getHttpMethod()].toLowerCase();
        formElement.action = this.getAction();
        this.addClass("label-align-" + LabelAlign[this.labelAlign].toLowerCase());
        _super.prototype.doRender.call(this, formElement);
    };
    Form.prototype.clearValues = function () {
        //Log.debug("Clear form values", this);
        this.getChildren().forEach(function (child) {
            //            if (child instanceof FormField) {
            //                child.setValue(null);
            //            }
        });
    };
    Form.prototype.getValues = function () {
        var values = {};
        var inputFields = Form.getInputFields(this);
        Log.groupStart("-- Collect form values");
        inputFields.forEach(function (inputField) {
            Log.debug("Field value :", inputField.getName(), inputField.getValue());
            values[inputField.getName()] = inputField.getValue();
        });
        Log.debug("Collect form values finished", values);
        Log.groupEnd();
        return values;
    };
    Form.getInputFields = function (container) {
        var inputFields = new List();
        container.getChildren().forEach(function (child) {
            if (child instanceof Container) {
                inputFields.addAll(Form.getInputFields(child));
            }
            if (child instanceof InputField) {
                inputFields.add(child);
            }
        });
        return inputFields;
    };
    Form.prototype.setLabelWidth = function (labelWidth) {
        this.labelWidth = labelWidth;
    };
    Form.prototype.getLabelWidth = function () {
        return this.labelWidth;
    };
    Form.prototype.setLabelAlign = function (labelAlign) {
        this.labelAlign = labelAlign;
    };
    Form.prototype.setHttpMethod = function (httpMethod) {
        if (this.isRendered()) {
            this.getElement().method = HttpMethod[httpMethod].toLowerCase();
        }
        this.httpMethod = httpMethod;
    };
    Form.prototype.getHttpMethod = function () {
        return this.httpMethod;
    };
    Form.prototype.setAction = function (action) {
        if (this.isRendered()) {
            this.getElement().action = action;
        }
        this.action = action;
    };
    Form.prototype.getAction = function () {
        return this.action;
    };
    Form.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    /**
     * Turn on form validation on the focus lost event
     *
     * If set true, form will be validate on blur event
     *
     * @param {boolean} validateOnBlur
     */
    Form.prototype.setValidateOnBlur = function (validateOnBlur) {
        this.validateOnBlur = validateOnBlur;
    };
    /**
     * Check form validataion on blur event
     *
     * @return Return true if validateOnBlur turned on
     */
    Form.prototype.isValidateOnBlur = function () {
        return this.validateOnBlur;
    };
    Form.prototype.setModel = function (model) {
        this.model = model;
        var proto = Object.getPrototypeOf(model);
        var keys = Object.keys(proto);
        keys.forEach(function (key) {
            var propertyDescriptor = Object.getOwnPropertyDescriptor(proto, key);
            var fn = propertyDescriptor.value;
            //Log.info("Properties ", User.prototype.getFirstName);
            fn.call(model, "alma");
        });
    };
    Form.DEFAULT_LABEL_WIDTH = 140;
    return Form;
})(Container);
var InputType;
(function (InputType) {
    InputType[InputType["TEXT"] = 0] = "TEXT";
    InputType[InputType["HIDDEN"] = 1] = "HIDDEN";
    InputType[InputType["PASSWORD"] = 2] = "PASSWORD";
    InputType[InputType["CHECKBOX"] = 3] = "CHECKBOX";
    InputType[InputType["RADIO"] = 4] = "RADIO";
    InputType[InputType["DATE"] = 5] = "DATE";
    InputType[InputType["EMAIL"] = 6] = "EMAIL";
})(InputType || (InputType = {}));
/**
 * @author Gabor Kokeny
 */
var InputField = (function (_super) {
    __extends(InputField, _super);
    function InputField(form, type, useWrapperContainer) {
        _super.call(this, form, useWrapperContainer);
        this.type = type;
        this.value = null;
        this.autoCompleteEnabled = false;
    }
    /**
     * Set value to this inputField
     *
     * @param {string} value
     */
    InputField.prototype.setValue = function (value) {
        if (this.isRendered()) {
            this.getElement().value = value;
        }
        this.value = value;
    };
    /**
     * Get the value of this inputField
     *
     * @return {stirng}
     */
    InputField.prototype.getValue = function () {
        return this.value;
    };
    InputField.prototype.setName = function (name) {
        if (this.isRendered()) {
            this.getElement().name = name;
        }
        this.name = name;
    };
    InputField.prototype.getName = function () {
        return this.name;
    };
    InputField.prototype.setType = function (inputType) {
        this.type = inputType;
    };
    InputField.prototype.getType = function () {
        return this.type;
    };
    InputField.prototype.setPlaceholder = function (placeholder) {
        if (this.isRendered()) {
            this.getElement().placeholder = placeholder;
        }
        this.placeholder = placeholder;
    };
    InputField.prototype.getPlaceholder = function () {
        return this.placeholder;
    };
    InputField.prototype.setAutoCompleteEnabled = function (autoCompleteEnabled) {
        if (this.isRendered()) {
            this.getElement().placeholder = autoCompleteEnabled ? "on" : "off";
        }
        this.autoCompleteEnabled = autoCompleteEnabled;
    };
    InputField.prototype.isAutoCompleteEnabled = function () {
        return this.autoCompleteEnabled;
    };
    InputField.prototype.render = function () {
        var inputElement = ElementFactory.createInput();
        inputElement.type = InputType[this.getType()].toLowerCase();
        if (this.getName())
            inputElement.name = this.getName();
        if (this.getValue)
            inputElement.value = this.getValue();
        if (this.getPlaceholder())
            inputElement.placeholder = this.getPlaceholder();
        if (this.isReadOnly())
            inputElement.readOnly = this.isReadOnly();
        if (this.getMaxLength())
            inputElement.maxLength = this.getMaxLength();
        inputElement.autocomplete = this.isAutoCompleteEnabled() ? "on" : "off";
        _super.prototype.doRender.call(this, inputElement);
    };
    /**
     * Add changelistener
     *
     * @param {EventListener} listener
     */
    InputField.prototype.addChangeListener = function (listener) {
        _super.prototype.on.call(this, InputField.EVENT_CHANGE, listener);
    };
    /**
     * Add focus lost listener to this field
     *
     * @param {EventListener} listener
     */
    InputField.prototype.addBlurListener = function (listener) {
        _super.prototype.on.call(this, InputField.EVENT_BLUR, listener);
    };
    InputField.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    InputField.prototype.setReadOnly = function (readOnly) {
        if (this.isRendered()) {
            this.getElement().readOnly = this.isReadOnly();
        }
        this.readOnly = readOnly;
    };
    InputField.prototype.isReadOnly = function () {
        return this.readOnly;
    };
    InputField.prototype.getMaxLength = function () {
        return this.maxLength;
    };
    InputField.prototype.setMaxLength = function (maxLength) {
        this.maxLength = maxLength;
    };
    InputField.EVENT_CHANGE = "change";
    InputField.EVENT_BLUR = "blur";
    return InputField;
})(Field);
//# sourceMappingURL=typeui-all.js.map