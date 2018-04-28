module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2);e.exports=function(n,i){var s="object"===("undefined"==typeof document?"undefined":r(document))&&"string"==typeof document.cookie,c=function(){if("object"===(void 0===n?"undefined":r(n))&&"object"===(void 0===i?"undefined":r(i))&&void 0!==e||t&&t.env&&"server"===t.env.VUE_ENV)return!0}();if(!s&&!c||s&&c)throw"Cannot detect env, something went wrong!";var a=function(e){if(c){var t=n.headers.cookie||"";return e&&(t=i.getHeaders(),t=t["set-cookie"]?t["set-cookie"].map(function(e){return e.split(";")[0]}).join(";"):""),t}if(s)return document.cookie||""},u=function(){var e=i.getHeader("Set-Cookie");return(e="string"==typeof e?[e]:e)||[]},l=function(e){return i.setHeader("Set-Cookie",e)},p={set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};if(t="object"===(void 0===t?"undefined":r(t))?JSON.stringify(t):t,c){var i=u();i.push(o.serialize(e,t,n)),l(i)}else document.cookie=o.serialize(e,t,n)},setAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Array.isArray(e)&&e.forEach(function(e){var t=e.name,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,i=e.opts,s=void 0===i?{path:"/"}:i;p.set(n,o,s)})},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],n=o.parse(a(t)),r=n[e];try{return JSON.parse(r)}catch(e){return r}},getAll:function(e){return o.parse(a(e))},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"},n=p.get(e);t.expires=new Date(0),n&&p.set(e,"",t)},removeAll:function(){var e=o.parse(a());for(var t in e)p.remove(t)}};return p},e.exports.meta=n(3)}).call(t,n(1))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){h&&d&&(h=!1,d.length?m=d.concat(m):v=-1,m.length&&c())}function c(){if(!h){var e=o(s);h=!0;for(var t=m.length;t;){for(d=m,m=[];++v<t;)d&&d[v].run();v=-1,t=m.length}d=null,h=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function u(){}var l,p,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,m=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new a(e,t)),1!==m.length||h||o(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";function r(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},r=t||{},o=e.split(a),c=r.decode||s,u=0;u<o.length;u++){var l=o[u],p=l.indexOf("=");if(!(p<0)){var f=l.substr(0,p).trim(),d=l.substr(++p,l.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==n[f]&&(n[f]=i(d,c))}}return n}function o(e,t,n){var r=n||{},o=r.encode||c;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");var i=o(t);if(i&&!u.test(i))throw new TypeError("argument val is invalid");var s=e+"="+i;if(null!=r.maxAge){var a=r.maxAge-0;if(isNaN(a))throw new Error("maxAge should be a Number");s+="; Max-Age="+Math.floor(a)}if(r.domain){if(!u.test(r.domain))throw new TypeError("option domain is invalid");s+="; Domain="+r.domain}if(r.path){if(!u.test(r.path))throw new TypeError("option path is invalid");s+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.sameSite){switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;default:throw new TypeError("option sameSite is invalid")}}return s}function i(e,t){try{return t(e)}catch(t){return e}}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
t.parse=r,t.serialize=o;var s=decodeURIComponent,c=encodeURIComponent,a=/; */,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},function(e,t){e.exports={name:"cookie-universal",version:"1.0.14",description:"Universal cookie plugin, perfect for SSR",main:"dist/cookie-universal-common.js",author:"Salvatore Tedde <microcipcip@gmail.com>",license:"MIT",bugs:"https://github.com/microcipcip/cookie-universal/issues",homepage:"https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal#readme",repository:"https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal",scripts:{build:"webpack","demo-node":"nodemon ./demo/server","demo-express":"nodemon ./demo/server-express",dev:'nodemon index.js --exec "npm run lint && node"',lint:"eslint index.js","test-nodemon":'nodemon --exec "npm run testlint && npm run mocha"',test:"npm run testlint && npm run mocha",testlint:"eslint **/*.spec.js",mocha:'mocha "./{,!(node_modules)/**/}*.spec.js"'},keywords:["universal cookie","SSR cookie","node cookie","browser cookie","cookies","cookie"],publishConfig:{access:"public"},dependencies:{cookie:"^0.3.1"},devDependencies:{"babel-core":"^6.26.0","babel-eslint":"^7.2.3","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1",chai:"^4.1.2","chai-http":"^3.0.0","clean-webpack-plugin":"^0.1.17","date-fns":"^1.29.0",eslint:"^4.3.0","eslint-config-standard":"^10.2.1","eslint-plugin-import":"^2.8.0","eslint-plugin-node":"^5.1.1","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1",express:"^4.16.2",jsdom:"^11.5.1",mocha:"^4.0.1",webpack:"^3.10.0","webpack-merge":"^4.1.1"},files:["dist/"]}}]);