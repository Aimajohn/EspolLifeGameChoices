const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StatsBar-C5dQdl-y.js","assets/index-Cfj_UwqH.js","assets/index-Chs2B9l3.css","assets/card-C3cxtWcO.js"])))=>i.map(i=>d[i]);
import{j as v,r as L,c as gt,B as At,_ as pe,p as ge,L as he}from"./index-Cfj_UwqH.js";import{C as xe,a as be,b as ye,c as Se}from"./card-C3cxtWcO.js";function _t({children:t,titulo:e}){return v.jsxs(xe,{className:"relative min-h-[55svh] w-full rounded-md border-none bg-slate-900 p-6 shadow-md",children:[v.jsx(be,{children:v.jsx(ye,{className:"text-2xl font-semibold text-slate-200 2xl:text-4xl",children:e})}),v.jsx(Se,{className:"text-slate-300/90",children:t})]})}const ve="/EspolLifeGameChoices/assets/InstruccionCard-CIcVyBF4.png",we="/EspolLifeGameChoices/assets/atributos-B5kdKiRu.png";function Ee(t){return Object.prototype.toString.call(t)==="[object Object]"}function $t(t){return Ee(t)||Array.isArray(t)}function je(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tt(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==o?!1:n.every(s=>{const u=t[s],a=e[s];return typeof u=="function"?`${u}`==`${a}`:!$t(u)||!$t(a)?u===a:Tt(u,a)})}function qt(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Ce(t,e){if(t.length!==e.length)return!1;const n=qt(t),r=qt(e);return n.every((i,o)=>{const s=r[o];return Tt(i,s)})}function Pt(t){return typeof t=="number"}function Lt(t){return typeof t=="string"}function yt(t){return typeof t=="boolean"}function Kt(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function ft(t,e){return D(t-e)}function Le(t,e){if(t===0||e===0||D(t)<=D(e))return 0;const n=ft(D(t),D(e));return D(n/t)}function Ne(t){return Math.round(t*100)/100}function dt(t){return mt(t).map(Number)}function V(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function kt(t,e){return e===ht(t)}function Ut(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function mt(t){return Object.keys(t)}function Jt(t,e){return[t,e].reduce((n,r)=>(mt(r).forEach(i=>{const o=n[i],s=r[i],u=Kt(o)&&Kt(s);n[i]=u?Jt(o,s):s}),n),{})}function Nt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function Ie(t,e){const n={start:r,center:i,end:o};function r(){return 0}function i(a){return o(a)/2}function o(a){return e-a}function s(a,c){return Lt(t)?n[t](a):t(e,a,c)}return{measure:s}}function pt(){let t=[];function e(i,o,s,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(o,s,u),a=()=>i.removeEventListener(o,s,u);else{const c=i;c.addListener(s),a=()=>c.removeListener(s)}return t.push(a),r}function n(){t=t.filter(i=>i())}const r={add:e,clear:n};return r}function Ae(t,e,n,r){const i=pt(),o=1e3/60;let s=null,u=0,a=0;function c(){i.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){y(),i.clear()}function d(h){if(!a)return;s||(s=h,n(),n());const f=h-s;for(s=h,u+=f;u>=o;)n(),u-=o;const g=u/o;r(g),a&&(a=e.requestAnimationFrame(d))}function m(){a||(a=e.requestAnimationFrame(d))}function y(){e.cancelAnimationFrame(a),s=null,u=0,a=0}function l(){s=null,u=0}return{init:c,destroy:x,start:m,stop:y,update:n,render:r}}function Te(t,e){const n=e==="rtl",r=t==="y",i=r?"y":"x",o=r?"x":"y",s=!r&&n?-1:1,u=x(),a=d();function c(l){const{height:p,width:h}=l;return r?p:h}function x(){return r?"top":n?"right":"left"}function d(){return r?"bottom":n?"left":"right"}function m(l){return l*s}return{scroll:i,cross:o,startEdge:u,endEdge:a,measureSize:c,direction:m}}function nt(t=0,e=0){const n=D(t-e);function r(c){return c<t}function i(c){return c>e}function o(c){return r(c)||i(c)}function s(c){return o(c)?r(c)?t:e:c}function u(c){return n?c-n*Math.ceil((c-e)/n):c}return{length:n,max:e,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:u}}function Qt(t,e,n){const{constrain:r}=nt(0,t),i=t+1;let o=s(e);function s(m){return n?D((i+m)%i):r(m)}function u(){return o}function a(m){return o=s(m),d}function c(m){return x().set(u()+m)}function x(){return Qt(t,u(),n)}const d={get:u,set:a,add:c,clone:x};return d}function Pe(t,e,n,r,i,o,s,u,a,c,x,d,m,y,l,p,h,f,g){const{cross:S,direction:j}=t,T=["INPUT","SELECT","TEXTAREA"],C={passive:!1},w=pt(),E=pt(),N=nt(50,225).constrain(y.measure(20)),k={mouse:300,touch:400},I={mouse:500,touch:600},z=l?43:25;let G=!1,H=0,_=0,W=!1,Y=!1,K=!1,U=!1;function it(b){if(!g)return;function A(F){(yt(g)||g(b,F))&&at(F)}const O=e;w.add(O,"dragstart",F=>F.preventDefault(),C).add(O,"touchmove",()=>{},C).add(O,"touchend",()=>{}).add(O,"touchstart",A).add(O,"mousedown",A).add(O,"touchcancel",M).add(O,"contextmenu",M).add(O,"click",Q,!0)}function $(){w.clear(),E.clear()}function st(){const b=U?n:e;E.add(b,"touchmove",B,C).add(b,"touchend",M).add(b,"mousemove",B,C).add(b,"mouseup",M)}function rt(b){const A=b.nodeName||"";return T.includes(A)}function J(){return(l?I:k)[U?"mouse":"touch"]}function ct(b,A){const O=d.add(Dt(b)*-1),F=x.byDistance(b,!l).distance;return l||D(b)<N?F:h&&A?F*.5:x.byIndex(O.get(),0).distance}function at(b){const A=Nt(b,r);U=A,K=l&&A&&!b.buttons&&G,G=ft(i.get(),s.get())>=2,!(A&&b.button!==0)&&(rt(b.target)||(W=!0,o.pointerDown(b),c.useFriction(0).useDuration(0),i.set(s),st(),H=o.readPoint(b),_=o.readPoint(b,S),m.emit("pointerDown")))}function B(b){if(!Nt(b,r)&&b.touches.length>=2)return M(b);const O=o.readPoint(b),F=o.readPoint(b,S),q=ft(O,H),X=ft(F,_);if(!Y&&!U&&(!b.cancelable||(Y=q>X,!Y)))return M(b);const tt=o.pointerMove(b);q>p&&(K=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(j(tt)),b.preventDefault()}function M(b){const O=x.byDistance(0,!1).index!==d.get(),F=o.pointerUp(b)*J(),q=ct(j(F),O),X=Le(F,q),tt=z-10*X,Z=f+X/50;Y=!1,W=!1,E.clear(),c.useDuration(tt).useFriction(Z),a.distance(q,!l),U=!1,m.emit("pointerUp")}function Q(b){K&&(b.stopPropagation(),b.preventDefault(),K=!1)}function R(){return W}return{init:it,destroy:$,pointerDown:R}}function De(t,e){let r,i;function o(d){return d.timeStamp}function s(d,m){const l=`client${(m||t.scroll)==="x"?"X":"Y"}`;return(Nt(d,e)?d:d.touches[0])[l]}function u(d){return r=d,i=d,s(d)}function a(d){const m=s(d)-s(i),y=o(d)-o(r)>170;return i=d,y&&(r=d),m}function c(d){if(!r||!i)return 0;const m=s(i)-s(r),y=o(d)-o(r),l=o(d)-o(i)>170,p=m/y;return y&&!l&&D(p)>.1?p:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:s}}function ke(){function t(n){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=n;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function Oe(t){function e(r){return t*(r/100)}return{measure:e}}function Me(t,e,n,r,i,o,s){const u=[t].concat(r);let a,c,x=[],d=!1;function m(h){return i.measureSize(s.measure(h))}function y(h){if(!o)return;c=m(t),x=r.map(m);function f(g){for(const S of g){if(d)return;const j=S.target===t,T=r.indexOf(S.target),C=j?c:x[T],w=m(j?t:r[T]);if(D(w-C)>=.5){h.reInit(),e.emit("resize");break}}}a=new ResizeObserver(g=>{(yt(o)||o(h,g))&&f(g)}),n.requestAnimationFrame(()=>{u.forEach(g=>a.observe(g))})}function l(){d=!0,a&&a.disconnect()}return{init:y,destroy:l}}function Fe(t,e,n,r,i,o){let s=0,u=0,a=i,c=o,x=t.get(),d=0;function m(){const C=r.get()-t.get(),w=!a;let E=0;return w?(s=0,n.set(r),t.set(r),E=C):(n.set(t),s+=C/a,s*=c,x+=s,t.add(s),E=x-d),u=Dt(E),d=x,T}function y(){const C=r.get()-e.get();return D(C)<.001}function l(){return a}function p(){return u}function h(){return s}function f(){return S(i)}function g(){return j(o)}function S(C){return a=C,T}function j(C){return c=C,T}const T={direction:p,duration:l,velocity:h,seek:m,settled:y,useBaseFriction:g,useBaseDuration:f,useFriction:j,useDuration:S};return T}function ze(t,e,n,r,i){const o=i.measure(10),s=i.measure(50),u=nt(.1,.99);let a=!1;function c(){return!(a||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function x(y){if(!c())return;const l=t.reachedMin(e.get())?"min":"max",p=D(t[l]-e.get()),h=n.get()-e.get(),f=u.constrain(p/s);n.subtract(h*f),!y&&D(h)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(y){a=!y}return{shouldConstrain:c,constrain:x,toggleActive:d}}function Be(t,e,n,r,i){const o=nt(-e+t,0),s=d(),u=x(),a=m();function c(l,p){return ft(l,p)<=1}function x(){const l=s[0],p=V(s),h=s.lastIndexOf(l),f=s.indexOf(p)+1;return nt(h,f)}function d(){return n.map((l,p)=>{const{min:h,max:f}=o,g=o.constrain(l),S=!p,j=kt(n,p);return S?f:j||c(h,g)?h:c(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function m(){if(e<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:l,max:p}=u;return s.slice(l,p)}return{snapsContained:a,scrollContainLimit:u}}function Re(t,e,n){const r=e[0],i=n?r-t:V(e);return{limit:nt(i,r)}}function Ve(t,e,n,r){const o=e.min+.1,s=e.max+.1,{reachedMin:u,reachedMax:a}=nt(o,s);function c(m){return m===1?a(n.get()):m===-1?u(n.get()):!1}function x(m){if(!c(m))return;const y=t*(m*-1);r.forEach(l=>l.add(y))}return{loop:x}}function Ge(t){const{max:e,length:n}=t;function r(o){const s=o-e;return n?s/-n:0}return{get:r}}function He(t,e,n,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:u}=i,a=d().map(e.measure),c=m(),x=y();function d(){return u(r).map(p=>V(p)[s]-p[0][o]).map(D)}function m(){return r.map(p=>n[o]-p[o]).map(p=>-D(p))}function y(){return u(c).map(p=>p[0]).map((p,h)=>p+a[h])}return{snaps:c,snapsAligned:x}}function _e(t,e,n,r,i,o){const{groupSlides:s}=i,{min:u,max:a}=r,c=x();function x(){const m=s(o),y=!t||e==="keepSnaps";return n.length===1?[o]:y?m:m.slice(u,a).map((l,p,h)=>{const f=!p,g=kt(h,p);if(f){const S=V(h[0])+1;return Ut(S)}if(g){const S=ht(o)-V(h)[0]+1;return Ut(S,V(h)[0])}return l})}return{slideRegistry:c}}function $e(t,e,n,r,i){const{reachedAny:o,removeOffset:s,constrain:u}=r;function a(l){return l.concat().sort((p,h)=>D(p)-D(h))[0]}function c(l){const p=t?s(l):u(l),h=e.map((g,S)=>({diff:x(g-p,0),index:S})).sort((g,S)=>D(g.diff)-D(S.diff)),{index:f}=h[0];return{index:f,distance:p}}function x(l,p){const h=[l,l+n,l-n];if(!t)return l;if(!p)return a(h);const f=h.filter(g=>Dt(g)===p);return f.length?a(f):V(h)-n}function d(l,p){const h=e[l]-i.get(),f=x(h,p);return{index:l,distance:f}}function m(l,p){const h=i.get()+l,{index:f,distance:g}=c(h),S=!t&&o(h);if(!p||S)return{index:f,distance:l};const j=e[f]-g,T=l+x(j,0);return{index:f,distance:T}}return{byDistance:m,byIndex:d,shortcut:x}}function qe(t,e,n,r,i,o,s){function u(d){const m=d.distance,y=d.index!==e.get();o.add(m),m&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),y&&(n.set(e.get()),e.set(d.index),s.emit("select"))}function a(d,m){const y=i.byDistance(d,m);u(y)}function c(d,m){const y=e.clone().set(d),l=i.byIndex(y.get(),m);u(l)}return{distance:a,index:c}}function Ke(t,e,n,r,i,o,s,u){const a={passive:!0,capture:!0};let c=0;function x(y){if(!u)return;function l(p){if(new Date().getTime()-c>10)return;s.emit("slideFocusStart"),t.scrollLeft=0;const g=n.findIndex(S=>S.includes(p));Pt(g)&&(i.useDuration(0),r.index(g,0),s.emit("slideFocus"))}o.add(document,"keydown",d,!1),e.forEach((p,h)=>{o.add(p,"focus",f=>{(yt(u)||u(y,f))&&l(h)},a)})}function d(y){y.code==="Tab"&&(c=new Date().getTime())}return{init:x}}function lt(t){let e=t;function n(){return e}function r(a){e=s(a)}function i(a){e+=s(a)}function o(a){e-=s(a)}function s(a){return Pt(a)?a:a.get()}return{get:n,set:r,add:i,subtract:o}}function Xt(t,e){const n=t.scroll==="x"?s:u,r=e.style;let i=null,o=!1;function s(m){return`translate3d(${m}px,0px,0px)`}function u(m){return`translate3d(0px,${m}px,0px)`}function a(m){if(o)return;const y=Ne(t.direction(m));y!==i&&(r.transform=n(y),i=y)}function c(m){o=!m}function x(){o||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:x,to:a,toggleActive:c}}function Ue(t,e,n,r,i,o,s,u,a){const x=dt(i),d=dt(i).reverse(),m=f().concat(g());function y(w,E){return w.reduce((N,k)=>N-i[k],E)}function l(w,E){return w.reduce((N,k)=>y(N,E)>0?N.concat([k]):N,[])}function p(w){return o.map((E,N)=>({start:E-r[N]+.5+w,end:E+e-.5+w}))}function h(w,E,N){const k=p(E);return w.map(I=>{const z=N?0:-n,G=N?n:0,H=N?"end":"start",_=k[I][H];return{index:I,loopPoint:_,slideLocation:lt(-1),translate:Xt(t,a[I]),target:()=>u.get()>_?z:G}})}function f(){const w=s[0],E=l(d,w);return h(E,n,!1)}function g(){const w=e-s[0]-1,E=l(x,w);return h(E,-n,!0)}function S(){return m.every(({index:w})=>{const E=x.filter(N=>N!==w);return y(E,e)<=.1})}function j(){m.forEach(w=>{const{target:E,translate:N,slideLocation:k}=w,I=E();I!==k.get()&&(N.to(I),k.set(I))})}function T(){m.forEach(w=>w.translate.clear())}return{canLoop:S,clear:T,loop:j,loopPoints:m}}function Je(t,e,n){let r,i=!1;function o(a){if(!n)return;function c(x){for(const d of x)if(d.type==="childList"){a.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(x=>{i||(yt(n)||n(a,x))&&c(x)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function Qe(t,e,n,r){const i={};let o=null,s=null,u,a=!1;function c(){u=new IntersectionObserver(l=>{a||(l.forEach(p=>{const h=e.indexOf(p.target);i[h]=p}),o=null,s=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),a=!0}function d(l){return mt(i).reduce((p,h)=>{const f=parseInt(h),{isIntersecting:g}=i[f];return(l&&g||!l&&!g)&&p.push(f),p},[])}function m(l=!0){if(l&&o)return o;if(!l&&s)return s;const p=d(l);return l&&(o=p),l||(s=p),p}return{init:c,destroy:x,get:m}}function Xe(t,e,n,r,i,o){const{measureSize:s,startEdge:u,endEdge:a}=t,c=n[0]&&i,x=l(),d=p(),m=n.map(s),y=h();function l(){if(!c)return 0;const g=n[0];return D(e[u]-g[u])}function p(){if(!c)return 0;const g=o.getComputedStyle(V(r));return parseFloat(g.getPropertyValue(`margin-${a}`))}function h(){return n.map((g,S,j)=>{const T=!S,C=kt(j,S);return T?m[S]+x:C?m[S]+d:j[S+1][u]-g[u]}).map(D)}return{slideSizes:m,slideSizesWithGaps:y,startGap:x,endGap:d}}function Ye(t,e,n,r,i,o,s,u,a){const{startEdge:c,endEdge:x,direction:d}=t,m=Pt(n);function y(f,g){return dt(f).filter(S=>S%g===0).map(S=>f.slice(S,S+g))}function l(f){return f.length?dt(f).reduce((g,S,j)=>{const T=V(g)||0,C=T===0,w=S===ht(f),E=i[c]-o[T][c],N=i[c]-o[S][x],k=!r&&C?d(s):0,I=!r&&w?d(u):0,z=D(N-I-(E+k));return j&&z>e+a&&g.push(S),w&&g.push(f.length),g},[]).map((g,S,j)=>{const T=Math.max(j[S-1]||0);return f.slice(T,g)}):[]}function p(f){return m?y(f,n):l(f)}return{groupSlides:p}}function Ze(t,e,n,r,i,o,s){const{align:u,axis:a,direction:c,startIndex:x,loop:d,duration:m,dragFree:y,dragThreshold:l,inViewThreshold:p,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:S,watchSlides:j,watchDrag:T,watchFocus:C}=o,w=2,E=ke(),N=E.measure(e),k=n.map(E.measure),I=Te(a,c),z=I.measureSize(N),G=Oe(z),H=Ie(u,z),_=!d&&!!g,W=d||!!g,{slideSizes:Y,slideSizesWithGaps:K,startGap:U,endGap:it}=Xe(I,N,k,n,W,i),$=Ye(I,z,h,d,N,k,U,it,w),{snaps:st,snapsAligned:rt}=He(I,H,N,k,$),J=-V(st)+V(K),{snapsContained:ct,scrollContainLimit:at}=Be(z,J,rt,g,w),B=_?ct:rt,{limit:M}=Re(J,B,d),Q=Qt(ht(B),x,d),R=Q.clone(),P=dt(n),b=({dragHandler:ot,scrollBody:jt,scrollBounds:Ct,options:{loop:xt}})=>{xt||Ct.constrain(ot.pointerDown()),jt.seek()},A=({scrollBody:ot,translate:jt,location:Ct,offsetLocation:xt,previousLocation:ie,scrollLooper:ce,slideLooper:ae,dragHandler:ue,animation:le,eventHandler:Bt,scrollBounds:fe,options:{loop:Rt}},Vt)=>{const Gt=ot.settled(),de=!fe.shouldConstrain(),Ht=Rt?Gt:Gt&&de;Ht&&!ue.pointerDown()&&(le.stop(),Bt.emit("settle")),Ht||Bt.emit("scroll");const me=Ct.get()*Vt+ie.get()*(1-Vt);xt.set(me),Rt&&(ce.loop(ot.direction()),ae.loop()),jt.to(xt.get())},O=Ae(r,i,()=>b(Et),ot=>A(Et,ot)),F=.68,q=B[Q.get()],X=lt(q),tt=lt(q),Z=lt(q),et=lt(q),ut=Fe(X,Z,tt,et,m,F),vt=$e(d,B,J,M,et),wt=qe(O,Q,R,ut,vt,et,s),Mt=Ge(M),Ft=pt(),re=Qe(e,n,s,p),{slideRegistry:zt}=_e(_,g,B,at,$,P),oe=Ke(t,n,zt,wt,ut,Ft,s,C),Et={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:N,slideRects:k,animation:O,axis:I,dragHandler:Pe(I,t,r,i,et,De(I,i),X,O,wt,ut,vt,Q,s,G,y,l,f,F,T),eventStore:Ft,percentOfView:G,index:Q,indexPrevious:R,limit:M,location:X,offsetLocation:Z,previousLocation:tt,options:o,resizeHandler:Me(e,s,i,n,I,S,E),scrollBody:ut,scrollBounds:ze(M,Z,et,ut,G),scrollLooper:Ve(J,M,Z,[X,Z,tt,et]),scrollProgress:Mt,scrollSnapList:B.map(Mt.get),scrollSnaps:B,scrollTarget:vt,scrollTo:wt,slideLooper:Ue(I,z,J,Y,K,st,B,Z,n),slideFocus:oe,slidesHandler:Je(e,s,j),slidesInView:re,slideIndexes:P,slideRegistry:zt,slidesToScroll:$,target:et,translate:Xt(I,e)};return Et}function We(){let t={},e;function n(c){e=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(x=>x(e,c)),a}function o(c,x){return t[c]=r(c).concat([x]),a}function s(c,x){return t[c]=r(c).filter(d=>d!==x),a}function u(){t={}}const a={init:n,emit:i,off:s,on:o,clear:u};return a}const tn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function en(t){function e(o,s){return Jt(o,s||{})}function n(o){const s=o.breakpoints||{},u=mt(s).filter(a=>t.matchMedia(a).matches).map(a=>s[a]).reduce((a,c)=>e(a,c),{});return e(o,u)}function r(o){return o.map(s=>mt(s.breakpoints||{})).reduce((s,u)=>s.concat(u),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function nn(t){let e=[];function n(o,s){return e=s.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),e.forEach(u=>u.init(o,t)),s.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function r(){e=e.filter(o=>o.destroy())}return{init:n,destroy:r}}function bt(t,e,n){const r=t.ownerDocument,i=r.defaultView,o=en(i),s=nn(o),u=pt(),a=We(),{mergeOptions:c,optionsAtMedia:x,optionsMediaQueries:d}=o,{on:m,off:y,emit:l}=a,p=I;let h=!1,f,g=c(tn,bt.globalOptions),S=c(g),j=[],T,C,w;function E(){const{container:P,slides:b}=S;C=(Lt(P)?t.querySelector(P):P)||t.children[0];const O=Lt(b)?C.querySelectorAll(b):b;w=[].slice.call(O||C.children)}function N(P){const b=Ze(t,C,w,r,i,P,a);if(P.loop&&!b.slideLooper.canLoop()){const A=Object.assign({},P,{loop:!1});return N(A)}return b}function k(P,b){h||(g=c(g,P),S=x(g),j=b||j,E(),f=N(S),d([g,...j.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",I)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(R),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),C.offsetParent&&w.length&&f.dragHandler.init(R),T=s.init(R,j)))}function I(P,b){const A=$();z(),k(c({startIndex:A},P),b),a.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),u.clear()}function G(){h||(h=!0,u.clear(),z(),a.emit("destroy"),a.clear())}function H(P,b,A){!S.active||h||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:S.duration),f.scrollTo.index(P,A||0))}function _(P){const b=f.index.add(1).get();H(b,P,-1)}function W(P){const b=f.index.add(-1).get();H(b,P,1)}function Y(){return f.index.add(1).get()!==$()}function K(){return f.index.add(-1).get()!==$()}function U(){return f.scrollSnapList}function it(){return f.scrollProgress.get(f.location.get())}function $(){return f.index.get()}function st(){return f.indexPrevious.get()}function rt(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function ct(){return T}function at(){return f}function B(){return t}function M(){return C}function Q(){return w}const R={canScrollNext:Y,canScrollPrev:K,containerNode:M,internalEngine:at,destroy:G,off:y,on:m,emit:l,plugins:ct,previousScrollSnap:st,reInit:p,rootNode:B,scrollNext:_,scrollPrev:W,scrollProgress:it,scrollSnapList:U,scrollTo:H,selectedScrollSnap:$,slideNodes:Q,slidesInView:rt,slidesNotInView:J};return k(e,n),setTimeout(()=>a.emit("init"),0),R}bt.globalOptions=void 0;function Ot(t={},e=[]){const n=L.useRef(t),r=L.useRef(e),[i,o]=L.useState(),[s,u]=L.useState(),a=L.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return L.useEffect(()=>{Tt(n.current,t)||(n.current=t,a())},[t,a]),L.useEffect(()=>{Ce(r.current,e)||(r.current=e,a())},[e,a]),L.useEffect(()=>{if(je()&&s){bt.globalOptions=Ot.globalOptions;const c=bt(s,n.current,r.current);return o(c),()=>c.destroy()}else o(void 0)},[s,o]),[u,i]}Ot.globalOptions=void 0;/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yt=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...u},a)=>L.createElement("svg",{ref:a,...rn,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Yt("lucide",i),...u},[...s.map(([c,x])=>L.createElement(c,x)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=(t,e)=>{const n=L.forwardRef(({className:r,...i},o)=>L.createElement(on,{ref:o,iconNode:e,className:Yt(`lucide-${sn(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],an=Zt("ArrowLeft",cn);/**
 * @license lucide-react v0.471.1 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ln=Zt("ArrowRight",un),Wt=L.createContext(null);function St(){const t=L.useContext(Wt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const te=L.forwardRef(({orientation:t="horizontal",opts:e,setApi:n,plugins:r,className:i,children:o,...s},u)=>{const[a,c]=Ot({...e,axis:t==="horizontal"?"x":"y"},r),[x,d]=L.useState(!1),[m,y]=L.useState(!1),l=L.useCallback(g=>{g&&(d(g.canScrollPrev()),y(g.canScrollNext()))},[]),p=L.useCallback(()=>{c==null||c.scrollPrev()},[c]),h=L.useCallback(()=>{c==null||c.scrollNext()},[c]),f=L.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),p()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[p,h]);return L.useEffect(()=>{!c||!n||n(c)},[c,n]),L.useEffect(()=>{if(c)return l(c),c.on("reInit",l),c.on("select",l),()=>{c==null||c.off("select",l)}},[c,l]),v.jsx(Wt.Provider,{value:{carouselRef:a,api:c,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:h,canScrollPrev:x,canScrollNext:m},children:v.jsx("div",{ref:u,onKeyDownCapture:f,className:gt("relative",i),role:"region","aria-roledescription":"carousel",...s,children:o})})});te.displayName="Carousel";const ee=L.forwardRef(({className:t,...e},n)=>{const{carouselRef:r,orientation:i}=St();return v.jsx("div",{ref:r,className:"overflow-hidden",children:v.jsx("div",{ref:n,className:gt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});ee.displayName="CarouselContent";const It=L.forwardRef(({className:t,...e},n)=>{const{orientation:r}=St();return v.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:gt("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...e})});It.displayName="CarouselItem";const ne=L.forwardRef(({className:t,variant:e="outline",size:n="bigIcon",...r},i)=>{const{orientation:o,scrollPrev:s,canScrollPrev:u}=St();return v.jsxs(At,{ref:i,variant:e,size:n,className:gt("absolute mr-4 h-12 w-12 rounded-full",o==="horizontal"?"-left-16 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:s,...r,children:[v.jsx(an,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Previous slide"})]})});ne.displayName="CarouselPrevious";const se=L.forwardRef(({className:t,variant:e="outline",size:n="bigIcon",...r},i)=>{const{orientation:o,scrollNext:s,canScrollNext:u}=St();return v.jsxs(At,{ref:i,variant:e,size:n,className:gt("absolute h-12 w-12 rounded-full",o==="horizontal"?"-right-16 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:s,...r,children:[v.jsx(ln,{className:"h-4 w-4"}),v.jsx("span",{className:"sr-only",children:"Next slide"})]})});se.displayName="CarouselNext";const fn=L.lazy(()=>pe(()=>import("./StatsBar-C5dQdl-y.js"),__vite__mapDeps([0,1,2,3])));function pn({}){const t=[v.jsx(It,{children:v.jsx("div",{className:"p-1",children:v.jsx(_t,{titulo:"Instrucciones",children:v.jsxs("div",{className:"leading-sm text-md 2xl:text-[1.4rem]",children:[v.jsxs("p",{children:["Para esta DEMO te encuentras en la"," ",v.jsx("b",{children:"fase final del semestre! "})," ",v.jsx("br",{}),"Tienes solo ",v.jsx("b",{children:"una semana"})," para prepararte, se acerca el temido examen final!!!"]}),v.jsxs("div",{className:"flex",children:[v.jsx("div",{className:"inline-block w-1/2",children:v.jsx(fn,{playerInfo:ge})}),v.jsxs("div",{className:"text-md mt-4 w-1/2 2xl:text-[1.3rem]",children:["Para superarlo debes subir tus atributos de"," ",v.jsx("b",{children:"conocimiento a 70 puntos"}),". ",v.jsx("br",{}),"Pero no solo eso, estudiar hasta el cansancio te impedirá realizar el examen correctamente ",v.jsx("br",{}),"Debes llegar al día del examen con al menos"," ",v.jsx("b",{children:"60 puntos de energía"}),"."]})]})]})})})},"001"),v.jsx(It,{children:v.jsx("div",{className:"p-1",children:v.jsx(_t,{titulo:"Instrucciones",children:v.jsxs("div",{className:"text-md flex justify-between 2xl:text-[1.4rem]",children:[v.jsxs("div",{className:"w-3/5",children:[v.jsx("p",{children:"Aumentas tus atributos jugando tus cartas, hay dos tipos eventos y persojes, cada carta interactua de forma positiva o negativa con tus atributos, debes elegir cuidadosamente para llegar a tu meta!"}),v.jsx("div",{className:"mt-4 w-[70%]",children:v.jsx("img",{src:we,alt:""})}),v.jsx(he,{to:"/Game",className:"w-full",children:v.jsx(At,{className:"mt-6 w-full py-8 text-lg",children:"Jugar Ahora!"})})]}),v.jsx("div",{className:"-mt-12 w-1/3",children:v.jsx("img",{src:ve,alt:""})})]})})})},"002")];return v.jsx("main",{className:"flex h-svh items-center bg-indigo-950/30 transition",children:v.jsx("div",{className:"mx-auto w-[50%] 2xl:-mt-20",children:v.jsxs(te,{className:"w-full",children:[v.jsx(ee,{children:t}),v.jsx(ne,{}),v.jsx(se,{})]})})})}export{pn as default};
