(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-007534b9":"b7da3fbd","chunk-6bc4afed":"22a76ec7"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("header",[e._v(e._s(e.title))])]),n("v-main",[n("module-list",{attrs:{modules:e.modules}})],1)],1)},o=[],i=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",e._l(e.modules,(function(e){return n("v-col",{key:e.name,staticClass:"module",attrs:{cols:"12",lg:"4",md:"6",sm:"6"}},[n("module",{attrs:{module:e}})],1)})),1)],1)}),u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{ripple:!1,elevation:"2"}},[e.module.deprecated?n("div",{staticClass:"deprecated"},[n("span",[e._v(" deprecated ")])]):e._e(),n("header",[n("v-card-title",[n("a",{attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.manifest.title))])]),n("v-lazy",{model:{value:e.dlVisible,callback:function(t){e.dlVisible=t},expression:"dlVisible"}},[e.dlVisible?n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-chip",e._g(e._b({on:{click:e.copyManifest}},"v-chip",a,!1),r),[n("v-icon",{attrs:{size:"1.5em",left:""}},[e._v(" mdi-download ")]),n("count-to",{attrs:{"start-val":0,"end-val":e.downloadCount,duration:5e3}})],1)]}}],null,!1,3781598434)},[n("span",[e._v("Click to copy manifest url")])]):e._e()],1)],1),n("main",[n("v-card-text",[e._v(" "+e._s(e.description)+" ")])],1),n("footer",[n("v-card-text",e._l(e.languages,(function(t){return n("v-chip",{key:t,staticClass:"languageChip",attrs:{small:""}},[n("v-icon",{attrs:{size:"1.5em",left:""}},[e._v(" mdi-translate ")]),e._v(" "+e._s(t)+" ")],1)})),1)],1),n("v-alert",{staticClass:"copyAlert",attrs:{value:e.copyAlert,dense:"",elevation:"4",type:"success",transition:"scale-transition"}},[n("span",[e._v(" Manifest Url Copied ")])])],1)},s=[],l=n("1da1"),d=(n("96cf"),n("a4d3"),n("e01a"),n("caad"),n("bc3a")),p=n.n(d),f=n("2bea"),m=n.n(f),v=n("ec1b"),h=n.n(v),b={name:"Module",components:{CountTo:h.a},props:{module:Object},data:function(){return{manifest:{},downloadCount:0,languages:[],copyAlert:!1,dlVisible:!1}},computed:{description:function(){return this.module.description||this.manifest.description},url:function(){return this.module.url||this.manifest.url}},mounted:function(){var e=this;p.a.get(this.module.manifest).then((function(t){e.manifest=t.data;var r=[];m()(e.manifest.languages||[],function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t,a){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("chunk-007534b9").then(n.bind(null,"1ff8"));case 2:o=e.sent.getLanguageByTag(t),r.includes(o)||r.push(o),a();case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),(function(){e.languages=r}))})),n.e("chunk-6bc4afed").then(n.t.bind(null,"1d94",7)).then((function(t){t.default.byType(e.module.repository,(function(t,n){e.downloadCount=n.zip.downloadCount}))}))},methods:{copyManifest:function(){var e=this,t=function(t){t.preventDefault(),t.clipboardData.setData("text/plain",e.module.releaseManifest||e.module.manifest)};document.addEventListener("copy",t),document.execCommand("copy"),document.removeEventListener("copy",t),this.copyAlert=!0,setTimeout((function(){e.copyAlert=!1}),2500)}}},y=b,g=(n("deb0"),n("2877")),_=n("6544"),w=n.n(_),C=n("0798"),V=n("b0af"),O=n("99d9"),k=n("cc20"),j=n("132d"),x=n("b687"),E=n("3a2f"),M=Object(g["a"])(y,c,s,!1,null,"b09ed43c",null),T=M.exports;w()(M,{VAlert:C["a"],VCard:V["a"],VCardText:O["a"],VCardTitle:O["b"],VChip:k["a"],VIcon:j["a"],VLazy:x["a"],VTooltip:E["a"]});var A={name:"ModuleList",components:{Module:T},props:{modules:Array}},P=A,L=(n("6a69"),n("62ad")),S=n("a523"),D=n("0fd9"),F=Object(g["a"])(P,i,u,!1,null,"209d245c",null),U=F.exports;w()(F,{VCol:L["a"],VContainer:S["a"],VRow:D["a"]});var z=n("5b97"),N={name:"App",components:{ModuleList:U},data:function(){return{modules:[],title:z.title}},mounted:function(){var e=this;Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEV?Promise.resolve().then((function(){var e=new Error("Cannot find module '../data/modules.json'");throw e.code="MODULE_NOT_FOUND",e})).then((function(t){e.modules=t.default})):p.a.get(z.dataUrl).then((function(t){e.modules=t.data}))}},R=N,$=(n("5c0b"),n("7496")),B=n("40dc"),J=n("f6c4"),q=Object(g["a"])(R,a,o,!1,null,null,null),I=q.exports;w()(q,{VApp:$["a"],VAppBar:B["a"],VMain:J["a"]});var G=n("f309");r["a"].use(G["a"]);var H=new G["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#555555",secondary:"#424242",accent:"#666666",error:"#FF5252",info:"#666666",success:"#4CAF50",warning:"#FFC107"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:H,render:function(e){return e(I)}}).$mount("#app")},"5b97":function(e){e.exports=JSON.parse('{"publicPath":"/","title":"VTT Red\'s Foundry Modules","dataUrl":"https://raw.githubusercontent.com/vttred/vttred.github.io/master/data/modules.json"}')},"5c0b":function(e,t,n){"use strict";n("e4c9")},"6a69":function(e,t,n){"use strict";n("8598")},"6cc5":function(e,t,n){},8598:function(e,t,n){},deb0:function(e,t,n){"use strict";n("6cc5")},e4c9:function(e,t,n){}});
//# sourceMappingURL=app.249c62fe.js.map