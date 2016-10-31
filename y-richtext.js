!function t(e,r,n){function o(l,a){if(!r[l]){if(!e[l]){var s="function"==typeof require&&require;if(!a&&s)return s(l,!0);if(i)return i(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[l]={exports:{}};e[l][0].call(c.exports,function(t){var r=e[l][1][t];return o(r?r:t)},c,c.exports,t,e,r,n)}return r[l].exports}for(var i="function"==typeof require&&require,l=0;l<n.length;l++)o(n[l]);return o}({1:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t){function e(t,e){return t===e||null==t&&null==e||null!=t&&null!=e&&t.constructor===Array&&t[0]===e[0]&&t[1]===e[1]}t.requestModules(["Array"]).then(function(){var r=function(r){function l(t,e,r){n(this,l);var i=o(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t,e,r));return i.instances=[],i.eventHandler._pullChanges=function(){i.instances.forEach(function(t){t.editor.update()})},i._quillBlockFormats=["blockquote","header","indent","list","align","direction","code-block"],i}return i(l,r),a(l,[{key:"_sanitizeOpAttributes",value:function(t){if(null==t||0===Object.keys(t).length)return null;var e={};for(var r in t)this._quillBlockFormats.some(function(t){return t===r})?e._block=[r,t[r]]:e[r]=t[r];return e}},{key:"_formatAttributesForQuill",value:function(t){var e={};for(var r in t){var n=t[r];"_block"===r?n&&(e[t[r][0]]=t[r][1]):e[r]=n}return e}},{key:"_destroy",value:function(){this.unbindQuillAll(),s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"_destroy",this).call(this)}},{key:"toString",value:function(){return this._content.map(function(t){return"string"==typeof t.val?t.val:void 0}).join("")}},{key:"toDelta",value:function(){function t(){var t={};for(var e in l.attributes)t[e]=l.attributes[e];l={insert:[],attributes:t}}for(var e=this,r=!1,n=this._content.length-1;n>=0;n--){var o=this._content[n];if(o.val.constructor!==Array){"\n"===o.val&&(r=!0);break}}r||this.push("\n");var i=[],l={insert:[],attributes:{}};for(n=0;n<this._content.length;n++){var a=this._content[n].val;if(a.constructor===Array){if(!l.attributes.hasOwnProperty(a[0])&&null==a[1]||l.attributes[a[0]]===a[1])continue;l.insert.length>0&&(l.insert=l.insert.join(""),i.push(l),t()),null===a[1]?delete l.attributes[a[0]]:l.attributes[a[0]]=a[1]}else"string"==typeof a?l.insert.push(a):(l.insert.length>0&&(l.insert=l.insert.join(""),i.push(l),t()),l.insert=a,i.push(l),t())}return l.insert.length>0&&(l.insert=l.insert.join(""),i.push(l)),i.forEach(function(t){0===Object.keys(t.attributes).length?delete t.attributes:t.attributes=e._formatAttributesForQuill(t.attributes)}),i}},{key:"insert",value:function(t,e){for(var r=0,n={},o=0;o<this._content.length&&r!==t;o++){var i=this._content[o].val;i.constructor!==Array?r++:null===i[1]?delete n[i[0]]:n[i[0]]=i[1]}var a;return a="string"==typeof e?e.split(""):e.constructor===Object?[e]:e,s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"insert",this).call(this,o,a),n}},{key:"delete",value:function(t,r){var n=0,o={},i=t+r;if(!(0>=r)){var a,u,c,f;for(a=0;t>n&&a<this._content.length;a++)c=this._content[a].val,c.constructor!==Array?n++:o[c[0]]=c[1];for(u=a;i>n&&u<this._content.length;u++)c=this._content[u].val,c.constructor!==Array&&n++;if(u===this._content.length)s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,a,u-a);else{c.constructor!==Array&&u--;var h={};for(f=u;f>=a;f--)if(c=this._content[f].val,c.constructor===Array)void 0===h[c[0]]?(e(c[1],o[c[0]])&&s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,f,1),h[c[0]]=c[1]):s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,f,1);else{for(var p=f+1;f>a&&(c=this._content[f-1].val,c.constructor!==Array);)f--;s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,f,p-f)}}}}},{key:"select",value:function(t,r,n,o){if(null==t||null==r||null==n||void 0===o)throw new Error("You must define four parameters");for(var i,a,u=[n,null],c=0,f=0;f<this._content.length&&c!==t;f++){var h=this._content[f].val;h.constructor===Array?h[0]===n&&(u[1]=h[1]):c++}e(u[1],o)||(i=f,a=[n,o]);for(var p=[];f<this._content.length&&c!==r;f++){var v=this._content[f].val;v.constructor===Array?v[0]===n&&(u[1]=v[1],p.push(f)):c++}for(var y=p.length-1;y>=0;y--){var _=p[y];s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,_,1),f>_&&f--,i>_&&i--}if(!e(u[1],o)&&f<this._content.length){var b,d=!0;for(y=f;y<this._content.length&&(b=this._content[y].val,b.constructor===Array);y++)if(b[0]===n){d=!1,e(b[1],o)&&s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,y,1);break}if(d){var g=[n,u[1]];s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"insert",this).call(this,f,[g])}}if(null!=i)for(s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"insert",this).call(this,i,[a]),y=i-1;y>=0&&(b=this._content[y].val,b.constructor===Array);y--)b[0]===n&&s(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"delete",this).call(this,y,1)}},{key:"applyDelta",value:function(t,r){for(var n,o=0,i=0;i<t.ops.length;i++){var l,a,s=t.ops[i],u=this._sanitizeOpAttributes(s.attributes);if(null!=s.insert){"string"==typeof s.insert?(l=this.insert(o,s.insert),a=s.insert.length):(l=this.insert(o,s.insert),a=1);for(n in u)e(u[n],l[n])||this.select(o,o+a,n,u[n]);for(n in l)(null==u||null==u[n])&&this.select(o,o+a,n,null);o+=a}if(null!=s["delete"]&&this["delete"](o,s["delete"]),null!=s.retain&&null!=r){var c=o+s.retain;if(c>this.length){var f=r.getText(this.length);r.insertText(this.length,f);for(n in u){var h={};h[n]=!1,h=this._formatAttributesForQuill(h),r.formatText(this.length+f.length,f.length,h)}this.insert(this.length,f)}for(n in u){var p=u[n];this.select(o,c,n,p);var v={};if(v[n]=null==p?!1:p,v=this._formatAttributesForQuill(v),"_block"===n){var y={};this._quillBlockFormats.forEach(function(t){y[t]=!1}),r.formatText(o,s.retain,y)}r.formatText(o,s.retain,v)}o=c}}}},{key:"bind",value:function(){this.bindQuill.apply(this,arguments)}},{key:"unbindQuillAll",value:function(){for(var t=this.instances.length-1;t>=0;t--)this.unbindQuill(this.instances[t].editor)}},{key:"unbindQuill",value:function(t){var e=this.instances.findIndex(function(e){return e.editor===t});if(e>=0){var r=this.instances[e];r.editor.yRichtextBinding=null,this.unobserve(r.yCallback),r.editor.off("text-change",r.quillCallback),this.instances.splice(e,1)}}},{key:"bindQuill",value:function(r){function n(t){if(a){a=!1;try{t()}catch(e){throw a=!0,new Error(e)}a=!0}}function o(t){n(function(){l.applyDelta(t,r)})}function i(o){n(function(){var n,i;if("insert"===o.type)for(var a=0;a<o.values.length;){for(var s=[];a<o.values.length&&o.values[a].constructor!==Array;)s.push(o.values[a]),a++;if(s.length>0){for(var u=0,c={},f=0;f<o.index;f++)n=l._content[f].val,n.constructor!==Array?u++:c[n[0]]=n[1];for(f=o.index+o.length;f<l._content.length&&(n=l._content[f].val,n.constructor===Array);)c.hasOwnProperty(n[0])||(c[n[0]]=null),f++;for(var h in c)null==c[h]&&(c[h]=!1);if(l.length===u+s.length&&"\n"!==s[s.length-1]){var p=["\n"],v={};for(h in c)c[h]!==!1&&(p.unshift([h,!1]),v[h]=!1);t.Array.typeDefinition["class"].prototype.insert.call(l,u+s.length,p),r.insertText(u,"\n",l._formatAttributesForQuill(v))}var y=[];u>0&&y.push({retain:u});var _=[];s.forEach(function(t){"string"==typeof t?_.push(t):(_.length>0&&(y.push({insert:_.join(""),attributes:c}),_=[]),y.push({insert:t,attributes:c}))}),_.length>0&&y.push({insert:_.join(""),attributes:c}),y.forEach(function(t){null!=t.attributes&&Object.keys(t.attributes).length>0?t.attributes=l._formatAttributesForQuill(t.attributes):delete t.attributes}),r.updateContents(y)}else{i=null;for(var b=o.values[a++],d=0,g=o.index+a-2;g>=0;g--)if(n=l._content[g].val,n.constructor===Array){if(b[0]===n[0]){i=n[1];break}}else d++;for(;g>=0;g--)n=l._content[g].val,n.constructor!==Array&&d++;if(e(b[1],i))continue;for(var O=d,x=o.index+a;x<l._content.length;x++)if(n=l._content[x].val,n.constructor===Array){if(n[0]===b[0])break}else O++;if(d!==O){var k={};if(k[b[0]]=null==b[1]?!1:b[1],k=l._formatAttributesForQuill(k),"_block"===b[0]){var A={};l._quillBlockFormats.forEach(function(t){A[t]=!1}),r.formatText(d,O-d,A)}r.formatText(d,O-d,k)}}}else if("delete"===o.type){for(var m=[],j=0,w=0;j<o.length;j++)o.values[j].constructor===Array&&(j!==w&&m.push({type:"text",length:j-w,index:o.index}),w=j+1,m.push({type:"selection",val:o.values[j],index:o.index}));j!==w&&m.push({type:"text",length:j-w,index:o.index}),m.forEach(function(t){if("text"===t.type){for(var o=0,a=0;a<t.index;a++)n=l._content[a].val,n.constructor!==Array&&o++;r.deleteText(o,t.length)}else{i=null;var s,u=0;for(s=t.index-1;s>=0;s--)if(n=l._content[s].val,n.constructor===Array){if(n[0]===t.val[0]){i=n[1];break}}else u++;for(;s>=0;s--)n=l._content[s].val,n.constructor!==Array&&u++;var c=u;for(s=t.index;s<l._content.length;s++)if(n=l._content[s].val,n.constructor===Array){if(n[0]===t.val[0])break}else c++;if(!e(i,t.val[1])&&u!==c){var f={};if(f[t.val[0]]=null==i?!1:i,f=l._formatAttributesForQuill(f),"_block"===t.val[0]){var h={};l._quillBlockFormats.forEach(function(t){h[t]=!1}),r.formatText(u,c-u,h)}r.formatText(u,c-u,f)}}})}r.update()})}var l=this,a=!0;null!=r.yRichtextBinding&&r.yRichtextBinding.unbindQuill(r),r.setContents(this.toDelta()),r.update(),r.on("text-change",o),this.observe(i),this.instances.push({editor:r,yCallback:i,quillCallback:o}),r.yRichtextBinding=this}},{key:"length",get:function(){return this.toString().length}}]),l}(t.Array.typeDefinition["class"]);t.extend("Richtext",new t.utils.CustomTypeDefinition({name:"Richtext","class":r,struct:"List",initType:regeneratorRuntime.mark(function l(e,n){var o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=[],i.delegateYield(t.Struct.List.map.call(this,n,function(t){if(t.hasOwnProperty("opContent"))throw new Error("Text must not contain types!");t.content.forEach(function(e,r){o.push({id:[t.id[0],t.id[1]+r],val:t.content[r]})})}),"t0",2);case 2:return i.abrupt("return",new r(e,n.id,o));case 3:case"end":return i.stop()}},l,this)}),createType:function(t,e){return new r(t,e.id,[])}}))})}var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=function u(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:u(o,e,r)}if("value"in n)return n.value;var i=n.get;return void 0===i?void 0:i.call(r)};e.exports=l,"undefined"!=typeof Y&&l(Y)},{}]},{},[1]);
//# sourceMappingURL=y-richtext.js.map
