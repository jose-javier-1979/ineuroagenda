const CACHE_NAME = 'ineuroagenda-shell-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './offline.html',
  './icon-192.png',
  './icon-512.png',
  './maskable-icon-512.png',
  './apple-touch-icon.png',
  './favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./offline.html'))
    );
    return;
  }

  if (new URL(request.url).origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
  }
});
