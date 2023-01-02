self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(
                [
                    "index.html", 
                    "./src/index.js",
                    "./src/style.css",
                    "images/generator.png",
                    "images/killer.png",
                    "./src/counter.js"
                ])
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});