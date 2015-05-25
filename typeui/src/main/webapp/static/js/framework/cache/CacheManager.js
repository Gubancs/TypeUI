var CacheManager = (function () {
    function CacheManager() {
    }
    CacheManager.getCache = function (cacheName) {
        var cache = this.caches.get(cacheName);
        if (cache == null)
            Log.error("There is no cache with name " + cacheName);
        return cache;
    };
    CacheManager.addCache = function (cache) {
        CacheManager.caches.put(cache.getName(), cache);
    };
    CacheManager.clearCache = function (cacheName) {
        this.caches.get(cacheName).clear();
    };
    CacheManager.removeCache = function (cacheName) {
        return this.caches.remove(cacheName);
    };
    CacheManager.getCaches = function () {
        return this.caches.values();
    };
    CacheManager.caches = new HashMap();
    return CacheManager;
})();
//# sourceMappingURL=CacheManager.js.map