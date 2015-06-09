declare class Log {
    private static console;
    static info(message: string, ...params: any[]): Log;
    static error(message: string, ...params: any[]): Log;
    static warn(message: string, ...params: any[]): Log;
    static debug(message: string, ...params: any[]): Log;
    static groupStart(title?: string): Log;
    static groupEnd(): Log;
}
