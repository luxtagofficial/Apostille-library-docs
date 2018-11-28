/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "31cab4ae2d387fe744a9ec8540e665ca"
  },
  {
    "url": "apostille.png",
    "revision": "7c674c439c1680cfc380f0b8d7d0949a"
  },
  {
    "url": "assets/css/0.styles.235110c7.css",
    "revision": "e56a414375d777ef02034b6d26222b20"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.53b50879.js",
    "revision": "c316ee92df91f29be73e1e87757147c2"
  },
  {
    "url": "assets/js/11.e9059fca.js",
    "revision": "ec81a5e8f00d795a7ce0e34835dba8ec"
  },
  {
    "url": "assets/js/12.310e4280.js",
    "revision": "c300a9987e485650269b5f0cb6483d7a"
  },
  {
    "url": "assets/js/13.2f5a029b.js",
    "revision": "b89da8f2668a62313193e5ec850689db"
  },
  {
    "url": "assets/js/14.47bafcde.js",
    "revision": "1cf4424da12739355402089a60eb3e3a"
  },
  {
    "url": "assets/js/2.68ad3afd.js",
    "revision": "ddb5ece38882ade1f311aba41c807ef1"
  },
  {
    "url": "assets/js/3.b271b118.js",
    "revision": "53b577e12fbb12054d87181eddc9cb03"
  },
  {
    "url": "assets/js/4.53338372.js",
    "revision": "1709c8f863fe2688ab5aa5b4970630b8"
  },
  {
    "url": "assets/js/5.3df8c6ea.js",
    "revision": "193d75a93fc2fc41b1cde6ad8fb57340"
  },
  {
    "url": "assets/js/6.ed1325da.js",
    "revision": "162c45bdce0fc6b6c2063518c80d3bbe"
  },
  {
    "url": "assets/js/7.92a14435.js",
    "revision": "6352f7c9682c89760d9cc0a6dfe3b5bd"
  },
  {
    "url": "assets/js/8.cace2f93.js",
    "revision": "0aadba10f1588c0814aa42ad2b0057a9"
  },
  {
    "url": "assets/js/9.2df77e4e.js",
    "revision": "90d715a3b4144b53dd57acf71e5bc0a9"
  },
  {
    "url": "assets/js/app.203b39cd.js",
    "revision": "e665bf45c3da0a81171bfa9ad45114c0"
  },
  {
    "url": "guide/advanced.html",
    "revision": "85aa2539ebd0f84f6dbfc556a95dcdac"
  },
  {
    "url": "guide/auditing.html",
    "revision": "36b0eeaad2324c60021518f82177378b"
  },
  {
    "url": "guide/deprecated.html",
    "revision": "b532db827faf10122b7f5a2827b47c85"
  },
  {
    "url": "guide/digital-assets.html",
    "revision": "e8e441346c372a3e4c0f75f49d79fb50"
  },
  {
    "url": "guide/examples.html",
    "revision": "e951c7201eb45370d70470eed5ac1463"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "85082f15e24ae24bcb712bb830fb8c70"
  },
  {
    "url": "guide/index.html",
    "revision": "a80c072210de30869732e029fc33d2c8"
  },
  {
    "url": "guide/ownership.html",
    "revision": "b7a89508871f2b62f041a3d3537e2e65"
  },
  {
    "url": "guide/real-assets.html",
    "revision": "ec1335e644587b6a28e41d8696a59d41"
  },
  {
    "url": "guide/transfer.html",
    "revision": "c249fa0053453bb0e9653c78214a932e"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a19bf7a4b009157ecbb5bff596e68eac"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "d6dcf64f5e79068d5974b74d0743d97d"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "83b58f23b71709582e106169bff046f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "af5c42afd09ce3c0a3d0c8a8d5de1369"
  },
  {
    "url": "index.html",
    "revision": "2075665b5041a7a22ff07e493d86e1ac"
  },
  {
    "url": "logo.png",
    "revision": "9d6c92e8e3ed74e708348bb30ec1c210"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
