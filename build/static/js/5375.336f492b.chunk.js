"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5375],{23325:(e,t,n)=>{n.d(t,{_:()=>c});var a=n(72791),l=n(48573),r=n.n(l),i=n(66818),s=n(37083),o=n(80184);const c=e=>{let{fetchOptions:t,debounceTimeout:n=400,hasMore:l,refetchOnFocus:c=!1,...d}=e;const[u,v]=(0,a.useState)(!1),[m,p]=(0,a.useState)([]),[h,f]=(0,a.useState)(!1),[x,y]=(0,a.useState)(null),[Z,b]=(0,a.useState)(1),j=(0,a.useMemo)((()=>r()((e=>{p([]),y(e),v(!0),t({search:e}).then((e=>{p(e),b(2),v(!1)})).finally((()=>f(!1)))}),n)),[t,n,Z]);return(0,o.jsxs)(i.Z,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const n=e.target;h||n.scrollTop+n.offsetHeight!==n.scrollHeight||l&&(f(!0),t({search:x,page:Z}).then((e=>{b((e=>e+1)),p([...m,...e])})).finally((()=>f(!1))))},labelInValue:!0,filterOption:!1,onSearch:j,notFoundContent:u?(0,o.jsx)(s.Z,{size:"small"}):"no results",onFocus:()=>{c?j(""):null!==m&&void 0!==m&&m.length||j("")},...d,children:[m.map(((e,t)=>(0,o.jsx)(i.Z.Option,{value:e.value,children:e.label},t))),h&&(0,o.jsx)(i.Z.Option,{children:(0,o.jsx)(s.Z,{size:"small"})})]})}},87320:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(72791),l=n(50881),r=n(79337),i=n(76770),s=n(12362),o=n(80184);const c=()=>{const e=(0,r.I0)(),{languages:t,defaultLang:n}=(0,r.v9)((e=>e.formLang),r.wU);(0,a.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:n}=t;e((0,i.dc)(n)),e((0,i.mh)(n.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,i.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,o.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},6200:(e,t,n)=>{n.d(t,{h:()=>c});var a=n(72791),l=n(48573),r=n.n(l),i=n(66818),s=n(37083),o=n(80184);const c=e=>{let{fetchOptions:t,debounceTimeout:n=400,onClear:l,...c}=e;const[d,u]=(0,a.useState)(!1),[v,m]=(0,a.useState)([]),p=(0,a.useMemo)((()=>r()((e=>{m([]),u(!0),t(e).then((e=>{m(e),u(!1)}))}),n)),[t,n]);return(0,o.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),l&&l()},notFoundContent:d?(0,o.jsx)(s.Z,{size:"small"}):"no results",...c,options:v,onFocus:()=>{p("")}})}},19557:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(72791),l=n(30394),r=n(83099),i=n(87309),s=n(37083),o=n(79337),c=n(16871),d=n(48030),u=n(33168),v=n(82938),m=n(88959),p=n(80184);const h=e=>{var t,n,h;let{prev:f}=e;const{t:x}=(0,u.$)(),{activeMenu:y}=(0,o.v9)((e=>e.menu),o.wU),{defaultLang:Z,languages:b}=(0,o.v9)((e=>e.formLang),o.wU),j=(0,c.s0)(),g=(0,o.I0)(),[k,C]=(0,a.useState)({}),[w,I]=(0,a.useState)(null),{uuid:q}=(0,c.UO)(),{params:E}=(0,o.v9)((e=>e.addons),o.wU);function O(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=b.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{!function(e){I(!0),v.Z.getById(e).then((e=>{const t={...e.data,...O(e.data),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};C(t)})).finally((()=>I(!1)))}(q)}),[]),w?(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,p.jsx)(s.Z,{size:"large",className:"py-5"})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.Z,{title:x("product.info"),bordered:!0,children:[(0,p.jsx)(l.Z.Item,{label:`${x("title")} (${Z})`,span:3,children:k[`title[${Z}]`]}),(0,p.jsx)(l.Z.Item,{label:`${x("description")} (${Z})`,span:3,children:k[`description[${Z}]`]}),(0,p.jsx)(l.Z.Item,{label:x("shop"),span:1.5,children:null===(t=k.shop)||void 0===t?void 0:t.translation.title}),(0,p.jsx)(l.Z.Item,{label:x("unit"),span:1.5,children:null===(n=k.unit)||void 0===n?void 0:n.translation.title}),(0,p.jsx)(l.Z.Item,{label:x("tax"),children:k.tax}),(0,p.jsx)(l.Z.Item,{label:x("min.quantity"),children:k.min_qty}),(0,p.jsx)(l.Z.Item,{label:x("max.quantity"),children:k.max_qty})]}),null===(h=k.stocks)||void 0===h?void 0:h.map(((e,t)=>e?(0,p.jsxs)(l.Z,{bordered:!0,className:"mt-4",children:[(0,p.jsx)(l.Z.Item,{label:x("price"),span:2,children:e.price}),(0,p.jsx)(l.Z.Item,{label:x("quantity"),span:2,children:e.quantity}),e.extras.map(((e,t)=>{var n,a;return(0,p.jsx)(l.Z.Item,{label:null===e||void 0===e||null===(n=e.group)||void 0===n||null===(a=n.translation)||void 0===a?void 0:a.title,children:null===e||void 0===e?void 0:e.value},"extra"+t)}))]},"desc"+t):"")),(0,p.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,p.jsxs)(r.Z,{wrap:!0,children:[(0,p.jsx)(i.Z,{onClick:f,children:x("prev")}),(0,p.jsx)(i.Z,{type:"primary",onClick:function(){const e={status:void 0,...E},t="catalog/addons";g((0,d.ph)({...y,nextUrl:t})),g((0,m.QA)(e)),j(`/${t}`)},children:x("finish")})]})})]})}},65251:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(72791),l=n(77483),r=n(66106),i=n(30914),s=n(54080),o=n(86005),c=n(38243),d=n(25581),u=n(87309),v=n(6200),m=n(4577),p=n(79337),h=n(82938),f=n(48030),x=n(95573),y=n(16871),Z=n(33168),b=n(66023),j=n(23325),g=n(80184);const k=e=>{let{next:t,action_type:n=""}=e;const{t:k}=(0,Z.$)(),[C]=l.Z.useForm(),w=(0,p.I0)(),{uuid:I}=(0,y.UO)(),q=(0,y.s0)(),[E,O]=(0,a.useState)(null),{activeMenu:P}=(0,p.v9)((e=>e.menu),p.wU),{defaultLang:N,languages:S}=(0,p.v9)((e=>e.formLang),p.wU),[F,$]=(0,a.useState)(!1),[M,_]=(0,a.useState)({unit:!1});(0,a.useEffect)((()=>()=>{const e=C.getFieldsValue(!0);w((0,f.nc)({activeMenu:P,data:{...P.data,...e}}))}),[]);return(0,g.jsxs)(l.Z,{layout:"vertical",form:C,initialValues:{active:!0,...P.data},onFinish:e=>{var a,l;$(!0);const r={...e,active:Number(e.active),shop_id:null===(a=e.shop)||void 0===a?void 0:a.value,unit_id:null===(l=e.unit)||void 0===l?void 0:l.value,unit:void 0,addon:Number(1),shop:void 0,interval:Number(null===e||void 0===e?void 0:e.interval)};"edit"===n?function(e,n){h.Z.update(I,n).then((()=>{w((0,f.nc)({activeMenu:P,data:e})),t()})).catch((e=>O(e.response.data.params))).finally((()=>$(!1)))}(e,r):function(e,t){h.Z.create(t).then((t=>{let{data:n}=t;w((0,f.SS)({id:`product-${n.uuid}`,url:`product/${n.uuid}`,name:k("add.product"),data:e,refetch:!1})),q(`/addon/${n.uuid}?step=1`)})).catch((e=>O(e.response.data.params))).finally((()=>$(!1)))}(e,r)},className:"addon-menu",children:[(0,g.jsxs)(r.Z,{gutter:12,children:[(0,g.jsx)(i.Z,{xs:24,sm:24,md:16,children:(0,g.jsx)(s.Z,{title:k("basic.info"),children:(0,g.jsxs)(r.Z,{gutter:24,children:[(0,g.jsx)(i.Z,{span:24,children:S.map((e=>(0,g.jsx)(l.Z.Item,{label:k("name"),name:`title[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==N?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(k("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(k("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(k("required")))}],hidden:e.locale!==N,children:(0,g.jsx)(o.Z,{})},"name"+e.id)))}),(0,g.jsx)(i.Z,{span:24,children:S.map((e=>(0,g.jsx)(l.Z.Item,{label:k("description"),name:`description[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==N?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(k("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(k("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(k("required")))}],hidden:e.locale!==N,children:(0,g.jsx)(b.Z,{rows:4,span:4})},"description"+e.id)))}),(0,g.jsx)(i.Z,{span:6,children:(0,g.jsx)(l.Z.Item,{label:k("tax"),name:"tax",rules:[{validator:(e,t)=>t||0===t?t&&(t<0||t>100)?Promise.reject(new Error(k("must.be.between.0.and.100"))):Promise.resolve():Promise.reject(new Error(k("required")))}],children:(0,g.jsx)(c.Z,{className:"w-100",addonAfter:"%"})})}),(0,g.jsx)(i.Z,{span:6,children:(0,g.jsx)(l.Z.Item,{label:k("min.qty"),name:"min_qty",rules:[{required:!0,message:k("required")},{type:"number",min:0,message:k("must.be.positive")}],children:(0,g.jsx)(c.Z,{className:"w-100"})})}),(0,g.jsx)(i.Z,{span:6,children:(0,g.jsx)(l.Z.Item,{label:k("max.qty"),name:"max_qty",rules:[{required:!0,message:k("required")},{type:"number",min:0,message:k("must.be.positive")}],children:(0,g.jsx)(c.Z,{className:"w-100"})})}),(0,g.jsx)(i.Z,{span:6,children:(0,g.jsx)(l.Z.Item,{label:k("active"),name:"active",valuePropName:"checked",children:(0,g.jsx)(d.Z,{})})})]})})}),(0,g.jsxs)(i.Z,{xs:24,sm:24,md:8,children:[(0,g.jsx)(s.Z,{title:k("shop/restaurant"),children:(0,g.jsx)(l.Z.Item,{name:"shop",rules:[{required:!0,message:k("required")}],children:(0,g.jsx)(v.h,{fetchOptions:async function(e){const t={search:e};return m.Z.get(t).then((e=>e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id})))))},disabled:"edit"===n})})}),(0,g.jsxs)(s.Z,{title:k("addition"),children:[(0,g.jsx)(l.Z.Item,{label:k("unit"),name:"unit",rules:[{required:!0,message:k("required")}],children:(0,g.jsx)(j._,{style:{width:"100%"},fetchOptions:function(e){let{search:t,page:n=1}=e;const a={search:null!==t&&void 0!==t&&t.length?t:void 0,active:1,page:n};return x.Z.getAll(a).then((e=>{var t,n;return _({...M,unit:(null===e||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.current_page)<(null===e||void 0===e||null===(n=e.meta)||void 0===n?void 0:n.last_page)}),(null===e||void 0===e?void 0:e.data).map((e=>{var t;return{label:(null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title)||k("N/A"),value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},hasMore:M.unit,allowClear:!1})}),(0,g.jsx)(l.Z.Item,{name:"interval",label:k("interval"),rules:[{required:!0,message:k("required")}],children:(0,g.jsx)(c.Z,{className:"w-100",min:0})})]})]})]}),(0,g.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:F,children:k("next")})]})}},43452:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(72791),l=n(77483),r=n(66106),i=n(30914),s=n(38243),o=n(86005),c=n(83099),d=n(87309),u=n(79337),v=n(82938),m=n(33168),p=n(16871),h=n(48030),f=n(80184);const x=e=>{let{prev:t,next:n,current:x}=e;const{t:y}=(0,m.$)(),[Z]=l.Z.useForm(),{uuid:b}=(0,p.UO)(),{activeMenu:j}=(0,u.v9)((e=>e.menu),u.wU),[g,k]=(0,a.useState)(null),C=(0,u.I0)();return(0,a.useEffect)((()=>{var e,t,n,a,l,r;C((0,h.xo)(j)),Z.setFieldsValue({price:null!==(e=j.data)&&void 0!==e&&null!==(t=e.stocks)&&void 0!==t&&t.length?j.data.stocks[0].price:0,quantity:null!==(n=j.data)&&void 0!==n&&null!==(a=n.stocks)&&void 0!==a&&a.length?j.data.stocks[0].quantity:1,sku:null!==(l=j.data)&&void 0!==l&&null!==(r=l.stocks)&&void 0!==r&&r.length?j.data.stocks[0].sku:""})}),[]),(0,f.jsxs)(l.Z,{layout:"vertical",form:Z,onFinish:e=>{k(!0);const t=[{price:null===e||void 0===e?void 0:e.price,quantity:null===e||void 0===e?void 0:e.quantity,sku:(null===e||void 0===e?void 0:e.sku)||""}];v.Z.stocks(b,{extras:t}).then((()=>n())).finally((()=>k(!1)))},children:[(0,f.jsxs)(r.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(l.Z.Item,{label:y("price"),name:"price",rules:[{required:!0,message:y("required")}],children:(0,f.jsx)(s.Z,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,f.jsx)(i.Z,{children:(0,f.jsx)(l.Z.Item,{label:y("quantity"),name:"quantity",rules:[{required:!0,message:y("required")}],children:(0,f.jsx)(s.Z,{min:0,className:"w-100",style:{minWidth:200}})})}),(0,f.jsx)(i.Z,{children:(0,f.jsx)(l.Z.Item,{label:y("sku"),name:"sku",children:(0,f.jsx)(o.Z,{style:{minWidth:200}})})})]}),(0,f.jsxs)(c.Z,{className:"mt-4",children:[(0,f.jsx)(d.Z,{onClick:t,children:y("prev")}),(0,f.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:!!g,children:y("next")})]})]})}},53242:(e,t,n)=>{n.d(t,{S:()=>a});const a=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]},50881:(e,t,n)=>{n.d(t,{ZP:()=>N});var a=n(4942),l=n(87462),r=n(72791),i=n(28083),s=n(81694),o=n.n(s),c=n(88834),d=n(91940),u=n(69077),v=r.createContext(null),m=v.Provider;const p=v;var h=r.createContext(null),f=h.Provider,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},y=function(e,t){var n,s=r.useContext(p),v=r.useContext(h),m=r.useContext(u.E_),f=m.getPrefixCls,y=m.direction,Z=r.useRef(),b=(0,c.sQ)(t,Z),j=(0,r.useContext)(d.aM).isFormItemInput,g=e.prefixCls,k=e.className,C=e.children,w=e.style,I=x(e,["prefixCls","className","children","style"]),q=f("radio",g),E="button"===((null===s||void 0===s?void 0:s.optionType)||v)?"".concat(q,"-button"):q,O=(0,l.Z)({},I);s&&(O.name=s.name,O.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},O.checked=e.value===s.value,O.disabled=e.disabled||s.disabled);var P=o()("".concat(E,"-wrapper"),(n={},(0,a.Z)(n,"".concat(E,"-wrapper-checked"),O.checked),(0,a.Z)(n,"".concat(E,"-wrapper-disabled"),O.disabled),(0,a.Z)(n,"".concat(E,"-wrapper-rtl"),"rtl"===y),(0,a.Z)(n,"".concat(E,"-wrapper-in-form-item"),j),n),k);return r.createElement("label",{className:P,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(i.Z,(0,l.Z)({},O,{type:"radio",prefixCls:E,ref:b})),void 0!==C?r.createElement("span",null,C):null)},Z=r.forwardRef(y);Z.displayName="Radio";const b=Z;var j=n(29439),g=n(75179),k=n(1815),C=n(69019),w=r.forwardRef((function(e,t){var n=r.useContext(u.E_),i=n.getPrefixCls,s=n.direction,c=r.useContext(k.Z),d=(0,g.Z)(e.defaultValue,{value:e.value}),v=(0,j.Z)(d,2),p=v[0],h=v[1];return r.createElement(m,{value:{onChange:function(t){var n=p,a=t.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==n&&l(t)},value:p,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,d=e.prefixCls,u=e.className,v=void 0===u?"":u,m=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,x=e.disabled,y=e.children,Z=e.size,j=e.style,g=e.id,k=e.onMouseEnter,w=e.onMouseLeave,I=i("radio",d),q="".concat(I,"-group"),E=y;m&&m.length>0&&(E=m.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(b,{key:e.toString(),prefixCls:I,disabled:x,value:e,checked:p===e},e):r.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:I,disabled:e.disabled||x,value:e.value,checked:p===e.value,style:e.style},e.label)})));var O=Z||c,P=o()(q,"".concat(q,"-").concat(f),(n={},(0,a.Z)(n,"".concat(q,"-").concat(O),O),(0,a.Z)(n,"".concat(q,"-rtl"),"rtl"===s),n),v);return r.createElement("div",(0,l.Z)({},(0,C.Z)(e),{className:P,style:j,onMouseEnter:k,onMouseLeave:w,id:g,ref:t}),E)}())}));const I=r.memo(w);var q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},E=function(e,t){var n=r.useContext(u.E_).getPrefixCls,a=e.prefixCls,i=q(e,["prefixCls"]),s=n("radio",a);return r.createElement(f,{value:"button"},r.createElement(b,(0,l.Z)({prefixCls:s},i,{type:"radio",ref:t})))};const O=r.forwardRef(E);var P=b;P.Button=O,P.Group=I;const N=P},28083:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(4942),r=n(45987),i=n(1413),s=n(15671),o=n(43144),c=n(60136),d=n(54062),u=n(72791),v=n(81694),m=n.n(v),p=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,i.Z)((0,i.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,o.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,i=t.className,s=t.style,o=t.name,c=t.id,d=t.type,v=t.disabled,p=t.readOnly,h=t.tabIndex,f=t.onClick,x=t.onFocus,y=t.onBlur,Z=t.onKeyDown,b=t.onKeyPress,j=t.onKeyUp,g=t.autoFocus,k=t.value,C=t.required,w=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),I=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),q=this.state.checked,E=m()(n,i,(e={},(0,l.Z)(e,"".concat(n,"-checked"),q),(0,l.Z)(e,"".concat(n,"-disabled"),v),e));return u.createElement("span",{className:E,style:s},u.createElement("input",(0,a.Z)({name:o,id:c,type:d,required:C,readOnly:p,disabled:v,tabIndex:h,className:"".concat(n,"-input"),checked:!!q,onClick:f,onFocus:x,onBlur:y,onKeyUp:j,onKeyDown:Z,onKeyPress:b,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:k},I)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,i.Z)((0,i.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=p}}]);
//# sourceMappingURL=5375.336f492b.chunk.js.map