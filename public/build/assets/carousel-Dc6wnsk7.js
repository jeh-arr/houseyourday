import{r as D,j as H}from"./app-DOelMSUM.js";import{A as tn,d as nn}from"./react-icons.esm-B0Xd3uF5.js";import{c as dt}from"./shadcn-C-5SdYIA.js";import{B as Vt}from"./button-fPS6HAA_.js";function en(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ft(t){return en(t)||Array.isArray(t)}function on(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function wt(t,n){const e=Object.keys(t),s=Object.keys(n);if(e.length!==s.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(r=>{const a=t[r],c=n[r];return typeof a=="function"?`${a}`==`${c}`:!Ft(a)||!Ft(c)?a===c:wt(a,c)})}function zt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function rn(t,n){if(t.length!==n.length)return!1;const e=zt(t),s=zt(n);return e.every((i,o)=>{const r=s[o];return wt(i,r)})}function It(t){return typeof t=="number"}function Ct(t){return typeof t=="string"}function Lt(t){return typeof t=="boolean"}function Bt(t){return Object.prototype.toString.call(t)==="[object Object]"}function A(t){return Math.abs(t)}function Nt(t){return Math.sign(t)}function ut(t,n){return A(t-n)}function sn(t,n){if(t===0||n===0||A(t)<=A(n))return 0;const e=ut(A(t),A(n));return A(e/t)}function at(t){return lt(t).map(Number)}function G(t){return t[pt(t)]}function pt(t){return Math.max(0,t.length-1)}function At(t,n){return n===pt(t)}function Rt(t,n=0){return Array.from(Array(t),(e,s)=>n+s)}function lt(t){return Object.keys(t)}function Ht(t,n){return[t,n].reduce((e,s)=>(lt(s).forEach(i=>{const o=e[i],r=s[i],a=Bt(o)&&Bt(r);e[i]=a?Ht(o,r):r}),e),{})}function Gt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function cn(t,n){const e={start:s,center:i,end:o};function s(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function r(c,u){return Ct(t)?e[t](c):t(n,c,u)}return{measure:r}}function ft(){let t=[];function n(i,o,r,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,r,a),c=()=>i.removeEventListener(o,r,a);else{const u=i;u.addListener(r),c=()=>u.removeListener(r)}return t.push(c),s}function e(){t=t.filter(i=>i())}const s={add:n,clear:e};return s}function un(t,n,e,s){const i=ft(),o=1e3/60;let r=null,a=0,c=0;function u(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function y(){b(),i.clear()}function l(h){if(!c)return;r||(r=h);const f=h-r;for(r=h,a+=f;a>=o;)e(),a-=o;const m=A(a/o);s(m),c&&n.requestAnimationFrame(l)}function g(){c||(c=n.requestAnimationFrame(l))}function b(){n.cancelAnimationFrame(c),r=null,a=0,c=0}function d(){r=null,a=0}return{init:u,destroy:y,start:g,stop:b,update:e,render:s}}function an(t,n){const e=n==="rtl",s=t==="y",i=s?"y":"x",o=s?"x":"y",r=!s&&e?-1:1,a=y(),c=l();function u(d){const{height:p,width:h}=d;return s?p:h}function y(){return s?"top":e?"right":"left"}function l(){return s?"bottom":e?"left":"right"}function g(d){return d*r}return{scroll:i,cross:o,startEdge:a,endEdge:c,measureSize:u,direction:g}}function ot(t=0,n=0){const e=A(t-n);function s(u){return u<t}function i(u){return u>n}function o(u){return s(u)||i(u)}function r(u){return o(u)?s(u)?t:n:u}function a(u){return e?u-e*Math.ceil((u-n)/e):u}return{length:e,max:n,min:t,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:a}}function qt(t,n,e){const{constrain:s}=ot(0,t),i=t+1;let o=r(n);function r(g){return e?A((i+g)%i):s(g)}function a(){return o}function c(g){return o=r(g),l}function u(g){return y().set(a()+g)}function y(){return qt(t,a(),e)}const l={get:a,set:c,add:u,clone:y};return l}function ln(t,n,e,s,i,o,r,a,c,u,y,l,g,b,d,p,h,f,m){const{cross:x,direction:E}=t,w=["INPUT","SELECT","TEXTAREA"],P={passive:!1},v=ft(),C=ft(),L=ot(50,225).constrain(b.measure(20)),N={mouse:300,touch:400},T={mouse:500,touch:600},F=d?43:25;let _=!1,B=0,$=0,W=!1,K=!1,Z=!1,U=!1;function tt(S){if(!m)return;function I(k){(Lt(m)||m(S,k))&&z(k)}const M=n;v.add(M,"dragstart",k=>k.preventDefault(),P).add(M,"touchmove",()=>{},P).add(M,"touchend",()=>{}).add(M,"touchstart",I).add(M,"mousedown",I).add(M,"touchcancel",j).add(M,"contextmenu",j).add(M,"click",st,!0)}function Q(){v.clear(),C.clear()}function rt(){const S=U?e:n;C.add(S,"touchmove",q,P).add(S,"touchend",j).add(S,"mousemove",q,P).add(S,"mouseup",j)}function J(S){const I=S.nodeName||"";return w.includes(I)}function it(){return(d?T:N)[U?"mouse":"touch"]}function ct(S,I){const M=l.add(Nt(S)*-1),k=y.byDistance(S,!d).distance;return d||A(S)<L?k:h&&I?k*.5:y.byIndex(M.get(),0).distance}function z(S){const I=Gt(S,s);U=I,Z=d&&I&&!S.buttons&&_,_=ut(i.get(),r.get())>=2,!(I&&S.button!==0)&&(J(S.target)||(W=!0,o.pointerDown(S),u.useFriction(0).useDuration(0),i.set(r),rt(),B=o.readPoint(S),$=o.readPoint(S,x),g.emit("pointerDown")))}function q(S){const I=o.readPoint(S),M=o.readPoint(S,x),k=ut(I,B),X=ut(M,$);if(!K&&!U&&(!S.cancelable||(K=k>X,!K)))return j(S);const V=o.pointerMove(S);k>p&&(Z=!0),u.useFriction(.3).useDuration(1),a.start(),i.add(E(V)),S.preventDefault()}function j(S){const M=y.byDistance(0,!1).index!==l.get(),k=o.pointerUp(S)*it(),X=ct(E(k),M),V=sn(k,X),Y=F-10*V,nt=f+V/50;K=!1,W=!1,C.clear(),u.useDuration(Y).useFriction(nt),c.distance(X,!d),U=!1,g.emit("pointerUp")}function st(S){Z&&(S.stopPropagation(),S.preventDefault(),Z=!1)}function R(){return W}return{init:tt,pointerDown:R,destroy:Q}}function fn(t,n){let s,i;function o(l){return l.timeStamp}function r(l,g){const d=`client${(g||t.scroll)==="x"?"X":"Y"}`;return(Gt(l,n)?l:l.touches[0])[d]}function a(l){return s=l,i=l,r(l)}function c(l){const g=r(l)-r(i),b=o(l)-o(s)>170;return i=l,b&&(s=l),g}function u(l){if(!s||!i)return 0;const g=r(i)-r(s),b=o(l)-o(s),d=o(l)-o(i)>170,p=g/b;return b&&!d&&A(p)>.1?p:0}return{pointerDown:a,pointerMove:c,pointerUp:u,readPoint:r}}function dn(){function t(e){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=e;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:t}}function pn(t){function n(s){return t*(s/100)}return{measure:n}}function mn(t,n,e,s,i,o,r){let a,c,u=[],y=!1;function l(p){return i.measureSize(r.measure(p))}function g(p){if(!o)return;c=l(t),u=s.map(l);function h(m){for(const x of m){const E=x.target===t,w=s.indexOf(x.target),P=E?c:u[w],v=l(E?t:s[w]);if(A(v-P)>=.5){e.requestAnimationFrame(()=>{p.reInit(),n.emit("resize")});break}}}a=new ResizeObserver(m=>{y||(Lt(o)||o(p,m))&&h(m)}),[t].concat(s).forEach(m=>a.observe(m))}function b(){a&&a.disconnect(),y=!0}return{init:g,destroy:b}}function gn(t,n,e,s,i){let o=0,r=0,a=s,c=i,u=t.get(),y=0;function l(){const w=e.get()-t.get(),P=!a;let v=0;return P?(o=0,t.set(e),v=w):(o+=w/a,o*=c,u+=o,t.add(o),v=u-y),r=Nt(v),y=u,E}function g(){const w=e.get()-n.get();return A(w)<.001}function b(){return a}function d(){return r}function p(){return o}function h(){return m(s)}function f(){return x(i)}function m(w){return a=w,E}function x(w){return c=w,E}const E={direction:d,duration:b,velocity:p,seek:l,settled:g,useBaseFriction:f,useBaseDuration:h,useFriction:x,useDuration:m};return E}function hn(t,n,e,s,i){const o=i.measure(10),r=i.measure(50),a=ot(.1,.99);let c=!1;function u(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function y(b){if(!u())return;const d=t.reachedMin(n.get())?"min":"max",p=A(t[d]-n.get()),h=e.get()-n.get(),f=a.constrain(p/r);e.subtract(h*f),!b&&A(h)<o&&(e.set(t.constrain(e.get())),s.useDuration(25).useBaseFriction())}function l(b){c=!b}return{constrain:y,toggleActive:l}}function yn(t,n,e,s,i){const o=ot(-n+t,0),r=l(),a=y(),c=g();function u(d,p){return ut(d,p)<1}function y(){const d=r[0],p=G(r),h=r.lastIndexOf(d),f=r.indexOf(p)+1;return ot(h,f)}function l(){return e.map((d,p)=>{const{min:h,max:f}=o,m=o.constrain(d),x=!p,E=At(e,p);return x?f:E||u(h,m)?h:u(f,m)?f:m}).map(d=>parseFloat(d.toFixed(3)))}function g(){if(n<=t+i)return[o.max];if(s==="keepSnaps")return r;const{min:d,max:p}=a;return r.slice(d,p)}return{snapsContained:c,scrollContainLimit:a}}function Sn(t,n,e){const s=n[0],i=e?s-t:G(n);return{limit:ot(i,s)}}function xn(t,n,e,s){const o=n.min+.1,r=n.max+.1,{reachedMin:a,reachedMax:c}=ot(o,r);function u(g){return g===1?c(e.get()):g===-1?a(e.get()):!1}function y(g){if(!u(g))return;const b=t*(g*-1);s.forEach(d=>d.add(b))}return{loop:y}}function bn(t){const{max:n,length:e}=t;function s(o){const r=o-n;return e?r/-e:0}return{get:s}}function vn(t,n,e,s,i){const{startEdge:o,endEdge:r}=t,{groupSlides:a}=i,c=l().map(n.measure),u=g(),y=b();function l(){return a(s).map(p=>G(p)[r]-p[0][o]).map(A)}function g(){return s.map(p=>e[o]-p[o]).map(p=>-A(p))}function b(){return a(u).map(p=>p[0]).map((p,h)=>p+c[h])}return{snaps:u,snapsAligned:y}}function En(t,n,e,s,i,o){const{groupSlides:r}=i,{min:a,max:c}=s,u=y();function y(){const g=r(o),b=!t||n==="keepSnaps";return e.length===1?[o]:b?g:g.slice(a,c).map((d,p,h)=>{const f=!p,m=At(h,p);if(f){const x=G(h[0])+1;return Rt(x)}if(m){const x=pt(o)-G(h)[0]+1;return Rt(x,G(h)[0])}return d})}return{slideRegistry:u}}function Cn(t,n,e,s,i){const{reachedAny:o,removeOffset:r,constrain:a}=s;function c(d){return d.concat().sort((p,h)=>A(p)-A(h))[0]}function u(d){const p=t?r(d):a(d),h=n.map((m,x)=>({diff:y(m-p,0),index:x})).sort((m,x)=>A(m.diff)-A(x.diff)),{index:f}=h[0];return{index:f,distance:p}}function y(d,p){const h=[d,d+e,d-e];if(!t)return h[0];if(!p)return c(h);const f=h.filter(m=>Nt(m)===p);return f.length?c(f):G(h)-e}function l(d,p){const h=n[d]-i.get(),f=y(h,p);return{index:d,distance:f}}function g(d,p){const h=i.get()+d,{index:f,distance:m}=u(h),x=!t&&o(h);if(!p||x)return{index:f,distance:d};const E=n[f]-m,w=d+y(E,0);return{index:f,distance:w}}return{byDistance:g,byIndex:l,shortcut:y}}function wn(t,n,e,s,i,o,r){function a(l){const g=l.distance,b=l.index!==n.get();o.add(g),g&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(e.set(n.get()),n.set(l.index),r.emit("select"))}function c(l,g){const b=i.byDistance(l,g);a(b)}function u(l,g){const b=n.clone().set(l),d=i.byIndex(b.get(),g);a(d)}return{distance:c,index:u}}function In(t,n,e,s,i,o){let r=0;function a(){o.add(document,"keydown",c,!1),n.forEach(u)}function c(l){l.code==="Tab"&&(r=new Date().getTime())}function u(l){const g=()=>{if(new Date().getTime()-r>10)return;t.scrollLeft=0;const p=n.indexOf(l),h=e.findIndex(f=>f.includes(p));It(h)&&(i.useDuration(0),s.index(h,0))};o.add(l,"focus",g,{passive:!0,capture:!0})}return{init:a}}function gt(t){let n=t;function e(){return n}function s(c){n=r(c)}function i(c){n+=r(c)}function o(c){n-=r(c)}function r(c){return It(c)?c:c.get()}return{get:e,set:s,add:i,subtract:o}}function $t(t,n){const e=t.scroll==="x"?o:r,s=n.style;let i=!1;function o(l){return`translate3d(${l}px,0px,0px)`}function r(l){return`translate3d(0px,${l}px,0px)`}function a(l){i||(s.transform=e(t.direction(l)))}function c(l){i=!l}function u(){i||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:u,to:a,toggleActive:c}}function Ln(t,n,e,s,i,o,r,a,c){const y=at(i),l=at(i).reverse(),g=f().concat(m());function b(v,C){return v.reduce((L,N)=>L-i[N],C)}function d(v,C){return v.reduce((L,N)=>b(L,C)>0?L.concat([N]):L,[])}function p(v){return o.map((C,L)=>({start:C-s[L]+.5+v,end:C+n-.5+v}))}function h(v,C,L){const N=p(C);return v.map(T=>{const F=L?0:-e,_=L?e:0,B=L?"end":"start",$=N[T][B];return{index:T,loopPoint:$,slideLocation:gt(-1),translate:$t(t,c[T]),target:()=>a.get()>$?F:_}})}function f(){const v=r[0],C=d(l,v);return h(C,e,!1)}function m(){const v=n-r[0]-1,C=d(y,v);return h(C,-e,!0)}function x(){return g.every(({index:v})=>{const C=y.filter(L=>L!==v);return b(C,n)<=.1})}function E(){g.forEach(v=>{const{target:C,translate:L,slideLocation:N}=v,T=C();T!==N.get()&&(L.to(T),N.set(T))})}function w(){g.forEach(v=>v.translate.clear())}return{canLoop:x,clear:w,loop:E,loopPoints:g}}function Nn(t,n,e){let s,i=!1;function o(c){if(!e)return;function u(y){for(const l of y)if(l.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(y=>{i||(Lt(e)||e(c,y))&&u(y)}),s.observe(t,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function An(t,n,e,s){const i={};let o=null,r=null,a,c=!1;function u(){a=new IntersectionObserver(d=>{c||(d.forEach(p=>{const h=n.indexOf(p.target);i[h]=p}),o=null,r=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(d=>a.observe(d))}function y(){a&&a.disconnect(),c=!0}function l(d){return lt(i).reduce((p,h)=>{const f=parseInt(h),{isIntersecting:m}=i[f];return(d&&m||!d&&!m)&&p.push(f),p},[])}function g(d=!0){if(d&&o)return o;if(!d&&r)return r;const p=l(d);return d&&(o=p),d||(r=p),p}return{init:u,destroy:y,get:g}}function Pn(t,n,e,s,i,o){const{measureSize:r,startEdge:a,endEdge:c}=t,u=e[0]&&i,y=d(),l=p(),g=e.map(r),b=h();function d(){if(!u)return 0;const m=e[0];return A(n[a]-m[a])}function p(){if(!u)return 0;const m=o.getComputedStyle(G(s));return parseFloat(m.getPropertyValue(`margin-${c}`))}function h(){return e.map((m,x,E)=>{const w=!x,P=At(E,x);return w?g[x]+y:P?g[x]+l:E[x+1][a]-m[a]}).map(A)}return{slideSizes:g,slideSizesWithGaps:b,startGap:y,endGap:l}}function Dn(t,n,e,s,i,o,r,a,c){const{startEdge:u,endEdge:y,direction:l}=t,g=It(e);function b(f,m){return at(f).filter(x=>x%m===0).map(x=>f.slice(x,x+m))}function d(f){return f.length?at(f).reduce((m,x,E)=>{const w=G(m)||0,P=w===0,v=x===pt(f),C=i[u]-o[w][u],L=i[u]-o[x][y],N=!s&&P?l(r):0,T=!s&&v?l(a):0,F=A(L-T-(C+N));return E&&F>n+c&&m.push(x),v&&m.push(f.length),m},[]).map((m,x,E)=>{const w=Math.max(E[x-1]||0);return f.slice(w,m)}):[]}function p(f){return g?b(f,e):d(f)}return{groupSlides:p}}function On(t,n,e,s,i,o,r){const{align:a,axis:c,direction:u,startIndex:y,loop:l,duration:g,dragFree:b,dragThreshold:d,inViewThreshold:p,slidesToScroll:h,skipSnaps:f,containScroll:m,watchResize:x,watchSlides:E,watchDrag:w}=o,P=2,v=dn(),C=v.measure(n),L=e.map(v.measure),N=an(c,u),T=N.measureSize(C),F=pn(T),_=cn(a,T),B=!l&&!!m,$=l||!!m,{slideSizes:W,slideSizesWithGaps:K,startGap:Z,endGap:U}=Pn(N,C,L,e,$,i),tt=Dn(N,T,h,l,C,L,Z,U,P),{snaps:Q,snapsAligned:rt}=vn(N,_,C,L,tt),J=-G(Q)+G(K),{snapsContained:it,scrollContainLimit:ct}=yn(T,J,rt,m,P),z=B?it:rt,{limit:q}=Sn(J,z,l),j=qt(pt(z),y,l),st=j.clone(),R=at(e),O=({dragHandler:et,scrollBody:vt,scrollBounds:Et,options:{loop:mt}})=>{mt||Et.constrain(et.pointerDown()),vt.seek()},S=({scrollBody:et,translate:vt,location:Et,offsetLocation:mt,scrollLooper:Jt,slideLooper:Xt,dragHandler:Yt,animation:_t,eventHandler:Mt,options:{loop:Zt}},Wt)=>{const kt=et.velocity(),jt=et.settled();jt&&!Yt.pointerDown()&&(_t.stop(),Mt.emit("settle")),jt||Mt.emit("scroll"),mt.set(Et.get()-kt+kt*Wt),Zt&&(Jt.loop(et.direction()),Xt.loop()),vt.to(mt.get())},I=un(s,i,()=>O(bt),et=>S(bt,et)),M=.68,k=z[j.get()],X=gt(k),V=gt(k),Y=gt(k),nt=gn(X,V,Y,g,M),St=Cn(l,z,J,q,Y),xt=wn(I,j,st,nt,St,Y,r),Dt=bn(q),Ot=ft(),Ut=An(n,e,r,p),{slideRegistry:Tt}=En(B,m,z,ct,tt,R),Qt=In(t,e,Tt,xt,nt,Ot),bt={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:C,slideRects:L,animation:I,axis:N,dragHandler:ln(N,t,s,i,Y,fn(N,i),X,I,xt,nt,St,j,r,F,b,d,f,M,w),eventStore:Ot,percentOfView:F,index:j,indexPrevious:st,limit:q,location:X,offsetLocation:V,options:o,resizeHandler:mn(n,r,i,e,N,x,v),scrollBody:nt,scrollBounds:hn(q,V,Y,nt,F),scrollLooper:xn(J,q,V,[X,V,Y]),scrollProgress:Dt,scrollSnapList:z.map(Dt.get),scrollSnaps:z,scrollTarget:St,scrollTo:xt,slideLooper:Ln(N,T,J,W,K,Q,z,V,e),slideFocus:Qt,slidesHandler:Nn(n,r,E),slidesInView:Ut,slideIndexes:R,slideRegistry:Tt,slidesToScroll:tt,target:Y,translate:$t(N,n)};return bt}function Tn(){const t={};let n;function e(c){n=c}function s(c){return t[c]||[]}function i(c){return s(c).forEach(u=>u(n,c)),a}function o(c,u){return t[c]=s(c).concat([u]),a}function r(c,u){return t[c]=s(c).filter(y=>y!==u),a}const a={init:e,emit:i,off:r,on:o};return a}const Mn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function kn(t){function n(o,r){return Ht(o,r||{})}function e(o){const r=o.breakpoints||{},a=lt(r).filter(c=>t.matchMedia(c).matches).map(c=>r[c]).reduce((c,u)=>n(c,u),{});return n(o,a)}function s(o){return o.map(r=>lt(r.breakpoints||{})).reduce((r,a)=>r.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:s}}function jn(t){let n=[];function e(o,r){return n=r.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(o,t)),r.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function s(){n=n.filter(o=>o.destroy())}return{init:e,destroy:s}}function ht(t,n,e){const s=t.ownerDocument,i=s.defaultView,o=kn(i),r=jn(o),a=ft(),c=Tn(),{mergeOptions:u,optionsAtMedia:y,optionsMediaQueries:l}=o,{on:g,off:b,emit:d}=c,p=T;let h=!1,f,m=u(Mn,ht.globalOptions),x=u(m),E=[],w,P,v;function C(){const{container:O,slides:S}=x;P=(Ct(O)?t.querySelector(O):O)||t.children[0];const M=Ct(S)?P.querySelectorAll(S):S;v=[].slice.call(M||P.children)}function L(O){const S=On(t,P,v,s,i,O,c);if(O.loop&&!S.slideLooper.canLoop()){const I=Object.assign({},O,{loop:!1});return L(I)}return S}function N(O,S){h||(m=u(m,O),x=y(m),E=S||E,C(),f=L(x),l([m,...E.map(({options:I})=>I)]).forEach(I=>a.add(I,"change",T)),x.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(R),f.resizeHandler.init(R),f.slidesHandler.init(R),f.options.loop&&f.slideLooper.loop(),P.offsetParent&&v.length&&f.dragHandler.init(R),w=r.init(R,E)))}function T(O,S){const I=Q();F(),N(u({startIndex:I},O),S),c.emit("reInit")}function F(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),r.destroy(),a.clear()}function _(){h||(h=!0,a.clear(),F(),c.emit("destroy"))}function B(O,S,I){!x.active||h||(f.scrollBody.useBaseFriction().useDuration(S===!0?0:x.duration),f.scrollTo.index(O,I||0))}function $(O){const S=f.index.add(1).get();B(S,O,-1)}function W(O){const S=f.index.add(-1).get();B(S,O,1)}function K(){return f.index.add(1).get()!==Q()}function Z(){return f.index.add(-1).get()!==Q()}function U(){return f.scrollSnapList}function tt(){return f.scrollProgress.get(f.location.get())}function Q(){return f.index.get()}function rt(){return f.indexPrevious.get()}function J(){return f.slidesInView.get()}function it(){return f.slidesInView.get(!1)}function ct(){return w}function z(){return f}function q(){return t}function j(){return P}function st(){return v}const R={canScrollNext:K,canScrollPrev:Z,containerNode:j,internalEngine:z,destroy:_,off:b,on:g,emit:d,plugins:ct,previousScrollSnap:rt,reInit:p,rootNode:q,scrollNext:$,scrollPrev:W,scrollProgress:tt,scrollSnapList:U,scrollTo:B,selectedScrollSnap:Q,slideNodes:st,slidesInView:J,slidesNotInView:it};return N(n,e),setTimeout(()=>c.emit("init"),0),R}ht.globalOptions=void 0;function Pt(t={},n=[]){const e=D.useRef(t),s=D.useRef(n),[i,o]=D.useState(),[r,a]=D.useState(),c=D.useCallback(()=>{i&&i.reInit(e.current,s.current)},[i]);return D.useEffect(()=>{if(on()&&r){ht.globalOptions=Pt.globalOptions;const u=ht(r,e.current,s.current);return o(u),()=>u.destroy()}else o(void 0)},[r,o]),D.useEffect(()=>{wt(e.current,t)||(e.current=t,c())},[t,c]),D.useEffect(()=>{rn(s.current,n)||(s.current=n,c())},[n,c]),[a,i]}Pt.globalOptions=void 0;const Kt=D.createContext(null);function yt(){const t=D.useContext(Kt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Fn=D.forwardRef(({orientation:t="horizontal",opts:n,setApi:e,plugins:s,className:i,children:o,...r},a)=>{const[c,u]=Pt({...n,axis:t==="horizontal"?"x":"y"},s),[y,l]=D.useState(!1),[g,b]=D.useState(!1),d=D.useCallback(m=>{m&&(l(m.canScrollPrev()),b(m.canScrollNext()))},[]),p=D.useCallback(()=>{u==null||u.scrollPrev()},[u]),h=D.useCallback(()=>{u==null||u.scrollNext()},[u]),f=D.useCallback(m=>{m.key==="ArrowLeft"?(m.preventDefault(),p()):m.key==="ArrowRight"&&(m.preventDefault(),h())},[p,h]);return D.useEffect(()=>{!u||!e||e(u)},[u,e]),D.useEffect(()=>{if(u)return d(u),u.on("reInit",d),u.on("select",d),()=>{u==null||u.off("select",d)}},[u,d]),H.jsx(Kt.Provider,{value:{carouselRef:c,api:u,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:h,canScrollPrev:y,canScrollNext:g},children:H.jsx("div",{ref:a,onKeyDownCapture:f,className:dt("relative",i),role:"region","aria-roledescription":"carousel",...r,children:o})})});Fn.displayName="Carousel";const zn=D.forwardRef(({className:t,...n},e)=>{const{carouselRef:s,orientation:i}=yt();return H.jsx("div",{ref:s,className:"overflow-hidden",children:H.jsx("div",{ref:e,className:dt("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});zn.displayName="CarouselContent";const Bn=D.forwardRef(({className:t,...n},e)=>{const{orientation:s}=yt();return H.jsx("div",{ref:e,role:"group","aria-roledescription":"slide",className:dt("min-w-0 shrink-0 grow-0 basis-full",s==="horizontal"?"pl-4":"pt-4",t),...n})});Bn.displayName="CarouselItem";const Rn=D.forwardRef(({className:t,variant:n="outline",size:e="icon",...s},i)=>{const{orientation:o,scrollPrev:r,canScrollPrev:a}=yt();return H.jsxs(Vt,{ref:i,variant:n,size:e,className:dt("absolute  h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:r,...s,children:[H.jsx(tn,{className:"h-4 w-4"}),H.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Rn.displayName="CarouselPrevious";const Vn=D.forwardRef(({className:t,variant:n="outline",size:e="icon",...s},i)=>{const{orientation:o,scrollNext:r,canScrollNext:a}=yt();return H.jsxs(Vt,{ref:i,variant:n,size:e,className:dt("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:r,...s,children:[H.jsx(nn,{className:"h-4 w-4"}),H.jsx("span",{className:"sr-only",children:"Next slide"})]})});Vn.displayName="CarouselNext";export{Fn as C,zn as a,Bn as b,Rn as c,Vn as d};