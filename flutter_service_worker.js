'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "40d377522a537fe0f7e45fa861de85c5",
"/": "40d377522a537fe0f7e45fa861de85c5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/jewelery4.jpg": "72a9b55bd6f14fa5ccb6bfc7abeb421e",
"assets/assets/women's%2520clothing5.jpg": "4e7925a3fc34b1d3c755abdae3785084",
"assets/assets/women's%2520clothing2.jpg": "dfdc17b410a7c7c80974a905fc3cd16b",
"assets/assets/men's%2520clothing6.jpg": "e2e2e51c381f48fd6fbf2762476252ec",
"assets/assets/electronics3.jpg": "5918eb86e3ee22afe1502d468e972d30",
"assets/assets/women's%2520clothing4.jpg": "def3933630b948fe1ed4f4c1dd1dd5c3",
"assets/assets/electronics6.jpg": "ebff19e88130d1f73451c3fd1ec20155",
"assets/assets/women's%2520clothing3.jpg": "7b25c31cf566210b847891f684f6a3b0",
"assets/assets/jewelery1.jpg": "6747ac96062e27b36414240e593d4b7a",
"assets/assets/electronics5.jpg": "84bdf920935fe86925407f972fd9d690",
"assets/assets/men's%2520clothing3.jpg": "fb3caf5c8f28c7d4a5d0c04f9efdd595",
"assets/assets/jewelery3.jpg": "ff4e653ff130893c196880ac5550cf36",
"assets/assets/men's%2520clothing2.jpg": "250207a81c54f41116fae751e87cc7a4",
"assets/assets/men's%2520clothing1.jpg": "6e4368a8962603f8802b386cbfcb227c",
"assets/assets/electronics2.jpg": "36ab7aa392abd849e61e6ea6931070ec",
"assets/assets/men's%2520clothing5.jpg": "7aa312d82815a20279cafe3c9c5468d0",
"assets/assets/women's%2520clothing1.jpg": "83ccb890e2788ffe716c4f6ae5e30547",
"assets/assets/electronics1.jpg": "37704ffb2dc2b95650880ed116adf8ed",
"assets/assets/electronics4.jpg": "7db5bc533f355c3b61bd639a9d5c3ba9",
"assets/assets/jewelery2.jpg": "7cd690b682419b4dfd13cf314f150888",
"assets/NOTICES": "701cf7550e57afb5d9775cd72a1eeec3",
"assets/AssetManifest.json": "a809208a87080468f9c9a7d99fa6cf87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "5662d4fbc6f4ecaba3165a691a9ab97a",
"main.dart.js": "2645eaa01196f423b0cf9dff50031e4a",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "2675b4222a40964fdb6049e4710f8bda",
".git/index": "77749b795470ea7e64d2a9ad4c756a4b",
".git/config": "0b8797d653ba2be14676b640218fe943",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "6d38cea87fcef8553df3e15fdbb24113",
".git/logs/refs/heads/main": "4eb4ed19c5c6dca9bc196fa1320d2738",
".git/logs/refs/remotes/origin/main": "3e2bf7d0f64fbff87ba5e23bb268fcc7",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "41e861cd05d608510798f853e2f97703",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/d3/fddf82bc909a1caf00b090655ab2a16cc6280f": "d2712151c4ded91df1bc4b636a609b05",
".git/objects/d3/46344898459955defe4e93f81cf3c6e58dff10": "4d30ce4dc1219f0d12d7a17fb902a3b0",
".git/objects/60/5ea62ae42b5a2d174341089beb3555bd36d815": "e2b099b58b8d86ac40f41ecd0019376e",
".git/objects/e6/03805ba198da8e5a27f719cab5c4dcb3b936b8": "ed180b72d35c547a8b2dc4972df7501d",
".git/objects/77/f0f0cf7722c57965e0b0fb76fd59490351d6d7": "a7d88bfe04596303b5d3606beb03fd30",
".git/objects/c9/304f9b206ce943e1e5c81a4dbfa75d3aa0a681": "f646a92e20da207d2c5d78d114382311",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/3b/3f61bc45e36bc5c9c04c959a26d31ddb5d268b": "2ae37b3a6931601b8aae3571f79f5260",
".git/objects/b5/83ab3e4eccfc7e9b1c9b2ae9298753a9f32e41": "ca69df4e5e82cf0370edbf7b5bc111df",
".git/objects/50/c8f92d1c6a9fe24f69bab35109a85c2f44111f": "7666359430df6af212db6d103c825bc0",
".git/objects/47/6d1729f2700bb68de7546c8bf36d6b77c99adc": "60d22540b11661bedb512bfa7ab62361",
".git/objects/2e/00046d8409b021bf4dbc5662bb5c9223f3065a": "8cec82708e9a989eb183f8b730026ab5",
".git/objects/2e/b8990ca4cee31c3a9dd2ba22d04d3473374dc7": "9125df739560485b35a5e3774f869df7",
".git/objects/73/846fbeb94583a9de312f639074061bfcadb991": "0ec31b6dd7fc51cc31b1116fc0fa62f9",
".git/objects/30/3267b37bf8a96998ffdef2c328fbfe797e31de": "e6c9c4f5caf634c6b73c7e23070dc7cf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/58/f1ac7b36fe874976cf7a02ce46feb4633477c6": "47fb44a710249cca81c75f814092ecb1",
".git/objects/b7/7bb9ebdcc580bd077ad80da9592b0421ba6568": "adcd8d0bcf38a0a4eeb5c04007814c6c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/87/0fb5b7ea4dc6d9d38d0d97cbf9ec0b279840f3": "b3b3eaca2e312dfad87a7c571a90d300",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/37/b9f62b0ec8ac563775a0bd9b317df1b934eecf": "41eea89dd2f290a9841e383198290db2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/48/c9f8fe4e59e4ce029e0b54976ab4e1ada179b6": "3210e71c8b8907540bb21629b63b14ce",
".git/objects/00/97a25ebad4784d69b98bbc793cd441a72ee30f": "fb99dc198ac77d881b28fc4b3121fc5b",
".git/objects/66/0b46af90aa8969b4e4b11266f3ed1638e27de4": "94a7c52f4dafe6afe6b8e38ea1f5fd9b",
".git/objects/f4/292e3d2adf8afdbb4c96a43e632eea556c394c": "aa30dd829bf53cb18fe1a13ed22727cc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/b95cd0f6504837dfa3f64b8090f474e50d8e0f": "dbed5d404f83d11f89f8fc0edb0afedd",
".git/objects/c4/2705c4942a9ecec4e86c779ef57ddacc6973f0": "0113687b96cee9ef0874389da18a55af",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/21e275d4510f6d42534b9e7e836b0e54b1e1b1": "d5a7d2157474a68db2d3a5e50c0cd58d",
".git/objects/23/fd81f89978c8c4d2692ec5dda12c23dbe54250": "274dbbb213c233d12684ca64d16488f9",
".git/objects/23/110c09b8827be5d4f6e728fde11cd20e2a370d": "8b018366c67f781b8c4eafa27a17b44c",
".git/objects/90/be9b338552d5af1ee3f70e5e6b7f5105ecb929": "bc38bd4084d143db1f162cc918c5bb41",
".git/objects/df/a1d549126a561060be1c9f9812adf837af0f70": "2d4f8ae181f3af44aa149ac71901b9bd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/fc/7252f26d5879adc820c21b4253b7c91084746e": "04d721b7d58244cb8d84d9903336c2e6",
".git/objects/c6/8fdadfab0151869e819f4aa6613951b0fa34fb": "f6f0f5af112cc74ee4eddc75bb4ae904",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/f829b3d12aeb0c96a0ce7065bc35d3a620e6c2": "c72e06b1d63094a81909dd01e3731f2c",
".git/objects/e4/df019c2ae9f52bed75e3cbc295125f086af57d": "9f520a565b002d3bd2e6d81b3381e787",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d7/2ccf3d62c27d4812d323655830c5f491041755": "886b1d8f04b72c57affd9eea9d1c069e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a6/0fb0c5da51232b5aefe1a64eb8412a88e2a788": "be25812db977bd4e089e0e510ed5fcc0",
".git/refs/heads/main": "400034ed2f715cebb2c9662312d3f466",
".git/refs/remotes/origin/main": "400034ed2f715cebb2c9662312d3f466"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
