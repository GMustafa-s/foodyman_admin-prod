"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6353],{46353:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var i=a(72791),s=a(77483),r=a(54080),l=a(37083),n=a(30577),d=a(16871),c=a(79337),u=a(48030),m=a(85830),o=a(33168),v=a(32711),h=a(17958),j=a(75362),b=a(80184);const f=()=>{const{t:e}=(0,o.$)(),{activeMenu:t}=(0,c.v9)((e=>e.menu),c.wU),{id:a}=(0,d.UO)(),f=(0,c.I0)(),{params:g}=(0,c.v9)((e=>e.brand),c.wU),[p]=s.Z.useForm(),x=(0,d.s0)(),[Z,y]=(0,i.useState)(!1);(0,i.useEffect)((()=>()=>{const e=p.getFieldsValue(!0);f((0,u.nc)({activeMenu:t,data:e}))}),[]);return(0,i.useEffect)((()=>{t.refetch&&(e=>{y(!0),v.Z.getById(e).then((e=>{let a=e.data;const i={...a,image:[(s=a.img,{name:s,url:m.bV+s})]};var s;p.setFieldsValue(i),f((0,u.nc)({activeMenu:t,data:i}))})).finally((()=>{y(!1),f((0,u.A_)(t))}))})(a)}),[t.refetch]),(0,b.jsx)(r.Z,{title:e("edit.brand"),children:Z?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(l.Z,{size:"large",className:"py-5"})}):(0,b.jsx)(j.Z,{form:p,handleSubmit:(i,s)=>{var r;const l={...i,active:i.active?1:0,"images[0]":null===(r=s[0])||void 0===r?void 0:r.name},d={...g},m="seller/brands";return v.Z.update(a,l).then((()=>{n.Am.success(e("successfully.updated")),(0,c.dC)((()=>{f((0,u.ph)({...t,nextUrl:m})),f((0,h.RJ)(d))})),x(`/${m}`)}))}})})}},75362:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(72791),s=a(77483),r=a(66106),l=a(30914),n=a(86005),d=a(25581),c=a(87309),u=a(11918),m=a(79337),o=a(33168),v=a(80184);function h(e){var t,a;let{form:h,handleSubmit:j}=e;const{t:b}=(0,o.$)(),{activeMenu:f}=(0,m.v9)((e=>e.menu),m.wU),[g,p]=(0,i.useState)(null!==(t=f.data)&&void 0!==t&&t.image?null===(a=f.data)||void 0===a?void 0:a.image:[]),[x,Z]=(0,i.useState)(!1);return(0,v.jsxs)(s.Z,{name:"basic",layout:"vertical",onFinish:e=>{Z(!0),j(e,g).finally((()=>Z(!1)))},form:h,initialValues:{active:!0,...f.data},children:[(0,v.jsxs)(r.Z,{gutter:12,children:[(0,v.jsx)(l.Z,{span:12,children:(0,v.jsx)(s.Z.Item,{label:b("title"),name:"title",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(b("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(b("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(b("required")))}],children:(0,v.jsx)(n.Z,{})})}),(0,v.jsx)(l.Z,{span:6,children:(0,v.jsx)(s.Z.Item,{label:b("image"),name:"images",rules:[{validator:()=>0===(null===g||void 0===g?void 0:g.length)?Promise.reject(new Error(b("required"))):Promise.resolve()}],children:(0,v.jsx)(u.Z,{type:"brands",imageList:g,setImageList:p,form:h,multiple:!1})})}),(0,v.jsx)(l.Z,{span:6,children:(0,v.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,v.jsx)(s.Z.Item,{label:b("active"),name:"active",valuePropName:"checked",children:(0,v.jsx)(d.Z,{})})})})]}),(0,v.jsx)(c.Z,{type:"primary",htmlType:"submit",loading:x,children:b("submit")})]})}}}]);
//# sourceMappingURL=6353.30da8252.chunk.js.map