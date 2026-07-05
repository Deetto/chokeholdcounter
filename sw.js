// Minimal service worker: just lets the app be "installable" on phones.
// No offline caching logic needed since the whole app is one self-contained file.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {}); // passthrough, no caching
