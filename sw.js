const CACHE_NAME = "tzolkin-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  // Dodaj vse CSS, JS, slike, ki jih uporablja tvoja aplikacija
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
