(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cb2e7f9","chunk-7d1d401b"],{"01b6":function(t,e,i){"use strict";var s=i("6e01"),n=i.n(s);n.a},1276:function(t,e,i){"use strict";var s=i("d784"),n=i("44e7"),o=i("825a"),a=i("1d80"),r=i("4840"),c=i("8aa5"),l=i("50c4"),u=i("14c3"),h=i("9263"),d=i("d039"),f=[].push,m=Math.min,p=4294967295,b=!d((function(){return!RegExp(p,"y")}));s("split",2,(function(t,e,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var s=String(a(this)),o=void 0===i?p:i>>>0;if(0===o)return[];if(void 0===t)return[s];if(!n(t))return e.call(s,t,o);var r,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,b=new RegExp(t.source,d+"g");while(r=h.call(b,s)){if(c=b.lastIndex,c>m&&(u.push(s.slice(m,r.index)),r.length>1&&r.index<s.length&&f.apply(u,r.slice(1)),l=r[0].length,m=c,u.length>=o))break;b.lastIndex===r.index&&b.lastIndex++}return m===s.length?!l&&b.test("")||u.push(""):u.push(s.slice(m)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var n=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n,i):s.call(String(n),e,i)},function(t,n){var a=i(s,t,this,n,s!==e);if(a.done)return a.value;var h=o(t),d=String(this),f=r(h,RegExp),v=h.unicode,k=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(b?"y":"g"),g=new f(b?h:"^(?:"+h.source+")",k),C=void 0===n?p:n>>>0;if(0===C)return[];if(0===d.length)return null===u(g,d)?[d]:[];var w=0,x=0,y=[];while(x<d.length){g.lastIndex=b?x:0;var S,_=u(g,b?d:d.slice(x));if(null===_||(S=m(l(g.lastIndex+(b?0:x)),d.length))===w)x=c(d,x,v);else{if(y.push(d.slice(w,x)),y.length===C)return y;for(var O=1;O<=_.length-1;O++)if(y.push(_[O]),y.length===C)return y;x=w=S}}return y.push(d.slice(w)),y}]}),!b)},1343:function(t,e,i){},1632:function(t,e,i){},"1cb7":function(t,e,i){},2091:function(t,e,i){"use strict";var s=i("6e16"),n=i.n(s);n.a},"2c0f":function(t,e,i){"use strict";var s=i("1632"),n=i.n(s);n.a},3408:function(t,e,i){"use strict";var s=i("47ad"),n=i.n(s);n.a},"385c":function(t,e,i){"use strict";(function(t){i("4de4"),i("4160"),i("a15b"),i("b0c0"),i("d3b7"),i("ac1f"),i("3ca3"),i("1276"),i("159b"),i("ddb0");var s=i("a211"),n=i("ac0d"),o=i("e8ec"),a=i("5de6"),r=i("101f");t.ePub=s["a"],e["a"]={name:"EbookReader",components:{},mixins:[n["a"]],mounted:function(){var t=this,e=this.$route.params.fileName.split("|"),i=e[1];console.log(i),Object(r["b"])(i,(function(i,s){!i&&s?(console.log("找到离线缓存电子书"),t.setFileName(e.join("/")).then((function(){t.initEpub(s)}))):(console.log("在线获取电子书"),t.setFileName(e.join("/")).then((function(){var e="https://junliwrotethis.github.io/vue-ebook/epub/"+t.fileName+"/OEBPS/content.opf";console.log(e),t.initEpub(e)})))}))},methods:{initEpub:function(t){var e=this;this.book=new s["a"](t),this.setCurrentBook(this.book),this.initRendition(),this.parseBook(),this.currentBook.ready.then((function(){return e.book.locations.generate(window.innerWidth/375*750*(Object(o["e"])(e.fileName)/16))})).then((function(t){e.setBookAvailable(!0),e.refreshLocation()}))},initFontFamily:function(){var t=Object(o["d"])(this.fileName);t?(this.currentBook.rendition.themes.font(t),this.setDefaultFontFamily(t)):Object(o["n"])(this.fileName,this.defaultFontFamily)},initFontSize:function(){var t=Object(o["e"])(this.fileName);t?(this.currentBook.rendition.themes.fontSize(t),this.setDefaultFontSize(t)):Object(o["n"])(this.fileName,this.defaultFontFamily)},initGesture:function(){var t=this;this.rendition.on("touchstart",(function(e){t.touchStartX=e.changedTouches[0].clientX,t.touchStartTime=e.timeStamp})),this.rendition.on("touchend",(function(e){var i=e.changedTouches[0].clientX-t.touchStartX,s=e.timeStamp-t.touchStartTime;i<0&&s<500?t.nextPage():i>0&&s<500?t.prevPage():t.toggleTileAndMenu()}))},initRendition:function(){var t=this;this.rendition=this.book.renderTo("read",{width:window.innerWidth,height:window.innerHeight,method:"default"});var e=Object(o["h"])(this.fileName);this.display(e,(function(){t.initTheme(),t.initFontFamily(),t.initFontSize(),t.initGlobalStyle()})),console.log(this.book),this.rendition.hooks.content.register((function(t){Promise.all([t.addStylesheet("".concat("https://junliwrotethis.github.io/vue-ebook","/fonts/cabin.css")),t.addStylesheet("".concat("https://junliwrotethis.github.io/vue-ebook","/fonts/daysone.css")),t.addStylesheet("".concat("https://junliwrotethis.github.io/vue-ebook","/fonts/montserrat.css")),t.addStylesheet("".concat("https://junliwrotethis.github.io/vue-ebook","/fonts/tangerine.css"))]).then((function(){}))}))},initTheme:function(){var t=this,e=Object(o["j"])(this.fileName);e||(e=this.themeList[0].name,Object(o["s"])(this.fileName,e)),this.setDefaultTheme(Object(o["j"])(this.fileName)),this.themeList.forEach((function(e){t.rendition.themes.register(e.name,e.style)})),this.rendition.themes.select(e)},move:function(t){if(this.offsetY<=200){var e=0;this.firstOffsetY?(e=t.changedTouches[0].clientY-this.firstOffsetY,this.setOffsetY(e)):this.firstOffsetY=t.changedTouches[0].clientY,t.preventDefault(),t.stopPropagation()}},moveEnd:function(t){this.setOffsetY(0),this.firstOffsetY=null},nextPage:function(){var t=this;this.rendition&&(this.rendition.next().then((function(){t.refreshLocation()})),this.hideTitleAndMenu())},onMaskClick:function(t){if(!this.mouseState||2!==this.mouseState&&3!==this.mouseState){var e=t.offsetX,i=window.innerWidth;e>0&&e<.3*i?this.prevPage():e>0&&e>.7*i?this.nextPage():this.toggleTileAndMenu()}},onMouseEnd:function(t){2===this.mouseState?(this.setOffsetY(0),this.firstOffsetY=null,this.mouseState=3):this.mouseState=4;var e=t.timeStamp-this.mouseStartTime;e<100&&(this.mouseState=4),t.preventDefault(),t.stopPropagation()},onMouseEnter:function(t){this.mouseState=1,this.mouseStartTime=t.timeStamp,t.preventDefault(),t.stopPropagation()},onMouseMove:function(t){if(1===this.mouseState)this.mouseState=2;else if(2===this.mouseState&&this.offsetY<=200){var e=0;this.firstOffsetY?(e=t.clientY-this.firstOffsetY,this.setOffsetY(e)):this.firstOffsetY=t.clientY}t.preventDefault(),t.stopPropagation()},parseBook:function(){var t=this;this.book.loaded.cover.then((function(e){t.book.archive.createUrl(e).then((function(e){t.setCover(e)}))})),this.book.loaded.metadata.then((function(e){t.setMetadata(e)})),this.book.loaded.navigation.then((function(e){var i=Object(a["d"])(e.toc);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.parent?s(i.filter((function(e){return e.id===t.parent}))[0],++e):e}i.forEach((function(t){t.level=s(t)})),t.setNavigation(i)}))},prevPage:function(){var t=this;this.rendition&&(this.rendition.prev().then((function(){t.refreshLocation()})),this.hideTitleAndMenu())},toggleTileAndMenu:function(){this.menuVisible&&(this.setSettingVisible(-1),this.setFontFamilyVisible(!1)),this.setMenuVisible(!this.menuVisible)}}}}).call(this,i("c8ba"))},"3e5e":function(t,e,i){"use strict";var s=i("91b6"),n=i.n(s);n.a},"44e7":function(t,e,i){var s=i("861d"),n=i("c6b6"),o=i("b622"),a=o("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==n(t))}},"47ad":function(t,e,i){},"4ce5":function(t,e,i){"use strict";var s=i("c43c"),n=i.n(s);n.a},5158:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-reader"},[i("div",{attrs:{id:"read"}}),i("div",{staticClass:"ebook-reader-mask",on:{click:t.onMaskClick,touchmove:t.move,touchend:t.moveEnd,mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseEnter(e)},mousemove:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseMove(e)},mouseup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.onMouseEnd(e)}}})])},n=[],o=i("385c"),a=o["a"],r=(i("9ff7"),i("2877")),c=Object(r["a"])(a,s,n,!1,null,"5a827bc9",null);e["default"]=c.exports},"51a1":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"ebook",staticClass:"ebook"},[i("ebook-header"),i("ebook-footer"),i("ebook-title"),i("ebook-reader"),i("ebook-menu"),i("ebook-bookmark")],1)},n=[],o=i("5158"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-bar"},[i("transition",{attrs:{name:"slide-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible,expression:"menuVisible"}],staticClass:"title-wrapper"},[i("div",{staticClass:"left"},[i("span",{staticClass:"icon-back icon",on:{click:t.back}})]),i("div",{staticClass:"right"},[i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-shelf icon"})]),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-cart icon"})]),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-more icon"})])])])])],1)},r=[],c=i("ac0d"),l={name:"EbookTitle",mixins:[c["a"]],methods:{back:function(){this.$router.go(-1)}}},u=l,h=(i("dd4e"),i("2877")),d=Object(h["a"])(u,a,r,!1,null,"5a650e7d",null),f=d.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-bar"},[i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible,expression:"menuVisible"}],staticClass:"menu-wrapper",class:{"hide-box-shadow":t.menuVisible&&-1!==t.settingVisible}},[i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-menu icon",on:{click:function(e){return t.showSetting(3)}}})]),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-progress icon",on:{click:function(e){return t.showSetting(2)}}})]),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-bright icon",on:{click:function(e){return t.showSetting(1)}}})]),i("div",{staticClass:"icon-wrapper"},[i("span",{staticClass:"icon-A icon",on:{click:function(e){return t.showSetting(0)}}})])])]),i("ebook-setting-font"),i("ebook-setting-font-popup"),i("ebook-setting-themes"),i("ebook-setting-progress"),i("ebook-slide")],1)},p=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&0===t.settingVisible,expression:"menuVisible && settingVisible === 0"}],staticClass:"setting-wrapper"},[i("div",{staticClass:"setting-font-size"},[i("div",{staticClass:"preview left",style:{fontSize:t.fontSizeList[0].fontSize+"px"}},[t._v(" A ")]),i("div",{staticClass:"select-wrapper"},t._l(t.fontSizeList,(function(e,s){return i("div",{key:s,staticClass:"select-item",on:{click:function(i){return t.setFontSize(e.fontSize)}}},[i("div",{staticClass:"line"}),i("div",{staticClass:"point-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.defaultFontSize===e.fontSize,expression:"defaultFontSize === item.fontSize"}],staticClass:"point"},[i("div",{staticClass:"small-point"})])]),i("div",{staticClass:"line"})])})),0),i("div",{staticClass:"preview right",style:{fontSize:t.fontSizeList[6].fontSize+"px"}},[t._v(" A ")])]),i("div",{staticClass:"setting-font-family",on:{click:t.showFontFamilyPopup}},[i("div",{staticClass:"setting-font-family-text-wrapper"},[i("span",{staticClass:"setting-font-family-text"},[t._v(t._s(t.defaultFontFamily))])]),i("div",{staticClass:"setting-font-family-icon-wrapper"},[i("span",{staticClass:"icon-forward"})])])])])},v=[],k=i("5de6"),g=i("e8ec"),C={name:"EbookSettingFont",mixins:[c["a"]],data:function(){return{fontSizeList:k["b"]}},methods:{setFontSize:function(t){Object(g["o"])(this.fileName,t),this.setDefaultFontSize(t),this.currentBook.rendition.themes.fontSize(t)},showFontFamilyPopup:function(){this.setFontFamilyVisible(!0)}}},w=C,x=(i("01b6"),Object(h["a"])(w,b,v,!1,null,"28c1073e",null)),y=x.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"popup-slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.fontFamilyVisible,expression:"fontFamilyVisible"}],staticClass:"ebook-popup-list"},[i("div",{staticClass:"ebook-popup-title"},[i("div",{staticClass:"ebook-popup-title-icon"},[i("span",{staticClass:"icon-down2",on:{click:t.hide}})]),i("span",{staticClass:"ebook-popup-title-text"},[t._v(t._s(t.$t("book.selectFont")))])]),i("div",{staticClass:"ebook-popup-list-wrapper"},t._l(t.FONT_FAMILY,(function(e,s){return i("div",{key:s,staticClass:"ebook-popup-item",on:{click:function(i){return t.setFontFamily(e)}}},[i("div",{staticClass:"ebook-popup-item-text",class:{selected:t.isSelected(e)}},[t._v(" "+t._s(e.font)+" ")]),t.isSelected(e)?i("div",{staticClass:"ebook-popup-item-check",class:{selected:t.isSelected(e)}},[i("span",{staticClass:"icon-check"})]):t._e()])})),0)])])},_=[],O={name:"EbookSettingFontPopup",mixins:[c["a"]],data:function(){return{FONT_FAMILY:k["a"]}},methods:{hide:function(){this.setFontFamilyVisible(!1)},isSelected:function(t){if(this.defaultFontFamily===t.font)return!0},setFontFamily:function(t){this.setDefaultFontFamily(t.font),Object(g["n"])(this.fileName,this.defaultFontFamily),"Default"===this.defaultFontFamily?this.currentBook.rendition.themes.font("Times New Roman"):this.currentBook.rendition.themes.font(this.defaultFontFamily)}},mounted:function(){}},F=O,T=(i("3408"),Object(h["a"])(F,S,_,!1,null,"689e84d7",null)),j=T.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&1===t.settingVisible,expression:"menuVisible && settingVisible === 1"}],staticClass:"setting-wrapper"},[i("div",{staticClass:"setting-theme"},t._l(t.themeList,(function(e,s){return i("div",{key:s,staticClass:"theme-wrapper",on:{click:function(e){return t.setTheme(s)}}},[i("div",{staticClass:"preview",class:{selectd:e.name===t.defaultTheme},style:{background:e.style.body.background}}),i("div",{staticClass:"text",class:{selectd:e.name===t.defaultTheme}},[t._v(" "+t._s(e.alias)+" ")])])})),0)])])},$=[],N=(i("b0c0"),{name:"EbookSettingThemes",mixins:[c["a"]],methods:{setTheme:function(t){var e=this,i=this.themeList[t].name;this.setDefaultTheme(i).then((function(){e.currentBook.rendition.themes.select(i),e.initGlobalStyle()})),Object(g["s"])(this.fileName,i)}}}),V=N,P=(i("2c0f"),Object(h["a"])(V,E,$,!1,null,"0c7e78e0",null)),B=P.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&2===t.settingVisible,expression:"menuVisible && settingVisible===2"}],staticClass:"setting-wrapper"},[i("div",{staticClass:"setting-progress"},[i("div",{staticClass:"read-time-wrapper"},[i("span",{staticClass:"read-time-text"},[t._v(t._s(t.getReadTimeText()))]),i("span",{staticClass:"icon-forward"})]),i("div",{staticClass:"progress-wrapper"},[i("div",{staticClass:"progress-icon-wrapper"},[i("span",{staticClass:"icon-back",on:{click:function(e){return t.prevSection()}}})]),i("input",{ref:"progress",staticClass:"progress",attrs:{type:"range",max:"100",min:"0",setp:"1",disabled:!t.bookAvailable},domProps:{value:t.progress},on:{change:function(e){return t.onProgressChange(e.target.value)},input:function(e){return t.onProgressInput(e.target.value)}}}),i("div",{staticClass:"progress-icon-wrapper"},[i("span",{staticClass:"icon-forward",on:{click:function(e){return t.nextSection()}}})])]),i("div",{staticClass:"text-wrapper"},[i("span",{staticClass:"progress-section-text"},[t._v(t._s(t.getSectionName))]),i("span",[t._v("("+t._s(t.bookAvailable?t.progress+"%":"加载中...")+")")])])])])])},M=[],A={name:"EbookSettingProgress",mixins:[c["a"]],methods:{onProgressChange:function(t){var e=this;this.setProgress(t).then((function(){e.displayProgress(),e.updateProgressBg(),e.refreshLocation()}))},onProgressInput:function(t){var e=this;this.setProgress(t).then((function(){e.displayProgress(),e.updateProgressBg(),e.refreshLocation()}))},prevSection:function(){var t=this;this.section>0&&this.bookAvailable&&this.setSection(this.section-1).then((function(){t.displaySection()}))},nextSection:function(){var t=this;this.section<this.currentBook.spine.length-1&&this.bookAvailable&&this.setSection(this.section+1).then((function(){t.displaySection()}))},displayProgress:function(){var t=this.currentBook.locations.cfiFromPercentage(this.progress/100);this.display(t)},updateProgressBg:function(){this.$refs.progress.style.backgroundSize="".concat(this.progress,"% 100%")},displaySection:function(){var t=this.currentBook.section(this.section);t&&t.href&&this.display(t.href)}},updated:function(){this.updateProgressBg()}},z=A,Y=(i("ee0e"),Object(h["a"])(z,L,M,!1,null,"3ff63147",null)),I=Y.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.menuVisible&&3===t.settingVisible,expression:"menuVisible && settingVisible === 3"}],staticClass:"slide-content-wrapper"},[i("transition",{attrs:{name:"slide-right"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:3===t.settingVisible,expression:"settingVisible === 3"}],staticClass:"content"},[t.bookAvailable?i("div",{staticClass:"content-page-wrapper"},[i("div",{staticClass:"content-page"},[i(1===t.currentTab?t.content:t.bookmark,{tag:"component"})],1),i("div",{staticClass:"content-page-tab"},[i("div",{staticClass:"content-page-tab-item",class:{selected:1===t.currentTab},on:{click:function(e){return t.selectTab(1)}}},[t._v(" "+t._s(t.$t("book.navigation"))+" ")]),i("div",{staticClass:"content-page-tab-item",class:{selected:2===t.currentTab},on:{click:function(e){return t.selectTab(2)}}},[t._v(" "+t._s(t.$t("book.bookmark"))+" ")])])]):i("div",{staticClass:"content-empty"},[i("ebook-loading")],1)])]),i("div",{staticClass:"content-bg",on:{click:function(e){return t.hideTitleAndMenu()}}})],1)])},W=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-slide-contents"},[i("div",{staticClass:"slide-contents-search-wrapper"},[i("div",{staticClass:"slide-contents-search-input-wrapper"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"slide-contents-search-input",attrs:{type:"text",placeholder:t.$t("book.searchHint")},domProps:{value:t.searchText},on:{click:function(e){return t.showSearchPage()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.search()},input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t.searchVisiable?i("div",{staticClass:"slide-contents-search-cancel",on:{click:function(e){return t.hideSearchPage()}}},[t._v(t._s(t.$t("book.cancel"))+" ")]):t._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.searchVisiable,expression:"!searchVisiable"}],staticClass:"slide-contents-book-wrapper"},[i("div",{staticClass:"slide-contents-book-img-wrapper"},[i("img",{staticClass:"slide-contents-book-img",attrs:{src:t.cover,alt:""}})]),i("div",{staticClass:"slide-contents-book-info-wrapper"},[i("div",{staticClass:"slide-contents-book-title"},[i("span",{staticClass:"slide-contents-book-title-text"},[t._v(t._s(t.metadata.title))])]),i("div",{staticClass:"slide-contents-book-author"},[i("span",{staticClass:"slide-contents-book-author-text"},[t._v(t._s(t.metadata.creator))])])]),i("div",{staticClass:"slide-contents-book-progress-wrapper"},[i("div",{staticClass:"slide-contents-book-progress"},[i("span",{staticClass:"progress"},[t._v(t._s(t.progress+"%"))]),i("span",{staticClass:"progress-text"},[t._v(t._s(t.$t("book.haveRead2")))])]),i("div",{staticClass:"slide-contents-book-time"},[t._v(t._s(t.getReadTimeText()))])])]),i("scroll",{directives:[{name:"show",rawName:"v-show",value:!t.searchVisiable,expression:"!searchVisiable"}],ref:"scroll",staticClass:"slide-contents-list",attrs:{top:156,bottom:48}},t._l(t.navigation,(function(e,s){return i("div",{key:s,staticClass:"slide-contents-item"},[i("span",{staticClass:"slide-contents-item-label",class:{selected:t.section===s},style:t.contentItemStyle(e),on:{click:function(i){return t.displayContent(e.href)}}},[t._v(t._s(e.label))]),i("span",{staticClass:"slide-contents-item-page"})])})),0),i("scroll",{directives:[{name:"show",rawName:"v-show",value:t.searchVisiable,expression:"searchVisiable"}],staticClass:"slide-search-list",attrs:{top:66,bottom:48}},t._l(t.searchList,(function(e,s){return i("div",{key:s,staticClass:"slide-search-item",domProps:{innerHTML:t._s(e.excerpt)},on:{click:function(i){return t.displayContent(e.cfi,!0)}}})})),0)],1)},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide-contents-search-icon"},[i("span",{staticClass:"icon-search"})])}],X=(i("99af"),i("7db0"),i("d81d"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("ddb0"),i("6701")),K=i("fa7d"),G={name:"EbookSlideContent",mixins:[c["a"]],components:{Scroll:X["a"]},data:function(){return{searchVisiable:!1,searchList:null,searchText:""}},methods:{hideSearchPage:function(){this.searchVisiable=!1,this.searchText="",this.searchList=null},showSearchPage:function(){this.searchVisiable=!0},contentItemStyle:function(t){return{marginLeft:"".concat(Object(K["a"])(15*t.level),"rem")}},displayContent:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.display(t,(function(){e.hideTitleAndMenu(),i&&e.currentBook.rendition.annotations.highlight(t)}))},doSearch:function(t){var e=this;return Promise.all(this.currentBook.spine.spineItems.map((function(i){return i.load(e.currentBook.load.bind(e.currentBook)).then(i.find.bind(i,t)).finally(i.unload.bind(i))}))).then((function(t){return Promise.resolve([].concat.apply([],t))}))},search:function(){var t=this;this.searchText&&this.searchText.length>0&&this.doSearch(this.searchText).then((function(e){t.searchList=e,t.searchList.map((function(e){return e.excerpt=e.excerpt.replace(t.searchText,'<span class="content-search-text">'.concat(t.searchText,"</span>")),e}))}))}}},J=G,U=(i("7543"),Object(h["a"])(J,R,H,!1,null,"04ac7041",null)),q=U.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-slide-bookmark"},[i("div",{staticClass:"slide-bookmark-title"},[t._v(" "+t._s(t.$t("book.bookmark"))+" · "+t._s(t.bookmark?t.bookmark.length:0)+" ")]),i("scroll",{staticClass:"slide-bookmark-list",attrs:{top:48,bottom:48}},t._l(t.bookmark,(function(e,s){return i("div",{key:s,staticClass:"slide-bookmark-item",on:{click:function(i){return t.display(e.cfi)}}},[i("div",{staticClass:"slide-bookmark-item-icon"},[i("div",{staticClass:"icon-bookmark"})]),i("div",{staticClass:"slide-bookmark-item-text"},[t._v(t._s(e.text))])])})),0)],1)},Z=[],tt={mixins:[c["a"]],components:{Scroll:X["a"]},data:function(){return{bookmark:null}},mounted:function(){this.bookmark=Object(g["c"])(this.fileName)}},et=tt,it=(i("2091"),Object(h["a"])(et,Q,Z,!1,null,"1f632b94",null)),st=it.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-loading"},[i("div",{staticClass:"ebook-loading-wrapper"},[t._l(t.data,(function(e,s){return i("div",{key:s,staticClass:"ebook-loading-item"},t._l(e,(function(t,e){return i("div",{key:e,staticClass:"ebook-loading-line-wrapper"},[i("div",{ref:"line",refInFor:!0,staticClass:"ebook-loading-line"}),i("div",{ref:"mask",refInFor:!0,staticClass:"ebook-loading-mask"})])})),0)})),i("div",{staticClass:"ebook-loading-center"})],2)])},ot=[],at=(i("4160"),i("159b"),{name:"EbookLoading",data:function(){return{data:[[{},{},{}],[{},{},{}]],maskWidth:[{value:0},{value:0},{value:0},{value:0},{value:0},{value:0}],lineWidth:[{value:16},{value:16},{value:16},{value:16},{value:16},{value:16}],add:!0,end:!1}},mounted:function(){var t=this;this.task=setInterval((function(){t.$refs.mask.forEach((function(e,i){var s=t.$refs.mask[i],n=t.$refs.line[i],o=t.maskWidth[i],a=t.lineWidth[i];if(0===i)t.add&&o.value<16?(o.value++,a.value--):!t.add&&a.value<16&&(o.value--,a.value++);else if(t.add&&o.value<16){var r=t.maskWidth[i-1];r.value>=8&&(o.value++,a.value--)}else if(!t.add&&a.value<16){var c=t.lineWidth[i-1];c.value>=8&&(o.value--,a.value++)}s.style.width="".concat(Object(K["a"])(o.value),"rem"),n.style.width="".concat(Object(K["a"])(a.value),"rem"),s.style.flex="0 0 ".concat(Object(K["a"])(o.value),"rem"),n.style.flex="0 0 ".concat(Object(K["a"])(a.value),"rem"),i===t.maskWidth.length-1&&(t.add?16===o.value&&(t.end=!0):0===o.value&&(t.end=!0)),t.end&&(t.add=!t.add,t.end=!1)}))}),20)}}),rt=at,ct=(i("8043"),Object(h["a"])(rt,nt,ot,!1,null,"24e6e5f2",null)),lt=ct.exports,ut={name:"EbookSlide",mixins:[c["a"]],components:{EbookLoading:lt},data:function(){return{currentTab:1,content:q,bookmark:st}},methods:{selectTab:function(t){this.currentTab=t}}},ht=ut,dt=(i("3e5e"),Object(h["a"])(ht,D,W,!1,null,"1e6e0c9b",null)),ft=dt.exports,mt={name:"MenuBar",mixins:[c["a"]],components:{EbookSettingFont:y,EbookSettingFontPopup:j,EbookSettingThemes:B,EbookSettingProgress:I,EbookSlide:ft},methods:{showSetting:function(t){this.setSettingVisible(t)},onProgressChange:function(t){this.$emit("onProgressChange",t)},hideContent:function(){this.ifContentShow=!1},jumpTo:function(t){this.$emit("jumpTo",t)}}},pt=mt,bt=(i("4ce5"),Object(h["a"])(pt,m,p,!1,null,"5bdf832c",null)),vt=bt.exports,kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"bookmark",staticClass:"ebook-bookmark"},[i("div",{staticClass:"ebook-bookmark-text-wrapper"},[i("div",{ref:"iconDown",staticClass:"ebook-bookmark-down-wrapper"},[i("span",{staticClass:"icon-down"})]),i("div",{staticClass:"ebook-bookmark-text"},[t._v(t._s(t.text))])]),i("div",{staticClass:"ebook-bookmark-icon-wrapper",style:t.isFixed?t.fixedStyle:{}},[i("bookmark",{attrs:{color:t.color,width:15,height:35}})],1)])},gt=[],Ct=(i("4de4"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"bookmark",staticClass:"bookmark",style:t.style})}),wt=[],xt=(i("a9e3"),{name:"Bookmark",props:{width:Number,height:Number,color:String},computed:{style:function(){return this.color?{borderColor:"".concat(this.color," ").concat(this.color," transparent ").concat(this.color)}:{}}},methods:{refresh:function(){this.width&&this.height&&(this.$refs.bookmark.style.borderWidth="".concat(Object(K["a"])(this.height-5),"rem ").concat(Object(K["a"])(this.width/2),"rem ").concat(Object(K["a"])(5),"rem ").concat(Object(K["a"])(this.width/2),"rem"))}},mounted:function(){this.refresh()}}),yt=xt,St=(i("93a2"),Object(h["a"])(yt,Ct,wt,!1,null,"258ebaeb",null)),_t=St.exports,Ot="#346cbc",Ft="#fff",Tt={name:"EbookBookmark",data:function(){return{text:this.$t("book.pulldownAddMark"),color:Ft,isFixed:!1}},mixins:[c["a"]],components:{Bookmark:_t},watch:{offsetY:function(t){!this.bookAvailable||this.menuVisible||this.settingVisible>0||(t>=this.height&&t<this.threshold?this.beforeThreshold(t):t>=this.threshold?this.afterThreshold(t):t>0&&t<this.height?this.beforeHeight():0===t&&this.restore())},isBookmark:function(t){this.isFixed=t,this.color=t?Ot:Ft}},computed:{height:function(){return Object(K["b"])(35)},threshold:function(){return Object(K["b"])(55)},fixedStyle:function(){return{position:"fixed",top:0,right:"".concat((window.innerWidth-this.$refs.bookmark.clientWidth)/2,"px")}}},methods:{addBookmark:function(){var t=this;this.bookmark=Object(g["c"])(this.fileName),this.bookmark||(this.bookmark=[]);var e=this.currentBook.rendition.currentLocation(),i=e.start.cfi.replace(/!.*/,""),s=e.start.cfi.replace(/.*!/,"").replace(/\)$/,""),n=e.end.cfi.replace(/.*!/,"").replace(/\)$/,""),o="".concat(i,"!,").concat(s,",").concat(n,")");this.currentBook.getRange(o).then((function(i){var s=i.toString().replace(/\s\s/g,"");t.bookmark.push({cfi:e.start.cfi,text:s}),Object(g["m"])(t.fileName,t.bookmark)}))},removeBookmark:function(){var t=this.currentBook.rendition.currentLocation(),e=t.start.cfi;this.bookmark=Object(g["c"])(this.fileName),this.bookmark&&(Object(g["m"])(this.fileName,this.bookmark.filter((function(t){return t.cfi!==e}))),this.setIsBookmark(!1))},restore:function(){var t=this;setTimeout((function(){t.$refs.bookmark.style.top="".concat(-t.height,"px"),t.$refs.iconDown.style.transform=""}),200),this.isFixed?(this.setIsBookmark(!0),this.addBookmark()):(this.setIsBookmark(!1),this.removeBookmark())},beforeHeight:function(){this.isBookmark?(this.text=this.$t("book.pulldownDeleteMark"),this.color=Ot,this.isFixed=!0):(this.text=this.$t("book.pulldownAddMark"),this.color=Ft,this.isFixed=!1)},beforeThreshold:function(t){this.$refs.bookmark.style.top="".concat(-t,"px"),this.beforeHeight();var e=this.$refs.iconDown;"rotate(180deg)"===e.style.transform&&(e.style.transform=""),this.isFixed=!1},afterThreshold:function(t){this.isBookmark?(this.text=this.$t("book.releaseDeleteMark"),this.color=Ft,this.isFixed=!1):(this.text=this.$t("book.releaseAddMark"),this.color=Ot,this.isFixed=!0),this.$refs.bookmark.style.top="".concat(-t,"px");var e=this.$refs.iconDown;""===e.style.transform&&(e.style.transform="rotate(180deg)")}}},jt=Tt,Et=(i("64a6"),Object(h["a"])(jt,kt,gt,!1,null,"2462cb0b",null)),$t=Et.exports,Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-header"},[i("span",{staticClass:"ebook-header-text"},[t._v(t._s(t.getSectionName))])])},Vt=[],Pt={mixins:[c["a"]]},Bt=Pt,Lt=(i("faa3"),Object(h["a"])(Bt,Nt,Vt,!1,null,"321a8774",null)),Mt=Lt.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ebook-footer"},[i("span",{staticClass:"ebook-footer-text"},[t._v(t._s(this.progress+"%"))])])},zt=[],Yt={mixins:[c["a"]]},It=Yt,Dt=(i("b957"),Object(h["a"])(It,At,zt,!1,null,"09de6247",null)),Wt=Dt.exports,Rt={name:"index",components:{EbookReader:o["default"],EbookTitle:f,EbookMenu:vt,EbookBookmark:$t,EbookHeader:Mt,EbookFooter:Wt},mixins:[c["a"]],methods:{startLoopReadTime:function(){var t=this,e=Object(g["i"])(this.fileName);e||(e=0),this.task=setInterval((function(){e++,e%30===0&&Object(g["r"])(t.fileName,e)}),1e3)},move:function(t){this.$refs.ebook.style.top=t+"px"},restore:function(){var t=this;this.$refs.ebook.style.top=0,this.$refs.ebook.style.transition="all 0.2s linear",setTimeout((function(){t.$refs.ebook.style.transition=""}),200)}},mounted:function(){this.startLoopReadTime()},beforeDestroy:function(){this.task&&clearInterval(this.task)},watch:{offsetY:function(t){!this.menuVisible&&this.bookAvailable&&(t>0&&t<=205?this.move(t):0===t&&this.restore())}}},Ht=Rt,Xt=(i("e012"),Object(h["a"])(Ht,s,n,!1,null,"01a34238",null));e["default"]=Xt.exports},5673:function(t,e,i){},"5aa3":function(t,e,i){},6007:function(t,e,i){},"64a6":function(t,e,i){"use strict";var s=i("6007"),n=i.n(s);n.a},6701:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},n=[],o=(i("a9e3"),i("fa7d")),a={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(o["b"])(this.top)-Object(o["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){this.refresh()}},r=a,c=(i("a9b6"),i("2877")),l=Object(c["a"])(r,s,n,!1,null,"8a2ecbfe",null);e["a"]=l.exports},"67a0":function(t,e,i){},"6e01":function(t,e,i){},"6e16":function(t,e,i){},7543:function(t,e,i){"use strict";var s=i("e59e"),n=i.n(s);n.a},8043:function(t,e,i){"use strict";var s=i("dd09"),n=i.n(s);n.a},"8b18":function(t,e,i){},"91b6":function(t,e,i){},"93a2":function(t,e,i){"use strict";var s=i("1cb7"),n=i.n(s);n.a},9465:function(t,e,i){},"9ff7":function(t,e,i){"use strict";var s=i("8b18"),n=i.n(s);n.a},a15b:function(t,e,i){"use strict";var s=i("23e7"),n=i("44ad"),o=i("fc6a"),a=i("a640"),r=[].join,c=n!=Object,l=a("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},a9b6:function(t,e,i){"use strict";var s=i("9465"),n=i.n(s);n.a},b957:function(t,e,i){"use strict";var s=i("5aa3"),n=i.n(s);n.a},c43c:function(t,e,i){},dd09:function(t,e,i){},dd4e:function(t,e,i){"use strict";var s=i("67a0"),n=i.n(s);n.a},e012:function(t,e,i){"use strict";var s=i("f29e"),n=i.n(s);n.a},e59e:function(t,e,i){},ee0e:function(t,e,i){"use strict";var s=i("1343"),n=i.n(s);n.a},f29e:function(t,e,i){},faa3:function(t,e,i){"use strict";var s=i("5673"),n=i.n(s);n.a}}]);
//# sourceMappingURL=chunk-7cb2e7f9.e53d0071.js.map