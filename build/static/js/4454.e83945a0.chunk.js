"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4454],{74454:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var l=i(72791),n=i(77483),a=i(54080),s=i(37083),d=i(30577),o=i(16871),u=i(87320),r=i(79337),c=i(48030),v=i(15764),p=i(85830),f=i(33168),m=i(37956),g=i(12098),h=i(79467),y=i(80184);const b=()=>{const{t:e}=(0,f.$)(),t=(0,o.s0)(),i=(0,r.I0)(),{activeMenu:b}=(0,r.v9)((e=>e.menu),r.wU),[Z,j]=(0,l.useState)(!1),[k]=n.Z.useForm(),[w,x]=(0,l.useState)(null),{uuid:U}=(0,o.UO)(),{languages:$}=(0,r.v9)((e=>e.formLang),r.wU);(0,l.useEffect)((()=>()=>{const e=k.getFieldsValue(!0);i((0,c.nc)({activeMenu:b,data:e}))}),[]);function _(e){if(!e)return{};const{translations:t}=e,i=$.map((e=>{var i,l;return{[`title[${e.locale}]`]:null===(i=t.find((t=>t.locale===e.locale)))||void 0===i?void 0:i.title,[`description[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.description}}));return Object.assign({},...i)}return(0,l.useEffect)((()=>{var e;b.refetch&&(e=U,j(!0),v.Z.getById(e).then((e=>{var t;let l=e.data;const n={...l,..._(l),image:null!==l&&void 0!==l&&null!==(t=l.img)&&void 0!==t&&t.length?[(a=null===l||void 0===l?void 0:l.img,{name:a,url:p.bV+a})]:[],keywords:l.keywords.split(","),input:l.input?null===l||void 0===l?void 0:l.input:0};var a;i((0,c.nc)({activeMenu:b,data:n})),k.setFieldsValue(n)})).finally((()=>{j(!1),i((0,c.A_)(b))})))}),[b.refetch]),(0,y.jsx)(a.Z,{title:e("edit.category"),extra:(0,y.jsx)(u.Z,{}),children:Z?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,y.jsx)(s.Z,{size:"large",className:"mt-5 pt-5"})}):(0,y.jsx)(h.Z,{form:k,handleSubmit:(l,n)=>{var a,s;const o={type:"receipt",title:(0,g.Z)($,l),description:(0,g.Z)($,l,"description"),keywords:null===l||void 0===l||null===(a=l.keywords)||void 0===a?void 0:a.join(","),input:null!==(s=null===l||void 0===l?void 0:l.input)&&void 0!==s?s:0,images:null===n||void 0===n?void 0:n.map((e=>null===e||void 0===e?void 0:e.name)),active:null!==l&&void 0!==l&&l.active?1:0,parent_id:void 0},u="catalog/recipe-categories";return v.Z.update(U,o).then((()=>{d.Am.success(e("successfully.updated")),(0,r.dC)((()=>{i((0,c.ph)({...b,nextUrl:u})),i((0,m.P2)({}))})),t(`/${u}`)})).catch((e=>x(e.response.data.params)))},error:w})})}}}]);
//# sourceMappingURL=4454.e83945a0.chunk.js.map