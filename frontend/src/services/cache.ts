type CacheEntry<T> = { value: T; expiresAt: number };
const cache = new Map<string, CacheEntry<unknown>>();
export function getCached<T>(key: string) { const entry = cache.get(key); if (!entry || entry.expiresAt < Date.now()) { cache.delete(key); return undefined; } return entry.value as T; }
export function setCached<T>(key: string, value: T, ttl = 60_000) { cache.set(key, { value, expiresAt: Date.now() + ttl }); return value; }
export function clearCache(key?: string) { if (key) cache.delete(key); else cache.clear(); }
