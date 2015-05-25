

class User {

    private name: string;

    private id: string;


    constructor(id: string, name?: string) {
        this.id = id;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}