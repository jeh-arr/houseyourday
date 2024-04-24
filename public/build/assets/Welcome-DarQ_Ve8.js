import{r as l,j as e,Y as x,a as s}from"./app-CGu3jGCv.js";import{_ as g}from"./index-BRZj-ymf.js";import{$ as m}from"./index-i2tqi8VZ.js";import{c as v}from"./shadcn-C-5SdYIA.js";const b="/build/assets/Hero-C2RhvunQ.png",c="horizontal",y=["horizontal","vertical"],d=l.forwardRef((r,a)=>{const{decorative:o,orientation:t=c,...n}=r,i=f(t)?t:c,p=o?{role:"none"}:{"aria-orientation":i==="vertical"?i:void 0,role:"separator"};return l.createElement(m.div,g({"data-orientation":i},p,n,{ref:a}))});d.propTypes={orientation(r,a,o){const t=r[a],n=String(t);return t&&!f(t)?new Error($(n,o)):null}};function $(r,a){return`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${a}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`}function f(r){return y.includes(r)}const u=d,h=l.forwardRef(({className:r,orientation:a="horizontal",decorative:o=!0,...t},n)=>e.jsx(u,{ref:n,decorative:o,orientation:a,className:v("shrink-0 bg-border",a==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...t}));h.displayName=u.displayName;function D({auth:r,laravelVersion:a,phpVersion:o}){return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Welcome"}),e.jsx("header",{className:"sticky top-0 z-10 flex-row w-full py-4 border-b-2 shadow-lg bg-white/60 padding-x backdrop-blur-lg border-neutral-300/30 ",children:e.jsx("nav",{className:"flex justify-end right-0 top-0 flex-1 mx-3 text-black",children:r.user?e.jsx(s,{href:route("dashboard"),className:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white",children:"Dashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(s,{href:route("login"),className:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white",children:"Log in"}),e.jsx(s,{href:route("register"),className:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white",children:"Register"})]})})}),e.jsx("main",{className:" bg-white h-screen w-full overflow-hidden mx-auto",children:e.jsxs("div",{className:" items-center h-screen grid gap-3 lg:grid-cols-2 lg:gap-8",children:[e.jsx("img",{src:b,alt:""}),e.jsxs("div",{className:"flex flex-col p-10",children:[e.jsx("h1",{className:"text-6xl font-bold text-primary",children:"Boarding House Finder"}),e.jsx(h,{className:"h-1 bg-primary my-3 "}),e.jsx("p",{className:"mr-2 pr-10",children:"Unlock the perfect haven with 'House Your Day' – your ultimate boarding house finder! Seamlessly navigate through an array of cozy abodes tailored to your needs. Discover comfort, convenience, and community with just a click. Let 'House Your Day' be your guiding light to a home-away-from-home experience like no other!"})]})]})})]})}export{D as default};