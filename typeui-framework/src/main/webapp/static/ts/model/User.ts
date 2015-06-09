

class User {

    private firstName: string;

    private lastName: string;

    private birthDate: Date;

    private sure: boolean;

    private yourself: string;

    private email: string;

    private id: string;


    constructor(id: string, firstName?: string) {
        this.id = id;
        this.firstName = firstName;
    }

    getId(): string {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }


    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getBirthDate(): Date {
        return this.birthDate;
    }

    setBirthDate(birthDate: Date) {
        this.birthDate = birthDate;
    }

    isSure(): boolean {
        return this.sure;
    }

    setSure(sure: boolean) {
        this.sure = sure;
    }

    getYourself(): string {
        return this.yourself;
    }

    setYourself(yourself: string) {
        this.yourself = yourself;
    }
}