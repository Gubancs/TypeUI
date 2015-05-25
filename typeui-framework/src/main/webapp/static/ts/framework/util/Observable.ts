

class Observable {

    private listeners: MultiMap<string, EventListener>;

    constructor() {
        this.listeners = new MultiMap<string, EventListener>();
    }

    addListener(eventName: string, listener: EventListener) {
        this.listeners.put(eventName, listener);
    }

    removeListeners(eventName: string): boolean {
        return this.listeners.remove(eventName);
    }

    purgeListeners() {
        this.listeners.clear();
    }

    getListeners(eventName): List<EventListener> {
        return this.listeners.get(eventName);
    }

    getAllListeners(): MultiMap<string, EventListener> {
        return this.listeners;
    }

    protected fireEvent(eventName: string) {
        var listeners = this.listeners.get(eventName);
        listeners.forEach(listener => {
            listener.call(new Event());
        });
    }

}