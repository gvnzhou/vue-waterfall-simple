!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,i){"use strict";e.a={name:"vue-waterfall-simple",data:function(){return{firstRowHeight:[],minHeightIdx:0,currentIdx:0,itemList:[],imgArr:[],imgCounter:0,isFirstLoading:!1,isPullLoading:!1}},props:{originData:{type:Array,required:!0},containerWidth:{type:Number,required:!0},columnWidth:{type:Number,required:!0},columnNum:{type:Number},gapWidth:{type:Number,default:30},gapHeight:{type:Number,default:30}},mounted:function(){this.handleImagesLoad()},watch:{originData:function(){this.$nextTick(function(){this.handleImagesLoad()})}},methods:{handleImagesLoad:function(){var t=this;if(!this.isFirstLoading&&!this.isPullLoading){0===this.currentIdx?this.isFirstLoading=!0:this.isPullLoading=!0,this.imgArr=this.$refs.content.getElementsByTagName("img");var e=this.imgArr.length;this.imgArr.length>0?Array.prototype.forEach.call(this.imgArr,function(i,n){if(!(n<t.imgCounter)){var r=setInterval(function(){i.complete&&(t.imgCounter++,console.log("当前计数器："+t.imgCounter),console.log("总数："+e),t.imgCounter===e&&(0===t.currentIdx?t.isFirstLoading=!1:t.isPullLoading=!1,t.$nextTick(function(){console.log("渲染"),t.renderWaterfall()})),clearInterval(r))},50);i.onerror=function(){t.imgCounter++,console.error("[Init Waterfall failed]: Image load failed")}}}):this.renderWaterfall()}},initWaterFall:function(){if(this.validator()){var t=this.containerWidth;this.itemList=this.$refs.content.childNodes;for(var e=Math.floor((t+this.gapWidth)/(this.columnWidth+this.gapWidth)),i=0;i<this.itemList.length&&i<e;i++)this.itemList[i].style.left=i*(this.columnWidth+this.gapWidth)+"px",this.itemList[i].style.width=this.columnWidth+"px",this.firstRowHeight.push(this.itemList[i].offsetHeight);this.currentIdx=i,this.renderWaterfall()}},renderWaterfall:function(){if(0===this.currentIdx)return void this.initWaterFall();this.itemList=this.$refs.content.childNodes;for(var t=this.currentIdx;t<this.itemList.length;t++)this.minHeightIdx=this.firstRowHeight.indexOf(Math.min.apply(null,this.firstRowHeight)),this.itemList[t].style.top=this.firstRowHeight[this.minHeightIdx]+this.gapHeight+"px",this.itemList[t].style.left=this.itemList[this.minHeightIdx].offsetLeft+"px",this.itemList[t].style.width=this.columnWidth+"px",this.firstRowHeight[this.minHeightIdx]+=this.gapHeight+this.itemList[t].offsetHeight;this.currentIdx=t,this.$refs.content.style.height=Math.max.apply(null,this.firstRowHeight)+"px",this.imgCounter!==this.$refs.content.getElementsByTagName("img").length&&this.handleImagesLoad()},validator:function(){return 0!==this.originData.length||(console.error("[Init Waterfall failed]: Data length must > 0"),!1)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2);n.a.install=function(t){return t.component(n.a.name,n.a)},e.default=n.a},function(t,e,i){"use strict";function n(t){i(3)}var r=i(0),s=i(9),a=i(8),o=n,l=a(r.a,s.a,!1,o,"data-v-fca50eb6",null);e.a=l.exports},function(t,e,i){var n=i(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(6)("06f973d0",n,!0,{})},function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,".waterfall-container[data-v-fca50eb6]{width:100%}.waterfall-container .first-loading[data-v-fca50eb6]{position:relative;height:100%}.waterfall-container .first-loading .loading-text[data-v-fca50eb6]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px}",""])},function(t,e){function i(t,e){var i=t[1]||"",r=t[3];if(!r)return i;if(e&&"function"==typeof btoa){var s=n(r);return[i].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([s]).join("\n")}return[i].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=i(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),e.push(a))}},e}},function(t,e,i){function n(t){for(var e=0;e<t.length;e++){var i=t[e],n=d[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(s(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var a=[],r=0;r<i.parts.length;r++)a.push(s(i.parts[r]));d[i.id]={id:i.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",c.appendChild(t),t}function s(t){var e,i,n=document.querySelector("style["+v+'~="'+t.id+'"]');if(n){if(p)return g;n.parentNode.removeChild(n)}if(x){var s=h++;n=f||(f=r()),e=a.bind(null,n,s,!1),i=a.bind(null,n,s,!0)}else n=r(),e=o.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}function a(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function o(t,e){var i=e.css,n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),m.ssrId&&t.setAttribute(v,e.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=i(7),d={},c=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,g=function(){},m=null,v="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,r){p=i,m=r||{};var s=u(t,e);return n(s),function(e){for(var i=[],r=0;r<s.length;r++){var a=s[r],o=d[a.id];o.refs--,i.push(o)}e?(s=u(t,e),n(s)):s=[];for(var r=0;r<i.length;r++){var o=i[r];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete d[o.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],n={},r=0;r<e.length;r++){var s=e[r],a=s[0],o=s[1],l=s[2],u=s[3],d={id:t+":"+r,css:o,media:l,sourceMap:u};n[a]?n[a].parts.push(d):i.push(n[a]={id:a,parts:[d]})}return i}},function(t,e){t.exports=function(t,e,i,n,r,s){var a,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,o=t.default);var u="function"==typeof o?o.options:o;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),r&&(u._scopeId=r);var d;if(s?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=d):n&&(d=n),d){var c=u.functional,f=c?u.render:u.beforeCreate;c?(u._injectStyles=d,u.render=function(t,e){return d.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,d):[d]}return{esModule:a,exports:o,options:u}}},function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"waterfall-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFirstLoading,expression:"!isFirstLoading"}],ref:"content",staticClass:"content"},[t._l(t.originData,function(e){return[t._t("default",null,null,e)]})],2),t._v(" "),t._t("first-loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFirstLoading,expression:"isFirstLoading"}],staticClass:"first-loading"},[i("span",{staticClass:"loading-text"},[t._v("Loading...")])])]),t._v(" "),t._t("pull-loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isPullLoading,expression:"isPullLoading"}],staticClass:"pull-loading"},[i("span",{staticClass:"loading-text"},[t._v("Loading2...")])])])],2)},r=[],s={render:n,staticRenderFns:r};e.a=s}]);
//# sourceMappingURL=build.js.map