(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd166"],{"2b00":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{margin:"0.2rem"}},[n("transition-group",{attrs:{name:"slide-fade"}},[e.showSelector?n("DataBaseSelector",{key:"2",on:{requireStart:e.requireStart},model:{value:e.database,callback:function(t){e.database=t},expression:"database"}}):e._e(),e._v(" "),e.showSelector?e._e():n("div",{key:"1"},[n("Train",{attrs:{name:e.database},scopedSlots:e._u([{key:"sidebar",fn:function(){return[n("span",[n("ProblemSearch",{attrs:{name:e.database}}),e._v(" "),n("el-divider"),e._v(" "),n("el-button",{staticStyle:{"margin-bottom":"0.5rem"},attrs:{type:"danger"},on:{click:function(t){return e.requireStart({is_manual:!0})}}},[e._v("返回\n            ")]),e._v(" "),n("PracticeTip",{attrs:{"show-tip":e.show_tip},on:{"update:showTip":function(t){e.show_tip=t},"update:show-tip":function(t){e.show_tip=t}}})],1)]},proxy:!0}],null,!1,1251955283)})],1)],1)],1)},r=[],c=(n("96cf"),n("1da1")),i={name:"Practice",components:{DataBaseSelector:function(){return n.e("chunk-80104a58").then(n.bind(null,"d245"))},Train:function(){return n.e("chunk-c20acccc").then(n.bind(null,"ad2c"))},PracticeTip:function(){return n.e("chunk-ae7997e6").then(n.bind(null,"af9e"))},ProblemSearch:function(){return Promise.all([n.e("chunk-2d0c9224"),n.e("chunk-2d27b112")]).then(n.bind(null,"eff1"))}},data:function(){return{database:null,showSelector:!0,show_tip:!1}},mounted:function(){this.$store.dispatch("problems/update_preferences")},methods:{requireStart:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.database_name,a=t.is_manual,!a){e.next=9;break}return r=this.$confirm,c=n?r("是否要切换题库到:".concat(n),"切换题库"):r("是否要退出","退出"),e.next=6,c.catch((function(e){}));case 6:if(i=e.sent,"confirm"===i){e.next=9;break}return e.abrupt("return");case 9:n&&(this.database=n),this.showSelector=!n;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},o=i,s=n("2877"),u=Object(s["a"])(o,a,r,!1,null,"2c455fa9",null);t["default"]=u.exports}}]);