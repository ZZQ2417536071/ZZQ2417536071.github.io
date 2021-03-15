"use strict";function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}$(function(){function w(){var t=$("#nav");window.innerWidth<768||e+i>t.width()-30?t.addClass("hide-menu"):t.removeClass("hide-menu")}var e=$("#site-name").width(),i=$("#menus").width();function _(){var t=$("#card-toc"),c=t.find(".toc-content"),l=c.find(".toc-child"),r=c.find(".toc-link"),n=$("#article-container");l.hide(),$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop();i(e),o(e)},100));var i=function(t){var e=n.height(),i=$(window).height(),o=n.offset().top,i=i<e?e-i:$(document).height()-i,i=Math.round((t-o)/i*100);c.attr("progress-percentage",100<i?100:i<=0?0:i)},d=GLOBAL_CONFIG.isanchor,e=function(){t.css("animation","toc-close .2s"),setTimeout(function(){t.css({display:"",animation:""})},100)};$("#mobile-toc-button").on("click",function(){(t.is(":visible")?e:function(){t.css("display","block")})()}),r.on("click",function(t){t.preventDefault(),btf.scrollToDest(decodeURI($(this).attr("href"))),window.innerWidth<900&&e()});var h=n.find("h1,h2,h3,h4,h5,h6"),o=function(e){if(0===r.length)return!1;var i="";h.each(function(){var t=$(this);e>t.offset().top-70&&(i="#"+encodeURI($(this).attr("id")))}),""===i&&(r.removeClass("active"),l.hide());var t,o,n,a,s=r.filter(".active");i&&s.attr("href")!==i&&(d&&(a=i,window.history.replaceState&&a!==window.location.hash&&window.history.replaceState(void 0,void 0,a)),r.removeClass("active"),(t=r.filter('[href="'+i+'"]')).addClass("active"),o=e,s=(n=t).offset().top,n=(a=c).scrollTop(),s>o+$(window).height()-100&&a.scrollTop(n+100),s<o+100&&a.scrollTop(n-100),(t=(n=0<(n=t.parents(".toc-child")).length?n.last():t).closest(".toc-item").find(".toc-child")).is(":visible")||t.fadeIn(400),n.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide())}}var I=!1,t=$("#rightside");function k(t){t.each(function(t,e){var i=$(e),e=i.attr("datetime");i.text(btf.diffDate(e,!0)).css("display","inline")})}t.on("click","#readmode",function(){$("body").toggleClass("read-mode")}),$("#darkmode").length&&t.on("click","#darkmode",function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&$("#disqus_thread").children().length&&setTimeout(function(){return window.disqusReset()},200)}),t.on("click","#rightside_config",function(){return $("#rightside-config-hide").toggleClass("show")}),t.on("click","#go-up",function(){return btf.scrollToDest("body")}),t.on("click","#hide-aside-btn",function(){var t=$(document.documentElement);t.hasClass("hide-aside")?(t.removeClass("hide-aside"),saveToLocal.set("aside-status","show",2)):(t.addClass("hide-aside"),saveToLocal.set("aside-status","hide",2))});var o;window.refreshFn=function(){var t,i,e,o,n,a,s,c,l,r,d,h,f,u,g,p,m,v,y,b,C,L,G;function O(){G.css({overflow:"","padding-right":""}),L.fadeOut(),b.removeClass("open").addClass("close"),C.removeClass("open")}w(),$("#nav").addClass("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&_(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(p=GLOBAL_CONFIG.noticeOutdate,(m=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=p.limitDay&&(m='<div class="post-outdate-notice">'.concat(p.messagePrev+" "+m+" "+p.messageNext,"</div>"),"top"===p.position?$("#article-container").prepend(m):$("#article-container").append(m))),GLOBAL_CONFIG.relativeDate.post&&k($("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&k($("#recent-posts time")),!GLOBAL_CONFIG.runtime||(v=$("#runtimeshow")).length&&(y=v.attr("data-publishDate"),v.text(btf.diffDate(y)+" "+GLOBAL_CONFIG.runtime)),(v=$("#last-push-date")).length&&(y=v.attr("data-lastPushDate"),y=btf.diffDate(y,!0),v.text(y)),$("#aside-cat-list .card-category-list-item.parent i").on("click",function(t){t.preventDefault(),$(this).toggleClass("expand").parents(".parent").next().slideToggle(300)})),b=$("#toggle-menu"),C=$("#sidebar-menus"),L=$("#menu-mask"),G=$("body"),b.on("click",function(){btf.sidebarPaddingR(),G.css("overflow","hidden"),L.fadeIn(),b.removeClass("close").addClass("open"),C.addClass("open")}),L.on("click touchstart",function(t){b.hasClass("open")&&O()}),$(window).on("resize",function(t){b.is(":visible")||b.hasClass("open")&&O()}),GLOBAL_CONFIG_SITE.isHome&&$("#scroll-down").on("click",function(){btf.scrollToDest("#content-inner")}),GLOBAL_CONFIG.highlight&&(g=GLOBAL_CONFIG.highlight.highlightCopy,p=GLOBAL_CONFIG.highlight.highlightLang,m=GLOBAL_CONFIG_SITE.isHighlightShrink,v=g||p||void 0!==m,y="highlighjs"===GLOBAL_CONFIG.highlight.plugin?$("figure.highlight"):$('pre[class*="language-"]'),v&&y.length&&(d="prismjs"===GLOBAL_CONFIG.highlight.plugin,u=!(f=h="")===m?"closed":"",void 0!==m&&(h='<i class="fas fa-angle-down expand '.concat(u,'"></i>')),g&&(f='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),p?d?y.each(function(){var t=$(this),e=void 0!==t.attr("data-language")?t.attr("data-language"):"Code",e='<div class="code-lang">'.concat(e,"</div>");t.wrap('<figure class="highlight"></figure>').before('<div class="highlight-tools '.concat(u,'">').concat(h+e+f,"</div>"))}):y.each(function(t,e){var i=$(this),o=i.attr("class").split(" ")[1],o='<div class="code-lang">'.concat(o="plain"===o||void 0===o?"Code":o,"</div>");i.prepend('<div class="highlight-tools '.concat(u,'">').concat(h+o+f,"</div>"))}):(p='<div class="highlight-tools '.concat(u,'">').concat(h+f,"</div>"),d?y.wrap('<figure class="highlight"></figure>').before(p):y.prepend(p)),void 0!==m&&$(".highlight-tools >.expand").on("click",function(){var t=$(this),e=t.parent().nextAll();t.toggleClass("closed"),e.is(":visible")?e.css("display","none"):e.css("display","block")}),g&&$(".highlight-tools >.copy-button").on("click",function(){var t=$(this).parents("figure.highlight");t.addClass("copy-true");var e,i=window.getSelection(),o=document.createRange();d?o.selectNodeContents(t.find("> pre code")[0]):o.selectNodeContents(t.find("table .code pre")[0]),i.removeAllRanges(),i.addRange(o),i.toString(),e=this,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).animate({opacity:1},450,function(){setTimeout(function(){$(e).prev(".copy-notice").animate({opacity:0},650)},400)})):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport),i.removeAllRanges(),t.removeClass("copy-true")}))),GLOBAL_CONFIG.isPhotoFigcaption&&$("#article-container img").not(".justified-gallery img").each(function(t,e){var i=$(e);i.attr("alt")&&(e=$('<div class="img-alt is-center">'+i.attr("alt")+"</div>"),i.after(e))}),(t=$(".justified-gallery")).length&&((e=t.find("img")).unwrap(),e.length&&e.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),I?btf.initJustifiedGallery(t):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.justifiedGallery.js),function(){btf.initJustifiedGallery(t)}),I=!0)),"null"!==GLOBAL_CONFIG.lightbox&&("fancybox"===GLOBAL_CONFIG.lightbox?($("#article-container img:not(.gallery-group-img)").not($("a>img")).each(function(t,e){var i=$(e).attr("data-lazy-src")?$(e).attr("data-lazy-src"):$(e).attr("src"),o=$(e).attr("alt")?$(e).attr("alt"):"";$(e).wrap('<a href="'.concat(i,'" data-fancybox="group" data-caption="').concat(o,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})):(i=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";i.update({background:e})})),a=!(n=0),s=$("#rightside"),c=$("#nav"),l="function"==typeof chatBtnHide,r="function"==typeof chatBtnShow,$(window).scroll(btf.throttle(function(t){var e=$(this).scrollTop(),i=(i=n<e,n=e,i);56<e?(i?(c.hasClass("visible")&&c.removeClass("visible"),r&&!0===a&&(chatBtnHide(),a=!1)):(c.hasClass("visible")||c.addClass("visible"),l&&!1===a&&(window.chatBtnShow(),a=!0)),c.addClass("fixed"),"0"===s.css("opacity")&&s.css({opacity:"1",transform:"translateX(-38px)"})):(0===e&&c.removeClass("fixed").removeClass("visible"),s.css({opacity:"",transform:""}))},200)),$("#article-container table").not($("figure.highlight > table")).each(function(){$(this).wrap('<div class="table-wrap"></div>')}),(e=$(".hide-button")).length&&e.on("click",function(t){var e=$(this),i=$(this).next(".hide-content");e.toggleClass("open"),i.toggle(),e.hasClass("open")&&0<i.find(".justified-gallery").length&&btf.initJustifiedGallery(i.find(".justified-gallery"))}),$("#article-container .tabs").find(".tab > button:not(.tab-to-top)").on("click",function(t){var e,i=$(this),o=i.parent();o.hasClass("active")||(e=i.parents(".nav-tabs").next(),o.siblings(".active").removeClass("active"),o.addClass("active"),i=i.attr("data-href"),e.find("> .tab-item-content").removeClass("active"),e.find("> ".concat(i)).addClass("active"),0<(i=e.find(i).find(".justified-gallery")).length&&btf.initJustifiedGallery(i))}),$("#article-container .tabs .tab-to-top").on("click",function(){btf.scrollToDest($(this).parents(".tabs"))}),o=!1,$("#comment-switch > .switch-btn").on("click",function(){var t=$(this);t.hasClass("move")?t.removeClass("move"):t.addClass("move"),$("#post-comment > .comment-wrap > div").each(function(t,e){(e=$(e)).is(":visible")?e.hide():e.css({display:"block",animation:"tabshow .5s"})}),o||"function"!=typeof loadOtherComment||(o=!0,loadOtherComment())})},refreshFn(),$(window).on("resize",function(){w()}),$("#sidebar-menus .expand").on("click",function(){$(this).parents(".menus_item").find("> .menus_item_child").slideToggle(),$(this).toggleClass("hide")}),$(window).on("touchmove",function(t){var e=$("#nav .menus_item_child");e.is(":visible")&&e.css("display","none")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(o=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>o.limitCount?e+"\n\n\n"+o.languages.author+"\n"+o.languages.link+window.location.href+"\n"+o.languages.source+"\n"+o.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});