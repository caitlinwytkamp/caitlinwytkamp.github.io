(function(h,f,c,j,d,l,k){/*! Jssor */
new(function(){});var e={Mc:function(a){return-c.cos(a*c.PI)/2+.5},Pc:function(a){return a},ng:function(a){return a*a},Qc:function(a){return-a*(a-2)},lg:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},ig:function(a){return a*a*a},hg:function(a){return(a-=1)*a*a+1},gg:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},fg:function(a){return a*a*a*a},eg:function(a){return-((a-=1)*a*a*a-1)},dg:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},ag:function(a){return a*a*a*a*a},Xf:function(a){return(a-=1)*a*a*a*a+1},Ie:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},Xe:function(a){return 1-c.cos(c.PI/2*a)},We:function(a){return c.sin(c.PI/2*a)},Ve:function(a){return-1/2*(c.cos(c.PI*a)-1)},Ue:function(a){return a==0?0:c.pow(2,10*(a-1))},Te:function(a){return a==1?1:-c.pow(2,-10*a)+1},Oe:function(a){return a==0||a==1?a:(a*=2)<1?1/2*c.pow(2,10*(a-1)):1/2*(-c.pow(2,-10*--a)+2)},lf:function(a){return-(c.sqrt(1-a*a)-1)},jf:function(a){return c.sqrt(1-(a-=1)*a)},hf:function(a){return(a*=2)<1?-1/2*(c.sqrt(1-a*a)-1):1/2*(c.sqrt(1-(a-=2)*a)+1)},gf:function(a){if(!a||a==1)return a;var b=.3,d=.075;return-(c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b))},Bf:function(a){if(!a||a==1)return a;var b=.3,d=.075;return c.pow(2,-10*a)*c.sin((a-d)*2*c.PI/b)+1},ug:function(a){if(!a||a==1)return a;var b=.45,d=.1125;return(a*=2)<1?-.5*c.pow(2,10*(a-=1))*c.sin((a-d)*2*c.PI/b):c.pow(2,-10*(a-=1))*c.sin((a-d)*2*c.PI/b)*.5+1},nf:function(a){var b=1.70158;return a*a*((b+1)*a-b)},pf:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},mg:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},Kc:function(a){return 1-e.dc(1-a)},dc:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},og:function(a){return a<1/2?e.Kc(a*2)*.5:e.dc(a*2-1)*.5+.5},Kf:function(){return 1-c.abs(1)},Rf:function(a){return 1-c.cos(a*c.PI*2)},Tf:function(a){return c.sin(a*c.PI*2)},Uf:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},Ye:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},g={kf:e.Mc,mf:e.Pc,of:e.ng,qf:e.Qc,rf:e.lg,sf:e.ig,vf:e.hg,wf:e.gg,xf:e.fg,yf:e.eg,zf:e.dg,Af:e.ag,ef:e.Xf,cf:e.Ie,Je:e.Xe,Ke:e.We,Le:e.Ve,Me:e.Ue,Pe:e.Te,Qe:e.Oe,Re:e.lf,jg:e.jf,kg:e.hf,qg:e.gf,sg:e.Bf,Zf:e.ug,tg:e.nf,Yf:e.pf,Wf:e.mg,Ef:e.Kc,Ff:e.dc,Hf:e.og,Jf:e.Kf,Nf:e.Rf,Of:e.Tf,Pf:e.Uf,Sf:e.Ye};var b=new function(){var g=this,Ab=/\S+/g,F=1,yb=2,fb=3,eb=4,jb=5,G,r=0,i=0,s=0,X=0,z=0,I=navigator,ob=I.appName,o=I.userAgent,p=parseFloat;function Ib(){if(!G){G={tf:"ontouchstart"in h||"createTouch"in f};var a;if(I.pointerEnabled||(a=I.msPointerEnabled))G.kd=a?"msTouchAction":"touchAction"}return G}function v(j){if(!r){r=-1;if(ob=="Microsoft Internet Explorer"&&!!h.attachEvent&&!!h.ActiveXObject){var e=o.indexOf("MSIE");r=F;s=p(o.substring(e+5,o.indexOf(";",e)));/*@cc_on X=@_jscript_version@*/;i=f.documentMode||s}else if(ob=="Netscape"&&!!h.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),g=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=yb;i=p(o.substring(d+8))}else if(b>=0){var k=o.substring(0,b).lastIndexOf("/");r=g>=0?eb:fb;i=p(o.substring(k+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=F;i=s=p(a[1])}}if(c>=0)z=p(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){r=jb;i=p(a[2])}}}return j==r}function q(){return v(F)}function Q(){return q()&&(i<6||f.compatMode=="BackCompat")}function db(){return v(fb)}function ib(){return v(jb)}function vb(){return db()&&z>534&&z<535}function J(){v();return z>537||i>42||r==F&&i>=11}function O(){return q()&&i<9}function wb(a){var b,c;return function(f){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(g,d){var b=a;if(d)b=g+e;if(f.style[b]!=k)return c=b})}return c}}function ub(b){var a;return function(c){a=a||wb(b)(c)||b;return a}}var K=ub("transform");function nb(a){return{}.toString.call(a)}var kb={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){kb["[object "+a+"]"]=a.toLowerCase()});function n(b,d){var a,c;if(nb(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function C(a){return a==j?String(a):kb[nb(a)]||"object"}function lb(a){for(var b in a)return d}function A(a){try{return C(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function u(a,b){return{x:a,y:b}}function rb(b,a){setTimeout(b,a||0)}function H(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf(" ")?"":" ")+a;return a}function tb(b,a){if(i<9)b.style.filter=a}g.uf=Ib;g.ld=q;g.ff=db;g.Ne=J;g.od=O;wb("transform");g.sd=function(){return i};g.rd=rb;function Y(a){a.constructor===Y.caller&&a.ud&&a.ud.apply(a,Y.caller.arguments)}g.ud=Y;g.nb=function(a){if(g.Se(a))a=f.getElementById(a);return a};function t(a){return a||h.event}g.ad=t;g.sc=function(b){b=t(b);var a=b.target||b.srcElement||f;if(a.nodeType==3)a=g.dd(a);return a};g.wc=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};function D(c,d,a){if(a!==k)c.style[d]=a==k?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&h.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,j);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function ab(b,c,a,d){if(a!==k){if(a==j)a="";else d&&(a+="px");D(b,c,a)}else return p(D(b,c))}function m(c,a){var d=a?ab:D,b;if(a&4)b=ub(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Db(b){if(q()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?p(a[1])/100:1}else return p(b.style.opacity||"1")}function Fb(b,a,f){if(q()&&s<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=H(h,[i],d);tb(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var L={cb:["rotate"],M:["rotateX"],L:["rotateY"],Jb:["skewX"],Hb:["skewY"]};if(!J())L=B(L,{p:["scaleX",2],q:["scaleY",2],Q:["translateZ",1]});function M(d,a){var c="";if(a){if(q()&&i&&i<10){delete a.M;delete a.L;delete a.Q}b.f(a,function(d,b){var a=L[b];if(a){var e=a[1]||0;if(N[b]!=d)c+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(J()){if(a.ab||a.bb||a.Q)c+=" translate3d("+(a.ab||0)+"px,"+(a.bb||0)+"px,"+(a.Q||0)+"px)";if(a.p==k)a.p=1;if(a.q==k)a.q=1;if(a.p!=1||a.q!=1)c+=" scale3d("+a.p+", "+a.q+", 1)"}}d.style[K(d)]=c}g.Ec=m("transformOrigin",4);g.Ze=m("backfaceVisibility",4);g.af=m("transformStyle",4);g.bf=m("perspective",6);g.df=m("perspectiveOrigin",4);g.Cf=function(a,b){if(q()&&s<9||s<10&&Q())a.style.zoom=b==1?"":b;else{var c=K(a),f="scale("+b+")",e=a.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=H(e,[g],f);a.style[c]=d}};g.cc=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!g.Df(a,d))&&b(c)}};g.a=function(a,d,b,c){a=g.nb(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};g.I=function(a,c,d,b){a=g.nb(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};g.Ab=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=l};g.bg=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};g.K=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};g.cg=function(a,b){if(b==k)return a.textContent||a.innerText;var c=f.createTextNode(b);g.Yb(a);a.appendChild(c)};g.xb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function mb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(U(a,b)==c)return a;if(!e){var d=mb(a,c,e,b);if(d)return d}}}g.B=mb;function S(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){U(a,b)==d&&c.push(a);if(!f){var e=S(a,d,f,b);if(e.length)c=c.concat(e)}}return c}function gb(a,c,d){for(a=a?a.firstChild:j;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=gb(a,c,d);if(b)return b}}}g.pg=gb;g.rg=function(b,a){return b.getElementsByTagName(a)};function B(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==k){a=c[b];var h=d[b];d[b]=g&&(A(h)||A(a))?B(g,{},h,a):a}}return d}g.H=B;function Z(f,g){var d={},c,a,b;for(c in f){a=f[c];b=g[c];if(a!==b){var e;if(A(a)&&A(b)){a=Z(a,b);e=!lb(a)}!e&&(d[c]=a)}}return d}g.Jc=function(a){return C(a)=="function"};g.Se=function(a){return C(a)=="string"};g.oc=function(a){return!isNaN(p(a))&&isFinite(a)};g.f=n;g.Gf=A;function R(a){return f.createElement(a)}g.zb=function(){return R("DIV")};g.If=function(){return R("SPAN")};g.Xc=function(){};function V(b,c,a){if(a==k)return b.getAttribute(c);b.setAttribute(c,a)}function U(a,b){return V(a,b)||V(a,"data-"+b)}g.u=V;g.i=U;function x(b,a){if(a==k)return b.className;b.className=a}g.Uc=x;function qb(b){var a={};n(b,function(b){a[b]=b});return a}function sb(b,a){return b.match(a||Ab)}function P(b,a){return qb(sb(b||"",a))}g.Lf=sb;function bb(b,c){var a="";n(c,function(c){a&&(a+=b);a+=c});return a}function E(a,c,b){x(a,bb(" ",B(Z(P(x(a)),P(c)),P(b))))}g.dd=function(a){return a.parentNode};g.X=function(a){g.S(a,"none")};g.T=function(a,b){g.S(a,b?"none":"")};g.Qf=function(b,a){b.removeAttribute(a)};g.Vf=function(){return q()&&i<10};g.Mf=function(d,a){if(a)d.style.clip="rect("+c.round(a.k||a.A||0)+"px "+c.round(a.C)+"px "+c.round(a.F)+"px "+c.round(a.j||a.z||0)+"px)";else if(a!==k){var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=H(g,f,"");b.Cb(d,e)}};g.R=function(){return+new Date};g.W=function(b,a){b.appendChild(a)};g.Bb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};g.Gb=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};g.Wd=function(a,b){n(a,function(a){g.Gb(a,b)})};g.Yb=function(a){g.Wd(g.xb(a,d),a)};g.Vd=function(a,b){var c=g.dd(a);b&1&&g.D(a,(g.m(c)-g.m(a))/2);b&2&&g.G(a,(g.n(c)-g.n(a))/2)};g.qc=function(b,a){return parseInt(b,a||10)};g.Nd=p;g.Df=function(b,a){var c=f.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){return l}return b===a};function W(d,c,b){var a=d.cloneNode(!c);!b&&g.Qf(a,"id");return a}g.qb=W;g.ub=function(e,f){var a=new Image;function b(e,d){g.I(a,"load",b);g.I(a,"abort",c);g.I(a,"error",c);f&&f(a,d)}function c(a){b(a,d)}if(ib()&&i<11.6||!e)b(!e);else{g.a(a,"load",b);g.a(a,"abort",c);g.a(a,"error",c);a.src=e}};g.Bd=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){g.ub(a.src,b)});b()};g.Dd=function(a,g,i,h){if(h)a=W(a);var c=S(a,g);if(!c.length)c=b.rg(a,g);for(var f=c.length-1;f>-1;f--){var d=c[f],e=W(i);x(e,x(d));b.Cb(e,d.style.cssText);b.Bb(e,d);b.Gb(d)}return a};function Gb(a){var l=this,p="",r=["av","pv","ds","dn"],e=[],q,j=0,h=0,d=0;function i(){E(a,q,e[d||j||h&2||h]);b.U(a,"pointer-events",d?"none":"")}function c(){j=0;i();g.I(f,"mouseup",c);g.I(f,"touchend",c);g.I(f,"touchcancel",c)}function o(a){if(d)g.Ab(a);else{j=4;i();g.a(f,"mouseup",c);g.a(f,"touchend",c);g.a(f,"touchcancel",c)}}l.Fd=function(a){if(a===k)return h;h=a&2||a&1;i()};l.Wc=function(a){if(a===k)return!d;d=a?0:3;i()};l.V=a=g.nb(a);var m=b.Lf(x(a));if(m)p=m.shift();n(r,function(a){e.push(p+a)});q=bb(" ",e);e.unshift("");g.a(a,"mousedown",o);g.a(a,"touchstart",o)}g.ic=function(a){return new Gb(a)};g.U=D;g.Mb=m("overflow");g.G=m("top",2);g.D=m("left",2);g.m=m("width",2);g.n=m("height",2);g.De=m("marginLeft",2);g.Ce=m("marginTop",2);g.E=m("position");g.S=m("display");g.v=m("zIndex",1);g.kc=function(b,a,c){if(a!=k)Fb(b,a,c);else return Db(b)};g.Cb=function(a,b){if(b!=k)a.style.cssText=b;else return a.style.cssText};var T={vb:g.kc,k:g.G,j:g.D,tb:g.m,pb:g.n,rb:g.E,Cg:g.S,sb:g.v};function w(f,l){var e=O(),b=J(),d=vb(),h=K(f);function i(b,d,a){var e=b.fb(u(-d/2,-a/2)),f=b.fb(u(d/2,-a/2)),g=b.fb(u(d/2,a/2)),h=b.fb(u(-d/2,a/2));b.fb(u(300,300));return u(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var f=a.Q||0,l=(a.M||0)%360,m=(a.L||0)%360,o=(a.cb||0)%360,p=a.Bg;if(e){f=0;l=0;m=0;p=0}var c=new Cb(a.ab,a.bb,f);c.M(l);c.L(m);c.we(o);c.ue(a.Jb,a.Hb);c.bc(a.p,a.q,p);if(b){c.wb(a.z,a.A);d.style[h]=c.qe()}else if(!X||X<9){var j="";if(o||a.p!=k&&a.p!=1||a.q!=k&&a.q!=1){var n=i(c,a.db,a.gb);g.Ce(d,n.y);g.De(d,n.x);j=c.ne()}var r=d.style.filter,s=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),q=H(r,[s],j);tb(d,q)}}w=function(e,c){c=c||{};var h=c.z,i=c.A,f;n(T,function(a,b){f=c[b];f!==k&&a(e,f)});g.Mf(e,c.g);if(!b){h!=k&&g.D(e,(c.Fc||0)+h);i!=k&&g.G(e,(c.xc||0)+i)}if(c.ce)if(d)rb(g.K(j,M,e,c));else a(e,c)};g.Kb=M;if(d)g.Kb=w;if(e)g.Kb=a;else if(!b)a=M;g.N=w;w(f,l)}g.Kb=w;g.N=w;function Cb(i,l,p){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,i||0,l||0,p||0,1],h=c.sin,g=c.cos,m=c.tan;function f(a){return a*c.PI/180}function o(a,b){return{x:a,y:b}}function n(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function e(c,a){return n.apply(j,(a||b).concat(c))}d.bc=function(a,c,d){if(a==k)a=1;if(c==k)c=1;if(d==k)d=1;if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.wb=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.M=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([1,0,0,0,0,d,i,0,0,-i,d,0,0,0,0,1])}};d.L=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,0,-i,0,0,1,0,0,i,0,d,0,0,0,0,1])}};d.we=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,i,0,0,-i,d,0,0,0,0,1,0,0,0,0,1])}};d.ue=function(a,c){if(a||c){i=f(a);l=f(c);b=e([1,m(l),0,0,m(i),1,0,0,0,0,1,0,0,0,0,1])}};d.fb=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return o(a[12],a[13])};d.qe=function(){return"matrix3d("+b.join(",")+")"};d.ne=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+", SizingMethod='auto expand')"}}new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.p=function(b,c){return a.qd(b,c,0)};a.q=function(b,c){return a.qd(b,0,c)};a.qd=function(a,c,d){return b(a,[[c,0],[0,d]])};a.fb=function(d,c){var a=b(d,[[c.x],[c.y]]);return u(a[0][0],a[1][0])}};var N={Fc:0,xc:0,z:0,A:0,Y:1,p:1,q:1,cb:0,M:0,L:0,ab:0,bb:0,Q:0,Jb:0,Hb:0};g.td=function(a){var c=a||{};if(a)if(b.Jc(a))c={gc:c};else if(b.Jc(a.g))c.g={gc:a.g};return c};function pb(c,a){var b={};n(c,function(c,d){var e=c;if(a[d]!=k)if(g.oc(c))e=c+a[d];else e=pb(c,a[d]);b[d]=e});return b}g.je=pb;g.le=function(l,m,x,q,z,A,n){var a=m;if(l){a={};for(var g in m){var B=A[g]||1,w=z[g]||[0,1],f=(x-w[0])/w[1];f=c.min(c.max(f,0),1);f=f*B;var u=c.floor(f);if(f!=u)f-=u;var h=q.gc||e.Mc,i,C=l[g],o=m[g];if(b.oc(o)){h=q[g]||h;var y=h(f);i=C+o*y}else{i=b.H({Ib:{}},l[g]);var v=q[g]||{};b.f(o.Ib||o,function(d,a){h=v[a]||v.gc||h;var c=h(f),b=d*c;i.Ib[a]=b;i[a]+=b})}a[g]=i}var t=b.f(m,function(b,a){return N[a]!=k});t&&b.f(N,function(c,b){if(a[b]==k&&l[b]!==k)a[b]=l[b]});if(t){if(a.Y)a.p=a.q=a.Y;a.db=n.db;a.gb=n.gb;a.ce=d}}if(m.g&&n.wb){var p=a.g.Ib,s=(p.k||0)+(p.F||0),r=(p.j||0)+(p.C||0);a.j=(a.j||0)+r;a.k=(a.k||0)+s;a.g.j-=r;a.g.C-=r;a.g.k-=s;a.g.F-=s}if(a.g&&b.Vf()&&!a.g.k&&!a.g.j&&!a.g.A&&!a.g.z&&a.g.C==n.db&&a.g.F==n.gb)a.g=j;return a}};function n(){var a=this,d=[];function i(a,b){d.push({fc:a,ec:b})}function g(a,c){b.f(d,function(b,e){b.fc==a&&b.ec===c&&d.splice(e,1)})}a.lb=a.addEventListener=i;a.removeEventListener=g;a.l=function(a){var c=[].slice.call(arguments,1);b.f(d,function(b){b.fc==a&&b.ec.apply(h,c)})}}var m=function(z,C,i,J,M,L){z=z||0;var a=this,q,n,o,u,A=0,G,H,F,B,y=0,g=0,m=0,D,k,f,e,p,w=[],x;function O(a){f+=a;e+=a;k+=a;g+=a;m+=a;y+=a}function t(o){var h=o;if(p&&(h>=e||h<=f))h=((h-f)%p+p)%p+f;if(!D||u||g!=h){var j=c.min(h,e);j=c.max(j,f);if(!D||u||j!=m){if(L){var l=(j-k)/(C||1);if(i.Fe)l=1-l;var n=b.le(M,L,l,G,F,H,i);if(x)b.f(n,function(b,a){x[a]&&x[a](J,b)});else b.N(J,n)}a.ac(m-k,j-k);m=j;b.f(w,function(b,c){var a=o<g?w[w.length-c-1]:b;a.s(m-y)});var r=g,q=m;g=h;D=d;a.Fb(r,q)}}}function E(a,b,d){b&&a.Eb(e);if(!d){f=c.min(f,a.Wb()+y);e=c.max(e,a.Db()+y)}w.push(a)}var r=h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.msRequestAnimationFrame;if(b.ff()&&b.sd()<7)r=j;r=r||function(a){b.rd(a,i.jd)};function I(){if(q){var d=b.R(),e=c.min(d-A,i.id),a=g+e*o;A=d;if(a*o>=n*o)a=n;t(a);if(!u&&a*o>=n*o)K(B);else r(I)}}function s(h,i,j){if(!q){q=d;u=j;B=i;h=c.max(h,f);h=c.min(h,e);n=h;o=n<g?-1:1;a.Zc();A=b.R();r(I)}}function K(b){if(q){u=q=B=l;a.hd();b&&b()}}a.gd=function(a,b,c){s(a?g+a:e,b,c)};a.fd=s;a.Z=K;a.Zd=function(a){s(a)};a.O=function(){return g};a.cd=function(){return n};a.ob=function(){return m};a.s=t;a.wb=function(a){t(g+a)};a.bd=function(){return q};a.ae=function(a){p=a};a.Eb=O;a.ib=function(a,b){E(a,0,b)};a.jc=function(a){E(a,1)};a.pe=function(a){e+=a};a.Wb=function(){return f};a.Db=function(){return e};a.Fb=a.Zc=a.hd=a.ac=b.Xc;a.tc=b.R();i=b.H({jd:16,id:50},i);p=i.md;x=i.wd;f=k=z;e=z+C;H=i.Id||{};F=i.Jd||{};G=b.td(i.P)};new(function(){});var i=function(p,fc){var g=this;function Bc(){var a=this;m.call(a,-1e8,2e8);a.zd=function(){var b=a.ob(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{eb:f,Ad:d,rb:e}};a.Fb=function(b,a){var e=c.floor(a);if(e!=a&&a>b)e++;Ub(e,d);g.l(i.Cd,t(a),t(b),a,b)}}function Ac(){var a=this;m.call(a,0,0,{md:r});b.f(C,function(b){D&1&&b.ae(r);a.jc(b);b.Eb(ib/bc)})}function zc(){var a=this,b=Tb.V;m.call(a,-1,2,{P:e.Pc,wd:{rb:Zb},md:r},b,{rb:1},{rb:-2});a.Qb=b}function nc(o,n){var b=this,e,f,h,k,c;m.call(b,-1e8,2e8,{id:100});b.Zc=function(){M=d;R=j;g.l(i.ge,t(w.O()),w.O())};b.hd=function(){M=l;k=l;var a=w.zd();g.l(i.xd,t(w.O()),w.O());!a.rb&&Dc(a.Ad,s)};b.Fb=function(i,g){var b;if(k)b=c;else{b=f;if(h){var d=g/h;b=a.Qd(d)*(f-e)+e}}w.s(b)};b.Pb=function(a,d,c,g){e=a;f=d;h=c;w.s(a);b.s(0);b.fd(c,g)};b.Pd=function(a){k=d;c=a;b.gd(a,j,d)};b.Kd=function(a){c=a};w=new Bc;w.ib(o);w.ib(n)}function pc(){var c=this,a=Xb();b.v(a,0);b.U(a,"pointerEvents","none");c.V=a;c.Lb=function(){b.X(a);b.Yb(a)}}function xc(o,f){var e=this,q,L,v,k,y=[],x,B,W,G,Q,F,h,w,p;m.call(e,-u,u+1,{});function E(a){q&&q.pd();T(o,a,0);F=d;q=new I.J(o,I,b.Nd(b.i(o,"idle"))||lc);q.s(0)}function Z(){q.tc<I.tc&&E()}function M(p,r,o){if(!G){G=d;if(k&&o){var h=o.width,c=o.height,n=h,m=c;if(h&&c&&a.hb){if(a.hb&3&&(!(a.hb&4)||h>K||c>J)){var j=l,q=K/J*c/h;if(a.hb&1)j=q>1;else if(a.hb&2)j=q<1;n=j?h*J/c:K;m=j?J:c*K/h}b.m(k,n);b.n(k,m);b.G(k,(J-m)/2);b.D(k,(K-n)/2)}b.E(k,"absolute");g.l(i.Ee,f)}}b.X(r);p&&p(e)}function Y(b,c,d,g){if(g==R&&s==f&&N)if(!Cc){var a=t(b);A.Od(a,f,c,e,d);c.Be();U.Eb(a-U.Wb()-1);U.s(a);z.Pb(b,b,0)}}function cb(b){if(b==R&&s==f){if(!h){var a=j;if(A)if(A.eb==f)a=A.yd();else A.Lb();Z();h=new vc(o,f,a,q);h.ed(p)}!h.bd()&&h.Ub()}}function S(d,g,l){if(d==f){if(d!=g)C[g]&&C[g].ze();else!l&&h&&h.ye();p&&p.Wc();var m=R=b.R();e.ub(b.K(j,cb,m))}else{var k=c.min(f,d),i=c.max(f,d),o=c.min(i-k,k+r-i),n=u+a.xe-1;(!Q||o<=n)&&e.ub()}}function db(){if(s==f&&h){h.Z();p&&p.ve();p&&p.oe();h.nd()}}function eb(){s==f&&h&&h.Z()}function ab(a){!P&&g.l(i.me,f,a)}function O(){p=w.pInstance;h&&h.ed(p)}e.ub=function(c,a){a=a||v;if(y.length&&!G){b.T(a);if(!W){W=d;g.l(i.de,f);b.f(y,function(a){if(!b.u(a,"src")){a.src=b.i(a,"src2");b.S(a,a["display-origin"])}})}b.Bd(y,k,b.K(j,M,c,a))}else M(c,a)};e.be=function(){var h=f;if(a.uc<0)h-=r;var d=h+a.uc*tc;if(D&2)d=t(d);if(!(D&1))d=c.max(0,c.min(d,r-u));if(d!=f){if(A){var e=A.Td(r);if(e){var i=R=b.R(),g=C[t(d)];return g.ub(b.K(j,Y,d,g,e,i),v)}}bb(d)}};e.hc=function(){S(f,f,d)};e.ze=function(){p&&p.ve();p&&p.oe();e.yc();h&&h.ee();h=j;E()};e.Be=function(){b.X(o)};e.yc=function(){b.T(o)};e.fe=function(){p&&p.Wc()};function T(a,c,e){if(b.u(a,"jssor-slider"))return;if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.u(a,"src")){Q=d;a["display-origin"]=b.S(a);b.X(a)}}b.od()&&b.v(a,(b.v(a)||0)+1)}var f=b.xb(a);b.f(f,function(f){var h=f.tagName,i=b.i(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)O();else b.a(w,"dataavailable",O)}if(i=="caption"){if(c){b.Ec(f,b.i(f,"to"));b.Ze(f,b.i(f,"bf"));b.i(f,"3d")&&b.af(f,"preserve-3d")}else if(!b.ld()){var g=b.qb(f,l,d);b.Bb(g,f,a);b.Gb(f,a);f=g;c=d}}else if(!F&&!e&&!k){if(h=="A"){if(b.i(f,"u")=="image")k=b.pg(f,"IMG");else k=b.B(f,"image",d);if(k){x=f;b.S(x,"block");b.N(x,V);B=b.qb(x,d);b.E(x,"relative");b.kc(B,0);b.U(B,"backgroundColor","#000")}}else if(h=="IMG"&&b.i(f,"u")=="image")k=f;if(k){k.border=0;b.N(k,V)}}T(f,c,e+1)})}e.ac=function(c,b){var a=u-b;Zb(L,a)};e.eb=f;n.call(e);b.bf(o,b.i(o,"p"));b.df(o,b.i(o,"po"));var H=b.B(o,"thumb",d);if(H){b.qb(H);b.X(H)}b.T(o);v=b.qb(fb);b.v(v,1e3);b.a(o,"click",ab);E(d);e.Hd=k;e.zc=B;e.Qb=L=o;b.W(L,v);g.lb(203,S);g.lb(28,eb);g.lb(24,db)}function vc(y,f,p,q){var a=this,n=0,u=0,h,j,e,c,k,t,r,o=C[f];m.call(a,0,0);function v(){b.Yb(L);cc&&k&&o.zc&&b.W(L,o.zc);b.T(L,!k&&o.Hd)}function w(){a.Ub()}function x(b){r=b;a.Z();a.Ub()}a.Ub=function(){var b=a.ob();if(!B&&!M&&!r&&s==f){if(!b){if(h&&!k){k=d;a.nd(d);g.l(i.Ge,f,n,u,h,c)}v()}var l,p=i.Ac;if(b!=c)if(b==e)l=c;else if(b==j)l=e;else if(!b)l=j;else l=a.cd();g.l(p,f,b,n,j,e,c);var m=N&&(!E||F);if(b==c)(e!=c&&!(E&12)||m)&&o.be();else(m||b!=e)&&a.fd(l,w)}};a.ye=function(){e==c&&e==a.ob()&&a.s(j)};a.ee=function(){A&&A.eb==f&&A.Lb();var b=a.ob();b<c&&g.l(i.Ac,f,-b-1,n,j,e,c)};a.nd=function(a){p&&b.Mb(jb,a&&p.pc.Ag?"":"hidden")};a.ac=function(b,a){if(k&&a>=h){k=l;v();o.yc();A.Lb();g.l(i.he,f,n,u,h,c)}g.l(i.ie,f,a,n,j,e,c)};a.ed=function(a){if(a&&!t){t=a;a.lb($JssorPlayer$.Ld,x)}};p&&a.jc(p);h=a.Db();a.jc(q);j=h+q.Cc;e=h+q.Dc;c=a.Db()}function Kb(a,c,d){b.D(a,c);b.G(a,d)}function Zb(c,b){var a=x>0?x:eb,d=zb*b*(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}function Pb(){pb=M;Ib=z.cd();G=w.O()}function gc(){Pb();if(B||!F&&E&12){z.Z();g.l(i.ke)}}function ec(f){if(!B&&(F||!(E&12))&&!z.bd()){var d=w.O(),b=c.ceil(G);if(f&&c.abs(H)>=a.Gc){b=c.ceil(d);b+=hb}if(!(D&1))b=c.min(r-u,c.max(b,0));var e=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&pb)z.Zd(Ib);else if(d==b){sb.fe();sb.hc()}else z.Pb(d,b,e*Vb)}}function Hb(a){!b.i(b.sc(a),"nodrag")&&b.Ab(a)}function rc(a){Yb(a,1)}function Yb(a,c){a=b.ad(a);var k=b.sc(a);if(!O&&!b.i(k,"nodrag")&&sc()&&(!c||a.touches.length==1)){B=d;yb=l;R=j;b.a(f,c?"touchmove":"mousemove",Bb);b.R();P=0;gc();if(!pb)x=0;if(c){var h=a.touches[0];ub=h.clientX;vb=h.clientY}else{var e=b.wc(a);ub=e.x;vb=e.y}H=0;gb=0;hb=0;g.l(i.re,t(G),G,a)}}function Bb(e){if(B){e=b.ad(e);var f;if(e.type!="mousemove"){var l=e.touches[0];f={x:l.clientX,y:l.clientY}}else f=b.wc(e);if(f){var j=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||eb&O;if((j||k)&&!x){if(O==3)if(c.abs(k)>c.abs(j))x=2;else x=1;else x=O;if(mb&&x==1&&c.abs(k)-c.abs(j)>3)yb=d}if(x){var a=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){var g=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){var g=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-gb<-2)hb=0;else if(H-gb>2)hb=-1;gb=H;H=a;rb=G-H/i/(Y||1);if(H&&x&&!yb){b.Ab(e);if(!M)z.Pd(rb);else z.Kd(rb)}}}}}function ab(){qc();if(B){B=l;b.R();b.I(f,"mousemove",Bb);b.I(f,"touchmove",Bb);P=H;z.Z();var a=w.O();g.l(i.se,t(a),a,t(G),G);E&12&&Pb();ec(d)}}function jc(c){if(P){b.bg(c);var a=b.sc(c);while(a&&v!==a){a.tagName=="A"&&b.Ab(c);try{a=a.parentNode}catch(d){break}}}}function Jb(a){C[s];s=t(a);sb=C[s];Ub(a);return s}function Dc(a,b){x=0;Jb(a);g.l(i.te,t(a),b)}function Ub(a,c){wb=a;b.f(S,function(b){b.Zb(t(a),a,c)})}function sc(){var b=i.Nc||0,a=X;if(mb)a&1&&(a&=1);i.Nc|=a;return O=a&~b}function qc(){if(O){i.Nc&=~X;O=0}}function Xb(){var a=b.zb();b.N(a,V);b.E(a,"absolute");return a}function t(a){return(a%r+r)%r}function kc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=l}else if(D&2){b=t(b+wb);d=l}bb(b,a.Xb,d)}function xb(){b.f(S,function(a){a.Vb(a.Ob.vg<=F)})}function hc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].hc()}}}function Ec(){if(F){F=0;xb();B||!(E&12)||gc()}}function ic(){V={tb:K,pb:J,k:0,j:0};b.f(T,function(a){b.N(a,V);b.E(a,"absolute");b.Mb(a,"hidden");b.X(a)});b.N(fb,V)}function ob(b,a){bb(b,a,d)}function bb(g,f,j){if(Rb&&(!B&&(F||!(E&12))||a.Tc)){M=d;B=l;z.Z();if(f==k)f=Vb;var e=Cb.ob(),b=g;if(j){b=e+g;if(g>0)b=c.ceil(b);else b=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));var i=(b-e)%r;b=e+i;var h=e==b?0:f*c.abs(i);h=c.min(h,f*u*1.5);z.Pb(e,b,h||1)}}g.gd=function(){if(!N){N=d;C[s]&&C[s].hc()}};function W(){return b.m(y||p)}function lb(){return b.n(y||p)}g.db=W;g.gb=lb;function Eb(c,d){if(c==k)return b.m(p);if(!y){var a=b.zb(f);b.Uc(a,b.Uc(p));b.Cb(a,b.Cb(p));b.S(a,"block");b.E(a,"relative");b.G(a,0);b.D(a,0);b.Mb(a,"visible");y=b.zb(f);b.E(y,"absolute");b.G(y,0);b.D(y,0);b.m(y,b.m(p));b.n(y,b.n(p));b.Ec(y,"0 0");b.W(y,a);var h=b.xb(p);b.W(p,y);b.U(p,"backgroundImage","");b.f(h,function(c){b.W(b.i(c,"noscale")?p:a,c);b.i(c,"autocenter")&&Mb.push(c)})}Y=c/(d?b.n:b.m)(y);b.Cf(y,Y);var g=d?Y*W():c,e=d?c:Y*lb();b.m(p,g);b.n(p,e);b.f(Mb,function(a){var c=b.qc(b.i(a,"autocenter"));b.Vd(a,c)})}g.Ae=Eb;n.call(g);g.V=p=b.nb(p);var a=b.H({hb:0,xe:1,Tb:1,Sb:0,Rb:l,Nb:1,yb:d,Tc:d,uc:1,Rc:3e3,Oc:1,Xb:500,Qd:e.Qc,Gc:20,Lc:0,kb:1,Yc:0,Ed:1,rc:1,Vc:1},fc);a.yb=a.yb&&b.Ne();if(a.Sc!=k)a.Rc=a.Sc;if(a.Md!=k)a.Yc=a.Md;var eb=a.rc&3,tc=(a.rc&4)/-4||1,kb=a.zg,I=b.H({J:q,yb:a.yb},a.Yd);I.mb=I.mb||I.yg;var Fb=a.Sd,Z=a.Ud,db=a.wg,Q=!a.Ed,y,v=b.B(p,"slides",Q),fb=b.B(p,"loading",Q)||b.zb(f),Nb=b.B(p,"navigator",Q),dc=b.B(p,"arrowleft",Q),ac=b.B(p,"arrowright",Q),Lb=b.B(p,"thumbnavigator",Q),oc=b.m(v),mc=b.n(v),V,T=[],uc=b.xb(v);b.f(uc,function(a){if(a.tagName=="DIV"&&!b.i(a,"u"))T.push(a);else b.od()&&b.v(a,(b.v(a)||0)+1)});var s=-1,wb,sb,r=T.length,K=a.Xd||oc,J=a.vd||mc,Wb=a.Lc,zb=K+Wb,Ab=J+Wb,bc=eb&1?zb:Ab,u=c.min(a.kb,r),jb,x,O,yb,S=[],Qb,Sb,Ob,cc,Cc,N,E=a.Oc,lc=a.Rc,Vb=a.Xb,qb,tb,ib,Rb=u<r,D=Rb?a.Nb:0,X,P,F=1,M,B,R,ub=0,vb=0,H,gb,hb,Cb,w,U,z,Tb=new pc,Y,Mb=[];if(r){if(a.yb)Kb=function(a,c,d){b.Kb(a,{ab:c,bb:d})};N=a.Rb;g.Ob=fc;ic();b.u(p,"jssor-slider",d);b.v(v,b.v(v)||0);b.E(v,"absolute");jb=b.qb(v,d);b.Bb(jb,v);if(kb){cc=kb.xg;qb=kb.J;tb=u==1&&r>1&&qb&&(!b.ld()||b.sd()>=8)}ib=tb||u>=r||!(D&1)?0:a.Yc;X=(u>1||ib?eb:-1)&a.Vc;var Gb=v,C=[],A,L,Db=b.uf(),mb=Db.tf,G,pb,Ib,rb;Db.kd&&b.U(Gb,Db.kd,([j,"pan-y","pan-x","none"])[X]||"");U=new zc;if(tb)A=new qb(Tb,K,J,kb,mb);b.W(jb,U.Qb);b.Mb(v,"hidden");L=Xb();b.U(L,"backgroundColor","#000");b.kc(L,0);b.Bb(L,Gb.firstChild,Gb);for(var cb=0;cb<T.length;cb++){var wc=T[cb],yc=new xc(wc,cb);C.push(yc)}b.X(fb);Cb=new Ac;z=new nc(Cb,U);if(X){b.a(v,"mousedown",Yb);b.a(v,"touchstart",rc);b.a(v,"dragstart",Hb);b.a(v,"selectstart",Hb);b.a(f,"mouseup",ab);b.a(f,"touchend",ab);b.a(f,"touchcancel",ab);b.a(h,"blur",ab)}E&=mb?10:5;if(Nb&&Fb){Qb=new Fb.J(Nb,Fb,W(),lb());S.push(Qb)}if(Z&&dc&&ac){Z.Nb=D;Z.kb=u;Sb=new Z.J(dc,ac,Z,W(),lb());S.push(Sb)}if(Lb&&db){db.Sb=a.Sb;Ob=new db.J(Lb,db);S.push(Ob)}b.f(S,function(a){a.lc(r,C,fb);a.lb(o.nc,kc)});b.U(p,"visibility","visible");Eb(W());b.a(v,"click",jc,d);b.a(p,"mouseout",b.cc(hc,p));b.a(p,"mouseover",b.cc(Ec,p));xb();a.Tb&&b.a(f,"keydown",function(b){if(b.keyCode==37)ob(-a.Tb);else b.keyCode==39&&ob(a.Tb)});var nb=a.Sb;if(!(D&1))nb=c.max(0,c.min(nb,r-u));z.Pb(nb,nb,0)}};i.me=21;i.re=22;i.se=23;i.ge=24;i.xd=25;i.de=26;i.Ee=27;i.ke=28;i.Cd=202;i.te=203;i.Ge=206;i.he=207;i.ie=208;i.Ac=209;var o={nc:1},r=function(e,C){var f=this;n.call(f);e=b.nb(e);var s,A,z,r,k=0,a,m,i,w,x,h,g,q,p,B=[],y=[];function v(a){a!=-1&&y[a].Fd(a==k)}function t(a){f.l(o.nc,a*m)}f.V=e;f.Zb=function(a){if(a!=r){var d=k,b=c.floor(a/m);k=b;r=a;v(d);v(b)}};f.Vb=function(a){b.T(e,a)};var u;f.lc=function(D){if(!u){s=c.ceil(D/m);k=0;var o=q+w,r=p+x,n=c.ceil(s/i)-1;A=q+o*(!h?n:i-1);z=p+r*(h?n:i-1);b.m(e,A);b.n(e,z);for(var f=0;f<s;f++){var C=b.If();b.cg(C,f+1);var l=b.Dd(g,"numbertemplate",C,d);b.E(l,"absolute");var v=f%(n+1);b.D(l,!h?o*v:f%i*o);b.G(l,h?r*v:c.floor(f/(n+1))*r);b.W(e,l);B[f]=l;a.mc&1&&b.a(l,"click",b.K(j,t,f));a.mc&2&&b.a(l,"mouseover",b.cc(b.K(j,t,f),l));y[f]=b.ic(l)}u=d}};f.Ob=a=b.H({Ic:10,Hc:10,Bc:1,mc:1},C);g=b.B(e,"prototype");q=b.m(g);p=b.n(g);b.Gb(g,e);m=a.vc||1;i=a.Rd||1;w=a.Ic;x=a.Hc;h=a.Bc-1;a.bc==l&&b.u(e,"noscale",d);a.jb&&b.u(e,"autocenter",a.jb)},s=function(a,g,h){var c=this;n.call(c);var r,q,e,f,i;b.m(a);b.n(a);function k(a){c.l(o.nc,a,d)}function p(c){b.T(a,c||!h.Nb&&e==0);b.T(g,c||!h.Nb&&e>=q-h.kb);r=c}c.Zb=function(b,a,c){if(c)e=a;else{e=b;p(r)}};c.Vb=p;var m;c.lc=function(c){q=c;e=0;if(!m){b.a(a,"click",b.K(j,k,-i));b.a(g,"click",b.K(j,k,i));b.ic(a);b.ic(g);m=d}};c.Ob=f=b.H({vc:1},h);i=f.vc;if(f.bc==l){b.u(a,"noscale",d);b.u(g,"noscale",d)}if(f.jb){b.u(a,"autocenter",f.jb);b.u(g,"autocenter",f.jb)}};function q(e,d,c){var a=this;m.call(a,0,c);a.pd=b.Xc;a.Cc=0;a.Dc=c}var t=function(n,f,l){var a=this,o,h={},i=f.mb,c=new m(0,0);m.call(a,0,0);function j(d,c){var a={};b.f(d,function(d,f){var e=h[f];if(e){if(b.Gf(d))d=j(d,c||f=="e");else if(c)if(b.oc(d))d=o[d];a[e]=d}});return a}function k(e,c){var a=[],d=b.xb(e);b.f(d,function(d){var h=b.i(d,"u")=="caption";if(h){var e=b.i(d,"t"),g=i[b.qc(e)]||i[e],f={V:d,pc:g};a.push(f)}if(c<5)a=a.concat(k(d,c+1))});return a}function r(e,f,a){b.f(f,function(h){var f=b.H(d,{},j(h)),g=b.td(f.P);delete f.P;if(f.j){f.z=f.j;g.z=g.j;delete f.j}if(f.k){f.A=f.k;g.A=g.k;delete f.k}var k={P:g,db:a.tb,gb:a.pb},i=new m(h.b,h.d,k,e,a,f);c.ib(i);a=b.je(a,f)});return a}function q(a){b.f(a,function(d){var a=d.V,f=b.m(a),e=b.n(a),c={j:b.D(a),k:b.G(a),z:0,A:0,vb:1,sb:b.v(a)||0,cb:0,M:0,L:0,p:1,q:1,ab:0,bb:0,Q:0,Jb:0,Hb:0,tb:f,pb:e,g:{k:0,C:f,F:e,j:0}};c.Fc=c.j;c.xc=c.k;r(a,d.pc,c)})}function t(g,f,h){var e=g.b-f;if(e){var b=new m(f,e);b.ib(c,d);b.Eb(h);a.ib(b)}a.pe(g.d);return e}function s(f){var d=c.Wb(),e=0;b.f(f,function(c,f){c=b.H({d:l},c);t(c,d,e);d=c.b;e+=c.d;if(!f||c.t==2){a.Cc=d;a.Dc=d+c.d}})}a.pd=function(){a.s(-1,d)};o=[g.kf,g.mf,g.of,g.qf,g.rf,g.sf,g.vf,g.wf,g.xf,g.yf,g.zf,g.Af,g.ef,g.cf,g.Je,g.Ke,g.Le,g.Me,g.Pe,g.Qe,g.Re,g.jg,g.kg,g.qg,g.sg,g.Zf,g.tg,g.Yf,g.Wf,g.Ef,g.Ff,g.Hf,g.Jf,g.Nf,g.Of,g.Pf,g.Sf];var u={k:"y",j:"x",F:"m",C:"t",cb:"r",M:"rX",L:"rY",p:"sX",q:"sY",ab:"tX",bb:"tY",Q:"tZ",Jb:"kX",Hb:"kY",vb:"o",P:"e",sb:"i",g:"c"};b.f(u,function(b,a){h[b]=a});q(k(n,1));c.s(-1);var p=f.He||[],e=[].concat(p[b.qc(b.i(n,"b"))]||[]);e.push({b:c.Db(),d:e.length?0:l});s(e);a.s(-1)};jssor_1_slider_init=function(){var f=[[{b:0,d:600,y:-290,e:{y:27}}],[{b:0,d:1e3,y:185},{b:1e3,d:500,o:-1},{b:1500,d:500,o:1},{b:2e3,d:1500,r:360},{b:3500,d:1e3,rX:30},{b:4500,d:500,rX:-30},{b:5e3,d:1e3,rY:30},{b:6e3,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7e3,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8e3,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9e3,d:500,kX:-30},{b:9500,d:500,kY:30},{b:1e4,d:500,kY:-30},{b:10500,d:500,c:{x:87.5,t:-87.5}},{b:11e3,d:500,c:{x:-87.5,t:87.5}}],[{b:0,d:600,x:410,e:{x:27}}],[{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],[{b:-1,d:1,c:{x:175,t:-175}},{b:0,d:800,c:{x:-175,t:175},e:{c:{x:7,t:7}}}],[{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],[{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}],[{b:0,d:1e3,y:80,e:{y:24}},{b:1e3,d:1100,x:570,y:170,o:-1,r:30,sX:9,sY:9,e:{x:2,y:6,r:1,sX:5,sY:5}}],[{b:2e3,d:600,rY:30}],[{b:0,d:500,x:-105},{b:500,d:500,x:230},{b:1e3,d:500,y:-120},{b:1500,d:500,x:-70,y:120},{b:2600,d:500,y:-80},{b:3100,d:900,y:160,e:{y:24}}],[{b:0,d:1e3,o:-.4,rX:2,rY:1},{b:1e3,d:1e3,rY:1},{b:2e3,d:1e3,rX:-1},{b:3e3,d:1e3,rY:-1},{b:4e3,d:1e3,o:.4,rX:-1,rY:-1}]],g={Rb:d,Sc:2e3,Yd:{J:t,mb:f,He:[[{d:2e3,b:1e3}]]},Ud:{J:s},Sd:{J:r}},e=new i("jssor_1",g);function a(){var b=e.V.parentNode.clientWidth;if(b){b=c.min(b,600);e.Ae(b)}else h.setTimeout(a,30)}a();b.a(h,"load",a);b.a(h,"resize",a);b.a(h,"orientationchange",a)}})(window,document,Math,null,true,false)</script><style>.jssorb01{position:absolute}.jssorb01 div,.jssorb01 div:hover,.jssorb01 .av{position:absolute;width:12px;height:12px;filter:alpha(opacity=70);opacity:.7;overflow:hidden;cursor:pointer;border:#000 1px solid}.jssorb01 div{background-color:gray}.jssorb01 div:hover,.jssorb01 .av:hover{background-color:#d3d3d3}.jssorb01 .av{background-color:#fff}.jssorb01 .dn,.jssorb01 .dn:hover{background-color:#555}.jssora02l,.jssora02r{display:block;position:absolute;width:55px;height:55px;cursor:pointer;background:url('img/a02.png') no-repeat;overflow:hidden}.jssora02l{background-position:-3px -33px}.jssora02r{background-position:-63px -33px}.jssora02l:hover{background-position:-123px -33px}.jssora02r:hover{background-position:-183px -33px}.jssora02l.jssora02ldn{background-position:-3px -33px}.jssora02r.jssora02rdn{background-position:-63px -33px}</style><div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 600px; height: 300px; overflow: hidden; visibility: hidden;"><!-- Loading Screen --><div data-u="loading" style="position: absolute; top: 0px; left: 0px;"><div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div><div style="position:absolute;display:block;background:url('img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div></div><div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 600px; height: 300px; overflow: hidden;"><div data-p="112.50" style="display: none;"><img data-u="image" src="img/002.jpg" /><div data-u="caption" data-t="0" style="position: absolute; top: 320px; left: 30px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">mobile ready, touch swipe</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/007.jpg" /><div data-u="caption" data-t="1" data-3d="1" style="position: absolute; top: -50px; left: 125px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">time lined layer animation</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/003.jpg" /><div data-u="caption" data-t="2" style="position: absolute; top: 30px; left: -380px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">finger catchable right to left</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/004.jpg" /><div data-u="caption" data-t="3" style="position: absolute; top: 30px; left: 30px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">responsive, scale smoothly</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/005.jpg" /><div data-u="caption" data-t="4" style="position: absolute; top: 30px; left: 30px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.6); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">image, text, and custom layers</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/006.jpg" /><div data-u="caption" data-t="5" style="position: absolute; top: 30px; left: 600px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">tons of transition type</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/009.jpg" /><div data-u="caption" data-t="6" style="position: absolute; top: 30px; left: 30px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">visual slider maker</div></div><div data-b="0" data-p="112.50" style="display: none;"><img data-u="image" src="img/008.jpg" /><div data-u="caption" data-t="7" style="position: absolute; top: -50px; left: 30px; width: 350px; height: 30px; background-color: rgba(235,81,0,0.5); font-size: 20px; color: #ffffff; line-height: 30px; text-align: center;">play in and play out</div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/011.jpg" /><div data-u="caption" data-t="8" data-3d="1" style="position: absolute; top: 25px; left: 150px; width: 250px; height: 250px; background-color: rgba(40,177,255,0.6); overflow: hidden;"><div data-u="caption" data-t="9" style="position: absolute; top: 100px; left: 25px; width: 200px; height: 50px; font-size: 24px; line-height: 50px;">A Child Layer</div></div></div><div data-p="112.50" style="display: none;"><img data-u="image" src="img/010.jpg" /><div data-u="caption" data-t="10" data-3d="1" style="position: absolute; top: 25px; left: 100px; width: 250px; height: 250px; background-color: rgba(40,177,255,0.6);"><div style="margin: 15px; font-size: 20px;"><p>This is full customized content layer.<br /></p><p>Everything is allowed</p>You can put<a href="http://wwww.jssor.com">a link</a> or an image<img src="img/icon_chrome.png" /> here.</div></div></div><a data-u="ad" href="http://www.jssor.com" style="display:none">jQuery Slider</a></div><!-- Bullet Navigator --><div data-u="navigator" class="jssorb01" style="bottom:16px;right:16px;"><div data-u="prototype" style="width:12px;height:12px;"></div></div><!-- Arrow Navigator --><span data-u="arrowleft" class="jssora02l" style="top:0px;left:8px;width:55px;height:55px;" data-autocenter="2"></span><span data-u="arrowright" class="jssora02r" style="top:0px;right:8px;width:55px;height:55px;" data-autocenter="2"></span></div><script>jssor_1_slider_init();