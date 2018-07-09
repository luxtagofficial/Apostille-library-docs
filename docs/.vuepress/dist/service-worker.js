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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce2bbaebed1ecce54f249d32b736b17b"
  },
  {
    "url": "apostille.png",
    "revision": "7c674c439c1680cfc380f0b8d7d0949a"
  },
  {
    "url": "assets/css/0.styles.a34191c1.css",
    "revision": "0c66af5a97ab650cd23d2af705ad4113"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e173bd5c.js",
    "revision": "de237804eb048771292fe7ab3d6c1e2e"
  },
  {
    "url": "assets/js/10.367c30f3.js",
    "revision": "93aceb869f73cccfc2b6416b88481f9e"
  },
  {
    "url": "assets/js/11.b00b11ca.js",
    "revision": "fcc110b0022b4b549348b692ea2d9240"
  },
  {
    "url": "assets/js/12.2123620a.js",
    "revision": "d3a3368905c9c231ac1da13c312401a3"
  },
  {
    "url": "assets/js/13.1a35dd3e.js",
    "revision": "02d0b2d86c911e54736041cf4ce6b751"
  },
  {
    "url": "assets/js/14.703e82c9.js",
    "revision": "65376bd673ea425afd4b073a7c2b59bd"
  },
  {
    "url": "assets/js/15.91b869e8.js",
    "revision": "d66b2e5d3560a7bec0ecd22da531a2b0"
  },
  {
    "url": "assets/js/16.ec208412.js",
    "revision": "41fcc9f0019c504bcfca5f1e00c88d58"
  },
  {
    "url": "assets/js/17.ead544ea.js",
    "revision": "c2b72098a221279b7e0fe89fabba0d6c"
  },
  {
    "url": "assets/js/18.222473ff.js",
    "revision": "03eb6b5274ab6456df9e57337fc071bf"
  },
  {
    "url": "assets/js/19.39326b5b.js",
    "revision": "8ade9ddd17d2effdf25b6606bf4859bc"
  },
  {
    "url": "assets/js/2.2682062f.js",
    "revision": "619db3181444d685fe95c87ded08a06b"
  },
  {
    "url": "assets/js/20.b9fea249.js",
    "revision": "bb8ae049171f804a3c492a01d4d3e607"
  },
  {
    "url": "assets/js/21.67699768.js",
    "revision": "bcf321de73911c41143e7be27797977a"
  },
  {
    "url": "assets/js/22.adfdee63.js",
    "revision": "680b53b324a7ed40813830f5c4f1d888"
  },
  {
    "url": "assets/js/23.27f49340.js",
    "revision": "383c4b41acdd73835cd0f1fc4e209fdc"
  },
  {
    "url": "assets/js/24.3446aa70.js",
    "revision": "d883491f372047a332efb5c926d855a3"
  },
  {
    "url": "assets/js/25.edfdd8e8.js",
    "revision": "badfde95282adf5b8c6f9eafc7255eac"
  },
  {
    "url": "assets/js/26.45c07789.js",
    "revision": "2ad20c762daf096da6c56a5182cf467c"
  },
  {
    "url": "assets/js/3.fbc5fd6e.js",
    "revision": "5d7c60c16fe9e0bfa997840e7a89fe1e"
  },
  {
    "url": "assets/js/4.43a7eaff.js",
    "revision": "dd6ce168d5ade519b85ff8708508c5ae"
  },
  {
    "url": "assets/js/5.9ab3ec59.js",
    "revision": "3f7dae5c8b2c15e4be12f23490a02519"
  },
  {
    "url": "assets/js/6.7e604faf.js",
    "revision": "aee2b7ffb8e11d7215b902ccd57fe9e9"
  },
  {
    "url": "assets/js/7.d2aa9773.js",
    "revision": "d041a81177723373d8f218190498b010"
  },
  {
    "url": "assets/js/8.8555b3ab.js",
    "revision": "9e29dbe7a00fdc5aba7755ee0423aefa"
  },
  {
    "url": "assets/js/9.4128b22e.js",
    "revision": "b73048e866f6d002a47629217a9074a6"
  },
  {
    "url": "assets/js/app.b4976940.js",
    "revision": "08af545d1525e4cf583747b4453d17f7"
  },
  {
    "url": "guide/advanced.html",
    "revision": "914f3579f1d64678a81fa850cd2855bc"
  },
  {
    "url": "guide/auditing.html",
    "revision": "b6904090747acb6da3760e087fcddc6e"
  },
  {
    "url": "guide/digital-assets.html",
    "revision": "90c6a60e59c94c55e1f1e82ac75d4027"
  },
  {
    "url": "guide/examples.html",
    "revision": "cc9adddb8c88a6543ac037ca8f455283"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aedda485f2d528858c64531ca119d2d0"
  },
  {
    "url": "guide/index.html",
    "revision": "c696291a5253aa8d495cf84356c42db9"
  },
  {
    "url": "guide/ownership.html",
    "revision": "1b068ef897fa397f40438ae18df99fe8"
  },
  {
    "url": "guide/real-assets.html",
    "revision": "434a2de55cb87c58929160689d187535"
  },
  {
    "url": "guide/transfer.html",
    "revision": "29f70e6571a83d7b5a7fd8b2501cc36f"
  },
  {
    "url": "guide/update.html",
    "revision": "175f155e390815cd00452e1d82ff4178"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "revision": "bcce2a4e03e2f985d0944a4edee81374"
  },
  {
    "url": "logo.png",
    "revision": "9d6c92e8e3ed74e708348bb30ec1c210"
  },
  {
    "url": "zh/config/index.html",
    "revision": "f9e580ff3f2b1fca60aa8145c3b7f3dd"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "186d38848367a14eb0b7d0befd39281d"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "ce3b6bd332404035f272b42f44b2947d"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "c661b779b8d639946b2dd04db84fa883"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "3f04f0d96dbd1127dd53286690ea0a21"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "c724066aab4056e4bedfe12385d00057"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "cc1d2a158015cfa197803c3d06d9281c"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f9ea64bbfb5700f3e9fc128cae7a20c1"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ad7d51f5c517030547950dc30d985e42"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "81f92abd26ecfdd6218e8a95711e1bc9"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "d6a106443d42a45b1be4342d825afbc6"
  },
  {
    "url": "zh/index.html",
    "revision": "44ac13695d20a8c7aa115289d31fdd78"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
