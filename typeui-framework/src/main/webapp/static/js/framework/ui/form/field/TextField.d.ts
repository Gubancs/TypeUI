/**
 * @author Gabor Kokeny
 */
declare class TextField extends InputField {
    static EVENT_KEYUP: string;
    constructor(form: Form, useWrapperContainer?: boolean);
    addKeyupListener(listener: EventListener): void;
    destroy(): void;
}
