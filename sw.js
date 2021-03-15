/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/14/js简易轮播图/index.html","fbc4ebdb8a357da951130cba75db6df6"],["/2019/12/14/js三大家族/index.html","23a27634c247e4efddd4961957fc534e"],["/2020/03/03/去重算法/index.html","aa7e5c761d3bd229958437500e68c545"],["/2020/03/14/浅谈前端模块化/index.html","404abb2400db5c0a7dc04a1b93fd385f"],["/2020/03/18/Vuex使用详解/index.html","c1d685dfb2c97c3e6a37f70a00b0dec6"],["/2020/03/19/vue中路由跳转view却不更新的问题与解决办法/index.html","35405b8a7b07152e205cb4b38b682656"],["/2020/04/02/MySql/index.html","8b4c91558a73325c9a8b1df1e1f45221"],["/2020/04/09/浅谈TypeScript/index.html","1326c3cfd6d53f4169018c9bf47053e3"],["/2020/05/09/Express服务器的搭建/index.html","548878d0f5e815611f407817d98ed6df"],["/2020/07/14/ES6新特性/index.html","80405fa48fcaf0bea1e600df1b9ddf0c"],["/2020/08/21/深度优先与广度优先遍历DOM-递归与非递归/index.html","f4f0b350389d07a6a1c5b3442db65801"],["/404.html","eba3e6edae4e2dd0c4bddece46e7fdb6"],["/archives/2019/07/index.html","93f37c502c6dc204aaa64be3713d8db4"],["/archives/2019/12/index.html","6cd6fa5813f0f7ad54461f9007e48370"],["/archives/2019/index.html","5a068e3da0d38c8cdee36374980e992b"],["/archives/2020/03/index.html","a7debd46313b8142ab8724e935ee48a4"],["/archives/2020/04/index.html","123a4809666a919cdd9c0764137ad278"],["/archives/2020/05/index.html","de2a3366b2c69bc7c8d496f5e97d5707"],["/archives/2020/07/index.html","0f4ddcfef63786e344bf02c88075b226"],["/archives/2020/08/index.html","608dd07a88e16deb817203c3b9c244df"],["/archives/2020/index.html","afaa74aaf9ad59826b3e39ea60d51cc1"],["/archives/index.html","9bf6e0a2776c9be9b7bd789cd815fcf2"],["/archives/page/2/index.html","51bf1100688f22a3ec65b8274c21f645"],["/assets/css/APlayer.min.css","e1fbeb84b889055ca44f8cfbe96111b7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_code-Zd2SGcHG1R.html","7d5f037db822349e633becdb05be3042"],["/categories/Mysql/index.html","ec89670ad9c5e777458ec9f64f893eeb"],["/categories/Vue全家桶/index.html","44ba9df19cf60e1c911f5d817b43cdff"],["/categories/index.html","28057dbd55bc9c765bb45368f096e6d1"],["/categories/前端基础/index.html","ed7ceeb8cfede478e648035dea21820b"],["/categories/前端进阶/index.html","b77099d455ee532813bc4c4b29f590fc"],["/categories/服务器/index.html","01a4c27386d92518010f53fb2d4f8338"],["/css/background.css","61d8c7b981205dd4a372f3ebc01a2d73"],["/css/caidai.css","283d64002292fef537b4ec7e96f3a42d"],["/css/custom.css","4460598824fbe091791e7991508c40c5"],["/css/index.css","ddaeaf23442dcc74a99727cc9a65249c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/animation/index.html","7404e606be665e364f6b68c15f075abc"],["/gallery/index.html","bc33250a440035d3fbba55218771caa2"],["/gallery/marvel/index.html","3988f0abea6917a7543088ebeb9201b7"],["/gallery/people/index.html","0a92a9cb48e50b58212e56f1f15dc016"],["/gallery/wallpaper/index.html","1c0d7edc2a6d638f4ca1f4bc47ca196d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Tx2.gif","a4857af68cb2dcdbe9eec86c7315468c"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/caidai.gif","cda79d215d320c4d3694c294a7f6e237"],["/img/category.jpg","4b3a55903c051d87202af08bdefd2ca4"],["/img/dt.gif","f871b8e875cb3670bfd27c5b6f4e788e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pwa/16.png","e3d0a6b65920c109da97b89b8ec516e0"],["/img/pwa/32.png","5f4c34c1936bd8e57c201d67d87d9f1a"],["/img/siteicon/README.html","fb37e96cbc4e82a93b829723d71df3ca"],["/img/siteicon/android-chrome-144x144.png","01b6ec74550139798326f5b625904dbe"],["/img/siteicon/android-chrome-192x192.png","b8bf11a8f67abe91ebb64bf94993e9ba"],["/img/siteicon/android-chrome-256x256.png","f604860655834f63e6f431dd614a39b4"],["/img/siteicon/android-chrome-36x36.png","a357e80b6efcd714105bf2db49e35e42"],["/img/siteicon/android-chrome-384x384.png","f66ab4d94d04e0afff3a266fba095ab2"],["/img/siteicon/android-chrome-48x48.png","ffc7f86cd6819d06e88e8f02e686ad0e"],["/img/siteicon/android-chrome-512x512.png","91d27164a7698579d20a1f3d4569e440"],["/img/siteicon/android-chrome-72x72.png","b98be0fd003783b4779e23f0a39414bc"],["/img/siteicon/android-chrome-96x96.png","6bfb02b330a447eadde634115f12e780"],["/img/siteicon/apple-touch-icon.png","7d105f92e04cbbca9f1d410125197509"],["/img/siteicon/favicon-16x16.png","21396d590b717e56fc152a125901676f"],["/img/siteicon/favicon-32x32.png","32e2e12eb9ddfac9b72b91e899fdef13"],["/img/siteicon/mstile-150x150.png","b6ae27a985c762fdcacf65761895c38c"],["/img/siteicon/safari-pinned-tab.svg","058aa74db13039c370c46a01bdf7bafc"],["/index.html","bb6182ccf0c7e630071a6466686a36d4"],["/js/main.js","36e77a04e254e3ae423f70a6214b396a"],["/js/search/algolia.js","7e0d793cc105cadb8eec6ee7ddc46362"],["/js/search/local-search.js","4a416885eab750da0dc3f5f00c930bcc"],["/js/tw_cn.js","42c99754804dd9c3bfa2b62451c843b7"],["/js/utils.js","3425d1a3f7b9e15838341189f9502deb"],["/js/wow_init.js","9e89ad02053483defdf93c0c63a6f63c"],["/link/index.html","ca0c8308ce14029c199ad83fc564796f"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","881370c9a2a72ae0ad71eba98e579f8a"],["/page/2/index.html","d988f6e5e20f9aa538225f40bed8cd5b"],["/service-worker.js","a9f03bf4b3ef0e3e269cb750891c83cf"],["/sw-register.js","47cedfae210a11a74fc904b1dcbda74e"],["/tags/Const/index.html","dab22d7a8c30b3c50fade7854367ed1d"],["/tags/Dom遍历/index.html","7072cb6c78b0f4eb413999a79decaf36"],["/tags/ES6/index.html","12d6befa6029c8f8aed50a09fad20c6c"],["/tags/Express/index.html","1a4fa3a58f3fa0e171a01d10eb43c305"],["/tags/Let/index.html","457bebd70ef3735711fed0a9cc09211f"],["/tags/Mysql/index.html","be41857b424c952fddcd4306ecc69442"],["/tags/TS/index.html","63fa4ec01ebbf3a7e91e2950df3830a9"],["/tags/Vue/index.html","ec94e99630d076c8688135e8558ac4c5"],["/tags/client/index.html","07513a0e3d31d904de886d8820088fe0"],["/tags/commonJS/index.html","ea249336b078ce40e5c114ad556de701"],["/tags/index.html","ee612808a48c562528605543cf7f967b"],["/tags/js/index.html","7af5160b8f227ea059e97b359e5218a2"],["/tags/offset/index.html","01faae3b79757ec6c5e74ba4b05026e6"],["/tags/scroll/index.html","82382c8eccaee78e0ed9d63c44027aa1"],["/tags/vue-router/index.html","184e934fd14bf84750d2c4989f7575c7"],["/tags/vuex/index.html","8b45ea628d2eb215ffd09e585adf4ed8"],["/tags/代码规范/index.html","414462ecc048d2235e1aa8ed5aee576d"],["/tags/后台/index.html","55c5413d935326754156019fd943058f"],["/tags/广度优先/index.html","55557c27638ef62087a3428119b8392e"],["/tags/数据库/index.html","3fea73bf89c0281eae05683c60fd8e6c"],["/tags/数组/index.html","99a708316c9dc579c0861a65ea50225d"],["/tags/数组去重/index.html","2269c988de34f7ab8f8d74f29d5c3676"],["/tags/服务器/index.html","57faa0eb6f2b151d3d93222839c6db79"],["/tags/模块化/index.html","d77ff6190924a9407aa2463d2f6dd806"],["/tags/深度优先/index.html","9986b3e2e6fad8c330afb22f7c1ff839"],["/tags/路由/index.html","b5a0ee3a56a5df49f95888c46823fa51"],["/tags/轮播图/index.html","187a36cd86a9f42baa9252add845e749"],["/tags/遍历数组/index.html","a259610f0cc69f6d3b91e801e048f7d1"],["/workbox-cf684d81.js","92fc6f2ceb6fc371be5a29de298091c4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
