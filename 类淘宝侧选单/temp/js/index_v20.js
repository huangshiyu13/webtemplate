/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.5.4.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */

/* Display a countdown timer.
   Attach it with options like:
   $('div selector').countdown(
       {until: new Date(2009, 1 - 1, 1, 0, 0, 0), onExpiry: happyNewYear}); */

(function($) { // Hide scope, no $ conflict

/* Countdown manager. */
function Countdown() {
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		// The display texts for the counters
		labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
		// The display texts for the counters if only one
		labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
		compactLabels: ['y', 'm', 'w', 'd'], // The compact texts for the counters
		timeSeparator: ':', // Separator for time periods
		isRTL: false // True for right-to-left languages, false for left-to-right
	};
	this._defaults = {
		until: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count down to
			// or numeric for seconds offset, or string for unit offset(s):
			// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
		since: null, // new Date(year, mth - 1, day, hr, min, sec) - date/time to count up from
			// or numeric for seconds offset, or string for unit offset(s):
			// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
		timezone: null, // The timezone (hours or minutes from GMT) for the target times,
			// or null for client local
		serverSync: null, // A function to retrieve the current server time for synchronisation
		format: 'dHMS', // Format for display - upper case for always, lower case only if non-zero,
			// 'Y' years, 'O' months, 'W' weeks, 'D' days, 'H' hours, 'M' minutes, 'S' seconds
		layout: '', // Build your own layout for the countdown
		compact: false, // True to display in a compact format, false for an expanded one
		description: '', // The description displayed for the countdown
		expiryUrl: '', // A URL to load upon expiry, replacing the current page
		expiryText: '', // Text to display upon expiry, replacing the countdown
		alwaysExpire: false, // True to trigger onExpiry even if never counted down
		onExpiry: null, // Callback when the countdown expires -
			// receives no parameters and 'this' is the containing division
		onTick: null // Callback when the countdown is updated -
			// receives int[7] being the breakdown by period (based on format)
			// and 'this' is the containing division
	};
	$.extend(this._defaults, this.regional['']);
}

var PROP_NAME = 'countdown';

var Y = 0; // Years
var O = 1; // Months
var W = 2; // Weeks
var D = 3; // Days
var H = 4; // Hours
var M = 5; // Minutes
var S = 6; // Seconds

$.extend(Countdown.prototype, {
	/* Class name added to elements to indicate already configured with countdown. */
	markerClassName: 'hasCountdown',
	
	/* Shared timer for all countdowns. */
	_timer: setInterval(function() { $.countdown._updateTargets(); }, 980),
	/* List of currently active countdown targets. */
	_timerTargets: [],
	
	/* Override the default settings for all instances of the countdown widget.
	   @param  options  (object) the new settings to use as defaults */
	setDefaults: function(options) {
		this._resetExtraLabels(this._defaults, options);
		extendRemove(this._defaults, options || {});
	},

	/* Convert a date/time to UTC.
	   @param  tz     (number) the hour or minute offset from GMT, e.g. +9, -360
	   @param  year   (Date) the date/time in that timezone or
	                  (number) the year in that timezone
	   @param  month  (number, optional) the month (0 - 11) (omit if year is a Date)
	   @param  day    (number, optional) the day (omit if year is a Date)
	   @param  hours  (number, optional) the hour (omit if year is a Date)
	   @param  mins   (number, optional) the minute (omit if year is a Date)
	   @param  secs   (number, optional) the second (omit if year is a Date)
	   @param  ms     (number, optional) the millisecond (omit if year is a Date)
	   @return  (Date) the equivalent UTC date/time */
	UTCDate: function(tz, year, month, day, hours, mins, secs, ms) {
		if (typeof year == 'object' && year.constructor == Date) {
			ms = year.getMilliseconds();
			secs = year.getSeconds();
			mins = year.getMinutes();
			hours = year.getHours();
			day = year.getDate();
			month = year.getMonth();
			year = year.getFullYear();
		}
		var d = new Date();
		d.setUTCFullYear(year);
		d.setUTCDate(1);
		d.setUTCMonth(month || 0);
		d.setUTCDate(day || 1);
		d.setUTCHours(hours || 0);
		d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
		d.setUTCSeconds(secs || 0);
		d.setUTCMilliseconds(ms || 0);
		return d;
	},

	/* Attach the countdown widget to a div.
	   @param  target   (element) the containing division
	   @param  options  (object) the initial settings for the countdown */
	_attachCountdown: function(target, options) {
		var $target = $(target);
		if ($target.hasClass(this.markerClassName)) {
			return;
		}
		$target.addClass(this.markerClassName);
		var inst = {options: $.extend({}, options),
			_periods: [0, 0, 0, 0, 0, 0, 0]};
		$.data(target, PROP_NAME, inst);
		this._changeCountdown(target);
	},

	/* Add a target to the list of active ones.
	   @param  target  (element) the countdown target */
	_addTarget: function(target) {
		if (!this._hasTarget(target)) {
			this._timerTargets.push(target);
		}
	},

	/* See if a target is in the list of active ones.
	   @param  target  (element) the countdown target
	   @return  (boolean) true if present, false if not */
	_hasTarget: function(target) {
		return ($.inArray(target, this._timerTargets) > -1);
	},

	/* Remove a target from the list of active ones.
	   @param  target  (element) the countdown target */
	_removeTarget: function(target) {
		this._timerTargets = $.map(this._timerTargets,
			function(value) { return (value == target ? null : value); }); // delete entry
	},

	/* Update each active timer target. */
	_updateTargets: function() {
		for (var i = 0; i < this._timerTargets.length; i++) {
			this._updateCountdown(this._timerTargets[i]);
		}
	},

	/* Redisplay the countdown with an updated display.
	   @param  target  (jQuery) the containing division
	   @param  inst    (object) the current settings for this instance */
	_updateCountdown: function(target, inst) {
		var $target = $(target);
		inst = inst || $.data(target, PROP_NAME);
		if (!inst) {
			return;
		}
		$target.html(this._generateHTML(inst));
		$target[(this._get(inst, 'isRTL') ? 'add' : 'remove') + 'Class']('countdown_rtl');
		var onTick = this._get(inst, 'onTick');
		if (onTick) {
			onTick.apply(target, [inst._hold != 'lap' ? inst._periods :
				this._calculatePeriods(inst, inst._show, new Date())]);
		}
		var expired = inst._hold != 'pause' &&
			(inst._since ? inst._now.getTime() <= inst._since.getTime() :
			inst._now.getTime() >= inst._until.getTime());
		if (expired && !inst._expiring) {
			inst._expiring = true;
			if (this._hasTarget(target) || this._get(inst, 'alwaysExpire')) {
				this._removeTarget(target);
				var onExpiry = this._get(inst, 'onExpiry');
				if (onExpiry) {
					onExpiry.apply(target, []);
				}
				var expiryText = this._get(inst, 'expiryText');
				if (expiryText) {
					var layout = this._get(inst, 'layout');
					inst.options.layout = expiryText;
					this._updateCountdown(target, inst);
					inst.options.layout = layout;
				}
				var expiryUrl = this._get(inst, 'expiryUrl');
				if (expiryUrl) {
					window.location = expiryUrl;
				}
			}
			inst._expiring = false;
		}
		else if (inst._hold == 'pause') {
			this._removeTarget(target);
		}
		$.data(target, PROP_NAME, inst);
	},

	/* Reconfigure the settings for a countdown div.
	   @param  target   (element) the containing division
	   @param  options  (object) the new settings for the countdown or
	                    (string) an individual property name
	   @param  value    (any) the individual property value
	                    (omit if options is an object) */
	_changeCountdown: function(target, options, value) {
		options = options || {};
		if (typeof options == 'string') {
			var name = options;
			options = {};
			options[name] = value;
		}
		var inst = $.data(target, PROP_NAME);
		if (inst) {
			this._resetExtraLabels(inst.options, options);
			extendRemove(inst.options, options);
			this._adjustSettings(target, inst);
			$.data(target, PROP_NAME, inst);
			var now = new Date();
			if ((inst._since && inst._since < now) ||
					(inst._until && inst._until > now)) {
				this._addTarget(target);
			}
			this._updateCountdown(target, inst);
		}
	},

	/* Reset any extra labelsn and compactLabelsn entries if changing labels.
	   @param  base     (object) the options to be updated
	   @param  options  (object) the new option values */
	_resetExtraLabels: function(base, options) {
		var changingLabels = false;
		for (var n in options) {
			if (n.match(/[Ll]abels/)) {
				changingLabels = true;
				break;
			}
		}
		if (changingLabels) {
			for (var n in base) { // Remove custom numbered labels
				if (n.match(/[Ll]abels[0-9]/)) {
					base[n] = null;
				}
			}
		}
	},
	
	/* Calculate interal settings for an instance.
	   @param  target  (element) the containing division
	   @param  inst    (object) the current settings for this instance */
	_adjustSettings: function(target, inst) {
		var serverSync = this._get(inst, 'serverSync');
		serverSync = (serverSync ? serverSync.apply(target, []) : null);
		var now = new Date();
		var timezone = this._get(inst, 'timezone');
		timezone = (timezone == null ? -now.getTimezoneOffset() : timezone);
		inst._since = this._get(inst, 'since');
		if (inst._since) {
			inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
			if (inst._since && serverSync) {
				inst._since.setMilliseconds(inst._since.getMilliseconds() +
					now.getTime() - serverSync.getTime());
			}
		}
		inst._until = this.UTCDate(timezone, this._determineTime(this._get(inst, 'until'), now));
		if (serverSync) {
			inst._until.setMilliseconds(inst._until.getMilliseconds() +
				now.getTime() - serverSync.getTime());
		}
		inst._show = this._determineShow(inst);
	},

	/* Remove the countdown widget from a div.
	   @param  target  (element) the containing division */
	_destroyCountdown: function(target) {
		var $target = $(target);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		this._removeTarget(target);
		$target.removeClass(this.markerClassName).empty();
		$.removeData(target, PROP_NAME);
	},

	/* Pause a countdown widget at the current time.
	   Stop it running but remember and display the current time.
	   @param  target  (element) the containing division */
	_pauseCountdown: function(target) {
		this._hold(target, 'pause');
	},

	/* Pause a countdown widget at the current time.
	   Stop the display but keep the countdown running.
	   @param  target  (element) the containing division */
	_lapCountdown: function(target) {
		this._hold(target, 'lap');
	},

	/* Resume a paused countdown widget.
	   @param  target  (element) the containing division */
	_resumeCountdown: function(target) {
		this._hold(target, null);
	},

	/* Pause or resume a countdown widget.
	   @param  target  (element) the containing division
	   @param  hold    (string) the new hold setting */
	_hold: function(target, hold) {
		var inst = $.data(target, PROP_NAME);
		if (inst) {
			if (inst._hold == 'pause' && !hold) {
				inst._periods = inst._savePeriods;
				var sign = (inst._since ? '-' : '+');
				inst[inst._since ? '_since' : '_until'] =
					this._determineTime(sign + inst._periods[0] + 'y' +
						sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' +
						sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' + 
						sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');
				this._addTarget(target);
			}
			inst._hold = hold;
			inst._savePeriods = (hold == 'pause' ? inst._periods : null);
			$.data(target, PROP_NAME, inst);
			this._updateCountdown(target, inst);
		}
	},

	/* Return the current time periods.
	   @param  target  (element) the containing division
	   @return  (number[7]) the current periods for the countdown */
	_getTimesCountdown: function(target) {
		var inst = $.data(target, PROP_NAME);
		return (!inst ? null : (!inst._hold ? inst._periods :
			this._calculatePeriods(inst, inst._show, new Date())));
	},

	/* Get a setting value, defaulting if necessary.
	   @param  inst  (object) the current settings for this instance
	   @param  name  (string) the name of the required setting
	   @return  (any) the setting's value or a default if not overridden */
	_get: function(inst, name) {
		return (inst.options[name] != null ?
			inst.options[name] : $.countdown._defaults[name]);
	},

	/* A time may be specified as an exact value or a relative one.
	   @param  setting      (string or number or Date) - the date/time value
	                        as a relative or absolute value
	   @param  defaultTime  (Date) the date/time to use if no other is supplied
	   @return  (Date) the corresponding date/time */
	_determineTime: function(setting, defaultTime) {
		var offsetNumeric = function(offset) { // e.g. +300, -2
			var time = new Date();
			time.setTime(time.getTime() + offset * 1000);
			return time;
		};
		var offsetString = function(offset) { // e.g. '+2d', '-4w', '+3h +30m'
			offset = offset.toLowerCase();
			var time = new Date();
			var year = time.getFullYear();
			var month = time.getMonth();
			var day = time.getDate();
			var hour = time.getHours();
			var minute = time.getMinutes();
			var second = time.getSeconds();
			var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
			var matches = pattern.exec(offset);
			while (matches) {
				switch (matches[2] || 's') {
					case 's': second += parseInt(matches[1], 10); break;
					case 'm': minute += parseInt(matches[1], 10); break;
					case 'h': hour += parseInt(matches[1], 10); break;
					case 'd': day += parseInt(matches[1], 10); break;
					case 'w': day += parseInt(matches[1], 10) * 7; break;
					case 'o':
						month += parseInt(matches[1], 10); 
						day = Math.min(day, $.countdown._getDaysInMonth(year, month));
						break;
					case 'y':
						year += parseInt(matches[1], 10);
						day = Math.min(day, $.countdown._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset);
			}
			return new Date(year, month, day, hour, minute, second, 0);
		};
		var time = (setting == null ? defaultTime :
			(typeof setting == 'string' ? offsetString(setting) :
			(typeof setting == 'number' ? offsetNumeric(setting) : setting)));
		if (time) time.setMilliseconds(0);
		return time;
	},

	/* Determine the number of days in a month.
	   @param  year   (number) the year
	   @param  month  (number) the month
	   @return  (number) the days in that month */
	_getDaysInMonth: function(year, month) {
		return 32 - new Date(year, month, 32).getDate();
	},

	/* Generate the HTML to display the countdown widget.
	   @param  inst  (object) the current settings for this instance
	   @return  (string) the new HTML for the countdown display */
	_generateHTML: function(inst) {
		// Determine what to show
		inst._periods = periods = (inst._hold ? inst._periods :
			this._calculatePeriods(inst, inst._show, new Date()));
		// Show all 'asNeeded' after first non-zero value
		var shownNonZero = false;
		var showCount = 0;
		for (var period = 0; period < inst._show.length; period++) {
			shownNonZero |= (inst._show[period] == '?' && periods[period] > 0);
			inst._show[period] = (inst._show[period] == '?' && !shownNonZero ? null : inst._show[period]);
			showCount += (inst._show[period] ? 1 : 0);
		}
		var compact = this._get(inst, 'compact');
		var layout = this._get(inst, 'layout');
		var labels = (compact ? this._get(inst, 'compactLabels') : this._get(inst, 'labels'));
		var timeSeparator = this._get(inst, 'timeSeparator');
		var description = this._get(inst, 'description') || '';
		var showCompact = function(period) {
			var labelsNum = $.countdown._get(inst, 'compactLabels' + periods[period]);
			return (inst._show[period] ? periods[period] +
				(labelsNum ? labelsNum[period] : labels[period]) + ' ' : '');
		};
		var showFull = function(period) {
			var labelsNum = $.countdown._get(inst, 'labels' + periods[period]);
			return (inst._show[period] ?
				'<span class="countdown_section"><span class="countdown_amount">' +
				periods[period] + '</span><br/>' +
				(labelsNum ? labelsNum[period] : labels[period]) + '</span>' : '');
		};
		return (layout ? this._buildLayout(inst, layout, compact) :
			((compact ? // Compact version
			'<span class="countdown_row countdown_amount' +
			(inst._hold ? ' countdown_holding' : '') + '">' + 
			showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) + 
			(inst._show[H] ? this._minDigits(periods[H], 2) : '') +
			(inst._show[M] ? (inst._show[H] ? timeSeparator : '') +
			this._minDigits(periods[M], 2) : '') +
			(inst._show[S] ? (inst._show[H] || inst._show[M] ? timeSeparator : '') +
			this._minDigits(periods[S], 2) : '') :
			// Full version
			'<span class="countdown_row countdown_show' + showCount +
			(inst._hold ? ' countdown_holding' : '') + '">' +
			showFull(Y) + showFull(O) + showFull(W) + showFull(D) +
			showFull(H) + showFull(M) + showFull(S)) + '</span>' +
			(description ? '<span class="countdown_row countdown_descr">' + description + '</span>' : '')));
	},

	/* Construct a custom layout.
	   @param  inst     (object) the current settings for this instance
	   @param  layout   (string) the customised layout
	   @param  compact  (boolean) true if using compact labels
	   @return  (string) the custom HTML */
	_buildLayout: function(inst, layout, compact) {
		var labels = this._get(inst, (compact ? 'compactLabels' : 'labels'));
		var labelFor = function(index) {
			return ($.countdown._get(inst,
				(compact ? 'compactLabels' : 'labels') + inst._periods[index]) ||
				labels)[index];
		};
		var digit = function(value, position) {
			return Math.floor(value / position) % 10;
		};
		var subs = {desc: this._get(inst, 'description'), sep: this._get(inst, 'timeSeparator'),
			yl: labelFor(Y), yn: inst._periods[Y], ynn: this._minDigits(inst._periods[Y], 2),
			ynnn: this._minDigits(inst._periods[Y], 3), y1: digit(inst._periods[Y], 1),
			y10: digit(inst._periods[Y], 10), y100: digit(inst._periods[Y], 100),
			ol: labelFor(O), on: inst._periods[O], onn: this._minDigits(inst._periods[O], 2),
			onnn: this._minDigits(inst._periods[O], 3), o1: digit(inst._periods[O], 1),
			o10: digit(inst._periods[O], 10), o100: digit(inst._periods[O], 100),
			wl: labelFor(W), wn: inst._periods[W], wnn: this._minDigits(inst._periods[W], 2),
			wnnn: this._minDigits(inst._periods[W], 3), w1: digit(inst._periods[W], 1),
			w10: digit(inst._periods[W], 10), w100: digit(inst._periods[W], 100),
			dl: labelFor(D), dn: inst._periods[D], dnn: this._minDigits(inst._periods[D], 2),
			dnnn: this._minDigits(inst._periods[D], 3), d1: digit(inst._periods[D], 1),
			d10: digit(inst._periods[D], 10), d100: digit(inst._periods[D], 100),
			hl: labelFor(H), hn: inst._periods[H], hnn: this._minDigits(inst._periods[H], 2),
			hnnn: this._minDigits(inst._periods[H], 3), h1: digit(inst._periods[H], 1),
			h10: digit(inst._periods[H], 10), h100: digit(inst._periods[H], 100),
			ml: labelFor(M), mn: inst._periods[M], mnn: this._minDigits(inst._periods[M], 2),
			mnnn: this._minDigits(inst._periods[M], 3), m1: digit(inst._periods[M], 1),
			m10: digit(inst._periods[M], 10), m100: digit(inst._periods[M], 100),
			sl: labelFor(S), sn: inst._periods[S], snn: this._minDigits(inst._periods[S], 2),
			snnn: this._minDigits(inst._periods[S], 3), s1: digit(inst._periods[S], 1),
			s10: digit(inst._periods[S], 10), s100: digit(inst._periods[S], 100)};
		var html = layout;
		// Replace period containers: {p<}...{p>}
		for (var i = 0; i < 7; i++) {
			var period = 'yowdhms'.charAt(i);
			var re = new RegExp('\\{' + period + '<\\}(.*)\\{' + period + '>\\}', 'g');
			html = html.replace(re, (inst._show[i] ? '$1' : ''));
		}
		// Replace period values: {pn}
		$.each(subs, function(n, v) {
			var re = new RegExp('\\{' + n + '\\}', 'g');
			html = html.replace(re, v);
		});
		return html;
	},

	/* Ensure a numeric value has at least n digits for display.
	   @param  value  (number) the value to display
	   @param  len    (number) the minimum length
	   @return  (string) the display text */
	_minDigits: function(value, len) {
		value = '0000000000' + value;
		return value.substr(value.length - len);
	},

	/* Translate the format into flags for each period.
	   @param  inst  (object) the current settings for this instance
	   @return  (string[7]) flags indicating which periods are requested (?) or
	            required (!) by year, month, week, day, hour, minute, second */
	_determineShow: function(inst) {
		var format = this._get(inst, 'format');
		var show = [];
		show[Y] = (format.match('y') ? '?' : (format.match('Y') ? '!' : null));
		show[O] = (format.match('o') ? '?' : (format.match('O') ? '!' : null));
		show[W] = (format.match('w') ? '?' : (format.match('W') ? '!' : null));
		show[D] = (format.match('d') ? '?' : (format.match('D') ? '!' : null));
		show[H] = (format.match('h') ? '?' : (format.match('H') ? '!' : null));
		show[M] = (format.match('m') ? '?' : (format.match('M') ? '!' : null));
		show[S] = (format.match('s') ? '?' : (format.match('S') ? '!' : null));
		return show;
	},
	
	/* Calculate the requested periods between now and the target time.
	   @param  inst  (object) the current settings for this instance
	   @param  show  (string[7]) flags indicating which periods are requested/required
	   @param  now   (Date) the current date and time
	   @return  (number[7]) the current time periods (always positive)
	            by year, month, week, day, hour, minute, second */
	_calculatePeriods: function(inst, show, now) {
		// Find endpoints
		inst._now = now;
		inst._now.setMilliseconds(0);
		var until = new Date(inst._now.getTime());
		if (inst._since && now.getTime() < inst._since.getTime()) {
			inst._now = now = until;
		}
		else if (inst._since) {
			now = inst._since;
		}
		else {
			until.setTime(inst._until.getTime());
			if (now.getTime() > inst._until.getTime()) {
				inst._now = now = until;
			}
		}
		// Calculate differences by period
		var periods = [0, 0, 0, 0, 0, 0, 0];
		if (show[Y] || show[O]) {
			// Treat end of months as the same
			var lastNow = $.countdown._getDaysInMonth(now.getFullYear(), now.getMonth());
			var lastUntil = $.countdown._getDaysInMonth(until.getFullYear(), until.getMonth());
			var sameDay = (until.getDate() == now.getDate() ||
				(until.getDate() >= Math.min(lastNow, lastUntil) &&
				now.getDate() >= Math.min(lastNow, lastUntil)));
			var getSecs = function(date) {
				return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
			};
			var months = Math.max(0,
				(until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() +
				((until.getDate() < now.getDate() && !sameDay) ||
				(sameDay && getSecs(until) < getSecs(now)) ? -1 : 0));
			periods[Y] = (show[Y] ? Math.floor(months / 12) : 0);
			periods[O] = (show[O] ? months - periods[Y] * 12 : 0);
			// Adjust for months difference and end of month if necessary
			var adjustDate = function(date, offset, last) {
				var wasLastDay = (date.getDate() == last);
				var lastDay = $.countdown._getDaysInMonth(date.getFullYear() + offset * periods[Y],
					date.getMonth() + offset * periods[O]);
				if (date.getDate() > lastDay) {
					date.setDate(lastDay);
				}
				date.setFullYear(date.getFullYear() + offset * periods[Y]);
				date.setMonth(date.getMonth() + offset * periods[O]);
				if (wasLastDay) {
					date.setDate(lastDay);
				}
				return date;
			};
			if (inst._since) {
				until = adjustDate(until, -1, lastUntil);
			}
			else {
				now = adjustDate(new Date(now.getTime()), +1, lastNow);
			}
		}
		var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
		var extractPeriod = function(period, numSecs) {
			periods[period] = (show[period] ? Math.floor(diff / numSecs) : 0);
			diff -= periods[period] * numSecs;
		};
		extractPeriod(W, 604800);
		extractPeriod(D, 86400);
		extractPeriod(H, 3600);
		extractPeriod(M, 60);
		extractPeriod(S, 1);
		return periods;
	}
});

/* jQuery extend now ignores nulls!
   @param  target  (object) the object to update
   @param  props   (object) the new settings
   @return  (object) the updated object */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] == null) {
			target[name] = null;
		}
	}
	return target;
}

