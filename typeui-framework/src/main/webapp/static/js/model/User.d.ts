declare class User {
    private firstName;
    private lastName;
    private birthDate;
    private sure;
    private yourself;
    private email;
    private id;
    constructor(id: string, firstName?: string);
    getId(): string;
    getFirstName(): string;
    setFirstName(firstName: string): void;
    getLastName(): string;
    setLastName(lastName: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getBirthDate(): Date;
    setBirthDate(birthDate: Date): void;
    isSure(): boolean;
    setSure(sure: boolean): void;
    getYourself(): string;
    setYourself(yourself: string): void;
}
