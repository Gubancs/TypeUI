var User = (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
})();
//# sourceMappingURL=User.js.map