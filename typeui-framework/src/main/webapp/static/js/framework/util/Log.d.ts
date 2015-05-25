declare class Log {
    static info(message: string, ...params: any[]): void;
    static error(message: string, ...params: any[]): void;
    static warn(message: string, ...params: any[]): void;
    static debug(message: string, ...params: any[]): void;
}