/* Process the countdown functionality for a jQuery selection.
   @param  command  (string) the command to run (optional, default 'attach')
   @param  options  (object) the new settings to use for these countdown instances
   @return  (jQuery) for chaining further calls */
$.fn.countdown = function(options) {
	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (options == 'getTimes') {
		return $.countdown['_' + options + 'Countdown'].
			apply($.countdown, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		if (typeof options == 'string') {
			$.countdown['_' + options + 'Countdown'].apply($.countdown, [this].concat(otherArgs));
		}
		else {
			$.countdown._attachCountdown(this, options);
		}
	});
};

/* Initialise the countdown functionality. */
$.countdown = new Countdown(); // singleton instance

})(jQuery);

jQuery.extend({
  getCookie : function(sName) {
    var aCookie = document.cookie.split("; ");
    for (var i=0; i < aCookie.length; i++){
      var aCrumb = aCookie[i].split("=");
      if (sName == aCrumb[0]) return decodeURIComponent(aCrumb[1]);
    }
    return '';
  },
  setCookie : function(sName, sValue, sExpires, spath, sdomain, secure) {
    var sCookie = sName + "=" + encodeURIComponent(sValue);
    if (sExpires != null) sCookie += "; expires=" + sExpires;
    if (spath != null) sCookie += "; path=" + spath;
    if (sdomain != null) sCookie += "; domain=" + sdomain;
    if (secure != null) sCookie += "; secure=" + secure;
    document.cookie = sCookie;
  },
  removeCookie : function(sName) {
    document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
  }
});

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + ( 60 * 1000 ));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

//add by caiwen 合并两个json对象
$.mergeJsonObject = function(jsonbject1, jsonbject2)
{
    var resultJsonObject={};
    for(var attr in jsonbject1){
        resultJsonObject[attr]=jsonbject1[attr];
    }
    for(var attr in jsonbject2){
        resultJsonObject[attr]=jsonbject2[attr];
    }
    return resultJsonObject;
};




function drop_confirm(msg, url){
    if(confirm(msg)){
        window.location = url;
    }
}

/* 显示Ajax表单 */
function ajax_form(id, title, url, width)
{
    if (!width)
    {
        width = 400;
    }
    var d = DialogManager.create(id);
    d.setTitle(title);
    d.setContents('ajax', url);
    d.setWidth(width);
    d.show('center');

    return d;
}
/*修改VIP店铺装修自定义分类为中文特殊字符不能编辑的BUG， by guokai 20130409*/
function ajax_form_catename(id, title, url, width,name)
{
    if (!width)
    {
        width = 400;
    }
    var d = DialogManager.create(id),content;
    d.setTitle(title);
    $.ajax({
        type:"post",
        async:false,
        url:url,
        data:"index_part_name="+name,
        success: function(msg){
          content = msg;
        }
    })
    d.setContents(content);
    d.setWidth(width);
    d.show('center');

    return d;
}

function go(url){
    window.location = url;
}

function change_captcha(jqObj){
    jqObj.attr('src', SITE_URL+'/index.php?app=captcha&' + Math.round(Math.random()*10000));
}

/* 格式化金额 */
function price_format(price){
    if(typeof(PRICE_FORMAT) == 'undefined'){
        PRICE_FORMAT = '&yen;%s';
    }
    price = number_format(price, 2);

    return PRICE_FORMAT.replace('%s', price);
}

function number_format(num, ext){
    if(ext < 0){
        return num;
    }
    num = Number(num);
    if(isNaN(num)){
        num = 0;
    }
    var _str = num.toString();
    var _arr = _str.split('.');
    var _int = _arr[0];
    var _flt = _arr[1];
    if(_str.indexOf('.') == -1){
        /* 找不到小数点，则添加 */
        if(ext == 0){
            return _str;
        }
        var _tmp = '';
        for(var i = 0; i < ext; i++){
            _tmp += '0';
        }
        _str = _str + '.' + _tmp;
    }else{
        if(_flt.length == ext){
            return _str;
        }
        /* 找得到小数点，则截取 */
        if(_flt.length > ext){
            _str = _str.substr(0, _str.length - (_flt.length - ext));
            if(ext == 0){
                _str = _int;
            }
        }else{
            for(var i = 0; i < ext - _flt.length; i++){
                _str += '0';
            }
        }
    }

    return _str;
}

/* 收藏商品 */
function collect_goods(id)
{
    var url = SITE_URL + '/index.php?app=my_favorite&act=add&type=goods&ajax=1';
    $.getJSON(url, {'item_id':id}, function(data){
        if(data.done){
            if(data.msg != 'already_collect')
            {
                $('#fav-pop').removeClass('remove');
                $('#my_fav_count').html(data.msg[0].c);
                return;
            }
            alert('您已经收藏该商品');
        }else{
            show_dialog("您尚未登录", "login_cart");
            change_captcha($('#captcha'));
            $(".ui-widget-header").hide();
            $(".ui-widget-content").width(rl_default_style.width).css({ padding: "0px", margin: "0px" });
            return false;
        }
    });
}

/* 收藏店铺 */
function collect_store(id)
{
    var url = SITE_URL + '/index.php?app=my_favorite&act=add&type=store&jsoncallback=?&ajax=1';
    $.getJSON(url, {'item_id':id}, function(data){
        if(data.done){
            alert(data.msg);
        }else{
            alert(data.msg);
            window.location.href=SITE_URL + '/index.php?app=member&act=login';
        }
    });
}
/* 火狐下取本地全路径 */
function getFullPath(obj)
{
    if(obj)
    {
        //ie
        if (window.navigator.userAgent.indexOf("MSIE")>=1)
        {
            obj.select();
            return document.selection.createRange().text;
        }
        //firefox
        else if(window.navigator.userAgent.indexOf("Firefox")>=1)
        {
            if(obj.files)
            {
                return obj.files.item(0).getAsDataURL();
            }
            return obj.value;
        }
        return obj.value;
    }
}

/**
 *    启动邮件队列
 *
 *    @author    Garbin
 *    @param     string req_url
 *    @return    void
 */
function sendmail(req_url)
{
    $(function(){
        var _script = document.createElement('script');
        _script.type = 'text/javascript';
        _script.src  = req_url;
        document.getElementsByTagName('head')[0].appendChild(_script);
    });
}
/* 转化JS跳转中的 ＆ */
function transform_char(str)
{
    if(str.indexOf('&'))
    {
        str = str.replace(/&/g, "%26");
    }
    return str;
}



/* 查找 */
var DoSearch = {
      location : 'index.php?app=search',
      condition : '',
      curl : function (json) {
          this[json.type](json);

          if( this.condition )
               window.location.replace( this.location + this.condition );
          else
             alert( '搜索条件不能为空.' );
      },
      price : function () {
            var mixprice = maxprice = 0;

            try{
                var Tmp = 0;
                mixprice = jQuery('#mixprice').val();
                maxprice = jQuery('#maxprice').val();

                if( !mixprice && maxprice ) {
                     mixprice = maxprice;
                     maxprice = 0;
                } else if ( mixprice && maxprice )  {
                    if( mixprice * 1 > maxprice * 1 ) {
                        Tmp = maxprice;
                        maxprice = mixprice;
                        mixprice = Tmp;
                    } else if ( mixprice * 1 == maxprice * 1 ) {
                        mixprice = maxprice;
                        maxprice = 0;
                    }
                }
            } catch(ex) {}

            this.condition = '&price=' + ( mixprice ? mixprice * 1 : 0 ) + ( maxprice ? '-' + maxprice * 1 : '' );
      },
      keyword : function () {

            var keyword = '';
            try{
                keyword = jQuery('#keyword').val();
            } catch(ex) {}

            this.condition = '&keyword=' + keyword;

      },
      region : function (json) {

          this.condition = '&region_id=' + json.region_id + ( json.action ? '&act=' + json.action : '' );

      }
}

/**
 * 第三方Im调用
 * 目前支持QQ,旺旺
 **/
function imTalk(json) {
    var uri = '';

    switch(json.im) {
        case 'qq':
           uri = 'tencent://message/?uin=' + json.no + '&amp;Site=' + json.name + '&amp;Menu=yes';
        break;
        case 'ww':
            uri = 'http://amos.im.alisoft.com/msg.aw?v=2&uid=' + json.no + '&site=cntaobao&s=2&charset=utf8';
        break;
    }

    document.getElementById('doFrame').src = uri;
}

function show_district(json, seletced){
    var i = k = items = '';
    for(i in json) {
        items += '<option value="' + json[i].parent.districtid + '|' + json[i].parent.name +  '" ' + (seletced == json[i].parent.districtid ? 'selected' : '' ) + '>' + json[i].parent.name + '</option>';

        if('undefined' != typeof(json[i].child)){
            k = '';
            for( k in json[i].child){
                items += '<option value="' + json[i].child[k].districtid + '|' + json[i].child[k].name + '" ' + (seletced == json[i].child[k].districtid ? 'selected' : '' ) + '>--' + json[i].child[k].name + '</option>';
            }
        }
    }
    $('#show_district').append('<select name="district">' + items + '</select>');
}

