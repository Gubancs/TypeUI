declare class CacheManager {
    private static caches;
    static getCache(cacheName: string): Cache;
    static addCache(cache: Cache): void;
    static clearCache(cacheName: string): void;
    static removeCache(cacheName: string): boolean;
    static getCaches(): List<Cache>;
}
