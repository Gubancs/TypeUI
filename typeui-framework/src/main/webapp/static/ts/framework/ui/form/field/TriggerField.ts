
/**
 * Base class for trigger fields like DateField, Compobox, 
 * Autocomplete, SearchField and so on.
 * 
 * @author Gabor Kokeny
 */
class TriggerField extends TextField {

    /**
     * The trigger button
     */
    private triggerButton: Button;

    /**
     * Create a new instance of trigger field
     * 
     * @param {Form} form The parent form
     */
    constructor(form: Form) {
        super(form, true);

        this.getContainer().addClass("ui-triggerfield-wrapper");

        this.triggerButton = new Button(this.getContainer());
        this.triggerButton.addClickListener(this.onTriggerClick);
    }


    render() {
        this.triggerButton.setClass("ui-trigger-button");
        this.triggerButton.getContainer().setClass("ui-trigger-button-wrapper");

        super.render();
    }


    /**
     * Set icon CSS class to the trigger button
     * 
     * @param {string} triggerIconClass
     */
    setTriggerIconClass(triggerIconClass: string) {
        this.triggerButton.setIconClass(triggerIconClass);
    }
    
    /**
     * Event handler for trigger button click
     * 
     * @param {MouseEvent} mouseEvent
     */
    onTriggerClick(mouseEvent: MouseEvent) {
        Log.debug("Trigger click", this);
    }
}