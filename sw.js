"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var precacheConfig=[["/2019/07/14/js简易轮播图/index.html","794b33c23d8b43e6a48ce0ad88063e57"],["/2019/12/14/js三大家族/index.html","7377572db41024f20588c9d12fac3abb"],["/2020/03/03/去重算法/index.html","352677395bc5b95ad969204897f01806"],["/2020/03/14/浅谈前端模块化/index.html","37ef4355abd330398503c865d1b8a22e"],["/2020/03/18/Vuex使用详解/index.html","ad3f452ab9da6b6ca3ba8c3d38df85eb"],["/2020/03/19/vue中路由跳转view却不更新的问题与解决办法/index.html","59adc7537c13fbc92ff84eee4bd6b8da"],["/2020/04/02/MySql/index.html","ae24bf42f4f1c4db301273bee4cbf4d3"],["/2020/04/09/浅谈TypeScript/index.html","93e0f317a8b73afbe53c158d001bbda1"],["/2020/05/09/Express服务器的搭建/index.html","801bebbd803fce66fc4ea7c77a6e225b"],["/2020/07/14/ES6新特性/index.html","a398ec8f62a6c066d7ad8f7574b46331"],["/2020/08/21/深度优先与广度优先遍历DOM-递归与非递归/index.html","8a8a35cadf9ef7b93ed57c74565f8b37"],["/404.html","b2520293d2305931f15ac4e13a0e086b"],["/archives/2019/07/index.html","b6e5c646c68a5a9eff990881bff2fa93"],["/archives/2019/12/index.html","4f02ed2bcc919740668fba9b655e2a45"],["/archives/2019/index.html","7cbd22542cef6283b3ca8ef8a6c13d78"],["/archives/2020/03/index.html","70517fbe033d3f7d3fe394474a737fa8"],["/archives/2020/04/index.html","5b27c9409df45ad7e962ecd5c380c058"],["/archives/2020/05/index.html","c8ae6c66be783498fc30354d9a3300cd"],["/archives/2020/07/index.html","4506ff01cff75626d2fd10edec7c7a1c"],["/archives/2020/08/index.html","f48acf8245f6c715040139700cd7d2b9"],["/archives/2020/index.html","ed780433dbdfd7a27d34b1cc33221950"],["/archives/index.html","97e23ec108b9529cf2de381d3d2289ad"],["/archives/page/2/index.html","cb8d8ba5a558afe931d1519292acbafc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-Zd2SGcHG1R.html","4c5a79737a8a41238bbad09babb6e7cb"],["/baidusitemap.xml","08d5ba278359139dd4d7ecc96f22217d"],["/categories/Mysql/index.html","1176ce125e15b5017aa8f0472ba068aa"],["/categories/Vue全家桶/index.html","beb544e605f567c6669f4418b34f0fd4"],["/categories/index.html","39cc092988a5557a27a16e0f8d4333ef"],["/categories/前端基础/index.html","18fcb06309b57bd0f42b3226128d9669"],["/categories/前端进阶/index.html","500bf237d94a557b9e047da8cbec52b1"],["/categories/服务器/index.html","c8b37f9e1fb8cb5e4c77fa5d81f13e2b"],["/css/background.css","e8402374259d2fba85a50b68b2532b52"],["/css/caidai.css","00822c54723e9624a41d6de426f0f83c"],["/css/custom.css","1b34a2186f1902ecc33db987ba20bdc3"],["/css/index.css","df020b82261e58e024db8bedbb9879b7"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/animation/index.html","60790a38dc37a697b629d3e5010e77f5"],["/gallery/index.html","a76714ff9df689656b5ea4b6e8c1075a"],["/gallery/marvel/index.html","25335e0b68ffa0aad3cdc1aff78e4edf"],["/gallery/people/index.html","e489f98b887eaa9b33cb646d951d460c"],["/gallery/wallpaper/index.html","c9c5b7990b36469d3b0b7e1cd96fd441"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Tx2.gif","a4857af68cb2dcdbe9eec86c7315468c"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.webp","f05e27262698fed0167c0638adde884e"],["/img/bilibili.webp","47d401527a77e0db1e2e287353601282"],["/img/caidai.gif","cda79d215d320c4d3694c294a7f6e237"],["/img/category.jpg","4b3a55903c051d87202af08bdefd2ca4"],["/img/cover3.webp","3f5f7895672f6d350e50deb345c49ea9"],["/img/cover4.webp","cd50c5def782c9b993b086fecbb98e0e"],["/img/dt.gif","f871b8e875cb3670bfd27c5b6f4e788e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/homebg3.webp","dc3bfb84045ffcf58563196c2f4c0e31"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/movie.webp","f52db174dfdf49964b8d4d521850dd2a"],["/img/pwa/16.png","e3d0a6b65920c109da97b89b8ec516e0"],["/img/pwa/32.png","5f4c34c1936bd8e57c201d67d87d9f1a"],["/img/siteicon/README.html","e99d496757cb3966cd939836f8356c22"],["/img/siteicon/android-chrome-144x144.png","01b6ec74550139798326f5b625904dbe"],["/img/siteicon/android-chrome-192x192.png","b8bf11a8f67abe91ebb64bf94993e9ba"],["/img/siteicon/android-chrome-256x256.png","f604860655834f63e6f431dd614a39b4"],["/img/siteicon/android-chrome-36x36.png","a357e80b6efcd714105bf2db49e35e42"],["/img/siteicon/android-chrome-384x384.png","f66ab4d94d04e0afff3a266fba095ab2"],["/img/siteicon/android-chrome-48x48.png","ffc7f86cd6819d06e88e8f02e686ad0e"],["/img/siteicon/android-chrome-512x512.png","91d27164a7698579d20a1f3d4569e440"],["/img/siteicon/android-chrome-72x72.png","b98be0fd003783b4779e23f0a39414bc"],["/img/siteicon/android-chrome-96x96.png","6bfb02b330a447eadde634115f12e780"],["/img/siteicon/apple-touch-icon.png","7d105f92e04cbbca9f1d410125197509"],["/img/siteicon/browserconfig.xml","8b2e51dd5dc52a633e547603d36530ae"],["/img/siteicon/favicon-16x16.png","21396d590b717e56fc152a125901676f"],["/img/siteicon/favicon-32x32.png","32e2e12eb9ddfac9b72b91e899fdef13"],["/img/siteicon/mstile-150x150.png","b6ae27a985c762fdcacf65761895c38c"],["/img/siteicon/safari-pinned-tab.svg","058aa74db13039c370c46a01bdf7bafc"],["/img/weblogo.webp","2c36bf46f940d855b9e90fe7e3fff9f1"],["/img/wechat.webp","eaadac991958c8af19b726ffcff96d0b"],["/index.html","7f52a77b4466add4a13cfbe284d63d67"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/wow_init.js","daac6f9f27819b87a44a849dbd301ff9"],["/link/index.html","69add53c8d7ad647d38339d68ae7017a"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","917a5883cff183f13724c8f8b8cb4e8d"],["/page/2/index.html","b23436119d29d8233f2fc305090e4fa9"],["/service-worker.js","bd99607ff6bc08f0fc712fa2f323ef1e"],["/sw-register.js","2133822e977eb31c4b8c1220997e93e2"],["/tags/Const/index.html","479e6f514028515f6833cc5def5167da"],["/tags/Dom遍历/index.html","9ed74b153168e4dfa6383de9d1c9a2d2"],["/tags/ES6/index.html","4f5a0cb5125f25f928f15f728df6ccff"],["/tags/Express/index.html","5fad33a48cc925ff3944913136d53bc2"],["/tags/Let/index.html","57757927562c57ec309c06dc4705219d"],["/tags/Mysql/index.html","bafc64b8d67ed23172d487d2258d1351"],["/tags/TS/index.html","534fa654ac65538572a3fcb92fbfa25c"],["/tags/Vue/index.html","8d227ab32e306e2b3a8f79148b94e56b"],["/tags/client/index.html","b69f563a4ee78f08b42a8da44c21800f"],["/tags/commonJS/index.html","665fa34de349b2dd0cf38a0eacaa96aa"],["/tags/index.html","f4e7eac8abae49e80ad6363b03397441"],["/tags/js/index.html","3aa2200fc7e57f9c5e9df364ef63ae11"],["/tags/offset/index.html","01dc76e9f52648c754a9dbc0d6fc6d4e"],["/tags/scroll/index.html","42ca52688ac3acb1bc1b72a1576d26d4"],["/tags/vue-router/index.html","50e85f208c1c7724a3691dd5b6c8c52e"],["/tags/vuex/index.html","af89269b31a8ba93d9e0510b32244921"],["/tags/代码规范/index.html","04c6e522d2009261f6d8ea00d29fcbfc"],["/tags/后台/index.html","69f6483ae18660117d5136ddd026e5e8"],["/tags/广度优先/index.html","d7ecb6ccc88981846ff47856116f093a"],["/tags/数据库/index.html","80b16b30d29561fccecc433af379e4e4"],["/tags/数组/index.html","00a0845df39a35c0045aa5efd7a6d7d7"],["/tags/数组去重/index.html","f3c6350540a19c4a2b16db3b23753fab"],["/tags/服务器/index.html","92465603811d14787ef1a65934c8e583"],["/tags/模块化/index.html","6a561978e79d6b366bb3f025f5a9f938"],["/tags/深度优先/index.html","b8fa37b1cd021f5a6f87b30dc3d2da9e"],["/tags/路由/index.html","bfbeb46e796474346e76a5feef46c251"],["/tags/轮播图/index.html","fc9122865fee78f6adb78d30b2762282"],["/tags/遍历数组/index.html","52081a05e72e9c24bf6589aaf03ddf85"],["/workbox-cf684d81.js","92fc6f2ceb6fc371be5a29de298091c4"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){e=new URL(e);return r&&e.pathname.match(r)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,!1);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e&&0<e.length&&(firstRegister=0),e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}).then(function(){if(!firstRegister)return self.clients.matchAll().then(function(e){e&&e.length&&e.forEach(function(e){e.postMessage("sw.update")})})}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)})))}),function(e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}(function(){return function r(a,c,i){function o(n,e){if(!c[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(s)return s(n,!0);t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t=c[n]={exports:{}};a[n][0].call(t.exports,function(e){var t=a[n][1][e];return o(t||e)},t,t.exports,r,a,c,i)}return c[n].exports}for(var s="function"==typeof require&&require,e=0;e<i.length;e++)o(i[e]);return o}({1:[function(e,t,n){function o(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var t=(t=e&&e.cache?e.cache.name:t)||i.cache.name;return caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,i=e("./options"),s=e("./idb-cache-expiration");t.exports={debug:o,fetchAndCache:function(n,r){var t=(r=r||{}).successResponses||i.successResponses;return fetch(n.clone()).then(function(e){return"GET"===n.method&&t.test(e.status)&&a(r).then(function(t){t.put(n,e).then(function(){var e=r.cache||i.cache;(e.maxEntries||e.maxAgeSeconds)&&e.name&&function(e,t,n){n=function(e,t,n){var r=e.url,a=n.maxAgeSeconds,c=n.maxEntries,n=n.name,i=Date.now();return o("Updating LRU order for "+r+". Max entries is "+c+", max age is "+a),s.getDb(n).then(function(e){return s.setTimestampForUrl(e,r,i)}).then(function(e){return s.expireEntries(e,c,a,i)}).then(function(e){o("Successfully updated IDB.");e=e.map(function(e){return t.delete(e)});return Promise.all(e).then(function(){o("Done with cache cleanup.")})}).catch(function(e){o(e)})}.bind(null,e,t,n);c=c?c.then(n):n()}(n,t,e)})}),e.clone()})},openCache:a,renameCache:function(t,e,n){return o("Renaming cache: ["+t+"] to ["+e+"]",n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return a(e).then(function(e){return e.add(t)})},uncache:function(t,e){return a(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){e=e.headers.get("date");if(e)if(new Date(e).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,f="store",d="url",u="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(f,{keyPath:d}).createIndex(u,u,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),i[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(f,"readwrite");n.objectStore(f).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return i=e,s=r,((o=t)?new Promise(function(e,t){var n=1e3*o,r=[],a=i.transaction(f,"readwrite"),c=a.objectStore(f);c.index(u).openCursor().onsuccess=function(e){var t=e.target.result;t&&s-n>t.value[u]&&(e=t.value[d],r.push(e),c.delete(e),t.continue())},a.oncomplete=function(){e(r)},a.onabort=t}):Promise.resolve([])).then(function(t){return o=e,((s=n)?new Promise(function(e,t){var r=[],n=o.transaction(f,"readwrite"),a=n.objectStore(f),c=a.index(u),i=c.count();c.count().onsuccess=function(){var n=i.result;s<n&&(c.openCursor().onsuccess=function(e){var t=e.target.result;t&&(e=t.value[d],r.push(e),a.delete(e),n-r.length>s&&t.continue())})},n.oncomplete=function(){e(r)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var o,s});var i,o,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),i=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=i.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,i.cache.name))},installListener:function(e){var t=i.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(i.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href;t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var a=new URL("./",self.location).pathname,c=e("path-to-regexp"),e=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};e.prototype.makeHandler=function(e){var n,r;return this.regexp&&(n=this.regexp.exec(e),r={},this.keys.forEach(function(e,t){r[e.name]=n[t+1]})),function(e){return this.handler(e,r,this.options)}.bind(this)},t.exports=e},{"path-to-regexp":15}],6:[function(e,t,n){function c(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;)new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next();return a}function a(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null}var i=e("./route"),o=e("./helpers");["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){r=r||{},a=t instanceof RegExp?RegExp:(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();r=new i(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var a=this.routes.get(a);a.has(e)||a.set(e,new Map);a=a.get(e),e=r.regexp||r.fullUrlRegExp;a.has(e.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),a.set(e.source,r)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,n=n.pathname;return this._match(e,c(this.routes,r),n)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],a=a&&a.get(e.toLowerCase());if(a){a=c(a,n);if(0<a.length)return a[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),i=e("../helpers");t.exports=function(r,e,a){return i.debug("Strategy: cache first ["+r.url+"]",a=a||{}),i.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return i.isResponseFresh(e,t.maxAgeSeconds,n)?e:i.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return c.debug("Strategy: cache only ["+t.url+"]",r=r||{}),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var f=e("../helpers"),d=e("./cacheOnly");t.exports=function(i,o,s){return f.debug("Strategy: fastest ["+i.url+"]",s),new Promise(function(t,n){function r(e){c.push(e.toString()),a?n(new Error('Both cache and network failed: "'+c.join('", "')+'"')):a=!0}function e(e){e instanceof Response?t(e):r("No result returned")}var a=!1,c=[];f.fetchAndCache(i.clone(),s).then(e,r),d(i,o,s).then(e,r)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var f=e("../options"),d=e("../helpers");t.exports=function(c,e,i){var o=(i=i||{}).successResponses||f.successResponses,s=i.networkTimeoutSeconds||f.networkTimeoutSeconds;return d.debug("Strategy: network first ["+c.url+"]",i),d.openCache(i).then(function(e){var t,n,r=[];s&&(a=new Promise(function(r){t=setTimeout(function(){e.match(c).then(function(e){var t=i.cache||f.cache,n=Date.now(),t=t.maxAgeSeconds;d.isResponseFresh(e,t,n)&&r(e)})},1e3*s)}),r.push(a));var a=d.fetchAndCache(c,i).then(function(e){if(t&&clearTimeout(t),o.test(e.status))return e;throw d.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return d.debug("Network or response error, fallback to cache ["+c.url+"]",i),e.match(c).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(a),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),i=e("./strategies"),e=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",e.installListener),self.addEventListener("activate",e.activateListener),self.addEventListener("fetch",e.fetchListener),t.exports={networkOnly:i.networkOnly,networkFirst:i.networkFirst,cacheOnly:i.cacheOnly,cacheFirst:i.cacheFirst,fastest:i.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n=[],r=0,a=0,c="",i=t&&t.delimiter||"/";null!=(u=g.exec(e));){var o,s,f,d,u,h=u[0],l=u[1],p=u.index;c+=e.slice(a,p),a=p+h.length,l?c+=l[1]:(o=e[a],s=u[2],f=u[3],d=u[4],p=u[5],h=u[6],l=u[7],c&&(n.push(c),c=""),u=u[2]||i,n.push({name:f||r++,prefix:s||"",delimiter:u,optional:"?"===h||"*"===h,repeat:"+"===h||"*"===h,partial:null!=s&&null!=o&&o!==s,asterisk:!!l,pattern:(p=d||p)?p.replace(/([=!:$\/()])/g,"\\$1"):l?".*":"[^"+b(u)+"]+?"}))}return a<e.length&&(c+=e.substr(a)),c&&n.push(c),n}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(d){for(var u=new Array(d.length),e=0;e<d.length;e++)"object"==_typeof(d[e])&&(u[e]=new RegExp("^(?:"+d[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?h:encodeURIComponent,c=0;c<d.length;c++){var i=d[c];if("string"!=typeof i){var o,s=r[i.name];if(null==s){if(i.optional){i.partial&&(n+=i.prefix);continue}throw new TypeError('Expected "'+i.name+'" to be defined')}if(m(s)){if(!i.repeat)throw new TypeError('Expected "'+i.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(i.optional)continue;throw new TypeError('Expected "'+i.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(o=a(s[f]),!u[c].test(o))throw new TypeError('Expected all "'+i.name+'" to match "'+i.pattern+'", but received `'+JSON.stringify(o)+"`");n+=(0===f?i.prefix:i.delimiter)+o}}else{if(o=i.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!u[c].test(o))throw new TypeError('Expected "'+i.name+'" to match "'+i.pattern+'", but received "'+o+'"');n+=i.prefix+o}}else n+=i}return n}}function b(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function c(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",i=0;i<e.length;i++){var o,s,f=e[i];"string"==typeof f?c+=b(f):(o=b(f.prefix),s="(?:"+f.pattern+")",t.push(f),f.repeat&&(s+="(?:"+o+s+")*"),c+=s=f.optional?f.partial?o+"("+s+")?":"(?:"+o+"("+s+"))?":o+"("+s+")")}var d=b(n.delimiter||"/"),u=c.slice(-d.length)===d;return r||(c=(u?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=a?"$":r&&u?"":"(?="+d+"|$)",l(new RegExp("^"+c,p(n)),t)}function i(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(i(e[a],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",p(n)),t)}(e,t,n):(t=t,c(r(e,n=n),t,n))}var m=e("isarray");t.exports=i,t.exports.parse=r,t.exports.compile=function(e,t){return a(r(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=c;var g=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){var r,a,c,i;c=Cache.prototype.addAll,(i=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/))&&(r=i[1],a=parseInt(i[2])),c&&(!i||"Firefox"===r&&46<=a||"Chrome"===r&&50<=a)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"unpkg.com"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"});