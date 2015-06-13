
enum NotificationType {
    WARNING, ERROR, INFO, SUCCESS
}

/**
 * Inline notification for showing the error, warning and info messages
 * 
 * @author Gabor Kokeny
 */
class Notification extends Container {

    static DEFAULT_CLASS = "ui-notification"
    static EVENT_CLOSE = "close";

    private delay: number;

    private closable: boolean;

    private type: NotificationType;

    private title: DisplayText;

    private message: DisplayText;

    private closeButton: Button;


    /**
     * Create a new instance of notifiaction
     * 
     * @param {Container} parent The parent container
     * @constructor
     */
    constructor(parent: Container) {
        super(parent);

        this.setClass(Notification.DEFAULT_CLASS);
    }


    protected init() {
        super.init();

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
    }
    
    protected beforeRender(){
        this.addClass(NotificationType[this.type].toLowerCase());
        super.beforeRender();
    }

    private static getIconClass(type: NotificationType): string {
        switch (type) {
            case NotificationType.INFO: return "fa fa-info-circle";
            case NotificationType.WARNING: return "fa fa-warning";
            case NotificationType.ERROR: return "fa fa-warning";
            case NotificationType.SUCCESS: return "fa fa-info-circle";
            default: return "fa fa-info-circle";
        }
    }

    setDelay(delay: number) {
        this.delay = delay;
    }

    getDelay(): number {
        return this.delay;
    }

    setClosable(closable: boolean) {
        this.closable = closable;
    }

    isClosable(): boolean {
        return this.closable;
    }

    setMessage(message: string) {
        this.message.setText(message);
    }

    getMessage(): string {
        return this.message.getText();
    }

    setTitle(title: string) {
        this.title.setText(title);
    }

    getTitle(): string {
        return this.title.getText();
    }

    setIconClass(iconClass: string) {
        this.title.setIconClass(iconClass);
    }
    
    /**
     * 
     * @param {NotificationType} type
     */
    private setType(type: NotificationType) {
        this.type = type;
    }

    /**
     * 
     * Create a new info notification
     */
    static info(parent: Container): Notification {
        return Notification.newInstance(parent, NotificationType.INFO);
    }

    /**
     * 
     * Create a new error notification
     */
    static error(parent: Container): Notification {
        return Notification.newInstance(parent, NotificationType.ERROR);
    }
    
    /**
    * 
    * Create a new warning notification
    */
    static warning(parent: Container): Notification {
        return Notification.newInstance(parent, NotificationType.WARNING);
    }

    
    /**
    * 
    * Create a new SUCCES notification
    */
    static success(parent: Container): Notification {
        return Notification.newInstance(parent, NotificationType.SUCCESS);
    }
    
    /**
     * 
     * 
     */
    private static newInstance(parent: Container, type: NotificationType): Notification {
        var notification = new Notification(parent);
        notification.setType(type);
        return notification;
    }

    /**
     * 
     * @param {EventListener} listener
     */
    addCloseListener(listener: EventListener) {
        super.addListener(Notification.EVENT_CLOSE, listener);
    }

  
    /**
     * Remove event listener
     */
    removeCloseListener(listener: EventListener) {
        // super.removeListeners(Notification.EVENT_CLOSE, listener);
    }

    protected onClose() {
        Log.info("Close notification manually");
    }

}