(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{316:function(t,e,n){var content=n(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("c9ba4ecc",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";var r=n(316);n.n(r).a},318:function(t,e,n){(e=n(62)(!1)).push([t.i,".main_hyaku{height:880px;background-repeat:no-repeat;background-position:50% 10%;background-size:cover;-webkit-animation:appear .2s;animation:appear .2s}",""]),t.exports=e},319:function(t,e,n){"use strict";n.r(e);var r={name:"MainPlain",props:["title"],components:{},data:function(){return{url_head:"/_nuxt/assets/",img_title_simple:this.title}},methods:{},computed:{local_img:function(){return"".concat(this.url_head).concat(this.img_title)},url_img:function(){return"".concat(this.$store.state.url_img_main[this.img_title_simple])}}},l=(n(317),n(30)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"main_hyaku wp",style:{backgroundImage:"url("+this.url_img+")"}}),this._v(" "),e("br")])}),[],!1,null,null,null);e.default=component.exports},337:function(t,e,n){"use strict";n.r(e);var r={name:"Kamajiin",props:[],components:{MainPlain:n(319).default},data:function(){return{kamatemple:[{id:1,temple:"建長寺",rank:"鎌倉五山第一位"},{id:2,temple:"円覚寺",rank:"鎌倉五山第二位"},{id:3,temple:"寿福寺",rank:"鎌倉五山第三位"},{id:4,temple:"浄智寺",rank:"鎌倉五山第四位"},{id:5,temple:"浄妙寺",rank:"鎌倉五山第五位"},{id:6,temple:"英勝寺"},{id:7,temple:"海蔵寺"},{id:8,temple:"護国寺"},{id:9,temple:"浄光明寺"},{id:10,temple:"極楽寺"},{id:11,temple:"長勝寺"},{id:12,temple:"杉本寺"},{id:13,temple:"東慶寺"},{id:14,temple:"明月院"}]}}},l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg_center"},[n("MainPlain",{attrs:{title:"kamajiin"}}),t._v(" "),n("h1",[t._v("海浪，电铁和古寺")]),t._v(" "),n("hr"),n("hr"),t._v(" "),t._m(0),t._v(" "),n("br"),t._v(" "),n("br"),n("br"),t._v(" "),n("ul",t._l(t.kamatemple,(function(e,r){return n("h2",{key:"kamatemple"+r},[t._v("\n    "+t._s(e.temple)+"\n    "),n("p",[t._v(t._s(e.rank))])])})),0),t._v(" "),n("br")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("section",[this._v("\n      镰仓三面环山，一面向海，曾经是镰仓幕府武家政权的所在地。区域内寺社众多，且保有着具有文化价值的中世纪建筑遗迹。\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);