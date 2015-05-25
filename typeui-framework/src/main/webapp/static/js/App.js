var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UserLabelProvider = (function () {
    function UserLabelProvider() {
    }
    UserLabelProvider.prototype.getLabel = function (user) {
        return user.getName();
    };
    return UserLabelProvider;
})();
var UserDataProvider = (function (_super) {
    __extends(UserDataProvider, _super);
    function UserDataProvider() {
        _super.apply(this, arguments);
    }
    UserDataProvider.prototype.getValue = function (user) {
        return user.getId();
    };
    return UserDataProvider;
})(ListDataProvider);
/**
 * Singleton application
 *
 * @author Gabor Kokeny
 */
var Application = (function () {
    /**
     *
     * Initialize a new application instance with configuration
     * @param conf The configuration object
     */
    function Application() {
    }
    /**
      * Create instance if not exist
      *
      * @return The single instance of the apllication
      */
    Application.getInstance = function () {
        if (Application.INSTANCE) {
            return Application.INSTANCE;
        }
        Application.INSTANCE = new Application();
        return Application.INSTANCE;
    };
    /**
     * Start the application, and render to the body
     *
     */
    Application.prototype.start = function () {
        var toolkit = new FormToolkit();
        var bodyContainer = new BodyContainer();
        var panel = new Panel(bodyContainer);
        panel.setIconClass("fa fa-user");
        panel.setTitle("User registration");
        var userForm = new UserForm(panel.getBody());
        var userGrid = new UserGrid(panel.getBody());
        var dataProvider = new UserDataProvider(this.getDummyUsers());
        userGrid.setDataProvider(dataProvider);
        bodyContainer.render();
        Log.info("Application started successfully");
        userGrid.hide();
    };
    /**
     *
     * @return Return the version of the application
     */
    Application.prototype.getVersion = function () {
        return "";
    };
    /**
     *
     * @return Return the name of the application
     */
    Application.prototype.getName = function () {
        return "ChessManager";
    };
    Application.prototype.getDummyUsers = function () {
        var users = new List();
        users.add(new User("1", "Gabor"));
        users.add(new User("2", "Pista"));
        users.add(new User("3", "Péter"));
        users.add(new User("4", "Jolán"));
        users.add(new User("5", "Gabor"));
        users.add(new User("6", "Pista"));
        users.add(new User("7", "Péter"));
        users.add(new User("8", "Jolán"));
        return users;
    };
    return Application;
})();
Application.getInstance().start();
//# sourceMappingURL=App.js.map