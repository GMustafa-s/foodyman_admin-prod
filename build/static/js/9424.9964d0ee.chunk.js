"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9424],{69688:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(36755),s=a(80184);const n=e=>{let{image:t,row:a,size:n=100}=e;return(0,s.jsx)(l.Z,{src:t||"https://via.placeholder.com/150",alt:"img_gallery",width:n,height:n,className:"rounded border",preview:!0,placeholder:!t,style:{objectFit:"contain"}},t+(null===a||void 0===a?void 0:a.id))}},79586:(e,t,a)=>{a.d(t,{Z:()=>c});a(72791);var l=a(87309),s=a(82622),n=a(30577),i=a(33168),d=a(19011),o=a(80184);function c(e){let{size:t="",onClick:a,type:c="default",...r}=e;const{t:u}=(0,i.$)(),{isDemo:h}=(0,d.Z)();return(0,o.jsx)(l.Z,{size:t,icon:(0,o.jsx)(s.Z,{}),onClick:e=>{h?n.Am.warning(u("cannot.work.demo")):a(e)},type:c,...r})}},255:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(72791),s=a(87407),n=a(56014),i=a(83099),d=a(25581),o=a(32385),c=a(43751),r=a(87309),u=a(99197),h=a(33168),v=a(80184);const{Text:m}=s.Z,p=e=>{let{columns:t=[],setColumns:a,style:s,size:p="",iconOnly:x}=e;const{t:g}=(0,h.$)(),[Z,j]=(0,l.useState)(!1),y=(0,v.jsx)(n.Z,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,v.jsx)(n.Z.Item,{children:(0,v.jsxs)(i.Z,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(d.Z,{defaultChecked:!0,onClick:()=>function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(l)}(e),disabled:1===l})]})},e+l)))});return(0,v.jsx)(o.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{j(e)},visible:Z,children:(0,v.jsx)(c.Z,{title:g("change.columns"),children:(0,v.jsx)(r.Z,{style:{...s},size:p,icon:(0,v.jsx)(u.Z,{}),children:x?null:g("Columns")})})})}},1728:(e,t,a)=>{a.d(t,{Z:()=>o});a(72791);var l=a(65873),s=a(77063),n=a(87309),i=a(33168),d=a(80184);const o=e=>{let{open:t,handleCancel:a,text:o,click:c,loading:r,subTitle:u}=e;const{t:h}=(0,i.$)();return(0,d.jsxs)(l.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,d.jsx)(s.ZP,{status:"warning",title:o,subTitle:u}),(0,d.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,d.jsx)(n.Z,{type:"primary",className:"mr-2",onClick:c,loading:r,children:h("yes")}),(0,d.jsx)(n.Z,{onClick:()=>a(),children:h("no")})]})]})}},37720:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(72791),s=a(86005),n=a(763),i=a(11730),d=a(80184);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...c}=e;const[r,u]=(0,l.useState)(a),h=(0,l.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[t]);return(0,l.useEffect)((()=>{u(a)}),[o,a]),(0,d.jsx)(s.Z,{value:r,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,d.jsx)(i.Z,{}),...c})}},69424:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var l=a(72791),s=a(31752),n=a(23414),i=a(82622),d=a(31549),o=a(12056),c=a(87661),r=a(83099),u=a(47528),h=a(25581),v=a(87309),m=a(54080),p=a(95332),x=a(85830),g=a(52666),Z=a(16871),j=a(30577),y=a(73182),f=a(79337),b=a(48030),C=a(15764),w=a(27286),k=a(33168),_=a(79586),z=a(255),V=a(37720),S=a(17076),H=a(56355),I=a(85880),N=a(1728),M=a(77483),A=a(65873),$=a(66106),P=a(30914),T=a(38243),F=a(80184);function O(e){let{paramsData:t,handleCancel:a,data:s}=e;const{t:n}=(0,k.$)(),i=(0,f.I0)(),{activeMenu:d}=(0,f.v9)((e=>e.menu),f.wU),[o]=M.Z.useForm(),[c,r]=(0,l.useState)(!1);return(0,F.jsx)(A.Z,{visible:!!s,title:s.title,onCancel:a,footer:[(0,F.jsx)(v.Z,{type:"primary",onClick:()=>o.submit(),loading:c,children:n("save")}),(0,F.jsx)(v.Z,{type:"default",onClick:a,children:n("cancel")})],children:(0,F.jsx)(M.Z,{form:o,layout:"vertical",initialValues:{input:s.input},onFinish:e=>{r(!0);const l={...e};C.Z.updatePosition(s.uuid,l).then((()=>{a(),i((0,w.a)(t)),i((0,b.A_)(d))})).finally((()=>r(!1)))},children:(0,F.jsx)($.Z,{gutter:12,children:(0,F.jsx)(P.Z,{span:24,children:(0,F.jsx)(M.Z.Item,{label:n("position"),name:"input",rules:[{required:!0,message:n("required")},{type:"number",min:0,max:32767,message:n("must.be.between.0.and.32767")}],children:(0,F.jsx)(T.Z,{className:"w-100"})})})})})})}var D=a(66818);const E=["pending","published","unpublished"];function L(e){let{data:t,handleCancel:a,paramsData:s}=e;const n=(0,f.I0)(),{t:i}=(0,k.$)(),{activeMenu:d}=(0,f.v9)((e=>e.menu),f.wU),[o]=M.Z.useForm(),[c,r]=(0,l.useState)(!1);return(0,F.jsx)(A.Z,{visible:!!t,title:t.title,onCancel:a,footer:[(0,F.jsx)(v.Z,{type:"primary",onClick:()=>o.submit(),loading:c,children:i("save")}),(0,F.jsx)(v.Z,{type:"default",onClick:a,children:i("cancel")})],children:(0,F.jsx)(M.Z,{form:o,layout:"vertical",onFinish:e=>{r(!0);const l={...e};C.Z.statusUpdate(t.uuid,l).then((()=>{a(),n((0,w.a)(s)),n((0,b.A_)(d))})).finally((()=>r(!1)))},initialValues:{status:t.status},children:(0,F.jsx)($.Z,{gutter:12,children:(0,F.jsx)(P.Z,{span:24,children:(0,F.jsx)(M.Z.Item,{label:i("status"),name:"status",rules:[{required:!0,message:i("required")}],children:(0,F.jsx)(D.Z,{children:E.map(((e,t)=>(0,F.jsx)(D.Z.Option,{value:e,children:i(e)},e+t)))})})})})})})}var U=a(69688);const q=["blue","red","gold","volcano","cyan","lime"],{TabPane:R}=c.Z,W=["all","pending","published","unpublished","deleted_at"],B=()=>{var e,t,a,M;const{t:A}=(0,k.$)(),$=(0,f.I0)(),P=(0,Z.s0)(),[T,D]=(0,l.useState)(null),[E,B]=(0,l.useState)(null),[K,Q]=(0,l.useState)(null),[G,J]=(0,l.useState)(null),[X,Y]=(0,l.useState)([{title:A("id"),dataIndex:"id",key:"id",is_show:!0},{title:A("name"),dataIndex:"name",key:"name",is_show:!0},{title:A("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,F.jsx)(r.Z,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,F.jsx)(u.Z,{className:"text-uppercase",color:[q[t]],children:e})))})}},{title:A("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,F.jsx)(U.Z,{image:e,row:t})},{title:A("position"),dataIndex:"input",key:"input",is_show:!0,render:(e,t)=>(0,F.jsxs)("div",{children:[e,t.deleted_at?"":(0,F.jsx)("span",{style:{marginLeft:"10px"},children:(0,F.jsx)(s.Z,{onClick:()=>B(t)})})]})},{title:A("active"),dataIndex:"active",key:"active",is_show:!0,render:(e,t)=>(0,F.jsx)(h.Z,{onChange:()=>{ee(!0),ae(t.uuid),Q(!0)},disabled:t.deleted_at,checked:e})},{title:A("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,t)=>(0,F.jsxs)("div",{children:["pending"===e?(0,F.jsx)(u.Z,{color:"blue",children:A(e)}):"unpublished"===e?(0,F.jsx)(u.Z,{color:"error",children:A(e)}):(0,F.jsx)(u.Z,{color:"cyan",children:A(e)}),t.deleted_at?"":(0,F.jsx)(s.Z,{onClick:()=>J(t)})]})},{title:A("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,F.jsxs)(r.Z,{children:[(0,F.jsx)(v.Z,{disabled:t.deleted_at,type:"primary",icon:(0,F.jsx)(s.Z,{}),onClick:()=>(e=>{console.log(e),$((0,b.bL)({url:`shop/category/${e.uuid}`,id:"category_edit",name:A("edit.category")})),P(`/shop/category/${e.uuid}`,{state:{type:"edit",isParent:"shop"===e.type,uuid:null===e||void 0===e?void 0:e.uuid}})})(t)}),(0,F.jsx)(v.Z,{icon:(0,F.jsx)(n.Z,{}),onClick:()=>{return e=t.uuid,$((0,b.bL)({data:ue.data,id:"shop.category-clone",url:`shop/category-clone/${e}`,name:A("shop.category.clone")})),void P(`/shop/category-clone/${e}`,{state:{type:"clone"}});var e},disabled:t.deleted_at}),(0,F.jsx)(_.Z,{disabled:t.deleted_at,icon:(0,F.jsx)(i.Z,{}),onClick:()=>{ae([t.id]),se(!1),ee(!0),re(!0)}})]})}]),{setIsModalVisible:ee}=(0,l.useContext)(g._),[te,ae]=(0,l.useState)(null),[le,se]=(0,l.useState)(!1),[ne,ie]=(0,l.useState)(!1),[de,oe]=(0,l.useState)(!1),[ce,re]=(0,l.useState)(null),{activeMenu:ue}=(0,f.v9)((e=>e.menu),f.wU),[he,ve]=(0,l.useState)("all"),me=(null===(e=ue.data)||void 0===e?void 0:e.role)||he,{shopCategories:pe,meta:xe,loading:ge}=(0,f.v9)((e=>e.shopCategory),f.wU),Ze=ue.data,je={search:null===Ze||void 0===Ze?void 0:Ze.search,perPage:null===Ze||void 0===Ze?void 0:Ze.perPage,page:null===Ze||void 0===Ze?void 0:Ze.page,status:"deleted_at"===(null===Ze||void 0===Ze?void 0:Ze.role)||"all"===(null===Ze||void 0===Ze?void 0:Ze.role)?null:null===Ze||void 0===Ze?void 0:Ze.role,deleted_at:"deleted_at"===(null===Ze||void 0===Ze?void 0:Ze.role)?null===Ze||void 0===Ze?void 0:Ze.role:null};(0,l.useEffect)((()=>{ue.refetch&&($((0,w.a)(je)),$((0,b.A_)(ue)))}),[ue.refetch]),(0,S.Z)((()=>{$((0,w.a)(je))}),[ue.data]);const ye={selectedRowKeys:te,onChange:e=>{ae(e)}},fe=e=>{const t=ue.data;$((0,b.nc)({activeMenu:ue,data:{...t,...e}}))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(m.Z,{className:"p-0",children:(0,F.jsxs)(r.Z,{wrap:!0,size:[14,20],children:[(0,F.jsx)(V.Z,{placeholder:A("search"),className:"w-25",handleChange:e=>{fe({search:e})},defaultValue:null===(t=ue.data)||void 0===t?void 0:t.search,resetSearch:!(null!==(a=ue.data)&&void 0!==a&&a.search),style:{minWidth:300}}),"deleted_at"!==(null===(M=ue.data)||void 0===M?void 0:M.role)?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(_.Z,{size:"",onClick:()=>{null===te||0===te.length?j.Am.warning(A("select.the.product")):(ee(!0),re(!1))},children:A("delete.selected")}),(0,F.jsx)(_.Z,{onClick:()=>D({delete:!0}),children:A("delete.all")}),(0,F.jsxs)(v.Z,{style:{minWidth:150},onClick:()=>{$((0,b.bL)({data:ue.data,url:"catalog/shop/categories/import",id:"category_import",name:A("import.category")})),P("/catalog/shop/categories/import")},children:[(0,F.jsx)(I.o5r,{className:"mr-2"}),A("import")]}),(0,F.jsxs)(v.Z,{style:{minWidth:150},loading:de,onClick:()=>{oe(!0),C.Z.export({type:"shop"}).then((e=>{var t;const a=x.S0+(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.file_name);window.location.href=a})).finally((()=>oe(!1)))},children:[(0,F.jsx)(I.bwQ,{className:"mr-2"}),A("export")]}),(0,F.jsx)(v.Z,{type:"primary",icon:(0,F.jsx)(d.Z,{}),onClick:()=>{$((0,b.bL)({id:"shop/category-add",url:"shop/category/add",name:A("add.category")})),P("/shop/category/add")},children:A("add.category")})]}):(0,F.jsx)(_.Z,{icon:(0,F.jsx)(H.uOc,{className:"mr-2"}),onClick:()=>D({restore:!0}),children:A("restore.all")}),(0,F.jsx)(v.Z,{icon:(0,F.jsx)(o.Z,{}),onClick:()=>{$((0,b.nc)({activeMenu:ue,data:void 0}))},disabled:!ue.data,style:{minWidth:100}}),(0,F.jsx)(z.Z,{columns:X,setColumns:Y})]})}),(0,F.jsxs)(m.Z,{title:A("shop.categories"),children:[(0,F.jsx)(c.Z,{className:"mt-3",activeKey:me,onChange:e=>{fe({role:e,page:1}),ve(e)},type:"card",children:W.map((e=>(0,F.jsx)(R,{tab:A(e)},e)))}),(0,F.jsx)(p.Z,{scroll:{x:!0},rowSelection:ye,columns:null===X||void 0===X?void 0:X.filter((e=>e.is_show)),dataSource:pe,pagination:{pageSize:xe.per_page,page:(null===Ze||void 0===Ze?void 0:Ze.page)||1,total:xe.total,defaultCurrent:null===Ze||void 0===Ze?void 0:Ze.page},rowKey:e=>e.id,onChange:e=>{const{pageSize:t,current:a}=e;$((0,b.nc)({activeMenu:ue,data:{...ue.data,perPage:t,page:a}}))},loading:ge})]}),(0,F.jsx)(y.Z,{click:K?()=>{ie(!0),C.Z.setActive(te).then((()=>{ee(!1),$((0,w.a)(je)),j.Am.success(A("successfully.updated")),Q(!1)})).finally((()=>ie(!1)))}:()=>{ie(!0);const e={...Object.assign({},...te.map(((e,t)=>({[`ids[${t}]`]:e}))))};C.Z.delete(e).then((()=>{$((0,w.a)(je)),ae(null),j.Am.success(A("successfully.deleted"))})).finally((()=>{ee(!1),ie(!1),re(null)}))},text:A(K?"set.active.product":le?"set.active.category":ce?"delete":"all.delete"),setText:ae,setActive:Q,loading:ne}),E&&(0,F.jsx)(O,{data:E,handleCancel:()=>B(null),paramsData:je}),T&&(0,F.jsx)(N.Z,{open:T,handleCancel:()=>D(null),click:T.restore?()=>{ie(!0),C.Z.restoreAll().then((()=>{j.Am.success(A("successfully.restored")),$((0,w.a)()),D(null)})).finally((()=>ie(!1)))}:()=>{ie(!0),C.Z.dropAll().then((()=>{j.Am.success(A("successfully.deleted")),$((0,w.a)()),D(null)})).finally((()=>ie(!1)))},text:T.restore?A("restore.modal.text"):A("read.carefully"),subTitle:T.restore?"":A("confirm.deletion"),loading:ne,setText:ae}),G&&(0,F.jsx)(L,{data:G,handleCancel:()=>J(null),paramsData:je})]})}},12056:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(72791);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"};var i=a(54291),d=function(e,t){return s.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};d.displayName="ClearOutlined";const o=s.forwardRef(d)},31549:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(72791);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=a(54291),d=function(e,t){return s.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};d.displayName="PlusCircleOutlined";const o=s.forwardRef(d)},99197:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(1413),s=a(72791);const n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=a(54291),d=function(e,t){return s.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:n}))};d.displayName="TableOutlined";const o=s.forwardRef(d)}}]);
//# sourceMappingURL=9424.9964d0ee.chunk.js.map