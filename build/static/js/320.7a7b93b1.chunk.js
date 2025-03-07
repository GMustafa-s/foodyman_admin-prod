"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[320],{23325:(e,t,n)=>{n.d(t,{_:()=>c});var a=n(72791),l=n(48573),r=n.n(l),s=n(66818),i=n(37083),o=n(80184);const c=e=>{let{fetchOptions:t,debounceTimeout:n=400,hasMore:l,refetchOnFocus:c=!1,...d}=e;const[u,m]=(0,a.useState)(!1),[v,p]=(0,a.useState)([]),[h,f]=(0,a.useState)(!1),[x,y]=(0,a.useState)(null),[Z,b]=(0,a.useState)(1),g=(0,a.useMemo)((()=>r()((e=>{p([]),y(e),m(!0),t({search:e}).then((e=>{p(e),b(2),m(!1)})).finally((()=>f(!1)))}),n)),[t,n,Z]);return(0,o.jsxs)(s.Z,{showSearch:!0,allowClear:!0,onPopupScroll:async e=>{const n=e.target;h||n.scrollTop+n.offsetHeight!==n.scrollHeight||l&&(f(!0),t({search:x,page:Z}).then((e=>{b((e=>e+1)),p([...v,...e])})).finally((()=>f(!1))))},labelInValue:!0,filterOption:!1,onSearch:g,notFoundContent:u?(0,o.jsx)(i.Z,{size:"small"}):"no results",onFocus:()=>{c?g(""):null!==v&&void 0!==v&&v.length||g("")},...d,children:[v.map(((e,t)=>(0,o.jsx)(s.Z.Option,{value:e.value,children:e.label},t))),h&&(0,o.jsx)(s.Z.Option,{children:(0,o.jsx)(i.Z,{size:"small"})})]})}},87320:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(72791),l=n(50881),r=n(79337),s=n(76770),i=n(12362),o=n(80184);const c=()=>{const e=(0,r.I0)(),{languages:t,defaultLang:n}=(0,r.v9)((e=>e.formLang),r.wU);(0,a.useEffect)((()=>{i.Z.getAllActive().then((t=>{let{data:n}=t;e((0,s.dc)(n)),e((0,s.mh)(n.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,s.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,o.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},19558:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(46485);const l={getAll:e=>a.Z.get("dashboard/seller/units/paginate",{params:e}),getById:(e,t)=>a.Z.get(`dashboard/seller/units/${e}`,{params:t})}},94817:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(72791),l=n(30394),r=n(83099),s=n(87309),i=n(37083),o=n(79337),c=n(16871),d=n(48030),u=n(33168),m=n(67515),v=n(88959),p=n(80184);const h=e=>{var t,n,h;let{prev:f}=e;const{t:x}=(0,u.$)(),{activeMenu:y}=(0,o.v9)((e=>e.menu),o.wU),{defaultLang:Z,languages:b}=(0,o.v9)((e=>e.formLang),o.wU),g=(0,c.s0)(),j=(0,o.I0)(),[k,C]=(0,a.useState)({}),[w,I]=(0,a.useState)(null),{uuid:q}=(0,c.UO)(),{params:E}=(0,o.v9)((e=>e.addons),o.wU);function O(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,n=b.map((e=>{var n,a;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{!function(e){I(!0),m.Z.getById(e).then((e=>{const t={...e.data,...O(e.data),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};C(t)})).finally((()=>I(!1)))}(q)}),[]),w?(0,p.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,p.jsx)(i.Z,{size:"large",className:"py-5"})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.Z,{title:x("product.info"),bordered:!0,children:[(0,p.jsx)(l.Z.Item,{label:`${x("title")} (${Z})`,span:3,children:k[`title[${Z}]`]}),(0,p.jsx)(l.Z.Item,{label:`${x("description")} (${Z})`,span:3,children:k[`description[${Z}]`]}),(0,p.jsx)(l.Z.Item,{label:x("shop"),span:1.5,children:null===(t=k.shop)||void 0===t?void 0:t.translation.title}),(0,p.jsx)(l.Z.Item,{label:x("unit"),span:1.5,children:null===(n=k.unit)||void 0===n?void 0:n.translation.title}),(0,p.jsx)(l.Z.Item,{label:x("tax"),children:k.tax}),(0,p.jsx)(l.Z.Item,{label:x("min.quantity"),children:k.min_qty}),(0,p.jsx)(l.Z.Item,{label:x("max.quantity"),children:k.max_qty})]}),null===(h=k.stocks)||void 0===h?void 0:h.map(((e,t)=>e?(0,p.jsxs)(l.Z,{bordered:!0,className:"mt-4",children:[(0,p.jsx)(l.Z.Item,{label:x("price"),span:2,children:e.price}),(0,p.jsx)(l.Z.Item,{label:x("quantity"),span:2,children:e.quantity}),e.extras.map(((e,t)=>{var n,a;return(0,p.jsx)(l.Z.Item,{label:null===e||void 0===e||null===(n=e.group)||void 0===n||null===(a=n.translation)||void 0===a?void 0:a.title,children:null===e||void 0===e?void 0:e.value},"extra"+t)}))]},"desc"+t):"")),(0,p.jsx)("div",{className:"d-flex justify-content-end mt-4",children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(s.Z,{onClick:f,children:x("prev")}),(0,p.jsx)(s.Z,{type:"primary",onClick:function(){const e={...E},t="seller/addons";g(`/${t}`),j((0,d.ph)({...y,nextUrl:t})),j((0,v.I4)(e)),j((0,d.A_)(y))},children:x("finish")})]})})]})}},63530:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(72791),l=n(77483),r=n(66106),s=n(30914),i=n(54080),o=n(86005),c=n(38243),d=n(25581),u=n(87309),m=n(79337),v=n(67515),p=n(48030),h=n(16871),f=n(33168),x=n(19558),y=n(66023),Z=n(23325),b=n(80184);const g=e=>{let{next:t,action_type:n=""}=e;const{t:g}=(0,f.$)(),[j]=l.Z.useForm(),k=(0,m.I0)(),{uuid:C}=(0,h.UO)(),w=(0,h.s0)(),[I,q]=(0,a.useState)(null),{myShop:E}=(0,m.v9)((e=>e.myShop),m.wU),{activeMenu:O}=(0,m.v9)((e=>e.menu),m.wU),{defaultLang:P,languages:N}=(0,m.v9)((e=>e.formLang),m.wU),[S,F]=(0,a.useState)(!1),[$,M]=(0,a.useState)({unit:!1});(0,a.useEffect)((()=>()=>{const e=j.getFieldsValue(!0);k((0,p.nc)({activeMenu:O,data:{...O.data,...e}}))}),[]);return(0,b.jsxs)(l.Z,{layout:"vertical",form:j,initialValues:{active:!0,...O.data},onFinish:e=>{var a;F(!0);const l={...e,active:Number(e.active),shop_id:E.id,unit_id:null===(a=e.unit)||void 0===a?void 0:a.value,shop:void 0,addon:Number(1),interval:Number(null===e||void 0===e?void 0:e.interval)};"edit"===n?function(e,n){v.Z.update(C,n).then((()=>{k((0,p.nc)({activeMenu:O,data:e})),t()})).catch((e=>q(e.response.data.params))).finally((()=>F(!1)))}(e,l):function(e,t){v.Z.create(t).then((t=>{let{data:n}=t;k((0,p.SS)({id:`addons-${n.uuid}`,url:`seller/addon/${n.uuid}`,name:g("add.addons"),data:e,refetch:!1})),w(`/seller/addon/${n.uuid}?step=1`)})).catch((e=>q(e.response.data.params))).finally((()=>F(!1)))}(e,l)},className:"addon-menu",children:[(0,b.jsxs)(r.Z,{gutter:12,children:[(0,b.jsxs)(s.Z,{xs:24,sm:24,md:16,children:[(0,b.jsxs)(i.Z,{title:g("basic.info"),children:[N.map((e=>(0,b.jsx)(l.Z.Item,{label:g("name"),name:`title[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==P?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(g("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(g("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(g("required")))}],hidden:e.locale!==P,children:(0,b.jsx)(o.Z,{})},"name"+e.id))),N.map((e=>(0,b.jsx)(l.Z.Item,{label:g("description"),name:`description[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==P?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(g("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(g("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(g("required")))}],hidden:e.locale!==P,children:(0,b.jsx)(y.Z,{rows:4,span:4})},"description"+e.id)))]}),(0,b.jsx)(i.Z,{title:g("price"),children:(0,b.jsxs)(r.Z,{gutter:12,children:[(0,b.jsx)(s.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:g("min.qty"),name:"min_qty",rules:[{required:!0,message:g("required")},{type:"number",min:0,message:g("must.be.positive")}],children:(0,b.jsx)(c.Z,{className:"w-100"})})}),(0,b.jsx)(s.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:g("max.qty"),name:"max_qty",rules:[{required:!0,message:g("required")},{type:"number",min:0,message:g("must.be.positive")}],children:(0,b.jsx)(c.Z,{className:"w-100"})})}),(0,b.jsx)(s.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:g("tax"),name:"tax",rules:[{required:!0,message:g("required")},{type:"number",min:0,max:100,message:g("must.be.between.0.and.100")}],children:(0,b.jsx)(c.Z,{className:"w-100",addonAfter:"%"})})}),(0,b.jsx)(s.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:g("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(d.Z,{})})})]})})]}),(0,b.jsx)(s.Z,{xs:24,sm:24,md:8,children:(0,b.jsxs)(i.Z,{title:g("addition"),children:[(0,b.jsx)(l.Z.Item,{label:g("unit"),name:"unit",rules:[{required:!0,message:g("required")}],children:(0,b.jsx)(Z._,{style:{width:"100%"},fetchOptions:function(e){let{search:t,page:n=1}=e;const a={search:null!==t&&void 0!==t&&t.length?t:void 0,active:1,page:n};return x.Z.getAll(a).then((e=>{var t,n;return M({...$,unit:(null===e||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.current_page)<(null===e||void 0===e||null===(n=e.meta)||void 0===n?void 0:n.last_page)}),(null===e||void 0===e?void 0:e.data).map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},hasMore:$.unit,allowClear:!1})}),(0,b.jsx)(l.Z.Item,{name:"interval",label:g("interval"),rules:[{required:!0,message:g("required")}],children:(0,b.jsx)(c.Z,{className:"w-100",min:0})})]})})]}),(0,b.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:S,children:g("next")})]})}},25433:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(72791),l=n(77483),r=n(66106),s=n(30914),i=n(38243),o=n(86005),c=n(83099),d=n(87309),u=n(79337),m=n(67515),v=n(33168),p=n(16871),h=n(48030),f=n(80184);const x=e=>{let{prev:t,next:n,current:x}=e;const{t:y}=(0,v.$)(),[Z]=l.Z.useForm(),{uuid:b}=(0,p.UO)(),{activeMenu:g}=(0,u.v9)((e=>e.menu),u.wU),[j,k]=(0,a.useState)(null),C=(0,u.I0)();return(0,a.useEffect)((()=>{var e,t,n,a,l,r,s,i;C((0,h.xo)(g)),Z.setFieldsValue({price:null!==(e=g.data)&&void 0!==e&&null!==(t=e.stocks)&&void 0!==t&&t.length&&null!==(n=g.data.stocks[0].price)&&void 0!==n?n:0,quantity:null!==(a=g.data)&&void 0!==a&&null!==(l=a.stocks)&&void 0!==l&&l.length?null!==(r=g.data.stocks[0].quantity)&&void 0!==r?r:0:1,sku:null!==(s=g.data)&&void 0!==s&&null!==(i=s.stocks)&&void 0!==i&&i.length?g.data.stocks[0].sku:""})}),[]),(0,f.jsxs)(l.Z,{layout:"vertical",form:Z,onFinish:e=>{let t;k(!0),t=[{price:null===e||void 0===e?void 0:e.price,quantity:null===e||void 0===e?void 0:e.quantity,sku:(null===e||void 0===e?void 0:e.sku)||""}],m.Z.stocks(b,{extras:t}).then((()=>n())).finally((()=>k(!1)))},children:[(0,f.jsxs)(r.Z,{gutter:12,align:"middle",style:{flexWrap:"nowrap",overflowX:"auto"},children:[(0,f.jsx)(s.Z,{children:(0,f.jsx)(l.Z.Item,{label:y("price"),name:"price",rules:[{required:!0,message:y("required")},{type:"number",min:0,message:y("must.be.at.least.0")}],children:(0,f.jsx)(i.Z,{className:"w-100",style:{minWidth:200}})})}),(0,f.jsx)(s.Z,{children:(0,f.jsx)(l.Z.Item,{label:y("quantity"),name:"quantity",rules:[{required:!0,message:y("required")},{type:"number",min:0,message:y("must.be.at.least.0")}],children:(0,f.jsx)(i.Z,{className:"w-100",style:{minWidth:200}})})}),(0,f.jsx)(s.Z,{children:(0,f.jsx)(l.Z.Item,{label:y("sku"),name:"sku",children:(0,f.jsx)(o.Z,{style:{minWidth:200}})})})]}),(0,f.jsxs)(c.Z,{className:"mt-4",children:[(0,f.jsx)(d.Z,{onClick:t,children:y("prev")}),(0,f.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:!!j,children:y("next")})]})]})}},75386:(e,t,n)=>{n.d(t,{S:()=>a});const a=[{title:"addons",content:"First-content"},{title:"stocks",content:"Third-content"},{title:"finish",content:"Finish-content"}]},50881:(e,t,n)=>{n.d(t,{ZP:()=>N});var a=n(4942),l=n(87462),r=n(72791),s=n(28083),i=n(81694),o=n.n(i),c=n(88834),d=n(91940),u=n(69077),m=r.createContext(null),v=m.Provider;const p=m;var h=r.createContext(null),f=h.Provider,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},y=function(e,t){var n,i=r.useContext(p),m=r.useContext(h),v=r.useContext(u.E_),f=v.getPrefixCls,y=v.direction,Z=r.useRef(),b=(0,c.sQ)(t,Z),g=(0,r.useContext)(d.aM).isFormItemInput,j=e.prefixCls,k=e.className,C=e.children,w=e.style,I=x(e,["prefixCls","className","children","style"]),q=f("radio",j),E="button"===((null===i||void 0===i?void 0:i.optionType)||m)?"".concat(q,"-button"):q,O=(0,l.Z)({},I);i&&(O.name=i.name,O.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,t)},O.checked=e.value===i.value,O.disabled=e.disabled||i.disabled);var P=o()("".concat(E,"-wrapper"),(n={},(0,a.Z)(n,"".concat(E,"-wrapper-checked"),O.checked),(0,a.Z)(n,"".concat(E,"-wrapper-disabled"),O.disabled),(0,a.Z)(n,"".concat(E,"-wrapper-rtl"),"rtl"===y),(0,a.Z)(n,"".concat(E,"-wrapper-in-form-item"),g),n),k);return r.createElement("label",{className:P,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(s.Z,(0,l.Z)({},O,{type:"radio",prefixCls:E,ref:b})),void 0!==C?r.createElement("span",null,C):null)},Z=r.forwardRef(y);Z.displayName="Radio";const b=Z;var g=n(29439),j=n(75179),k=n(1815),C=n(69019),w=r.forwardRef((function(e,t){var n=r.useContext(u.E_),s=n.getPrefixCls,i=n.direction,c=r.useContext(k.Z),d=(0,j.Z)(e.defaultValue,{value:e.value}),m=(0,g.Z)(d,2),p=m[0],h=m[1];return r.createElement(v,{value:{onChange:function(t){var n=p,a=t.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==n&&l(t)},value:p,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,d=e.prefixCls,u=e.className,m=void 0===u?"":u,v=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,x=e.disabled,y=e.children,Z=e.size,g=e.style,j=e.id,k=e.onMouseEnter,w=e.onMouseLeave,I=s("radio",d),q="".concat(I,"-group"),E=y;v&&v.length>0&&(E=v.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(b,{key:e.toString(),prefixCls:I,disabled:x,value:e,checked:p===e},e):r.createElement(b,{key:"radio-group-value-options-".concat(e.value),prefixCls:I,disabled:e.disabled||x,value:e.value,checked:p===e.value,style:e.style},e.label)})));var O=Z||c,P=o()(q,"".concat(q,"-").concat(f),(n={},(0,a.Z)(n,"".concat(q,"-").concat(O),O),(0,a.Z)(n,"".concat(q,"-rtl"),"rtl"===i),n),m);return r.createElement("div",(0,l.Z)({},(0,C.Z)(e),{className:P,style:g,onMouseEnter:k,onMouseLeave:w,id:j,ref:t}),E)}())}));const I=r.memo(w);var q=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},E=function(e,t){var n=r.useContext(u.E_).getPrefixCls,a=e.prefixCls,s=q(e,["prefixCls"]),i=n("radio",a);return r.createElement(f,{value:"button"},r.createElement(b,(0,l.Z)({prefixCls:i},s,{type:"radio",ref:t})))};const O=r.forwardRef(E);var P=b;P.Button=O,P.Group=I;const N=P},28083:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(4942),r=n(45987),s=n(1413),i=n(15671),o=n(43144),c=n(60136),d=n(54062),u=n(72791),m=n(81694),v=n.n(m),p=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(e){var a;(0,i.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,s.Z)((0,s.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,o.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,s=t.className,i=t.style,o=t.name,c=t.id,d=t.type,m=t.disabled,p=t.readOnly,h=t.tabIndex,f=t.onClick,x=t.onFocus,y=t.onBlur,Z=t.onKeyDown,b=t.onKeyPress,g=t.onKeyUp,j=t.autoFocus,k=t.value,C=t.required,w=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),I=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),q=this.state.checked,E=v()(n,s,(e={},(0,l.Z)(e,"".concat(n,"-checked"),q),(0,l.Z)(e,"".concat(n,"-disabled"),m),e));return u.createElement("span",{className:E,style:i},u.createElement("input",(0,a.Z)({name:o,id:c,type:d,required:C,readOnly:p,disabled:m,tabIndex:h,className:"".concat(n,"-input"),checked:!!q,onClick:f,onFocus:x,onBlur:y,onKeyUp:g,onKeyDown:Z,onKeyPress:b,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:k},I)),u.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,s.Z)((0,s.Z)({},t),{},{checked:e.checked}):null}}]),n}(u.Component);p.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=p}}]);
//# sourceMappingURL=320.7a7b93b1.chunk.js.map