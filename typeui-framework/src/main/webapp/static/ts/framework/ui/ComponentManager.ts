

/**
 * 
 * @author Gabor Kokeny
 */
class ComponentManager {

    private static components: HashMap<string, Component> = new HashMap<string, Component>();

    static register(component: Component) {
        ComponentManager.components.put(component.getId(), component);
    }
    
    static unregister(component: Component) {
        ComponentManager.components.remove(component.getId());
    }

    static getComponent(componentId: string): Component {
        return ComponentManager.components.get(componentId);
    }

    static getNumberOfComponents(): number {
        return ComponentManager.components.size();
    }
}