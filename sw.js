const CACHE_NAME = "english-island-v4";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./game-core.js",
  "./levels.js",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./audio/level-1-find-cat.mp3",
  "./audio/level-2-red-key.mp3",
  "./audio/level-3-dog-boat.mp3",
  "./audio/level-4-sound-s.mp3",
  "./audio/level-5-build-cat.mp3",
  "./audio/level-6-see-fish.mp3",
  "./audio/level-7-see-cat.mp3",
  "./audio/boss-1-red-key.mp3",
  "./audio/boss-2-dog.mp3",
  "./audio/boss-3-build-cat.mp3",
  "./audio/boss-4-open-door.mp3",
  "./audio/word-dog.mp3",
  "./audio/word-bird.mp3",
  "./audio/word-fish.mp3",
  "./audio/letter-c.mp3",
  "./audio/letter-a.mp3",
  "./audio/letter-t.mp3",
  "./audio/nori-preview.mp3",
  "./audio/school-good-morning.mp3",
  "./audio/school-may-i-come-in.mp3",
  "./audio/school-need-help.mp3",
  "./audio/school-my-book.mp3",
  "./audio/school-bathroom.mp3",
  "./audio/school-friends.mp3",
  "./audio/school-boss-find-book.mp3",
  "./audio/school-thank-you.mp3",
  "./audio/life-milk.mp3",
  "./audio/life-shoes.mp3",
  "./audio/life-red-light.mp3",
  "./audio/life-pencil.mp3",
  "./audio/life-water.mp3",
  "./audio/life-nervous.mp3",
  "./audio/life-play-with-you.mp3",
  "./audio/life-happy.mp3",
  "./audio/life-see-you.mp3",
  "./audio/idiom-focus.mp3",
  "./audio/idiom-order.mp3",
  "./audio/idiom-help.mp3",
  "./audio/idiom-dragon.mp3",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    }),
  );
});
