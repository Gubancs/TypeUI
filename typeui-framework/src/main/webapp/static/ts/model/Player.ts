
/**
 * This class implement a player model
 * 
 * @author Gabor Kokeny
 */
class Player {

    private firstName: string;

    private lastName: string;

    private email: string;

    private blitzRating: number;


    constructor() {
    }

    /**
     * @return Return the firstname of the player
     */
    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getEmail(): string {
        return this.email;
    }

    getBlitzRating(): number {
        return 0;
    }
}