//计算字符数，一个中文2个字符
function fLen(Obj){
  var nCNLenth = 0;
  var nLenth = Obj.length;
  for (var i=0; i<nLenth; i++){
    if(Obj.charCodeAt(i)>255){
      nCNLenth += 3;
    }else{
      nCNLenth++;
    }
  }
  return nCNLenth;
}
//翻页函数
//function TrunTo() {
//    var page = jQuery("#CurrPage").val();
//    var replace_url = "";
//    if(jQuery("#replace_url").val() != undefined) {
//        replace_url = jQuery("#replace_url").val();
//    }
//    if(replace_url != "") {
//        var params = replace_url.split('&');
//        for (var i = 0; i < params.length; i++)
//        {
//            param = params[i];
//            arr   = param.split('=');
//            pKey  = arr[0];
//            if (pKey == 'page')
//            {
//                    params[i] = pKey + '=' + page;
//            }
//        }
//        location.assign(params.join('&'));
//        return;
//    }
//    replaceParam('page', page, replace_url);
//}
function TrunTo() {
    var replace_url = get_current_page_url();
    var page = jQuery("#CurrPage").val();
    replace_url = replace_url.replace(/(\-page[\d]+)?\.html/i, '');
    replace_url += '-page'+page+'.html';

    if(replace_url != "")location.assign(replace_url);
}
function get_current_page_url() {
    var url = "";
    if($("#replace_url") != undefined) {
        url = $("#replace_url").val();
    }
    if(url == "")url = location.href;
    return url;
}
function replaceParam(key, value, url)
{
    if(location.search==''){
        var local = SITE_URL + '/index.php?app=search';
    }else{
        var params = location.search.substr(1).split('&');
        var found  = false;
        for (var i = 0; i < params.length; i++)
        {
                param = params[i];
                arr   = param.split('=');
                pKey  = arr[0];
                if (pKey == 'page')
                {
                        params[i] = 'page=1';
                }
                if (pKey == key)
                {
                        params[i] = key + '=' + value;
                        found = true;
                }
        }
        if (!found)
        {
                value = transform_char(value);
                params.push(key + '=' + value);
        }
        var local = url ? SITE_URL + '/' + url + params.join('&') : SITE_URL + '/index.php?' + params.join('&');
    }
    location.assign(local);
}

//跳转链接 add by caiwen 
function goUrl(url) {
    if (window.event) {
        window.event.returnValue = false;
    }
    window.location.href = url;
}

/* base64加密解密 add by caiwen 
 * */

function Base64() {  
       
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}  




function isKeyTrigger(e,keyCode){
    var argv = isKeyTrigger.arguments;
    var argc = isKeyTrigger.arguments.length;
    var bCtrl = false;
    if(argc > 2){
        bCtrl = argv[2];
    }
    var bAlt = false;
    if(argc > 3){
        bAlt = argv[3];
    }

    var nav4 = window.Event ? true : false;

    if(typeof e == 'undefined') {
        e = event;
    }

    if( bCtrl &&
        !((typeof e.ctrlKey != 'undefined') ?
            e.ctrlKey : e.modifiers & Event.CONTROL_MASK > 0)){
        return false;
    }
    if( bAlt &&
        !((typeof e.altKey != 'undefined') ?
            e.altKey : e.modifiers & Event.ALT_MASK > 0)){
        return false;
    }
    var whichCode = 0;
    if (nav4) whichCode = e.which;
    else if (e.type == "keypress" || e.type == "keydown")
        whichCode = e.keyCode;
    else whichCode = e.button;

    return (whichCode == keyCode);
}



