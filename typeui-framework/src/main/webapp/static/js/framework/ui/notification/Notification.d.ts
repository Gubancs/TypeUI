declare enum NotificationType {
    WARNING = 0,
    ERROR = 1,
    INFO = 2,
    SUCCESS = 3,
}
/**
 * Inline notification for error, warning and info messages
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
