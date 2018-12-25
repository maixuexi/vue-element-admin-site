(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{218:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("我司项目中通常使用 "),e("a",{attrs:{href:"https://swagger.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("swagger"),e("OutboundLink")],1),t._v(" 由后端来模拟数据。\n"),e("strong",[t._v("swagger")]),t._v(" 是一个 REST APIs 文档生成工具，可以跨平台从代码注释中自动生成，开源，支持大部分语言，社区好，总之非常不错，强烈推荐。\n"),e("a",{attrs:{href:"http://petstore.swagger.io/?_ga=2.222649619.983598878.1509960455-2044209180.1509960455#/pet/addPet",target:"_blank",rel:"noopener noreferrer"}},[t._v("线上 demo"),e("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-admin-template",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-admin-template"),e("OutboundLink")],1),t._v(" 使用的是 "),e("a",{attrs:{href:"https://easy-mock.com/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("easy-mock"),e("OutboundLink")],1),t._v(" 来模拟数据。\n它是一个纯前端可视化，并且能快速生成模拟数据的持久化服务。非常的简单易用还能结合 "),e("code",[t._v("swagger")]),t._v("，支持跨域 ，不管团队还是个人项目都值得一试。")]),t._v(" "),t._m(3),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin"),e("OutboundLink")],1),t._v(" 由于是一个纯前端个人项目，所有的数据都是用 "),e("a",{attrs:{href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("mockjs"),e("OutboundLink")],1),t._v(" 本地生成模拟出来的，它的原理是:拦截了所有的请求并代理到本地模拟数据，所以 network 中没有发出任何的请求。")]),t._v(" "),e("p",[t._v("如需改造本项目，去除 mockjs 也很简单。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("有很多时候我们会遇到本地使用 mock 数据，线上环境使用真实数据。")]),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("你需要保证你本地模拟 api 除了根路径其它的地址是一致的。\n比如：")]),t._v(" "),t._m(8),e("p",[t._v("我们可以通过之后会介绍的"),e("router-link",{attrs:{to:"/zh/guide/essentials/deploy.html#环境变量"}},[t._v("环境变量")]),t._v("来做到不同环境下，请求不同的 api 地址。")],1),t._v(" "),t._m(9),t._m(10),e("p",[t._v("之后根据环境变量创建"),e("code",[t._v("axios")]),t._v("实例，让它具有不同的"),e("code",[t._v("baseURL")]),t._v("。 "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/utils/request.js"),e("OutboundLink")],1)]),t._v(" "),t._m(11),e("p",[t._v("这样我们就做到了自动根据环境变量切换本地和线上 api。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),e("p",[t._v("只有在本地环境之中才会引入 mock 数据。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mock-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Mock Data")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"swagger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swagger","aria-hidden":"true"}},[this._v("#")]),this._v(" Swagger")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"easy-mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#easy-mock","aria-hidden":"true"}},[this._v("#")]),this._v(" Easy-Mock")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mockjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mockjs","aria-hidden":"true"}},[this._v("#")]),this._v(" Mockjs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所有的 mock 数据都在 "),s("code",[this._v("@/src/mock")]),this._v(" 目录下，它只会拦截 "),s("code",[this._v("@/src/mock/index.js")]),this._v(" 文件中拦截的 url。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("移除")]),t._v("只需要在 "),e("code",[t._v("@/src/main.js")]),t._v(" 中移除 "),e("code",[t._v("import './mock'")]),t._v(" 并且删除 "),e("code",[t._v("@/src/mock")]),t._v(" 文件夹即可。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"本地-mock-与线上切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地-mock-与线上切换","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地 Mock 与线上切换")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Easy-Mock 的形式")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("https://api-dev/login   // 本地请求\n\nhttps://api-prod/login  // 线上请求\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//dev.env.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"https://api-dev\"'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注入本地api的根路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//prod.env.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"https://api-prod\"'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注入线上api的根路径")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create an axios instance")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" service "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api 的 base_url")]),t._v("\n  timeout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request timeout")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("Mock.js 的切换")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当我们本地使用 "),s("code",[this._v("Mock.js")]),this._v(" 模拟本地数据，线上使用真实环境 api 方法。这与上面的 easy-mock 的方法是差不多的。我们主要是判断：是线上环境的时候，不引入 mock 数据就可以了，只有在本地引入 "),s("code",[this._v("Mock.js")]),this._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//main.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./mock'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// simulation data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="mock-api.md";s.default=n.exports}}]);