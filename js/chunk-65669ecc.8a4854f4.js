(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65669ecc"],{1276:function(t,e,i){"use strict";var n=i("d784"),o=i("44e7"),s=i("825a"),a=i("1d80"),r=i("4840"),u=i("8aa5"),c=i("50c4"),h=i("14c3"),l=i("9263"),f=i("d039"),d=[].push,m=Math.min,v=4294967295,b=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(a(this)),s=void 0===i?v:i>>>0;if(0===s)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,s);var r,u,c,h=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,b=new RegExp(t.source,f+"g");while(r=l.call(b,n)){if(u=b.lastIndex,u>m&&(h.push(n.slice(m,r.index)),r.length>1&&r.index<n.length&&d.apply(h,r.slice(1)),c=r[0].length,m=u,h.length>=s))break;b.lastIndex===r.index&&b.lastIndex++}return m===n.length?!c&&b.test("")||h.push(""):h.push(n.slice(m)),h.length>s?h.slice(0,s):h}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var o=a(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,o,i):n.call(String(o),e,i)},function(t,o){var a=i(n,t,this,o,n!==e);if(a.done)return a.value;var l=s(t),f=String(this),d=r(l,RegExp),p=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),k=new d(b?l:"^(?:"+l.source+")",g),S=void 0===o?v:o>>>0;if(0===S)return[];if(0===f.length)return null===h(k,f)?[f]:[];var E=0,O=0,y=[];while(O<f.length){k.lastIndex=b?O:0;var _,j=h(k,b?f:f.slice(O));if(null===j||(_=m(c(k.lastIndex+(b?0:O)),f.length))===E)O=u(f,O,p);else{if(y.push(f.slice(E,O)),y.length===S)return y;for(var w=1;w<=j.length-1;w++)if(y.push(j[w]),y.length===S)return y;O=E=_}}return y.push(f.slice(E)),y}]}),!b)},"385c":function(t,e,i){"use strict";(function(t){i("4de4"),i("4160"),i("a15b"),i("b0c0"),i("d3b7"),i("ac1f"),i("3ca3"),i("1276"),i("159b"),i("ddb0");var n=i("a211"),o=i("ac0d"),s=i("e8ec"),a=i("5de6"),r=i("101f");t.ePub=n["a"],e["a"]={name:"EbookReader",components:{},mixins:[o["a"]],mounted:function(){var t=this,e=this.$route.params.fileName.split("|"),i=e[1];Object(r["b"])(i,(function(i,n){!i&&n?(console.log("找到离线缓存电子书"),t.setFileName(e.join("/")).then((function(){t.initEpub(n)}))):(console.log("在线获取电子书"),t.setFileName(e.join("/")).then((function(){var e=Object({NODE_ENV:"production",BASE_URL:"/vue-ebook/"}).VUE_APP_RES_URL+"/epub/"+t.fileName+".epub";t.initEpub(e)})))}))},methods:{initEpub:function(t){var e=this;this.book=new n["a"](t),this.setCurrentBook(this.book),this.initRendition(),this.parseBook(),this.currentBook.ready.then((function(){return e.book.locations.generate(window.innerWidth/375*750*(Object(s["e"])(e.fileName)/16))})).then((function(t){e.setBookAvailable(!0),e.refreshLocation()}))},initFontFamily:function(){var t=Object(s["d"])(this.fileName);t?(this.currentBook.rendition.themes.font(t),this.setDefaultFontFamily(t)):Object(s["n"])(this.fileName,this.defaultFontFamily)},initFontSize:function(){var t=Object(s["e"])(this.fileName);t?(this.currentBook.rendition.themes.fontSize(t),this.setDefaultFontSize(t)):Object(s["n"])(this.fileName,this.defaultFontFamily)},initGesture:function(){var t=this;this.rendition.on("touchstart",(function(e){t.touchStartX=e.changedTouches[0].clientX,t.touchStartTime=e.timeStamp})),this.rendition.on("touchend",(function(e){var i=e.changedTouches[0].clientX-t.touchStartX,n=e.timeStamp-t.touchStartTime;i<0&&n<500?t.nextPage():i>0&&n<500?t.prevPage():t.toggleTileAndMenu()}))},initRendition:function(){var t=this;this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight,method:"default"});var e=Object(s["h"])(this.fileName);this.display(e,(function(){t.initTheme(),t.initFontFamily(),t.initFontSize(),t.initGlobalStyle()})),this.rendition.hooks.content.register((function(t){Promise.all([t.addStylesheet("".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-ebook/"}).VUE_APP_RES_URL,"/fonts/cabin.css")),t.addStylesheet("".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-ebook/"}).VUE_APP_RES_URL,"/fonts/daysone.css")),t.addStylesheet("".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-ebook/"}).VUE_APP_RES_URL,"/fonts/montserrat.css")),t.addStylesheet("".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-ebook/"}).VUE_APP_RES_URL,"/fonts/tangerine.css"))]).then((function(){}))}))},initTheme:function(){var t=this,e=Object(s["j"])(this.fileName);e||(e=this.themeList[0].name,Object(s["s"])(this.fileName,e)),this.setDefaultTheme(Object(s["j"])(this.fileName)),this.themeList.forEach((function(e){t.rendition.themes.register(e.name,e.style)})),this.rendition.themes.select(e)},move:function(t){if(this.offsetY<=200){var e=0;this.firstOffsetY?(e=t.changedTouches[0].clientY-this.firstOffsetY,this.setOffsetY(e)):this.firstOffsetY=t.changedTouches[0].clientY,t.preventDefault(),t.stopPropagation()}},moveEnd:function(t){this.setOffsetY(0),this.firstOffsetY=null},nextPage:function(){var t=this;this.rendition&&(this.rendition.next().then((function(){t.refreshLocation()})),this.hideTitleAndMenu())},onMaskClick:function(t){if(!this.mouseState||2!==this.mouseState&&3!==this.mouseState){var e=t.offsetX,i=window.innerWidth;e>0&&e<.3*i?this.prevPage():e>0&&e>.7*i?this.nextPage():this.toggleTileAndMenu()}},onMouseEnd:function(t){2===this.mouseState?(this.setOffsetY(0),this.firstOffsetY=null,this.mouseState=3):this.mouseState=4;var e=t.timeStamp-this.mouseStartTime;e<100&&(this.mouseState=4),t.preventDefault(),t.stopPropagation()},onMouseEnter:function(t){this.mouseState=1,this.mouseStartTime=t.timeStamp,t.preventDefault(),t.stopPropagation()},onMouseMove:function(t){if(1===this.mouseState)this.mouseState=2;else if(2===this.mouseState&&this.offsetY<=200){var e=0;this.firstOffsetY?(e=t.clientY-this.firstOffsetY,this.setOffsetY(e)):this.firstOffsetY=t.clientY}t.preventDefault(),t.stopPropagation()},parseBook:function(){var t=this;this.book.loaded.cover.then((function(e){t.book.archive.createUrl(e).then((function(e){t.setCover(e)}))})),this.book.loaded.metadata.then((function(e){t.setMetadata(e)})),this.book.loaded.navigation.then((function(e){var i=Object(a["d"])(e.toc);function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.parent?n(i.filter((function(e){return e.id===t.parent}))[0],++e):e}i.forEach((function(t){t.level=n(t)})),t.setNavigation(i)}))},prevPage:function(){var t=this;this.rendition&&(this.rendition.prev().then((function(){t.refreshLocation()})),this.hideTitleAndMenu())},toggleTileAndMenu:function(){this.menuVisible&&(this.setSettingVisible(-1),this.setFontFamilyVisible(!1)),this.setMenuVisible(!this.menuVisible)}}}}).call(this,i("c8ba"))},"44e7":function(t,e,i){var n=i("861d"),o=i("c6b6"),s=i("b622"),a=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},5158:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-reader"},[i("div",{attrs:{id:"read"}}),i("div",{staticClass:"ebook-reader-mask",on:{click:t.onMaskClick,touchmove:t.move,touchend:t.moveEnd,mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseEnter(e)},mousemove:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseMove(e)},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseEnd(e)}}})])},o=[],s=i("385c"),a=s["a"],r=(i("d99b"),i("2877")),u=Object(r["a"])(a,n,o,!1,null,"0fb2a7e0",null);e["default"]=u.exports},a15b:function(t,e,i){"use strict";var n=i("23e7"),o=i("44ad"),s=i("fc6a"),a=i("a640"),r=[].join,u=o!=Object,c=a("join",",");n({target:"Array",proto:!0,forced:u||!c},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},d99b:function(t,e,i){"use strict";var n=i("fc49"),o=i.n(n);o.a},fc49:function(t,e,i){}}]);
//# sourceMappingURL=chunk-65669ecc.8a4854f4.js.map