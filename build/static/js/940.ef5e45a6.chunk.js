"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[940],{79586:(e,t,n)=>{n.d(t,{Z:()=>d});n(72791);var i=n(87309),l=n(82622),s=n(30577),a=n(33168),c=n(19011),o=n(80184);function d(e){let{size:t="",onClick:n,type:d="default",...r}=e;const{t:u}=(0,a.$)(),{isDemo:h}=(0,c.Z)();return(0,o.jsx)(i.Z,{size:t,icon:(0,o.jsx)(l.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):n(e)},type:d,...r})}},255:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(72791),l=n(87407),s=n(56014),a=n(83099),c=n(25581),o=n(32385),d=n(43751),r=n(87309),u=n(99197),h=n(33168),f=n(80184);const{Text:x}=l.Z,m=e=>{let{columns:t=[],setColumns:n,style:l,size:m="",iconOnly:v}=e;const{t:Z}=(0,h.$)(),[p,j]=(0,i.useState)(!1),g=(0,f.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,f.jsx)(s.Z.Item,{children:(0,f.jsxs)(a.Z,{className:"d-flex justify-content-between",children:[(0,f.jsx)(x,{children:e.title}),(0,f.jsx)(c.Z,{defaultChecked:!0,onClick:()=>function(e){const i=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(i)}(e),disabled:1===i})]})},e+i)))});return(0,f.jsx)(o.Z,{overlay:g,trigger:["click"],onVisibleChange:e=>{j(e)},visible:p,children:(0,f.jsx)(d.Z,{title:Z("change.columns"),children:(0,f.jsx)(r.Z,{style:{...l},size:m,icon:(0,f.jsx)(u.Z,{}),children:v?null:Z("Columns")})})})}},1728:(e,t,n)=>{n.d(t,{Z:()=>o});n(72791);var i=n(65873),l=n(77063),s=n(87309),a=n(33168),c=n(80184);const o=e=>{let{open:t,handleCancel:n,text:o,click:d,loading:r,subTitle:u}=e;const{t:h}=(0,a.$)();return(0,c.jsxs)(i.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,c.jsx)(l.ZP,{status:"warning",title:o,subTitle:u}),(0,c.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,c.jsx)(s.Z,{type:"primary",className:"mr-2",onClick:d,loading:r,children:h("yes")}),(0,c.jsx)(s.Z,{onClick:()=>n(),children:h("no")})]})]})}},28640:(e,t,n)=>{function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>i})},50940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var i=n(72791),l=n(6314),s=n(31752),a=n(23414),c=n(82622),o=n(31549),d=n(87661),r=n(47528),u=n(83099),h=n(43751),f=n(87309),x=n(54080),m=n(95332),v=n(30577),Z=n(73182),p=n(52666),j=n(79337),g=n(16871),b=n(48030),y=n(29065),C=n(17076),k=n(28640),w=n(35261),_=n(33168),z=n(79586),H=n(255),V=n(1728),S=n(56355),A=n(72426),I=n.n(A),M=n(80184);const{TabPane:$}=d.Z,T=["published","deleted_at"];function N(){var e;const{t:t}=(0,_.$)(),n=(0,j.I0)(),A=(0,g.s0)(),[N,P]=(0,i.useState)([{title:t("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:t("title"),dataIndex:"translation",key:"translation",is_show:!0,render:e=>null===e||void 0===e?void 0:e.title},{title:t("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:(e,t)=>I()(null===t||void 0===t?void 0:t.created_at).format("YYYY-MM-DD HH:mm")},{title:t("published.at"),dataIndex:"published_at",key:"published_at",is_show:!0,render:e=>(0,M.jsx)(M.Fragment,{children:e?(0,M.jsx)(r.Z,{color:"red",children:e}):(0,M.jsx)(r.Z,{color:"blue",children:t("not.published")})})},{title:t("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,i)=>(0,M.jsxs)(u.Z,{children:[i.published_at?"":(0,M.jsxs)(u.Z,{children:[(0,M.jsx)(h.Z,{title:t("publish"),children:(0,M.jsx)(f.Z,{disabled:!i.active,icon:(0,M.jsx)(l.Z,{}),onClick:()=>{D(i.uuid),K(!1),R(!0),O(!0)}})}),(0,M.jsx)(f.Z,{type:"primary",icon:(0,M.jsx)(s.Z,{}),onClick:()=>(e=>{n((0,b.bL)({url:`notification/${e.uuid}`,id:"notification_edit",name:t("edit.notification")})),A(`/notification/${e.uuid}`)})(i)})]}),(0,M.jsx)(f.Z,{icon:(0,M.jsx)(a.Z,{}),onClick:()=>(e=>{n((0,b.bL)({id:"notification-clone",url:`notification-clone/${e.uuid}`,name:t("notification.clone")})),A(`/notification-clone/${e.uuid}`)})(i),disabled:i.deleted_at}),(0,M.jsx)(z.Z,{icon:(0,M.jsx)(c.Z,{}),disabled:i.deleted_at,onClick:()=>{D([i.id]),K(!0),O(!0)}})]})}]),{setIsModalVisible:O}=(0,i.useContext)(p._),[Y,D]=(0,i.useState)(null),[E,K]=(0,i.useState)(null),[L,R]=(0,i.useState)(null),[B,U]=(0,i.useState)(!1),[F,q]=(0,i.useState)(null),{activeMenu:G}=(0,j.v9)((e=>e.menu),j.wU),[J,Q]=(0,i.useState)("published"),W=(null===(e=G.data)||void 0===e?void 0:e.role)||J,X=G.data,ee={sort:null===X||void 0===X?void 0:X.sort,column:null===X||void 0===X?void 0:X.column,perPage:null===X||void 0===X?void 0:X.perPage,page:null===X||void 0===X?void 0:X.page,status:W?void 0:W,deleted_at:"deleted_at"===W?W:void 0},{notifications:te,meta:ne,loading:ie,params:le}=(0,j.v9)((e=>e.notification),j.wU);(0,i.useEffect)((()=>{G.refetch&&(n((0,y.n)(ee)),n((0,b.A_)(G)))}),[G.refetch]),(0,C.Z)((()=>{n((0,y.n)(ee))}),[G.data]);const se={selectedRowKeys:Y,onChange:e=>{D(e)}};return(0,M.jsxs)(x.Z,{title:t("notifications"),extra:(0,M.jsxs)(u.Z,{children:["deleted_at"!==W?(0,M.jsxs)(u.Z,{wrap:!0,children:[(0,M.jsx)(z.Z,{size:"",onClick:()=>{null===Y||0===Y.length?v.Am.warning(t("select.the.product")):(O(!0),K(!0))},children:t("delete.selected")}),(0,M.jsx)(z.Z,{size:"",onClick:()=>q({delete:!0}),children:t("delete.all")})]}):(0,M.jsx)(z.Z,{icon:(0,M.jsx)(S.uOc,{className:"mr-2"}),onClick:()=>q({restore:!0}),children:t("restore.all")}),(0,M.jsx)(f.Z,{icon:(0,M.jsx)(o.Z,{}),type:"primary",onClick:()=>{n((0,b.bL)({id:"add.notification",url:"notification/add",name:t("add.notification")})),A("/notification/add")},children:t("add.notification")}),(0,M.jsx)(H.Z,{columns:N,setColumns:P})]}),children:[(0,M.jsx)(d.Z,{className:"mt-3",activeKey:W,onChange:e=>{(e=>{const t=G.data;n((0,b.nc)({activeMenu:G,data:{...t,...e}}))})({role:e,page:1}),Q(e)},type:"card",children:T.map((e=>(0,M.jsx)($,{tab:t(e)},e)))}),(0,M.jsx)(m.Z,{scroll:{x:!0},rowSelection:se,columns:null===N||void 0===N?void 0:N.filter((e=>e.is_show)),dataSource:te,pagination:{pageSize:le.perPage,page:le.page,total:ne.total,defaultCurrent:le.page},rowKey:e=>e.id,onChange:function(e,t,i){const{pageSize:l,current:s}=e,{field:a,order:c}=i,o=(0,k.Z)(c);n((0,b.nc)({activeMenu:G,data:{...G.data,perPage:l,page:s,column:a,sort:o}}))},loading:ie}),(0,M.jsx)(Z.Z,{click:L?()=>{U(!0),w.Z.publish(Y).then((()=>{v.Am.success(t("successfully.published")),n((0,y.n)()),O(!1),R(!1)})).finally((()=>U(!1)))}:E?()=>{U(!0);const e={...Object.assign({},...Y.map(((e,t)=>({[`ids[${t}]`]:e}))))};w.Z.delete(e).then((()=>{v.Am.success(t("successfully.deleted")),n((0,y.n)()),O(!1)})).finally((()=>{D(null),U(!1)}))}:()=>{U(!0),w.Z.setActive(Y).then((()=>{v.Am.success(t("successfully.updated")),n((0,y.n)()),O(!1)})).finally((()=>U(!1)))},text:t(L?"publish.notification":E?"delete.notification":"set.active.notification"),loading:B,setText:D}),F&&(0,M.jsx)(V.Z,{open:F,handleCancel:()=>q(null),click:F.restore?()=>{U(!0),w.Z.restoreAll().then((()=>{v.Am.success(t("successfully.deleted")),n((0,y.n)()),q(null)})).finally((()=>U(!1)))}:()=>{U(!0),w.Z.dropAll().then((()=>{v.Am.success(t("successfully.deleted")),n((0,y.n)()),q(null)})).finally((()=>U(!1)))},text:F.restore?t("restore.modal.text"):t("read.carefully"),subTitle:F.restore?"":t("confirm.deletion"),loading:B,setText:D})]})}},31549:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(1413),l=n(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=n(54291),c=function(e,t){return l.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};c.displayName="PlusCircleOutlined";const o=l.forwardRef(c)},99197:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(1413),l=n(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var a=n(54291),c=function(e,t){return l.createElement(a.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};c.displayName="TableOutlined";const o=l.forwardRef(c)}}]);
//# sourceMappingURL=940.ef5e45a6.chunk.js.map