//add by caiwen js 模拟php in_array
function in_array(needle, haystack) {
    if (typeof needle == 'string' || typeof needle == 'number') {
        for ( var i in haystack) {
            if (haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}

//add by caiwen js 模拟php in_array
function in_array_id(needle, haystack) {
    if (typeof needle == 'string' || typeof needle == 'number') {
        for ( var i in haystack) {
            if (haystack[i] == needle) {
                return i;
            }
        }
    }
    return false;
}

/**
 * @author caiwen
 * 动态加载js and css
 * @param url
 * @returns {Boolean}
 */
function loadUi()
{
    if(!arguments.length) return;    
    for(var i=0;i<arguments.length;i++)
    {
        type1=arguments[i].substr(arguments[i].lastIndexOf(".")+1);
        var hvQ = type1.indexOf('?');
        if(hvQ>0){
            type=type1.substr(0,hvQ);
        }else{
            type=type1;
        }
        if(type == 'css')
        {   
            $('head').append($('<link />').attr({href:arguments[i],type:'text/css',rel:'stylesheet'}));
        }
        else if(type=='js')
        {  
            $('head').append( $('<script src="'+arguments[i]+'" type="text/javascript"></script>'));
        }
    }
    return true;
}
/**
 * @author caiwen
 * js 单例
 */
var singleton = function( fn ){
    var result;
    return function(){
        return result || ( result = fn .apply( this, arguments ) );
    }
}

/** add by caiwen
 * 重写document.write实现无阻塞加载script
 * @param { Dom Object } textarea元素
*/
var loadScript = function( elem ){
    
        var url = elem.value.match( /src="([\s\S]*?)"/i )[1],
            parent = elem.parentNode,
            // 缓存原生的document.write
        docWrite = document.write, 
            // 创建一个新script来加载
            script = document.createElement( 'script' ),
            head = document.head ||
                document.getElementsByTagName( 'head' )[0] ||
                document.documentElement;
         
        // 重写document.write
        document.write = function( text ){
            parent.innerHTML = text;
        };
     
        script.type = 'text/javascript';
        script.src = url;
         
        script.onerror =
        script.onload =
        script.onreadystatechange = function( e ){
            e = e || window.event;
            if( !script.readyState ||
            /loaded|complete/.test(script.readyState) ||
            e === 'error'
            ){
     
                // 恢复原生的document.write
                document.write = docWrite;
                head.removeChild( script );
                 
                // 卸载事件和断开DOM的引用
                // 尽量避免内存泄漏
                head =         
                parent =
                elem =
                script =
                script.onerror =
                script.onload =
                script.onreadystatechange = null;
     
            }
        }
         
        // 加载script
        head.insertBefore( script, head.firstChild );
    };
    

/* 创建一个iframe跨域 http请求 add by caiwen 还需完善
 * */
function iframeRequest() {

    if (arguments.length == 0) {
        try {
             //console.log('arg miss');
        } catch (B) {
            return 0
        }
        return;
    }
    if (typeof arguments[0] != 'string' || typeof arguments[1] != 'object') {
        window.status = "调用iframeRequest方法时参数错误";
        return;
    }
    //console.log(arguments[0], arguments[1]);
    var $urlpam='';
    for(var i in arguments[1])
    {
        if(i) $urlpam+='&'+i+'='+arguments[1][i];
    }
    var requesUrl=arguments[0]+$urlpam;
    (function(u,d){
            var i=d.createElement('iframe');
            i.src=u;i.style.display='none';
            d.body.appendChild(i);
     })(requesUrl,document);

}

/**
 * @author wengxianhu
 * owa跟踪点击量(如广告等)
 * @param array $owa_array
 * @return void
 */
 function owa_ad_clicks($owa_array)
 {
    //<![CDATA[
    var p_owa_baseUrl    = 'http://owa.elmall.com/';
    var p_ecm_store_id   = $owa_array['store_id'];
    var p_ecm_type       = $owa_array['type'];
    var p_ecm_type_value = $owa_array['type_value'];
    var p_owa_cmds = p_owa_cmds || [];
    p_owa_cmds.push(['setSiteId', '9f89da39c5475ac0fe231d796f8214ca']);
    p_owa_cmds.push(['trackAdClicks']);
    
    (function() {
        var p__owa = document.createElement('script'); p__owa.type = 'text/javascript'; p__owa.async = true;
        p_owa_baseUrl = ('https:' == document.location.protocol ? window.p_owa_baseSecUrl || p_owa_baseUrl.replace(/http:/, 'https:') : p_owa_baseUrl );
        p__owa.src = p_owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
        var p__owa_s = document.getElementsByTagName('script')[0]; p__owa_s.parentNode.insertBefore(p__owa, p__owa_s);
    }());
    //]]>
 }

 function addBookmark(title, url) {
    if (!title) title = window.title;
    if (!url) url = document.location.href;
    try
    {
        window.external.addFavorite(url, title);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

/**
 * 设置 document.domain，以处理js的跨域问题
 * 
 * @returns {undefined}
 */
function set_domain() {
    var domain_array = document.domain.split('.');
    //如果在其它已经设置过document.domain，则当前也要设置
    if (domain_array.length > 2) {
        var host_array = window.location.host.split('.');
        document.domain = host_array[1] + '.' + host_array[2];
    }
} 

/**
 * 检测是否包含敏感代码
 * @param {type} content
 * @returns {undefined}
 */
function has_sensitive_code(content) {
    var secure_list = new Array('<script', '</script>', '<\/script>', '<javascript', '<iframe', '</iframe', 
        'createelement', 'innerhtml', 'appendchild', 'replacechild', 'javascript:', 'onerror', 'onclick',
        'onmouseover', 'onmouseout', 'onload', 'onunload', 'onkeyup', 'onkeypress', 'onchange', 'onmousedown',
        'onmouseup', '/*', '*/', '`'
    );
        
    var has_s_code = false;
    for (i = 0; i < secure_list.length; i++) {
        if (content.toLowerCase().indexOf(secure_list[i]) >= 0) {
            has_s_code = true;
            break;
        }
    }
    
    return has_s_code;
}


/**
 * 判断字段串长度
 */
function str_len(str) {
    var n = 0;
    if (str != "") {
        for (var i = 0; i < str.length; i++) {
            //判断是否为中文
            if (str.charCodeAt(i) > 255) {
                n = n + 2;
            }
            else {
                n = n + 1;
            }
        }
    }
    
    return n;
}
$(function() {
        // Tab组件
    $('div[tabAction]').each(function(index) {
        $this_action = $(this).attr('tabAction');
        $(this).find('.tab-trigger-item').bind($this_action,
        function() {
            //切换取消选中 add by lerence 2013-07-24
            if(!$(this).hasClass('tab-trigger-item-current'))
            {
                $('#ebank_type_tip').html('');
                $('.tab-cnt input[type=radio]').attr('checked',false);
            }
            $(this).addClass('tab-trigger-item-current').siblings().removeClass('tab-trigger-item-current').parents('.tab-trigger').siblings('.tab-cnt').children('.tab-cnt-item').removeClass('tab-cnt-item-current').end().children('.tab-cnt-item:eq(' + $(this).parent().children().index($(this)) + ')').addClass('tab-cnt-item-current');
        });
    });
        //第一个tab加载图片
    $(".tab-trigger-item-current").find('img').each(function(){
        var src =$(this).attr('lazy-src');
        if (src){
            $(this).attr("src",src).removeAttr("lazy-src");
        }
    });
        // Menu组件
    if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style){
        $('.menu').hover(
        function(){
            $(this).addClass('menu-hover')
        
        }
        ,
        function(){
            $(this).removeClass('menu-hover')
        
        });
    }
    
    $('.tab-cnt input[type=radio]').click(function(){
        $('#ebank_type_tip').html('');
    });

});
$(function() {
	/* 通栏-商品导航 */
	$("#sitenav .q-product .menu-bd dl").each(function(index){
  		if((index+1) %5 == 0){
			$(this).after('<div class="clear"></div>')
		}
	});
		/* 通栏-店铺导航数据载入 */
	/* 移动到店铺导航的时候加载分类 */
	$("#store_by_list").mouseenter(function(){
		if ($(this).parent().find(".store-group").length == 0) {
			/***加载店铺按分类排序***/
			$.get("index.php?app=channel&act=get_store_by_cate", {
				id: 124,
				cate_name: '女装'
			
			}
			,
			function(redata) {
				$("#sitenav .q-category .content").html(redata);
				return false;
			})
						/***加载店铺按拼音排序***/
			$.get("eelly-get-store-py-A.html",
			function(redata) {
				$($("#sitenav .q-letter  a[title='A']")).parent().addClass('current').siblings().removeClass('current');
				$("#sitenav .q-letter .content").html(redata);
				return false;
			});
		}
	}
	);
		/* 按分类排序 */
	$('#sitenav .q-category .title a').bind('click',
	function() {
		$('#sitenav .q-category .store-group').hide();
		var id = $(this).attr('c_id');
		var cate_name = $(this).attr('title');
		if ($("#by_cate_" + id).length == 0) {
			if($('#sitenav .q-category .loading').length == 0){
				$('#sitenav .q-category .content').append('<div class="loading"></div>');
			}
			$.get('index.php?app=channel&act=get_store_by_cate', {
				id: id,
				cate_name: cate_name
			
			}
			,
			function(redata) {
				$('#sitenav .q-category .loading').remove();
				$("#sitenav .q-category .content").append(redata);
			});
		}
		$("#by_cate_" + id).show();
		return false;
	});
	$('#sitenav .q-category .more').live('click',
	function() {
		var url = $(this).attr('href');
		var obj = $(this);
		$.get(url,
		function(redata) {
			obj.parent().before(redata).remove();
		});
		return false;
	});
		/* 按字母排序 */
	$('#sitenav .q-letter .title a').bind('click',
	function() {
		$('#sitenav .q-letter .store-group').hide();
		var by = $(this).attr('title');
		$(this).parent().addClass('current').siblings().removeClass('current');
		if ($("#by_py_" + by).length == 0) {
			if($('#sitenav .q-letter .loading').length == 0){
				$('#sitenav .q-letter .content').append('<div class="loading"></div>');
			}
			$.get('eelly-get-store-py-'+by+'.html',
			function(redata) {
				$('#sitenav .q-letter .loading').remove();
				$("#sitenav .q-letter .content").append(redata);
			});
		}
		$("#by_py_" + by).show();
		return false;
	});
	$('#sitenav .q-letter .more').live('click',
	function() {
		var url = $(this).attr('href');
		var obj = $(this);
		$.get(url,
		function(redata) {
			obj.parent().before(redata).remove();
		});
		return false;
	});
});
$(function() {
    var input_area = $('#s_keyword');       
    var search_area = $('.search-suggest[autocomplete!="off"]');  //自动完成提示框 
    var key='';
    var url ='';
    var mo='';
    var current=0;
    var pre=0;
      //-----------------------------------提示层函数绑定
      function tips_layer(msg){
              search_area.html(msg);
              search_area.css('visibility','visible');
              search_area.find('li').hover(function(){
                     $(this).addClass('ss-item-sed').siblings().removeClass('ss-item-sed');    
                  },function(){
                     $(this).removeClass('ss-item-sed');                                             
              });
      }

      function createSgt(data){
        if(data['state']){
           var type = data['type'];
           var words_ary = data['words'];
           var li_str ='';
           var words_len = words_ary.length;
           if(type == "keyword"){
              var o_cate = data['cate_words'];
              for(var key in o_cate){
                  var val = o_cate[key];
                  li_str += '<li style="cursor:pointer" key='+val['keyword']+' class="ss-item" url="//so.eelly.com/s-category-'+val['parent_id']+'-keyword-'+val['keyword']+'.html"><span class="ss-key">'+val['keyword']+' 在<b>'+val['p_name']+'</b>中搜索</span></li>'
              }
           }
           for (var i=0; i<=words_len-1;i++){
              var words = words_ary[i];
              var _key = words;
              if(type=="keyword"){
                  var _ary = words.split(':');
                  var _key = _ary[0]+_ary[1];
                  words = _ary[0]+'<b>'+_ary[1]+'</b>';
              }
              li_str += '<li style="cursor:pointer" class="ss-item" key="'+_key+'" url=""><span class="ss-key">'+words+'</span></li>';
           }
           if(type =="history"&&words_len!=0){
              li_str += '<li id="ss_btn_clear" class="ss-item" key="remove"><a href="javascript:;">清空历史记录</a></li>';
           }
            var ol_str = '<ol>'+li_str+'</ol>';
            tips_layer(ol_str);
        }
      }
     /**
       * 商城主搜索   heui #2
       * @param type
       * @param target
       * @returns
       */
function GSearch(type, target){
    if(undefined == target && $('#app').val()==''){
      target='_blank';
    }else{
      target='_self';
    };
    
    if(undefined == type){ 
    type = $('input[name="act"]').val();
    }
    type = -1 == jQuery.inArray(type, ['index', 'store']) ? 'index' : type;
    var keyword_text =  $('input[name="keyword"]').val().toLowerCase();
    
    var url = $("#s_url").val();
    if(url){
        location.href = url; 
        return false;
    }
    if(keyword_text == '')
      {
        $('input[name="keyword"]').val('');
        switch(type)
          {
            case "index":location.href = "s-list_type-all.html";break;
            case "store":location.href = "s-act-store.html";break;
          }
          return;
      }
      url = words2url(keyword_text, type);
  
      var input_keyword = '<input type="text" name="keyword" value="' + keyword_text + '" />';
      var b = $("<form action='"+url+"' method='get' target='" + target +"' id='bbbb'></form>");    
      $('body').append(b);
      $('#bbbb').trigger('submit');
      $('#bbbb').remove();
      
      if(type=="index"){
        var cookie_kw=$.getCookie('keyword');
        var keyword_cookie = keyword_text;
        if(cookie_kw!=""&&cookie_kw!=null){
            keyword_cookie = keyword_text +','+cookie_kw;
        }
        var _host = location.host.split('.');
        var _len = _host.length;
        var _domain = _host[_len-2]+'.'+_host[_len-1];  
        $.setCookie('keyword',keyword_cookie,null,null,_domain);
      }
      
      return true;
}  
/**
* 通过关键词获取url  heui #2
* @param string kw 关键词 TODO 过滤
* @param string index 索引名
* @return string url 
*/
function words2url(keyword, index){
    var url = false;
    switch(index)
    {
    case 'index': case 'goods': 
      var d = new Date(); 
      $.ajax({
        url:'index.php?app=services&act=word&t='+d.getTime(),
        data:{kw:keyword} ,
        dataType:'json',
        success:function(res){ if ( res.success ) url = res.url; },
        type: 'get',
        async:false
      });
      if(!url) url = search_domain + '/' + 's-act-index-keyword-' + encodeURIComponent(keyword) + '.html';
      break;
    case 'store':
    url = search_domain + '/' + 's-act-store-keyword-' + encodeURIComponent(keyword) + '.html';
    break;
    }
    return url;
}                  
//--------------------------------------绑定
    /* 头部搜索 */
    $(".search-triggers ul li").click(function() {
        if($(".search-triggers").attr("attr") != 'new')
        {
            $(this).addClass('current').siblings().removeClass('current');
            $("input[id='act']").val($(this).attr('search_type'));
        }    
        $('#s_keyword').focus();
    });
    /* 输入框绑定 */
    $('#s_keyword').focus(function(){
           var search_type = $(".search-triggers ul li.current").attr('search_type');                 
           if(search_type=='index'&&$(this).val()==''){
               $.getJSON(SITE_URL +"/index.php?app=autocomplete&act=history_word&jsoncallback=?",function (data){
                   if(data['state']){ 
                       createSgt(data);
                   }else{
                        search_area.css('visibility','hidden'); 
                   }
               }) 
           }else{
              search_area.css('visibility','hidden'); 
           }
    }).keydown(function(event){
          var tips_length =  search_area.find('li:not(#ss_btn_clear)').length;
          if(event.which==40){
             var c_focus =  search_area.find('li:not(#ss_btn_clear)').eq(current);
                 c_focus.addClass('ss-item-sed').siblings().removeClass('ss-item-sed');
                 $('#s_keyword').val(c_focus.attr('key'));
                 $('#s_url').val(c_focus.attr('url'));
                 pre=current-1;
                 if(current<tips_length-1){
                    current++; 
                 }else if(current >= tips_length-1){
                    pre = -2;
                    current =0;
                 }
                 return false;
          }else if(event.which==38){
             var c_focus =  search_area.find('li:not(#ss_btn_clear)').eq(pre);
                 c_focus.addClass('ss-item-sed').siblings().removeClass('ss-item-sed');
                 $('#s_keyword').val(c_focus.attr('key'));
                 $('#s_url').val(c_focus.attr('url'));
                 if(current<=tips_length-1 && current>=1){
                    pre--; 
                    current--;
                 }else if(current == 0){
                    current = tips_length-1;
                    pre = current-2;
                 }
                 return false;
          }else if(event.which==8){
              pre=0;
              current=0;
          }
    }).keyup(function(event){
            if(event.which==40||event.which==38) return false;
            var search_type = $(".search-triggers ul li.current").attr('search_type');    
            var keyword = $('#s_keyword').val().toUpperCase().replace(/(^\s*)/g, "");
            if(search_type=='index'){
               if(keyword=='' && event.which==8){search_area.css('visibility','hidden');
               }else{ 
                  if(keyword!=''){
                       $.getJSON(SITE_URL +"/index.php?app=autocomplete&act=key_word&keyword="+encodeURIComponent(keyword)+"&jsoncallback=?",function(data){
                           if(data['state']){
                              createSgt(data)
                           }else{search_area.css('visibility','hidden'); }
                       })
                  }
              }
           }else{
                search_area.css('visibility','hidden'); 
           }        
    }).blur(function(){
        setTimeout("$('.search-suggest').css('visibility','hidden');",500);  
     }).keypress(function(event) {
        if ( event.which == 13 ) {
        event.preventDefault();
        GSearch();
        }
     }); 
    
    $('[name=search-btn]').click(function(){
        GSearch();                                  
    });

    search_area.find('li.ss-item-sed').live('click',function(){
        key=$(this).attr('key');
        url=$(this).attr('url');
        if(key){
          if(key=='remove'){
               $.getJSON(SITE_URL +"/index.php?app=autocomplete&act=no_word&jsoncallback=?",function(data){
                   if(data['state']){
                     search_area.css('visibility','hidden');
                   }
               })    
          }else{
              $('#s_keyword').val(key);
              $('#s_url').val(url);
              search_area.css('visibility','hidden');
              _gaq.push(['_trackEvent', '搜索','商品搜索框','搜索自动推荐词']);
              GSearch();
          }
        }
    })
//-------------------------------------------------    

});

$(function(){
	if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
		$("#nav .nav-category dl").hover(
		function(){
			$(this).addClass("hover")
		
		}
		,
		function(){
			$(this).removeClass("hover")
		
		});
	}
});
$(function(){
	$('#footer .more').bind("click",function(){
		$(this).parent().nextAll().toggleClass('hide');
	});
});

$(function(){
   var lift ={
       f_pos:[],
         //生成浮动电梯工具栏
          c:function(f){
           var f_num = f.length;
           var f_name =['女装','男装','童装','内衣','箱包/衣饰','鞋类/运动'];
           var float_tool = $('<div id="float_tool" class="float-tool"><ul id="l_wrap" class="l-wrap f14 bold"></ul></div>');
           var l_wrap = float_tool.find(".l-wrap");
           var li_str='',c_li,c_f,c_f_pos,c_a,c_id,c_index,c_name,b_pos,last_li_c='';
           for(var i=0;i<= f_num-1;i++){
              c_f = f.eq(i);
              c_f_pos = c_f.offset().top;
              lift.f_pos.push(c_f_pos);
              c_index = i+1;
              if(c_f.attr('id') != undefined){
                  c_id = c_f.attr('id');
              }else{
                  c_id = 'f'+c_index;
                  c_f.attr('id',c_id);
              }
                c_name = f_name[i];
                if(i==f_num-1){
                    last_li_c = ' last-f';
                    b_pos = c_f_pos + c_f.height();//楼层范围是从1楼的首至最后楼的尾
                    lift.f_pos.push(b_pos);
                }
                c_li =$('<li class="f'+(i+1)+last_li_c+'"></li>');
                c_a = $('<a class="smooth a'+(i+1)+' href="#'+c_id+'" target="_self"><span class="f-index f'+(i+1)+'">'+c_index+'F</span><span class="f-name">'+c_name+'</span></a>');
                c_a.appendTo(c_li);
                c_li.mouseenter(function(){$(this).find('.f-name').show(40);}).mouseleave(function(){$(this).find('.f-name').hide(40);})
                c_li.appendTo(l_wrap);
            }
            float_tool.appendTo($('body'));
          }
   }

        lift.c($('.floor'));//生成电梯


   //滚动时电梯状态
   $(window).scroll(function(){
        var c_s = $(this).scrollTop();
        var p_len = lift.f_pos.length;
        var is = $('#l_wrap li .f-index');
        if((lift.f_pos[0]-150)<c_s ){
             if($('#float_tool').length>0){
                 $('#float_tool').fadeIn('fast');
             }
             for(var i=0;i<= p_len-1;i++){
                 if((lift.f_pos[i]-150)<c_s && c_s<(lift.f_pos[i+1]-150)){
                     is.each(function(i){$(this).removeClass('f'+(i+1)+'-hover')});
                     is.eq(i).addClass('f'+(i+1)+'-hover');
                     break;
                 }else{
                     continue;
                 }
             }
        }else
        {
             $('#float_tool').fadeOut('fast');
        }
   })

   //楼层点击滚动定位
   $('.smooth').each(function(i){
           var $this =$(this);
           $this.click(function(){
               $('#l_wrap li').each(function(){$(this).removeClass('f'+(i+1)+'-hover')});
               $('html,body').animate({scrollTop:lift.f_pos[i]},600);
            return false;
          });
   });

   $('.f-index').each(function(i){
     if( $.browser.msie && $.browser.version < 7.0){
         $(this).hover(function(){$(this).addClass("f"+(i+1)+"-hover");},function(){$(this).removeClass("f"+(i+1)+"-hover");})
      }
   })
});

$(function(){
    var feedbackBox=true;
    var val = '';
    var type=1;
    function feedbackBoxCheck(){
        var len = $('#J_fb_input').val().length;
            val = $('#J_fb_input').val();
            type = $('#J_fb_type').val();
            val = val.replace(/(^\s*)/g, "");
        if(len>500){
            len=500;
            $('#J_fb_input').val(val.substr(0,500));
        }
        $('#J_fb_last').html(len + '/500');
        if( len > 0 && len <= 500 && val!=''&&val!='您留下的每一个建议都是我们不断改进的动力！'){
            feedbackBox=true;
        }else{
            feedbackBox=false;
        }
    }
    /* 显示反馈表单 */
    function feedbackBoxShow(){
        if($("#is_admin").html() == "admin")
        {
            $('#J_feedback_box').attr('class','sl-fixed sl-fixed-right sl-fixed-top feedback-box feedback-box-showing')
            .find('#J_fb_form').stop().show(100);
            /* $(".admin").css("background-position","-62px -90px").mouseout(function(){
                $(this).css("background-position","-62px -90px");
            }); */
            $('#J_feedback_box').css("z-index",1000);

        }
        else
        {
            $('#J_feedback_box').attr('class','sl-fixed sl-fixed-right sl-fixed-top feedback-box feedback-box-showing')
            .find('#J_fb_form').stop().animate({right:0},300)
            if($('.index').length>0){
                $("#J_fb_default").css("background-position", "0 -83px").mouseout(function(){
                $(this).css("background-position","0 -83px");
            });
            }else{
              $("#J_fb_default").hide();
            }
        }
        
    }
    
    /* 隐藏反馈表单 */
    function feedbackBoxHide(){
        feedbackTipsHide();
        if($("#is_admin").html() == "admin")
        {
            $('#J_feedback_box').find('#J_fb_form').stop().hide(200,function(){
                $('#J_feedback_box').attr('class','sl-fixed sl-fixed-right sl-fixed-top feedback-box feedback-box-hiding')
            });
            /* $(".admin").css("background-position","-62px -60px").mouseover(function(){
                $(this).css("background-position","-62px -90px");
            }).mouseout(function(){
                $(this).css("background-position","-62px -60px");
            });*/
            $('#J_feedback_box').css("z-index",90); 
        }
        else
        {
            $('#J_feedback_box').find('#J_fb_form').stop().animate({right:0},150,function(){
                $('#J_feedback_box').attr('class','sl-fixed sl-fixed-right sl-fixed-top feedback-box feedback-box-hiding')
            });
        }
        $("#J_fb_default").show();
        if($('.index').length>0){
                $("#J_fb_default").css("background-position", "0 0").mouseover(function(){
                $(this).css("background-position","0 -83px");
            }).mouseout(function(){
            $(this).css("background-position","0 0");})
        }
       $("#J_fb_input").css("color","#999").val("您留下的每一个建议都是我们不断改进的动力！");
    }

    //textarea 模仿placeholder
    $("#J_fb_input").focus(function(){
        if($(this).val()=="您留下的每一个建议都是我们不断改进的动力！"){
            $(this).css("color","#444").val("");
        }
    }).blur(function(){
            if($(this).val()==""){
                $(this).css("color","#999").val("您留下的每一个建议都是我们不断改进的动力！");
            }
        })

    /* 显示提交反馈 */
    function feedbackTipsShow(){
        feedbackBoxCheck();
        if(feedbackBox == true){
            var from_page = document.location.href;
            $.post("./index.php?app=default&act=feedback",{content:val,from_page:from_page,type:type},
                   function(msg){
                     if(msg){
                        if(msg==-1){
                            $('#J_fb_tips .content').html('<p class="fb-tips-success"><span class="fb-sprite fb-icon-success"></span>请间隔10秒提交建议!感谢!</p>');
                            $('#J_fb_last').html('0/500');
                            $('#J_fb_input').val('');
                            //alert("sfsdfsdf");
                            return false;
                        }else{ 
                            $('#J_fb_tips .content').html('<p class="fb-tips-success"><span class="fb-sprite fb-icon-success"></span>提交成功，感谢您对衣联的支持！</p>');
                            $('#J_fb_last').html('0/500');
                            $('#J_fb_input').val('');
                            return false;
                        }
                     }
           });
        }else if(feedbackBox == false){
            $('#J_fb_tips .content').html('<p class="fb-tips-error"><span class="fb-sprite fb-icon-error"></span>提交前先给点建议吧！</p>');
            $('#J_fb_last').html('0/500');
            $('#J_fb_input').val('');
        }
        $('#J_fb_tips').show();
    }
    /* 隐藏提交反馈 */
    function feedbackTipsHide(){
        $('#J_fb_tips').hide();
        }
    
    if($.browser.msie && $.browser.version < 7){
        $("#J_fb_default").mouseover(function(){
            $(this).addClass("fb-default-hover");
        }).mouseout(function(){
            $(this).removeClass("fb-default-hover");
        });
    }
    
    $('#J_fb_default').bind('click',function(){
        if($("#is_admin").html() == "admin"||$(".index").length>0)
        {
            if($('#J_fb_form').is(":hidden"))
            {
                feedbackBoxShow();
            }
            else
            {
                feedbackBoxHide();
            }
             
        }
        else
        {
            feedbackBoxShow();
        }
    });
    $('#J_fb_close').bind('click',function(){
        feedbackBoxHide();
        });
    
    
    $('#J_fb_submit').bind('click',function(){
        feedbackTipsShow();
        $('#J_fb_tips').bind('click',function(){
            if(feedbackBox){
                feedbackBoxHide();
            }else{
                feedbackTipsHide();
            }
            clearTimeout(timer);
        });
        var timer = setTimeout(function(){
            $('#J_fb_tips').click();
            },1800);
    });
    
    $('#J_fb_input').bind('keyup',function(){
        feedbackBoxCheck();
    });    
});
//窄屏宽度
var screen_width = 1260;
var br_width;
var t = 0; 
$(function(){
    br_width = $(window).width();
    if( $.browser.msie && $.browser.version == '6.0' )
    {
        var asyncScrollLoader = $("textarea.floor-area");
        asyncScrollLoader.each(function() {
            var _html = $(this).text();
            $(this).replaceWith(_html);
            hover_sub();
        });
        changeLazy();
        $(window).bind("scroll", function() {
            changeLazy();
        });  
    }
    else
    {
        lazy_load();
        changeLazy();
        $(window).bind("scroll", function() {
            lazy_load();
            changeLazy();
        });    

    }    
    
    $(window).resize(function(){
        var  now = new Date().getTime();  
        if(br_width != $(window).width() && now - t > 200) {
            t = now;  
            br_width = $(window).width();
            check_browser('1');
        }
    });
    hover_sub();
    check_browser('0');
    changeLazy();
    li_hover();
    check_important();

    // 限时清仓 by caiyx 2010-10-29

    if($('#flash_sale').length!=0){
        //倒计时
        var localdate = new Date();
        var jtime = localdate - serverdate;
        endDate.setUTCSeconds(endDate.getUTCSeconds() + Math.round(jtime / 1000)); 
        $('#countdown').countdown({ alwaysExpire: true, layout:'<span class="clr-4c4c4c fs-22 mlr-3">{dnn}</span>天<span class="clr-4c4c4c fs-22 mlr-3">{hnn}</span>时<span class="clr-4c4c4c fs-22 mlr-3">{mnn}</span>分<span class="clr-4c4c4c fs-22 mlr-3">{snn}</span>秒', until: endDate, format: 'DHMS', timezone: +8 }); 
        //库存
        $("#flash_sale .progressbar").each(function(){
            var _$this = $(this);
            var o_stock =_$this.find('.progress'); ;
            var o_stock_width = (parseInt(o_stock.attr('stock'))/parseInt(_$this.attr('cl-stock')))*100+'px';
            o_stock.css('width',o_stock_width);
        });
    }
       
    //预告切换
    $('#flash_sale_tab').click(function(){
        var _$this = $(this);
        if(_$this.attr('state') == "cur"){
            if($('#prd_wrap .preview').length==2){
                 $('#prd_wrap .cur-sale').hide();
                $('#prd_wrap .preview').show();
                _$this.attr('state','preview');
                _$this.find('.tab-txt').html('返回抢购');
            }else{
                //alert('暂无下期预告');
            }   
        }else{
             $('#prd_wrap .cur-sale').show();
             $('#prd_wrap .preview').hide();
             _$this.attr('state','cur');
             _$this.find('.tab-txt').html('下期预告');
        }
    });


    $('#q_product').hover(function(){
        if($('#q_prd_wrap').length!=0){
            $(this).append($($('#q_prd_wrap').text()));
            $('#q_prd_wrap').remove();
        }else{
             $(this).find('.menu-bd').show()
        }
        
    },function(){
        $(this).find('.menu-bd').hide();
    });
    
    $(".js_toggle").Jdropdown({
            delay: 100
        }, function(e) {

    })

    $('#js_search_type li').hover(
        function() {
            var $_t = $(this);
            $("#js_search_type").css('overflow', 'visible');
            $_t.siblings("li").show();
        }, 
        function() {
            var $_t = $(this);
            $("#js_search_type").css('overflow', 'hidden');
        }
    )

    $('#js_search_type li').click(function() {
        var $_this = $(this);
        var $_siblings = $_this.siblings();
            var $_t_js_type = $_this.attr('search_type');
            var $_t_text = $_this.find('a').text();
            var $_s_js_type = $_siblings.attr('search_type');
            var $_s_text = $_siblings.find('a').text();
            $_this.attr('search_type', $_s_js_type).find('a').text($_s_text);
            $_siblings.attr('search_type', $_t_js_type).find('a').text($_t_text);
        if ($_this.index() != 0) {
            $_this.parents('.search-panel').find('input[name="act"]').val($_t_js_type);
        }        
        else
        {
            $_this.parents('.search-panel').find('input[name="act"]').val($_s_js_type);
        }
    });


    hover_mask();
    function hover_mask() {
            $(".js_mask").Jdropdown({
                delay: 0,
                fun: "hover_mask"
            }, function(e) {
        });    
        $("#showBox-1").mouseover(function(){
            $("this").find('.mask').removeClass("op3");
        })    
    }
    
    //窄屏实时订单切换
    $(".js_click_sub .title").click(function() {
        var _tabNum = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.js_click_sub').siblings('.m-bd').children('.m-switch').eq(_tabNum).show().siblings().hide();
    })
    //字母切换
    $("#js_letter_hover li a").mouseover(function(){
        var _t = $(this);
        var _title = _t.attr("title");
        _t.addClass('active').parent("li").siblings("li").children("a").removeClass("active");
        $("#js_letter_"+_title).show().siblings("ul").hide();
    });

    //幻灯片切换
    new SwitchImg("3","1","#switchBox-1","#showBox-1","#stateBox-1","5000","1","0");
    $("#_widget_1003").sliding({auto_width:true,wt1:73,speed:300,switch_time:100});
    $("#js_hd_slide").sliding({auto_width:true,wt1:73,speed:300,switch_time:0});
    changTab(1);

    get_apple_icon();
});

function changTab(n){
  var len = $("#myTab"+n+" li").length;
  var idx = 0;
  var tabTimer;
  $("#myTab"+n+" li").mouseover(function(){
    idx = $("#myTab"+n+" li").index(this);
    showTab(n,idx);
  }).eq(0).mouseover();

  $('#myTab'+n+'_Content').hover(function(){
    clearInterval(tabTimer);
  },function(){
    tabTimer = setInterval(function(){
      showTab(n,idx);
      idx++;
      if(idx==len) idx=0;
    },3000)
  }).trigger('mouseleave');
}
function showTab(no,num){
    var bigpipe = $('#myTab'+no+'_Content > .m-switch').eq(num).find("img.js_bigpipe"); 
    if( bigpipe.size() != 0 )
    {
        var src = bigpipe.attr('lazy_src');
        bigpipe.removeAttr('lazy_src').removeClass('js_bigpipe').attr('src', src);
    }
    $('#myTab'+no+'_Content > .m-switch').css({display:'none'}).eq(num).css({display:'block'});
    $('#myTab'+no+' li').removeClass('active').eq(num).addClass('active');
}

function li_hover(){
    $(".floor .good-lists li").hover(
      function () {
        $(this).find(".size").show();
      },
      function () {
        $(this).find(".size").hide();
      }
    );
}

function _hover_wx(){
    $("#js_wx_hover").mouseover(function () {
        var _about = $("#js_about");
        if( _about.hasClass('i-hover') )
        {
            $("#js_about").removeClass("i-hover");
        }
        else
        {
            $("#js_about").addClass("i-hover");    
        }    
        
      });
}

//切换
function hover_sub()
{
    $(".js_hd_sub li").Jdropdown({
            delay: 200,
            fun: "hover_sub"
        }, function(e) {

    })
}

//判断是否是苹果设备
function get_apple_icon()
{

    var sUserAgent = navigator.userAgent.toLowerCase();  
    var isIpad = sUserAgent.match(/ipad/i) == "ipad";    
    var isIphone = sUserAgent.match(/iphone/i) == "iphone"; 
    if( isIpad  || isIphone )
    {   
        var icon_html = '<link rel="apple-touch-icon" href= "'+STATIC_URL + '/themes/mall/default/styles/default/apple_icon/apple-touch-icon.png" /><link rel="apple-touch-icon" sizes="72x72" href="'+STATIC_URL + '/themes/mall/default/styles/default/apple_icon/apple-touch-icon-72x72.png" /><link rel="apple-touch-icon" sizes="114x114" href="'+STATIC_URL + '/themes/mall/default/styles/default/apple_icon/apple-touch-icon-114x114.png" /><link rel="apple-touch-icon" sizes="144x144" href="'+STATIC_URL + '/themes/mall/default/styles/default/apple_icon/apple-touch-icon-144x144.png" />'
        $('link:first').after(icon_html);
    }

}

(function($){
    $.fn.sliding = function(options){
        var settings = {
            auto_width:false,
            wt1: 0,
            speed:200,
            switch_time:500
        };
        
        if(options){
            $.extend(settings, options);
        }
        
        var o_li = $(this).find(".m-types").find("li");
        var o_slider = $(this).find(".slider"); 
        var o_con = $(this).find(".m-bd"); 
        o_slider.css("width",settings.wt1);
     
        o_li.mouseover(function(){
            var ls = $(this).position().left;
            var index = $(this).index();
            if(settings.auto_width){ 
                var ws = $(this).width();
                if(ws != o_slider.width()){
                   o_slider.css("width",ws);
                }
            }
            o_slider.stop().animate({"left": ls}, settings.speed);
            $(this).addClass("active").siblings().removeClass("active");
            o_con.find(".m-switch").eq(index).fadeIn(settings.switch_time).siblings().fadeOut(settings.switch_time);
                    
        });
        
    };
}(jQuery)); 

//延时切换
(function(a) {
    a.fn.Jdropdown = function(d, e) {
        if (!this.length) {
            return
        }
        if (typeof d == "function") {
            e = d;
            d = {}
        }
        var c = a.extend({
            event: "mouseover",
            current: "hover",
            delay: 0,
            fun: "default"
        }, d || {});
        var b = (c.event == "mouseover") ? "mouseout" : "mouseleave";
        a.each(this, function() {
            var h = null,
                g = null,
                f = false;
            a(this).bind(c.event, function() {
                if (f) {
                    clearTimeout(g)
                } else {
                    var j = a(this);
                    h = setTimeout(function() {
                        if( c.fun == "default" )
                        {
                            var menu_item_wrap =j.find('.menu-item-wrap');
                            var _flag_temp = 0;
                            if(menu_item_wrap.length!=0){
                               var o_menu_in = $(menu_item_wrap.text());
                                j.append(o_menu_in); 
                                menu_item_wrap.remove();
                                _flag_temp =1;
                            }
                            j.addClass(c.current).children(".menu-in").show();
                            j.find('.shadow-bg').show();
                            var _c = j.children(".menu-in");
                            var _c_height = _c.height();
                            var _t_height = j.height();
                            j.find('.shadow-l').css('height',_c_height);
                            j.find('.shadow-r').css('height',_c_height);
                            var _c_to_top = j.offset().top-$(window).scrollTop()+_c_height;
                            var _j_to_top = j.offset().top-$(window).scrollTop()+_t_height;
                            var _c_to_bottom =$(window).height()-_c_to_top;
                             var tg_top = _c_to_bottom-30;
                            if (_c_to_bottom < 30&&tg_top!=(-1)&&tg_top!=1) {
                               
                                if(($(window).height()-30)<_j_to_top){
                                    var border_height = ($.browser.msie && $.browser.version =='7.0')? (-2):2;
                                    _c.css('top','-'+(_c_height-_t_height+border_height)+'px')
                                }else{
                                         _c.css('top',tg_top+'px');
                                }
                                
                            }else{
                                _c.css('top','-2px');
                            }
                            if((_flag_temp==1)&&$.browser.msie && $.browser.version <7.0){
                                j.addClass(c.current).children(".menu-in").hide().show();
                            }
                        }
                        if( c.fun == 'hover_sub')
                        {
                            var _tabNum = j.index();
                            j.addClass('active').siblings().removeClass('active');
                            j.parents('.js_hd_sub').siblings('.m-bd').children('.m-switch').eq(_tabNum).show().siblings().hide();
                        }
                        if( c.fun == 'hover_mask' )
                        {
                            var _n = j.attr("no");
                            if( _n == 1 )
                            {
                                j.parents(".l-screen").siblings(".r-screen").find(".mask").addClass("op3");
                            }
                            if( _n == 3 )
                            {
                                var $_other = j.siblings(".js_mask").find(".mask");
                                j.parents(".r-screen").siblings(".l-screen").find(".mask").addClass("op3");
                                $_other.addClass("op3");
                            }
                        }    
                        f = true;
                        if (e) {
                            e(j)
                        }
                    }, c.delay)
                }
            }).bind(b, function() {
                if (f) {
                    var j = a(this);
                    g = setTimeout(function() {
                        if( c.fun == "default" )
                        {
                            j.removeClass(c.current).children(".menu-in").hide();
                            j.find('.shadow-bg').hide();
                        }    
                        if( c.fun == 'hover_mask')
                        {
                            j.parents("li").find('.mask').removeClass("op3");
                        }
                        f = false
                    }, c.delay)
                } else {
                    clearTimeout(h)
                }
            })
        })
    }
})(jQuery);

function check_important(){
    $(".fa-dl dd").each(function(){
        if( $.trim($(this).parent("dl").children(".bb-da").text()) == "实力商家")
        {
            $(this).addClass("imp-store");
        }
    })
}
//浏览器宽窄屏
function check_browser(time){
    var _width = $(window).width();
    if( _width <= screen_width )
    {
        if( $.browser.msie && $.browser.version < 9)
        {
            $('body').addClass('w980');
        }
        if( time == 1 )
        {
            $("#js_small_screen").show().siblings('div').hide().parent(".loading-c").removeClass("loading-c");    
        }
        else
        {
            $("#js_small_screen").css("z-index",12);
        }
        //$("#actual_order_big").
        //load_narrow();
        $("#stateBox-1").children('span').eq(0).triggerHandler('mouseover');
        //宽窄屏幻灯片切换
        $(".js_change_pic").each(function(i){
            var _narrow_src = $(this).attr("narrow_src");
            $(this).attr("has_change","1");
            $(this).attr("lazy_src",_narrow_src);
            if(  i == "0" )
            {
                $(this).attr("src",_narrow_src);
            }    
        })
    }
    else
    {
        if( $.browser.msie && $.browser.version < 9)
        {
            $('body').removeClass('w980');
        }
        if(time == 1)
        {
            $("#js_big_screen").show().siblings('div').hide().parent(".loading-c").removeClass("loading-c");    
        }
        //load_wide();
        //宽窄屏幻灯片切换
        $("#stateBox-1").children('span').eq(0).triggerHandler('mouseover');
        $(".js_change_pic").each(function(i){
            var _wide_src = $(this).attr("wide_src");
            $(this).attr("has_change","1");
            $(this).attr("lazy_src",_wide_src);
            if( i == "0" )
            {
                $(this).attr("src",_wide_src);
            }
        })
    }

    //楼层定位、建议框、至顶部 随窗口定位切换
    if( $.browser.msie && $.browser.version < 9)
    {
        var FIX_MIN_WIN =1320;
        if(_width<FIX_MIN_WIN){
            $('#float_tool').css({'left':'auto','margin-left':0,'right':0});
            $('#J_feedback_box').css({'left':'auto','margin-left':0,'right':0});
        }else{
            $('#float_tool').css({'left':'50%','margin-left':'625px','right':'auto'});
            $('#J_feedback_box').css({'left':'50%','margin-left':'625px','right':'auto'});
        }
    }
}

function return_src(obj){
    var _width = $(window).width();
    if( _width <= screen_width )
    {
        var _narrow_src = obj.attr("narrow_src");
        return _narrow_src;

    }
    else
    {
        var _wide_src = obj.attr("wide_src");
        return _wide_src;

    }
}



function lazy_load() { //lazy_load分块加载
    var asyncScrollLoader = $("textarea.floor-area");
    var fold = $(window).height() + $(window).scrollTop();
    asyncScrollLoader.each(function() {
        if ($(this).attr("data-lazy") != "lazy") {
            var _offTop = $(this).offset().top;
            var _html = $(this).text();
            if (fold >= _offTop) {
                $(this).replaceWith(_html);
                hover_sub();
                li_hover();
                check_important();
                _hover_wx();
            }        
        }
    });
}

function changeLazy() { //bigpipe图片分步加载
    var bigpipe = $("img.js_bigpipe");
    bigpipe.each(function() {
        var none = 0;
        $(this).parents().each(function() {
            if ($(this).css('display') == 'none') {
                none = 1;
                return false;
            }
        });
        if (none == 1){
            return;}
        var fold = $(window).height() + $(window).scrollTop();
        if (fold >= $(this).offset().top) {
            var src = $(this).attr('lazy_src');
            $(this).removeAttr('lazy_src').removeClass('js_bigpipe').attr('src', src);
        }    
    });
};

(function($) {
    SwitchImg = function(way, mouseWay, focusBox, object, navList, time, auto, vml) {
        this.way = way;
        this.mouseWay = mouseWay;
        this.box = focusBox;
        this.obj = object;
        this.nav = navList;
        this.off = auto;
        this.autoTime = time;
        this.ievml = vml;
        this.n = 0;
        var t = 0;
        var _this = this;
        this.count = $(this.obj).children('li').size();
        this.height = $(this.obj).children('li').height();
        this.width = $(this.obj).children('li').width();
        if (this.way == "1" || this.way == "2") {
            $(this.obj).height(this.height * this.count);
        }
        if (this.way == "3" || this.way == "4") {
            $(this.obj).width(this.width * this.count);
        }
        this.slide = function() {
            if (this.mouseWay == "1") {
                $(this.nav).children('span').mouseover(function() {
                    if (!$(_this.obj).children('li').is(':animated')) {
                        _this.n = $(this).index();
                        if (_this.way == "1") {
                            $(_this.obj).stop().animate({
                                marginTop: -(_this.n) * _this.height + "px"
                            }, 250)
                            var bigpipe = $(_this.obj).children("li").eq(_this.n).find("img.js_bigpipe");
                            bigpipe.each(function() {
                                var src = $(this).attr('lazy_src');
                                $(this).removeAttr('lazy_src').removeClass('js_bigpipe').attr('src', src);
                            });
                        }
                        if (_this.way == "2") {
                            $(_this.obj).stop().animate({
                                marginTop: -(_this.n) * _this.height + "px"
                            }, 250)
                        }
                        if (_this.way == "3") {
                            $(_this.obj).stop().animate({
                                marginLeft: -(_this.n) * $(_this.obj).children('li').width() + "px"
                            }, 500)
                            var bigpipe = $(_this.obj).children("li").eq(_this.n).find("img.js_bigpipe");
                            bigpipe.each(function() {
                                var src = $(this).attr('lazy_src');
                                $(this).removeAttr('lazy_src').removeClass('js_bigpipe').attr('src', src);
                            });
                            var change_pic = $(_this.obj).children("li").eq(_this.n).find("img.js_change_pic");
                            var has_change = change_pic.attr("has_change");
                            if( has_change == '1')
                            {
                                change_pic.attr('src', return_src(change_pic));
                                change_pic.attr("has_change","0");
                            }
                            

                        }
                        if (_this.way == "4") {
                            $(_this.obj).stop().animate({
                                marginLeft: -(_this.n) * _this.width + "px"
                            }, 250)
                        }
                        if (_this.way == "5") {
                            $(_this.obj).children('li').stop().css('display', 'none');
                            $(_this.obj).children('li').eq(_this.n).css('display', 'block');
                        }
                        $(this).addClass('active').siblings().removeClass('active');
                    }
                })
            } else {
                $(this.nav).children('span').click(function() {
                    if (!$(_this.obj).children('li').is(':animated')) {
                        _this.n = $(this).index();
                        if (_this.way == "1") {
                            $(_this.obj).stop().animate({
                                marginTop: -(_this.n) * _this.height + "px"
                            }, 250)
                        }
                        if (_this.way == "2") {
                            $(_this.obj).stop().animate({
                                marginTop: -(_this.n) * _this.height + "px"
                            }, 250)
                        }
                        if (_this.way == "3") {
                            $(_this.obj).stop().animate({
                                marginLeft: -(_this.n) * _this.width + "px"
                            }, 250)
                        }
                        if (_this.way == "4") {
                            $(_this.obj).stop().animate({
                                marginLeft: -(_this.n) * _this.width + "px"
                            }, 250)
                        }
                        if (_this.way == "5") {
                            $(_this.obj).children('li').stop().css('display', 'none');
                            $(_this.obj).children('li').eq(_this.n).css('display', 'block');
                        }
                        $(this).addClass('active').siblings().removeClass('active');
                    }
                })
            }
        }
        this.ieVml = function() {
            if ($.browser.msie) {
                $(this.nav).children('span').each(function() {
                    var _t = $(this);
                    var _index = _t.index();
                    var _html = $(this).html();
                    $(this).removeClass("label");
                    $(this).html("");
                    var _vml = "<v:Oval style='position:relative; float:left; display:block; width:12px; height:12px; text-align:center; margin-left:12px; cursor:pointer;  color:#FFF;' >" + _html + "</v:Oval>"
                    $(this).append(_vml);
                    _t.children().attr({
                        fillcolor: "#666",
                        strokecolor: "#666"
                    });
                    if (_index == 0) {
                        _t.children().attr({
                            fillcolor: "#C61F26",
                            strokecolor: "#C61F26"
                        });
                    }
                })
            }
        }
        this.addHover = function() {
            $(this.box).hover(
                function() {
                    clearInterval(t);
                }, 
                function() {
                    t = setInterval(_this.autoPlay, _this.autoTime);
                }
            )
        }
        this.autoPlay = function() {
            _this.n = _this.n >= (_this.count - 1) ? 0 : ++_this.n;
            if (_this.mouseWay == "1") {
                //t = setInterval($(_this.nav).children('span').eq(_this.n).triggerHandler('mouseover'),_this.autoTime);
                $(_this.nav).children('span').eq(_this.n).triggerHandler('mouseover');
            } else {
                $(_this.nav).children('span').eq(_this.n).triggerHandler('click');
            }
        }
        if (_this.ievml == 1) {
            this.ieVml();
        }
        this.slide();
        this.addHover();
        if (_this.off != "0") {
            t = setInterval(this.autoPlay, _this.autoTime);
        }

    }
})(jQuery);
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null,mousehover:false},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto){var i=setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);if(o.mousehover){c.hover(function(){clearInterval(i)},function(){i=setInterval(function(){go(curr+o.scroll)},o.auto+o.speed)})}};function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
(function($) {
  $.fn.KinSlideshow = function(settings) {
    settings = jQuery.extend({
      intervalTime : 5,
      moveSpeedTime : 400,
      moveStyle : "left",
      mouseEvent : "mouseclick",
      isHasTitleBar : true,
      callback : null,
      titleBar : {
        titleBar_height : 40,
        titleBar_bgColor : "#000000",
        titleBar_alpha : 0.5
      },
      isHasTitleFont : true,
      titleFont : {
        TitleFont_size : 12,
        TitleFont_color : "#FFFFFF",
        TitleFont_family : "Verdana",
        TitleFont_weight : "bold"
      },
      isHasBtn : true,
      btn : {
        btn_bgColor : "#666666",
        btn_bgHoverColor : "#CC0000",
        btn_fontColor : "#CCCCCC",
        btn_fontHoverColor : "#000000",
        btn_fontFamily : "Verdana",
        btn_borderColor : "#999999",
        btn_borderHoverColor : "#FF0000",
        btn_borderWidth : 1,
        btn_bgAlpha : 0.7
      }
    }, settings);
    var titleBar_Bak = {
      titleBar_height : 40,
      titleBar_bgColor : "#000000",
      titleBar_alpha : 0.5
    }
    var titleFont_Bak = {
      TitleFont_size : 12,
      TitleFont_color : "#FFFFFF",
      TitleFont_family : "Verdana",
      TitleFont_weight : "bold"
    }
    var btn_Bak = {
      btn_bgColor : "#666666",
      btn_bgHoverColor : "#CC0000",
      btn_fontColor : "#CCCCCC",
      btn_fontHoverColor : "#000000",
      btn_fontFamily : "Verdana",
      btn_borderColor : "#999999",
      btn_borderHoverColor : "#FF0000",
      btn_borderWidth : 1,
      btn_bgAlpha : 0.7
    }
    for ( var key in titleBar_Bak) {
      if (settings.titleBar[key] == undefined) {
        settings.titleBar[key] = titleBar_Bak[key];
      }
    }
    for ( var key in titleFont_Bak) {
      if (settings.titleFont[key] == undefined) {
        settings.titleFont[key] = titleFont_Bak[key];
      }
    }
    for ( var key in btn_Bak) {
      if (settings.btn[key] == undefined) {
        settings.btn[key] = btn_Bak[key];
      }
    }
    var ksthis = this;
    var ksbs = $(ksthis).selector;
    var KSS_DateArray = new Array();
    var KSS_imgaeLength = 0;
    var KSS_Size = new Array();
    var KSS_changeFlag = 0;
    var KSS_IntervalTime = settings.intervalTime;
    var KSS_setInterval;
    var KSS_firstMoveFlag = true;
    var getTitleBar_Height;
    if (isNaN(KSS_IntervalTime) || KSS_IntervalTime <= 1) {
      KSS_IntervalTime = 5;
    }
    if (settings.moveSpeedTime > 500) {
      settings.moveSpeedTime = 500;
    } else if (settings.moveSpeedTime < 100) {
      settings.moveSpeedTime = 100;
    }
    function KSS_initialize() {
      $(ksthis).css({
        visibility : "hidden"
      });
      $(ksbs + " a img").css({
        border : 0
      });
      KSS_start();
      KSS_mousehover();
    }
    function KSS_start() {
      KSS_imgaeLength = $(ksbs + " a").length;
      $(ksbs + " a img").each(function() {
        var src = $(this).attr('lazy-src');
        if (src) {
          $(this).attr("src", src).removeAttr("lazy-src");
        }
      });
      KSS_Size.push($(ksbs + " a img").attr("width"));
      KSS_Size.push($(ksbs + " a img").attr("height"));
      $(ksbs + " a img").each(function(i) {
        KSS_DateArray.push($(this).attr("alt"));
      });
      $(ksbs + " a").wrapAll("<div id='KSS_content'></div>");
      $(ksbs).find("#KSS_content").clone().attr("id", "KSS_contentClone")
          .appendTo(ksthis);
      KSS_setTitleBar();
      KSS_setTitleFont();
      KSS_setBtn();
      KSS_action();
      KSS_btnEvent(settings.mouseEvent);
      $(ksthis).css({
        visibility : "visible"
      });
    }
    function KSS_setTitleBar() {
      $(ksthis).css({
        width : KSS_Size[0],
        height : KSS_Size[1],
        overflow : "hidden",
        position : "relative"
      });
      $(ksthis).append("<div class='KSS_titleBar'></div>");
      getTitleBar_Height = settings.titleBar.titleBar_height;
      if (isNaN(getTitleBar_Height)) {
        getTitleBar_Height = 40;
      } else if (getTitleBar_Height < 25) {
        getTitleBar_Height = 25;
      }
      ;
      $(ksbs + " .KSS_titleBar").css({
        height : getTitleBar_Height,
        width : "100%",
        position : "absolute",
        bottom : 0,
        left : 0
      })
      if (settings.isHasTitleBar) {
        $(ksbs + " .KSS_titleBar").css({
          background : settings.titleBar.titleBar_bgColor,
          opacity : settings.titleBar.titleBar_alpha
        })
      }
    }
    function KSS_setTitleFont() {
      if (settings.isHasTitleFont) {
        $(ksthis)
            .append(
                "<div class='KSS_titleBox'><h2 class='title' style='margin:3px 0 0 6px;padding:0;'></h2></div>");
        $(ksbs + " .KSS_titleBox").css({
          height : getTitleBar_Height,
          width : "100%",
          position : "absolute",
          bottom : 0,
          left : 0
        })
        $(ksbs + " .KSS_titleBox h2").css({
          fontSize : settings.titleFont.TitleFont_size,
          color : settings.titleFont.TitleFont_color,
          fontFamily : settings.titleFont.TitleFont_family,
          fontWeight : settings.titleFont.TitleFont_weight
        });
        setTiltFontShow(0);
      }
    }
    function KSS_setBtn() {
      if (settings.btn.btn_borderWidth > 2) {
        settings.btn.btn_borderWidth = 2
      }
      if (settings.btn.btn_borderWidth < 0
          || isNaN(settings.btn.btn_borderWidth)) {
        settings.btn.btn_borderWidth = 0
      }
      if (settings.isHasBtn && KSS_imgaeLength >= 2) {
        $(ksthis)
            .append(
                "<div class='KSS_btnBox' style='position:absolute;right:10px;bottom:5px; z-index:100'></div>");
        var KSS_btnList = "";
        for (i = 1; i <= KSS_imgaeLength; i++) {
          KSS_btnList += "<li>" + i + "</li>";
        }

        KSS_btnList = "<ul id='btnlistID' style='margin:0;padding:0; overflow:hidden'>"
            + KSS_btnList + "</ul>";
        $(ksbs + " .KSS_btnBox").append(KSS_btnList);
        $(ksbs + " .KSS_btnBox #btnlistID li").css({
            listStyle : "none",
            float : "left",
            width : 18,
            height : 18,
            borderWidth : settings.btn.btn_borderWidth,
            borderColor : settings.btn.btn_borderColor,
            borderStyle : "solid",
            background : settings.btn.btn_bgColor,
            textAlign : "center",
            cursor : "pointer",
            marginLeft : 3,
            fontSize : 12,
            fontFamily : settings.btn.btn_fontFamily,
            lineHeight : "18px",
            opacity : settings.btn.btn_bgAlpha,
            color : settings.btn.btn_fontColor
        });
        $(ksbs + " #btnlistID li:eq(0)").css({
          background : settings.btn.btn_bgHoverColor,
          borderColor : settings.btn.btn_borderHoverColor,
          color : settings.btn.btn_fontHoverColor
        }).addClass("thisitem");
      }
    }
    function KSS_action() {
      switch (settings.moveStyle) {
      case "left":
        KSS_moveLeft();
        break;
      case "right":
        KSS_moveRight();
        break;
      case "up":
        KSS_moveUp();
        break;
      case "down":
        KSS_moveDown();
        break;
      default:
        settings.moveStyle = "left";
        KSS_moveLeft();
      }
    }
    function KSS_moveLeft() {
      $(ksbs + " div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>");
      $(ksbs).find("#KSS_moveBox").css({
        width : KSS_Size[0],
        height : KSS_Size[1],
        overflow : "hidden",
        position : "relative"
      });
      $(ksbs).find("#KSS_content").css({
        float : "left"
      });
      $(ksbs).find("#KSS_contentClone").css({
        float : "left"
      });
      $(ksbs + " #KSS_moveBox div").wrapAll(
          "<div id='KSS_XposBox'></div>");
      $(ksbs).find("#KSS_XposBox").css({
        float : "left",
        width : "2000%"
      });
      KSS_setInterval = setInterval(function() {
        KSS_move(settings.moveStyle)
      }, KSS_IntervalTime * 1000 + settings.moveSpeedTime);
    }
    function KSS_moveRight() {
      $(ksbs + " div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>");
      $(ksbs).find("#KSS_moveBox").css({
        width : KSS_Size[0],
        height : KSS_Size[1],
        overflow : "hidden",
        position : "relative"
      });
      $(ksbs).find("#KSS_content").css({
        float : "left"
      });
      $(ksbs).find("#KSS_contentClone").css({
        float : "left"
      });
      $(ksbs + " #KSS_moveBox div").wrapAll(
          "<div id='KSS_XposBox'></div>");
      $(ksbs).find("#KSS_XposBox").css({
        float : "left",
        width : "2000%"
      });
      $(ksbs).find("#KSS_contentClone").html("");
      $(ksbs + " #KSS_content a").wrap("<span></span>")
      $(ksbs + " #KSS_content a").each(
          function(i) {
            $(ksbs).find("#KSS_contentClone").prepend(
                $(ksbs + " #KSS_content span:eq(" + i + ")")
                    .html());
          })
      $(ksbs).find("#KSS_content").html(
          $(ksbs).find("#KSS_contentClone").html());
      var KSS_offsetLeft = (KSS_imgaeLength - 1) * KSS_Size[0];
      $(ksbs).find("#KSS_moveBox").scrollLeft(KSS_offsetLeft);
      KSS_setInterval = setInterval(function() {
        KSS_move(settings.moveStyle)
      }, KSS_IntervalTime * 1000 + settings.moveSpeedTime);
    }
    function KSS_moveUp() {
      $(ksbs + " div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>");
      $(ksbs).find("#KSS_moveBox").css({
        width : KSS_Size[0],
        height : KSS_Size[1],
        overflow : "hidden",
        position : "relative"
      });
      $(ksbs).find("#KSS_moveBox").animate({
        scrollTop : 0
      }, 1);
      KSS_setInterval = setInterval(function() {
        KSS_move(settings.moveStyle)
      }, KSS_IntervalTime * 1000 + settings.moveSpeedTime);
    }
    function KSS_moveDown() {
      $(ksbs + " div:lt(2)").wrapAll("<div id='KSS_moveBox'></div>");
      $(ksbs).find("#KSS_moveBox").css({
        width : KSS_Size[0],
        height : KSS_Size[1],
        overflow : "hidden",
        position : "relative"
      });
      $(ksbs).find("#KSS_contentClone").html("");
      $(ksbs + " #KSS_content a").wrap("<span></span>")
      $(ksbs + " #KSS_content a").each(
          function(i) {
            $(ksbs).find("#KSS_contentClone").prepend(
                $(ksbs + " #KSS_content span:eq(" + i + ")")
                    .html());
          })
      $(ksbs).find("#KSS_content").html(
          $(ksbs).find("#KSS_contentClone").html());
      var KSS_offsetTop = (KSS_imgaeLength - 1) * KSS_Size[1];
      $(ksbs).find("#KSS_moveBox").animate({
        scrollTop : KSS_offsetTop
      }, 1);
      KSS_setInterval = setInterval(function() {
        KSS_move(settings.moveStyle)
      }, KSS_IntervalTime * 1000 + settings.moveSpeedTime);
    }
    function KSS_move(style) {
      switch (style) {
      case "left":
        if (KSS_changeFlag >= KSS_imgaeLength) {
          KSS_changeFlag = 0;
          $(ksbs).find("#KSS_moveBox").scrollLeft(0);
          $(ksbs).find("#KSS_moveBox").animate({
            scrollLeft : KSS_Size[0]
          }, settings.moveSpeedTime);
        } else {
          sp = (KSS_changeFlag + 1) * KSS_Size[0];
          if ($(ksbs).find("#KSS_moveBox").is(':animated')) {
            $(ksbs).find("#KSS_moveBox").stop();
            $(ksbs).find("#KSS_moveBox").animate({
              scrollLeft : sp
            }, settings.moveSpeedTime);
          } else {
            $(ksbs).find("#KSS_moveBox").animate({
              scrollLeft : sp
            }, settings.moveSpeedTime);
          }
        }
        setTiltFontShow(KSS_changeFlag + 1);
        break;
      case "right":
        var KSS_offsetLeft = (KSS_imgaeLength - 1) * KSS_Size[0];
        if (KSS_changeFlag >= KSS_imgaeLength) {
          KSS_changeFlag = 0;
          $(ksbs).find("#KSS_moveBox").scrollLeft(
              KSS_offsetLeft + KSS_Size[0]);
          $(ksbs).find("#KSS_moveBox").animate({
            scrollLeft : KSS_offsetLeft
          }, settings.moveSpeedTime);
        } else {
          if (KSS_firstMoveFlag) {
            KSS_changeFlag++;
            KSS_firstMoveFlag = false;
          }
          sp = KSS_offsetLeft - (KSS_changeFlag * KSS_Size[0]);
          if ($(ksbs).find("#KSS_moveBox").is(':animated')) {
            $(ksbs).find("#KSS_moveBox").stop();
            $(ksbs).find("#KSS_moveBox").animate({
              scrollLeft : sp
            }, settings.moveSpeedTime);
          } else {
            $(ksbs).find("#KSS_moveBox").animate({
              scrollLeft : sp
            }, settings.moveSpeedTime);
          }
        }
        setTiltFontShow(KSS_changeFlag);
        break;
      case "up":
        if (KSS_changeFlag >= KSS_imgaeLength) {
          KSS_changeFlag = 0;
          $(ksbs).find("#KSS_moveBox").scrollTop(0);
          $(ksbs).find("#KSS_moveBox").animate({
            scrollTop : KSS_Size[1]
          }, settings.moveSpeedTime);
        } else {
          sp = (KSS_changeFlag + 1) * KSS_Size[1];
          if ($(ksbs).find("#KSS_moveBox").is(':animated')) {
            $(ksbs).find("#KSS_moveBox").stop();
            $(ksbs).find("#KSS_moveBox").animate({
              scrollTop : sp
            }, settings.moveSpeedTime);
          } else {
            $(ksbs).find("#KSS_moveBox").animate({
              scrollTop : sp
            }, settings.moveSpeedTime);
          }
        }
        setTiltFontShow(KSS_changeFlag + 1);
        break;
      case "down":
        var KSS_offsetLeft = (KSS_imgaeLength - 1) * KSS_Size[1];
        if (KSS_changeFlag >= KSS_imgaeLength) {
          KSS_changeFlag = 0;
          $(ksbs).find("#KSS_moveBox").scrollTop(
              KSS_offsetLeft + KSS_Size[1]);
          $(ksbs).find("#KSS_moveBox").animate({
            scrollTop : KSS_offsetLeft
          }, settings.moveSpeedTime);
        } else {
          if (KSS_firstMoveFlag) {
            KSS_changeFlag++;
            KSS_firstMoveFlag = false;
          }
          sp = KSS_offsetLeft - (KSS_changeFlag * KSS_Size[1]);
          if ($(ksbs).find("#KSS_moveBox").is(':animated')) {
            $(ksbs).find("#KSS_moveBox").stop();
            $(ksbs).find("#KSS_moveBox").animate({
              scrollTop : sp
            }, settings.moveSpeedTime);
          } else {
            $(ksbs).find("#KSS_moveBox").animate({
              scrollTop : sp
            }, settings.moveSpeedTime);
          }
        }
        setTiltFontShow(KSS_changeFlag);
        break;
      }
      KSS_changeFlag++;
    }
    function setTiltFontShow(index) {
      if (index == KSS_imgaeLength) {
        index = 0
      }
      ;
      if (settings.isHasTitleFont) {
        $(ksbs + " .KSS_titleBox h2.title").html(KSS_DateArray[index]);
      }
      ;
      $(ksbs + " #btnlistID li").each(function(i) {
        if (i == index) {
          $(this).css({
            background : settings.btn.btn_bgHoverColor,
            borderColor : settings.btn.btn_borderHoverColor,
            color : settings.btn.btn_fontHoverColor
          });
          $(this).addClass("thisitem").siblings().removeClass("thisitem");
        } else {
          $(this).css({
            background : settings.btn.btn_bgColor,
            borderColor : settings.btn.btn_borderColor,
            color : settings.btn.btn_fontColor
          });
        }
      })
    }
    function KSS_btnEvent(Event) {
      switch (Event) {
      case "mouseover":
        KSS_btnMouseover();
        break;
      case "mouseclick":
        KSS_btnMouseclick();
        break;
      default:
        KSS_btnMouseclick();
      }
    }
    function KSS_btnMouseover() {
      $(ksbs + " #btnlistID li").mouseover(function() {
        var curLiIndex = $(ksbs + " #btnlistID li").index($(this));
        switch (settings.moveStyle) {
        case "left":
          KSS_changeFlag = curLiIndex - 1;
          break;
        case "right":
          if (KSS_firstMoveFlag) {
            KSS_changeFlag = curLiIndex - 1;
            break;
          } else {
            KSS_changeFlag = curLiIndex;
            break;
          }
        case "up":
          KSS_changeFlag = curLiIndex - 1;
          break;
        case "down":
          if (KSS_firstMoveFlag) {
            KSS_changeFlag = curLiIndex - 1;
            break;
          } else {
            KSS_changeFlag = curLiIndex;
            break;
          }
        }
        KSS_move(settings.moveStyle);
        $(ksbs + " #btnlistID li").each(function(i) {
          if (i == curLiIndex) {
            $(this).css({
              background : settings.btn.btn_bgHoverColor,
              borderColor : settings.btn.btn_borderHoverColor,
              color : settings.btn.btn_fontHoverColor
            });
            $(this).addClass("thisitem").siblings().removeClass("thisitem");
          } else {
            $(this).css({
              background : settings.btn.btn_bgColor,
              borderColor : settings.btn.btn_borderColor,
              color : settings.btn.btn_fontColor
            });
          }
        })
      })
    }
    function KSS_btnMouseclick() {
      $(ksbs + " #btnlistID li").click(function() {
        var curLiIndex = $(ksbs + " #btnlistID li").index($(this));
        switch (settings.moveStyle) {
        case "left":
          KSS_changeFlag = curLiIndex - 1;
          break;
        case "right":
          if (KSS_firstMoveFlag) {
            KSS_changeFlag = curLiIndex - 1;
            break;
          } else {
            KSS_changeFlag = curLiIndex;
            break;
          }
        case "up":
          KSS_changeFlag = curLiIndex - 1;
          break;
        case "down":
          if (KSS_firstMoveFlag) {
            KSS_changeFlag = curLiIndex - 1;
            break;
          } else {
            KSS_changeFlag = curLiIndex;
            break;
          }
        }
        KSS_move(settings.moveStyle);
        $(ksbs + " #btnlistID li").each(function(i) {
          if (i == curLiIndex) {
            $(this).css({
              background : settings.btn.btn_bgHoverColor,
              borderColor : settings.btn.btn_borderHoverColor,
              color : settings.btn.btn_fontHoverColor
            });
            $(this).addClass("thisitem").siblings().removeClass("thisitem");
          } else {
            $(this).css({
              background : settings.btn.btn_bgColor,
              borderColor : settings.btn.btn_borderColor,
              color : settings.btn.btn_fontColor
            });
          }
        })
      })
    }
    function KSS_mousehover() {
      $(ksbs + " #btnlistID li").mouseover(function() {
        clearInterval(KSS_setInterval);
      })
      $(ksbs + " #btnlistID li").mouseout(function() {
        KSS_setInterval = setInterval(function() {
          KSS_move(settings.moveStyle)
        }, KSS_IntervalTime * 1000 + settings.moveSpeedTime);
      })
    }
    return KSS_initialize();
  }
})(jQuery);
var online= new Array();
var urlroot = "http://im.bizapp.qq.com:8000/";
var tOut = -1;
var drag = false;
var g_safeNode = null;
lastScrollY = 0;
var kfguin;
var ws;
var companyname;
var welcomeword;
var type;
var wpadomain;
var eid;

