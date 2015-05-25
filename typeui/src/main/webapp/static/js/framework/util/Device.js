/**
 * Utility class for determine information of the user agent
 *
 * @author Gabor Kokeny
 */
var Device = (function () {
    function Device() {
    }
    /**
     * Check userAgent
     *
     * @param {RegExp} regexp The regular expression that sould be check
     */
    Device.check = function (regExp) {
        return regExp.test(Device.AGENT);
    };
    /**
     * Check the browser is Opera
     *
     * @return {boolean} Return true if the browser is Opera
     */
    Device.isOpera = function () {
        return Device.opera;
    };
    Device.isChrome = function () {
        return Device.chrome;
    };
    Device.isSafari = function () {
        return Device.safari;
    };
    Device.isIE = function () {
        return Device.ie;
    };
    Device.isWindows = function () {
        return Device.windows;
    };
    Device.isMac = function () {
        return Device.mac;
    };
    Device.isLinux = function () {
        return Device.linux;
    };
    Device.isAdobeAir = function () {
        return Device.adobeair;
    };
    /**
     *
     * The user agent as string
     */
    Device.AGENT = navigator.userAgent.toLowerCase();
    Device.docMode = document.documentMode;
    Device.isStrict = document.compatMode == "CSS1Compat";
    Device.opera = Device.check(/opera/);
    Device.chrome = Device.check(/\bchrome\b/);
    Device.isWebKit = Device.check(/webkit/);
    Device.safari = !Device.chrome && Device.check(/safari/);
    Device.isSafari2 = Device.safari && Device.check(/applewebkit\/4/);
    Device.isSafari3 = Device.safari && Device.check(/version\/3/);
    Device.isSafari4 = Device.safari && Device.check(/version\/4/);
    Device.ie = !Device.isOpera && Device.check(/msie/);
    Device.isIE7 = Device.ie && (Device.check(/msie 7/) || Device.docMode == 7);
    Device.isIE8 = Device.ie && (Device.check(/msie 8/) && Device.docMode != 7);
    Device.isIE9 = Device.ie && Device.check(/msie 9/);
    Device.isIE6 = Device.ie && !Device.isIE7 && !Device.isIE8 && !Device.isIE9;
    Device.isGecko = !Device.isWebKit && Device.check(/gecko/);
    Device.isGecko2 = Device.isGecko && Device.check(/rv:1\.8/);
    Device.isGecko3 = Device.isGecko && Device.check(/rv:1\.9/);
    Device.windows = Device.check(/windows|win32/);
    Device.mac = Device.check(/macintosh|mac os x/);
    Device.adobeair = Device.check(/adobeair/);
    Device.linux = Device.check(/linux/);
    return Device;
})();
//# sourceMappingURL=Device.js.map