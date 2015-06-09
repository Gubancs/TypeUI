/**
 *
 * @author Gabor Kokeny
 */
declare class ComponentManager {
    private static components;
    static register(component: Component): void;
    static unregister(component: Component): void;
    static getComponent(componentId: string): Component;
    static getNumberOfComponents(): number;
}