var Browser = {
	ie:/msie/.test(window.navigator.userAgent.toLowerCase()),
	moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),
	opera:/opera/.test(window.navigator.userAgent.toLowerCase()),
	safari:/safari/.test(window.navigator.userAgent.toLowerCase())
};


if(kfguin)
{
  _Ten_rightDivHtml = '<div id="_Ten_rightDiv" style="position:absolute; top:160px; right:1px; display:none;">';

  _Ten_rightDivHtml += kf_getPopup_Ten_rightDivHtml(kfguin,ws,wpadomain);

  _Ten_rightDivHtml += '</div>';

  document.write(_Ten_rightDivHtml);

  if(type==1 && kf_getCookie('hasshown')==0)
  {
  	  companyname = companyname.substr(0,15);
      welcomeword = kf_processWelcomeword(welcomeword);

  	  kfguin = kf_getSafeHTML(kfguin);
  	  companyname = kf_getSafeHTML(companyname);

  	  welcomeword = welcomeword.replace(/<brT>/g,'\r\n');
  	  welcomeword = kf_getSafeHTML(welcomeword);
  	  welcomeword = welcomeword.replace(/\r/g, "").replace(/\n/g, "<BR>");

      window.setTimeout("kf_sleepShow()",10000);
  }
  window.setTimeout("kf_moveWithScroll()",1);
}

