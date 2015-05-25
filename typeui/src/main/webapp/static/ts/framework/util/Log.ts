

class Log {

    static info(message: string, ...params: any[]) {
        console.info(message, params);
    }

    static error(message: string, ...params: any[]) {
        console.error(message, params);
    }

    static warn(message: string, ...params: any[]) {
        console.warn(message, params);
    }

    static debug(message: string, ...params: any[]) {
        console.debug(message, params);
    } 
    
}