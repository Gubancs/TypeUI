

/**
 * Base class for form elements
 * 
 * Sub classes
 * 
 * @author Gabor Kokeny
 * 
 */
class Field extends Component {

    private fieldLabel: Label;

    private fieldWrapper: Container;

    constructor(form: Form, useWrapperContainer?: boolean) {
        super(form, useWrapperContainer);

        var c = useWrapperContainer ? this.getContainer() : this;

        this.fieldWrapper = new Container(form);
        this.fieldWrapper.addClass("ui-formfield");
        this.fieldLabel = new Label(this.fieldWrapper);
        c.setParent(this.fieldWrapper);

        this.fieldLabel.setHtmlFor(this);
    }

    doRender(htmlElement: HTMLElement) {
        super.doRender(htmlElement);

        CssHelper.setWidth(this.fieldLabel.getElement(), Field.getForm(this.getContainer()).getLabelWidth());
    }


    static getForm(component: Component): Form {
        if (component instanceof Form) {
            return <Form>component;
        }
        return this.getForm(component.getContainer());
    }

    setFieldLabel(fieldLabel: string) {
        this.fieldLabel.setText(fieldLabel);
    }
}