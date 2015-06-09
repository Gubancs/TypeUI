

class UserLabelProvider implements LabelProvider {
    getLabel(user: User): string {
        return user.getFirstName();
    }
}

class UserDataProvider extends ListDataProvider<User> {
    getValue(user: User): string {
        return user.getId();
    }
}

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

    //TODO moved to inherited class
    run() {
        var bodyContainer = new BodyContainer();
        this.onApplicationStart(bodyContainer);

        bodyContainer.render();
    }
    
    /**
     * Start application
     * 
     * @param {Container} bodyContainer
     */
    onApplicationStart(bodyContainer: Container): void {
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

    getDummyUsers(): List<User> {
        var users = new List<User>();

        users.add(new User("1", "Gabor"));
        users.add(new User("2", "Pista"));
        users.add(new User("3", "Péter"));
        users.add(new User("4", "Jolán"));

        users.add(new User("5", "Gabor"));
        users.add(new User("6", "Pista"));
        users.add(new User("7", "Péter"));
        users.add(new User("8", "Jolán"));

        return users;
    }

    getDummyUser(): User {
        var user = new User("12");
        user.setFirstName("Gabor");
        user.setLastName("Kokeny");
        user.setBirthDate(new Date(Date.now()));
        user.setEmail("kokeny19@gmail.com");

        return user;
    }
}

Application.getInstance().run();
