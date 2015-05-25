
/**
 * Singleton application
 * 
 * @author Gabor Kokeny
 */
class Application {

    private static INSTANCE: Application;

    /**
     * 
     * Initialize a new application instance with configuration
     * @param conf The configuration object
     */
    constructor() {
    }

    /**
      * Create instance if not exist
      *
      * @return The single instance of the apllication
      */
    static getInstance(): Application {
        if (Application.INSTANCE) {
            return Application.INSTANCE;
        }

        Application.INSTANCE = new Application();
        return Application.INSTANCE;
    }

    /**
     * Start the application, and render to the body
     * 
     */
    start(): void {
        var toolkit = new FormToolkit();

        var bodyContainer = new BodyContainer();

        var panel = new Panel(bodyContainer);
        panel.setTitle("User registration");
        var userForm = new UserForm(panel.getBody());

        bodyContainer.render();

        Log.info("Application started successfully");
    }

    /**
     * 
     * @return Return the version of the application
     */
    getVersion(): string {
        return "";
    }

    /**
     * 
     * @return Return the name of the application
     */
    getName(): string {
        return "ChessManager";
    }
}

Application.getInstance().start();
