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
