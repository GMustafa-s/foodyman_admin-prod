"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1730],{79586:(e,t,n)=>{n.d(t,{Z:()=>c});n(72791);var l=n(87309),i=n(82622),s=n(30577),o=n(33168),a=n(19011),d=n(80184);function c(e){let{size:t="",onClick:n,type:c="default",...r}=e;const{t:u}=(0,o.$)(),{isDemo:h}=(0,a.Z)();return(0,d.jsx)(l.Z,{size:t,icon:(0,d.jsx)(i.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):n(e)},type:c,...r})}},255:(e,t,n)=>{n.d(t,{Z:()=>g});var l=n(72791),i=n(87407),s=n(56014),o=n(83099),a=n(25581),d=n(32385),c=n(43751),r=n(87309),u=n(99197),h=n(33168),v=n(80184);const{Text:m}=i.Z,g=e=>{let{columns:t=[],setColumns:n,style:i,size:g="",iconOnly:x}=e;const{t:Z}=(0,h.$)(),[p,f]=(0,l.useState)(!1),b=(0,v.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(s.Z.Item,{children:(0,v.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(a.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(d.Z,{overlay:b,trigger:["click"],onVisibleChange:e=>{f(e)},visible:p,children:(0,v.jsx)(c.Z,{title:Z("change.columns"),children:(0,v.jsx)(r.Z,{style:{...i},size:g,icon:(0,v.jsx)(u.Z,{}),children:x?null:Z("Columns")})})})}},28640:(e,t,n)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>l})},30301:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var l=n(72791),i=n(31752),s=n(82622),o=n(31549),a=n(83099),d=n(36755),c=n(87309),r=n(54080),u=n(95332),h=n(30577),v=n(73182),m=n(52666),g=n(79337),x=n(16871),Z=n(48030),p=n(33168),f=n(79586),b=n(255),j=n(17076),k=n(28640),z=n(62235),w=n(32339),y=n(80184);const _=()=>{const{t:e}=(0,p.$)(),t=(0,g.I0)(),n=(0,x.s0)(),{setIsModalVisible:_}=(0,l.useContext)(m._),[C,V]=(0,l.useState)(null),[H,I]=(0,l.useState)(!1),[S,M]=(0,l.useState)(null),{activeMenu:N}=(0,g.v9)((e=>e.menu),g.wU),$=null===N||void 0===N?void 0:N.data,A={sort:null===$||void 0===$?void 0:$.sort,column:null===$||void 0===$?void 0:$.column,search:null!==$&&void 0!==$&&$.search?$.search:void 0,perPage:null===$||void 0===$?void 0:$.perPage,page:null===$||void 0===$?void 0:$.page,deleted_at:"deleted_at"===(null===$||void 0===$?void 0:$.role)?null===$||void 0===$?void 0:$.role:null},{zone:O,meta:P,loading:E}=(0,g.v9)((e=>e.bookingZone),g.wU),[R,T]=(0,l.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:e("title"),dataIndex:"title",key:"title",render:(e,t)=>{var n;return null===(n=t.translation)||void 0===n?void 0:n.title},is_show:!0},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:(e,t)=>(0,y.jsx)(a.Z,{children:(0,y.jsx)(d.Z,{src:t.img,alt:"img_gallery",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0},e+t.id)})},{title:e("area"),dataIndex:"area",key:"area",is_show:!0},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(l,o)=>(0,y.jsxs)(a.Z,{children:[(0,y.jsx)(c.Z,{type:"primary",icon:(0,y.jsx)(i.Z,{}),onClick:()=>(l=>{t((0,Z.bL)({url:`seller/booking/zone/${l.id}`,id:"box_edit",name:e("edit.box")})),n(`/seller/booking/zone/${l.id}`)})(o),disabled:o.deleted_at}),(0,y.jsx)(f.Z,{disabled:o.deleted_at,icon:(0,y.jsx)(s.Z,{}),onClick:()=>{V([o.id]),_(!0),M(!0)}})]})}]);(0,j.Z)((()=>{t((0,z.eW)(A))}),[N.data]),(0,l.useEffect)((()=>{N.refetch&&(t((0,z.eW)(A)),t((0,Z.A_)(N)))}),[N.refetch]);const W={selectedRowKeys:C,onChange:e=>{V(e)}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(r.Z,{className:"p-0",children:(0,y.jsxs)(a.Z,{wrap:!0,className:"justify-content-end w-100",children:[(0,y.jsx)(f.Z,{size:"",onClick:()=>{null===C||0===C.length?h.Am.warning(e("select.the.product")):(_(!0),M(!1))},children:e("delete.selected")}),(0,y.jsx)(c.Z,{type:"primary",icon:(0,y.jsx)(o.Z,{}),onClick:()=>{t((0,Z.bL)({id:"add-booking-zone",url:"seller/booking/zone/add",name:e("add.booking.zone")})),n("/seller/booking/zone/add")},children:e("add.booking.zone")}),(0,y.jsx)(b.Z,{columns:R,setColumns:T})]})}),(0,y.jsx)(r.Z,{title:e("booking.zone"),children:(0,y.jsx)(u.Z,{scroll:{x:!0},rowSelection:W,columns:null===R||void 0===R?void 0:R.filter((e=>e.is_show)),dataSource:O,pagination:{pageSize:P.per_page,page:P.current_page,total:P.total},rowKey:e=>e.id,onChange:function(e,n,l){const{pageSize:i,current:s}=e,{field:o,order:a}=l,d=(0,k.Z)(a);t((0,Z.nc)({activeMenu:N,data:{...$,perPage:i,page:s,column:o,sort:d}}))},loading:E})}),(0,y.jsx)(v.Z,{click:()=>{I(!0);const n={...Object.assign({},...C.map(((e,t)=>({[`ids[${t}]`]:e}))))};w.Z.delete(n).then((()=>{h.Am.success(e("successfully.deleted")),t((0,z.eW)(A)),_(!1),M(null)})).finally((()=>I(!1)))},text:e(S?"delete":"all.delete"),setText:V,loading:H})]})}},31549:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(1413),i=n(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var o=n(54291),a=function(e,t){return i.createElement(o.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};a.displayName="PlusCircleOutlined";const d=i.forwardRef(a)},99197:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(1413),i=n(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var o=n(54291),a=function(e,t){return i.createElement(o.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};a.displayName="TableOutlined";const d=i.forwardRef(a)}}]);
//# sourceMappingURL=1730.76a0c86e.chunk.js.map