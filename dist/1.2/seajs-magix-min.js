(function(e,t,r,n,a,i){i=0,a=function(e){return e.id||(e.id="mx_n_"+ ++i)},n("magix/magix",function(){var r=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,n=/\/[^\/]*$/,a=/[#?].*$/,i="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="path",c=/^https?:\/\//i,f=0,u="/",m="vframe",v="\n",h=t.console,l=h&&h.error,d=function(){},g={tagName:m,rootId:"magix_vf_root",coded:1,execError:function(e){l&&h.error(e)}},p=g.hasOwnProperty,x=function(e,t){return e&&p.call(e,t)},y=function(t){return function(r,n,a){switch(arguments.length){case 0:a=t;break;case 1:a=_._o(r)?C(t,r):x(t,r)?t[r]:e;break;case 2:n===e?(delete t[r],a=n):t[r]=a=n}return a}},w=function(e,t){return t.f-e.f||t.t-e.t},b=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5)):r=new b(e,t),r},C=function(e,t,r){for(var n in t)r&&x(r,n)||(e[n]=t[n]);return e};C(b.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,x(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},list:function(){return this.c},set:function(e,t,r){var n=this,a=n.c,i=s+e,o=a[i];if(!x(a,i)){if(a.length>=n.b){a.sort(w);for(var c=n.b-n.x;c--;)o=a.pop(),delete a[o.k],o.m&&T(o.m,o.o,o)}o={},a.push(o),a[i]=o}return o.o=e,o.k=i,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=i,delete t[e],r.m&&(T(r.m,r.o,r),r.m=i))},has:function(e){return x(this.c,s+e)}});var M=b(40),P=b(),T=function(e,t,r,n,a,i){for(_._a(e)||(e=[e]),t&&(_._a(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{i=e[n],a=i&&i.apply(r,t)}catch(o){g.execError(o)}return a},_={mix:C,has:x,safeExec:T,noop:d,config:y(g),start:function(e){var t=this;C(g,e),t.use(["magix/router","magix/vom",e.iniFile],function(r,n,a){g=C(g,a,e),g["!tnc"]=g.tagName!=m,r.on("!ul",n.locChged),r.on("changed",n.locChged),t.use(g.extensions,r.start)})},keys:Object.keys||function(e){var t=[];for(var r in e)x(e,r)&&t.push(r);return t},local:y({}),path:function(e,t){var o=e+v+t,s=P.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(a,i).replace(n,i)+u,t.charAt(0)==u){var f=c.test(e)?8:0,m=e.indexOf(u,f);s=e.substring(0,m)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");P.set(o,s)}return s},pathToObject:function(e,t){var r=e+v+t,n=M.get(r);if(!n){n={};var f={},m=i;a.test(e)?m=e.replace(a,i):~e.indexOf("=")||(m=e);var h=e.replace(m,i);if(m&&c.test(m)){var l=m.indexOf(u,8);m=~l?m.substring(l):u}h.replace(o,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(a){}f[r]=n}),n[s]=m,n.params=f,M.set(r,n)}return n},objectToPath:function(e,t,r){var n,a=e[s],i=[],o=e.params;for(var c in o)n=o[c],(!r||n||x(r,c))&&(t&&(n=encodeURIComponent(n)),i.push(c+"="+n));return i.length&&(a=a+"?"+i.join("&")),a},listToMap:function(e,t){var r,n,a,i={};if(_._s(e)&&(e=e.split(",")),e&&(a=e.length))for(r=0;a>r;r++)n=e[r],i[t?n[t]:n]=t?n:1;return i},cache:b},E=Object.prototype.toString;return C(_,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==E.call(e)},_s:function(e){return"[object String]"==E.call(e)},_n:function(e){return"[object Number]"==E.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var a=function(){};return a.prototype=t.prototype,e.prototype=new a,_.mix(e.prototype,r),_.mix(e,n),e.prototype.constructor=e,e}})}),n("magix/router",["magix/magix","magix/event"],function(e){var r,n,a,i,o,s,c=e("magix/magix"),f=e("magix/event"),u="",m="path",v="view",h=c.has,l=c.mix,d=c.keys,g=c.config(),p=c.cache(),x=c.cache(40),y={params:{},href:u},w=/#.*$/,b=/^[^#]*#?!?/,C="params",M=function(e,t,r){if(e){r=this[C],e=(e+u).split(",");for(var n=0;e.length>n&&!(t=h(r,e[n]));n++);}return t},P=function(){return this[m]},T=function(){return this[v]},_=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},E=function(e){var r=c.pathToObject(e,i),n=r[m];return n&&s&&(r[m]=c.path(t.location.pathname,n)),r},O=l({viewInfo:function(e,t){var r,a;if(!n){n={rs:g.routes||{},nf:g.notFoundView};var i=g.defaultView;n.dv=i;var o=g.defaultPathname||u;r=n.rs,n.f=c._f(r),n.f||r[o]||!i||(r[o]=i),n[m]=o}return e||(e=n[m]),r=n.rs,a=n.f?r.call(g,e,t):r[e],{view:a||n.nf||n.dv,path:e}},start:function(){var e=t.history;a=g.nativeHistory,i=g.coded,o=a&&e.pushState,s=a&&!o,o?O.useState():O.useHash(),O.route()},parseQH:function(e,r){e=e||t.location.href;var n=p.get(e);if(!n){var i=e.replace(w,u),o=e.replace(b,u),s=E(i),c=E(o),f={};l(f,s[C]),l(f,c[C]),n={get:_,set:_,href:e,refHref:y.href,srcQuery:i,srcHash:o,query:s,hash:c,params:f},p.set(e,n)}if(r&&!n[v]){var h;h=n.hash[m]||a&&n.query[m];var d=O.viewInfo(h,n);l(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,a=r+"\n"+n,i=x.get(a);if(!i){var o,s,c;i={},i[v]=c,i[m]=c,i[C]={};var f,u,h=[m,v];for(f=1;f>=0;f--)u=h[f],s=e[u],c=t[u],s!=c&&(i[u]={from:s,to:c},o=1);var l=e[C],g=t[C];for(h=d(l).concat(d(g)),f=h.length-1;f>=0;f--)u=h[f],s=l[u],c=g[u],s!=c&&(i[C][u]={from:s,to:c},o=1);i.occur=o,i.isParam=M,i.isPath=P,i.isView=T,x.set(a,i)}return i},route:function(){var e=O.parseQH(0,1),t=!y.get,n=O.getChged(y,e);y=e,n.occur&&(r=e,O.fire("changed",{location:e,changed:n,force:t}))},navigate:function(e,t,n){if(!t&&c._o(e)&&(t=e,e=u),t&&(e=c.objectToPath({params:t,path:e},i)),e){var a=E(e),f={};if(f[C]=l({},a[C]),f[m]=a[m],f[m]){if(s){var v=r.query[C];for(var d in v)h(v,d)&&!h(f[C],d)&&(f[C][d]=u)}}else{var g=l({},r[C]);f[C]=l(g,f[C]),f[m]=r[m]}var p,x=c.objectToPath(f,i,r.query[C]);p=x!=r[o?"srcQuery":"srcHash"],p&&(o?(O.poped=1,history[n?"replaceState":"pushState"](u,u,x),O.route()):(l(f,r,f),f.srcHash=x,f.hash={params:f[C],path:f[m]},O.fire("!ul",{loc:r=f}),x="#!"+x,n?location.replace(x):location.hash=x))}}},f);return O.useState=function(){var e=O,t=location.href;$(WIN).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},O.useHash=function(){$(WIN).on("hashchange",O.route)},O}),n("magix/body",["magix/magix"],function(t){var n,i=t("magix/magix"),o=i.has,s={},c=String.fromCharCode(26),f="mx-ei",u="mx-owner",m=r.body,v="parentNode",h={},l="on",d=",",g=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},p=function(){this.prevent(),this.stop()},x={process:function(t){if(t&&!t[l]){var r=t.target||t.srcElement||m;for(t[l]=1;r&&1!=r.nodeType;)r=r[v];for(var i,s,x=r,$=t.type,y=h[$]||(h[$]=RegExp(d+$+"(?:,|$)")),w="mx-"+$,b=[];x&&1==x.nodeType&&(i=g(x,w),s=g(x,f),!i&&!y.test(s));)b.push(x),x=x[v];if(i){var C,M=i.split(c);if(M.length>1&&(C=M[0],i=M.pop()),C=C||g(x,u),!C)for(var P=x,T=n.all();P;){if(o(T,P.id)){g(x,u,C=P.id);break}P=P[v]}if(!C)throw Error("bad:"+i);var _=n.get(C),E=_&&_.view;E&&(t.currentId=a(x),t.targetId=a(r),t.prevent=t.preventDefault,t.stop=t.stopPropagation,t.halt=p,E.pEvt(i,$,t))}else{for(var O;b.length;)O=b.pop(),s=g(O,f)||l,y.test(s)||(s=s+d+$,g(O,f,s));O=e}x=r=e}},act:function(e,t,r){var a=s[e]||0,i=a>0?1:0,o=x.process;a+=t?-i:i,a||(r&&(n=r),x.lib(m,e,o,t),t||(a=1)),s[e]=a}},y={focus:2,blur:2,mouseenter:2,mouseleave:2},w=$.now();return x.lib=function(e,t,r,n,a,i){var o=y[t];if(a){r.$n||(r.$n=w--);var s="_$"+r.$n;a[s]||(a[s]=function(){r.apply(a,arguments)}),r=a[s]}i||2!=o?$(e)[n?"off":"on"](t,r):$(e)[(n?"un":"")+"delegate"]("[mx-"+t+"]",t,r)},x}),n("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,a={fire:function(e,t,a,i){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,m=c.length,v=m-1;m--;)f=i?m:v-m,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s);a=a||0>v}a&&delete s[o]},on:function(e,t,n){var a=r(e),i=this[a]||(this[a]=[]),o={f:t};isNaN(n)?(o.r=n,i.push(o)):i.splice(0|n,0,o)},rely:function(e,t,n,a,i){var o=this;o.on(e,t,i),n.on(a,function(){o.off(e,t)},r)},off:function(e,t){var n=r(e),a=this[n];if(a)if(t){for(var i,o=a.length-1;o>=0;o--)if(i=a[o],i.f==t&&!i.d){i.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return t.mix(t.local,a),a}),n("magix/vframe",["magix/magix","magix/event","magix/view"],function(t){var n,i,o,s,c,f,u,m,v,h,l,d=t("magix/magix"),g=t("magix/event"),p=t("magix/view"),x=d.safeExec,$=[],y=d.mix,w=d.config(),b="mx-vframe",C=d.has,M="querySelectorAll",P="alter",T="created",_=function(e){return"object"==typeof e?e:r.getElementById(e)},E=function(e,t,i){return t=_(e),t&&(i=o?r[M]("#"+a(t)+c):t.getElementsByTagName(n)),i||$},O=function(e,t,r){if(e=_(e),t=_(t),e&&t)if(e!==t)try{r=f?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},k=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=l,l.add(e,t)};return k.root=function(t,a,m){if(!u){n=w.tagName,i=w["!tnc"],o=i&&r[M],c=" "+n+"["+b+"=true]",s=i&&!o;var d=r.body;f=d.contains,v=a,h=m,l=t;var g=w.rootId,p=_(g);p||(p=r.createElement(n),p.id=g,d.appendChild(p),p=e),u=new k(g)}return u},y(y(k.prototype,g),{mountView:function(e,t){var r=this,n=_(r.id);if(r._a||(r._a=1,r._t=n.innerHTML),r.unmountView(),e){var a=d.pathToObject(e,w.coded),i=a.path,o=--r.sign;d.use(i,function(e){if(o==r.sign){p.prepare(e);var s=new e({owner:r,id:r.id,$:_,$c:O,path:i,vom:l,location:v});r.view=s;var c=function(e){r.mountZoneVframes(e.id)};s.on("interact",function(e){e.tmpl||(n.innerHTML=r._t,c(_)),s.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),s.on("rendered",c),s.on("prerender",function(e){r.unmountZoneVframes(e.id,1)||r.cAlter()})},0),t=t||{},s.load(y(t,a.params,t),h)}})}},unmountView:function(){var e=this,t=e.view;if(t){m||(m={}),e.unmountZoneVframes(0,1),e.cAlter(m),e.view=0,t.oust();var r=_(e.id);r&&e._a&&(r.innerHTML=e._t),e.viewInited=0,e.viewPrimed&&(e.viewPrimed=0,e.fire("viewUnmounted")),m=0}e.sign--},mountVframe:function(e,t,r){var n=this;n.fcc&&n.cAlter();var a=l.get(e);return a||(a=new k(e),a.pId=n.id,C(n.cM,e)||n.cC++,n.cM[e]=1),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this;e=e||r.id,r.unmountZoneVframes(e,1);var n=E(e),i=n.length,o={};if(i)for(var c,f,u,m,v=0;i>v;v++)if(c=n[v],f=a(c),!C(o,f)&&(u=c.getAttribute("mx-view"),m=s?c.getAttribute(b):1,m||u)){r.mountVframe(f,u,t);for(var h,l=E(c),d=0,g=l.length;g>d;d++)h=l[d],o[a(h)]=1}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=l.get(e);if(n){var a=n.fcc;n.unmountView(),l.remove(e,a);var i=l.get(n.pId);i&&C(i.cM,e)&&(delete i.cM[e],i.cC--,t||i.cCreated())}},unmountZoneVframes:function(e,t){var r,n,a=this,i=a.cM;for(n in i)(!e||O(n,e))&&a.unmountVframe(n,r=1);return t||a.cCreated(),r},invokeView:function(e,t){var r,n=this;if(n.viewInited){var a=n.view,i=a&&a[e];i&&(r=x(i,t||$,a))}return r},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,t.fca=0,r.fire(T,e),t.fire(T,e));var n=t.id,a=l.get(t.pId);a&&!C(a.rM,n)&&(a.rM[n]=a.cM[n],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(t.fcc=0,!t.fca&&r){var n=t.view,a=t.id;n&&(t.fca=1,n.fire(P,e),t.fire(P,e));var i=l.get(t.pId);i&&C(i.rM,a)&&(i.rC--,delete i.rM[a],i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var r=t.olChg(h),n={location:v,changed:h,prevent:function(){this.cs=$},to:function(e){d._s(e)&&(e=e.split(",")),this.cs=e||$}};r&&t.render(n);for(var a,i=n.cs||d.keys(e.cM),o=0,s=i.length;s>o;o++)a=l.get(i[o]),a&&a.locChged()}}}),k}),n("magix/view",function(n){var a=n("magix/magix"),i=n("magix/event"),o=n("magix/body"),s=n("magix/router"),c=a.safeExec,f=a.has,u=",",m=[],v=a.noop,h=a.mix,l=window,d=0,g="~",p="destroy",x=function(e){return function(){var t=this,r=t.notifyUpdate();r>0&&c(e,arguments,t)}},y=function(e){var t=e&&e[p];t&&c(t,m,e)},w=function(e){l.clearTimeout(e),l.clearInterval(e)},b=function(e,t){var r=this,n=r.$res;for(var a in n){var i=n[a];(!e||i.mr)&&r.destroyManaged(a,t)}},C=a.cache(40),M="<",P=">",T=/\smx-(?!view|owner|vframe)[a-z]+\s*=\s*"/g,_=String.fromCharCode(26),E=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,O=/(\w+):(['"]?)([^,]+)\2/g,k=/([$\w]+)<([\w,]+)>/,I=function(e){var t=this;h(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),c(I.ms,[e],t)},q=I.prototype,A={$host:t,$root:r};I.ms=[],I.prepare=function(e){if(!e[g]){e[g]=1;var t,r,n,a,i,o,s=e.prototype,c={},f=[];for(var m in s)if(t=s[m],r=m.match(k))for(n=r[1],a=r[2],a=a.split(u),i=a.length-1;i>-1;i--)r=a[i],o=A[n],o?f.push({n:n,t:r,h:o,f:t}):(c[r]=1,s[n+M+r+P]=t);else"render"==m&&t!=v&&(s[m]=x(t));s.$evts=c,s.$sevts=f}},I.mixin=function(e,t){t&&I.ms.push(t),h(q,e)},h(h(q,i),{render:v,init:v,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=function(n){t&&(e.template=e.wrapMxEvent(n)),e.dEvts(),e.fire("interact",{tmpl:t},1),c(e.init,r,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var a=!t&&!e.rendered;a&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(n)):n()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&(t.fire("prerender",{id:e}),b.call(t,0,1))},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e}))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall"),b.call(e,1,1)),e.sign},wrapMxEvent:function(e){return(e+"").replace(T,"$&"+this.id+_)},wrapAsync:function(e){var t=this,r=t.sign;return function(){r>0&&r==t.sign&&e&&e.apply(this,arguments)}},setViewHTML:function(e,t){var r,n=this;n.beginUpdate(e),n.sign>0&&(r=n.$(e),r&&(r.innerHTML=t)),n.endUpdate(e)},observeLocation:function(e){var t,r=this;t=r.$ol,t.f=1;var n=t.ks;a._o(e)&&(t.pn=e.path,e=e.keys),e&&(t.ks=n.concat((e+"").split(u)))},olChg:function(e){var t,r=this,n=r.$ol;return n.f&&(n.pn&&(t=e.path),t||(t=e.isParam(n.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(p,0,1,1),b.call(e),e.dEvts(1)),e.sign--},parentView:function(){var t=this,r=t.vom,n=t.owner,a=r.get(n.pId),i=e;return a&&a.viewInited&&(i=a.view),i},pEvt:function(e,t,r){var n=this;if(n.sign>0){var a=C.get(e);a||(a=e.match(E),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(O,function(e,t,r,n){a.p[t]=n}),C.set(e,a));var i=a.n+M+t+P,o=n[i];if(o){var s=r[a.f];s&&s.call(r),r.params=a.p,c(o,r,n)}}},dEvts:function(e){var t=this,r=t.$evts,n=t.vom;for(var a in r)o.act(a,e,n);for(r=t.$sevts,a=r.length;a-->0;)n=r[a],o.lib(n.h,n.t,n.f,e,t,1)},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,r=this;for(var n in r.$ns)if(t=r.$c(e,n))break;if(!t)for(var a in r.cM){var i=r.owner.get(a);if(t=i.inside(e))break}return t},navigate:s.navigate,manage:function(e,t,r){var n=this,i=arguments,o=1,s=n.$res;1==i.length?(t=e,e="res_"+d++,o=0):n.destroyManaged(e);var c;c=a._n(t)?w:y;var f={hk:o,res:t,ol:r,mr:t&&t.$reqs,oust:c};return s[e]=f,t},getManaged:function(t,r){var n=this,a=n.$res,i=e;if(f(a,t)){var o=a[t];i=o.res,r&&delete a[t]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,a=n.$res,i=a[e];return!i||t&&i.ol||(r=i.res,i.oust(r),i.hk&&t||delete a[e]),r}});var V={},j="?t="+Math.random(),S={},N={};return q.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(f(S,e))t(S[e]);else{var a=e.indexOf("/"),i=e.substring(0,a);V[i]||(V[i]=seajs.data.paths[i]);var o=V[i]+e.substring(a+1)+".html",s=N[o],u=function(r){t(S[e]=r)};s?s.push(u):(s=N[o]=[u],$.ajax({url:o+j,success:function(e){c(s,e),delete N[o]},error:function(e,t){c(s,t),delete N[o]}}))}},I.extend=function(e,t,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),t&&c(t,arguments,this)};return i.extend=n.extend,a.extend(i,n,e,r)},I}),n("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),a=r.has,i=r.mix,o={},s={},c={},f=r.mix({all:function(){return o},add:function(e,t){a(o,e)||(o[e]=t,f.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var r=o[e];r&&(delete o[e],f.fire("remove",{vframe:r,fcc:t}))},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,i(s,n),!r){i(c,e.changed);var a=t.root(f,s,c);c.view?a.mountView(n.view):a.locChged()}}},n);return f}),n("magix/mmanager",["magix/magix","magix/event"],function(r){var n=r("magix/magix"),a=r("magix/event"),i=n.has,o=n.safeExec,s=n._a,c=n._f,f=n._o,u=1,m=2,v=4,h=Date.now||function(){return+new Date},l=h(),d=t.JSON,g=n.mix,p="mr",x=String.fromCharCode(26),$=12e5,y=function(e,t,r,n){if(c(e))t&&(r=y(o(e)));else if(d)r=d.stringify(e);else if(f(e)||s(e)){r=[];for(n in e)i(e,n)&&r.push(n,p,y(e[n]))}else r=e;return r},w=function(e,t,r){for(var n,a=[t.name,y(r)],i={},o=e.length-1;o>-1;o--)n=e[o],i[n]||a.push(i[n]=y(t[n],1),y(r[n],1));return a.join(x)},b=function(e){var t=e.cache;return t&&(t=t===!0?$:0|t),t},C=function(e){throw Error(e)},M=function(e,t){var r=this;r.$mClass=e,r.$mCache=n.cache(),r.$mCacheKeys={},r.$mMetas={},r.$sKeys=["postParams","urlParams"].concat(t?s(t)?t:[t]:[]),r.id="mm"+l--,o(M.ms,arguments,r)},P=[].slice,T=function(e,t,r,n){return function(){return e.apply(t,[r,n].concat(P.call(arguments)))}},_=function(e,t){var r=t.b,n=t.a,a=n[r];if(a){var i=a.q;delete n[r],o(i,e,a.e)}},E=function(t,r,n){var a,i=this,s=r.a,c=r.c,f=r.d,l=r.g,d=r.i,g=r.j,p=r.k,x=r.l,$=r.m,y=r.n,w=r.o;r.b++,delete c[i.id];var b=i.$mm,C=b.key;if(f[t]=i,n)r.e=1,a=1,r.f=n,l.msg=n,l[t]=n,g.fire("fail",{model:i,msg:n});else{if(!C||C&&!d.has(C)){C&&d.set(C,i),b.time=h();var M=b.done;M&&o(M,i),g.fire("done",{model:i})}b.used>0&&(i.fromCache=1),b.used++}if(!s.$oust){if(p==u){var P=x?$[t]:$;P&&(y[t]=o(P,[a?l:e,i,l],s))}else if(p==m){w[t]={m:i,e:a,s:n};for(var T,_,E=w.i||0;T=w[E];E++)_=x?$[E]:$,T.e&&(l.msg=T.s,l[E]=T.s),y[E]=o(_,[T.e?l:e,T.m,l].concat(y),s);w.i=E}r.b==r.h&&(r.e||(l=e),p==v?(f.unshift(l),y[0]=l,y[1]=o($,f,s)):y.unshift(l),s.$ntId=setTimeout(function(){s.doNext(y)},30))}},O=function(e){return function(){var t=new I(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=P.call(r,0,-1)),t[e].apply(t,r)}},k=function(e,t){return function(r,n){var a=P.call(arguments,1);return this.send(r,a.length>1?a:n,e,t)}};g(M,{create:function(e,t){return new M(e,t)},mixin:function(e,t){t&&M.ms.push(t),g(M.prototype,e)},ms:[]});var I=function(e){var t=this;t.$host=e,t.$reqs={},t.id=p+l--,t.$queue=[]};return g(I.prototype,{send:function(e,t,r,n){var a=this;if(a.$busy)return a.next(function(){this.send(e,t,r,n)}),a;a.$busy=1;var o=a.$host,c=o.$mCache,f=o.$mCacheKeys,u=a.$reqs;s(e)||(e=[e]);var m=e.length,v=[],h=s(t);h&&(v=Array(t.length));for(var l,d={a:a,b:0,c:a.$reqs,d:Array(m),g:{},h:m,i:c,j:o,k:r,l:h,m:t,n:v,o:[]},g=0;e.length>g;g++)if(l=e[g]){var p=o.getModel(l,n),x=p.cKey,$=p.entity,y=T(E,$,g,d);y.id=a.id,x&&i(f,x)?f[x].q.push(y):p.update?(u[$.id]=$,x&&(f[x]={q:[y],e:$},y=_),$.request(y,{a:f,b:x})):y()}else C("empty model");return a},fetchAll:function(e,t){return this.send(e,t,v)},saveAll:function(e,t){return this.send(e,t,v,1)},fetchOrder:k(m),saveOrder:k(m,1),saveOne:k(u,1),fetchOne:k(u),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,n=t.$mCacheKeys;for(var a in r){var s=r[a],c=s.$mm.key;if(c&&i(n,c)){for(var f,u=n[c],m=u.q,v=[],h=[],l=0;m.length>l;l++)f=m[l],f.id!=e.id?v.push(f):h.push(f);v.length?(o(h,"abort",u.e),u.q=v):s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue.push(e),!t.$busy){var r=t.$args;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&o(n,e,t)}t.$args=e},destroy:function(){var e=this;e.$oust=1,e.stop()}}),g(g(M.prototype,a),{registerModels:function(e){var t=this,r=t.$mMetas;s(e)||(e=[e]);for(var n,a,i=0;e.length>i;i++)n=e[i],n&&(a=n.name,a?r[a]&&C("already exist:"+a):C("miss name"),n.cache=b(n),r[a]=n)},registerMethods:function(e){g(this,e)},createModel:function(e){var t,r=this,n=r.getModelMeta(e),a=b(e)||n.cache,i=new r.$mClass;i.set(n),i.$mm=t={used:0};var o=e.done||n.done;return t.done=o,a&&(t.key=w(r.$sKeys,n,e)),e.name&&i.set(e),i.setUrlParams(n.urlParams),i.setPostParams(n.postParams),i.setUrlParams(e.urlParams),i.setPostParams(e.postParams),r.fire("inited",{model:i}),i},getModelMeta:function(e){var t=this,r=t.$mMetas,n=e.name||e,a=r[n];return a||C("Unfound:"+n),a},getModel:function(e,t){var r,n,a=this;return t||(r=a.getCachedModel(e)),r||(n=1,r=a.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:O("saveAll"),fetchAll:O("fetchAll"),saveOrder:O("saveOrder"),fetchOrder:O("fetchOrder"),saveOne:O("saveOne"),fetchOne:O("fetchOne"),createMRequest:function(e){var t=new I(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.list(),a=0;n.length>a;a++){var i=n[a],o=i.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(t){var r,n=this,a=n.$mCache,i=e,o=n.getModelMeta(t),s=b(t)||o.cache;if(s&&(r=w(n.$sKeys,o,t)),r){var c=n.$mCacheKeys,f=c[r];f?i=f.e:(i=a.get(r),i&&s>0&&h()-i.$mm.time>s&&(n.clearCacheByKey(r),i=0))}return i}}),M}),n("magix/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,a=function(){a.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.extend(a,n,e)},n=+new Date,a=encodeURIComponent,i=t.has,o=t._o,s=t.toString,c=function(e){this.set(e),this.id="m"+n--},f=function(e,t){return function(r,n){this.setParams(r,n,e,t)}};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var t=this;e||(e=c.GET);var r,n="$"+e,i=t[n],o=[];for(var s in i)r=i[s],r==c.X&&s.indexOf("=")>-1?o.push(s):o.push(s+"="+a(r));return o.join("&")},setUrlParamsIf:f(c.GET,1),setPostParamsIf:f(c.POST,1),setParams:function(e,r,n,a){var s=this,c="$"+n;s[c]||(s[c]={});var f=s[c];if(t._f(e)&&(e=t.safeExec(e)),e&&!o(e)){var u={};u[e]=r,e=u}for(var m in e)a&&i(f,m)||(f[m]=e[m])},setPostParams:f(c.POST),setUrlParams:f(c.GET),get:function(e,t,r){var n=this,a=arguments.length,i=2==a,o=n.$attrs;if(a){for(var c=(e+"").split(".");o&&c[0];)o=o[c.shift()];c[0]&&(o=r)}return i&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,a){r.$abt||(o(a)||(a={data:a}),r.set(a),e(n,t))};r.$trans=r.sync(r.$temp=n)},abort:function(){var e=this,t=e.$trans,r=e.$temp;r&&r("abort"),e.$abt=1,t&&t.abort&&t.abort(),e.$trans=0},isAborted:function(){return this.$abt}}),c}),r.createElement("vframe")})(null,this,document,define);