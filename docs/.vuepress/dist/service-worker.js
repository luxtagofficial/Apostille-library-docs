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
    "revision": "79afd47575eab60ab99591472a6c97e8"
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
    "url": "assets/js/10.1df1bc1f.js",
    "revision": "1caf4f2f9b5b96ad0a21042f822779be"
  },
  {
    "url": "assets/js/11.8fb6d107.js",
    "revision": "253a23a62690363533663c21c67ead30"
  },
  {
    "url": "assets/js/12.d1e30c27.js",
    "revision": "40dcd6733cb7300b140a6c8e19625661"
  },
  {
    "url": "assets/js/13.f2fc6e94.js",
    "revision": "0dde2536cd722bd004df73aebed982d9"
  },
  {
    "url": "assets/js/14.703e82c9.js",
    "revision": "65376bd673ea425afd4b073a7c2b59bd"
  },
  {
    "url": "assets/js/15.8ca63a81.js",
    "revision": "48e07483a376e0b4f0ca7055b1a15081"
  },
  {
    "url": "assets/js/16.2168bcf1.js",
    "revision": "c671de95113afc69bc67a0308d70c7b9"
  },
  {
    "url": "assets/js/17.3435a1e2.js",
    "revision": "e11a1b8b5757c252da21d171f9eee2ff"
  },
  {
    "url": "assets/js/18.f9db6e8a.js",
    "revision": "104344de5795b40734a2b29f2b98b2dc"
  },
  {
    "url": "assets/js/19.5f67f677.js",
    "revision": "8093ce2719ef94c91c90ff347823cdb8"
  },
  {
    "url": "assets/js/2.38cf649b.js",
    "revision": "588e9ce3b0a810bebbc36e3c2e847026"
  },
  {
    "url": "assets/js/20.bf30f091.js",
    "revision": "271c9a3d72846c67a8386c82bb77acee"
  },
  {
    "url": "assets/js/21.07287d42.js",
    "revision": "ab4067cb680c156964795c3bd1b8ffe3"
  },
  {
    "url": "assets/js/22.83233cc0.js",
    "revision": "753b8b22a7c46f6e3a58cb700eacdf70"
  },
  {
    "url": "assets/js/23.9ce60653.js",
    "revision": "092f4854a26fbdf57f6edd1b35f10ac1"
  },
  {
    "url": "assets/js/24.1b142b58.js",
    "revision": "f3d0f18b4936bd6e92534af07189f6e0"
  },
  {
    "url": "assets/js/25.7cfef04b.js",
    "revision": "3d284c31e64d0df1c890e6568014266b"
  },
  {
    "url": "assets/js/26.8eada737.js",
    "revision": "731f59d0a6e7bfe6a6ab00f7bb1e6635"
  },
  {
    "url": "assets/js/27.79572f85.js",
    "revision": "a4a82fad576a27fe2a8a5315df562479"
  },
  {
    "url": "assets/js/28.b64b15cb.js",
    "revision": "3f5233fb73681df8dde949740915768d"
  },
  {
    "url": "assets/js/3.0b4c0d23.js",
    "revision": "4afd26cc67e1de5ef6164f920bae6035"
  },
  {
    "url": "assets/js/4.0d94e882.js",
    "revision": "f76266c3b5be5cf2843c92dad758eaed"
  },
  {
    "url": "assets/js/5.325d220d.js",
    "revision": "8793795bad65766c7ca9eefe1c463d4c"
  },
  {
    "url": "assets/js/6.73142dfe.js",
    "revision": "a07d2c76f8e2f9934b557592e7f3e005"
  },
  {
    "url": "assets/js/7.acac3381.js",
    "revision": "1fffd91fbea17117bb2a7b7f047a214b"
  },
  {
    "url": "assets/js/8.d90e2a52.js",
    "revision": "c9c578ab2c3fdb05c168b4dfd9458558"
  },
  {
    "url": "assets/js/9.bdf5c836.js",
    "revision": "0c79dd0391817f9b703a97d232251b99"
  },
  {
    "url": "assets/js/app.2617a583.js",
    "revision": "5c29a0fcb30448d63c569d925a132cec"
  },
  {
    "url": "config/index.html",
    "revision": "a9c01b036ece78cf316052f7fe92a53c"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "e6aa501022d255bc9b75158c6cd1145c"
  },
  {
    "url": "guide/advanced.html",
    "revision": "d3c8c2a16d44c5721ee2baaae2e8cda6"
  },
  {
    "url": "guide/auditing.html",
    "revision": "adb316275940199b11418d267430e138"
  },
  {
    "url": "guide/digital-assets.html",
    "revision": "774fdcc7c4488f3032e4134745322dca"
  },
  {
    "url": "guide/examples.html",
    "revision": "63790aabe4e7269193990f9cb34c5777"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5e4bca401360029a1488966b7d286800"
  },
  {
    "url": "guide/index.html",
    "revision": "c40f3a1b74be617f73180b3597a29638"
  },
  {
    "url": "guide/ownership.html",
    "revision": "dd415e484024afeb1df13e2c05a03ad8"
  },
  {
    "url": "guide/real-assets.html",
    "revision": "17ac64e787e88b78bbc59da1adadddcb"
  },
  {
    "url": "guide/transfer.html",
    "revision": "82cc2ba3c2e935c17752f23ad873106f"
  },
  {
    "url": "guide/update.html",
    "revision": "7496c24b4ae60048f5791d4f1533e746"
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
    "revision": "eb835faca9752b9a879dc002f28afb00"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "6869bcfa508bfdfd87c677f316a23ee5"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "14d6ab17d284900a46249da4caa2fc79"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "b449b2b5155e4d9af34be2ea73ffb246"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "6e945ef41ec1ddcbd5dcb9ceecce97b1"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "d365e897b300eb0e688da95e0628d243"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "daa48f56f3e3c2b4e2778ea6976e609e"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "29f35d40311f997483296ef79d467160"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "f6882407b28a193adc2fab8e1a92395a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c76a61d033aea3cc3dee72b24fb74ba8"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "d3aa386c7f15655c53fe05357ed199c5"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "b7859e27d9298883b6027e7bcc650c13"
  },
  {
    "url": "zh/index.html",
    "revision": "54aabc395e2492546caf7d2b355f5104"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