function kf_getSafeHTML(s)
{
	var html = "";
	var safeNode = g_safeNode;
	if(!safeNode){
		safeNode = document.createElement("TEXTAREA");
	}
	if(safeNode){
		if(Browser.moz){
			safeNode.textContent = s;
		}
		else{
			safeNode.innerText = s;
		}
		html = safeNode.innerHTML;
		if(Browser.moz){
			safeNode.textContent = "";
		}
		else{
			safeNode.innerText = "";
		}
		g_safeNode = safeNode;
	}
	return html;
}

function kf_moveWithScroll()
{
	 if(typeof window.pageYOffset != 'undefined') {
        nowY = window.pageYOffset;
     }
     else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
        nowY = document.documentElement.scrollTop;
     }
     else if(typeof document.body != 'undefined') {
        nowY = document.body.scrollTop;
     }

		percent = .1*(nowY - lastScrollY);
		if(percent > 0)
		{
			percent=Math.ceil(percent);
		}
		else
		{
			percent=Math.floor(percent);
		}

	 document.getElementById("_Ten_rightDiv").style.top = parseInt(document.getElementById("_Ten_rightDiv").style.top) + percent+"px";
	 if(document.getElementById("kfpopupDiv"))
	 {
	 	document.getElementById("kfpopupDiv").style.top = parseInt(document.getElementById("kfpopupDiv").style.top) + percent+"px";
	 }
	 lastScrollY = lastScrollY + percent;
	 tOut = window.setTimeout("kf_moveWithScroll()",1);
}

