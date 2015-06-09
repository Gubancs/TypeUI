var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
/**
 *
 * Example form
 */
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm(parent) {
        _super.call(this, parent);
        this.setLabelWidth(200);
        this.setLabelAlign(1 /* RIGHT */);
        this.setHttpMethod(0 /* GET */);
        this.setAction("");
        this.setValidateOnBlur(true);
    }
    UserForm.prototype.createComponents = function () {
        //        var notification = Notification.success(this);
        //        notification.setMessage("This is an example message");
        //        notification.setTitle("Information");
        //        notification.setClosable(true);
        //        notification.setDelay(3000);
        //First name field
        this.firstNameField = new TextField(this);
        this.firstNameField.setName("firstName");
        this.firstNameField.setPlaceholder("Type your first name");
        this.firstNameField.setFieldLabel("First name");
        //last name field
        //        this.lastNameField = new TextField(this);
        //        this.lastNameField.setName("lastName");
        //        this.lastNameField.setPlaceholder("Type your last name");
        //        this.lastNameField.setFieldLabel("Last name");
        //       
        //last name field
        //        this.dateField = new DateField(this);
        //        this.dateField.setName("birthDate");
        //        this.dateField.setPlaceholder("Select your birth date");
        //        this.dateField.setFieldLabel("Birth date");
        //Gender field
        //        var genderField = new Combobox(this);
        //        genderField.setDataProvider(new EnumDataProvider(Gender));
        //        genderField.setFieldLabel("Gender");
        //        
        //Are you sure?
        //        this.checkbox = new RadioButton(this);
        //        this.checkbox.setText("Yes");
        //        this.checkbox.setName("sure");
        //        this.checkbox.setFieldLabel("Are you sure?");
        //
        //        this.checkbox = new RadioButton(this);
        //        this.checkbox.setText("No");
        //        this.checkbox.setName("sure");
        //Email field
        //        this.emailField = new EmailField(this);
        //        this.emailField.setName("email");
        //        this.emailField.setFieldLabel("Email");
        //        this.emailField.setPlaceholder("Type your email");
        //        this.emailField.setMaxLength(32);
        //Describe yourself
        //        var textArea = new TextArea(this);
        //        textArea.setName("yourself");
        //        textArea.setPlaceholder("What do you think?");
        //        textArea.setFieldLabel("Describe yourself");
        //        textArea.setMaxLength(128);
        //        var progress = new Progressbar(this);
        //        progress.setMaxValue(200);
        //        progress.setValue(80);
        //        
        _super.prototype.createComponents.call(this);
    };
    UserForm.prototype.initButtons = function (buttonBar) {
        //OK button
        this.okButton = new Button(buttonBar);
        this.okButton.setButtonType(1 /* BUTTON */);
        this.okButton.setText("Submit");
        this.okButton.addClass("custom-ok-button");
        this.okButton.setIconClass("fa fa-check");
        this.okButton.setIconAlign(0 /* LEFT */);
        //Cancel button
        this.cancelButton = new Button(buttonBar);
        this.cancelButton.setText("Cancel");
        this.cancelButton.addClass("custom-cancel-button");
    };
    /**
     * Initialize custom event listeners
     */
    UserForm.prototype.initEventListeners = function () {
        _super.prototype.initEventListeners.call(this);
        var form = this;
        this.okButton.on(Button.EVENT_CLICK, function () {
            Log.info("On click the button", form.getValues());
        });
        this.cancelButton.on(Button.EVENT_CLICK, function (e) {
            form.clearValues();
            form.getChildren().get(0).destroy();
        });
        //        this.checkbox.addChangeListener(function(e: Event) {
        //            Log.debug("I don't know", e);
        //        });
        //
        //        this.firstNameField.addChangeListener(this.firstNameChangeHandler);
        //        this.lastNameField.addKeyupListener(function(e: KeyboardEvent) {
        //            Log.debug("Keyup handler", e);
        //        });
    };
    UserForm.prototype.firstNameChangeHandler = function (e) {
        Log.info("First name changed", e);
    };
    return UserForm;
})(Form);
//# sourceMappingURL=UserForm.js.map