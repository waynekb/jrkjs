(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abe2f"],{"16d8":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.component?t("el-card",{staticStyle:{margin:"2%"}},[t(e.component,e._b({tag:"component",attrs:{"file-name":e.fileName,path:e.path}},"component",e.$attrs,!1))],1):e._e()},o=[],i={name:"MarkdownPanel",components:{Editor:function(){return Promise.all([t.e("chunk-af3fa5c6"),t.e("chunk-48bc717b")]).then(t.bind(null,"65fe"))},Viewer:function(){return Promise.all([t.e("chunk-af3fa5c6"),t.e("chunk-2d0c4282")]).then(t.bind(null,"3a42"))}},model:{prop:"value",event:"change"},data:function(){return{fileName:"",path:"",component:null}},mounted:function(){var e=this.$route&&this.$route.query,n=e&&e.filename;n?(this.fileName=n,this.component="Viewer"):(this.component="Editor",void 0===e.filename&&this.$router.push({query:Object.assign({filename:""},e)}))}},c=i,r=t("2877"),u=Object(r["a"])(c,a,o,!1,null,"2d1c482f",null);n["default"]=u.exports}}]);