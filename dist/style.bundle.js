"use strict";(self.webpackChunkformulario=self.webpackChunkformulario||[]).push([[314],{56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],A=0;A<n.length;A++){var c=n[A],s=t.base?c[0]+t.base:c[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var u=e(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(p);else{var f=o(p,t);t.byIndex=A,r.splice(A,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=e(a[i]);r[A].references--}for(var c=t(n,o),s=0;s<a.length;s++){var d=e(a[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},254:(n,r,e)=>{e.d(r,{A:()=>A});var t=e(354),o=e.n(t),a=e(314),i=e.n(a)()(o());i.push([n.id,"body {\n  color: rgb(255, 255, 255);\n  margin: 0;\n}\n\nbody::before {\n  content: \" \";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nh1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin: 1em auto;\n  padding: 0;\n  font-size: 3em;\n}\n\np {\n  font-family: 'Italianno', cursive;\n  font-weight: 300;\n  text-align: center;\n  margin: 5px auto 50px auto;\n  padding: 0;\n  font-size: 1.5em;\n}\n\n#survey-form {\n  width: 60%;\n  margin: 0 auto;\n  background-color: rgba(3, 3, 17, 0.5);\n  padding: 2em;\n  border-radius: 0.5em;\n  max-width: 800px;\n  min-width: 200px;\n}\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: auto;\n}\n\ninput,\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 0.2em;\n  margin: 10px 0 0 0;\n  border: none;\n  min-height: 1em;\n  border-radius: 0.5em;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  background-color: rgba(40, 45, 133, 0.5);\n}\n\nlabel {\n  display: block;\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  font-weight: bolder;\n}\n\n.inline {\n  display: inline-block;\n  width: unset;\n  margin: 0 0.3em;\n  padding: auto;\n  vertical-align: middle;\n}\n\ninput[type=\"submit\"] {\n  display: block;\n  width: 25vw;\n  margin: auto;\n  padding: auto;\n  color: rgb(0, 0, 0);\n  background-color: rgb(195, 185, 174);\n  border-color: rgb(0, 0, 0);\n  font-weight: bolder;\n}\n","",{version:3,sources:["webpack://./src/assets/style.css"],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,qCAAqC;EACrC,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,aAAa;AACf;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;EAC1B,mBAAmB;AACrB",sourcesContent:["body {\r\n  color: rgb(255, 255, 255);\r\n  margin: 0;\r\n}\r\n\r\nbody::before {\r\n  content: \" \";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  z-index: -1;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\nh1 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 1em auto;\r\n  padding: 0;\r\n  font-size: 3em;\r\n}\r\n\r\np {\r\n  font-family: 'Italianno', cursive;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin: 5px auto 50px auto;\r\n  padding: 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n#survey-form {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  background-color: rgba(3, 3, 17, 0.5);\r\n  padding: 2em;\r\n  border-radius: 0.5em;\r\n  max-width: 800px;\r\n  min-width: 200px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  margin: 0;\r\n  padding: auto;\r\n}\r\n\r\ninput,\r\nselect,\r\ntextarea {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.2em;\r\n  margin: 10px 0 0 0;\r\n  border: none;\r\n  min-height: 1em;\r\n  border-radius: 0.5em;\r\n  font-size: 1.2em;\r\n  font-family: 'Italianno', cursive;\r\n  color: rgb(244, 244, 244);\r\n  background-color: rgba(40, 45, 133, 0.5);\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin: 0.5em 0;\r\n  font-size: 1.2em;\r\n  font-family: 'Italianno', cursive;\r\n  color: rgb(244, 244, 244);\r\n  font-weight: bolder;\r\n}\r\n\r\n.inline {\r\n  display: inline-block;\r\n  width: unset;\r\n  margin: 0 0.3em;\r\n  padding: auto;\r\n  vertical-align: middle;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  display: block;\r\n  width: 25vw;\r\n  margin: auto;\r\n  padding: auto;\r\n  color: rgb(0, 0, 0);\r\n  background-color: rgb(195, 185, 174);\r\n  border-color: rgb(0, 0, 0);\r\n  font-weight: bolder;\r\n}\r\n"],sourceRoot:""}]);const A=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},979:(n,r,e)=>{var t=e(72),o=e.n(t),a=e(825),i=e.n(a),A=e(659),c=e.n(A),s=e(56),d=e.n(s),l=e(540),u=e.n(l),p=e(113),f=e.n(p),g=e(254),m={};m.styleTagTransform=f(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(g.A,m),g.A&&g.A.locals&&g.A.locals}},n=>{n(n.s=979)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksT0FFNUVKLEdBQU9ELEVBQUlDLElBQ1BtQyxJQUNGbkMsR0FBTyxLQUVMRCxFQUFJRSxRQUNORCxHQUFPLEtBRUxELEVBQUlJLFdBQ05ILEdBQU8sS0FFVCxJQUFJRSxFQUFZSCxFQUFJRyxVQUNoQkEsR0FBNkIsb0JBQVQwQyxPQUN0QjVDLEdBQU8sdURBQXVESCxPQUFPK0MsS0FBS0UsU0FBU0MsbUJBQW1CQyxLQUFLQyxVQUFVL0MsTUFBZSxRQUt0SVosRUFBUWdGLGtCQUFrQnRFLEVBQUtyQixFQUFjVyxFQUFRQSxRQUN2RCxDQW9CTWlGLENBQU01RixFQUFjVyxFQUFTUyxFQUMvQixFQUNBZ0IsT0FBUSxZQXJCWixTQUE0QnBDLEdBRTFCLEdBQWdDLE9BQTVCQSxFQUFhNkYsV0FDZixPQUFPLEVBRVQ3RixFQUFhNkYsV0FBVy9DLFlBQVk5QyxFQUN0QyxDQWdCTThGLENBQW1COUYsRUFDckIsRUFFSixDLHVJQ2hESVcsRUFBVSxDQUFDLEVBRWZBLEVBQVFnRixrQkFBb0IsSUFDNUJoRixFQUFRZ0UsY0FBZ0IsSUFDeEJoRSxFQUFRa0UsT0FBUyxTQUFjLEtBQU0sUUFDckNsRSxFQUFRc0IsT0FBUyxJQUNqQnRCLEVBQVErRSxtQkFBcUIsSUFFaEIsSUFBSSxJQUFTL0UsR0FLSixLQUFXLElBQVFvRixRQUFTLElBQVFBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxZW0gYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHggYXV0byA1MHB4IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4jc3VydmV5LWZvcm0ge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAzLCAxNywgMC41KTtcclxuICBwYWRkaW5nOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiBhdXRvO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC4yZW07XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtaW4taGVpZ2h0OiAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XHJcbiAgY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NSwgMTMzLCAwLjUpO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwLjVlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiB1bnNldDtcclxuICBtYXJnaW46IDAgMC4zZW07XHJcbiAgcGFkZGluZzogYXV0bztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjV2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogYXV0bztcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE4NSwgMTc0KTtcclxuICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNXB4IGF1dG8gNTBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbiNzdXJ2ZXktZm9ybSB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDE3LCAwLjUpO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NSwgMTMzLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMC41ZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XFxyXFxuICBjb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogdW5zZXQ7XFxyXFxuICBtYXJnaW46IDAgMC4zZW07XFxyXFxuICBwYWRkaW5nOiBhdXRvO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjV2dztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IGF1dG87XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTg1LCAxNzQpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsIm1vZHVsZXNUb0RvbSIsImxpc3QiLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiaXRlbSIsImlkIiwiYmFzZSIsImNvdW50IiwiY29uY2F0IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJtZWRpYSIsInNvdXJjZU1hcCIsInN1cHBvcnRzIiwibGF5ZXIiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJwdXNoIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJqb2luIiwibW9kdWxlcyIsImRlZHVwZSIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImluc2VydCIsIm1lbW8iLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwibG9jYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==