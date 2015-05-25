declare enum Gender {
    MALE = 0,
    FEMALE = 1,
}
/**
 *
 * Example form
 */
declare class UserForm extends Form {
    private okButton;
    private cancelButton;
    private checkbox;
    private lastNameField;
    private firstNameField;
    private emailField;
    private dateField;
    constructor(parent: Container);
    protected createComponents(): void;
    protected initButtons(buttonBar: ButtonBar): void;
    /**
     * Initialize custom event listeners
     */
    protected initEventListeners(): void;
    /**
     * Mouse event click handler for okButton
     *
     * @param {MouseEvent} e
     */
    private onButtonClickHandler(e);
    private firstNameChangeHandler(e);
}
