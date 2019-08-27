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
    "revision": "428c603118c7c03a0520f409abc223b9"
  },
  {
    "url": "apostille.png",
    "revision": "7c674c439c1680cfc380f0b8d7d0949a"
  },
  {
    "url": "assets/css/0.styles.b5daaedf.css",
    "revision": "96de32fd340e28c2e39a1312b9c59b0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ca19c80b.js",
    "revision": "d72b847c2db8b7192f43b033916ffaf4"
  },
  {
    "url": "assets/js/11.a4bb36da.js",
    "revision": "ab25a9eeb9b9f90349801de3eee4e088"
  },
  {
    "url": "assets/js/12.5938e89b.js",
    "revision": "b86c2715123bd2c45e15e7f7af4f8ae2"
  },
  {
    "url": "assets/js/13.4630e04d.js",
    "revision": "03de235cbe6f65e8cfff4c8a6a37f1e2"
  },
  {
    "url": "assets/js/14.627e4926.js",
    "revision": "d8e4dad92c5147ca54bc9a9251341ede"
  },
  {
    "url": "assets/js/15.f34c4e20.js",
    "revision": "f453b842f64acd01c09b5f90f653a1fe"
  },
  {
    "url": "assets/js/16.8ab9acb6.js",
    "revision": "78e4668d9cbe7eb90c0025b2ba688392"
  },
  {
    "url": "assets/js/2.a417569e.js",
    "revision": "c4555eb469a34bc33096ef1cbaa3514a"
  },
  {
    "url": "assets/js/3.c8f54c59.js",
    "revision": "e88938005878d8aa44c66fe87044f142"
  },
  {
    "url": "assets/js/4.0470f2de.js",
    "revision": "770f0343792b2ff22c886878e6e53cda"
  },
  {
    "url": "assets/js/5.1ca3d43d.js",
    "revision": "51f9c10c22100b3d252912cc481ed6eb"
  },
  {
    "url": "assets/js/6.13757f99.js",
    "revision": "2d3b788f4a1823fc1c22b3eb1d4ab049"
  },
  {
    "url": "assets/js/7.e7b4b5a0.js",
    "revision": "a61ac9e0da3aec3a965445090babf01b"
  },
  {
    "url": "assets/js/8.88307289.js",
    "revision": "27bc1b843a3b4417920e09cee5686dc9"
  },
  {
    "url": "assets/js/9.6ff7a91a.js",
    "revision": "05f79a9c8e5df7a468404bce067a6d79"
  },
  {
    "url": "assets/js/app.0bd7e67f.js",
    "revision": "ac6da224cda14906b3d2dbb0da2ab775"
  },
  {
    "url": "guide/advanced.html",
    "revision": "c24c46fffe991371eb7be298719f6fa5"
  },
  {
    "url": "guide/auditing.html",
    "revision": "09dac89e793b50cd45acc768176406a6"
  },
  {
    "url": "guide/deprecated.html",
    "revision": "4baac54af07f315b1511f725d8affd30"
  },
  {
    "url": "guide/digital-assets.html",
    "revision": "a83bc03c81966af0e1360afde5c8a7d2"
  },
  {
    "url": "guide/examples.html",
    "revision": "47c7b72f36ca92eb82128452d328de1e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3d542354179460f794f31db3c89afac1"
  },
  {
    "url": "guide/index.html",
    "revision": "c85df23bfacbc3665839567aef33714d"
  },
  {
    "url": "guide/ownership.html",
    "revision": "39b496b709d285a2e0adcb5426338d96"
  },
  {
    "url": "guide/transfer.html",
    "revision": "2b6a2e393f8bb8e569f0755922af8c4f"
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
    "revision": "16b4bbbc4d74587007c71073f9dd41d5"
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
