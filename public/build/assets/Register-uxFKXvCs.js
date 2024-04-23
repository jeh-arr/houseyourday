import{r as d,W as _,j as e,Y as k,a as q}from"./app-cCl1q3-n.js";import{G}from"./GuestLayout-FhMGuLEH.js";import{I as r}from"./InputError-B1RH0M25.js";import{I as l}from"./InputLabel-qM141Z3E.js";import{P as I}from"./PrimaryButton-C7ACbAbf.js";import{T as n}from"./TextInput-Zdy6Wrzh.js";import{p as i,S as p,a as x,b as u,c as h,d as g,e as j,f as c}from"./index-Dhtlegu8.js";import"./shadcn-C-5SdYIA.js";import"./index-D2jn7h9d.js";function z(){d.useState();const[N,w]=d.useState([]),{data:o,setData:t,post:y,processing:C,errors:a,reset:b}=_({name:"",email:"",password:"",password_confirmation:"",phone:"",birthdate:"",usertype:"",gender:"",city:"",address:"",postal:"",username:""});d.useEffect(()=>()=>{b("password","password_confirmation")},[]),d.useEffect(()=>{const s=i.getProvincesByRegion("09"),F=i.getProvincesByRegion("10"),f=i.getProvincesByRegion("11"),R=i.getProvincesByRegion("12"),S=i.getProvincesByRegion("15"),B=i.getProvincesByRegion("16");s.concat(F,f,R,S,B);const E=f.map(m=>i.getCityMunByProvince(m.prov_code));Promise.all(E).then(m=>{const v=m.flat();console.log(v),w(v)}).catch(m=>{console.error("Error fetching cities:",m)})},[]);const P=s=>{s.preventDefault(),y(route("register"))};return e.jsxs(G,{children:[e.jsx(k,{title:"Register"}),e.jsx("div",{className:"gap-4",children:e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"Full name"}),e.jsx(n,{id:"name",name:"name",value:o.name,className:"block w-full mt-1",placeholder:"Enter full name",autoComplete:"name",isFocused:!0,onChange:s=>t("name",s.target.value),required:!0}),e.jsx(r,{message:a.name,className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",name:"email",value:o.email,placeholder:"Enter email address",className:"block w-full mt-1",onChange:s=>t("email",s.target.value),required:!0}),e.jsx(r,{message:a.email,className:"mt-2"})]}),e.jsxs("div",{className:"grid mt-4 sm:grid-cols-2 ",children:[e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"phone",value:"Phone Number"}),e.jsx(n,{id:"phone",type:"number",name:"phone",value:o.phone,placeholder:"Enter phone number",className:"block w-full mt-1",onChange:s=>t("phone",s.target.value),required:!0}),e.jsx(r,{message:a.phone,className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"birthdate",value:"Birth Date"}),e.jsx(r,{message:a.birthdate,className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"usertype",value:"User Type"}),e.jsxs(p,{onValueChange:s=>t("usertype",s),children:[e.jsx(x,{className:"w-[180px]",children:e.jsx(u,{placeholder:"User Type"})}),e.jsx(h,{children:e.jsxs(g,{children:[e.jsx(j,{children:"User Type"}),e.jsx(c,{value:"Renter",children:"Renter"}),e.jsx(c,{value:"Landlord",children:"Landlord"})]})})]}),e.jsx(r,{message:a.phone,className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"gender",value:"Gender"}),e.jsxs(p,{onValueChange:s=>t("gender",s),children:[e.jsx(x,{className:"w-[180px]",children:e.jsx(u,{placeholder:"Select Gender"})}),e.jsx(h,{children:e.jsxs(g,{children:[e.jsx(j,{children:"Gender"}),e.jsx(c,{value:"Male",children:"Male"}),e.jsx(c,{value:"Female",children:"Female"}),e.jsx(c,{value:"Prefer not to say",children:"Prefer not to say"})]})})]}),e.jsx(r,{message:a.phone,className:"mt-2"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"address",value:"Address"}),e.jsx(n,{id:"address",type:"string",name:"address",value:o.address,className:"block w-full mt-1",onChange:s=>t("address",s.target.value),required:!0}),e.jsx(r,{message:a.address,className:"mt-2"})]}),e.jsxs("div",{className:"grid mt-4 sm:grid-cols-2 ",children:[e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1",children:[e.jsx(l,{htmlFor:"city",value:"City"}),e.jsxs(p,{onValueChange:s=>t("city",s),children:[e.jsx(x,{className:"w-[180px]",children:e.jsx(u,{placeholder:"Select City"})}),e.jsx(h,{children:e.jsxs(g,{children:[e.jsx(j,{children:"City"}),N.map(s=>e.jsx(c,{value:s.name,children:s.name},s.reg_code))]})})]}),e.jsx(r,{message:a.city,className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"postal",value:"Postal Code"}),e.jsx(n,{id:"postal",type:"number",name:"postal",value:o.postal,className:"block w-full mt-1",onChange:s=>t("postal",s.target.value),required:!0}),e.jsx(r,{message:a.password,className:"mt-2"})]})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(n,{id:"password",type:"password",name:"password",value:o.password,className:"block w-full mt-1",autoComplete:"new-password",onChange:s=>t("password",s.target.value),required:!0}),e.jsx(r,{message:a.password,className:"mt-2"})]}),e.jsxs("div",{className:"flex flex-col gap-1 px-1 pt-1'",children:[e.jsx(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:o.password_confirmation,className:"block w-full mt-1",autoComplete:"new-password",onChange:s=>t("password_confirmation",s.target.value),required:!0}),e.jsx(r,{message:a.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(q,{href:route("login"),className:"text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(I,{className:"ms-4",disabled:C,children:"Register"})]})]})})]})}export{z as default};