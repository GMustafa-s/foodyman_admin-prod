"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5470],{255:(e,i,l)=>{l.d(i,{Z:()=>x});var t=l(72791),n=l(87407),s=l(56014),d=l(83099),a=l(25581),o=l(32385),r=l(43751),c=l(87309),u=l(99197),v=l(33168),h=l(80184);const{Text:m}=n.Z,x=e=>{let{columns:i=[],setColumns:l,style:n,size:x="",iconOnly:b}=e;const{t:g}=(0,v.$)(),[f,Z]=(0,t.useState)(!1),p=(0,h.jsx)(s.Z,{children:null===i||void 0===i?void 0:i.map(((e,t)=>(0,h.jsx)(s.Z.Item,{children:(0,h.jsxs)(d.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(a.Z,{defaultChecked:!0,onClick:()=>function(e){const t=null===i||void 0===i?void 0:i.map((i=>(i.dataIndex===e.dataIndex&&(i.is_show=!(null!==i&&void 0!==i&&i.is_show)),i)));l(t)}(e),disabled:1===t})]})},e+t)))});return(0,h.jsx)(o.Z,{overlay:p,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:f,children:(0,h.jsx)(r.Z,{title:g("change.columns"),children:(0,h.jsx)(c.Z,{style:{...n},size:x,icon:(0,h.jsx)(u.Z,{}),children:b?null:g("Columns")})})})}},71267:(e,i,l)=>{function t(e){var i,l;let t=null===e||void 0===e?void 0:e.slice(0,1),n=null===e||void 0===e?void 0:e.lastIndexOf("@"),s=null===e||void 0===e?void 0:e.slice(1,n-1);s=null===(i=s)||void 0===i?void 0:i.replace(/./g,"*");let d=null===e||void 0===e?void 0:e.slice(n-1,e.length);return null===t||void 0===t||null===(l=t.concat(s))||void 0===l?void 0:l.concat(d)}l.d(i,{Z:()=>t})},5470:(e,i,l)=>{l.r(i),l.d(i,{default:()=>b});var t=l(72791),n=l(47528),s=l(54080),d=l(83099),a=l(95332),o=l(79337),r=l(48030),c=l(33168),u=l(19335),v=l(255),h=l(71267),m=l(19011),x=l(80184);const b=()=>{var e,i,l;const{t:b}=(0,c.$)(),g=(0,o.I0)(),{isDemo:f}=(0,m.Z)(),[Z,p]=(0,t.useState)([{title:b("id"),dataIndex:"id",key:"id",is_show:!0},{title:b("title"),dataIndex:"title",key:"title",is_show:!0,render:(e,i)=>{var l,t;return(0,x.jsxs)("div",{children:[null===i||void 0===i||null===(l=i.user)||void 0===l?void 0:l.firstname," ",(null===i||void 0===i||null===(t=i.user)||void 0===t?void 0:t.lastname)||""]})}},{title:b("email"),dataIndex:"email",key:"email",is_show:!0,render:(e,i)=>{var l,t;return(0,x.jsx)("div",{children:f?(0,h.Z)(null===(l=i.user)||void 0===l?void 0:l.email):null===(t=i.user)||void 0===t?void 0:t.email})}},{title:b("status"),dataIndex:"active",key:"active",is_show:!0,render:e=>(0,x.jsx)(n.Z,{color:!0===e?"blue":"red",children:b(!0===e?"subscriber":"not.subscriber")})}]),{activeMenu:j}=(0,o.v9)((e=>e.menu),o.wU),{subscriber:w,meta:z,loading:k,params:y}=(0,o.v9)((e=>e.subscriber),o.wU);(0,t.useEffect)((()=>{j.refetch&&(g((0,u.x)()),g((0,r.A_)(j)))}),[j.refetch]);return(0,x.jsx)(s.Z,{title:b("subscriber"),extra:(0,x.jsx)(d.Z,{children:(0,x.jsx)(v.Z,{columns:Z,setColumns:p})}),children:(0,x.jsx)(a.Z,{scroll:{x:!0},columns:null===Z||void 0===Z?void 0:Z.filter((e=>e.is_show)),dataSource:w,pagination:{pageSize:y.perPage,page:(null===(e=j.data)||void 0===e?void 0:e.page)||1,total:z.total,defaultCurrent:null===(i=j.data)||void 0===i?void 0:i.page,current:null===(l=j.data)||void 0===l?void 0:l.page},rowKey:e=>e.id,loading:k,onChange:e=>{const{pageSize:i,current:l}=e;g((0,u.x)({perPage:i,page:l}))}})})}},99197:(e,i,l)=>{l.d(i,{Z:()=>o});var t=l(1413),n=l(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var d=l(54291),a=function(e,i){return n.createElement(d.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:i,icon:s}))};a.displayName="TableOutlined";const o=n.forwardRef(a)}}]);
//# sourceMappingURL=5470.a67915de.chunk.js.map