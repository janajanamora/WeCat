const CACHE = 'ephone-cache-v1';
const ASSETS = [
  '.',            // index.html
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  // 你想离线的 CSS / JS / 图片…
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
