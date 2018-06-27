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
    "revision": "fb0cdcee35c629bb76358de8201e25d4"
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
    "url": "assets/js/13.1df29542.js",
    "revision": "234e9e7c6c40fd78bde0223cb548c1bb"
  },
  {
    "url": "assets/js/14.703e82c9.js",
    "revision": "65376bd673ea425afd4b073a7c2b59bd"
  },
  {
    "url": "assets/js/15.1954b458.js",
    "revision": "5e9bac717b765e08df340968a397c3ab"
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
    "url": "assets/js/19.9b6ef03d.js",
    "revision": "92d554b247149da42fcc9519cb79f4f8"
  },
  {
    "url": "assets/js/2.38cf649b.js",
    "revision": "588e9ce3b0a810bebbc36e3c2e847026"
  },
  {
    "url": "assets/js/20.ab7976fa.js",
    "revision": "de2535eec988c42ad744bc8b4b658ec0"
  },
  {
    "url": "assets/js/21.07287d42.js",
    "revision": "ab4067cb680c156964795c3bd1b8ffe3"
  },
  {
    "url": "assets/js/22.9da53cd6.js",
    "revision": "23019cd6bc38a5adcfc24deedadb576f"
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
    "url": "assets/js/app.f55c9eb3.js",
    "revision": "b3bd7a755cbd9edb5c78a2a66e014c38"
  },
  {
    "url": "config/index.html",
    "revision": "7623fb999a3cfda6448aeb467c4e4585"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "7753c8e7b04668985b8b1a019842114f"
  },
  {
    "url": "guide/advanced.html",
    "revision": "42ebd7d279689c5e74ff642d3c9dcca5"
  },
  {
    "url": "guide/auditing.html",
    "revision": "8daf43f39a5315881f6200ad7cc2c038"
  },
  {
    "url": "guide/digital-assets.html",
    "revision": "1e14942a32d03d6443d24dc5b31ac20b"
  },
  {
    "url": "guide/examples.html",
    "revision": "8408434d9aa90466b68a34d718dfda14"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3fb63415866679e98da1013ad3682e21"
  },
  {
    "url": "guide/index.html",
    "revision": "f41d522fdc400aba9479a1a98d8b8cf3"
  },
  {
    "url": "guide/ownership.html",
    "revision": "9ee3733296a11c112c864bfee406f78c"
  },
  {
    "url": "guide/real-assets.html",
    "revision": "1f67fd0c13c0a61e203a8dd1bad97377"
  },
  {
    "url": "guide/transfer.html",
    "revision": "3ce035704cfdadec1f380dfcbd1e81d4"
  },
  {
    "url": "guide/update.html",
    "revision": "126dc75956f3620c2954519e3cad4157"
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
    "revision": "93780b06255d427416e13e0ce3e2b253"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/config/index.html",
    "revision": "62955a59208ac68ec2a14c2f4cf420ee"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "d2095e13dfc0cbf7c8a45f4eeb9c05f1"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "ac38f73b5202abc12f27358a60fff740"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "efb5944a24f5121acb8c321b2fd7ff7c"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "921e29a545ab00a9148eabac9385b713"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "a5530b8459f2d3a27b66c0134e6687a1"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "8b9a1a8f91ff17d420cda60c0bd260ec"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "dc59881504c1cc7a6bdbf0eba04b58b3"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "6b0975724f6ddef3b39f3e77920493c0"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "06fc5202c6218a1c69b04e87d16ff02a"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "1276c4dc13c29fdba20ecb9076bb724d"
  },
  {
    "url": "zh/index.html",
    "revision": "75fc7d85330838e44dbc6f7a91f7a05b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
