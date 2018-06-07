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
    "revision": "826632621b435492b859031b7c4e23a3"
  },
  {
    "url": "assets/css/0.styles.5d803ac2.css",
    "revision": "c5b259f10d39868f7585beab804f58c7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d3c55560.js",
    "revision": "328d6c70157f9555fa1f716a0402f842"
  },
  {
    "url": "assets/js/10.ab590772.js",
    "revision": "9b9097d24c96316c84b68c4e2826ef15"
  },
  {
    "url": "assets/js/11.3aba480b.js",
    "revision": "d287495766c1e5df89276e112591a5dd"
  },
  {
    "url": "assets/js/12.a012dca0.js",
    "revision": "5cc4478664a0e97631fc6c10dbf8637b"
  },
  {
    "url": "assets/js/13.e732783a.js",
    "revision": "f7aa431b3631b482abbe4ac7a56fbbfb"
  },
  {
    "url": "assets/js/14.92fe33b5.js",
    "revision": "6219a8f6e325c23aa0d0db70098e10d3"
  },
  {
    "url": "assets/js/15.fced245e.js",
    "revision": "052c03f162b08545faaffc5a6ba0cea3"
  },
  {
    "url": "assets/js/16.f8f8c611.js",
    "revision": "9eee26e3ea42dc2991fcad5bb965f8a8"
  },
  {
    "url": "assets/js/17.19e41bfe.js",
    "revision": "707ba8a1c09943ce0bf0340ecfe91110"
  },
  {
    "url": "assets/js/18.79c7a4ed.js",
    "revision": "f0a6adb0ad4a6403cf696f325529a910"
  },
  {
    "url": "assets/js/19.6ca20994.js",
    "revision": "824b3b44811c9dd681e88f8faf4db38c"
  },
  {
    "url": "assets/js/2.d3e3185b.js",
    "revision": "2d7aad7ace517d7f9988b50a0e1eb1f4"
  },
  {
    "url": "assets/js/20.a1ea8214.js",
    "revision": "f9a5e79c86d6dcea653b9bc2037e4c80"
  },
  {
    "url": "assets/js/21.e4d6c4cf.js",
    "revision": "f4ccd1b9de80431854b5cf1e38068d93"
  },
  {
    "url": "assets/js/22.d60f7b37.js",
    "revision": "22dae7fe512285cafb360f7192314d1e"
  },
  {
    "url": "assets/js/23.680e6e0a.js",
    "revision": "976008134527b8179130ff99a9a02b26"
  },
  {
    "url": "assets/js/24.abde4c29.js",
    "revision": "7152b8135e2ddad1f1c6511ac84c704d"
  },
  {
    "url": "assets/js/25.c58267ec.js",
    "revision": "e1a0643152b8320938389d1dd066a2a9"
  },
  {
    "url": "assets/js/26.7b97024b.js",
    "revision": "7dbc5a0b09af00f2f2244aa6401d0d6c"
  },
  {
    "url": "assets/js/27.f4cc4e54.js",
    "revision": "603b6a0b726ca0e7cac3de118a6e9247"
  },
  {
    "url": "assets/js/3.a60fb762.js",
    "revision": "9180b41523ddbebb34e2e39387fa3316"
  },
  {
    "url": "assets/js/4.f90b3700.js",
    "revision": "60a66f1c2da9294ee76281efb339b9e6"
  },
  {
    "url": "assets/js/5.ba38f1ce.js",
    "revision": "659c5a205338053795d69d9a805c0301"
  },
  {
    "url": "assets/js/6.13f37f2f.js",
    "revision": "d2d33b9f3ac53875010ca9bcb820ee46"
  },
  {
    "url": "assets/js/7.98c05c21.js",
    "revision": "70fe3d8b7b0b993b525b5d2ea152e220"
  },
  {
    "url": "assets/js/8.93e19264.js",
    "revision": "b19077423fe85ce9b0e98e60da9cd992"
  },
  {
    "url": "assets/js/9.938b0c47.js",
    "revision": "2cbeb8707175a5a8c39ffe087347a56c"
  },
  {
    "url": "assets/js/app.f7ba4a0b.js",
    "revision": "39c243ab914965e6d31c66bc709fc39f"
  },
  {
    "url": "config/index.html",
    "revision": "75dedbc766b53ee3adddc107d104665b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "c9321bbf36d31cb8c067a5ef4fe871a8"
  },
  {
    "url": "guide/assets.html",
    "revision": "e5276bec57e0fc458c460122dfdbcfbb"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "912f2e99f5b0dfa50cc7a27be26c6453"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "0165057f04c21b874708c849dd05bedf"
  },
  {
    "url": "guide/deploy.html",
    "revision": "852b181685bf16d5fdd20ddadc4dcc48"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "48f82a680d6676d7ff585655c8344aad"
  },
  {
    "url": "guide/i18n.html",
    "revision": "ca17e71209dd885503b2cd3ee119575c"
  },
  {
    "url": "guide/index.html",
    "revision": "7e4bcfc4ff63a8d6f0eafbe83dcbe684"
  },
  {
    "url": "guide/markdown.html",
    "revision": "782da4df38b6db5b8ba9cb0ce8a9179f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "b91e2d3b53ec94975ff873ea905c635b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
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
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
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
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "4b18bcd577cbee3897eae14126ba2dc6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "0b7c9cef2ee3c1c0ff805e0a38d78aaa"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "92fe8a720a4d41ec961b47813a87dde0"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "1f0394fdcf24a80c21ac4199e0ae445b"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "e341a8678b2cd0e0cd017d52b4f252c0"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "6fd04e21719d3aaabd89cbca70a0b4bb"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "7f31b7bdb50188ca7e670db1e1bbda5a"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "02fef320fb5b6480c7cfed4a9b0073af"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f7830e55aa6aca7212662a9dc6a3b200"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "864364470db6f67236cc3cb01cd18ea6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "490347e10e37e2d5ac967f6a18b22a9b"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "981ed5761f7fa9145d56dc08327a10d8"
  },
  {
    "url": "zh/index.html",
    "revision": "8c5a00777bd44bc75e59b5a469a79258"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
