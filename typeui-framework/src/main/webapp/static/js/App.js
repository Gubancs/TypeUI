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
        return user.getFirstName();
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
    //TODO moved to inherited class
    Application.prototype.run = function () {
        var bodyContainer = new BodyContainer();
        this.onApplicationStart(bodyContainer);
        bodyContainer.render();
    };
    /**
     * Start application
     *
     * @param {Container} bodyContainer
     */
    Application.prototype.onApplicationStart = function (bodyContainer) {
        var tabPanel = new TabPanel(bodyContainer);
        var panel = new Panel(tabPanel);
        panel.setIconClass("fa fa-user");
        panel.setTitle("User registration");
        var panel2 = new Panel(tabPanel);
        panel2.setIconClass("fa fa-calendar");
        panel2.setTitle("Profile");
        var panel2 = new Panel(tabPanel);
        panel2.setIconClass("fa fa-group");
        panel2.setTitle("Roles");
        var userForm = new UserForm(panel.getBody());
        userForm.setModel(this.getDummyUser());
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
    Application.prototype.getDummyUser = function () {
        var user = new User("12");
        user.setFirstName("Gabor");
        user.setLastName("Kokeny");
        user.setBirthDate(new Date(Date.now()));
        user.setEmail("kokeny19@gmail.com");
        return user;
    };
    return Application;
})();
Application.getInstance().run();
//# sourceMappingURL=App.js.map