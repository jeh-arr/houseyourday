import{m as j,r as e,b as Te,j as _}from"./app-B4izY4hX.js";import{$ as Pe,a as Ne,b as Ce,c as Ge,d as we,e as Ye,f as T,g as q,h as Xe,i as Ze,j as Je,R as Qe,k as et,l as tt,m as ot,n as nt,C as ct,o as rt,p as at,q as st}from"./Combination-Utb5rih0.js";import{$ as A,a as ge,_ as E}from"./index-C2bE_6W3.js";import{$ as O}from"./index-BuSC7cpl.js";import{c as G}from"./shadcn-C-5SdYIA.js";function ye(o,[n,t]){return Math.min(t,Math.max(n,o))}function lt(o){const n=o+"CollectionProvider",[t,r]=Pe(n),[l,f]=t(n,{collectionRef:{current:null},itemMap:new Map}),a=x=>{const{scope:u,children:$}=x,v=j.useRef(null),p=j.useRef(new Map).current;return j.createElement(l,{scope:u,itemMap:p,collectionRef:v},$)},c=o+"CollectionSlot",s=j.forwardRef((x,u)=>{const{scope:$,children:v}=x,p=f(c,$),i=A(u,p.collectionRef);return j.createElement(ge,{ref:i},v)}),d=o+"CollectionItemSlot",h="data-radix-collection-item",b=j.forwardRef((x,u)=>{const{scope:$,children:v,...p}=x,i=j.useRef(null),g=A(u,i),V=f(d,$);return j.useEffect(()=>(V.itemMap.set(i,{ref:i,...p}),()=>void V.itemMap.delete(i))),j.createElement(ge,{[h]:"",ref:g},v)});function I(x){const u=f(o+"CollectionConsumer",x);return j.useCallback(()=>{const v=u.collectionRef.current;if(!v)return[];const p=Array.from(v.querySelectorAll(`[${h}]`));return Array.from(u.itemMap.values()).sort((V,N)=>p.indexOf(V.ref.current)-p.indexOf(N.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:a,Slot:s,ItemSlot:b},I,r]}const it=e.createContext(void 0);function dt(o){const n=e.useContext(it);return o||n||"ltr"}function ft(o){const n=e.useRef({value:o,previous:o});return e.useMemo(()=>(n.current.value!==o&&(n.current.previous=n.current.value,n.current.value=o),n.current.previous),[o])}const ut=e.forwardRef((o,n)=>e.createElement(O.span,E({},o,{ref:n,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...o.style}}))),pt=[" ","Enter","ArrowUp","ArrowDown"],mt=[" ","Enter"],ie="Select",[de,fe,$t]=lt(ie),[ne,fo]=Pe(ie,[$t,Ne]),Se=Ne(),[ht,Z]=ne(ie),[vt,gt]=ne(ie),xt=o=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:l,onOpenChange:f,value:a,defaultValue:c,onValueChange:s,dir:d,name:h,autoComplete:b,disabled:I,required:x}=o,u=Se(n),[$,v]=e.useState(null),[p,i]=e.useState(null),[g,V]=e.useState(!1),N=dt(d),[ce=!1,P]=Ce({prop:r,defaultProp:l,onChange:f}),[D,Y]=Ce({prop:a,defaultProp:c,onChange:s}),Q=e.useRef(null),X=$?!!$.closest("form"):!0,[B,K]=e.useState(new Set),U=Array.from(B).map(R=>R.props.value).join(";");return e.createElement(Ge,u,e.createElement(ht,{required:x,scope:n,trigger:$,onTriggerChange:v,valueNode:p,onValueNodeChange:i,valueNodeHasChildren:g,onValueNodeHasChildrenChange:V,contentId:we(),value:D,onValueChange:Y,open:ce,onOpenChange:P,dir:N,triggerPointerDownPosRef:Q,disabled:I},e.createElement(de.Provider,{scope:n},e.createElement(vt,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(R=>{K(H=>new Set(H).add(R))},[]),onNativeOptionRemove:e.useCallback(R=>{K(H=>{const W=new Set(H);return W.delete(R),W})},[])},t)),X?e.createElement(ke,{key:U,"aria-hidden":!0,required:x,tabIndex:-1,name:h,autoComplete:b,value:D,onChange:R=>Y(R.target.value),disabled:I},D===void 0?e.createElement("option",{value:""}):null,Array.from(B)):null))},wt="SelectTrigger",St=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:r=!1,...l}=o,f=Se(t),a=Z(wt,t),c=a.disabled||r,s=A(n,a.onTriggerChange),d=fe(t),[h,b,I]=Le(u=>{const $=d().filter(i=>!i.disabled),v=$.find(i=>i.value===a.value),p=Ve($,u,v);p!==void 0&&a.onValueChange(p.value)}),x=()=>{c||(a.onOpenChange(!0),I())};return e.createElement(Ye,E({asChild:!0},f),e.createElement(O.button,E({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Ae(a.value)?"":void 0},l,{ref:s,onClick:T(l.onClick,u=>{u.currentTarget.focus()}),onPointerDown:T(l.onPointerDown,u=>{const $=u.target;$.hasPointerCapture(u.pointerId)&&$.releasePointerCapture(u.pointerId),u.button===0&&u.ctrlKey===!1&&(x(),a.triggerPointerDownPosRef.current={x:Math.round(u.pageX),y:Math.round(u.pageY)},u.preventDefault())}),onKeyDown:T(l.onKeyDown,u=>{const $=h.current!=="";!(u.ctrlKey||u.altKey||u.metaKey)&&u.key.length===1&&b(u.key),!($&&u.key===" ")&&pt.includes(u.key)&&(x(),u.preventDefault())})})))}),bt="SelectValue",Ct=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,children:f,placeholder:a="",...c}=o,s=Z(bt,t),{onValueNodeHasChildrenChange:d}=s,h=f!==void 0,b=A(n,s.onValueNodeChange);return q(()=>{d(h)},[d,h]),e.createElement(O.span,E({},c,{ref:b,style:{pointerEvents:"none"}}),Ae(s.value)?e.createElement(e.Fragment,null,a):f)}),yt=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:r,...l}=o;return e.createElement(O.span,E({"aria-hidden":!0},l,{ref:n}),r||"▼")}),Et=o=>e.createElement(Xe,E({asChild:!0},o)),oe="SelectContent",It=e.forwardRef((o,n)=>{const t=Z(oe,o.__scopeSelect),[r,l]=e.useState();if(q(()=>{l(new DocumentFragment)},[]),!t.open){const f=r;return f?Te.createPortal(e.createElement(Me,{scope:o.__scopeSelect},e.createElement(de.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement(_t,E({},o,{ref:n}))}),F=10,[Me,J]=ne(oe),_t=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:f,onPointerDownOutside:a,side:c,sideOffset:s,align:d,alignOffset:h,arrowPadding:b,collisionBoundary:I,collisionPadding:x,sticky:u,hideWhenDetached:$,avoidCollisions:v,...p}=o,i=Z(oe,t),[g,V]=e.useState(null),[N,ce]=e.useState(null),P=A(n,m=>V(m)),[D,Y]=e.useState(null),[Q,X]=e.useState(null),B=fe(t),[K,U]=e.useState(!1),R=e.useRef(!1);e.useEffect(()=>{if(g)return Ze(g)},[g]),Je();const H=e.useCallback(m=>{const[C,...M]=B().map(S=>S.ref.current),[y]=M.slice(-1),w=document.activeElement;for(const S of m)if(S===w||(S==null||S.scrollIntoView({block:"nearest"}),S===C&&N&&(N.scrollTop=0),S===y&&N&&(N.scrollTop=N.scrollHeight),S==null||S.focus(),document.activeElement!==w))return},[B,N]),W=e.useCallback(()=>H([D,g]),[H,D,g]);e.useEffect(()=>{K&&W()},[K,W]);const{onOpenChange:ee,triggerPointerDownPosRef:z}=i;e.useEffect(()=>{if(g){let m={x:0,y:0};const C=y=>{var w,S,k,L;m={x:Math.abs(Math.round(y.pageX)-((w=(S=z.current)===null||S===void 0?void 0:S.x)!==null&&w!==void 0?w:0)),y:Math.abs(Math.round(y.pageY)-((k=(L=z.current)===null||L===void 0?void 0:L.y)!==null&&k!==void 0?k:0))}},M=y=>{m.x<=10&&m.y<=10?y.preventDefault():g.contains(y.target)||ee(!1),document.removeEventListener("pointermove",C),z.current=null};return z.current!==null&&(document.addEventListener("pointermove",C),document.addEventListener("pointerup",M,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",M,{capture:!0})}}},[g,ee,z]),e.useEffect(()=>{const m=()=>ee(!1);return window.addEventListener("blur",m),window.addEventListener("resize",m),()=>{window.removeEventListener("blur",m),window.removeEventListener("resize",m)}},[ee]);const[ue,ae]=Le(m=>{const C=B().filter(w=>!w.disabled),M=C.find(w=>w.ref.current===document.activeElement),y=Ve(C,m,M);y&&setTimeout(()=>y.ref.current.focus())}),pe=e.useCallback((m,C,M)=>{const y=!R.current&&!M;(i.value!==void 0&&i.value===C||y)&&(Y(m),y&&(R.current=!0))},[i.value]),me=e.useCallback(()=>g==null?void 0:g.focus(),[g]),te=e.useCallback((m,C,M)=>{const y=!R.current&&!M;(i.value!==void 0&&i.value===C||y)&&X(m)},[i.value]),se=r==="popper"?Ee:Rt,re=se===Ee?{side:c,sideOffset:s,align:d,alignOffset:h,arrowPadding:b,collisionBoundary:I,collisionPadding:x,sticky:u,hideWhenDetached:$,avoidCollisions:v}:{};return e.createElement(Me,{scope:t,content:g,viewport:N,onViewportChange:ce,itemRefCallback:pe,selectedItem:D,onItemLeave:me,itemTextRefCallback:te,focusSelectedItem:W,selectedItemText:Q,position:r,isPositioned:K,searchRef:ue},e.createElement(Qe,{as:ge,allowPinchZoom:!0},e.createElement(et,{asChild:!0,trapped:i.open,onMountAutoFocus:m=>{m.preventDefault()},onUnmountAutoFocus:T(l,m=>{var C;(C=i.trigger)===null||C===void 0||C.focus({preventScroll:!0}),m.preventDefault()})},e.createElement(tt,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:a,onFocusOutside:m=>m.preventDefault(),onDismiss:()=>i.onOpenChange(!1)},e.createElement(se,E({role:"listbox",id:i.contentId,"data-state":i.open?"open":"closed",dir:i.dir,onContextMenu:m=>m.preventDefault()},p,re,{onPlaced:()=>U(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",...p.style},onKeyDown:T(p.onKeyDown,m=>{const C=m.ctrlKey||m.altKey||m.metaKey;if(m.key==="Tab"&&m.preventDefault(),!C&&m.key.length===1&&ae(m.key),["ArrowUp","ArrowDown","Home","End"].includes(m.key)){let y=B().filter(w=>!w.disabled).map(w=>w.ref.current);if(["ArrowUp","End"].includes(m.key)&&(y=y.slice().reverse()),["ArrowUp","ArrowDown"].includes(m.key)){const w=m.target,S=y.indexOf(w);y=y.slice(S+1)}setTimeout(()=>H(y)),m.preventDefault()}})}))))))}),Rt=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:r,...l}=o,f=Z(oe,t),a=J(oe,t),[c,s]=e.useState(null),[d,h]=e.useState(null),b=A(n,P=>h(P)),I=fe(t),x=e.useRef(!1),u=e.useRef(!0),{viewport:$,selectedItem:v,selectedItemText:p,focusSelectedItem:i}=a,g=e.useCallback(()=>{if(f.trigger&&f.valueNode&&c&&d&&$&&v&&p){const P=f.trigger.getBoundingClientRect(),D=d.getBoundingClientRect(),Y=f.valueNode.getBoundingClientRect(),Q=p.getBoundingClientRect();if(f.dir!=="rtl"){const w=Q.left-D.left,S=Y.left-w,k=P.left-S,L=P.width+k,$e=Math.max(L,D.width),he=window.innerWidth-F,ve=ye(S,[F,he-$e]);c.style.minWidth=L+"px",c.style.left=ve+"px"}else{const w=D.right-Q.right,S=window.innerWidth-Y.right-w,k=window.innerWidth-P.right-S,L=P.width+k,$e=Math.max(L,D.width),he=window.innerWidth-F,ve=ye(S,[F,he-$e]);c.style.minWidth=L+"px",c.style.right=ve+"px"}const X=I(),B=window.innerHeight-F*2,K=$.scrollHeight,U=window.getComputedStyle(d),R=parseInt(U.borderTopWidth,10),H=parseInt(U.paddingTop,10),W=parseInt(U.borderBottomWidth,10),ee=parseInt(U.paddingBottom,10),z=R+H+K+ee+W,ue=Math.min(v.offsetHeight*5,z),ae=window.getComputedStyle($),pe=parseInt(ae.paddingTop,10),me=parseInt(ae.paddingBottom,10),te=P.top+P.height/2-F,se=B-te,re=v.offsetHeight/2,m=v.offsetTop+re,C=R+H+m,M=z-C;if(C<=te){const w=v===X[X.length-1].ref.current;c.style.bottom="0px";const S=d.clientHeight-$.offsetTop-$.offsetHeight,k=Math.max(se,re+(w?me:0)+S+W),L=C+k;c.style.height=L+"px"}else{const w=v===X[0].ref.current;c.style.top="0px";const k=Math.max(te,R+$.offsetTop+(w?pe:0)+re)+M;c.style.height=k+"px",$.scrollTop=C-te+$.offsetTop}c.style.margin=`${F}px 0`,c.style.minHeight=ue+"px",c.style.maxHeight=B+"px",r==null||r(),requestAnimationFrame(()=>x.current=!0)}},[I,f.trigger,f.valueNode,c,d,$,v,p,f.dir,r]);q(()=>g(),[g]);const[V,N]=e.useState();q(()=>{d&&N(window.getComputedStyle(d).zIndex)},[d]);const ce=e.useCallback(P=>{P&&u.current===!0&&(g(),i==null||i(),u.current=!1)},[g,i]);return e.createElement(Tt,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:x,onScrollButtonChange:ce},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:V}},e.createElement(O.div,E({},l,{ref:b,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),Ee=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=F,...f}=o,a=Se(t);return e.createElement(nt,E({},a,f,{ref:n,align:r,collisionPadding:l,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Tt,be]=ne(oe,{}),Ie="SelectViewport",Pt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=J(Ie,t),f=be(Ie,t),a=A(n,l.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(de.Slot,{scope:t},e.createElement(O.div,E({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:T(r.onScroll,s=>{const d=s.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:b}=f;if(b!=null&&b.current&&h){const I=Math.abs(c.current-d.scrollTop);if(I>0){const x=window.innerHeight-F*2,u=parseFloat(h.style.minHeight),$=parseFloat(h.style.height),v=Math.max(u,$);if(v<x){const p=v+I,i=Math.min(x,p),g=p-i;h.style.height=i+"px",h.style.bottom==="0px"&&(d.scrollTop=g>0?g:0,h.style.justifyContent="flex-end")}}}c.current=d.scrollTop})}))))}),Nt="SelectGroup",[Mt,Ot]=ne(Nt),Dt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=we();return e.createElement(Mt,{scope:t,id:l},e.createElement(O.div,E({role:"group","aria-labelledby":l},r,{ref:n})))}),At="SelectLabel",kt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=Ot(At,t);return e.createElement(O.div,E({id:l.id},r,{ref:n}))}),xe="SelectItem",[Lt,Oe]=ne(xe),Vt=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:f,...a}=o,c=Z(xe,t),s=J(xe,t),d=c.value===r,[h,b]=e.useState(f??""),[I,x]=e.useState(!1),u=A(n,p=>{var i;return(i=s.itemRefCallback)===null||i===void 0?void 0:i.call(s,p,r,l)}),$=we(),v=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(Lt,{scope:t,value:r,disabled:l,textId:$,isSelected:d,onItemTextChange:e.useCallback(p=>{b(i=>{var g;return i||((g=p==null?void 0:p.textContent)!==null&&g!==void 0?g:"").trim()})},[])},e.createElement(de.ItemSlot,{scope:t,value:r,disabled:l,textValue:h},e.createElement(O.div,E({role:"option","aria-labelledby":$,"data-highlighted":I?"":void 0,"aria-selected":d&&I,"data-state":d?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},a,{ref:u,onFocus:T(a.onFocus,()=>x(!0)),onBlur:T(a.onBlur,()=>x(!1)),onPointerUp:T(a.onPointerUp,v),onPointerMove:T(a.onPointerMove,p=>{if(l){var i;(i=s.onItemLeave)===null||i===void 0||i.call(s)}else p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:T(a.onPointerLeave,p=>{if(p.currentTarget===document.activeElement){var i;(i=s.onItemLeave)===null||i===void 0||i.call(s)}}),onKeyDown:T(a.onKeyDown,p=>{var i;((i=s.searchRef)===null||i===void 0?void 0:i.current)!==""&&p.key===" "||(mt.includes(p.key)&&v(),p.key===" "&&p.preventDefault())})}))))}),le="SelectItemText",Bt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,...f}=o,a=Z(le,t),c=J(le,t),s=Oe(le,t),d=gt(le,t),[h,b]=e.useState(null),I=A(n,p=>b(p),s.onItemTextChange,p=>{var i;return(i=c.itemTextRefCallback)===null||i===void 0?void 0:i.call(c,p,s.value,s.disabled)}),x=h==null?void 0:h.textContent,u=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},x),[s.disabled,s.value,x]),{onNativeOptionAdd:$,onNativeOptionRemove:v}=d;return q(()=>($(u),()=>v(u)),[$,v,u]),e.createElement(e.Fragment,null,e.createElement(O.span,E({id:s.textId},f,{ref:I})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Te.createPortal(f.children,a.valueNode):null)}),Ht="SelectItemIndicator",jt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return Oe(Ht,t).isSelected?e.createElement(O.span,E({"aria-hidden":!0},r,{ref:n})):null}),_e="SelectScrollUpButton",Wt=e.forwardRef((o,n)=>{const t=J(_e,o.__scopeSelect),r=be(_e,o.__scopeSelect),[l,f]=e.useState(!1),a=A(n,r.onScrollButtonChange);return q(()=>{if(t.viewport&&t.isPositioned){let s=function(){const d=c.scrollTop>0;f(d)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(De,E({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Re="SelectScrollDownButton",Ft=e.forwardRef((o,n)=>{const t=J(Re,o.__scopeSelect),r=be(Re,o.__scopeSelect),[l,f]=e.useState(!1),a=A(n,r.onScrollButtonChange);return q(()=>{if(t.viewport&&t.isPositioned){let s=function(){const d=c.scrollHeight-c.clientHeight,h=Math.ceil(c.scrollTop)<d;f(h)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(De,E({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),De=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=o,f=J("SelectScrollButton",t),a=e.useRef(null),c=fe(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),q(()=>{var d;const h=c().find(b=>b.ref.current===document.activeElement);h==null||(d=h.ref.current)===null||d===void 0||d.scrollIntoView({block:"nearest"})},[c]),e.createElement(O.div,E({"aria-hidden":!0},l,{ref:n,style:{flexShrink:0,...l.style},onPointerDown:T(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:T(l.onPointerMove,()=>{var d;(d=f.onItemLeave)===null||d===void 0||d.call(f),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:T(l.onPointerLeave,()=>{s()})}))}),Kt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return e.createElement(O.div,E({"aria-hidden":!0},r,{ref:n}))});function Ae(o){return o===""||o===void 0}const ke=e.forwardRef((o,n)=>{const{value:t,...r}=o,l=e.useRef(null),f=A(n,l),a=ft(t);return e.useEffect(()=>{const c=l.current,s=window.HTMLSelectElement.prototype,h=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&h){const b=new Event("change",{bubbles:!0});h.call(c,t),c.dispatchEvent(b)}},[a,t]),e.createElement(ut,{asChild:!0},e.createElement("select",E({},r,{ref:f,defaultValue:t})))});ke.displayName="BubbleSelect";function Le(o){const n=ot(o),t=e.useRef(""),r=e.useRef(0),l=e.useCallback(a=>{const c=t.current+a;n(c),function s(d){t.current=d,window.clearTimeout(r.current),d!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(c)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,f]}function Ve(o,n,t){const l=n.length>1&&Array.from(n).every(d=>d===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let a=Ut(o,Math.max(f,0));l.length===1&&(a=a.filter(d=>d!==t));const s=a.find(d=>d.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function Ut(o,n){return o.map((t,r)=>o[(n+r)%o.length])}const zt=xt,Be=St,qt=Ct,Gt=yt,Yt=Et,He=It,Xt=Pt,Zt=Dt,je=kt,We=Vt,Jt=Bt,Qt=jt,Fe=Wt,Ke=Ft,Ue=Kt,uo=zt,po=Zt,mo=qt,eo=e.forwardRef(({className:o,children:n,...t},r)=>_.jsxs(Be,{ref:r,className:G("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,_.jsx(Gt,{asChild:!0,children:_.jsx(ct,{className:"h-4 w-4 opacity-50"})})]}));eo.displayName=Be.displayName;const ze=e.forwardRef(({className:o,...n},t)=>_.jsx(Fe,{ref:t,className:G("flex cursor-default items-center justify-center py-1",o),...n,children:_.jsx(rt,{})}));ze.displayName=Fe.displayName;const qe=e.forwardRef(({className:o,...n},t)=>_.jsx(Ke,{ref:t,className:G("flex cursor-default items-center justify-center py-1",o),...n,children:_.jsx(at,{})}));qe.displayName=Ke.displayName;const to=e.forwardRef(({className:o,children:n,position:t="popper",...r},l)=>_.jsx(Yt,{children:_.jsxs(He,{ref:l,className:G("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...r,children:[_.jsx(ze,{}),_.jsx(Xt,{className:G("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),_.jsx(qe,{})]})}));to.displayName=He.displayName;const oo=e.forwardRef(({className:o,...n},t)=>_.jsx(je,{ref:t,className:G("px-2 py-1.5 text-sm font-semibold",o),...n}));oo.displayName=je.displayName;const no=e.forwardRef(({className:o,children:n,...t},r)=>_.jsxs(We,{ref:r,className:G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...t,children:[_.jsx("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:_.jsx(Qt,{children:_.jsx(st,{className:"h-4 w-4"})})}),_.jsx(Jt,{children:n})]}));no.displayName=We.displayName;const co=e.forwardRef(({className:o,...n},t)=>_.jsx(Ue,{ref:t,className:G("-mx-1 my-1 h-px bg-muted",o),...n}));co.displayName=Ue.displayName;export{uo as S,eo as a,mo as b,to as c,po as d,oo as e,no as f};
