declare class UserLabelProvider implements LabelProvider {
    getLabel(user: User): string;
}
declare class UserDataProvider extends ListDataProvider<User> {
    getValue(user: User): string;
}
/**
 * Singleton application
 *
 * @author Gabor Kokeny
 */
declare class Application {
    private static INSTANCE;
    /**
     *
     * Initialize a new application instance with configuration
     * @param conf The configuration object
     */
    constructor();
    /**
      * Create instance if not exist
      *
      * @return The single instance of the apllication
      */
    static getInstance(): Application;
    /**
     * Start the application, and render to the body
     *
     */
    start(): void;
    /**
     *
     * @return Return the version of the application
     */
    getVersion(): string;
    /**
     *
     * @return Return the name of the application
     */
    getName(): string;
    getDummyUsers(): List<User>;
}
