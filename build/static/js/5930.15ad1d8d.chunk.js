"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5930],{69688:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(36755),n=a(80184);const s=e=>{let{image:t,row:a,size:s=100}=e;return(0,n.jsx)(l.Z,{src:t||"https://via.placeholder.com/150",alt:"img_gallery",width:s,height:s,className:"rounded border",preview:!0,placeholder:!t,style:{objectFit:"contain"}},t+(null===a||void 0===a?void 0:a.id))}},79586:(e,t,a)=>{a.d(t,{Z:()=>r});a(72791);var l=a(87309),n=a(82622),s=a(30577),i=a(33168),d=a(19011),o=a(80184);function r(e){let{size:t="",onClick:a,type:r="default",...c}=e;const{t:u}=(0,i.$)(),{isDemo:h}=(0,d.Z)();return(0,o.jsx)(l.Z,{size:t,icon:(0,o.jsx)(n.Z,{}),onClick:e=>{h?s.Am.warning(u("cannot.work.demo")):a(e)},type:r,...c})}},255:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(72791),n=a(87407),s=a(56014),i=a(83099),d=a(25581),o=a(32385),r=a(43751),c=a(87309),u=a(99197),h=a(33168),v=a(80184);const{Text:p}=n.Z,m=e=>{let{columns:t=[],setColumns:a,style:n,size:m="",iconOnly:g}=e;const{t:x}=(0,h.$)(),[y,Z]=(0,l.useState)(!1),j=(0,v.jsx)(s.Z,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(s.Z.Item,{children:(0,v.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(o.Z,{overlay:j,trigger:["click"],onVisibleChange:e=>{Z(e)},visible:y,children:(0,v.jsx)(r.Z,{title:x("change.columns"),children:(0,v.jsx)(c.Z,{style:{...n},size:m,icon:(0,v.jsx)(u.Z,{}),children:g?null:x("Columns")})})})}},37720:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(72791),n=a(86005),s=a(763),i=a(11730),d=a(80184);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...r}=e;const[c,u]=(0,l.useState)(a),h=(0,l.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[t]);return(0,l.useEffect)((()=>{u(a)}),[o,a]),(0,d.jsx)(n.Z,{value:c,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,d.jsx)(i.Z,{}),...r})}},6200:(e,t,a)=>{a.d(t,{h:()=>r});var l=a(72791),n=a(48573),s=a.n(n),i=a(66818),d=a(37083),o=a(80184);const r=e=>{let{fetchOptions:t,debounceTimeout:a=400,onClear:n,...r}=e;const[c,u]=(0,l.useState)(!1),[h,v]=(0,l.useState)([]),p=(0,l.useMemo)((()=>s()((e=>{v([]),u(!0),t(e).then((e=>{v(e),u(!1)}))}),a)),[t,a]);return(0,o.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),n&&n()},notFoundContent:c?(0,o.jsx)(d.Z,{size:"small"}):"no results",...r,options:h,onFocus:()=>{p("")}})}},28640:(e,t,a)=>{function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{Z:()=>l})},55930:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var l=a(72791),n=a(87661),s=a(33168),i=a(83099),d=a(47528),o=a(25581),r=a(87309),c=a(54080),u=a(95332),h=a(6533),v=a(77483),p=a(65873),m=a(6200),g=a(48030),x=a(79337),y=a(21999),Z=a(16871),j=a(31549),f=a(80184);function b(e){let{isModalOpen:t,handleCancel:a}=e;const{t:n}=(0,s.$)(),[i]=v.Z.useForm(),[d,o]=(0,l.useState)(!1),{activeMenu:c}=(0,x.v9)((e=>e.menu),x.wU),u=(0,x.I0)(),h=(0,Z.s0)();return(0,f.jsx)(p.Z,{visible:t,title:n("add.category"),onCancel:a,footer:[(0,f.jsx)(r.Z,{type:"primary",onClick:()=>(u((0,g.bL)({url:"seller/category/add",id:"seller/category/add",name:n("edit.category")})),void h("/seller/category/add")),loading:d,icon:(0,f.jsx)(j.Z,{}),children:n("add.new.category")},"add.new"),(0,f.jsx)(r.Z,{type:"primary",onClick:()=>i.submit(),loading:d,children:n("save")},"save.from"),(0,f.jsx)(r.Z,{type:"default",onClick:a,children:n("cancel")},"cancel.form")],children:(0,f.jsx)(v.Z,{layout:"vertical",name:"user-address",form:i,onFinish:e=>{const t={...Object.assign({},...e.title.map(((e,t)=>({[`categories[${t}]`]:e.value})))),type:"main"};o(!0),y.Z.create(t).then((()=>{a(),u((0,g.xo)(c))})).catch((e=>console.error(e))).finally((()=>o(!1)))},children:(0,f.jsx)(v.Z.Item,{name:"title",label:n("title"),rules:[{required:!0,message:"required"}],children:(0,f.jsx)(m.h,{mode:"multiple",placeholder:"Select category",fetchOptions:async function(e){const t={search:0!==e.length?e:null,perPage:10,type:"main"};return y.Z.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{minWidth:150}})})})})}var w=a(31752),_=a(82622),C=a(46894),k=a(30577),S=a(73182),I=a(52666),z=a(255),M=a(28640),V=a(17076),$=a(37720),O=a(79586),P=a(69688);const H=["blue","red","gold","volcano","cyan","lime"],U=["all","pending","published","unpublished","deleted_at"];function q(e){var t,a,h,v,p,m;let{parentId:q,type:N="main"}=e;const{t:T}=(0,s.$)(),[A,F]=(0,l.useState)(!1),{setIsModalVisible:K}=(0,l.useContext)(I._),[E,L]=(0,l.useState)(!1),[R,W]=(0,l.useState)(null),B=(0,x.I0)(),D=(0,Z.s0)(),[G,J]=(0,l.useState)(null),{activeMenu:Q}=(0,x.v9)((e=>e.menu),x.wU),[X,Y]=(0,l.useState)(null),{user:ee}=(0,x.v9)((e=>e.auth),x.wU),{categories:te,meta:ae,loading:le,params:ne}=(0,x.v9)((e=>e.category),x.wU),se=Q.data,{uuid:ie}=(0,Z.UO)(),[de,oe]=(0,l.useState)("all"),re=(null===(t=Q.data)||void 0===t?void 0:t.role)||de,ce={search:null===se||void 0===se?void 0:se.search,sort:null===se||void 0===se?void 0:se.sort,column:null===se||void 0===se?void 0:se.column,perPage:null===se||void 0===se?void 0:se.perPage,page:null===se||void 0===se?void 0:se.page,shop_id:null===ee||void 0===ee?void 0:ee.shop_id,type:N,parent_id:q,status:"deleted_at"===re||"all"===re?void 0:re,deleted_at:"deleted_at"===re?re:null},[ue,he]=(0,l.useState)([{title:T("id"),dataIndex:"id",key:"id",is_show:!0},{title:T("name"),dataIndex:"name",key:"name",is_show:!0},{title:T("created.by"),dataIndex:"shop",key:"shop",is_show:!0,render:e=>T(e?"you":"admin")},{title:T("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,f.jsx)(i.Z,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,f.jsx)(d.Z,{className:"text-uppercase",color:[H[t]],children:e})))})}},{title:T("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,f.jsx)(P.Z,{image:e,row:t})},{title:T("active"),dataIndex:"active",is_show:!0,render:(e,t)=>(0,f.jsx)(o.Z,{onChange:()=>{K(!0),W(t.uuid),Y(!0)},disabled:t.deleted_at||!(null!==t&&void 0!==t&&t.shop_id),checked:e})},{title:T("status"),dataIndex:"status",is_show:!0,render:e=>(0,f.jsx)("div",{children:"pending"===e?(0,f.jsx)(d.Z,{color:"blue",children:T(e)}):"unpublished"===e?(0,f.jsx)(d.Z,{color:"error",children:T(e)}):(0,f.jsx)(d.Z,{color:"cyan",children:T(e)})})},{title:T("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(r.Z,{type:"primary",icon:(0,f.jsx)(w.Z,{}),onClick:()=>(e=>{B((0,g.bL)({url:`seller/category/${e.uuid}`,id:"category_edit",name:T("category")})),D(`/seller/category/${e.uuid}`,{state:{parentId:q,parentUuid:ie}})})(t),disabled:!(null!==t&&void 0!==t&&t.shop_id)}),(0,f.jsx)(O.Z,{disabled:t.deleted_at||!(null!==t&&void 0!==t&&t.shop_id),icon:(0,f.jsx)(_.Z,{}),onClick:()=>{W([t.id]),K(!0),J(!0)}})]})}]);(0,l.useEffect)((()=>{Q.refetch&&(B((0,C.z$)(ce)),B((0,g.A_)(Q)))}),[Q.refetch]),(0,V.Z)((()=>{B((0,C.z$)(ce))}),[Q.data]);const ve={selectedRowKeys:R,onChange:e=>{W(e)}},pe=e=>{const t=Q.data;B((0,g.nc)({activeMenu:Q,data:{...t,...e}}))};return(0,f.jsxs)(c.Z,{title:T(q?"sub.category":"categories"),extra:(0,f.jsxs)(i.Z,{wrap:!0,children:[(0,f.jsx)($.Z,{placeholder:T("search"),handleChange:e=>pe({search:e}),defaultValue:null===(a=Q.data)||void 0===a?void 0:a.search,resetSearch:!(null!==(h=Q.data)&&void 0!==h&&h.search)}),(0,f.jsx)(r.Z,{size:"small",type:"primary",icon:(0,f.jsx)(j.Z,{}),onClick:()=>{B((0,g.bL)({url:"seller/category/add",id:"seller/category/add",name:T("edit.category")})),D("/seller/category/add",{state:{parentId:q,parentUuid:ie}})},children:T("add.category")}),(0,f.jsx)(z.Z,{columns:ue,setColumns:he})]}),children:[(0,f.jsx)(n.Z,{className:"mt-3",activeKey:re,onChange:e=>{pe({role:e,page:1}),oe(e)},type:"card",children:U.map((e=>(0,f.jsx)(n.Z.TabPane,{tab:T(e)},e)))}),(0,f.jsx)(u.Z,{scroll:{x:!0},rowSelection:ve,columns:null===ue||void 0===ue?void 0:ue.filter((e=>e.is_show)),dataSource:te,pagination:{pageSize:ne.perPage,page:(null===(v=Q.data)||void 0===v?void 0:v.page)||1,total:ae.total,defaultCurrent:null===(p=Q.data)||void 0===p?void 0:p.page,current:null===(m=Q.data)||void 0===m?void 0:m.page},rowKey:e=>e.key,onChange:function(e,t,a){const{pageSize:l,current:n}=e,{field:s,order:i}=a,d=(0,M.Z)(i);B((0,g.nc)({activeMenu:Q,data:{...Q.data,perPage:l,page:n,column:s,sort:d}}))},loading:le}),A&&(0,f.jsx)(b,{handleCancel:()=>F(!1),isModalOpen:A}),(0,f.jsx)(S.Z,{click:X?()=>{L(!0),y.Z.setActive(R).then((()=>{K(!1),B((0,C.z$)(ce)),k.Am.success(T("successfully.updated")),Y(!1)})).finally((()=>L(!1)))}:()=>{L(!0);const e={...Object.assign({},...R.map(((e,t)=>({[`ids[${t}]`]:e}))))};y.Z.delete(e).then((()=>{k.Am.success(T("successfully.deleted")),B((0,C.z$)(ce)),K(!1)})).finally((()=>L(!1)))},text:T(X?"set.active.category":G?"delete":"all.delete"),setText:W,loading:E})]})}var N=a(36755),T=a(93451),A=a(65500),F=a(58617),K=a(5768);const E={type:"category"};function L(e){var t,a,n;let{parentId:o}=e;const{t:v}=(0,s.$)(),[m,y]=(0,l.useState)(!1),{setIsModalVisible:j}=(0,l.useContext)(I._),[_,C]=(0,l.useState)(!1),[$,P]=(0,l.useState)(!1),[H,U]=(0,l.useState)(""),[q,L]=(0,l.useState)(null),R=(0,x.I0)(),W=(0,Z.s0)(),{activeMenu:B}=(0,x.v9)((e=>e.menu),x.wU),{data:D,meta:G,loading:J,params:Q}=(0,x.v9)((e=>e.requestModels),x.wU),X=B.data,{uuid:Y}=(0,Z.UO)(),ee={search:null===X||void 0===X?void 0:X.search,sort:null===X||void 0===X?void 0:X.sort,column:null===X||void 0===X?void 0:X.column,perPage:null===X||void 0===X?void 0:X.perPage,page:null===X||void 0===X?void 0:X.page,parent_id:o,type:"category"},[te,ae]=(0,l.useState)([{title:v("name"),dataIndex:"name",key:"name",is_show:!0,render:(e,t)=>{var a,l,n,s,d,o;return(0,f.jsxs)(i.Z,{children:[null===t||void 0===t||null===(a=t.model)||void 0===a||null===(l=a.translation)||void 0===l?void 0:l.title," ",(0,f.jsx)(F.WFu,{})," ",null===t||void 0===t||null===(n=t.data)||void 0===n||null===(s=n.title)||void 0===s?void 0:s[null===(d=t.model)||void 0===d||null===(o=d.translation)||void 0===o?void 0:o.locale]]})}},{title:v("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>{var a,l,n;return(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(N.Z,{src:(0,h.Z)(null===t||void 0===t||null===(a=t.model)||void 0===a?void 0:a.img),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0}),(0,f.jsx)(F.WFu,{}),(0,f.jsx)(N.Z,{src:(0,h.Z)(null===(l=t.data)||void 0===l||null===(n=l.images)||void 0===n?void 0:n.at(0)),alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})]})}},{title:v("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,f.jsx)("div",{children:"pending"===e?(0,f.jsx)(d.Z,{color:"blue",children:v(e)}):"canceled"===e?(0,f.jsx)(d.Z,{color:"error",children:v(e)}):(0,f.jsx)(d.Z,{color:"cyan",children:v(e)})})},{title:v("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,f.jsxs)(i.Z,{children:["canceled"===(null===t||void 0===t?void 0:t.status)&&(null===t||void 0===t?void 0:t.status_note)&&(0,f.jsx)(r.Z,{icon:(0,f.jsx)(T.Z,{}),onClick:()=>{P(!0),U(t.status_note)}}),(0,f.jsx)(r.Z,{icon:(0,f.jsx)(w.Z,{}),onClick:()=>(e=>{R((0,g.bL)({url:`seller/category-request/${e.id}`,id:"request_edit",name:v("request.edit")})),W(`/seller/category-request/${e.id}`,{state:{parentId:o,parentUuid:Y}})})(t)}),(0,f.jsx)(O.Z,{danger:!0,type:"primary",onClick:()=>{L([t.id]),j(!0)}})]})}]);(0,l.useEffect)((()=>{R((0,A._7)(ee)),R((0,g.A_)(B))}),[B.refetch]),(0,V.Z)((()=>{R((0,A._7)(ee))}),[B.data]);const le={selectedRowKeys:q,onChange:e=>{L(e)}};return(0,f.jsxs)(c.Z,{title:v("requests"),extra:(0,f.jsx)(i.Z,{wrap:!0,children:(0,f.jsx)(z.Z,{columns:te,setColumns:ae})}),children:[(0,f.jsx)(u.Z,{scroll:{x:!0},rowSelection:le,columns:null===te||void 0===te?void 0:te.filter((e=>e.is_show)),dataSource:D,pagination:{pageSize:Q.perPage,page:(null===(t=B.data)||void 0===t?void 0:t.page)||1,total:G.total,defaultCurrent:null===(a=B.data)||void 0===a?void 0:a.page,current:null===(n=B.data)||void 0===n?void 0:n.page},rowKey:e=>e.key,onChange:function(e,t,a){const{pageSize:l,current:n}=e,{field:s,order:i}=a,d=(0,M.Z)(i);R((0,g.nc)({activeMenu:B,data:{...B.data,perPage:l,page:n,column:s,sort:d}}))},loading:J}),m&&(0,f.jsx)(b,{handleCancel:()=>y(!1),isModalOpen:m}),(0,f.jsx)(S.Z,{click:()=>{C(!0);const e={...Object.assign({},...q.map(((e,t)=>({[`ids[${t}]`]:e}))))};K.Z.delete(e).then((()=>{k.Am.success(v("successfully.deleted")),R((0,A._7)(E)),j(!1)})).finally((()=>C(!1)))},text:v("delete"),setText:L,loading:_}),(0,f.jsxs)(p.Z,{title:v("reject.message"),closable:!1,visible:$,footer:null,centered:!0,children:[(0,f.jsx)("p",{children:H}),(0,f.jsx)("div",{className:"d-flex justify-content-end",children:(0,f.jsx)(r.Z,{type:"primary",className:"mr-2",onClick:()=>P(!1),children:v("close")})})]})]})}function R(e){var t;let{parentId:a,type:l}=e;const{t:i}=(0,s.$)(),d=(0,Z.TH)();return(0,f.jsxs)(n.Z,{defaultActiveKey:(null===(t=d.state)||void 0===t?void 0:t.tab)||"list",destroyInactiveTabPane:!0,children:[(0,f.jsx)(n.Z.TabPane,{tab:i("category.list"),children:(0,f.jsx)(q,{parentId:a,type:l})},"list"),(0,f.jsx)(n.Z.TabPane,{tab:i("requests"),children:(0,f.jsx)(L,{parentId:a,type:l})},"request")]})}},31549:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),n=a(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=a(54291),d=function(e,t){return n.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};d.displayName="PlusCircleOutlined";const o=n.forwardRef(d)},99197:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),n=a(72791);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=a(54291),d=function(e,t){return n.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};d.displayName="TableOutlined";const o=n.forwardRef(d)}}]);
//# sourceMappingURL=5930.15ad1d8d.chunk.js.map