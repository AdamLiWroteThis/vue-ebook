(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c978562"],{"04f0":function(t,e,i){"use strict";var r=i("09ec"),s=i.n(r);s.a},"09ec":function(t,e,i){},"4b3c":function(t,e,i){},6701:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},s=[],n=(i("a9e3"),i("fa7d")),c={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(n["b"])(this.top)-Object(n["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){this.refresh()}},a=c,l=(i("a9b6"),i("2877")),o=Object(l["a"])(a,r,s,!1,null,"8a2ecbfe",null);e["a"]=o.exports},"8c8f":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-title-wrapper"},[i("div",{staticClass:"label"},[t._v(t._s(t.label))]),i("div",{staticClass:"btn",on:{click:t.click}},[t._v(t._s(t.btn))])])},s=[],n={props:{label:String,btn:String},methods:{click:function(){this.$emit("onClick")}}},c=n,a=(i("bd7c"),i("2877")),l=Object(a["a"])(c,r,s,!1,null,"3d008e53",null);e["a"]=l.exports},9465:function(t,e,i){},a9b6:function(t,e,i){"use strict";var r=i("9465"),s=i.n(r);s.a},bd7c:function(t,e,i){"use strict";var r=i("4b3c"),s=i.n(r);s.a},cbe5:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"featured"},[t.titleVisible&&t.data&&t.data.length>0?i("title-view",{attrs:{label:t.titleText,btn:t.btnText}}):t._e(),i("div",{staticClass:"featured-list"},[i("div",{staticClass:"featured-item-wrapper"},t._l(t.data,(function(e,r){return i("div",{key:r,staticClass:"featured-item",on:{click:function(i){return t.showBookDetail(e)}}},[i("div",{staticClass:"img-wrapper"},[i("img",{staticClass:"img",attrs:{src:e.cover}})]),i("div",{staticClass:"content-wrapper"},[i("div",{ref:"title",refInFor:!0,staticClass:"title title-small"},[t._v(t._s(e.title))]),i("div",{ref:"author",refInFor:!0,staticClass:"author sub-title-tiny"},[t._v(" "+t._s(e.author)+" ")]),i("div",{ref:"category",refInFor:!0,staticClass:"category third-title-tiny"},[t._v(" "+t._s(t.categoryText(e.category))+" ")])])])})),0)])],1)},s=[],n=(i("4160"),i("159b"),i("8c8f")),c=i("fa7d"),a=i("da6f"),l=i("ac0d"),o={mixins:[l["b"]],components:{TitleView:n["a"]},props:{data:Array,titleVisible:{type:Boolean,default:!0},titleText:{type:String},btnText:{type:String}},computed:{width:function(){return window.innerWidth-Object(c["b"])(20)-Object(c["b"])(60)+"px"}},methods:{categoryText:function(t){return Object(a["c"])(t,this)},resize:function(){var t=this;this.$nextTick((function(){t.$refs.title.forEach((function(e){e.style.width=t.width})),t.$refs.author.forEach((function(e){e.style.width=t.width})),t.$refs.category.forEach((function(e){e.style.width=t.width}))}))}}},f=o,u=(i("04f0"),i("2877")),d=Object(u["a"])(f,r,s,!1,null,"e8085638",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-5c978562.cc902dff.js.map