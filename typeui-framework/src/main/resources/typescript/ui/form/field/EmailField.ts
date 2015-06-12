
/**
 * 
 * @author Gabor Kokeny
 */
class EmailField extends TextField {

    static DEFAULT_CLASS: string = "ui-emailfield"

    constructor(form: Form) {
        super(form);
        
        this.addClass(EmailField.DEFAULT_CLASS);
    }
}