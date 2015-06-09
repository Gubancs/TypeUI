

class Log {

    private static console = console;

    static info(message: string, ...params: any[]): Log {
        Log.console.info(message, params);
        return this;
    }

    static error(message: string, ...params: any[]): Log {
        Log.console.error(message, params);
        return this;
    }

    static warn(message: string, ...params: any[]): Log {
        Log.console.warn(message, params);
        return this;
    }

    static debug(message: string, ...params: any[]): Log {
        Log.console.debug(message, params);
        return this;
    }

    static groupStart(title?: string): Log {
        Log.console.groupCollapsed(title);
        return this;
    }

    static groupEnd(): Log {
        console.groupEnd();
        return this;
    }
}