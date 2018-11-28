(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{172:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"updating-ownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-ownership","aria-hidden":"true"}},[t._v("#")]),t._v(" Updating ownership")]),t._v(" "),a("h2",{attrs:{id:"transfer-of-full-ownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-of-full-ownership","aria-hidden":"true"}},[t._v("#")]),t._v(" Transfer of full ownership")]),t._v(" "),a("p",[t._v("Now that we have a 1-1 ownership of an apostille, we can transfer the full rights of an apostille to a new owner.")]),t._v(" "),a("div",{staticClass:"language-JS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apostillePublicKey "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'E4A0080F882BB18E412D6C7D4A5A2FA4245132F5BAA83BAAAEB08923C88C140F'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apostillePublicAccount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" PublicAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createFromPublicKey")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("apostillePublicKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" apostille "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ApostillePublicAccount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("apostillePublicAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myPrivateKey "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'CCFF60EE065DD9EBCC99302D6A065A103D457504CB9108D7C247C6A24AFB0730'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myAccount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Account"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createFromPrivateKey")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myPrivateKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newOwnerPublicKey "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'D8CFE3FC7ECEE0DF051DBB7D05E97B50F53C9057DFF18489E8272FC0EE26F7EF'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newOwnerPublicAccount "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" PublicAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createFromPublicKey")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newOwnerPublicKey"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" quorumDelta "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" minRemovalDelta "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Initiate a transfer of ownership transaction")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transferTransaction "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" apostille"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transfer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newOwnerPublicAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("publicAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quorumDelta"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minRemovalDelta"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// I approve this transaction")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signedTransaction "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" myAccount"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sign")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transferTransaction"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napostilleHttp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("announce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signedTransaction"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reply"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reply"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Note that we use "),a("code",[t._v("ApostillePublicAccount")]),t._v(" not "),a("code",[t._v("Apostille")]),t._v(" here. THis is because after the first assignment of ownership, we do not need the private key for the private apostille HD account.")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("code",[t._v("quorum")]),t._v(" and "),a("code",[t._v("minRemoval")]),t._v(" are deltas, not the actual number, unlike in the Ownership example.")])]),t._v(" "),a("h2",{attrs:{id:"transfer-of-partial-ownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-of-partial-ownership","aria-hidden":"true"}},[t._v("#")]),t._v(" Transfer of partial ownership")]),t._v(" "),a("p",[t._v("It is possible to add or remove owners, however care must be taken when changing the total number of owners.")]),t._v(" "),a("p",[t._v("If the total number of owners remain the same after the update, it is usually safe to keep "),a("code",[t._v("quorumDelta")]),t._v(" and "),a("code",[t._v("minRemovalDelta")]),t._v(" to 0.")])])}],!1,null,null,null);o.options.__file="transfer.md";s.default=o.exports}}]);