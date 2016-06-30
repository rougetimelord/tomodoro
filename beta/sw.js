this.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('v2').then(function (cache) {
          return cache.addAll([
            './about_beta.js',
            './clock_beta.js',
            './index_beta.css',
            '/tomodoro/Content/break.mp3',
            '/tomodoro/Content/work.mp3',
            '/tomodoro/Content/icon.png',
            '/tomodoro/Content/clock.png',
            '/tomodoro/Content/mute.png',
            '/tomodoro/Content/play.png',
            '/tomodoro/Content/pause.png',
            '/tomodoro/Content/mute_hover.png',
            '/tomodoro/Content/play_hover.png',
            '/tomodoro/Content/pause_hover.png',
            '/tomodoro/Content/mute_active.png',
            '/tomodoro/Content/play_active.png',
            '/tomodoro/Content/pause_active.png'
          ]);
      })
    );
});
this.addEventListener('activate', function (event) {
    var cacheWhitelist = ['v2'];
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
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(response) {
        return caches.open('v2').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    });
  );
});