function kf_hide()
{
	if(tOut!=-1)
	{
		clearTimeout(tOut);
		tOut=-1;
	}
	if(document.getElementById("_Ten_rightDiv") != undefined) {
		document.getElementById("_Ten_rightDiv").style.visibility = "hidden";
		document.getElementById("_Ten_rightDiv").style.display = "none";
	}	
}

function kf_hidekfpopup()
{
	if(tOut!=-1)
	{
		clearTimeout(tOut);
		tOut=-1;
	}
	document.getElementById("kfpopupDiv").style.visibility = "hidden";
	document.getElementById("kfpopupDiv").style.display = "none";
	tOut=window.setTimeout("kf_moveWithScroll()",1);
}

function kf_getPopupDivHtml(kfguin,reference,companyname,welcomeword, wpadomain)
{
	var temp = '';
	temp += '<div style="float:left; height:150px; width:8px; background-image:url('+urlroot+'bg_1.gif);"></div>';
    temp += '<div style="font-family:Tahoma; text-align:left; float:left; height:150px; width:324px; background-image:url('+urlroot+'bg_2.gif); background-repeat:repeat-x;">';
    temp += '<div><h1 style="float:left; width:250px; height:28px; line-height:28px; padding:2px 20px 0 2px; margin:0 0 9px 0; font-size:14px; color:#FFFFFF; display:block; background:none; border:none; position:static;">'+companyname+'</h1><a href="#" onclick="kf_hidekfpopup();return false;" style="background-image: url('+urlroot+'close.gif); float:right; height:19px; width:42px;" onmouseover="javascript:this.style.backgroundPosition=\'bottom\'" onmouseout="javascript:this.style.backgroundPosition=\'top\'"></a></div>';
    temp += '<div style="height:83px; padding:0 0 0 2px; clear:both;">';
    temp += '<div style="background-image:url('+urlroot+'face.jpg); height:70px; width:70px; float:left;"></div>';
    temp += '<p style="font-family:Tahoma; font-size:12px; line-height:24px; width: 240px; margin:0px; padding: 0 0 0 12px; display:block; float:left; margin-top:2px; word-wrap:break-word;">'+welcomeword+'</p></div>';
    temp += '<div style="clear:both;">';
    temp += '<a onclick="kf_hidekfpopup();return false;" href="#" style="float:right; background-image:url('+urlroot+'btn_1.gif); margin:0 0 0 5px; padding:0px; border:0px; height:21px; width:69px;"></a>';
    temp += '<a onclick="kf_openChatWindow(1,\''+wpadomain+'\',\''+kfguin+'\')" href="#" style="float:right; background-image:url('+urlroot+'btn_2.gif); margin:0; padding:0px; border:0px; height:21px; width:69px;"></a></div>';
    temp += '</div><div style="float:left; height:150px; width:8px; background-image:url('+urlroot+'bg_1.gif); background-position:right;"></div>';

    return temp;
}

function kf_getPopup_Ten_rightDivHtml(kfguin,reference, wpadomain)
{
	var temp = "";

//	temp += '<div style="width:90px; height:150px;">';
//	temp += '<div style="width:8px; height:150px; float:left; background:url('+urlroot+'bg_1.gif);"></div>';
//	temp += '<div style="float:left; width:74px; height:150px; background:url('+urlroot+'middle.jpg); background-position: center;">';
//	temp += '<div ><h1 style="line-height:17px; font-size:14px; color:#FFFFFF; margin:0px; padding:10px 0 13px 8px; display:block; background:none; border:none; float:none; position:static;">&nbsp;</h1></div>';
//	temp += '<div style="height:83px; padding:0 0 0 2px; clear:both;"><div style="width:70px; height:70px; float:left; background:url('+urlroot+'face.jpg);"></div></div>';
//	temp += '<div style="clear:both;"><a href="#" onclick="kf_openChatWindow(0,\''+wpadomain+'\',\''+kfguin+'\')" style="width:69px; height:21px; background:url('+urlroot+'btn_2.gif); margin:0 0 0 2px; display:block;"></a></div></div>';
//	temp += '<div style="width:8px; height:150px; float:left; background:url('+urlroot+'bg_1.gif) right;"></div></div>';


	temp += '<div style="width:35px; height:302px;">';
	temp += '<img src="http://www.eelly.com/themes/mall/default/styles/default/images/custom_icon.jpg" width="35" height="302" border="0" usemap="#Map" />';
	temp += '<map name="Map" id="Map">';
	temp += '<area shape="rect" coords="3,5,32,99" href="javascript:;" onclick="kf_openChatWindow(0,\''+wpadomain+'\',\''+kfguin+'\')" title="网站帮助" />';
	temp += '<area shape="rect" coords="4,102,32,204" href="http://bbs.eelly.com/forum.php" target="_blank" title="店主交流" />';
	temp += '<area shape="rect" coords="3,208,33,299" href="javascript:;" onclick="this.style.behavior=\'url(#default#homepage)\';this.setHomePage(\'http://www.eelly.com/\');return(false);" style="behavior: url(#default#homepage)" />';
	temp += '</map></div>';

	return temp;
}

//added by simon 2008-11-04
function kf_openChatWindow(flag, wpadomain, kfguin)
{
//	window.open('http://'+wpadomain+'.qq.com/webc.htm?new=0&sid='+kfguin+'&eid='+eid+'&o=&q=7', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
//	if(flag==1)
//	{
//		kf_hidekfpopup();
//	}
	window.open('/dialog.htm','_blank','height=473,width=703,fullscreen=3,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no');
	return false;
}
//added by simon 2008-11-04 end

function kf_validateWelcomeword(word)
{
	var count = 0;

	for(var i=0;i<word.length;i++)
	{
		if(word.charAt(i)=='\n')
		{
			count++;
		}
		if(count>2)
		{
				return 2;
		}
	}
	if(word.length > 57+2*count)
	{
		return 1;
	}

	count = 0;
  var temp = word.indexOf('\n');
  while(temp!=-1)
  {
  	word = word.substr(temp+1);
  	if(temp-1<=19)
  	{
  		count += 19;
  	}
  	else if(temp-1<=38)
  	{
  		count += 38;
  	}
  	else if(temp-1<=57)
  	{
  		count += 57;
  	}

  	temp = word.indexOf('\n');
  }
  count+=word.length;
  if(count>57)
  {
  	return 3;
  }

  return 0;
}

function kf_processWelcomeword(word)
{
	word = word.substr(0,57+10);
	var result = '';
	var count = 0;
	var temp = word.indexOf('<brT>');

  while(count<57 && temp!=-1)
  {

  	if(temp<=19)
  	{
  		count += 19;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	else if(temp<=38)
  	{
  		count += 38;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}
  	else if(temp<=57)
  	{
  		count += 57;
  		if(count<=57)
  		{
  		   result += word.substr(0,temp+5);
  	  }
  	  else
  	  {
  	  	 result += word.substr(0,57-count>word.length?word.length:57-count);
  	  }
  	}

  	word = word.substr(temp+5);
  	temp = word.indexOf('<brT>');
  }

  if(count<57)
  {
      result += word.substr(0,57-count>word.length?word.length:57-count);
  }

  return result;
}

function kf_setCookie(name, value, exp, path, domain)
{
	var nv = name + "=" + escape(value) + ";";

	var d = null;
	if(typeof(exp) == "object")
	{
		d = exp;
	}
	else if(typeof(exp) == "number")
	{
		d = new Date();
		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + exp, d.getSeconds(), d.getMilliseconds());
	}

	if(d)
	{
		nv += "expires=" + d.toGMTString() + ";";
	}

	if(!path)
	{
		nv += "path=/;";
	}
	else if(typeof(path) == "string" && path != "")
	{
		nv += "path=" + path + ";";
	}

	if(!domain && typeof(VS_COOKIEDM) != "undefined")
	{
		domain = VS_COOKIEDM;
	}

	if(typeof(domain) == "string" && domain != "")
	{
		nv += "domain=" + domain + ";";
	}

	document.cookie = nv;
}

