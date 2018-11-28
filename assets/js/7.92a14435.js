(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{179:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Whether it's for creating, updating owning or transfering an ownership of an apostille all of these actions are in fact transactions that will be recorded on the blockchain and every transaction needs an initiator.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The initiator can either be a normal account or a "),s("a",{attrs:{href:"https://nemtech.github.io/concepts/multisig-account.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("multisigniture account"),s("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("For a multisig account we need to provide the multisg public account and one of the cosignatories as an inititor of the transaction and we can also feed as many cosignatories as we want to sign the "),s("a",{attrs:{href:"https://nemtech.github.io/concepts/aggregate-transaction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggregate transaction"),s("OutboundLink")],1),t._v(" made by the first account.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("For a 1-n multisig we just provide one cosignatry which will be the only account needed to create an "),s("a",{attrs:{href:"https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-complete",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggregate complete"),s("OutboundLink")],1)]),t._v(" "),t._m(9),s("p",[t._v("Note the last boolean argument is there to determine if the aggregate transaction from the multisig is complete or bonded this argument is compulsory the moment you provide a multisig account.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("While the 1-n relationship alwayse produces an aggregate complete transaction an m-n depends on how many cosignatory accounts do we have to initilize our initiator.")]),t._v(" "),s("p",[t._v("And as one would expect you can feed as many cosignatory account as you want to the initiator constructor.")]),t._v(" "),t._m(12),s("p",[t._v("As we see in the example above we have created other cosignatories accounts that can cosign the transaction the first account and we feed it as an array of accounts to the initiator constructor, notice also that the "),s("code",[t._v("isComplete")]),t._v(" parameter set to "),s("code",[t._v("false")]),t._v(" which means the initiator will only create an "),s("a",{attrs:{href:"https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded",target:"_blank",rel:"noopener noreferrer"}},[t._v("aggregate bonded"),s("OutboundLink")],1),t._v(" transaction and that more cosignatories will have to eventually sign the transaction once announced to the network.")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"deprecated-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Deprecated functions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"version-1-0-0-6-1-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-1-0-0-6-1-6","aria-hidden":"true"}},[this._v("#")]),this._v(" Version 1.0.0 ~ 6.1.6")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"initiator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initiator","aria-hidden":"true"}},[this._v("#")]),this._v(" Initiator")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The  "),a("code",[this._v("Initiator")]),this._v(" class in "),a("code",[this._v("apostille-library")]),this._v(" is used to define the initiator of the transaction.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"normal-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normal-account","aria-hidden":"true"}},[this._v("#")]),this._v(" Normal Account")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'nem2-sdk'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Initiator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'apostille-library'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// a funny but valid private key")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pk "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'aaaaaaaaaaeeeeeeeeeebbbbbbbbbb5555555555dddddddddd1111111111aaee'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myAccount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPrivateKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pk"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initiator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Initiator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myAccount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"multisignature-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multisignature-account","aria-hidden":"true"}},[this._v("#")]),this._v(" Multisignature Account")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("Definition of a multisig account")]),this._v(" "),a("p",[this._v("A m-n multisig account as an account that has n cosignitories and requires minimum m accounts to sign.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",{attrs:{id:"_1-n-multisig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-n-multisig","aria-hidden":"true"}},[this._v("#")]),this._v(" 1-n Multisig")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'nem2-sdk'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Initiator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'apostille-library'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// the account that will initiate the transaction")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cosignatoryPrivateKey "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("COSIGNATORY_0_PRIVATE_KEY")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPrivateKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cosignatoryPrivateKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// the multisig account that transaction will be initiated from")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multisigPublicKey "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'7D08373CFFE4154E129E04F0827E5F3D6907587E348757B0F87D2F839BF88246'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multAccount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" PublicAccount"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPublicKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("multisigPublicKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initiator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Initiator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("account"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" multAccount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("for a 1-n relationship the initiator should always create an aggregate complete .")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h5",{attrs:{id:"m-n-multisig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-n-multisig","aria-hidden":"true"}},[this._v("#")]),this._v(" m-n Multisig")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'nem2-sdk'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Initiator "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'apostille-library'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// the account that will initiate the transaction")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cosignatory0PrivateKey "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("COSIGNATORY_0_PRIVATE_KEY")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" account "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPrivateKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cosignatory0PrivateKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// the multisig account that transaction will be initiated from")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multisigPublicKey "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'202B3861F34F6141E120742A64BC787D6EBC59C9EFB996F4856AA9CBEE11CD31'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" multAccount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" PublicAccount"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPublicKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("multisigPublicKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// other cosignatories that will cosign the transaction created by the first cosignatory")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cosignatory2PrivateKey "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("COSIGNATORY_1_PRIVATE_KEY")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cosignatory1 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPrivateKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cosignatory1PrivateKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cosignatory2PrivateKey "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("COSIGNATORY_2_PRIVATE_KEY")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("string")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cosignatory2 "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Account"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createFromPrivateKey")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cosignatory2PrivateKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initiator "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Initiator")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("account"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NetworkType"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("MIJIN_TEST")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" multAccount"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cosignatory1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cosignatory2"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="deprecated.md";a.default=e.exports}}]);