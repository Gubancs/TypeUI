var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
//# sourceMappingURL=TriggerField.js.map