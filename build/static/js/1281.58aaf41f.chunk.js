"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1281],{79586:(e,t,s)=>{s.d(t,{Z:()=>r});s(72791);var n=s(87309),i=s(82622),l=s(30577),a=s(33168),d=s(19011),o=s(80184);function r(e){let{size:t="",onClick:s,type:r="default",...c}=e;const{t:u}=(0,a.$)(),{isDemo:h}=(0,d.Z)();return(0,o.jsx)(n.Z,{size:t,icon:(0,o.jsx)(i.Z,{}),onClick:e=>{h?l.Am.warning(u("cannot.work.demo")):s(e)},type:r,...c})}},255:(e,t,s)=>{s.d(t,{Z:()=>x});var n=s(72791),i=s(87407),l=s(56014),a=s(83099),d=s(25581),o=s(32385),r=s(43751),c=s(87309),u=s(99197),h=s(33168),v=s(80184);const{Text:p}=i.Z,x=e=>{let{columns:t=[],setColumns:s,style:i,size:x="",iconOnly:m}=e;const{t:Z}=(0,h.$)(),[j,g]=(0,n.useState)(!1),f=(0,v.jsx)(l.Z,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,v.jsx)(l.Z.Item,{children:(0,v.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));s(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(o.Z,{overlay:f,trigger:["click"],onVisibleChange:e=>{g(e)},visible:j,children:(0,v.jsx)(r.Z,{title:Z("change.columns"),children:(0,v.jsx)(c.Z,{style:{...i},size:x,icon:(0,v.jsx)(u.Z,{}),children:m?null:Z("Columns")})})})}},28640:(e,t,s)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}s.d(t,{Z:()=>n})},71281:(e,t,s)=>{s.r(t),s.d(t,{default:()=>R});var n=s(72791),i=s(47528),l=s(87309),a=s(83099),d=s(54080),o=s(95332),r=s(31752),c=s(82622),u=s(79337),h=s(38245),v=s(52666),p=s(33168),x=s(30577),m=s(255),Z=s(48030),j=s(17076),g=s(79586),f=s(16871),_=s(73182),w=s(77483),y=s(65873),b=s(66106),C=s(30914),k=s(66818),z=s(62218),I=s(80184);const S=["new","approved","canceled"];function V(e){let{data:t,handleCancel:s,paramsData:i}=e;const{activeMenu:a}=(0,u.v9)((e=>e.menu),u.wU),[d]=w.Z.useForm(),o=(0,u.I0)(),{t:r}=(0,p.$)(),[c,v]=(0,n.useState)(null),[m,j]=(0,n.useState)(!1),[g,f]=(0,n.useState)(!1);(0,n.useEffect)((()=>{f(!0),z.Z.getById(null===t||void 0===t?void 0:t.id).then((e=>{let t=e.data;const s={ads_package_id:null===t||void 0===t?void 0:t.ads_package_id,banner_id:null===t||void 0===t?void 0:t.banner_id,active:null===t||void 0===t?void 0:t.active,position_page:null===t||void 0===t?void 0:t.position_page};v(s)})).catch((e=>x.Am.error(e.message))).finally((()=>f(!1)))}),[null===t||void 0===t?void 0:t.id]);return(0,I.jsx)(y.Z,{visible:!!t,title:t.title,onCancel:s,footer:[(0,I.jsx)(l.Z,{type:"primary",onClick:()=>d.submit(),loading:m,children:r("save")}),(0,I.jsx)(l.Z,{type:"default",onClick:s,children:r("cancel")})],children:(0,I.jsx)(w.Z,{form:d,layout:"vertical",onFinish:e=>{j(!0);const n={...e};console.log("shopAdData => ",c),!g&&z.Z.update(t.id,{...c,status:null===n||void 0===n?void 0:n.status}).then((()=>{s(),o((0,h.R)(i)),o((0,Z.A_)(a))})).finally((()=>j(!1)))},initialValues:{status:t.status},children:(0,I.jsx)(b.Z,{gutter:12,children:(0,I.jsx)(C.Z,{span:24,children:(0,I.jsx)(w.Z.Item,{label:r("status"),name:"status",rules:[{required:!0,message:r("required")}],children:(0,I.jsx)(k.Z,{children:S.map((e=>(0,I.jsx)(k.Z.Option,{children:r(e)},e)))})})})})})})}var A=s(28640),H=s(72426),M=s.n(H);function R(){const{t:e}=(0,p.$)(),t=(0,u.I0)(),s=(0,f.s0)(),{activeMenu:w}=(0,u.v9)((e=>e.menu),u.wU),{shopAdsList:y,loading:b,meta:C}=(0,u.v9)((e=>e.shopAds),u.wU),{setIsModalVisible:k}=(0,n.useContext)(v._),[S,H]=(0,n.useState)(null),[R,$]=(0,n.useState)(null),[D,F]=(0,n.useState)(null),[O,Y]=(0,n.useState)(!1),[E,L]=(0,n.useState)(null),N=w.data,P={search:null===N||void 0===N?void 0:N.serach,perPage:null===N||void 0===N?void 0:N.perPage,page:null===N||void 0===N?void 0:N.page,sort:null===N||void 0===N?void 0:N.sort};(0,n.useEffect)((()=>{w.refetch&&(t((0,h.R)(P)),t((0,Z.A_)(w)))}),[w.refetch]),(0,j.Z)((()=>{t((0,h.R)(P))}),[w.data]);const T=()=>{t((0,Z.bL)({id:"transactions",url:"transactions",name:e("transactions")})),s("/transactions")},U={selectedRowKeys:S,onChange:e=>{H(e)}},[q,B]=(0,n.useState)([{title:e("id"),dataIndex:"id",is_show:!0,sorter:(e,t)=>e.id-t.id},{title:e("shop"),dataIndex:"title",is_show:!0,render:(e,t)=>{var s,n;return(0,I.jsx)("span",{children:null===t||void 0===t||null===(s=t.shop)||void 0===s||null===(n=s.translation)||void 0===n?void 0:n.title})}},{title:e("expire.at"),dataIndex:"expire_at",is_show:!0,render:(t,s)=>(0,I.jsx)(I.Fragment,{children:null!==s&&void 0!==s&&s.expired_at?M()(null===s||void 0===s?void 0:s.expired_at).format("YYYY-MM-DD HH:mm"):(0,I.jsx)("span",{children:e("not.expired")})})},{title:e("status"),is_show:!0,dataIndex:"status",key:"status",render:(t,s)=>(0,I.jsxs)("div",{children:["new"===t?(0,I.jsx)(i.Z,{color:"blue",children:e(t)}):"canceled"===t?(0,I.jsx)(i.Z,{color:"error",children:e(t)}):(0,I.jsx)(i.Z,{color:"cyan",children:e(t)}),s.deleted_at?"":(0,I.jsx)(r.Z,{onClick:()=>L(s)})]})},{title:e("transaction"),dataIndex:"transaction",is_show:!0,render:(t,s)=>{var n;return(0,I.jsx)(I.Fragment,{children:t?(0,I.jsx)(l.Z,{onClick:T,color:"cyan",children:null===s||void 0===s||null===(n=s.transaction)||void 0===n?void 0:n.status}):(0,I.jsx)(l.Z,{color:"error",children:e("not.paid")})})}},{title:e("options"),dataIndex:"options",is_show:!0,render:(n,i)=>(0,I.jsxs)(a.Z,{children:[(0,I.jsx)(l.Z,{type:"primary",icon:(0,I.jsx)(r.Z,{}),onClick:()=>(n=>{t((0,Z.bL)({id:"shop-ads",url:`shop-ads/${n.id}`,name:e("edit.shop.ads")})),s(`/shop-ads/${n.id}`)})(i),disabled:i.deleted_at}),(0,I.jsx)(g.Z,{icon:(0,I.jsx)(c.Z,{}),onClick:()=>{k(!0),H([i.id]),$(!0),F(!1)},disabled:i.deleted_at})]})}]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(d.Z,{className:"p-0",children:(0,I.jsxs)(a.Z,{wrap:!0,size:[14,20],children:[(0,I.jsx)(g.Z,{size:"",onClick:()=>{null===S||0===S.length?x.Am.warning(e("select.the.product")):(k(!0),$(!1))},children:e("delete.selected")}),(0,I.jsx)(m.Z,{columns:q,setColumns:B})]})}),(0,I.jsx)(d.Z,{children:(0,I.jsx)(o.Z,{scroll:{x:!0},dataSource:y,columns:null===q||void 0===q?void 0:q.filter((e=>null===e||void 0===e?void 0:e.is_show)),rowSelection:U,rowKey:e=>e.id,loading:O||b,pagination:{pageSize:C.per_page,page:C.current_page,total:C.total},onChange:(e,s,n)=>{const{pageSize:i,current:l}=e,{field:a,order:d}=n,o=(0,A.Z)(d);t((0,Z.nc)({activeMenu:w,data:{...w.data,perPage:i,page:l,column:a,sort:o}}))}})}),E&&(0,I.jsx)(V,{data:E,handleCancel:()=>L(null),paramsData:P}),(0,I.jsx)(_.Z,{click:D?()=>{Y(!0),z.Z.setActive(S).then((()=>{k(!1),t((0,h.R)(P)),x.Am.success(e("successfully.updated")),F(!1)})).finally((()=>Y(!1)))}:()=>{Y(!0);const s={...Object.assign({},...S.map(((e,t)=>({[`ids[${t}]`]:e}))))};z.Z.delete(s).then((()=>{k(!1),x.Am.success(e("successfully.deleted")),t((0,h.R)(P)),$(null),F(!1)})).finally((()=>{Y(!1),H(null)}))},text:e(D?"set.active.advert":R?"delete":"all.delete"),setText:H,setActive:F})]})}},99197:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(1413),i=s(72791);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=s(54291),d=function(e,t){return i.createElement(a.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:l}))};d.displayName="TableOutlined";const o=i.forwardRef(d)}}]);
//# sourceMappingURL=1281.58aaf41f.chunk.js.map