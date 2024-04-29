import{r as u,W as h,j as e,Y as j,a as f}from"./app-BbRTIwdI.js";import{A as v}from"./AuthenticatedLayout-DyY2TfDf.js";import{I as r}from"./InputLabel-DnIcjRt0.js";import{T as t}from"./TextInput-DoRZYTnH.js";import{S as b,a as y,b as N,c as C,d as S,e as A,f as i}from"./select-B-RfgycQ.js";import{C as _,a as F,b as I,e as w,d as B}from"./card-Cwc93_Zy.js";import{B as p}from"./button-BgTvmLOe.js";import"./transition-BMYovTgR.js";import"./Vector-Cq3ioITs.js";import"./shadcn-C-5SdYIA.js";import"./react-icons.esm-BG4C9Dys.js";import"./index-8yzoxrCy.js";import"./Combination-BheH65sV.js";import"./index-Bh8RWcHR.js";function J({auth:o}){u.useState();const{data:R,setData:s,post:m,processing:c,errors:T,reset:D,progress:E}=h({user_id:o.user.id,property_name:"",property_address:"",price:"",availability:"",description:"",rooms:"",image:[],permit:""}),x=a=>{if(a.length>3){alert("Please select up to 3 images.");return}const n=[];for(let l=0;l<a.length;l++){const d=a[l];n.push(d),console.log(`Uploaded image ${l+1}:`,d)}s("image",n)},g=a=>{a.preventDefault(),m(route("landlord.store"))};return e.jsxs(v,{user:o.user,children:[e.jsx(j,{title:"AddListing"}),e.jsx("div",{className:"py-12 ",children:e.jsx("div",{className:"mx-auto max-w-4xl  sm:px-6 lg:px-8 ",children:e.jsxs(_,{className:"px-3 pt-2 rounded-sm bg-slate-400/40 backdrop-blur-sm font-sans text-2xl text-white",children:[e.jsx(F,{className:"bg-slate-500 m-1 rounded-md",children:e.jsx(I,{children:"BOARDING HOUSE REGISTRATION "})}),e.jsxs("form",{onSubmit:g,children:[e.jsxs(w,{className:" text-gray-900 grid  gap-1",children:[e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"property_name",value:"Boarding House Name"}),e.jsx(t,{id:"property_name",name:"property_name",type:"text",onChange:a=>s("property_name",a.target.value)})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"property_address",value:"Boarding House Address"}),e.jsx(t,{id:"property_address",name:"property_address",type:"text",onChange:a=>s("property_address",a.target.value)})]}),e.jsxs("div",{className:"grid sm:grid-cols-2",children:[e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"rooms",value:"Rooms"}),e.jsx(t,{id:"rooms",name:"rooms",type:"number",onChange:a=>s("rooms",a.target.value)})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"availability",value:"Availability"}),e.jsxs(b,{onValueChange:a=>s("availability",a),children:[e.jsx(y,{className:"bg-slate-50  w-full",children:e.jsx(N,{placeholder:"Select Availability"})}),e.jsx(C,{className:"bg-slate-50 w-full",children:e.jsxs(S,{children:[e.jsx(A,{children:"Availability"}),e.jsx(i,{value:"Available",children:"Available"}),e.jsx(i,{value:"Not Available",children:"Not Available"}),e.jsx(i,{value:"Soon",children:"Soon"})]})})]})]})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"price",value:"Monthly Rent"}),e.jsx(t,{id:"price",name:"price",type:"number",onChange:a=>s("price",a.target.value)})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"description",value:"Description"}),e.jsx("textarea",{className:"text-base p-3 font-sans bg-slate-50 rounded-sm",rows:3,cols:50,id:"description",name:"description",onChange:a=>s("description",a.target.value)})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"image",value:"Upload Image"}),e.jsx("input",{type:"file",className:"border-2 border-gray-200 bg-slate-50 font-sans text-base rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary",id:"images",name:"images",accept:"image/*",multiple:!0,onChange:a=>x(a.target.files)})]}),e.jsxs("div",{className:"flex flex-col pt-2 px-3 gap-2",children:[e.jsx(r,{htmlFor:"permit",value:"Business Permit No."}),e.jsx(t,{id:"permit",name:"permit",type:"text",onChange:a=>s("permit",a.target.value)})]})]}),e.jsxs(B,{className:"  gap-3 m-3 grid sm:grid-cols-2",children:[e.jsx(p,{disabled:c,children:"Create"}),e.jsx(p,{children:e.jsx(f,{href:"",children:"Back"})})]})]})]})})})]})}export{J as default};