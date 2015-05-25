declare class Observable {
    private listeners;
    constructor();
    addListener(eventName: string, listener: EventListener): void;
    removeListeners(eventName: string): boolean;
    purgeListeners(): void;
    getListeners(eventName: any): List<EventListener>;
    getAllListeners(): MultiMap<string, EventListener>;
    protected fireEvent(eventName: string): void;
}
