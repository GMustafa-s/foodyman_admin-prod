"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5953],{65242:(e,l,a)=>{a.d(l,{Z:()=>i});var t=a(46485);const i={getAll:e=>t.Z.get("rest/brands/paginate",{params:e}),getById:(e,l)=>t.Z.get(`rest/brands/${e}`,{params:l})}},24982:(e,l,a)=>{a.d(l,{Z:()=>i});var t=a(46485);const i={getAll:e=>t.Z.get("dashboard/seller/categories/paginate",{params:e}),getById:(e,l)=>t.Z.get(`dashboard/seller/categories/${e}`,{params:l}),search:e=>t.Z.get("dashboard/seller/categories/search",{params:e}),paginateSelect:e=>t.Z.get("dashboard/seller/categories/select-paginate",{params:e})}},19558:(e,l,a)=>{a.d(l,{Z:()=>i});var t=a(46485);const i={getAll:e=>t.Z.get("dashboard/seller/units/paginate",{params:e}),getById:(e,l)=>t.Z.get(`dashboard/seller/units/${e}`,{params:l})}},81882:(e,l,a)=>{a.d(l,{Z:()=>g});var t=a(72791),i=a(77483),n=a(65873),s=a(87309),d=a(86005),r=a(33168),o=a(87320),c=a(79337),u=a(12262),v=a(30577),h=a(53073),p=a(12098),m=a(63446),x=a(80184);function g(e){let{modal:l,handleCancel:a,onSuccess:g}=e;const[Z]=i.Z.useForm(),{t:j}=(0,r.$)(),b=(0,c.I0)(),[f,y]=(0,t.useState)(!1),[k,I]=(0,t.useState)(!1),{languages:S,defaultLang:q}=(0,c.v9)((e=>e.formLang),c.wU);(0,t.useEffect)((()=>{var e;null!==l&&void 0!==l&&l.id&&(e=l.id,I(!0),u.Z.getGroupById(e).then((e=>{const l=e.data;Z.setFieldsValue({...l,..._(l)})})).finally((()=>I(!1))))}),[l]);function _(e){if(!e)return{};const{translations:l}=e,a=S.map((e=>{var a;return{[`title[${e.locale}]`]:null===(a=l.find((l=>l.locale===e.locale)))||void 0===a?void 0:a.title}}));return Object.assign({},...a)}return(0,x.jsx)(n.Z,{title:null!==l&&void 0!==l&&l.id?j("edit.extra.group"):j("add.extra.group"),visible:!!l,onCancel:a,footer:[(0,x.jsx)(s.Z,{type:"primary",onClick:()=>Z.submit(),loading:f,children:j("save")},"save-button-group"),(0,x.jsx)(s.Z,{type:"default",onClick:a,children:j("cancel")},"cancel-button-group")],children:k?(0,x.jsx)(m.Z,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"d-flex justify-content-end",children:(0,x.jsx)(o.Z,{})}),(0,x.jsx)(i.Z,{layout:"vertical",name:"extra-group",form:Z,onFinish:e=>{const t={title:(0,p.Z)(S,e),type:"text"};null!==l&&void 0!==l&&l.id?function(e,l){y(!0),u.Z.updateGroup(e,l).then((()=>{v.Am.success(j("successfully.updated")),b((0,h.Vy)()),a()})).finally((()=>y(!1)))}(null===l||void 0===l?void 0:l.id,t):function(e){y(!0),u.Z.createGroup(e).then((()=>{v.Am.success(j("successfully.created")),a(),b((0,h.Vy)()),g&&g()})).finally((()=>y(!1)))}(t)},children:S.map((e=>(0,x.jsx)(i.Z.Item,{rules:[{required:e.locale===q,message:j("required")}],name:`title[${e.locale}]`,label:j("title"),hidden:e.locale!==q,children:(0,x.jsx)(d.Z,{placeholder:j("title")})},"title"+e.locale)))})]})})}},21695:(e,l,a)=>{a.d(l,{Z:()=>Z});var t=a(77483),i=a(86005),n=a(65873),s=a(87309),d=a(72791),r=a(90427),o=a(33168),c=a(79337),u=a(30577),v=a(34986),h=a(62605),p=a(5674),m=a(12262),x=a(6200),g=a(80184);function Z(e){let{modal:l,handleCancel:a,onSuccess:Z,groupId:j}=e;const[b]=t.Z.useForm(),{t:f}=(0,o.$)(),y=(0,c.I0)(),[k,I]=(0,d.useState)(!1),[S,q]=(0,d.useState)("text"),[_,$]=(0,d.useState)(null),[C,N]=(0,d.useState)(""),{extraGroups:w}=(0,c.v9)((e=>e.extraGroup),c.wU);(0,d.useEffect)((()=>{if(null!==l&&void 0!==l&&l.id){var e,a,t;q(l.group.type);const i={...l,extra_group_id:{label:null===l||void 0===l||null===(e=l.group)||void 0===e||null===(a=e.translation)||void 0===a?void 0:a.title,value:null===l||void 0===l||null===(t=l.group)||void 0===t?void 0:t.id},value:l.value};switch(l.group.type){case"color":N(l.value);break;case"image":$((0,h.Z)(l.value))}b.setFieldsValue(i)}j&&b.setFieldsValue({extra_group_id:{value:j}})}),[l,j]);function A(e,l){switch(e){case"color":return l.hex;case"text":return l;case"image":return l.name;default:return""}}return(0,g.jsx)(n.Z,{title:null!==l&&void 0!==l&&l.id?f("edit.extra"):f("add.extra"),visible:!!l,onCancel:a,footer:[(0,g.jsx)(s.Z,{type:"primary",onClick:()=>b.submit(),loading:k,children:f("save")}),(0,g.jsx)(s.Z,{type:"default",onClick:a,children:f("cancel")})],children:(0,g.jsxs)(t.Z,{name:"extra-form",layout:"vertical",form:b,onFinish:e=>{var t;console.log(e);const i={extra_group_id:null===e||void 0===e||null===(t=e.extra_group_id)||void 0===t?void 0:t.value,value:A(S,e.value)};null!==l&&void 0!==l&&l.id?((e,l)=>{I(!0),m.Z.updateValue(e,l).then((()=>{u.Am.success(f("successfully.updated")),a(),y((0,p.is)())})).finally((()=>I(!1)))})(l.id,i):(e=>{I(!0),m.Z.createValue(e).then((()=>{u.Am.success(f("successfully.created")),a(),y((0,p.is)()),Z&&Z()})).finally((()=>I(!1)))})(i)},children:[(0,g.jsx)(t.Z.Item,{name:"extra_group_id",label:f("extra.group"),hidden:!!j,rules:[{required:!0,message:""}],children:(0,g.jsx)(x.h,{fetchOptions:async function(e){const l={perPage:10,active:1,search:e};return console.log("search => ",l),m.Z.getAllGroups(l).then((e=>{var l;return null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.map((e=>{var l;return{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title,key:null===e||void 0===e?void 0:e.id}}))}))}})}),(0,g.jsx)(t.Z.Item,{name:"value",label:f("value"),rules:[{required:!0,message:""}],children:(e=>{switch(e){case"color":return(0,g.jsx)(r.xS,{onChangeComplete:e=>N(e.hex),color:C,disableAlpha:!0});case"text":return(0,g.jsx)(i.Z,{placeholder:f("enter.extra.value")});case"image":return(0,g.jsx)(v.Z,{type:"extras",image:_,setImage:$,form:b,name:"value"});default:return""}})(S)})]})})}},11204:(e,l,a)=>{a.d(l,{Z:()=>N});var t=a(72791),i=a(54080),n=a(77483),s=a(83099),d=a(87309),r=a(79337),o=a(67515),c=a(48030),u=a(33168),v=a(16871),h=a(65873),p=a(32014),m=a(69421),x=a(2126),g=a(12262),Z=a(21695),j=a(79286),b=a(80184);const f=e=>{let{extra:l,onClose:a,onSelect:i}=e;const{t:n}=(0,u.$)(),[s,r]=(0,t.useState)(!1),[o,c]=(0,t.useState)([]),[v,f]=(0,t.useState)([]),[y,k]=(0,t.useState)(!1);function I(e){r(!0),g.Z.getGroupById(e).then((e=>c(e.data.extra_values.map((e=>{var l;return{label:e.value,value:e.id,group:null===(l=e.group.translation)||void 0===l?void 0:l.title}}))))).finally((()=>{r(!1)}))}return(0,t.useEffect)((()=>{var e;null!==l&&void 0!==l&&l.value&&(I(l.value),f((null===l||void 0===l||null===(e=l.values)||void 0===e?void 0:e.map((e=>e.value)))||[]))}),[null===l||void 0===l?void 0:l.value]),console.log(l),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(h.Z,{visible:!!l,onCancel:a,footer:[(0,b.jsx)(d.Z,{onClick:a,children:n("cancel")}),!s&&o.length>0&&(0,b.jsx)(d.Z,{onClick:()=>{const e=[];o.forEach((l=>{v.forEach((a=>{l.value===a&&e.push(l)}))})),i(null===l||void 0===l?void 0:l.value,e),a()},type:"primary",children:n("save")})],children:[(0,b.jsx)(p.Z.Group,{value:v,onChange:e=>{f(e)},className:"w-100",children:0!==(null===o||void 0===o?void 0:o.length)||s?(0,b.jsx)(x.ZP,{dataSource:o,loading:s,renderItem:e=>(0,b.jsx)(x.ZP.Item,{children:(0,b.jsx)(p.Z,{value:e.value,children:null===e||void 0===e?void 0:e.label})})}):(0,b.jsx)(m.Z,{})}),s?null:(0,b.jsx)(d.Z,{type:"link",onClick:()=>k(!0),style:{paddingLeft:0},icon:(0,b.jsx)(j.Z,{}),children:n("add.new.extra")})]}),l&&(0,b.jsx)(Z.Z,{modal:y,handleCancel:()=>k(!1),groupId:null===l||void 0===l?void 0:l.value,onSuccess:()=>I(null===l||void 0===l?void 0:l.value)})]})};var y=a(40071),k=a(86005),I=a(47528),S=a(74279),q=a(81882),_=a(19090);const $=e=>{let{open:l,onClose:a,selectedExtras:i,onSelect:n}=e;const{t:s}=(0,u.$)(),[r,o]=(0,t.useState)([]),[c,v]=(0,t.useState)(!1),[p,m]=(0,t.useState)(!1),[Z,f]=(0,t.useState)(""),[y,$]=(0,t.useState)(),C=(0,_.Z)(Z,500),N=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;v(!0);const a={valid:!0,perPage:10,search:e,page:l};g.Z.getAllGroups(a).then((e=>{const l=e.data.map((e=>{var l;return{id:e.id,label:null===(l=e.translation)||void 0===l?void 0:l.title,value:e.id,shop_id:e.shop_id}}));o(l),$(e.meta)})).finally((()=>v(!1)))};return(0,t.useEffect)((()=>{l&&N(C)}),[l,C]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(h.Z,{visible:l,onCancel:()=>{a(),f("")},footer:c?null:(0,b.jsx)(d.Z,{type:"link",onClick:()=>m(!0),style:{paddingLeft:0},icon:(0,b.jsx)(j.Z,{}),children:s("add.new.extra")}),children:[(0,b.jsx)(k.Z,{className:"mt-3",value:Z,onChange:e=>f(e.target.value)}),(0,b.jsx)(x.ZP,{loading:c,dataSource:r.filter((e=>!(null!==i&&void 0!==i&&i.some((l=>l.id===e.id))))),renderItem:e=>(0,b.jsx)(x.ZP.Item,{extra:null!==e&&void 0!==e&&e.shop_id?null:(0,b.jsx)(I.Z,{children:s("admin")}),style:{cursor:"pointer"},onClick:()=>{n(e)},children:e.label})}),(0,b.jsx)(S.Z,{onChange:e=>{N(C,e)},current:null===y||void 0===y?void 0:y.current_page,total:null===y||void 0===y?void 0:y.total})]}),(0,b.jsx)(q.Z,{modal:p,handleCancel:()=>m(!1),onSuccess:()=>N()})]})};var C=a(30577);const N=e=>{var l;let{next:a,prev:h,isRequest:p,mode:m}=e;const{t:x}=(0,u.$)(),g=(0,r.I0)(),{uuid:Z,id:j}=(0,v.UO)(),k=(0,v.s0)(),I=(0,v.TH)(),{activeMenu:S}=(0,r.v9)((e=>e.menu),r.wU),[q,_]=(0,t.useState)(!1),[N,w]=(0,t.useState)(!1),[A,F]=(0,t.useState)((null===(l=S.data)||void 0===l?void 0:l.extras)||[]),[O,P]=(0,t.useState)(null),[M,U]=(0,t.useState)(!1),{settings:L}=(0,r.v9)((e=>e.globalSettings));return(0,b.jsx)(i.Z,{children:(0,b.jsxs)(n.Z,{layout:"vertical",initialValues:{...S.data},onFinish:()=>{var e;if(A.some((e=>{var l;return 0===(null===(l=e.values)||void 0===l?void 0:l.length)||!e.values})))return void C.Am.error(x("please.select.at.least.1.extra.value.for.each.extra"));const l=A.map((e=>e.value));l.sort(((e,l)=>e-l));let a=I.state;return p?(g((0,c.nc)({activeMenu:S,data:{...S.data,extras:A}})),void k(`/seller/product-request/${j}?step=2`,{state:{generate:M}})):!M&&!I.state||"edit"!==m||null!==(e=I.state)&&void 0!==e&&e.create||"0"!==(null===L||void 0===L?void 0:L.product_auto_approve)?(_(!0),void o.Z.extras(Z,{extras:l}).then((()=>{var e;g((0,c.nc)({activeMenu:S,data:{...S.data,extras:A}})),k(`/seller/product/${Z}?step=2`,{state:{create:null===(e=I.state)||void 0===e?void 0:e.create}})})).finally((()=>_(!1)))):(I.state?a.extras=A:a={...S.data,extras:A},g((0,c.nc)({activeMenu:S,data:{...S.data,extras:A}})),void k(`/seller/product/${Z}?step=2`,{state:a}))},children:[(0,b.jsx)($,{open:N,onClose:()=>w(!1),selectedExtras:A,onSelect:e=>{U(!0),F((l=>[...l,e])),w(!1)}}),(0,b.jsx)(f,{extra:O,onClose:()=>P(null),onSelect:(e,l)=>{U(!0),F((a=>a.map((a=>{if(a.value===e){const e=l.map((e=>{var l,a;const t=null===(l=S.data)||void 0===l||null===(a=l.extras)||void 0===a?void 0:a.flatMap((e=>e.values)).find((l=>l.value===e.value));return{...e,stock_id:null===t||void 0===t?void 0:t.stock_id}}));return{...a,values:e}}return a}))))}}),(0,b.jsx)(s.Z,{className:"w-100",size:"middle",direction:"vertical",children:A.map((e=>{var l;return(0,b.jsxs)(s.Z,{className:"w-100",direction:"vertical",children:[(0,b.jsxs)(s.Z,{className:"w-100",wrap:!0,children:[(0,b.jsx)(d.Z,{onClick:()=>P(e),ghost:!0,type:"primary",children:null===e||void 0===e?void 0:e.label}),null===e||void 0===e||null===(l=e.values)||void 0===l?void 0:l.map((l=>(0,b.jsxs)("div",{className:"extra-value",children:[null===l||void 0===l?void 0:l.label," ",(0,b.jsx)("button",{onClick:()=>{return a=e.value,t=l.value,U(!0),void F((e=>e.map((e=>e.value===a?{...e,values:(null===e||void 0===e?void 0:e.values.filter((e=>e.value!==t)))||[]}:e))));var a,t},type:"button",className:"extra-clear",children:(0,b.jsx)(y.IOM,{})})]},l.value)))]}),(0,b.jsx)(s.Z,{className:"w-100",style:{justifyContent:"flex-end"},children:(0,b.jsx)(d.Z,{danger:!0,onClick:()=>{return l=e,U(!0),void F((e=>e.filter((e=>e.id!==l.id))));var l},type:"text",children:x("delete")})})]},e.id)}))}),(0,b.jsx)(d.Z,{onClick:()=>w(!0),className:"w-100 my-3",type:"dashed",children:x("add.extra")}),(0,b.jsxs)(s.Z,{className:"mt-3",children:[(0,b.jsx)(d.Z,{onClick:h,children:x("prev")}),(0,b.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:q,children:x("next")})]})]})})}},56778:(e,l,a)=>{a.d(l,{Z:()=>y});var t=a(72791),i=a(54080),n=a(30394),s=a(66106),d=a(30914),r=a(20063),o=a(83099),c=a(87309),u=a(37083),v=a(79337),h=a(16871),p=a(48030),m=a(46926),x=a(33168),g=a(67515),Z=a(85830),j=a(5768),b=a(30577),f=a(80184);const y=e=>{var l,a,y,k,I,S,q,_,$,C,N,w,A,F,O,P,M;let{prev:U,isRequest:L,mode:E}=e;const{t:V}=(0,x.$)(),{activeMenu:G}=(0,v.v9)((e=>e.menu),v.wU),{defaultLang:B,languages:T}=(0,v.v9)((e=>e.formLang),v.wU),W=(0,h.s0)(),{state:R}=(0,h.TH)(),z=(0,v.I0)(),[H,D]=(0,t.useState)({}),[J,K]=(0,t.useState)(null),{uuid:Q}=(0,h.UO)(),{params:X}=(0,v.v9)((e=>e.product),v.wU),[Y,ee]=(0,t.useState)(!1),{settings:le}=(0,v.v9)((e=>e.globalSettings));function ae(e){if(null===e||void 0===e||!e.translations)return{};const{translations:l}=e,a=T.map((e=>{var a,t;return{[`title[${e.locale}]`]:null===(a=l.find((l=>l.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(t=l.find((l=>l.locale===e.locale)))||void 0===t?void 0:t.description}}));return Object.assign({},...a)}const te=(0,t.useCallback)((e=>{K(!0),g.Z.getById(e).then((e=>{const l={...e.data,...ae(e.data),properties:e.data.properties.map(((e,l)=>({id:l,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};D(l)})).finally((()=>K(!1)))}),[Q]);(0,t.useEffect)((()=>{L||te(Q)}),[L,Q]);const ie=L?G.data:R;return J?(0,f.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,f.jsx)(u.Z,{size:"large",className:"py-5"})}):(0,f.jsxs)(i.Z,{children:[R||L?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Z,{title:V("product.info"),bordered:!0,children:[(0,f.jsx)(n.Z.Item,{label:`${V("title")} (${B})`,span:3,children:ie[`title[${B}]`]}),(0,f.jsx)(n.Z.Item,{label:`${V("description")} (${B})`,span:3,children:ie[`description[${B}]`]}),(0,f.jsx)(n.Z.Item,{label:V("shop"),span:1.5,children:null===ie||void 0===ie||null===(l=ie.shop)||void 0===l||null===(a=l.translation)||void 0===a?void 0:a.title}),(0,f.jsx)(n.Z.Item,{label:V("category"),span:1.5,children:null===ie||void 0===ie||null===(y=ie.category)||void 0===y?void 0:y.label}),(0,f.jsx)(n.Z.Item,{label:V("brand"),span:1.5,children:null===ie||void 0===ie||null===(k=ie.brand)||void 0===k?void 0:k.label}),(0,f.jsx)(n.Z.Item,{label:V("unit"),span:1.5,children:null===ie||void 0===ie||null===(I=ie.unit)||void 0===I?void 0:I.label}),(0,f.jsx)(n.Z.Item,{label:V("images"),span:3,children:(0,f.jsx)(s.Z,{gutter:12,children:null===ie||void 0===ie||null===(S=ie.images)||void 0===S?void 0:S.map(((e,l)=>(0,f.jsx)(d.Z,{children:(0,f.jsx)("img",{width:80,alt:"product",src:e.url})},"image"+l)))})}),(0,f.jsx)(n.Z.Item,{label:V("tax"),children:null===ie||void 0===ie?void 0:ie.tax}),(0,f.jsx)(n.Z.Item,{label:V("min.quantity"),children:null===ie||void 0===ie?void 0:ie.min_qty}),(0,f.jsx)(n.Z.Item,{label:V("max.quantity"),children:null===ie||void 0===ie?void 0:ie.max_qty})]}),!(null===ie||void 0===ie||null===(q=ie.stocks)||void 0===q||!q.length)&&(0,f.jsx)(r.Z,{children:(0,f.jsx)(r.Z.Panel,{header:V("stocks"),children:null===ie||void 0===ie?void 0:ie.stocks.map(((e,l)=>{var a;return(0,f.jsx)(r.Z,{className:"mt-4",children:(0,f.jsx)(r.Z.Panel,{header:V("stocks"),children:(0,f.jsxs)(n.Z,{bordered:!0,className:"mt-4",children:[(0,f.jsx)(n.Z.Item,{label:V("price"),span:2,children:e.price}),(0,f.jsx)(n.Z.Item,{label:V("quantity"),span:2,children:e.quantity}),null===e||void 0===e||null===(a=e.ids)||void 0===a?void 0:a.map(((e,l)=>(0,f.jsx)(n.Z.Item,{label:null===ie||void 0===ie?void 0:ie.extras[l].label,children:null===e||void 0===e?void 0:e.label},"extra"+l)))]},"desc"+l)},"seller-stocks")})}))},"seller-stocks")})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Z,{title:V("product.info"),bordered:!0,children:[(0,f.jsx)(n.Z.Item,{label:`${V("title")} (${B})`,span:3,children:H[`title[${B}]`]}),(0,f.jsx)(n.Z.Item,{label:`${V("description")} (${B})`,span:3,children:H[`description[${B}]`]}),(0,f.jsx)(n.Z.Item,{label:V("shop"),span:1.5,children:null===(_=H.shop)||void 0===_||null===($=_.translation)||void 0===$?void 0:$.title}),(0,f.jsx)(n.Z.Item,{label:V("category"),span:1.5,children:null===(C=H.category)||void 0===C||null===(N=C.translation)||void 0===N?void 0:N.title}),(0,f.jsx)(n.Z.Item,{label:V("brand"),span:1.5,children:null===(w=H.brand)||void 0===w?void 0:w.title}),(0,f.jsx)(n.Z.Item,{label:V("unit"),span:1.5,children:null===(A=H.unit)||void 0===A||null===(F=A.translation)||void 0===F?void 0:F.title}),(0,f.jsx)(n.Z.Item,{label:V("images"),span:3,children:(0,f.jsx)(s.Z,{gutter:12,children:null===H||void 0===H||null===(O=H.galleries)||void 0===O?void 0:O.map(((e,l)=>(0,f.jsx)(d.Z,{children:(0,f.jsx)("img",{width:80,alt:"product",src:Z.bV+e.path})},"image"+l)))})}),(0,f.jsx)(n.Z.Item,{label:V("tax"),children:H.tax}),(0,f.jsx)(n.Z.Item,{label:V("min.quantity"),children:H.min_qty}),(0,f.jsx)(n.Z.Item,{label:V("max.quantity"),children:H.max_qty})]}),!(null===(P=H.stocks)||void 0===P||!P.length)&&(0,f.jsx)(r.Z,{className:"mt-4",children:(0,f.jsx)(r.Z.Panel,{header:V("stocks"),children:null===(M=H.stocks)||void 0===M?void 0:M.map(((e,l)=>(0,f.jsxs)(n.Z,{bordered:!0,className:"mt-4",children:[(0,f.jsx)(n.Z.Item,{label:V("price"),span:2,children:e.price}),(0,f.jsx)(n.Z.Item,{label:V("quantity"),span:2,children:e.quantity}),e.extras.map(((e,l)=>{var a,t;return(0,f.jsx)(n.Z.Item,{label:null===e||void 0===e||null===(a=e.group)||void 0===a||null===(t=a.translation)||void 0===t?void 0:t.title,children:null===e||void 0===e?void 0:e.value},"extra"+l)}))]},"desc"+l)))},"seller-stocks")})]}),(0,f.jsx)("div",{className:"d-flex mt-4",children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(c.Z,{onClick:U,children:V("prev")}),(0,f.jsx)(c.Z,{loading:Y,type:"primary",onClick:function(){const e="seller/products",l={...X};if(L&&G.data){ee(!0);const a={id:G.data.model_id,type:"product",data:G.data};j.Z.requestChangeUpdate(G.data.request_id,a).then((()=>{W(`/${e}`,{state:{tab:"request"}}),b.Am.success(V("successfully.updated")),z((0,p.ph)({...G,nextUrl:e})),z((0,m.MW)(l))})).finally((()=>{ee(!1)}))}else if(R&&"edit"===E&&"0"===(null===le||void 0===le?void 0:le.product_auto_approve)){ee(!0);const a={type:"product",id:G.data.product_id,data:R};j.Z.requestChange(a).then((()=>{b.Am.success(V("successfully.updated")),z((0,p.ph)({...G,nextUrl:e})),z((0,m.MW)(l)),W(`/${e}`,{state:{tab:"request"}})})).finally((()=>{ee(!1)}))}else z((0,p.ph)({...G,nextUrl:e})),z((0,m.MW)(l)),W(`/${e}`)},children:V("finish")})]})})]})}},19466:(e,l,a)=>{a.d(l,{Z:()=>$});var t=a(72791),i=a(77483),n=a(66106),s=a(30914),d=a(54080),r=a(86005),o=a(38243),c=a(25581),u=a(87309),v=a(6200),h=a(65242),p=a(24982),m=a(79337),x=a(67515),g=a(48030),Z=a(19558),j=a(16871),b=a(33168),f=a(11918),y=a(66023),k=a(79286),I=a(89775),S=a(12241),q=a(23325),_=a(80184);const $=e=>{var l,a,$;let{next:C,action_type:N="",isRequest:w}=e;const{t:A}=(0,b.$)(),[F]=i.Z.useForm(),O=(0,m.I0)(),{uuid:P}=(0,j.UO)(),M=(0,j.s0)(),{activeMenu:U}=(0,m.v9)((e=>e.menu),m.wU),{defaultLang:L,languages:E}=(0,m.v9)((e=>e.formLang),m.wU),[V,G]=(0,t.useState)(null!==(l=U.data)&&void 0!==l&&l.images?null===(a=U.data)||void 0===a?void 0:a.images:[]),[B,T]=(0,t.useState)(!1),[W,R]=(0,t.useState)(Boolean(null===($=U.data)||void 0===$?void 0:$.kcal)),[z,H]=(0,t.useState)({kitchen:!1}),{settings:D}=(0,m.v9)((e=>e.globalSettings));const J=()=>{O((0,g.bL)({url:"seller/category/add",id:"seller/category/add",name:A("edit.category")})),M("/seller/category/add")};return(0,_.jsxs)(i.Z,{layout:"vertical",form:F,initialValues:{active:!0,vegetarian:!0,...U.data},onFinish:e=>{var l,a,t,i,n;T(!0);const s={...e,active:Number(e.active),vegetarian:Number(e.vegetarian),brand_id:null===(l=e.brand)||void 0===l?void 0:l.value,category_id:(null===(a=e.category)||void 0===a?void 0:a.value)||e.category,shop_id:null===e||void 0===e||null===(t=e.shop)||void 0===t?void 0:t.value,kitchen_id:(null===e||void 0===e||null===(i=e.kitchen)||void 0===i?void 0:i.value)||void 0,unit_id:null===(n=e.unit)||void 0===n?void 0:n.value,kcal:W?String(e.kcal):void 0,carbs:W?String(e.carbs):void 0,protein:W?String(e.protein):void 0,fats:W?String(e.fats):void 0,images:V,brand:e.brand,category:e.category,kitchen:(null===e||void 0===e?void 0:e.kitchen)||void 0,shop:e.shop,unit:e.unit,tax:e.tax||0,...Object.assign({},...V.map(((e,l)=>({[`images[${l}]`]:e.name}))))};var d,r,o,c,u;if(w)return O((0,g.nc)({activeMenu:U,data:{...U.data,...e,active:Number(e.active),vegetarian:Number(e.vegetarian),brand_id:null===(d=e.brand)||void 0===d?void 0:d.value,category_id:(null===(r=e.category)||void 0===r?void 0:r.value)||e.category,kitchen_id:(null===e||void 0===e||null===(o=e.kitchen)||void 0===o?void 0:o.value)||void 0,shop_id:null===(c=e.shop)||void 0===c?void 0:c.value,unit_id:null===(u=e.unit)||void 0===u?void 0:u.value,kcal:W?String(e.kcal):void 0,carbs:W?String(e.carbs):void 0,protein:W?String(e.protein):void 0,fats:W?String(e.fats):void 0,tax:e.tax||0,title:{...Object.assign({},...E.map((l=>({[l.locale]:e[`title[${l.locale}]`]}))))},description:{...Object.assign({},...E.map((l=>({[l.locale]:e[`description[${l.locale}]`]}))))},...Object.assign({},...V.map(((e,l)=>({[`images[${l}]`]:e.name}))))}})),void C();let v=!1;if(Object.entries(e).forEach((e=>{var l,a;let[t,i]=e;var n,s,d,r;((t.startsWith("title")||t.startsWith("description"))&&U.data&&U.data[t]!==i&&(v=!0),"category"===t)&&((null===(n=U.data)||void 0===n||null===(s=n.category)||void 0===s?void 0:s.value)!==(null===i||void 0===i?void 0:i.value)&&(v=!0));"brand"===t&&((null===(d=U.data)||void 0===d||null===(r=d.brand)||void 0===r?void 0:r.value)!==(null===i||void 0===i?void 0:i.value)&&(v=!0));((null===V||void 0===V?void 0:V.find((e=>"done"===e.status)))||(null===V||void 0===V?void 0:V.length)!==(null===(l=U.data)||void 0===l||null===(a=l.images)||void 0===a?void 0:a.length))&&(v=!0)})),"edit"===N){const l={...s};if(l.title={...Object.assign({},...E.map((l=>({[l.locale]:e[`title[${l.locale}]`]}))))},l.description={...Object.assign({},...E.map((l=>({[l.locale]:e[`description[${l.locale}]`]}))))},(0,g.nc)({activeMenu:U,data:l}),v&&"0"===(null===D||void 0===D?void 0:D.product_auto_approve))return void function(e){M(`/seller/product/${P}?step=1`,{state:e})}(l);!function(e,l){var a;l.product_id=null===(a=U.data)||void 0===a?void 0:a.product_id,x.Z.update(P,l).then((()=>{O((0,g.nc)({activeMenu:U,data:{...l,...null===U||void 0===U?void 0:U.data}})),C()})).finally((()=>T(!1)))}(0,s)}else!function(e,l){x.Z.create(l).then((l=>{let{data:a}=l;O((0,g.SS)({id:`product-${a.uuid}`,url:`seller/product/${a.uuid}`,name:A("add.product"),data:e,refetch:!1})),M(`/seller/product/${a.uuid}?step=1`,{state:{create:!0}})})).finally((()=>T(!1)))}(e,s)},children:[(0,_.jsxs)(n.Z,{gutter:12,children:[(0,_.jsx)(s.Z,{span:16,children:(0,_.jsxs)(n.Z,{children:[(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(d.Z,{title:A("basic.info"),children:(0,_.jsxs)(n.Z,{children:[(0,_.jsx)(s.Z,{span:24,children:E.map((e=>(0,_.jsx)(i.Z.Item,{label:A("name"),name:`title[${e.locale}]`,rules:[{required:(null===e||void 0===e?void 0:e.locale)===L,message:A("required")},{type:"string",min:2,max:200,message:A("min.2.max.200.chars")}],hidden:e.locale!==L,children:(0,_.jsx)(r.Z,{})},"name"+e.id)))}),(0,_.jsx)(s.Z,{span:24,children:E.map((e=>(0,_.jsx)(i.Z.Item,{label:A("description"),name:`description[${e.locale}]`,rules:[{required:(null===e||void 0===e?void 0:e.locale)===L,message:A("required")},{type:"string",min:2,max:200,message:A("min.2.max.200.chars")}],hidden:e.locale!==L,children:(0,_.jsx)(y.Z,{rows:3})},"description"+e.id)))})]})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(d.Z,{title:A("pricing"),children:(0,_.jsxs)(n.Z,{gutter:12,children:[(0,_.jsx)(s.Z,{span:8,children:(0,_.jsx)(i.Z.Item,{label:A("min.qty"),name:"min_qty",rules:[{required:!0,message:A("required")}],children:(0,_.jsx)(o.Z,{min:0,className:"w-100"})})}),(0,_.jsx)(s.Z,{span:8,children:(0,_.jsx)(i.Z.Item,{label:A("max.qty"),name:"max_qty",rules:[{required:!0,message:A("required")}],children:(0,_.jsx)(o.Z,{min:0,className:"w-100"})})}),(0,_.jsx)(s.Z,{span:8,children:(0,_.jsx)(i.Z.Item,{label:A("tax"),name:"tax",children:(0,_.jsx)(o.Z,{min:0,className:"w-100",addonAfter:"%"})})})]})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(d.Z,{title:A("additions"),children:(0,_.jsxs)(n.Z,{gutter:12,children:[(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:A("active"),name:"active",valuePropName:"checked",children:(0,_.jsx)(c.Z,{})})}),(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:A("vegetarian"),name:"vegetarian",valuePropName:"checked",children:(0,_.jsx)(c.Z,{})})}),(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{label:A("nutrition."+(W?"on":"off")),valuePropName:"checked",children:(0,_.jsx)(c.Z,{checked:W,onChange:e=>R(e)})})})]})})}),W&&(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(d.Z,{title:A("nutritional.value.of.food"),children:(0,_.jsxs)(n.Z,{gutter:12,children:[(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{rules:[{required:!0,message:A("required")}],label:A("kcal"),name:"kcal",children:(0,_.jsx)(o.Z,{className:"w-100"})})}),(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{rules:[{required:!0,message:A("required")}],label:A("carbs"),name:"carbs",children:(0,_.jsx)(o.Z,{className:"w-100"})})}),(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{rules:[{required:!0,message:A("required")}],label:A("protein"),name:"protein",children:(0,_.jsx)(o.Z,{className:"w-100"})})}),(0,_.jsx)(s.Z,{span:6,children:(0,_.jsx)(i.Z.Item,{rules:[{required:!0,message:A("required")}],label:A("fats"),name:"fats",children:(0,_.jsx)(o.Z,{className:"w-100"})})})]})})})]})}),(0,_.jsx)(s.Z,{span:8,children:(0,_.jsxs)(n.Z,{children:[(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(d.Z,{title:A("organization"),children:(0,_.jsxs)(n.Z,{children:[(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(i.Z.Item,{label:A("category"),name:"category",rules:[{required:!0,message:A("required")}],children:(0,_.jsx)(I.o,{fetchOptions:function(e){const l={search:null!==e&&void 0!==e&&e.length?e:void 0,type:"main","statuses[0]":"pending","statuses[1]":"published",active:1,page:1,perPage:20};return p.Z.paginateSelect(l).then((e=>e.data.map((e=>{var l,a,t;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||A("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id,disabled:(null===e||void 0===e||null===(a=e.children)||void 0===a?void 0:a.length)>0,children:null===e||void 0===e||null===(t=e.children)||void 0===t?void 0:t.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||A("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}}))))},refetch:!0,dropdownRender:e=>(0,_.jsxs)(_.Fragment,{children:[e,(0,_.jsx)("div",{className:"p-1",children:(0,_.jsx)(u.Z,{icon:(0,_.jsx)(k.Z,{}),className:"w-100",onClick:J,children:A("add.category")})})]})})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(i.Z.Item,{label:A("kitchen"),name:"kitchen",children:(0,_.jsx)(q._,{allowClear:!1,fetchOptions:e=>{let{search:l,page:a=1}=e;const t={search:null!==l&&void 0!==l&&l.length?l:void 0,page:a,perPage:20,active:1};return S.Z.getAll(t).then((e=>{var l,a,t;return H({...z,kitchen:(null===e||void 0===e||null===(l=e.meta)||void 0===l?void 0:l.current_page)<(null===e||void 0===e||null===(a=e.meta)||void 0===a?void 0:a.last_page)}),null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||(null===e||void 0===e?void 0:e.id)||A("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},hasMore:z.kitchen})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(i.Z.Item,{label:A("brand"),name:"brand",rules:[{required:!1,message:A("required")}],children:(0,_.jsx)(v.h,{fetchOptions:function(e){const l={page:1,perPage:20,search:null!==e&&void 0!==e&&e.length?e:void 0,active:1};return h.Z.getAll(l).then((e=>e.data.map((e=>({label:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.id)||A("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id})))))}})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(i.Z.Item,{label:A("unit"),name:"unit",rules:[{required:!0,message:A("required")}],children:(0,_.jsx)(v.h,{fetchOptions:function(e){const l={perPage:20,page:1,active:1,search:null!==e&&void 0!==e&&e.length?e:void 0};return Z.Z.getAll(l).then((e=>{let{data:l}=e;return function(e){return e.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||(null===e||void 0===e?void 0:e.id)||A("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}(l)}))}})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(i.Z.Item,{label:A("add.quantity.per.click"),name:"interval",rules:[{required:!0,message:A("required")},{type:"number",min:1,message:A("should.be.more.than.1")}],children:(0,_.jsx)(o.Z,{className:"w-100"})})})]})})}),(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(d.Z,{title:A("media"),children:(0,_.jsx)(n.Z,{children:(0,_.jsx)(s.Z,{span:24,children:(0,_.jsx)(i.Z.Item,{name:"images",children:(0,_.jsx)(f.Z,{type:"products",imageList:V,setImageList:G,form:F,multiple:!0})})})})})})]})})]}),(0,_.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:B,children:A("next")})]})}},99444:(e,l,a)=>{a.d(l,{S:()=>t});const t=[{title:"food",content:"First-content"},{title:"food.extras",content:"Second-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]}}]);
//# sourceMappingURL=5953.2ac04a90.chunk.js.map