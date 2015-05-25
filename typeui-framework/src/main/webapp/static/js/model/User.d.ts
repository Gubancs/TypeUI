declare class User {
    private name;
    private id;
    constructor(id: string, name?: string);
    getId(): string;
    setName(name: string): void;
    getName(): string;
}
