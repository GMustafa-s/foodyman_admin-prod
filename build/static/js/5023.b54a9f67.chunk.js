"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5023],{87320:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(72791),o=t(50881),l=t(79337),r=t(76770),c=t(12362),s=t(80184);const i=()=>{const e=(0,l.I0)(),{languages:n,defaultLang:t}=(0,l.v9)((e=>e.formLang),l.wU);(0,a.useEffect)((()=>{c.Z.getAllActive().then((n=>{let{data:t}=n;e((0,r.dc)(t)),e((0,r.mh)(t.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.ZP.Group,{value:t,onChange:n=>{let{target:{value:t}}=n;e((0,r.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===n||void 0===n?void 0:n.map((e=>(0,s.jsx)(o.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},12098:(e,n,t)=>{function a(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=null===e||void 0===e?void 0:e.map((e=>({[null===e||void 0===e?void 0:e.locale]:n[`${t}[${null===e||void 0===e?void 0:e.locale}]`]?n[`${t}[${null===e||void 0===e?void 0:e.locale}]`]:void 0})));return Object.assign({},...a)}t.d(n,{Z:()=>a})},35023:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var a=t(72791),o=t(16871),l=t(30577),r=t(77483),c=t(54080),s=t(79337),i=t(48030),u=t(87320),d=t(12098),p=t(28637),v=t(33168),f=t(74892),h=t(31554),m=t(80184);function y(){const{t:e}=(0,v.$)(),{activeMenu:n}=(0,s.v9)((e=>e.menu),s.wU),{languages:t}=(0,s.v9)((e=>e.formLang),s.wU),y=(0,s.I0)(),[b]=r.Z.useForm(),g=(0,o.s0)();(0,a.useEffect)((()=>()=>{const e=b.getFieldsValue(!0);y((0,i.nc)({activeMenu:n,data:e}))}),[]);return(0,m.jsx)(c.Z,{title:e("add.faq"),extra:(0,m.jsx)(u.Z,{}),children:(0,m.jsx)(h.Z,{form:b,handleSubmit:a=>{const o={question:(0,d.Z)(t,a,"question"),answer:(0,d.Z)(t,a,"answer")},r="settings/faqs";return f.Z.create(o).then((()=>{l.Am.success(e("successfully.created")),(0,s.dC)((()=>{y((0,i.ph)({...n,nextUrl:r})),y((0,p.F)({}))})),g(`/${r}`)}))}})})}},31554:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(72791),o=t(77483),l=t(66106),r=t(30914),c=t(83099),s=t(87309),i=t(66023),u=t(79337),d=t(33168),p=t(80184);function v(e){let{form:n,handleSubmit:t}=e;const{t:v}=(0,d.$)(),{activeMenu:f}=(0,u.v9)((e=>e.menu),u.wU),{languages:h,defaultLang:m}=(0,u.v9)((e=>e.formLang),u.wU),[y,b]=(0,a.useState)(!1);return(0,p.jsxs)(o.Z,{name:"faq-form",layout:"vertical",onFinish:e=>{b(!0),t(e).finally((()=>b(!1)))},form:n,initialValues:null===f||void 0===f?void 0:f.data,children:[(0,p.jsx)(l.Z,{gutter:12,children:(0,p.jsx)(r.Z,{span:12,children:h.map((e=>(0,p.jsx)(o.Z.Item,{label:v("question"),name:`question[${e.locale}]`,rules:[{required:e.locale===m,message:v("required")}],hidden:e.locale!==m,children:(0,p.jsx)(i.Z,{rows:2})},"question"+e.locale)))})}),(0,p.jsx)(l.Z,{gutter:12,children:(0,p.jsx)(r.Z,{span:12,children:h.map((e=>(0,p.jsx)(o.Z.Item,{label:v("answer"),name:`answer[${e.locale}]`,rules:[{required:e.locale===m,message:v("required")}],hidden:e.locale!==m,children:(0,p.jsx)(i.Z,{rows:6})},"answer"+e.locale)))})}),(0,p.jsx)(c.Z,{children:(0,p.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:y,children:v("save")})})]})}},50881:(e,n,t)=>{t.d(n,{ZP:()=>I});var a=t(4942),o=t(87462),l=t(72791),r=t(28083),c=t(81694),s=t.n(c),i=t(88834),u=t(91940),d=t(69077),p=l.createContext(null),v=p.Provider;const f=p;var h=l.createContext(null),m=h.Provider,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t},b=function(e,n){var t,c=l.useContext(f),p=l.useContext(h),v=l.useContext(d.E_),m=v.getPrefixCls,b=v.direction,g=l.useRef(),Z=(0,i.sQ)(n,g),x=(0,l.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,w=e.children,j=e.style,E=y(e,["prefixCls","className","children","style"]),O=m("radio",C),P="button"===((null===c||void 0===c?void 0:c.optionType)||p)?"".concat(O,"-button"):O,q=(0,o.Z)({},E);c&&(q.name=c.name,q.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===c||void 0===c?void 0:c.onChange)||void 0===a||a.call(c,n)},q.checked=e.value===c.value,q.disabled=e.disabled||c.disabled);var F=s()("".concat(P,"-wrapper"),(t={},(0,a.Z)(t,"".concat(P,"-wrapper-checked"),q.checked),(0,a.Z)(t,"".concat(P,"-wrapper-disabled"),q.disabled),(0,a.Z)(t,"".concat(P,"-wrapper-rtl"),"rtl"===b),(0,a.Z)(t,"".concat(P,"-wrapper-in-form-item"),x),t),k);return l.createElement("label",{className:F,style:j,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(r.Z,(0,o.Z)({},q,{type:"radio",prefixCls:P,ref:Z})),void 0!==w?l.createElement("span",null,w):null)},g=l.forwardRef(b);g.displayName="Radio";const Z=g;var x=t(29439),C=t(75179),k=t(1815),w=t(69019),j=l.forwardRef((function(e,n){var t=l.useContext(d.E_),r=t.getPrefixCls,c=t.direction,i=l.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,x.Z)(u,2),f=p[0],h=p[1];return l.createElement(v,{value:{onChange:function(n){var t=f,a=n.target.value;"value"in e||h(a);var o=e.onChange;o&&a!==t&&o(n)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,h=e.buttonStyle,m=void 0===h?"outline":h,y=e.disabled,b=e.children,g=e.size,x=e.style,C=e.id,k=e.onMouseEnter,j=e.onMouseLeave,E=r("radio",u),O="".concat(E,"-group"),P=b;v&&v.length>0&&(P=v.map((function(e){return"string"===typeof e||"number"===typeof e?l.createElement(Z,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:f===e},e):l.createElement(Z,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:f===e.value,style:e.style},e.label)})));var q=g||i,F=s()(O,"".concat(O,"-").concat(m),(t={},(0,a.Z)(t,"".concat(O,"-").concat(q),q),(0,a.Z)(t,"".concat(O,"-rtl"),"rtl"===c),t),p);return l.createElement("div",(0,o.Z)({},(0,w.Z)(e),{className:F,style:x,onMouseEnter:k,onMouseLeave:j,id:C,ref:n}),P)}())}));const E=l.memo(j);var O=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]])}return t},P=function(e,n){var t=l.useContext(d.E_).getPrefixCls,a=e.prefixCls,r=O(e,["prefixCls"]),c=t("radio",a);return l.createElement(m,{value:"button"},l.createElement(Z,(0,o.Z)({prefixCls:c},r,{type:"radio",ref:n})))};const q=l.forwardRef(P);var F=Z;F.Button=q,F.Group=E;const I=F},28083:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),o=t(4942),l=t(45987),r=t(1413),c=t(15671),s=t(43144),i=t(60136),u=t(54062),d=t(72791),p=t(81694),v=t.n(p),f=function(e){(0,i.Z)(t,e);var n=(0,u.Z)(t);function t(e){var a;(0,c.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,o=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,r.Z)((0,r.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,s.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,c=n.style,s=n.name,i=n.id,u=n.type,p=n.disabled,f=n.readOnly,h=n.tabIndex,m=n.onClick,y=n.onFocus,b=n.onBlur,g=n.onKeyDown,Z=n.onKeyPress,x=n.onKeyUp,C=n.autoFocus,k=n.value,w=n.required,j=(0,l.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(j).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=j[n]),e}),{}),O=this.state.checked,P=v()(t,r,(e={},(0,o.Z)(e,"".concat(t,"-checked"),O),(0,o.Z)(e,"".concat(t,"-disabled"),p),e));return d.createElement("span",{className:P,style:c},d.createElement("input",(0,a.Z)({name:s,id:i,type:u,required:w,readOnly:f,disabled:p,tabIndex:h,className:"".concat(t,"-input"),checked:!!O,onClick:m,onFocus:y,onBlur:b,onKeyUp:x,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,r.Z)((0,r.Z)({},n),{},{checked:e.checked}):null}}]),t}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=f}}]);
//# sourceMappingURL=5023.b54a9f67.chunk.js.map