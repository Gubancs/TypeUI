var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["WARNING"] = 0] = "WARNING";
    NotificationType[NotificationType["ERROR"] = 1] = "ERROR";
    NotificationType[NotificationType["INFO"] = 2] = "INFO";
    NotificationType[NotificationType["SUCCESS"] = 3] = "SUCCESS";
})(NotificationType || (NotificationType = {}));
/**
 * Inline notification for error, warning and info messages
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
//# sourceMappingURL=Notification.js.map