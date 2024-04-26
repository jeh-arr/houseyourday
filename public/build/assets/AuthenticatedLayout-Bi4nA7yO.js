import{r as o,j as e,a as u}from"./app-BdFNN5E6.js";import{q as h}from"./transition-BYxG-KrI.js";import{b as p}from"./Vector-Cq3ioITs.js";const x=o.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),l=({children:t})=>{const[s,n]=o.useState(!1),r=()=>{n(i=>!i)};return e.jsx(x.Provider,{value:{open:s,setOpen:n,toggleOpen:r},children:e.jsx("div",{className:"relative",children:t})})},f=({children:t})=>{const{open:s,setOpen:n,toggleOpen:r}=o.useContext(x);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:r,children:t}),s&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},j=({align:t="right",width:s="48",contentClasses:n="py-1 bg-white",children:r})=>{const{open:i,setOpen:d}=o.useContext(x);let c="origin-top";t==="left"?c="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(c="ltr:origin-top-right rtl:origin-top-left end-0");let g="";return s==="48"&&(g="w-48"),e.jsx(e.Fragment,{children:e.jsx(h,{as:o.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${c} ${g}`,onClick:()=>d(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:r})})})})},v=({className:t="",children:s,...n})=>e.jsx(u,{...n,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:s});l.Trigger=f;l.Content=j;l.Link=v;const a=l;function m({active:t=!1,className:s="",children:n,...r}){return e.jsx(u,{...r,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${s}`,children:n})}function w({user:t,header:s,children:n}){const[r,i]=o.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-green-950 border-b border-gray-100",children:[e.jsx("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex"}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"relative ms-3",children:e.jsxs(a,{children:[e.jsx(a.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none",children:[t.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(a.Content,{children:[e.jsx(a.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(a.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"flex items-center -me-2 sm:hidden",children:e.jsx("button",{onClick:()=>i(d=>!d),className:"inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500",children:e.jsxs("svg",{className:"w-6 h-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:r?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:r?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsx("div",{className:(r?"block":"hidden")+" sm:hidden",children:e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:t.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(m,{href:route("profile.edit"),children:"Profile"}),e.jsx(m,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})})]}),s&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8",children:s})}),e.jsx("main",{style:{height:"100vh",backgroundImage:` url(${p})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},children:n})]})}export{w as A};
