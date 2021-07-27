(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"body {\n  background-color: #fff;\n  margin: 0;\n  padding: 0;\n}\n\n.inner-container {\n  justify-content: space-around;\n}\n\n.form {\n  flex-direction: column;\n}\n\n.btn {\n  border-radius: 5px;\n}\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(n[f].references++,n[f].updater(p)):n.push({identifier:u,updater:a(p,r),references:1}),i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),f=t.n(u),p=t(426),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector("body").innerHTML=' \n<div class="container mt-3">\n    <div class=" h1 font-weight-bold">Leaderboard</div>\n    <div class="row"> \n    <div class="inner-container d-flex col-md-6">\n      <div class="scores-container">\n        <div class="d-flex">\n          <div class="h4 font-weight-bold">Recent scores</div>\n          <button type="button" class="btn btn-primary btn-sm"> Refresh</button>\n        </div>\n        <div class="">\n          <table class="table table-striped mt-4">\n            <thead class="thead-dark">\n                <tr>\n                  <th class="display-5 lead text-white">Name</th>\n                  <th class="display-5 lead text-white">Scores</th>                 \n                </tr>\n            </thead>\n            <tbody id="boardList">\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class="form-container">\n        <div class="h4 font-weight-bold">Add your score</div>\n        <form action="#" class="d-flex form">\n          <input type="text" class="name form-control mb-4" placeholder="Enter name">\n          <input type="number" class="score form-control mb-4" placeholder="Enter score">\n          <input type="submit" value="submit" id="submit" class="btn btn-success btn-sm">\n        </form>\n      </div>\n    </div>\n    </div>\n  </div>\n';const v=document.querySelector("#boardList"),b=[{name:"Collins Tatang",score:70},{name:"Tatang James",score:100}];(async()=>{null!==b&&b.forEach((e=>{const n=document.createElement("tr");n.innerHTML=`\n        <td>${e.name}</td>\n        <td>${e.score}</td>\n      `,v.appendChild(n)}))})()})()})();