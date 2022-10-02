(function(){"use strict";var r={};!function(){r.d=function(n,t){for(var e in t){if(r.o(t,e)&&!r.o(n,e)){Object.defineProperty(n,e,{enumerable:true,get:t[e]})}}}}();!function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}();!function(){r.r=function(n){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(n,"__esModule",{value:true})}}();var n={};r.r(n);r.d(n,{actions:function(){return B},addAction:function(){return w},addFilter:function(){return I},applyFilters:function(){return Z},createHooks:function(){return b},currentAction:function(){return E},currentFilter:function(){return H},defaultHooks:function(){return k},didAction:function(){return $},didFilter:function(){return q},doAction:function(){return P},doingAction:function(){return M},doingFilter:function(){return R},filters:function(){return C},hasAction:function(){return O},hasFilter:function(){return j},removeAction:function(){return x},removeAllActions:function(){return S},removeAllFilters:function(){return z},removeFilter:function(){return T}});function t(n){if("string"!==typeof n||""===n){console.error("The namespace must be a non-empty string.");return false}if(!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)){console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.");return false}return true}var f=t;function e(n){if("string"!==typeof n||""===n){console.error("The hook name must be a non-empty string.");return false}if(/^__/.test(n)){console.error("The hook name cannot begin with `__`.");return false}if(!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)){console.error("The hook name can only contain numbers, letters, dashes, periods and underscores.");return false}return true}var a=e;function i(c,l){return function n(e,t,r){let i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:10;const o=c[l];if(!a(e)){return}if(!f(t)){return}if("function"!==typeof r){console.error("The hook callback must be a function.");return}if("number"!==typeof i){console.error("If specified, the hook priority must be a number.");return}const s={callback:r,priority:i,namespace:t};if(o[e]){const u=o[e].handlers;let t;for(t=u.length;t>0;t--){if(i>=u[t-1].priority){break}}if(t===u.length){u[t]=s}else{u.splice(t,0,s)}o.__current.forEach(n=>{if(n.name===e&&n.currentIndex>=t){n.currentIndex++}})}else{o[e]={handlers:[s],runs:0}}if(e!=="hookAdded"){c.doAction("hookAdded",e,t,r,i)}}}var o=i;function s(t,u){let c=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return function n(e,r){const i=t[u];if(!a(e)){return}if(!c&&!f(r)){return}if(!i[e]){return 0}let o=0;if(c){o=i[e].handlers.length;i[e]={runs:i[e].runs,handlers:[]}}else{const s=i[e].handlers;for(let t=s.length-1;t>=0;t--){if(s[t].namespace===r){s.splice(t,1);o++;i.__current.forEach(n=>{if(n.name===e&&n.currentIndex>=t){n.currentIndex--}})}}}if(e!=="hookRemoved"){t.doAction("hookRemoved",e,r)}return o}}var u=s;function c(i,o){return function n(t,e){const r=i[o];if("undefined"!==typeof e){return t in r&&r[t].handlers.some(n=>n.namespace===e)}return t in r}}var l=c;function d(f,a){let d=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return function n(t){const e=f[a];if(!e[t]){e[t]={handlers:[],runs:0}}e[t].runs++;const r=e[t].handlers;if(false){}for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++){o[s-1]=arguments[s]}if(!r||!r.length){return d?o[0]:undefined}const u={name:t,currentIndex:0};e.__current.push(u);while(u.currentIndex<r.length){const c=r[u.currentIndex];const l=c.callback.apply(null,o);if(d){o[0]=l}u.currentIndex++}e.__current.pop();if(d){return o[0]}}}var h=d;function m(i,o){return function n(){var t,e;const r=i[o];return(t=(e=r.__current[r.__current.length-1])===null||e===void 0?void 0:e.name)!==null&&t!==void 0?t:null}}var p=m;function A(r,i){return function n(t){const e=r[i];if("undefined"===typeof t){return"undefined"!==typeof e.__current[0]}return e.__current[0]?t===e.__current[0].name:false}}var v=A;function _(r,i){return function n(t){const e=r[i];if(!a(t)){return}return e[t]&&e[t].runs?e[t].runs:0}}var y=_;class g{constructor(){this.actions=Object.create(null);this.actions.__current=[];this.filters=Object.create(null);this.filters.__current=[];this.addAction=o(this,"actions");this.addFilter=o(this,"filters");this.removeAction=u(this,"actions");this.removeFilter=u(this,"filters");this.hasAction=l(this,"actions");this.hasFilter=l(this,"filters");this.removeAllActions=u(this,"actions",true);this.removeAllFilters=u(this,"filters",true);this.doAction=h(this,"actions");this.applyFilters=h(this,"filters",true);this.currentAction=p(this,"actions");this.currentFilter=p(this,"filters");this.doingAction=v(this,"actions");this.doingFilter=v(this,"filters");this.didAction=y(this,"actions");this.didFilter=y(this,"filters")}}function F(){return new g}var b=F;const k=b();const{addAction:w,addFilter:I,removeAction:x,removeFilter:T,hasAction:O,hasFilter:j,removeAllActions:S,removeAllFilters:z,doAction:P,applyFilters:Z,currentAction:E,currentFilter:H,doingAction:M,doingFilter:R,didAction:$,didFilter:q,actions:B,filters:C}=k;(window.wp=window.wp||{}).hooks=n})();