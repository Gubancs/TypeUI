/**
 * This class implement a player model
 *
 * @author Gabor Kokeny
 */
declare class Player {
    private firstName;
    private lastName;
    private email;
    private blitzRating;
    constructor();
    /**
     * @return Return the firstname of the player
     */
    getFirstName(): string;
    getLastName(): string;
    getEmail(): string;
    getBlitzRating(): number;
}
