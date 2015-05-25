/**
 * Base class for form elements
 *
 * Sub classes
 *
 * @author Gabor Kokeny
 *
 */
declare class Field extends Component {
    private fieldLabel;
    private fieldWrapper;
    constructor(form: Form, useWrapperContainer?: boolean);
    doRender(htmlElement: HTMLElement): void;
    static getForm(component: Component): Form;
    setFieldLabel(fieldLabel: string): void;
}
