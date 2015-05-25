/**
 * This class implement a player model
 *
 * @author Gabor Kokeny
 */
var Player = (function () {
    function Player() {
    }
    /**
     * @return Return the firstname of the player
     */
    Player.prototype.getFirstName = function () {
        return this.firstName;
    };
    Player.prototype.getLastName = function () {
        return this.lastName;
    };
    Player.prototype.getEmail = function () {
        return this.email;
    };
    Player.prototype.getBlitzRating = function () {
        return 0;
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map