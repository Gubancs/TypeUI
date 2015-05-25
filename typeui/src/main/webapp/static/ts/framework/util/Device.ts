
/**
 * Utility class for determine information of the user agent
 * 
 * @author Gabor Kokeny
 */
class Device {

    /**
     * 
     * The user agent as string
     */
    static AGENT: string = navigator.userAgent.toLowerCase();


    private static docMode = document.documentMode;
    private static isStrict = document.compatMode == "CSS1Compat";
    private static opera = Device.check(/opera/);
    private static chrome = Device.check(/\bchrome\b/);
    private static isWebKit = Device.check(/webkit/);
    private static safari = !Device.chrome && Device.check(/safari/);
    private static isSafari2 = Device.safari && Device.check(/applewebkit\/4/);
    private static isSafari3 = Device.safari && Device.check(/version\/3/);
    private static isSafari4 = Device.safari && Device.check(/version\/4/);
    private static ie = !Device.isOpera && Device.check(/msie/);
    private static isIE7 = Device.ie && (Device.check(/msie 7/) || Device.docMode == 7);
    private static isIE8 = Device.ie && (Device.check(/msie 8/) && Device.docMode != 7);
    private static isIE9 = Device.ie && Device.check(/msie 9/);
    private static isIE6 = Device.ie && !Device.isIE7 && !Device.isIE8 && !Device.isIE9;

    private static isGecko = !Device.isWebKit && Device.check(/gecko/);
    private static isGecko2 = Device.isGecko && Device.check(/rv:1\.8/);
    private static isGecko3 = Device.isGecko && Device.check(/rv:1\.9/);


    private static windows = Device.check(/windows|win32/);
    private static mac = Device.check(/macintosh|mac os x/);
    private static adobeair = Device.check(/adobeair/);
    private static linux = Device.check(/linux/);


    /**
     * Check userAgent
     * 
     * @param {RegExp} regexp The regular expression that sould be check
     */
    private static check(regExp: RegExp): boolean {
        return regExp.test(Device.AGENT);
    }


    /**
     * Check the browser is Opera
     * 
     * @return {boolean} Return true if the browser is Opera
     */
    static isOpera(): boolean {
        return Device.opera;
    }

    static isChrome(): boolean {
        return Device.chrome;
    }

    static isSafari(): boolean {
        return Device.safari;
    }

    static isIE() {
        return Device.ie;
    }

    static isWindows() {
        return Device.windows;
    }

    static isMac() {
        return Device.mac;
    }

    static isLinux() {
        return Device.linux;
    }

    static isAdobeAir() {
        return Device.adobeair;
    }
}