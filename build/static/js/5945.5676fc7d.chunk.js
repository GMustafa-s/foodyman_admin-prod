"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5945],{95945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(72791),i=a(79337),l=a(87320),d=a(33168),o=a(44575),r=a(9109),s=a(54080),c=a(95134),u=a(27081),v=a(48030),m=a(4577),g=a(16871),p=a(85830),f=a(63446),h=a(93669),_=a(34295),x=a(7560),b=a(80184);const{Step:y}=r.Z,j=()=>{var e;const{t:t}=(0,d.$)(),{activeMenu:a}=(0,i.v9)((e=>e.menu),i.wU),j=(0,u.K)(),Z=Number((null===(e=j.values)||void 0===e?void 0:e.step)||0),[k,S]=(0,n.useState)(a.refetch),w=(0,i.I0)(),{uuid:$}=(0,g.UO)(),{languages:C}=(0,i.v9)((e=>e.formLang),i.wU),M=()=>{const e=Z+1;j.set("step",e)},U=()=>{const e=Z-1;j.set("step",e)},F=e=>({items:e,uid:e,url:p.bV+e,name:e});function I(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=C.map((e=>{var a,n,i;return{[`title[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.description,[`address[${e.locale}]`]:null===(i=t.find((t=>t.locale===e.locale)))||void 0===i?void 0:i.address}}));return Object.assign({},...a)}return(0,n.useEffect)((()=>{a.refetch&&$&&(e=>{S(!0),m.Z.getById(e).then((e=>{var t,n,i,l,d;const o={...e.data,...I(e.data),logo_img:F(e.data.logo_img),background_img:F(e.data.background_img),user:"",delivery_time_from:null===(t=e.data)||void 0===t?void 0:t.delivery_time.from,delivery_time_to:null===(n=e.data)||void 0===n?void 0:n.delivery_time.to,delivery_time_type:null===(i=e.data)||void 0===i?void 0:i.delivery_time.type,recommended:"recommended"===e.data.mark,categories:null===(l=e.data)||void 0===l?void 0:l.categories.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}})),tags:null===(d=e.data)||void 0===d?void 0:d.tags.map((e=>{var t;return{label:null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))};w((0,v.nc)({activeMenu:a,data:o}))})).finally((()=>{S(!1),w((0,v.A_)(a))}))})($)}),[a.refetch]),(0,b.jsxs)(s.Z,{title:t("restaurant.clone"),extra:(0,b.jsx)(l.Z,{}),children:[(0,b.jsx)(r.Z,{current:Z,onChange:e=>{w((0,v.nc)({activeMenu:a,data:{...a.data,step:e}})),j.set("step",e)},children:o.S.map((e=>(0,b.jsx)(y,{title:t(e.title)},e.title)))}),k?(0,b.jsx)(f.Z,{}):(0,b.jsxs)("div",{className:"steps-content",children:["First-content"===o.S[Z].content&&(0,b.jsx)(h.Z,{next:M,loading:k,user:!1}),"Second-content"===o.S[Z].content&&(0,b.jsx)(x.Z,{next:M,prev:U}),"Third-content"===o.S[Z].content&&(0,b.jsx)(_.Z,{next:M,prev:U}),"Four-content"===o.S[Z].content&&(0,b.jsx)(c.Z,{next:M,prev:U})]})]})}}}]);
//# sourceMappingURL=5945.5676fc7d.chunk.js.map