"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1924],{61801:(e,l,t)=>{t.d(l,{q:()=>r});var a=t(72791),n=t(66818),i=t(37083),s=t(80184);const r=e=>{let{fetchOptions:l,refetch:t=!1,...r}=e;const[d,o]=(0,a.useState)(!1),[c,u]=(0,a.useState)([]);return(0,s.jsx)(n.Z,{labelInValue:!0,filterOption:!1,notFoundContent:d?(0,s.jsx)(i.Z,{size:"small"}):"no results",...r,options:d?[]:c,onFocus:()=>{c.length&&!t||(o(!0),l().then((e=>{u(e),o(!1)})))}})}},255:(e,l,t)=>{t.d(l,{Z:()=>p});var a=t(72791),n=t(87407),i=t(56014),s=t(83099),r=t(25581),d=t(32385),o=t(43751),c=t(87309),u=t(99197),v=t(33168),h=t(80184);const{Text:m}=n.Z,p=e=>{let{columns:l=[],setColumns:t,style:n,size:p="",iconOnly:x}=e;const{t:y}=(0,v.$)(),[j,Z]=(0,a.useState)(!1),g=(0,h.jsx)(i.Z,{children:null===l||void 0===l?void 0:l.map(((e,a)=>(0,h.jsx)(i.Z.Item,{children:(0,h.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(r.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===l||void 0===l?void 0:l.map((l=>(l.dataIndex===e.dataIndex&&(l.is_show=!(null!==l&&void 0!==l&&l.is_show)),l)));t(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(d.Z,{overlay:g,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:j,children:(0,h.jsx)(o.Z,{title:y("change.columns"),children:(0,h.jsx)(c.Z,{style:{...n},size:p,icon:(0,h.jsx)(u.Z,{}),children:x?null:y("Columns")})})})}},35740:(e,l,t)=>{t.d(l,{R:()=>o});var a=t(72791),n=t(48573),i=t.n(n),s=t(66818),r=t(37083),d=t(80184);const o=e=>{let{fetchOptions:l,debounceTimeout:t=400,refetch:n=!1,...o}=e;const[c,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),m=(0,a.useMemo)((()=>i()((e=>{h([]),u(!0),l(e).then((e=>{h(e),u(!1)}))}),t)),[l,t]);return(0,d.jsx)(s.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>m(""),filterOption:!1,onSearch:m,notFoundContent:c?(0,d.jsx)(r.Z,{size:"small"}):"no results",...o,options:v,onFocus:()=>{m("")}})}},28640:(e,l,t)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(l,{Z:()=>a})},39366:(e,l,t)=>{t.d(l,{Z:()=>n});var a=t(80470);function n(){var e,l;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const s=null===(e=a.h.getState())||void 0===e||null===(l=e.currency)||void 0===l?void 0:l.defaultCurrency,r=Number(t).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),d=n||(null===s||void 0===s?void 0:s.symbol)||"$",o=i||(null===s||void 0===s?void 0:s.position)||"before";return"after"===o?`${r} ${d}`:`${d} ${r}`}},41924:(e,l,t)=>{t.r(l),t.d(l,{default:()=>A});var a=t(72791),n=t(87661),i=t(47528),s=t(83099),r=t(87309),d=t(43751),o=t(54080),c=t(95332),u=t(79337),v=t(48030),h=t(17076),m=t(28640),p=t(33168),x=t(39366),y=t(31752),j=t(92414),Z=t(65873),g=t(77483),f=t(66106),b=t(30914),w=t(38243),C=t(86005),_=t(61801),k=t(28748),I=t(178),$=t(26650),S=t(13350),z=t(35740),q=t(80184);function V(e){var l,t,n,i,s,d,o,c;let{data:h,handleCancel:m}=e;const{t:x}=(0,p.$)(),{activeMenu:y}=(0,u.v9)((e=>e.menu),u.wU),[j,V]=(0,a.useState)(!1),P=(0,u.I0)();return(0,q.jsx)(Z.Z,{visible:!!h,title:x("pay.to.seller"),onCancel:m,footer:[(0,q.jsx)(r.Z,{onClick:m,children:x("cancel")},"calcel-btn"),(0,q.jsx)(r.Z,{type:"primary",form:"form",htmlType:"submit",loading:j,children:null!==h&&void 0!==h&&h.id?x("edit"):x("create")},"pay-btn")],children:(0,q.jsx)(g.Z,{initialValues:{cause:null===h||void 0===h?void 0:h.cause,price:null===h||void 0===h?void 0:h.price,answer:null===h||void 0===h?void 0:h.answer,currency_id:(null===h||void 0===h?void 0:h.currency)&&{value:null===h||void 0===h||null===(l=h.currency)||void 0===l?void 0:l.id,label:`${null===h||void 0===h||null===(t=h.currency)||void 0===t?void 0:t.title} (${null===h||void 0===h||null===(n=h.currency)||void 0===n?void 0:n.symbol})`},payment_id:(null===h||void 0===h?void 0:h.payment)&&{value:null===h||void 0===h||null===(i=h.payment)||void 0===i?void 0:i.id,label:null===h||void 0===h||null===(s=h.payment)||void 0===s?void 0:s.tag},created_by:(null===h||void 0===h?void 0:h.createdBy)&&{value:null===h||void 0===h||null===(d=h.createdBy)||void 0===d?void 0:d.id,label:`${null===h||void 0===h||null===(o=h.createdBy)||void 0===o?void 0:o.firstname} ${(null===h||void 0===h||null===(c=h.createdBy)||void 0===c?void 0:c.lastname)||""}`}},onFinish:e=>{var l,t,a;const n={cause:e.cause,price:e.price,created_by:null===e||void 0===e||null===(l=e.created_by)||void 0===l?void 0:l.value,payment_id:null===e||void 0===e||null===(t=e.payment_id)||void 0===t?void 0:t.value,currency_id:null===e||void 0===e||null===(a=e.currency_id)||void 0===a?void 0:a.value,answer:e.answer};V(!0),null!==h&&void 0!==h&&h.id?S.a.update(h.id,n).then((()=>{m(),P((0,v.xo)(y))})).finally((()=>V(!1))):S.a.create(n).then((()=>{m(),P((0,v.xo)(y))})).finally((()=>V(!1)))},id:"form",layout:"vertical",children:(0,q.jsxs)(f.Z,{gutter:24,children:[(0,q.jsxs)(b.Z,{span:12,children:[(0,q.jsx)(g.Z.Item,{name:"created_by",rules:[{required:!0,message:x("required")}],label:x("seller"),children:(0,q.jsx)(z.R,{className:"w-100",placeholder:x("select.seller"),fetchOptions:e=>k.Z.getAll({role:"seller",search:e}).then((e=>{let{data:l}=e;return l.map((e=>({value:e.id,label:`${e.firstname} ${e.lastname||""}`,key:e.id})))}))})}),(0,q.jsx)(g.Z.Item,{name:"payment_id",rules:[{required:!0,message:x("required")}],label:x("payment"),children:(0,q.jsx)(_.q,{className:"w-100",placeholder:x("select.payment.type"),fetchOptions:()=>$.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active&&"wallet"===e.tag)).map((e=>({value:e.id,label:e.tag,key:e.id})))}))})})]}),(0,q.jsxs)(b.Z,{span:12,children:[(0,q.jsx)(g.Z.Item,{name:"currency_id",rules:[{required:!0,message:x("required")}],label:x("currency"),children:(0,q.jsx)(_.q,{className:"w-100",placeholder:x("select.currency"),fetchOptions:()=>I.Z.getAll().then((e=>{let{data:l}=e;return l.filter((e=>e.active)).map((e=>({value:e.id,label:`${e.title} (${e.symbol||""})`,key:e.id})))}))})}),(0,q.jsx)(g.Z.Item,{name:"price",rules:[{required:!0,message:x("required")}],label:x("price"),children:(0,q.jsx)(w.Z,{className:"w-100",placeholder:x("amount"),min:0})})]}),(0,q.jsxs)(b.Z,{span:24,children:[(0,q.jsx)(g.Z.Item,{name:"cause",rules:[{validator:(e,l)=>l?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(x("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(x("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(x("required")))}],label:x("cause"),children:(0,q.jsx)(C.Z.TextArea,{showCount:!0,maxLength:100,placeholder:x("cause")})}),(0,q.jsx)(g.Z.Item,{name:"answer",label:x("answer"),rules:[{validator:(e,l)=>l?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(x("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(x("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,q.jsx)(C.Z.TextArea,{showCount:!0,maxLength:100,placeholder:x("answer")})})]})]})})})}var P=t(255),H=t(16871),M=t(76689),T=t(66818);function N(e){let{data:l,handleCancel:t,statuses:n}=e;const{t:i}=(0,p.$)(),{activeMenu:s}=(0,u.v9)((e=>e.menu),u.wU),[d,o]=(0,a.useState)(!1),c=(0,u.I0)();return(0,q.jsx)(Z.Z,{visible:!!l,title:i("change.status"),onCancel:t,footer:[(0,q.jsx)(r.Z,{onClick:t,children:i("cancel")}),(0,q.jsx)(r.Z,{loading:d,type:"primary",form:"status",htmlType:"submit",children:i("change")},"pay-btn")],children:(0,q.jsx)(g.Z,{initialValues:{status:null===l||void 0===l?void 0:l.status},onFinish:e=>{o(!0),S.a.changeStatus(null===l||void 0===l?void 0:l.id,e).then((()=>{t(),c((0,v.xo)(s))})).finally((()=>o(!1)))},id:"status",layout:"vertical",children:(0,q.jsx)(g.Z.Item,{label:i("status"),name:"status",children:(0,q.jsx)(T.Z,{options:n.slice(1).map((e=>({label:i(e),value:e})))})})})})}var O=t(72426),E=t.n(O);const{TabPane:B}=n.Z,F=["all","accepted","pending","canceled"];function A(){var e;const{t:l}=(0,p.$)(),t=(0,u.I0)(),Z=(0,H.s0)(),{activeMenu:g}=(0,u.v9)((e=>e.menu),u.wU),[f,b]=(0,a.useState)("all"),w=(null===(e=g.data)||void 0===e?void 0:e.role)||f,C=g.data,_={sort:null===C||void 0===C?void 0:C.sort,column:null===C||void 0===C?void 0:C.column,perPage:null===C||void 0===C?void 0:C.perPage,page:null===C||void 0===C?void 0:C.page,status:"all"===f?void 0:w},{payoutRequests:k,meta:I,loading:$,params:S}=(0,u.v9)((e=>e.adminPayouts),u.wU),[z,T]=(0,a.useState)(null),[O,A]=(0,a.useState)(null),[R,U]=(0,a.useState)([{title:l("user"),dataIndex:"createdBy",key:"createdBy",is_show:!0,render:e=>(0,q.jsx)("div",{className:"text-hover",onClick:()=>(e=>{t((0,v.bL)({url:`/users/user/${e.uuid}`,id:"user_info",name:l("user.info")})),Z(`/users/user/${e.uuid}`,{state:{user_id:e.id}})})(e),children:(null===e||void 0===e?void 0:e.firstname)+" "+(null===e||void 0===e?void 0:e.lastname)})},{title:l("price"),dataIndex:"price",key:"price",is_show:!0,render:(e,l)=>{var t,a;return(0,x.Z)(e,null===l||void 0===l||null===(t=l.currency)||void 0===t?void 0:t.symbol,null===l||void 0===l||null===(a=l.currency)||void 0===a?void 0:a.position)}},{title:l("status"),dataIndex:"status",key:"status",is_show:!0,render:e=>(0,q.jsx)("div",{children:"pending"===e?(0,q.jsx)(i.Z,{color:"blue",children:l(e)}):"canceled"===e?(0,q.jsx)(i.Z,{color:"error",children:l(e)}):(0,q.jsx)(i.Z,{color:"cyan",children:l(e)})})},{title:l("cause"),dataIndex:"cause",key:"cause",is_show:!0},{title:l("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,l)=>E()(null===l||void 0===l?void 0:l.created_at).format("YYYY-MM-DD HH:mm")},{title:l("answer"),dataIndex:"answer",key:"answer",is_show:!0},{title:l("options"),dataIndex:"uuid",key:"uuid",is_show:!0,render:(e,t)=>(0,q.jsxs)(s.Z,{children:[(0,q.jsx)(r.Z,{type:"primary",icon:(0,q.jsx)(y.Z,{}),onClick:()=>T(t)}),"accepted"!==t.status&&(0,q.jsx)(d.Z,{title:l("change.status"),children:(0,q.jsx)(r.Z,{onClick:()=>A(t),icon:(0,q.jsx)(j.Z,{})})})]})}]);(0,a.useEffect)((()=>{g.refetch&&(t((0,M.T)(_)),t((0,v.A_)(g)))}),[g.refetch]),(0,h.Z)((()=>{t((0,M.T)(_))}),[g.data]);return(0,q.jsxs)(o.Z,{title:l("payout.requests"),extra:(0,q.jsxs)(s.Z,{children:[(0,q.jsx)(r.Z,{onClick:()=>T(!0),type:"primary",children:l("create.payout")}),(0,q.jsx)(P.Z,{columns:R,setColumns:U})]}),children:[(0,q.jsx)(n.Z,{className:"mt-3",activeKey:w,onChange:e=>{(e=>{const l=g.data;t((0,v.nc)({activeMenu:g,data:{...l,...e}}))})({role:e,page:1}),b(e)},type:"card",children:F.map((e=>(0,q.jsx)(B,{tab:l(e)},e)))}),(0,q.jsx)(c.Z,{scroll:{x:!0},columns:null===R||void 0===R?void 0:R.filter((e=>e.is_show)),dataSource:k,pagination:{pageSize:S.perPage,page:S.page,total:I.total,defaultCurrent:S.page},rowKey:e=>e.id,onChange:function(e,l,a){const{pageSize:n,current:i}=e,{field:s,order:r}=a,d=(0,m.Z)(r);t((0,v.nc)({activeMenu:g,data:{perPage:n,page:i,column:s,sort:d}}))},loading:$}),z&&(0,q.jsx)(V,{data:z,handleCancel:()=>T(null)}),O&&(0,q.jsx)(N,{data:O,statuses:F,handleCancel:()=>A(null)})]})}},99197:(e,l,t)=>{t.d(l,{Z:()=>d});var a=t(1413),n=t(72791);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var s=t(54291),r=function(e,l){return n.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:l,icon:i}))};r.displayName="TableOutlined";const d=n.forwardRef(r)}}]);
//# sourceMappingURL=1924.0219bc79.chunk.js.map