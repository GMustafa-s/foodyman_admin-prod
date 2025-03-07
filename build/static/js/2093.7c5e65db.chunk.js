"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2093],{61801:(e,t,a)=>{a.d(t,{q:()=>d});var s=a(72791),l=a(66818),n=a(37083),i=a(80184);const d=e=>{let{fetchOptions:t,refetch:a=!1,...d}=e;const[r,u]=(0,s.useState)(!1),[c,o]=(0,s.useState)([]);return(0,i.jsx)(l.Z,{labelInValue:!0,filterOption:!1,notFoundContent:r?(0,i.jsx)(n.Z,{size:"small"}):"no results",...d,options:r?[]:c,onFocus:()=>{c.length&&!a||(u(!0),t().then((e=>{o(e),u(!1)})))}})}},12093:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(72791),l=a(16871),n=a(30577),i=a(77483),d=a(54080),r=a(37083),u=a(79337),c=a(48030),o=a(33168),m=a(73292),h=a(7622),v=a(99378),p=a(80184);const x=()=>{const{t:e}=(0,o.$)(),{activeMenu:t}=(0,u.v9)((e=>e.menu),u.wU),a=(0,u.I0)(),[x]=i.Z.useForm(),y=(0,l.s0)(),{id:j}=(0,l.UO)(),[Z,b]=(0,s.useState)(!1);(0,s.useEffect)((()=>()=>{const e=x.getFieldsValue(!0);a((0,c.nc)({activeMenu:t,data:e}))}),[]);return(0,s.useEffect)((()=>{t.refetch&&(e=>{b(!0),m.Z.getById(e).then((e=>{let{data:s}=e;const l={...s,payment_id:s.payment.tag,activePayment:{label:s.payment.tag,value:s.payment.id,key:s.payment.id}};x.setFieldsValue({...l}),a((0,c.nc)({activeMenu:t,data:l}))})).finally((()=>{b(!1),a((0,c.A_)(t))}))})(j)}),[t.refetch]),(0,p.jsx)(d.Z,{title:e("edit.payment"),className:"h-100",children:Z?(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,p.jsx)(r.Z,{size:"large",className:"py-5"})}):(0,p.jsx)(v.Z,{form:x,handleSubmit:s=>{const l={...s,payment_id:s.activePayment.value};return m.Z.update(j,l).then((()=>{const s="seller/payments";n.Am.success(e("successfully.updated")),(0,u.dC)((()=>{a((0,c.ph)({...t,nextUrl:s})),a((0,h.BN)({}))})),y(`/${s}`)}))},type:"edit"})})}},99378:(e,t,a)=>{a.d(t,{Z:()=>p});var s=a(72791),l=a(77483),n=a(66106),i=a(30914),d=a(86005),r=a(25581),u=a(87309),c=a(33168),o=a(79337),m=a(73292),h=a(61801),v=a(80184);function p(e){var t;let{form:a,handleSubmit:p,type:x="add"}=e;const{t:y}=(0,c.$)(),{activeMenu:j}=(0,o.v9)((e=>e.menu),o.wU),[Z,b]=(0,s.useState)(!1),[f,g]=(0,s.useState)(null===j||void 0===j||null===(t=j.data)||void 0===t?void 0:t.activePayment);return(0,v.jsxs)(l.Z,{layout:"vertical",name:"user-address",form:a,onFinish:e=>{b(!0);const t={...e,activePayment:f};p(t).finally((()=>b(!1)))},initialValues:{status:!0,...null===j||void 0===j?void 0:j.data},children:[(0,v.jsxs)(n.Z,{gutter:12,children:[(0,v.jsx)(i.Z,{span:"cash"===(null===f||void 0===f?void 0:f.label.toLowerCase())||"wallet"===(null===f||void 0===f?void 0:f.label.toLowerCase())?12:24,children:(0,v.jsx)(l.Z.Item,{label:y("payment"),name:"payment_id",rules:[{required:!0,message:y("required")}],children:(0,v.jsx)(h.q,{fetchOptions:async function(){return m.Z.allPayment().then((e=>{let{data:t}=e;return t.map((e=>({label:(null===e||void 0===e?void 0:e.tag[0].toUpperCase())+(null===e||void 0===e?void 0:e.tag.substring(1)),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id})))}))},onSelect:e=>g(e),disabled:"edit"===x})})}),"cash"===(null===f||void 0===f?void 0:f.label.toLowerCase())||"wallet"===(null===f||void 0===f?void 0:f.label.toLowerCase())?"":(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Z,{span:12,children:(0,v.jsx)(l.Z.Item,{label:y("client.id"),name:"client_id",rules:[{required:!0,message:y("required")}],children:(0,v.jsx)(d.Z,{})})}),(0,v.jsx)(i.Z,{span:12,children:(0,v.jsx)(l.Z.Item,{label:y("secret.id"),name:"secret_id",rules:[{required:!0,message:y("required")}],children:(0,v.jsx)(d.Z,{})})}),"Paystack"===(null===f||void 0===f?void 0:f.label)?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Z,{span:12,children:(0,v.jsx)(l.Z.Item,{label:y("payment.id"),name:"payment_key",rules:[{required:!0,message:y("required")}],children:(0,v.jsx)(d.Z,{})})}),(0,v.jsx)(i.Z,{span:12,children:(0,v.jsx)(l.Z.Item,{label:y("merchant.email"),name:"merchant_email",rules:[{required:!0,message:y("required")}],children:(0,v.jsx)(d.Z,{})})})]}):""]}),(0,v.jsx)(i.Z,{span:12,children:(0,v.jsx)(l.Z.Item,{label:y("status"),name:"status",valuePropName:"checked",children:(0,v.jsx)(r.Z,{})})})]}),(0,v.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,v.jsx)("div",{className:"pb-5",children:(0,v.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:Z,disabled:Z,children:y("submit")})})})]})}}}]);
//# sourceMappingURL=2093.7c5e65db.chunk.js.map