import{j as e,Y as l,a as s}from"./app-BX33Itax.js";import{A as o}from"./AuthenticatedLayout-DTNnk7wz.js";import{B as t}from"./button-Bpo198Ws.js";import{B as n}from"./badge-DHiOG0MC.js";import{C as c,a as m,b as x,e as h,d as g}from"./card-DDR353rV.js";import"./transition-DFBWBGz1.js";import"./index-Dk3R7NsV.js";import"./shadcn-C-5SdYIA.js";function w({auth:d,listing:r}){const i=a=>{switch(a){case"Available":return"bg-green-200";case"Not Available":return"bg-red-200";case"Soon":return"bg-gray-200";default:return""}};return e.jsxs(o,{user:d.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Owner Dashboard"}),children:[e.jsx(l,{title:"Dashboard"}),e.jsx("div",{className:"container pt-8",children:e.jsx(t,{className:"mx-16 bg-primary hover:bg-gray-600",children:e.jsx(s,{href:route("landlord.create"),children:"Add Listing"})})}),e.jsx("div",{className:"container pt-8",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsxs("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"p-3 m-2 text-3xl font-extrabold text-start text-white rounded-lg shadow-sm bg-slate-500",children:"BOARDING HOUSE LISTINGS:"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5",children:r&&Array.isArray(r)&&r.map(a=>e.jsxs(c,{className:"bg-white shadow-sm rounded-lg",children:[e.jsxs(m,{children:[e.jsx("image",{children:e.jsx("img",{src:`/storage/${a.image}`,alt:"Image Description",style:{width:"100%",height:"300px",objectFit:"cover",marginBottom:"20px"}})}),e.jsxs("div",{children:[e.jsx(x,{className:"text-lg font-semibold leading-tight text-gray-800",children:a.property_name}),e.jsx(h,{className:"text-md text-gray-500",children:a.property_address})]})]}),e.jsxs(g,{className:"flex justify-end gap-2 col-span-2",children:[e.jsx(n,{variant:"outline",className:i(a.availability),children:a.availability}),e.jsx(t,{children:e.jsx(s,{href:route("landlord.show",[a.id]),children:"Details"})})]})]},a.id))})]})})})]})}export{w as default};