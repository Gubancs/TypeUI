var User = (function () {
    function User(id, firstName) {
        this.id = id;
        this.firstName = firstName;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    User.prototype.setBirthDate = function (birthDate) {
        this.birthDate = birthDate;
    };
    User.prototype.isSure = function () {
        return this.sure;
    };
    User.prototype.setSure = function (sure) {
        this.sure = sure;
    };
    User.prototype.getYourself = function () {
        return this.yourself;
    };
    User.prototype.setYourself = function (yourself) {
        this.yourself = yourself;
    };
    return User;
})();
//# sourceMappingURL=User.js.map