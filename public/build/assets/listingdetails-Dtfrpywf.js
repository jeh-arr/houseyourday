import{r as n,b as D,j as e,Y as S,a as k}from"./app-B4izY4hX.js";import{A as U}from"./AuthenticatedLayout-BELqnblG.js";import{B as C}from"./button-CJEj6MAG.js";import{I as x}from"./InputLabel-oNuk7b_6.js";import{T as v}from"./TextInput-CyuLf774.js";import{C as L,a as B,b as K,c as H,d as z}from"./carousel-CBL-T3mR.js";import{$ as P,_ as b,a as G}from"./index-C2bE_6W3.js";import{g as E,$ as J,a as A,b as V,c as Y,d as Z,f as O,e as q,h as Q,i as W,R as X,j as ee,k as te,l as oe,n as ne}from"./Combination-Utb5rih0.js";import{$ as re}from"./index-BuSC7cpl.js";import{c as ce}from"./shadcn-C-5SdYIA.js";import"./transition-2alUK4lV.js";function ae(t,o){return n.useReducer((a,r)=>{const c=o[a][r];return c??a},t)}const j=t=>{const{present:o,children:a}=t,r=se(o),c=typeof a=="function"?a({present:r.isPresent}):n.Children.only(a),s=P(r.ref,c.ref);return typeof a=="function"||r.isPresent?n.cloneElement(c,{ref:s}):null};j.displayName="Presence";function se(t){const[o,a]=n.useState(),r=n.useRef({}),c=n.useRef(t),s=n.useRef("none"),l=t?"mounted":"unmounted",[i,u]=ae(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return n.useEffect(()=>{const d=N(r.current);s.current=i==="mounted"?d:"none"},[i]),E(()=>{const d=r.current,p=c.current;if(p!==t){const m=s.current,$=N(d);t?u("MOUNT"):$==="none"||(d==null?void 0:d.display)==="none"?u("UNMOUNT"):u(p&&m!==$?"ANIMATION_OUT":"UNMOUNT"),c.current=t}},[t,u]),E(()=>{if(o){const d=f=>{const $=N(r.current).includes(f.animationName);f.target===o&&$&&D.flushSync(()=>u("ANIMATION_END"))},p=f=>{f.target===o&&(s.current=N(r.current))};return o.addEventListener("animationstart",p),o.addEventListener("animationcancel",d),o.addEventListener("animationend",d),()=>{o.removeEventListener("animationstart",p),o.removeEventListener("animationcancel",d),o.removeEventListener("animationend",d)}}else u("ANIMATION_END")},[o,u]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:n.useCallback(d=>{d&&(r.current=getComputedStyle(d)),a(d)},[])}}function N(t){return(t==null?void 0:t.animationName)||"none"}const _="Popover",[R,Te]=J(_,[A]),y=A(),[ie,h]=R(_),le=t=>{const{__scopePopover:o,children:a,open:r,defaultOpen:c,onOpenChange:s,modal:l=!1}=t,i=y(o),u=n.useRef(null),[d,p]=n.useState(!1),[f=!1,m]=V({prop:r,defaultProp:c,onChange:s});return n.createElement(Y,i,n.createElement(ie,{scope:o,contentId:Z(),triggerRef:u,open:f,onOpenChange:m,onOpenToggle:n.useCallback(()=>m($=>!$),[m]),hasCustomAnchor:d,onCustomAnchorAdd:n.useCallback(()=>p(!0),[]),onCustomAnchorRemove:n.useCallback(()=>p(!1),[]),modal:l},a))},de="PopoverTrigger",ue=n.forwardRef((t,o)=>{const{__scopePopover:a,...r}=t,c=h(de,a),s=y(a),l=P(o,c.triggerRef),i=n.createElement(re.button,b({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":I(c.open)},r,{ref:l,onClick:O(t.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?i:n.createElement(q,b({asChild:!0},s),i)}),w="PopoverPortal",[pe,fe]=R(w,{forceMount:void 0}),me=t=>{const{__scopePopover:o,forceMount:a,children:r,container:c}=t,s=h(w,o);return n.createElement(pe,{scope:o,forceMount:a},n.createElement(j,{present:a||s.open},n.createElement(Q,{asChild:!0,container:c},r)))},g="PopoverContent",xe=n.forwardRef((t,o)=>{const a=fe(g,t.__scopePopover),{forceMount:r=a.forceMount,...c}=t,s=h(g,t.__scopePopover);return n.createElement(j,{present:r||s.open},s.modal?n.createElement(ve,b({},c,{ref:o})):n.createElement($e,b({},c,{ref:o})))}),ve=n.forwardRef((t,o)=>{const a=h(g,t.__scopePopover),r=n.useRef(null),c=P(o,r),s=n.useRef(!1);return n.useEffect(()=>{const l=r.current;if(l)return W(l)},[]),n.createElement(X,{as:G,allowPinchZoom:!0},n.createElement(F,b({},t,{ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:O(t.onCloseAutoFocus,l=>{var i;l.preventDefault(),s.current||(i=a.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:O(t.onPointerDownOutside,l=>{const i=l.detail.originalEvent,u=i.button===0&&i.ctrlKey===!0,d=i.button===2||u;s.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:O(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1})})))}),$e=n.forwardRef((t,o)=>{const a=h(g,t.__scopePopover),r=n.useRef(!1),c=n.useRef(!1);return n.createElement(F,b({},t,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var l;if((l=t.onCloseAutoFocus)===null||l===void 0||l.call(t,s),!s.defaultPrevented){var i;r.current||(i=a.triggerRef.current)===null||i===void 0||i.focus(),s.preventDefault()}r.current=!1,c.current=!1},onInteractOutside:s=>{var l,i;(l=t.onInteractOutside)===null||l===void 0||l.call(t,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const u=s.target;((i=a.triggerRef.current)===null||i===void 0?void 0:i.contains(u))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&c.current&&s.preventDefault()}}))}),F=n.forwardRef((t,o)=>{const{__scopePopover:a,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:s,disableOutsidePointerEvents:l,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:p,...f}=t,m=h(g,a),$=y(a);return ee(),n.createElement(te,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:c,onUnmountAutoFocus:s},n.createElement(oe,{asChild:!0,disableOutsidePointerEvents:l,onInteractOutside:p,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:d,onDismiss:()=>m.onOpenChange(!1)},n.createElement(ne,b({"data-state":I(m.open),role:"dialog",id:m.contentId},$,f,{ref:o,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function I(t){return t?"open":"closed"}const be=le,he=ue,ge=me,M=xe,Ne=be,Oe=he,T=n.forwardRef(({className:t,align:o="center",sideOffset:a=4,...r},c)=>e.jsx(ge,{children:e.jsx(M,{ref:c,align:o,sideOffset:a,className:ce("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})}));T.displayName=M.displayName;function De({auth:t,listing:o}){return console.log(o),e.jsxs(U,{user:t.user,children:[e.jsx(S,{title:"Details"}),e.jsx("div",{className:"container pt-8",children:e.jsx("div",{className:"mx-auto  max-w-7xl sm:px-6 lg:px-8",children:e.jsxs("div",{className:"overflow-hidden bg-slate-400/50 backdrop-blur-lg shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"p-3 m-2 text-3xl font-extrabold text-left text-white rounded-lg shadow-sm bg-slate-500",children:" BOARDING HOUSE DETAILS:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5",children:[e.jsx("div",{className:"flex flex-col justify-center items-center bg-slate-100",children:e.jsxs(L,{children:[e.jsx(B,{children:JSON.parse(o.image).map((a,r)=>e.jsx(K,{children:e.jsx("img",{src:`/storage/${a}`,alt:`Image ${r}`,style:{width:"100%",height:"max-content",objectFit:"cover"}})},r))}),e.jsx(H,{className:"p-2 rounded-full ml-14 bg-gray-700 text-white"}),e.jsx(z,{className:"p-2 rounded-full mr-14 bg-gray-700 text-white"})]})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"property_name",value:"Boarding House Name"}),e.jsx(v,{id:"property_name",name:"property_name",type:"text",value:o.property_name,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"property_address",value:"Boarding House Address"}),e.jsx(v,{id:"property_address",name:"property_address",type:"text",value:o.property_address,readOnly:!0})]}),e.jsxs("div",{className:"grid sm:grid-cols-2 n",children:[e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"kitchen",value:"Kitchen"}),e.jsx(v,{id:"kitchen",name:"Kitchen",type:"text",value:o.kitchen,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"bathroom",value:"Bathroom"}),e.jsx(v,{id:"bathroom",name:"bathroom",type:"text",value:o.bathroom,readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"other",value:"Other Amenities"}),e.jsx(v,{id:"other",name:"other",type:"text",value:o.other,readOnly:!0})]}),e.jsxs("div",{className:"grid sm:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"curfew",value:"Curfew"}),e.jsx(v,{id:"curfew",name:"curfew",type:"text",value:o.curfew,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"rules",value:"Rules"}),e.jsx(v,{id:"rules",name:"rules",type:"text",value:o.rules,readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"availability",value:"Availability"}),e.jsx(v,{id:"availability",name:"availability",type:"text",value:o.availability,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(x,{htmlFor:"price",value:"Monthly Rent"}),e.jsx(v,{id:"price",name:"price",type:"text",value:o.price,readOnly:!0})]}),e.jsxs("div",{className:"grid p-6 gap-3 m-3 sm:grid-cols-2",children:[e.jsxs(Ne,{children:[e.jsx(Oe,{asChild:!0,children:e.jsx(C,{variant:"outline",children:"Show Contact Details"})}),e.jsx(T,{children:e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx("p",{children:"Interested?...Contact us at:"}),e.jsx(x,{htmlFor:"",value:"Contact Details"}),e.jsx(v,{id:"availability",name:"availability",type:"text",value:o.user.phone,readOnly:!0})]})})]}),e.jsx(C,{children:e.jsx(k,{href:route("renter.index"),children:"back"})})]})]})]})]})})})]})}export{De as default};