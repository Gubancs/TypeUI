

/**
 * This is a static Logger class, it is allows you to disable the client side 
 * application logging at runtime.
 * Set the DEBUG property false (default value is true) to disable the client side logging.
 * 
 * 
 * @author Gabor Kokeny
 */
class Log {

    static DEBUG: boolean = true;

    /**
     * 
     * @param {string} message The log message
     * @param {any[]} The optionals parameters 
     * 
     * @return Return the reference of Log variable
     */
    static info(message: string, ...params: any[]): Log {
        if (!Log.DEBUG) { return; }

        if (console) {
            console.info(message, params);

        }
        return this;
    }

    static error(message: string, ...params: any[]): Log {
        if (!Log.DEBUG) { return; }
        if (console) {
            console.error(message, params);
        }
        return this;
    }

    static warn(message: string, ...params: any[]): Log {
        if (!Log.DEBUG) { return; }

        if (console) {
            console.warn(message, params);
        }
        return this;
    }

    static debug(message: string, ...params: any[]): Log {
        if (!Log.DEBUG) { return; }
        if (console) {
            console.debug(message, params);
        }
        return this;
    }

    static groupStart(title?: string): Log {
        if (!Log.DEBUG) { return; }
        if (console) {
            console.groupCollapsed(title);
        }
        return this;
    }

    static groupEnd(): Log {
        if (!Log.DEBUG) { return; }
        if (console) {
            console.groupEnd();
        }
        return this;
    }
}