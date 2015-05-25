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
        panel.setTitle("User registration");
        var userForm = new UserForm(panel.getBody());
        bodyContainer.render();
        Log.info("Application started successfully");
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
    return Application;
})();
Application.getInstance().start();
//# sourceMappingURL=App.js.map