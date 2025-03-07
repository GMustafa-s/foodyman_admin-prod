"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8645],{73673:(l,e,d)=>{d.d(e,{Z:()=>A});var i=d(77483),n=d(54080),t=d(20063),o=d(83099),a=d(87309),s=d(72791),u=d(16871),v=d(82938),r=d(67515),c=d(77945),h=d(79337),x=d(48030),m=d(17076),p=d(46926),j=d(33168),k=d(47846);var Z=d(30577),f=d(66106),y=d(30914),g=d(86005),b=d(38243),w=d(6200),_=d(49496),q=d(80184);const I=(l,e,d)=>l.map((function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...l,[e]:d}})),C=l=>{let{form:e,fetchAddonOptions:d}=l;const{t:n}=(0,j.$)(),{defaultCurrency:t}=(0,h.v9)((l=>l.currency),h.wU),o=(l,d)=>{const i=l?(0,_.Z)(6):d,{stocks:n}=e.getFieldsValue();e.setFieldsValue({all_sku:i,stocks:I(n,"sku",i)})};return(0,q.jsxs)(f.Z,{gutter:12,children:[(0,q.jsx)(y.Z,{style:{width:200},children:(0,q.jsx)(i.Z.Item,{label:n("set.all.skus"),name:"all_sku",children:(0,q.jsx)(g.Z,{onChange:l=>o(!1,l.target.value)})})}),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:" ",children:(0,q.jsx)(a.Z,{onClick:o,children:n("generate.sku")})})}),(0,q.jsx)(y.Z,{style:{width:200},children:(0,q.jsx)(i.Z.Item,{label:n("set.all.quantities"),name:"all_quantity",children:(0,q.jsx)(b.Z,{onChange:l=>{const{stocks:d}=e.getFieldsValue();e.setFieldsValue({stocks:I(d,"quantity",l)})},className:"w-100"})})}),(0,q.jsx)(y.Z,{style:{width:200},children:(0,q.jsx)(i.Z.Item,{label:`${n("set.all.prices")} (${null===t||void 0===t?void 0:t.symbol})`,name:"all_price",children:(0,q.jsx)(b.Z,{onChange:l=>{const{stocks:d}=e.getFieldsValue();e.setFieldsValue({stocks:I(d,"price",l)})},className:"w-100"})})}),(0,q.jsx)(y.Z,{style:{width:200},children:(0,q.jsx)(i.Z.Item,{label:n("set.all.addons"),name:"all_addon",children:(0,q.jsx)(w.h,{mode:"multiple",style:{minWidth:"300px"},fetchOptions:d,allowClear:!0,onChange:l=>{const{stocks:d}=e.getFieldsValue();e.setFieldsValue({stocks:I(d,"addons",l)})}})})})]})};var F=d(66818),V=d(82622);const $=l=>{let{fetchAddonOptions:e,form:d}=l;const n=(0,h.I0)(),{t:t}=(0,j.$)(),{activeMenu:o}=(0,h.v9)((l=>l.menu),h.wU),{defaultCurrency:s}=(0,h.v9)((l=>l.currency),h.wU);return(0,q.jsx)(i.Z.List,{name:"stocks",children:(l,u)=>{let{remove:v}=u;return(0,q.jsx)("div",{children:l.map(((l,u)=>{var r,c,h,x,m,j;return(0,q.jsxs)(f.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},hidden:!(null!==(r=o.data)&&void 0!==r&&null!==(c=r.extras)&&void 0!==c&&c.length)&&l.key,children:[null===(h=o.data)||void 0===h||null===(x=h.extras)||void 0===x?void 0:x.map(((l,e)=>(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:null===l||void 0===l?void 0:l.label,name:[u,`extras[${e}]`],rules:[{required:!0,message:t("required")}],children:(0,q.jsx)(F.Z,{disabled:!0,className:"w-100",style:{minWidth:200}})})},"extra"+l.value))),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:t("addons"),name:[u,"addons"],rules:[{required:!1,message:t("required")}],children:(0,q.jsx)(w.h,{mode:"multiple",style:{minWidth:"300px",maxWidth:"300px"},fetchOptions:e,allowClear:!0})})}),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:t("sku"),name:[u,"sku"],children:(0,q.jsx)(g.Z,{className:"w-100",style:{minWidth:200}})})}),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:t("quantity"),name:[u,"quantity"],rules:[{required:!0,message:t("required")}],children:(0,q.jsx)(b.Z,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,q.jsxs)(y.Z,{children:[(0,q.jsx)(i.Z.Item,{label:`${t("price")} (${null===s||void 0===s?void 0:s.symbol})`,name:[u,"price"],rules:[{required:!0,message:t("requried")}],children:(0,q.jsx)(b.Z,{min:0,className:"w-100",style:{minWidth:200}})}),(0,q.jsx)(i.Z.Item,{hidden:!0,label:t("id"),name:[u,"stock_id"],children:(0,q.jsx)(b.Z,{})})]}),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:t("tax"),name:[u,"tax"],children:(0,q.jsx)(b.Z,{className:"w-100",disabled:!0,style:{minWidth:200},addonAfter:"%"})})}),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{noStyle:!0,shouldUpdate:(e,d)=>{var i,n,t,o;return(null===e||void 0===e||null===(i=e.stocks)||void 0===i||null===(n=i[l.name])||void 0===n?void 0:n.price)!==(null===d||void 0===d||null===(t=d.stocks)||void 0===t||null===(o=t[l.name])||void 0===o?void 0:o.price)},children:e=>{let{getFieldValue:d}=e;const n=d(["stocks",l.name,"tax"])||0,o=d(["stocks",l.name,"price"]),a=0===n?o:o*n/100+o;return(0,q.jsx)(i.Z.Item,{label:`${t("total.price")} (${null===s||void 0===s?void 0:s.symbol})`,children:(0,q.jsx)(b.Z,{min:1,disabled:!0,value:a,className:"w-100",style:{minWidth:200}})})}})}),!(null===(m=o.data)||void 0===m||null===(j=m.extras)||void 0===j||!j.length)&&(0,q.jsx)(y.Z,{children:(0,q.jsx)(a.Z,{type:"primary",className:"mt-2",danger:!0,icon:(0,q.jsx)(V.Z,{}),onClick:()=>(l=>{var e,i;let{remove:t,field:o}=l;const a=null===(e=d.getFieldsValue())||void 0===e||null===(i=e.stocks)||void 0===i?void 0:i[null===o||void 0===o?void 0:o.name];n((0,p.Pt)(a)),t(o.name)})({remove:v,field:l})})})]},l.key)}))})}})},O=l=>{let{form:e,extras:d}=l;const t=(0,h.I0)(),{t:o}=(0,j.$)(),{filters:s,stocks:u,filteredStocks:v}=(0,h.v9)((l=>l.product.form),h.wU),r=()=>{e.setFieldsValue({all_sku:null,all_quantity:null,all_price:null,all_addon:[]})},c=function(){var l;let d=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const i=null===(l=e.getFieldsValue())||void 0===l?void 0:l.stocks;(0,h.dC)((()=>{null!==i&&void 0!==i&&i.length&&d&&t((0,p.qc)(i)),t((0,p.aw)()),t((0,p.zB)())})),r()};return(0,m.Z)((()=>{var l;if(null===(l=Object.values(s))||void 0===l||!l.length)return;const e=null===u||void 0===u?void 0:u.filter((l=>{var e;return null===(e=Object.values(s))||void 0===e?void 0:e.every((e=>{var d;return null===l||void 0===l||null===(d=l.extras)||void 0===d?void 0:d.find((l=>(null===l||void 0===l?void 0:l.value)===(null===e||void 0===e?void 0:e.value)))}))}));t((0,p.nW)(e))}),[s,u]),(0,m.Z)((()=>{var l;e.setFieldsValue({stocks:null!==(l=Object.values(s))&&void 0!==l&&l.length?v:u})}),[v]),(0,q.jsx)(n.Z,{children:(0,q.jsxs)(f.Z,{gutter:12,children:[null===d||void 0===d?void 0:d.map((l=>{var d;return(0,q.jsx)(y.Z,{style:{width:250},children:(0,q.jsx)(i.Z.Item,{label:null===l||void 0===l?void 0:l.label,children:(0,q.jsx)(F.Z,{allowClear:!0,labelInValue:!0,options:null===l||void 0===l?void 0:l.values,onChange:d=>((l,d)=>{var i,n;const o=null===(i=e.getFieldsValue())||void 0===i?void 0:i.stocks;var a;if(null!==o&&void 0!==o&&o.length&&t((0,p.qc)(o)),!d)return 1===(null===(a=Object.values(s))||void 0===a?void 0:a.length)?void c(!1):void t((0,p.kh)(null===l||void 0===l?void 0:l.value));const u=null===l||void 0===l||null===(n=l.values)||void 0===n?void 0:n.find((l=>(null===l||void 0===l?void 0:l.value)===(null===d||void 0===d?void 0:d.value)));(0,h.dC)((()=>{t((0,p.rr)({[null===l||void 0===l?void 0:l.value]:u}))})),r()})(l,d),value:null===s||void 0===s||null===(d=s[null===l||void 0===l?void 0:l.value])||void 0===d?void 0:d.value})})},null===l||void 0===l?void 0:l.value)})),(0,q.jsx)(y.Z,{children:(0,q.jsx)(i.Z.Item,{label:" ",children:(0,q.jsx)(a.Z,{onClick:c,children:o("clear.filter")})})})]})})},N=l=>"seller"===l?r.Z:v.Z,A=l=>{var e,d,v,r,f,y;let{next:g,prev:b,isRequest:w,userRole:_="admin"}=l;const I=(0,h.I0)(),{t:F}=(0,j.$)(),{uuid:V}=(0,u.UO)(),[A]=i.Z.useForm(),{activeMenu:W}=(0,h.v9)((l=>l.menu),h.wU),{stocks:U,filteredStocks:M,filters:R,deletedIds:S}=(0,h.v9)((l=>l.product.form),h.wU),[B,E]=(0,s.useState)(!1),[K,z]=(0,s.useState)(!1),P=()=>{E(!0),N(_).getById(V).then((l=>{var e,d,i;const n=(0,c.Z)(null===W||void 0===W||null===(e=W.data.extras)||void 0===e?void 0:e.map((l=>l.values||[]))),t=n.map(((e,d)=>{var i,n;if(e.every((l=>"undefined"!==typeof l.stock_id))){var t;const i=l.data.stocks.find((l=>l.extras.every((l=>e.some((e=>e.value===l.id)))))),n=[];return null===i||void 0===i||null===(t=i.addons)||void 0===t||t.forEach((l=>{var e,d,i;l.product&&n.push({label:(null===l||void 0===l||null===(e=l.product)||void 0===e||null===(d=e.translation)||void 0===d?void 0:d.title)||(null===l||void 0===l?void 0:l.label),value:(null===l||void 0===l||null===(i=l.product)||void 0===i?void 0:i.id)||(null===l||void 0===l?void 0:l.value)})})),{price:(null===i||void 0===i?void 0:i.price)||0,quantity:(null===i||void 0===i?void 0:i.quantity)||0,sku:null===i||void 0===i?void 0:i.sku,stock_id:null===i||void 0===i?void 0:i.id,tax:(null===W||void 0===W?void 0:W.data.tax)||0,extras:e,addons:n,fieldKey:d,...Object.assign({},...e.map(((l,e)=>({[`extras[${e}]`]:{label:l.label,value:l.value}}))))}}return{price:0,quantity:0,sku:null===W||void 0===W||null===(i=W.data)||void 0===i?void 0:i.sku,tax:(null===(n=W.data)||void 0===n?void 0:n.tax)||0,extras:e,fieldKey:d,addons:[],...Object.assign({},...e.map(((l,e)=>({[`extras[${e}]`]:{label:l.label,value:l.value}}))))}}));let o=[];if(0===n.length&&0!==(null===(d=l.data.stocks)||void 0===d?void 0:d.length)){var a,s,u;const e=null===(a=l.data.stocks)||void 0===a?void 0:a.at(0),d=[];null===e||void 0===e||null===(s=e.addons)||void 0===s||s.forEach((l=>{var e,i,n;l.product&&d.push({label:(null===l||void 0===l||null===(e=l.product)||void 0===e||null===(i=e.translation)||void 0===i?void 0:i.title)||(null===l||void 0===l?void 0:l.label),value:(null===l||void 0===l||null===(n=l.product)||void 0===n?void 0:n.id)||(null===l||void 0===l?void 0:l.value)})})),o=[{price:(null===e||void 0===e?void 0:e.price)||0,quantity:(null===e||void 0===e?void 0:e.quantity)||0,sku:null===e||void 0===e?void 0:e.sku,tax:(null===(u=W.data)||void 0===u?void 0:u.tax)||0,addons:e?d:[]}]}var v,r;0===n.length&&0===(null===(i=l.data.stocks)||void 0===i?void 0:i.length)&&(o=[{price:void 0,quantity:0,sku:null===W||void 0===W||null===(v=W.data)||void 0===v?void 0:v.sku,tax:(null===(r=W.data)||void 0===r?void 0:r.tax)||0,addons:[]}]);const x=o.concat(t);(0,h.dC)((()=>{I((0,p.e9)(x)),I((0,p.y5)()),I((0,p.aw)()),I((0,p.zB)())})),A.setFieldsValue({stocks:x})})).finally((()=>{E(!1)}))},L=async l=>{var e;const d={search:l,addon:1,shop_id:null===W||void 0===W||null===(e=W.data)||void 0===e?void 0:e.shop_id,"statuses[0]":"published","statuses[1]":"pending",active:1},i=await N(_).getAll(d).then((l=>l.data.map((l=>{var e;return{label:null===l||void 0===l||null===(e=l.translation)||void 0===e?void 0:e.title,value:null===l||void 0===l?void 0:l.id}}))))||[];return null!==i&&void 0!==i&&i.length?[{label:F("all.addons"),value:"all",key:"all"},...i]:[]};return(0,s.useEffect)((()=>{P(),I((0,x.A_)(W))}),[V]),(0,m.Z)((()=>{W.refetch&&(P(),I((0,x.A_)(W)))}),[W.refetch]),(0,q.jsxs)(i.Z,{onFinish:l=>{var e,d;const{stocks:i}=l,n=null!==U&&void 0!==U&&U.some((l=>{var e;return!(null===l||void 0===l||null===(e=l.extras)||void 0===e||!e.length)}))?((l,e,d)=>{var i;return null===e||void 0===e||null===(i=e.map((e=>(null===l||void 0===l?void 0:l.find((l=>{var d;return null===e||void 0===e||null===(d=e.extras)||void 0===d?void 0:d.every((e=>{var d;return null===l||void 0===l||null===(d=l.extras)||void 0===d?void 0:d.find((l=>(null===l||void 0===l?void 0:l.value)===(null===e||void 0===e?void 0:e.value)))}))})))||e)))||void 0===i?void 0:i.filter((l=>!(null!==d&&void 0!==d&&d.includes(null===l||void 0===l?void 0:l.stock_id))))})(i,U,S):i;let t;var o,a,s,u,v,r,c;null!==(e=W.data)&&void 0!==e&&null!==(d=e.extras)&&void 0!==d&&d.length?t=n.map((l=>{var e,d,i,n;return{price:null===l||void 0===l?void 0:l.price,quantity:null===l||void 0===l?void 0:l.quantity,sku:null===l||void 0===l?void 0:l.sku,ids:w?null===(e=W.data)||void 0===e?void 0:e.extras.map(((e,d)=>l[`extras[${d}]`])):null===(d=W.data)||void 0===d?void 0:d.extras.map(((e,d)=>{var i;return null===l||void 0===l||null===(i=l[`extras[${d}]`])||void 0===i?void 0:i.value})),addons:null!==l&&void 0!==l&&l.addons?w?null===l||void 0===l||null===(i=l.addons)||void 0===i?void 0:i.map((l=>l)):null===l||void 0===l||null===(n=l.addons)||void 0===n?void 0:n.map((l=>null===l||void 0===l?void 0:l.value)):[],stock_id:null===l||void 0===l?void 0:l.stock_id}})):t=[{price:null===n||void 0===n||null===(o=n[0])||void 0===o?void 0:o.price,quantity:null===n||void 0===n||null===(a=n[0])||void 0===a?void 0:a.quantity,addons:null!==n&&void 0!==n&&null!==(s=n[0])&&void 0!==s&&s.addons?w?null===n||void 0===n||null===(u=n[0])||void 0===u?void 0:u.addons.map((l=>l)):null===n||void 0===n||null===(v=n[0])||void 0===v?void 0:v.addons.map((l=>null===l||void 0===l?void 0:l.value)):[],stock_id:null===n||void 0===n||null===(r=n[0])||void 0===r?void 0:r.stock_id,sku:null===n||void 0===n||null===(c=n[0])||void 0===c?void 0:c.sku,ids:[]}];if(w)return I((0,x.nc)({activeMenu:W,data:{...W.data,stocks:t,delete_ids:S}})),void g();z(!0),N(_).stocks(V,{extras:t,delete_ids:S}).then((l=>{(0,h.dC)((()=>{var e;const d=null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.stocks,i=null===d||void 0===d?void 0:d.flatMap((l=>l.extras)),n=i.map((l=>{var e;return{...null===l||void 0===l?void 0:l.value,stock_id:null===l||void 0===l?void 0:l.stock_id,group_type:null===l||void 0===l||null===(e=l.group)||void 0===e?void 0:e.type}})),o=null===i||void 0===i?void 0:i.find((l=>"color"===l.group.type));I((0,x.KM)({...W,data:{...W.data,newExtras:[{group:null===o||void 0===o?void 0:o.group,values:n}],stocks:t,delete_ids:S},refetch:!0})),I((0,p.aw)()),I((0,p.zB)()),I((0,p.dY)()),I((0,p.y5)())})),Z.Am.success(F("successfully.updated")),g()})).finally((()=>z(!1)))},form:A,layout:"vertical",children:[!(null===(e=W.data)||void 0===e||null===(d=e.extras)||void 0===d||!d.length)&&(0,q.jsx)(n.Z,{children:(0,q.jsx)(C,{form:A,fetchAddonOptions:L})}),!(null===(v=W.data)||void 0===v||null===(r=v.extras)||void 0===r||!r.length)&&(0,q.jsx)(O,{extras:null===(f=W.data)||void 0===f?void 0:f.extras,form:A}),(0,q.jsx)(n.Z,{loading:B,children:(0,q.jsx)(t.Z,{defaultActiveKey:["stocks"],children:(0,q.jsx)(t.Z.Panel,{header:F("stocks"),children:null===(y=Object.values(R))||void 0===y||!y.length||null!==M&&void 0!==M&&M.length?(0,q.jsx)($,{fetchAddonOptions:L,form:A}):(0,q.jsx)(k.Z,{})},"stocks")})}),(0,q.jsx)(n.Z,{children:(0,q.jsxs)(o.Z,{children:[(0,q.jsx)(a.Z,{onClick:b,children:F("prev")}),(0,q.jsx)(a.Z,{type:"primary",htmlType:"submit",loading:K,children:F("next")})]})})]})}},47846:(l,e,d)=>{d.d(e,{Z:()=>u});d(72791);var i=d(33168),n=d(1760);const t=d.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",o=d.p+"static/media/noresult.ac4af107751f94856a9c.riv",a=d.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var s=d(80184);const u=function(l){let{id:e="noresult",text:d=""}=l;const{t:u}=(0,i.$)(),v={src:{noproductsfound:t,noresult:o,nosell:a}[e],artboard:"New Artboard",autoplay:!0},{RiveComponent:r}=(0,n.useRive)(v);return(0,s.jsxs)("div",{className:"animation-canvas",children:[(0,s.jsx)("div",{style:{width:"100%",height:200},children:(0,s.jsx)(r,{})}),(0,s.jsx)("div",{className:"text text-center",children:u(d)})]})}},28712:(l,e,d)=>{d.d(e,{R:()=>i});const i=function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let d="";for(let i=0;i<l;i++){d+=e[Math.floor(Math.random()*e.length)]}return d}}}]);
//# sourceMappingURL=8645.d17cdb26.chunk.js.map