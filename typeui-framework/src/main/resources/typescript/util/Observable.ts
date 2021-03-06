

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

    removeListener(eventName: string, listener: EventListener): boolean {
        return this.listeners.removeElement(eventName, listener);
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

    protected fireEvent(eventName: string, ...params: any[]) {
        var listeners = this.listeners.get(eventName);

        if (listeners) {
            var e = document.createEvent("Event");
            listeners.forEach(listener => {
                listener.call(e, params);
            });
        }
    }

}