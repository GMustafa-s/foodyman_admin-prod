"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7613],{255:(e,t,l)=>{l.d(t,{Z:()=>x});var a=l(72791),n=l(87407),i=l(56014),s=l(83099),d=l(25581),o=l(32385),r=l(43751),c=l(87309),u=l(99197),v=l(33168),h=l(80184);const{Text:m}=n.Z,x=e=>{let{columns:t=[],setColumns:l,style:n,size:x="",iconOnly:p}=e;const{t:Z}=(0,v.$)(),[f,g]=(0,a.useState)(!1),y=(0,h.jsx)(i.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,h.jsx)(i.Z.Item,{children:(0,h.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,h.jsx)(m,{children:e.title}),(0,h.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));l(a)}(e),disabled:1===a})]})},e+a)))});return(0,h.jsx)(o.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{g(e)},visible:f,children:(0,h.jsx)(r.Z,{title:Z("change.columns"),children:(0,h.jsx)(c.Z,{style:{...n},size:x,icon:(0,h.jsx)(u.Z,{}),children:p?null:Z("Columns")})})})}},47846:(e,t,l)=>{l.d(t,{Z:()=>r});l(72791);var a=l(33168),n=l(1760);const i=l.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",s=l.p+"static/media/noresult.ac4af107751f94856a9c.riv",d=l.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var o=l(80184);const r=function(e){let{id:t="noresult",text:l=""}=e;const{t:r}=(0,a.$)(),c={src:{noproductsfound:i,noresult:s,nosell:d}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,n.useRive)(c);return(0,o.jsxs)("div",{className:"animation-canvas",children:[(0,o.jsx)("div",{style:{width:"100%",height:200},children:(0,o.jsx)(u,{})}),(0,o.jsx)("div",{className:"text text-center",children:r(l)})]})}},37720:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(72791),n=l(86005),i=l(763),s=l(11730),d=l(80184);function o(e){let{handleChange:t,defaultValue:l,resetSearch:o,...r}=e;const[c,u]=(0,a.useState)(l),v=(0,a.useMemo)((()=>(0,i.debounce)((e=>{t(e)}),800)),[t]);return(0,a.useEffect)((()=>{u(l)}),[o,l]),(0,d.jsx)(n.Z,{value:c,onChange:e=>{u(e.target.value),v(e.target.value)},prefix:(0,d.jsx)(s.Z,{}),...r})}},6200:(e,t,l)=>{l.d(t,{h:()=>r});var a=l(72791),n=l(48573),i=l.n(n),s=l(66818),d=l(37083),o=l(80184);const r=e=>{let{fetchOptions:t,debounceTimeout:l=400,onClear:n,...r}=e;const[c,u]=(0,a.useState)(!1),[v,h]=(0,a.useState)([]),m=(0,a.useMemo)((()=>i()((e=>{h([]),u(!0),t(e).then((e=>{h(e),u(!1)}))}),l)),[t,l]);return(0,o.jsx)(s.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),n&&n()},notFoundContent:c?(0,o.jsx)(d.Z,{size:"small"}):"no results",...r,options:v,onFocus:()=>{m("")}})}},28640:(e,t,l)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}l.d(t,{Z:()=>a})},39366:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(80470);function n(){var e,t;let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const s=null===(e=a.h.getState())||void 0===e||null===(t=e.currency)||void 0===t?void 0:t.defaultCurrency,d=Number(l).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),o=n||(null===s||void 0===s?void 0:s.symbol)||"$",r=i||(null===s||void 0===s?void 0:s.position)||"before";return"after"===r?`${d} ${o}`:`${o} ${d}`}},12254:(e,t,l)=>{l.r(t),l.d(t,{default:()=>$});var a=l(72791),n=l(47528),i=l(83099),s=l(87309),d=l(43751),o=l(54080),r=l(95332),c=l(16871),u=l(24215),v=l(79286),h=l(12056),m=l(79337),x=l(48030),p=l(52666),Z=l(30577),f=l(33168),g=l(2565),y=l(17076),j=l(28640),b=l(37720),w=l(39366),_=l(255),C=l(73182),k=l(80259),V=l(94281),H=l(47846),S=l(6200),z=l(46485);const I={getAllRestTables:e=>z.Z.get("rest/booking/tables",{params:e})};var M=l(80184);function $(){var e,t,l,z,$,A;const N=(0,m.I0)(),U=(0,c.s0)(),{t:O}=(0,f.$)(),[T,R]=(0,a.useState)(null),[F,P]=(0,a.useState)(null),{setIsModalVisible:D}=(0,a.useContext)(p._),[E,q]=(0,a.useState)(!1),[B,K]=(0,a.useState)(!1),{defaultCurrency:L}=(0,m.v9)((e=>e.currency),m.wU),[W,G]=(0,a.useState)(null),[J,Q]=(0,a.useState)([{title:O("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:O("table"),dataIndex:"table",key:"table",is_show:!0,render:e=>(0,M.jsx)("div",{children:null===e||void 0===e?void 0:e.name})},{title:O("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,M.jsx)("div",{children:"new"===e?(0,M.jsx)(n.Z,{color:"blue",children:O(e)}):"canceled"===e?(0,M.jsx)(n.Z,{color:"error",children:O(e)}):(0,M.jsx)(n.Z,{color:"cyan",children:O(e)})})},{title:O("products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:e=>(0,M.jsxs)("div",{className:"text-lowercase",children:[e||0," ",O("products")]})},{title:O("amount"),dataIndex:"total_price",key:"total_price",is_show:!0,render:e=>(0,w.Z)(e,null===L||void 0===L?void 0:L.symbol)},{title:O("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:e=>{var t;return O(null===e||void 0===e||null===(t=e.payment_system)||void 0===t?void 0:t.tag)||"-"}},{title:O("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:O("options"),key:"options",is_show:!0,render:(e,t)=>(0,M.jsxs)(i.Z,{children:[(0,M.jsx)(s.Z,{icon:(0,M.jsx)(u.Z,{}),onClick:()=>(e=>{N((0,x.bL)({url:`waiter/order/details/${e.id}`,id:"order_details",name:O("order.details")})),U(`/waiter/order/details/${e.id}`)})(t)}),(0,M.jsx)(d.Z,{title:O("assign.to.me"),children:(0,M.jsx)(s.Z,{onClick:()=>(e=>{q(!0),k.Z.attachToMe(e).then((()=>{N((0,g.AU)(ne))})).finally((()=>{q(!1)}))})(t.id),type:"primary",icon:(0,M.jsx)(v.Z,{})})})]})}]),{activeMenu:X}=(0,m.v9)((e=>e.menu),m.wU),{orders:Y,meta:ee,loading:te,params:le}=(0,m.v9)((e=>e.waiterOrder),m.wU),ae=null===X||void 0===X?void 0:X.data,ne={search:null===ae||void 0===ae?void 0:ae.search,sort:null===ae||void 0===ae?void 0:ae.sort,column:null===ae||void 0===ae?void 0:ae.column,perPage:null===ae||void 0===ae?void 0:ae.perPage,page:null===ae||void 0===ae?void 0:ae.page,user_id:null===ae||void 0===ae?void 0:ae.user_id,table_id:null===ae||void 0===ae?void 0:ae.table_id,shop_id:null!==(null===(e=X.data)||void 0===e?void 0:e.shop_id)?null===(t=X.data)||void 0===t?void 0:t.shop_id:null,delivery_type:"dine_in","empty-waiter":1,status:"new"};(0,y.Z)((()=>{N((0,g.AU)(ne))}),[null===X||void 0===X?void 0:X.data]),(0,a.useEffect)((()=>{null!==X&&void 0!==X&&X.refetch&&(N((0,g.AU)(ne)),N((0,x.A_)(X)))}),[null===X||void 0===X?void 0:X.refetch]);const ie=(e,t)=>{N((0,x.nc)({activeMenu:X,data:{...ae,[t]:e}}))},se={selectedRowKeys:T,onChange:e=>{R(e)}};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o.Z,{children:(0,M.jsxs)(i.Z,{wrap:!0,className:"p-0 mb-0",children:[(0,M.jsx)(b.Z,{placeholder:O("search"),handleChange:e=>ie(e,"search"),defaultValue:null===(l=X.data)||void 0===l?void 0:l.search}),(0,M.jsx)(S.h,{placeholder:O("select.table"),fetchOptions:async function(e){const t={search:e,perPage:10};return I.getAllRestTables(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.name,value:e.id})))}))},onSelect:e=>ie(e.value,"table_id"),onDeselect:()=>ie(null,"table_id"),style:{minWidth:200}}),(0,M.jsx)(s.Z,{icon:(0,M.jsx)(h.Z,{}),onClick:()=>{(0,m.dC)((()=>{N((0,g.H5)()),N((0,x.nc)({activeMenu:X,data:null}))})),N((0,g.AU)({status:"all",page:null===ae||void 0===ae?void 0:ae.page,perPage:10}))},children:O("clear")}),(0,M.jsx)(_.Z,{columns:J,setColumns:Q})]})}),(0,M.jsxs)(o.Z,{children:[(0,M.jsx)(r.Z,{locale:{emptyText:(0,M.jsx)(H.Z,{})},scroll:{x:!0},rowSelection:se,columns:null===J||void 0===J?void 0:J.filter((e=>e.is_show)),dataSource:Y,loading:te||E,pagination:{pageSize:le.perPage,page:(null===(z=X.data)||void 0===z?void 0:z.page)||1,total:null===ee||void 0===ee?void 0:ee.total,defaultCurrent:null===($=X.data)||void 0===$?void 0:$.page,current:null===(A=X.data)||void 0===A?void 0:A.page},rowKey:e=>e.id,onChange:function(e,t,l){const{pageSize:a,current:n}=e,{field:i,order:s}=l,d=(0,j.Z)(s);N((0,x.nc)({activeMenu:X,data:{...ae,perPage:a,page:n,column:i,sort:d}}))}}),(0,M.jsx)(C.Z,{click:()=>{K(!0);const e={...Object.assign({},...T.map(((e,t)=>({[`ids[${t}]`]:e}))))};k.Z.delete(e).then((()=>{Z.Am.success(O("successfully.deleted")),D(!1),N((0,g.AU)(ne)),P(null)})).finally((()=>K(!1)))},text:O(F?"delete":"all.delete"),loading:B,setText:R})]}),W&&(0,M.jsx)(V.Z,{orderDetails:W,handleCancel:()=>{G(null)}})]})}},94281:(e,t,l)=>{l.d(t,{Z:()=>x});var a=l(72791),n=l(77483),i=l(65873),s=l(87309),d=l(66106),o=l(30914),r=l(66818),c=l(79337),u=l(80259),v=l(48030),h=l(33168),m=l(80184);function x(e){var t;let{orderDetails:l,handleCancel:x}=e;const{t:p}=(0,h.$)(),{activeMenu:Z}=(0,c.v9)((e=>e.menu),c.wU),{deliverymans:f}=(0,c.v9)((e=>e.deliveryman),c.wU),[g]=n.Z.useForm(),y=(0,c.I0)(),[j,b]=(0,a.useState)(!1);return(0,m.jsx)(i.Z,{visible:!!l,title:l.title,onCancel:x,footer:[(0,m.jsx)(s.Z,{type:"primary",onClick:()=>g.submit(),loading:j,children:p("save")}),(0,m.jsx)(s.Z,{type:"default",onClick:x,children:p("cancel")})],children:(0,m.jsx)(n.Z,{form:g,layout:"vertical",onFinish:e=>{const t={...e};b(!0),u.Z.updateDelivery(l.id,t).then((()=>{x(),y((0,v.xo)(Z))})).finally((()=>b(!1)))},initialValues:{deliveryman:null===(t=l.deliveryman)||void 0===t?void 0:t.id},children:(0,m.jsx)(d.Z,{gutter:12,children:(0,m.jsx)(o.Z,{span:24,children:(0,m.jsx)(n.Z.Item,{label:p("deliveryman"),name:"deliveryman",rules:[{required:!0,message:p("required")}],children:(0,m.jsx)(r.Z,{children:f.map(((e,t)=>(0,m.jsxs)(r.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)))})})})})})})}},12056:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(1413),n=l(72791);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var s=l(54291),d=function(e,t){return n.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};d.displayName="ClearOutlined";const o=n.forwardRef(d)},99197:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(1413),n=l(72791);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var s=l(54291),d=function(e,t){return n.createElement(s.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};d.displayName="TableOutlined";const o=n.forwardRef(d)}}]);
//# sourceMappingURL=7613.8ad35c74.chunk.js.map