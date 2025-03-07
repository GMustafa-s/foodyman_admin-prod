"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[966],{87320:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(72791),r=n(50881),o=n(79337),l=n(76770),c=n(12362),s=n(80184);const i=()=>{const e=(0,o.I0)(),{languages:t,defaultLang:n}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{c.Z.getAllActive().then((t=>{let{data:n}=t;e((0,l.dc)(n)),e((0,l.mh)(n.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,l.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,s.jsx)(r.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},40966:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(72791),r=n(16871),o=n(30577),l=n(77483),c=n(54080),s=n(79337),i=n(48030),u=n(28154),d=n(95573),p=n(87320),f=n(33168),v=n(31536),h=n(80184);function m(){const{t:e}=(0,f.$)(),{activeMenu:t}=(0,s.v9)((e=>e.menu),s.wU),n=(0,s.I0)(),[m]=l.Z.useForm(),y=(0,r.s0)();(0,a.useEffect)((()=>()=>{const e=m.getFieldsValue(!0);n((0,i.nc)({activeMenu:t,data:e}))}),[]);return(0,h.jsx)(c.Z,{title:e("add.unit"),extra:(0,h.jsx)(p.Z,{}),children:(0,h.jsx)(v.Z,{form:m,handleSubmit:a=>{const r={...a,active:a.active?1:0},l="catalog/units";return d.Z.create(r).then((()=>{o.Am.success(e("successfully.created")),(0,s.dC)((()=>{n((0,i.ph)({...t,nextUrl:l})),n((0,u.S)({}))})),y(`/${l}`)}))}})})}},31536:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(72791),r=n(77483),o=n(66106),l=n(30914),c=n(86005),s=n(66818),i=n(25581),u=n(87309),d=n(79337),p=n(33168),f=n(80184);function v(e){let{form:t,handleSubmit:n}=e;const{t:v}=(0,p.$)(),{activeMenu:h}=(0,d.v9)((e=>e.menu),d.wU),{defaultLang:m,languages:y}=(0,d.v9)((e=>e.formLang),d.wU),[b,x]=(0,a.useState)(!1);return(0,f.jsxs)(r.Z,{name:"unit-form",layout:"vertical",onFinish:e=>{x(!0),n(e).finally((()=>x(!1)))},form:t,initialValues:{active:!0,...h.data},children:[(0,f.jsxs)(o.Z,{gutter:12,children:[(0,f.jsx)(l.Z,{span:12,children:y.map(((e,t)=>(0,f.jsx)(r.Z.Item,{label:v("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===m,message:v("required")}],hidden:e.locale!==m,children:(0,f.jsx)(c.Z,{})},"title"+t)))}),(0,f.jsx)(l.Z,{span:12,children:(0,f.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,f.jsx)(r.Z.Item,{label:v("position"),name:"position",rules:[{required:!0,message:v("required")}],children:(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(s.Z.Option,{value:"after",children:v("after")}),(0,f.jsx)(s.Z.Option,{value:"before",children:v("before")})]})})})}),(0,f.jsx)(l.Z,{span:6,children:(0,f.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,f.jsx)(r.Z.Item,{label:v("active"),name:"active",valuePropName:"checked",children:(0,f.jsx)(i.Z,{})})})})]}),(0,f.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:b,children:v("submit")})]})}},50881:(e,t,n)=>{n.d(t,{ZP:()=>F});var a=n(4942),r=n(87462),o=n(72791),l=n(28083),c=n(81694),s=n.n(c),i=n(88834),u=n(91940),d=n(69077),p=o.createContext(null),f=p.Provider;const v=p;var h=o.createContext(null),m=h.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=function(e,t){var n,c=o.useContext(v),p=o.useContext(h),f=o.useContext(d.E_),m=f.getPrefixCls,b=f.direction,x=o.useRef(),Z=(0,i.sQ)(t,x),g=(0,o.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,E=e.style,w=y(e,["prefixCls","className","children","style"]),O=m("radio",C),P="button"===((null===c||void 0===c?void 0:c.optionType)||p)?"".concat(O,"-button"):O,N=(0,r.Z)({},w);c&&(N.name=c.name,N.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,t)},N.checked=e.value===c.value,N.disabled=e.disabled||c.disabled);var I=s()("".concat(P,"-wrapper"),(n={},(0,a.Z)(n,"".concat(P,"-wrapper-checked"),N.checked),(0,a.Z)(n,"".concat(P,"-wrapper-disabled"),N.disabled),(0,a.Z)(n,"".concat(P,"-wrapper-rtl"),"rtl"===b),(0,a.Z)(n,"".concat(P,"-wrapper-in-form-item"),g),n),k);return o.createElement("label",{className:I,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(l.Z,(0,r.Z)({},N,{type:"radio",prefixCls:P,ref:Z})),void 0!==j?o.createElement("span",null,j):null)},x=o.forwardRef(b);x.displayName="Radio";const Z=x;var g=n(29439),C=n(75179),k=n(1815),j=n(69019),E=o.forwardRef((function(e,t){var n=o.useContext(d.E_),l=n.getPrefixCls,c=n.direction,i=o.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,g.Z)(u,2),v=p[0],h=p[1];return o.createElement(f,{value:{onChange:function(t){var n=v,a=t.target.value;"value"in e||h(a);var r=e.onChange;r&&a!==n&&r(t)},value:v,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,f=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,y=e.disabled,b=e.children,x=e.size,g=e.style,C=e.id,k=e.onMouseEnter,E=e.onMouseLeave,w=l("radio",u),O="".concat(w,"-group"),P=b;f&&f.length>0&&(P=f.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(Z,{key:e.toString(),prefixCls:w,disabled:y,value:e,checked:v===e},e):o.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:w,disabled:e.disabled||y,value:e.value,checked:v===e.value,style:e.style},e.label)})));var N=x||i,I=s()(O,"".concat(O,"-").concat(m),(n={},(0,a.Z)(n,"".concat(O,"-").concat(N),N),(0,a.Z)(n,"".concat(O,"-rtl"),"rtl"===c),n),p);return o.createElement("div",(0,r.Z)({},(0,j.Z)(e),{className:I,style:g,onMouseEnter:k,onMouseLeave:E,id:C,ref:t}),P)}())}));const w=o.memo(E);var O=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},P=function(e,t){var n=o.useContext(d.E_).getPrefixCls,a=e.prefixCls,l=O(e,["prefixCls"]),c=n("radio",a);return o.createElement(m,{value:"button"},o.createElement(Z,(0,r.Z)({prefixCls:c},l,{type:"radio",ref:t})))};const N=o.forwardRef(P);var I=Z;I.Button=N,I.Group=w;const F=I},28083:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(4942),o=n(45987),l=n(1413),c=n(15671),s=n(43144),i=n(60136),u=n(54062),d=n(72791),p=n(81694),f=n.n(p),v=function(e){(0,i.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,c.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return(0,s.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,c=t.style,s=t.name,i=t.id,u=t.type,p=t.disabled,v=t.readOnly,h=t.tabIndex,m=t.onClick,y=t.onFocus,b=t.onBlur,x=t.onKeyDown,Z=t.onKeyPress,g=t.onKeyUp,C=t.autoFocus,k=t.value,j=t.required,E=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),w=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),O=this.state.checked,P=f()(n,l,(e={},(0,r.Z)(e,"".concat(n,"-checked"),O),(0,r.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:P,style:c},d.createElement("input",(0,a.Z)({name:s,id:i,type:u,required:j,readOnly:v,disabled:p,tabIndex:h,className:"".concat(n,"-input"),checked:!!O,onClick:m,onFocus:y,onBlur:b,onKeyUp:g,onKeyDown:x,onKeyPress:Z,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},w)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=v}}]);
//# sourceMappingURL=966.e359c17a.chunk.js.map