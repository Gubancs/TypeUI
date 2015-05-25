

/**
 * 
 * @author Gabor Kokeny
 */
class DateField extends TriggerField {

    constructor(form: Form) {
        super(form);

        this.setClass("ui-datefield");
        this.getContainer().setClass("ui-datefield-wrapper");
        this.setTriggerIconClass("fa fa-calendar");
        
        this.setReadOnly(true);
        
        this.on("click", this.onTriggerClick);
    }
    
    
}