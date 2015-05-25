/**
 * Utility class for determine information of the user agent
 *
 * @author Gabor Kokeny
 */
declare class Device {
    /**
     *
     * The user agent as string
     */
    static AGENT: string;
    private static docMode;
    private static isStrict;
    private static opera;
    private static chrome;
    private static isWebKit;
    private static safari;
    private static isSafari2;
    private static isSafari3;
    private static isSafari4;
    private static ie;
    private static isIE7;
    private static isIE8;
    private static isIE9;
    private static isIE6;
    private static isGecko;
    private static isGecko2;
    private static isGecko3;
    private static windows;
    private static mac;
    private static adobeair;
    private static linux;
    /**
     * Check userAgent
     *
     * @param {RegExp} regexp The regular expression that sould be check
     */
    private static check(regExp);
    /**
     * Check the browser is Opera
     *
     * @return {boolean} Return true if the browser is Opera
     */
    static isOpera(): boolean;
    static isChrome(): boolean;
    static isSafari(): boolean;
    static isIE(): boolean;
    static isWindows(): boolean;
    static isMac(): boolean;
    static isLinux(): boolean;
    static isAdobeAir(): boolean;
}
