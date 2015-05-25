

class CacheManager {

    private static caches = new HashMap<string, Cache>();

    static getCache(cacheName: string): Cache {
        var cache = this.caches.get(cacheName);

        if (cache == null)
            Log.error("There is no cache with name " + cacheName);

        return cache;
    }

    static addCache(cache: Cache) {
        CacheManager.caches.put(cache.getName(), cache);
    }

    static clearCache(cacheName: string) {
        this.caches.get(cacheName).clear();
    }

    static removeCache(cacheName: string): boolean {
        return this.caches.remove(cacheName);
    }

    static getCaches() {
        return this.caches.values();
    }

}