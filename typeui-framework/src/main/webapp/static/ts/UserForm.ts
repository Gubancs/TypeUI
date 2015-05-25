
enum Gender {
    MALE, FEMALE
}


/**
 * 
 * Example form
 */
class UserForm extends Form {

    private okButton: Button;
    private cancelButton: Button;
    private checkbox: Checkbox;
    private lastNameField: TextField;
    private firstNameField: TextField;
    private emailField: EmailField;
    private dateField: DateField;

    constructor(parent: Container) {
        super(parent);

        this.setLabelWidth(200);
        this.setLabelAlign(LabelAlign.RIGHT);
        this.setHttpMethod(HttpMethod.GET);
        this.setAction("");
        this.setValidateOnBlur(true);
    }

    protected createComponents() {

        var toolkit = new FormToolkit();

        //First name field
        this.firstNameField = new TextField(this);
        this.firstNameField.setName("firstName");
        this.firstNameField.setDisabled(false);
        this.firstNameField.setPlaceholder("Type your firstname");
        this.firstNameField.setFieldLabel("First name");

        
        //last name field
        this.lastNameField = new TextField(this);
        this.lastNameField.setName("lastName");
        this.lastNameField.setDisabled(false);
        this.lastNameField.setPlaceholder("Type your lastname");
        this.lastNameField.setFieldLabel("Last name");
       
        
          
        //last name field
        this.dateField = new DateField(this);
        this.dateField.setName("birthDate");
        this.dateField.setDisabled(false);
        this.dateField.setPlaceholder("Select your birth date");
        this.dateField.setFieldLabel("Birth date");
       
          
        //Gender field
        var genderField = new Combobox(this);
        genderField.setDataProvider(new EnumDataProvider(Gender));
        genderField.setFieldLabel("Gender");
        
        //Are you sure?
        this.checkbox = new Checkbox(this);
        this.checkbox.setText("Yes");
        this.checkbox.setName("sure");
        this.checkbox.setFieldLabel("Are you sure");
        
        //Email field
        this.emailField = new EmailField(this);
        this.emailField.setName("email");
        this.emailField.setFieldLabel("Email");
        this.emailField.setPlaceholder("Type your email");
        
         
        //Describe yourself
        var textArea = new TextArea(this);
        textArea.setPlaceholder("Type your email");
        textArea.setDisabled(false);
        textArea.setFieldLabel("Describe yourself");

        super.createComponents();
    }

    initButtons(buttonBar: ButtonBar) {
        
        //OK button
        this.okButton = new Button(buttonBar);
        this.okButton.setButtonType(ButtonType.BUTTON);
        this.okButton.setText("Submit");
        this.okButton.addClass("custom-ok-button");
        this.okButton.setIconClass("fa fa-check");
        this.okButton.setIconAlign(IconAlign.LEFT);
        
        //Cancel button
        this.cancelButton = new Button(buttonBar);
        this.cancelButton.setText("Cancel");
        this.cancelButton.addClass("custom-cancel-button");
    }

    /**
     * Initialize custom event listeners
     */
    protected initEventListeners() {
        super.initEventListeners();

        var form = this;

        this.okButton.on(Button.EVENT_CLICK, this.onButtonClickHandler);

        this.cancelButton.on(Button.EVENT_CLICK, function(e: MouseEvent) {
            form.clearValues();

            form.getChildren().get(0).destroy();
        });

        this.checkbox.addChangeListener(function(e: Event) {
            Log.debug("I don't know", e);
        });

        this.firstNameField.addChangeListener(this.firstNameChangeHandler);
        this.lastNameField.addKeyupListener(function(e: KeyboardEvent) {
            Log.debug("Keyup handler", e);
        });
    }
    
    
    /**
     * Mouse event click handler for okButton
     * 
     * @param {MouseEvent} e
     */
    onButtonClickHandler(e: MouseEvent) {
        Log.info("On click the button", this);
    }


    firstNameChangeHandler(e: Event) {
        Log.info("First name changed", e);
    }

  
}