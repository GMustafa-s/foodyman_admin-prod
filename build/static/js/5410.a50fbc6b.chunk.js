"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5410],{87320:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(72791),l=n(50881),o=n(79337),r=n(76770),s=n(12362),c=n(80184);const i=()=>{const e=(0,o.I0)(),{languages:t,defaultLang:n}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{s.Z.getAllActive().then((t=>{let{data:n}=t;e((0,r.dc)(n)),e((0,r.mh)(n.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,r.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},12098:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=null===e||void 0===e?void 0:e.map((e=>({[null===e||void 0===e?void 0:e.locale]:t[`${n}[${null===e||void 0===e?void 0:e.locale}]`]?t[`${n}[${null===e||void 0===e?void 0:e.locale}]`]:void 0})));return Object.assign({},...a)}n.d(t,{Z:()=>a})},35410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(72791),l=n(16871),o=n(30577),r=n(77483),s=n(54080),c=n(37083),i=n(79337),u=n(48030),d=n(33168),p=n(87320),f=n(12098),v=n(24455),m=n(53894),h=n(54109),y=n(80184);const g=()=>{const{t:e}=(0,d.$)(),{activeMenu:t}=(0,i.v9)((e=>e.menu),i.wU),n=(0,i.I0)(),[g]=r.Z.useForm(),b=(0,l.s0)(),{id:x}=(0,l.UO)(),[Z,C]=(0,a.useState)(!1),{languages:k}=(0,i.v9)((e=>e.formLang),i.wU);(0,a.useEffect)((()=>()=>{const e=g.getFieldsValue(!0);n((0,u.nc)({activeMenu:t,data:e}))}),[]);function j(e){if(!e)return{};const{translations:t}=e,n=k.map((e=>{var n;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}return(0,a.useEffect)((()=>{var e;t.refetch&&(e=x,C(!0),v.Z.getById(e).then((e=>{let a=e.data;const l={images:(o=[a.img],o.map((e=>({uid:e,name:e,url:e})))),...j(a)};var o;g.setFieldsValue(l),n((0,u.nc)({activeMenu:t,data:l}))})).finally((()=>{n((0,u.A_)(t)),C(!1)})))}),[t.refetch]),(0,y.jsx)(s.Z,{title:e("shop.banner"),className:"h-100",extra:(0,y.jsx)(p.Z,{}),children:Z?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,y.jsx)(c.Z,{size:"large",className:"py-5"})}):(0,y.jsx)(h.Z,{form:g,handleSubmit:(a,l)=>{const r={images:l.map((e=>e.name)),title:(0,f.Z)(k,a,"title")},s="shop-tag";return v.Z.create(r).then((()=>{o.Am.success(e("successfully.cloned")),(0,i.dC)((()=>{n((0,u.ph)({...t,nextUrl:s})),n((0,m.S)({}))})),b("/shop-tag")}))}})})}},54109:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(72791),l=n(77483),o=n(66106),r=n(30914),s=n(86005),c=n(87309),i=n(11918),u=n(33168),d=n(79337),p=n(80184);function f(e){var t,n;let{form:f,handleSubmit:v}=e;const{t:m}=(0,u.$)(),{activeMenu:h}=(0,d.v9)((e=>e.menu),d.wU),{languages:y,defaultLang:g}=(0,d.v9)((e=>e.formLang),d.wU),[b,x]=(0,a.useState)(!1),[Z,C]=(0,a.useState)(null!==(t=h.data)&&void 0!==t&&t.images?null===(n=h.data)||void 0===n?void 0:n.images:[]);return(0,p.jsxs)(l.Z,{name:"shop-tag-form",layout:"vertical",onFinish:e=>{x(!0),v(e,Z).finally((()=>x(!1)))},form:f,initialValues:{clickable:!0,...h.data},className:"d-flex flex-column h-100",children:[(0,p.jsxs)(o.Z,{gutter:12,children:[(0,p.jsx)(r.Z,{span:12,children:y.map((e=>(0,p.jsx)(l.Z.Item,{label:m("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===g,message:m("required")}],hidden:e.locale!==g,children:(0,p.jsx)(s.Z,{})},"title"+e.locale)))}),(0,p.jsx)(r.Z,{span:12,children:(0,p.jsx)(l.Z.Item,{rules:[{required:!0,message:m("required")}],label:m("image"),name:"images",children:(0,p.jsx)(i.Z,{type:"products",imageList:Z,setImageList:C,form:f,length:"1",multiple:!1})})})]}),(0,p.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,p.jsx)("div",{className:"pb-5",children:(0,p.jsx)(c.Z,{type:"primary",htmlType:"submit",loading:b,disabled:b,children:m("submit")})})})]})}},50881:(e,t,n)=>{n.d(t,{ZP:()=>S});var a=n(4942),l=n(87462),o=n(72791),r=n(28083),s=n(81694),c=n.n(s),i=n(88834),u=n(91940),d=n(69077),p=o.createContext(null),f=p.Provider;const v=p;var m=o.createContext(null),h=m.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},g=function(e,t){var n,s=o.useContext(v),p=o.useContext(m),f=o.useContext(d.E_),h=f.getPrefixCls,g=f.direction,b=o.useRef(),x=(0,i.sQ)(t,b),Z=(0,o.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,w=e.style,E=y(e,["prefixCls","className","children","style"]),O=h("radio",C),P="button"===((null===s||void 0===s?void 0:s.optionType)||p)?"".concat(O,"-button"):O,N=(0,l.Z)({},E);s&&(N.name=s.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===s||void 0===s?void 0:s.onChange)||void 0===a||a.call(s,t)},N.checked=e.value===s.value,N.disabled=e.disabled||s.disabled);var I=c()("".concat(P,"-wrapper"),(n={},(0,a.Z)(n,"".concat(P,"-wrapper-checked"),N.checked),(0,a.Z)(n,"".concat(P,"-wrapper-disabled"),N.disabled),(0,a.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(P,"-wrapper-in-form-item"),Z),n),k);return o.createElement("label",{className:I,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.Z,(0,l.Z)({},N,{type:"radio",prefixCls:P,ref:x})),void 0!==j?o.createElement("span",null,j):null)},b=o.forwardRef(g);b.displayName="Radio";const x=b;var Z=n(29439),C=n(75179),k=n(1815),j=n(69019),w=o.forwardRef((function(e,t){var n=o.useContext(d.E_),r=n.getPrefixCls,s=n.direction,i=o.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),v=p[0],m=p[1];return o.createElement(f,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||m(a);var l=e.onChange;l&&a!==n&&l(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,g=e.children,b=e.size,Z=e.style,C=e.id,k=e.onMouseEnter,w=e.onMouseLeave,E=r("radio",u),O="".concat(E,"-group"),P=g;f&&f.length>0&&(P=f.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:v===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var N=b||i,I=c()(O,"".concat(O,"-").concat(h),(n={},(0,a.Z)(n,"".concat(O,"-").concat(N),N),(0,a.Z)(n,"".concat(O,"-rtl"),"rtl"===s),n),p);return o.createElement("div",(0,l.Z)({},(0,j.Z)(e),{className:I,style:Z,onMouseEnter:k,onMouseLeave:w,id:C,ref:t}),P)}())}));const E=o.memo(w);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},P=function(e,t){var n=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=O(e,["prefixCls"]),s=n("radio",a);return o.createElement(h,{value:"button"},o.createElement(x,(0,l.Z)({prefixCls:s},r,{type:"radio",ref:t})))};const N=o.forwardRef(P);var I=x;I.Button=N,I.Group=E;const S=I},28083:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(4942),o=n(45987),r=n(1413),s=n(15671),c=n(43144),i=n(60136),u=n(54062),d=n(72791),p=n(81694),f=n.n(p),v=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,l=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,s=t.style,c=t.name,i=t.id,u=t.type,p=t.disabled,v=t.readOnly,m=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,Z=t.onKeyUp,C=t.autoFocus,k=t.value,j=t.required,w=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),O=this.state.checked,P=f()(n,r,(e={},(0,l.Z)(e,"".concat(n,"-checked"),O),(0,l.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:P,style:s},d.createElement("input",(0,a.Z)({name:c,id:i,type:u,required:j,readOnly:v,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!O,onClick:h,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,r.Z)((0,r.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=v}}]);
//# sourceMappingURL=5410.a50fbc6b.chunk.js.map