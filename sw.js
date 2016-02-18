this.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('v1').then(function (cache) {
          return cache.addAll([
            './about.js',
            './clock.js',
            './index.css',
            './Content/break.mp3',
            './Content/work.mp3',
            './Content/icon.png',
            './Content/clock.png',
            './Content/mute.png',
            './Content/play.png',
            './Content/pause.png',
            './Content/mute_hover.png',
            './Content/play_hover.png',
            './Content/pause_hover.png',
            './Content/mute_active.png',
            './Content/play_active.png',
            './Content/pause_active.png'
          ]);
      })
    );
});
this.addEventListener('activate', function (event) {
    var cacheWhitelist = ['v1'];

    event.waitUntil(
      caches.keys().then(function (keyList) {
          return Promise.all(keyList.map(function (key) {
              if (cacheWhitelist.indexOf(key) === -1) {
                  return caches.delete(key);
              }
          }));
      })
    );
});
this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).catch(function () {
          return fetch(event.request).then(function (response) {
              return caches.open('v1').then(function (cache) {
                  cache.put(event.request, response.clone());
                  return response;
              })
          })
      })
      );
});