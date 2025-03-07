"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8091],{79586:(e,t,n)=>{n.d(t,{Z:()=>c});n(72791);var a=n(87309),s=n(82622),l=n(30577),i=n(33168),d=n(19011),o=n(80184);function c(e){let{size:t="",onClick:n,type:c="default",...r}=e;const{t:u}=(0,i.$)(),{isDemo:m}=(0,d.Z)();return(0,o.jsx)(a.Z,{size:t,icon:(0,o.jsx)(s.Z,{}),onClick:e=>{m?l.Am.warning(u("cannot.work.demo")):n(e)},type:c,...r})}},255:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(72791),s=n(87407),l=n(56014),i=n(83099),d=n(25581),o=n(32385),c=n(43751),r=n(87309),u=n(99197),m=n(33168),h=n(80184);const{Text:p}=s.Z,y=e=>{let{columns:t=[],setColumns:n,style:s,size:y="",iconOnly:v}=e;const{t:x}=(0,m.$)(),[Z,j]=(0,a.useState)(!1),f=(0,h.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(l.Z.Item,{children:(0,h.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:e.title}),(0,h.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(o.Z,{overlay:f,trigger:["click"],onVisibleChange:e=>{j(e)},visible:Z,children:(0,h.jsx)(c.Z,{title:x("change.columns"),children:(0,h.jsx)(r.Z,{style:{...s},size:y,icon:(0,h.jsx)(u.Z,{}),children:v?null:x("Columns")})})})}},58091:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(72791),s=n(83099),l=n(87309),i=n(54080),d=n(95332),o=n(33168),c=n(31752),r=n(82622),u=n(31549),m=n(48030),h=n(79337),p=n(73182),y=n(30577),v=n(52666),x=n(16871),Z=n(79586),j=n(255),f=n(7487),g=n(41513),w=n(80184);function C(){const{t:e}=(0,o.$)(),{setIsModalVisible:t}=(0,a.useContext)(v._),[n,C]=(0,a.useState)(null),[b,k]=(0,a.useState)(!1),z=(0,h.I0)(),{activeMenu:_}=(0,h.v9)((e=>e.menu),h.wU),V=(0,x.s0)(),[H,S]=(0,a.useState)(null),{payloads:I,loading:M}=(0,h.v9)((e=>e.paymentPayload),h.wU),[$,A]=(0,a.useState)([{title:e("payment.id"),is_show:!0,dataIndex:"payment_id",key:"payment_id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===(n=t.payment)||void 0===n?void 0:n.tag})}},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(e,n)=>(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(l.Z,{type:"primary",icon:(0,w.jsx)(c.Z,{}),onClick:()=>N(n)}),(0,w.jsx)(Z.Z,{icon:(0,w.jsx)(r.Z,{}),onClick:()=>{C([n.payment_id]),t(!0),S(!0)}})]})}]),N=t=>{z((0,m.bL)({url:`payment-payloads/edit/${t.payment_id}`,id:"edit.payment.payloads",name:e("edit.payment.payloads")})),V(`/payment-payloads/edit/${t.payment_id}`)};(0,a.useEffect)((()=>{_.refetch&&(z((0,f.j)()),z((0,m.A_)(_)))}),[_.refetch]);const O={id:n,onChange:e=>{C(e)}};return(0,w.jsxs)(i.Z,{title:e("payment"),extra:(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(l.Z,{icon:(0,w.jsx)(u.Z,{}),type:"primary",onClick:()=>{z((0,m.bL)({id:"add.payment.payloads",url:"payment-payloads/add",name:e("add.payment.payloads")})),V("/payment-payloads/add")},children:e("add.payment.payloads")}),(0,w.jsx)(Z.Z,{className:"",onClick:()=>{null===n||0===n.length?y.Am.warning(e("select.the.product")):(t(!0),S(!1))},children:e("delete.selected")}),(0,w.jsx)(j.Z,{columns:$,setColumns:A})]}),children:[(0,w.jsx)(d.Z,{scroll:{x:!0},rowSelection:O,columns:null===$||void 0===$?void 0:$.filter((e=>e.is_show)),dataSource:I,rowKey:e=>e.payment_id,onChange:e=>{const{pageSize:t,current:n}=e;z((0,f.j)({perPage:t,page:n}))},loading:M}),(0,w.jsx)(p.Z,{click:()=>{k(!0);const a={...Object.assign({},...n.map(((e,t)=>({[`ids[${t}]`]:e}))))};g.x.delete(a).then((()=>{y.Am.success(e("successfully.deleted")),z((0,f.j)()),t(!1),S(null)})).finally((()=>{C(null),k(!1)}))},text:e(H?"delete":"all.delete"),loading:b,setText:C})]})}},31549:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1413),s=n(72791);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=n(54291),d=function(e,t){return s.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};d.displayName="PlusCircleOutlined";const o=s.forwardRef(d)},99197:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1413),s=n(72791);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=n(54291),d=function(e,t){return s.createElement(i.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:l}))};d.displayName="TableOutlined";const o=s.forwardRef(d)}}]);
//# sourceMappingURL=8091.cc296db8.chunk.js.map