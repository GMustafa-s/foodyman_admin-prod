"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3934],{87320:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(72791),l=t(50881),o=t(79337),r=t(76770),i=t(12362),s=t(80184);const c=()=>{const e=(0,o.I0)(),{languages:n,defaultLang:t}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{i.Z.getAllActive().then((n=>{let{data:t}=n;e((0,r.dc)(t)),e((0,r.mh)(t.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.ZP.Group,{value:t,onChange:n=>{let{target:{value:t}}=n;e((0,r.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===n||void 0===n?void 0:n.map((e=>(0,s.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},35740:(e,n,t)=>{t.d(n,{R:()=>c});var a=t(72791),l=t(48573),o=t.n(l),r=t(66818),i=t(37083),s=t(80184);const c=e=>{let{fetchOptions:n,debounceTimeout:t=400,refetch:l=!1,...c}=e;const[u,d]=(0,a.useState)(!1),[v,p]=(0,a.useState)([]),m=(0,a.useMemo)((()=>o()((e=>{p([]),d(!0),n(e).then((e=>{p(e),d(!1)}))}),t)),[n,t]);return(0,s.jsx)(r.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>m(""),filterOption:!1,onSearch:m,notFoundContent:u?(0,s.jsx)(i.Z,{size:"small"}):"no results",...c,options:v,onFocus:()=>{m("")}})}},12098:(e,n,t)=>{function a(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=null===e||void 0===e?void 0:e.map((e=>({[null===e||void 0===e?void 0:e.locale]:n[`${t}[${null===e||void 0===e?void 0:e.locale}]`]?n[`${t}[${null===e||void 0===e?void 0:e.locale}]`]:void 0})));return Object.assign({},...a)}t.d(n,{Z:()=>a})},758:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(72791),l=t(77483),o=t(66106),r=t(30914),i=t(86005),s=t(66818),c=t(38243),u=t(25581),d=t(87309),v=t(49355),p=t(35740),m=t(11918),h=t(79337),f=t(33168),y=t(15764),g=t(16871),b=t(80184);function x(e){var n,t,x,Z,C,k;let{form:j,handleSubmit:w,error:O}=e;const{t:P}=(0,f.$)(),{activeMenu:E}=(0,h.v9)((e=>e.menu),h.wU),{defaultLang:I,languages:S}=(0,h.v9)((e=>e.formLang),h.wU),N=(0,g.TH)(),[q,F]=(0,a.useState)(null!==(n=E.data)&&void 0!==n&&n.image?null===(t=E.data)||void 0===t?void 0:t.image:[]),[K,M]=(0,a.useState)(!1);return(0,b.jsxs)(l.Z,{name:"shop-category-form",layout:"vertical",onFinish:e=>{M(!0),w(e,q).finally((()=>M(!1)))},initialValues:{active:!0,...E.data,input:null!==(x=null===(Z=E.data)||void 0===Z?void 0:Z.input)&&void 0!==x?x:32767},form:j,children:[(0,b.jsxs)(o.Z,{gutter:12,children:[(0,b.jsx)(r.Z,{span:12,children:S.map((e=>(0,b.jsx)(l.Z.Item,{label:P("name"),name:`title[${(null===e||void 0===e?void 0:e.locale)||"en"}]`,hidden:(null===e||void 0===e?void 0:e.locale)!==I,rules:[{required:(null===e||void 0===e?void 0:e.locale)===I,message:P("required")},{type:"string",min:2,max:200,message:P("min.2.max.200.chars")}],children:(0,b.jsx)(i.Z,{})},null===e||void 0===e?void 0:e.locale)))}),(0,b.jsx)(r.Z,{span:12,children:S.map((e=>(0,b.jsx)(l.Z.Item,{label:P("description"),name:`description[${(null===e||void 0===e?void 0:e.locale)||"en"}]`,hidden:(null===e||void 0===e?void 0:e.locale)!==I,rules:[{required:(null===e||void 0===e?void 0:e.locale)===I,message:P("required")},{type:"string",min:2,max:200,message:P("min.2.max.200.chars")}],children:(0,b.jsx)(v.Z,{rows:2})},null===e||void 0===e?void 0:e.locale)))}),(0,b.jsx)(r.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:P("keywords"),name:"keywords",rules:[{required:!0,message:P("required")}],children:(0,b.jsx)(s.Z,{mode:"tags",style:{width:"100%"}})})}),!(null!==N&&void 0!==N&&null!==(C=N.state)&&void 0!==C&&C.isParent)&&"clone"!==(null===N||void 0===N||null===(k=N.state)||void 0===k?void 0:k.type)&&(0,b.jsx)(r.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:P("parent.category"),name:"parent_id",children:(0,b.jsx)(p.R,{allowClear:!0,fetchOptions:async function(e){const n={perPage:100,type:"shop",search:e};return y.Z.getAll(n).then((e=>{var n;return null!==N&&void 0!==N&&null!==(n=N.state)&&void 0!==n&&n.uuid?e.data.filter((e=>{var n;return e.uuid!==(null===N||void 0===N||null===(n=N.state)||void 0===n?void 0:n.uuid)})).map((e=>{var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}})):e.data.map((e=>{var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id,key:e.id}}))}))}})})}),(0,b.jsx)(r.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:P("position"),name:"input",rules:[{required:!0,message:P("required")},{type:"number",min:0,max:32767,message:P("must.be.between.0.and.32767")}],children:(0,b.jsx)(c.Z,{className:"w-100"})})}),(0,b.jsx)(r.Z,{span:4,children:(0,b.jsx)(l.Z.Item,{label:P("image"),name:"images",rules:[{required:!q.length,message:P("required")}],children:(0,b.jsx)(m.Z,{type:"categories",imageList:q,setImageList:F,form:j,multiple:!1})})}),(0,b.jsx)(r.Z,{span:2,children:(0,b.jsx)(l.Z.Item,{label:P("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(u.Z,{})})})]}),(0,b.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:K,children:P("submit")})]})}},50881:(e,n,t)=>{t.d(n,{ZP:()=>N});var a=t(4942),l=t(87462),o=t(72791),r=t(28083),i=t(81694),s=t.n(i),c=t(88834),u=t(91940),d=t(69077),v=o.createContext(null),p=v.Provider;const m=v;var h=o.createContext(null),f=h.Provider,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},g=function(e,n){var t,i=o.useContext(m),v=o.useContext(h),p=o.useContext(d.E_),f=p.getPrefixCls,g=p.direction,b=o.useRef(),x=(0,c.sQ)(n,b),Z=(0,o.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,w=e.style,O=y(e,["prefixCls","className","children","style"]),P=f("radio",C),E="button"===((null===i||void 0===i?void 0:i.optionType)||v)?"".concat(P,"-button"):P,I=(0,l.Z)({},O);i&&(I.name=i.name,I.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,n)},I.checked=e.value===i.value,I.disabled=e.disabled||i.disabled);var S=s()("".concat(E,"-wrapper"),(t={},(0,a.Z)(t,"".concat(E,"-wrapper-checked"),I.checked),(0,a.Z)(t,"".concat(E,"-wrapper-disabled"),I.disabled),(0,a.Z)(t,"".concat(E,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(t,"".concat(E,"-wrapper-in-form-item"),Z),t),k);return o.createElement("label",{className:S,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(r.Z,(0,l.Z)({},I,{type:"radio",prefixCls:E,ref:x})),void 0!==j?o.createElement("span",null,j):null)},b=o.forwardRef(g);b.displayName="Radio";const x=b;var Z=t(29439),C=t(75179),k=t(1815),j=t(69019),w=o.forwardRef((function(e,n){var t=o.useContext(d.E_),r=t.getPrefixCls,i=t.direction,c=o.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),v=(0,Z.Z)(u,2),m=v[0],h=v[1];return o.createElement(p,{value:{onChange:function(n){var t=m,a=n.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==t&&l(n)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,v=void 0===d?"":d,p=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,y=e.disabled,g=e.children,b=e.size,Z=e.style,C=e.id,k=e.onMouseEnter,w=e.onMouseLeave,O=r("radio",u),P="".concat(O,"-group"),E=g;p&&p.length>0&&(E=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:O,disabled:y,value:e,checked:m===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:O,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var I=b||c,S=s()(P,"".concat(P,"-").concat(f),(t={},(0,a.Z)(t,"".concat(P,"-").concat(I),I),(0,a.Z)(t,"".concat(P,"-rtl"),"rtl"===i),t),v);return o.createElement("div",(0,l.Z)({},(0,j.Z)(e),{className:S,style:Z,onMouseEnter:k,onMouseLeave:w,id:C,ref:n}),E)}())}));const O=o.memo(w);var P=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},E=function(e,n){var t=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=P(e,["prefixCls"]),i=t("radio",a);return o.createElement(f,{value:"button"},o.createElement(x,(0,l.Z)({prefixCls:i},r,{type:"radio",ref:n})))};const I=o.forwardRef(E);var S=x;S.Button=I,S.Group=O;const N=S},28083:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),l=t(4942),o=t(45987),r=t(1413),i=t(15671),s=t(43144),c=t(60136),u=t(54062),d=t(72791),v=t(81694),p=t.n(v),m=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,i.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,l=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,s.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,i=n.style,s=n.name,c=n.id,u=n.type,v=n.disabled,m=n.readOnly,h=n.tabIndex,f=n.onClick,y=n.onFocus,g=n.onBlur,b=n.onKeyDown,x=n.onKeyPress,Z=n.onKeyUp,C=n.autoFocus,k=n.value,j=n.required,w=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),O=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),P=this.state.checked,E=p()(t,r,(e={},(0,l.Z)(e,"".concat(t,"-checked"),P),(0,l.Z)(e,"".concat(t,"-disabled"),v),e));return d.createElement("span",{className:E,style:i},d.createElement("input",(0,a.Z)({name:s,id:c,type:u,required:j,readOnly:m,disabled:v,tabIndex:h,className:"".concat(t,"-input"),checked:!!P,onClick:f,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},O)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,r.Z)((0,r.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=m}}]);
//# sourceMappingURL=3934.62f52fb7.chunk.js.map