function kf_getCookie(name)
{
	var value = "";
	var cookies = document.cookie.split("; ");
	var nv;
	var i;

	for(i = 0; i < cookies.length; i++)
	{
		nv = cookies[i].split("=");

		if(nv && nv.length >= 2 && name == kf_rTrim(kf_lTrim(nv[0])))
		{
			value = unescape(nv[1]);
		}
	}

	return value;
}

function kf_sleepShow()
{
	kf_setCookie('hasshown', 1, '', '/', wpadomain+'.qq.com');

	var position = parseInt(document.getElementById("_Ten_rightDiv").style.top) + 170;
	popupDivHtml = '<div id="kfpopupDiv" onmousedown="MyMove.Move(\'kfpopupDiv\',event,1);"  style="z-index:10000;filter:alpha(opacity=90);position: absolute; top: '+position+'px; right: 500px;color:#000;font-size: 12px;cursor:move;height: 150px;width: 340px;">';
  popupDivHtml += kf_getPopupDivHtml(kfguin,ws,companyname,welcomeword, wpadomain);
  popupDivHtml += '</div>';
  document.body.insertAdjacentHTML("beforeEnd",popupDivHtml);
}

function kf_dealErrors()
{
	kf_hide();
	return true;
}

function kf_lTrim(str)
{
  while (str.charAt(0) == " ")
  {
    str = str.slice(1);
  }
  return str;
}

function kf_rTrim(str)
{
  var iLength = str.length;
  while (str.charAt(iLength - 1) == " ")
  {
    str = str.slice(0, iLength - 1);
	iLength--;
  }
  return str;
}

window.onerror = kf_dealErrors;
var MyMove = new Tong_MoveDiv();

function Tong_MoveDiv()
{
 	  this.Move=function(Id,Evt,T)
 	  {
 	  	if(Id == "")
		{
			return;
		}
 	  	var o = document.getElementById(Id);
 	  	if(!o)
		{
			return;
		}
 	    evt = Evt ? Evt : window.event;
 	    o.style.position = "absolute";
 	    o.style.zIndex = 9999;
 	    var obj = evt.srcElement ? evt.srcElement : evt.target;
 	    var w = o.offsetWidth;
 	    var h = o.offsetHeight;
 	    var l = o.offsetLeft;
 	    var t = o.offsetTop;
 	    var div = document.createElement("DIV");
 	    document.body.appendChild(div);
 	    div.style.cssText = "filter:alpha(Opacity=10,style=0);opacity:0.2;width:"+w+"px;height:"+h+"px;top:"+t+"px;left:"+l+"px;position:absolute;background:#000";
 	    div.setAttribute("id", Id +"temp");
 	    this.Move_OnlyMove(Id,evt,T);
 	}

 	this.Move_OnlyMove = function(Id,Evt,T)
 	{
 		  var o = document.getElementById(Id+"temp");
 		  if(!o)
		  {
			return;
		  }
 		  evt = Evt?Evt:window.event;
 		  var relLeft = evt.clientX - o.offsetLeft;
 		  var relTop = evt.clientY - o.offsetTop;
 		  if(!window.captureEvents)
 		  {
 		  	 o.setCapture();
 		  }
 		  else
 		  {
 		  	 window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
 		  }

	      document.onmousemove = function(e)
	      {
	            if(!o)
	            {
	                return;
	            }
	            e = e ? e : window.event;

	        	var bh = Math.max(document.body.scrollHeight,document.body.clientHeight,document.body.offsetHeight,
	        						document.documentElement.scrollHeight,document.documentElement.clientHeight,document.documentElement.offsetHeight);
	        	var bw = Math.max(document.body.scrollWidth,document.body.clientWidth,document.body.offsetWidth,
	        						document.documentElement.scrollWidth,document.documentElement.clientWidth,document.documentElement.offsetWidth);
	        	var sbw = 0;
	        	if(document.body.scrollWidth < bw)
	        		sbw = document.body.scrollWidth;
	        	if(document.body.clientWidth < bw && sbw < document.body.clientWidth)
	        		sbw = document.body.clientWidth;
	        	if(document.body.offsetWidth < bw && sbw < document.body.offsetWidth)
	        		sbw = document.body.offsetWidth;
	        	if(document.documentElement.scrollWidth < bw && sbw < document.documentElement.scrollWidth)
	        		sbw = document.documentElement.scrollWidth;
	        	if(document.documentElement.clientWidth < bw && sbw < document.documentElement.clientWidth)
	        		sbw = document.documentElement.clientWidth;
	        	if(document.documentElement.offsetWidth < bw && sbw < document.documentElement.offsetWidth)
	        		sbw = document.documentElement.offsetWidth;

	            if(e.clientX - relLeft <= 0)
	            {
	                o.style.left = 0 +"px";
	            }
	            else if(e.clientX - relLeft >= bw - o.offsetWidth - 2)
	            {
	                o.style.left = (sbw - o.offsetWidth - 2) +"px";
	            }
	            else
	            {
	                o.style.left = e.clientX - relLeft +"px";
	            }
	            if(e.clientY - relTop <= 1)
	            {
	                o.style.top = 1 +"px";
	            }
	            else if(e.clientY - relTop >= bh - o.offsetHeight - 30)
	            {
	                o.style.top = (bh - o.offsetHeight) +"px";
	            }
	            else
	            {
	                o.style.top = e.clientY - relTop +"px";
	            }
	      }

 		  document.onmouseup = function()
 		  {
 		   	   if(!o) return;

 		   	   if(!window.captureEvents)
			   {
			   	  o.releaseCapture();
			   }
 		   	   else
			   {
			   	  window.releaseEvents(Event.MOUSEMOVE|Event.MOUSEUP);
			   }

 		   	   var o1 = document.getElementById(Id);
 		   	   if(!o1)
			   {
			      return;
			   }
 		   	   var l0 = o.offsetLeft;
 		   	   var t0 = o.offsetTop;
 		   	   var l = o1.offsetLeft;
 		   	   var t = o1.offsetTop;

 		   	   //alert(l0 + " " +  t0 +" "+ l +" "+t);

 		   	   MyMove.Move_e(Id, l0 , t0, l, t,T);
 		   	   document.body.removeChild(o);
 		   	   o = null;
 		}
 	}


 	this.Move_e = function(Id, l0 , t0, l, t,T)
 	{
 		    if(typeof(window["ct"+ Id]) != "undefined")
			{
				  clearTimeout(window["ct"+ Id]);
			}

 		    var o = document.getElementById(Id);
 		    if(!o) return;
 		    var sl = st = 8;
 		    var s_l = Math.abs(l0 - l);
 		    var s_t = Math.abs(t0 - t);
 		    if(s_l - s_t > 0)
			{
				if(s_t)
				{
					sl = Math.round(s_l / s_t) > 8 ? 8 : Math.round(s_l / s_t) * 6;
				}

 		        else
				{
					sl = 0;
				}
			}
 		    else
			{
				if(s_l)
				{
					st = Math.round(s_t / s_l) > 8 ? 8 : Math.round(s_t / s_l) * 6;
				}
 		        else
			    {
			  	    st = 0;
			    }
			}

 		    if(l0 - l < 0)
			{
				sl *= -1;
			}
 		    if(t0 - t < 0)
			{
				st *= -1;
			}
 		    if(Math.abs(l + sl - l0) < 52 && sl)
			{
 		    	sl = sl > 0 ? 2 : -2;
			}
 		    if(Math.abs(t + st - t0) < 52 && st)
			{
	        	st = st > 0 ? 2 : -2;
			}
 		    if(Math.abs(l + sl - l0) < 16 && sl)
			{
 		    	sl = sl > 0 ? 1 : -1;
			}
 		    if(Math.abs(t + st - t0) < 16 && st)
			{
 		    	st = st > 0 ? 1 : -1;
			}
 		    if(s_l == 0 && s_t == 0)
			{
     		    return;
			}
 		    if(T)
 		    {
 		    	o.style.left = l0 +"px";
 		    	o.style.top = t0 +"px";
 		    	return;
 		    }
 		    else
 		    {
 		    	if(Math.abs(l + sl - l0) < 2)
				{
					o.style.left = l0 +"px";
				}
 		    	else
				{
					o.style.left = l + sl +"px";
				}
 		    	if(Math.abs(t + st - t0) < 2)
				{
					o.style.top = t0 +"px";
				}
 		    	else
				{
					o.style.top = t + st +"px";
				}

 		    	window["ct"+ Id] = window.setTimeout("MyMove.Move_e('"+ Id +"', "+ l0 +" , "+ t0 +", "+ (l + sl) +", "+ (t + st) +","+T+")", 1);
 		    }
 		}
}

function wpa_count()
{
    var body = document.getElementsByTagName('body').item(0);
    var img = document.createElement('img');
	var now = new Date();
    img.src = "http://"+wpadomain+".qq.com/cgi/wpac?kfguin=" + kfguin + "&ext=0" + "&time=" + now.getTime() + "ip=172.23.30.15&";
    img.style.display = "none";
    body.appendChild(img);
}

/**发送AJAX请求
 * @param url 请求地址
 * @param title 显示标题
 * @param data 当弹出非请求模块框时的html内容 add by 蒲伟
 * @param has_close bool 默认false有关闭,true无关闭
 */
function request_url(url, title, style, has_close, data)
{
    if($('#dialog').is('div') == false)
    {
        $('body').append('<div id="dialog" style="display:none;"></div>');
    }
    if(url == false)   //add by 蒲伟  非请求模态框
    {
        $('#dialog').html(data);
        show_dialog(title, $('#dialog'), style, has_close);
        return;
    }
    auto_loading();
    var ajaxurl = url.replace(/&amp;/ig,'&');
    $.ajax({
        url: ajaxurl,
        dataType:'html',
        type:'GET',
        success:function(msg)
        {
            $('#dialog').html(msg);
            $('#ajax_login').remove();
            if(title=='填写物流单号'){
                show_artdialog(title, msg)
            }else{
                show_dialog(title, $('#dialog'), style, has_close);
            }
        },
        error:function(msg){
            $('#ajax_login').remove();
        }
    });
}

/**
 * 加载层
 */
function auto_loading(auto_img)
{
    if(typeof auto_img == 'undefined') auto_img = true;
    //等待中
    if($('#ajax_login').is('div') == false){
        if(auto_img)
            $('body').append('<div id="ajax_login"><img src="' + STATIC_URL + '/themes/mall/default/styles/default/images/loadin.gif?0123456789" alt="加载中。。。" /></div>');
        else
            $('body').append('<div id="ajax_login">&nbsp;</div>');
    }
    var w = ($('body').outerWidth()-$('#ajax_login img').outerWidth())/2;
    var h = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    var img_h = $(window).height()/2+$(document).scrollTop();
    $('#ajax_login').css({
        'width':'100%',
        'height':h+'px',
        'background-color':'#FFF',
        'filter':'alpha(opacity=30)',
        'opacity':'0.3',
        'z-index':'1002',
        'position':'absolute',
        'top':'0',
        'left':'0',
       // 'cursor':'wait',
        'display':'block',
        'text-align':'center'
    }).children('img').css({
        'position':'absolute',
        'top':img_h+'px',
        'left':w+'px',
        'z-index':'2003'
    });
}

/**
 * 载入dialog
 * @param themes是否使用样式：1|true
 */
function load_dialog(themes)
{
    if(themes == 1 || themes == true)
    {
        //UI样式
        var css_path = 'includes/libraries/javascript/jquery.ui/themes/ui-lightness/jquery.ui.css?q=badcss&0123456789';
        if(document.createStyleSheet)
        {
            document.createStyleSheet(css_path);
        }else{
            load_file(css_path, 'loadDialogCss', 'css');
        }
    }
    if($.isFunction($.blockUI) == false)
    {
        //UI核心库
        var file = 'includes/libraries/javascript/jquery.blockUI.js?q=badcss&0123456789';
        load_file(file, 'loadDialogScript');
    }
}

/**
 * 载入外部文件
 * @param url 要加载文件地址
 * @param id 生成的元件ID
 * @param type 加载的文件类型：css/js
 */
function load_file(url, id, type)
{
    if(type == 'css')
    {
        if(document.createStyleSheet)
        {
            document.createStyleSheet(url);
        }
        else
        {
            $('head').eq(0).append($('<link />').attr({href:url,type:'text/css',rel:'stylesheet', id:id}));
        }

    }else{
        $('head').eq(0).append($("<script></script>").attr({src:url,type:'text/javascript',id:id}));
    }
}
/**
 * 遮罩窗口
 * @param t 标题名称
 * @param msg 显示内容
 * @param style 样式：格式{}
 */
function show_dialog(t, msg, style, has_close,work_place)
{
        /**-----modify by caiwen 自动调整弹出层让其居中在可视区域内-----*/
        var dialogHeight=(typeof msg =='object' ? msg : $('#dialog')).height()+30;//大致计算出弹出框的高度
        var dialogWidth=(style!=undefined ) && style['width'] ? parseInt( style['width'] ) : ( ( typeof msg =='object' ? msg : $('#dialog')).width())+32;
        var clienineerH=($(window).height()/2-dialogHeight/2)+$(document).scrollTop();//范围之内弹出框的top
        var clientoutH=$(document).scrollTop();//弹出框比可视区域还高，让其直接置顶
        var H=($(window).height() > dialogHeight ? clienineerH : clientoutH)+'px';
        var L=((($(document.body).width())/2)-(dialogWidth/2))+'px';
        if(! style)
        {
          style={left:L,top:H,width:'500px',position:"absolute"};
        }
        else
        { 
          var defaultstyle = {left:(style['read']==1)? style['left']:L,top:!style['top'] ? H : style['top'] , width:!style['width'] ? '500px' : style['width']};
          //style=$.mergeJsonObject(style,defaultstyle);
          
            var resultJsonObject={};
            for(var attr in style){
            resultJsonObject[attr]=style[attr];
            }
            for(var attr in defaultstyle){
            resultJsonObject[attr]=defaultstyle[attr];
            }
            style = resultJsonObject;
        }
       if(t){
            load_dialog(1);
            //add by caiwen 增加有无关闭按钮
            !has_close  ? (tt=t+'<a href="javascript:void(0);" class="ui-dialog-titlebar-close ui-corner-all" role="button" unselectable="on" style="-moz-user-select: none;"><span class="ui-icon ui-icon-closethick" unselectable="on" style="-moz-user-select: none;">close</span></a>') : (tt=t);
            $.blockUI({title:tt, theme:true, message: msg, themedCSS:style});
            //xuwenfeng定位商品管理使用 -- 同时修改jquery.ui.js , 修改方式奇怪
            if(work_place == "store_spgn")
            {
                if($.browser.msie && ($.browser.version == "6.0"))
                {
                    $('.blockMsg,.blockUI').css('position','absolute');
                }
                else
                {
                    $('.blockMsg,.blockUI').css('position','fixed');
                }
            }
            else
            {
                $('.blockMsg,.blockUI').css('position','absolute');
            }
            $('.blockOverlay').css({'height':Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)+'px','cursor':'default'});
            $('.ui-dialog-titlebar-close').click(function(){
                $.unblockUI();
            });
        }else{
            load_dialog();
            $.blockUI({message: msg, css:style});
        }
}

/**
 * 消息窗口
 * @param msg
 * @param fun
 */
function show_msg(msg, fun)
{
    load_dialog(1);
    $.unblockUI();
    $.blockUI({title:'消息提示：', theme:true, message:msg, themedCSS:{top:'50%'}});
    window.setTimeout(function(){
        $.unblockUI();
        if(fun && (fun instanceof Function)) fun();
    },1500);
}


function js_success(dialog_id)
{
    $.unblockUI();
    var url = window.location.href;
    url =  url.indexOf('#') > 0 ? url.replace(/#/g, '') : url;
    window.location.replace(url);
}

function js_fail(str)
{
    show_msg(str);
}

/**
 * artdialog 新弹窗 by caiyx
 * @param t 标题名称
 * @param msg 显示内容
 */

function close_dialog(){
    var list = art.dialog.list;
    for (var i in list) {
        list[i].close();
    };
}

function show_artdialog(t,msg){
    //弹出前清除之前弹出框
    close_dialog();
    //参数配置
    art.dialog({
        left:'50%',
        top: '40%',
        fixed: true,
        drag: false,
        resize: false,
        title: t,
        close: function () {
            //alert('回调函数');
        },
        lock: true,
        background: '#666', // 背景色
        opacity: 0.87,    // 透明度
        content: msg
    });

}
/*www.jq22.com*/