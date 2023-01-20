'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/car/grsupra/grsupra.bin": "ad1c548b5e8412c9784db78252e594b2",
"assets/asset/car/grsupra/grsupra.gltf": "99ae8c9577ac2933c4548a3f65e372a4",
"assets/asset/car/grsupra/Interior.png": "10ae309b6fea9b5776d596ef9b3f01d5",
"assets/asset/car/grsupra/Stitches.png": "41a99f52619228d1d5d89abba1ec8334",
"assets/asset/car/innova/Image-1.png": "23cad634e30ee625adb94d8adbc0ab0a",
"assets/asset/car/innova/Image.png": "a9726ba5c1917639144c877625fd9b5b",
"assets/asset/car/innova/innova.gltf": "39f3989067ac43c887abce588a103e96",
"assets/asset/car/innova/koshthread.png": "f06a956781efee0af1b9746e981e6b1d",
"assets/asset/car/innova/koshthread_nrm.png": "c99200d6c355eeb2df697698c8f6a753",
"assets/asset/car/innova/koshwall.png": "67d147b0f2be35284fb5b4f19d6ffb22",
"assets/asset/car/innova/koshwall_nrm.png": "ba88bc261734679329d25e26adcf6306",
"assets/asset/car/innova/tugas.bin": "43b00cb2ecdcc819925dea6beb1840ff",
"assets/asset/car/rwb/barracks92mesh16.png": "c419d3600979c624718c89fb985f679f",
"assets/asset/car/rwb/belt.png": "2d61b5c6540a0c089a52190b610ce383",
"assets/asset/car/rwb/comet_lights.png": "ad1963b27a76ba731c7c4162a0a81d90",
"assets/asset/car/rwb/exhaust.png": "bcf0ce8b6d1e3fb4b23e52a8a6a0d664",
"assets/asset/car/rwb/generic_leather.png": "01058dc208a99580edcb52d62c59bcb8",
"assets/asset/car/rwb/lights_lod0.png": "290edc238d63a09761b2677ea21697dd",
"assets/asset/car/rwb/mirror.png": "7553fabe0a4b3adf36245947fdb9ac25",
"assets/asset/car/rwb/por_rsr74_interior_diffuse.png": "3506ccc2c86d0e6b516a584cb1d71227",
"assets/asset/car/rwb/rwb.bin": "7b214112fd32e42fd99d4ad998016079",
"assets/asset/car/rwb/rwb.gltf": "6a62aa76e382d50dd46c538066d5b4fe",
"assets/asset/car/rwb/rwb_alpha.png": "8b121e19c0cec89dce0844519be574ec",
"assets/asset/car/rwb/smod_racedetail_d.png": "aac1f747778180acda68dc5ac706c41a",
"assets/asset/car/rwb/symbols.png": "936b192510270a58a96a5a6e37b9810f",
"assets/asset/car/rwb/tex_1157_2.png": "b6c54ddb5f903e46589bb7d36094ae59",
"assets/asset/car/rwb/tyre.png": "8cfafd8685aec6e883450ff21838f596",
"assets/asset/car/rwb/tyrewallblack3.png": "9c3b808f2716a252460470d267da5de2",
"assets/asset/car/rwb/vehiclelights.png": "4f0741b72d677e7d27a2df2472b1f99c",
"assets/asset/car/rwb/vehiclelights128.png": "260dd6d0da803c128a4a55e13550fa80",
"assets/asset/car/rwb/vehicle_generic_detail2.png": "9243667ae5b2d82c9860814a03c820b2",
"assets/asset/car/rwb/vehicle_generic_doorshut.png": "101303155567574c24ef9bc3c7e6b8ca",
"assets/asset/drop_down.png": "02825c64da0b622ca3533f2f42f3d9da",
"assets/asset/star.png": "c73a344944e0049e59dc315416431b69",
"assets/AssetManifest.json": "96b9e28c8aa4e5c07d72e7de93d3bbb5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9905c02f0070948f9ea3024073f0c463",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "79b9221b7a939ac5947f268211ac048e",
"/": "79b9221b7a939ac5947f268211ac048e",
"main.dart.js": "150ec9e445ced25ec9e9226512ad6434",
"manifest.json": "4515a419b098e49e7afc1a1e31dea084",
"version.json": "342488255cdef9f968a284a644564171"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
