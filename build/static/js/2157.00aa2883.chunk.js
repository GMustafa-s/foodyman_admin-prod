"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2157],{96569:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(72791),o=n(77483),r=n(33168),l=n(7551),i=n(52443),c=n.n(i),s=n(85830),u=n(88093),d=n(30577),p=n(80184);function v(e){let{form:t,lang:n,languages:i}=e;const{t:v}=(0,r.$)();function f(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,n)=>{const a=new FormData;e.file.then((e=>{e.size/1024/1024<2||(d.Am.error(v("min.2.mb")),n()),a.append("image",e),a.append("type","blogs"),u.Z.upload(a).then((e=>{let{data:n}=e;t({default:`${s.bV+n.title}`})})).catch((e=>{n(e)}))}))}))}}(e)}return(0,p.jsx)(a.Fragment,{children:i.map((e=>(0,p.jsx)(o.Z.Item,{label:v("description"),name:`description[${e.locale}]`,valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===n,message:v("required")}],hidden:e.locale!==n,children:(0,p.jsx)(l.CKEditor,{editor:c(),config:{extraPlugins:[f]},onBlur:(n,a)=>{const o=a.getData();t.setFieldsValue({[`description[${e.value}]`]:o})}})},"desc"+e.locale)))})}},87320:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(72791),o=n(50881),r=n(79337),l=n(76770),i=n(12362),c=n(80184);const s=()=>{const e=(0,r.I0)(),{languages:t,defaultLang:n}=(0,r.v9)((e=>e.formLang),r.wU);(0,a.useEffect)((()=>{i.Z.getAllActive().then((t=>{let{data:n}=t;e((0,l.dc)(n)),e((0,l.mh)(n.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.ZP.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,l.mh)(n))},className:"float-right",buttonStyle:"solid",children:null===t||void 0===t?void 0:t.map((e=>(0,c.jsx)(o.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},14862:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(72791),o=n(77483),r=n(66106),l=n(30914),i=n(86005),c=n(83099),s=n(87309),u=n(96569),d=n(33168),p=n(79337),v=n(80184);function f(e){let{form:t,handleSubmit:n}=e;const{t:f}=(0,d.$)(),{activeMenu:m}=(0,p.v9)((e=>e.menu),p.wU),{languages:h,defaultLang:y}=(0,p.v9)((e=>e.formLang),p.wU),[g,b]=(0,a.useState)(!1);return(0,v.jsxs)(o.Z,{name:"notification-form",layout:"vertical",onFinish:e=>{b(!0),n(e).finally((()=>b(!1)))},form:t,initialValues:{active:!0,...m.data},children:[(0,v.jsxs)(r.Z,{gutter:12,children:[(0,v.jsx)(l.Z,{span:12,children:h.map((e=>(0,v.jsx)(o.Z.Item,{label:f("title"),name:`title[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==y?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(f("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(f("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(f("required")))}],hidden:e.locale!==y,children:(0,v.jsx)(i.Z,{})},"title"+e.locale)))}),(0,v.jsx)(l.Z,{span:24,children:h.map((e=>(0,v.jsx)(o.Z.Item,{label:f("short.description"),name:`short_desc[${e.locale}]`,rules:[{validator:(t,n)=>n||(null===e||void 0===e?void 0:e.locale)!==y?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(f("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<5?Promise.reject(new Error(f("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(f("required")))}],hidden:e.locale!==y,children:(0,v.jsx)(i.Z,{})},"short_desc"+e.locale)))}),(0,v.jsx)(l.Z,{span:24,children:(0,v.jsx)(u.Z,{form:t,languages:h,lang:y})})]}),(0,v.jsx)(c.Z,{children:(0,v.jsx)(s.Z,{type:"primary",htmlType:"submit",loading:g,children:f("save")})})]})}},50881:(e,t,n)=>{n.d(t,{ZP:()=>I});var a=n(4942),o=n(87462),r=n(72791),l=n(28083),i=n(81694),c=n.n(i),s=n(88834),u=n(91940),d=n(69077),p=r.createContext(null),v=p.Provider;const f=p;var m=r.createContext(null),h=m.Provider,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},g=function(e,t){var n,i=r.useContext(f),p=r.useContext(m),v=r.useContext(d.E_),h=v.getPrefixCls,g=v.direction,b=r.useRef(),x=(0,s.sQ)(t,b),Z=(0,r.useContext)(u.aM).isFormItemInput,C=e.prefixCls,k=e.className,j=e.children,P=e.style,E=y(e,["prefixCls","className","children","style"]),w=h("radio",C),O="button"===((null===i||void 0===i?void 0:i.optionType)||p)?"".concat(w,"-button"):w,F=(0,o.Z)({},E);i&&(F.name=i.name,F.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===i||void 0===i?void 0:i.onChange)||void 0===a||a.call(i,t)},F.checked=e.value===i.value,F.disabled=e.disabled||i.disabled);var N=c()("".concat(O,"-wrapper"),(n={},(0,a.Z)(n,"".concat(O,"-wrapper-checked"),F.checked),(0,a.Z)(n,"".concat(O,"-wrapper-disabled"),F.disabled),(0,a.Z)(n,"".concat(O,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(n,"".concat(O,"-wrapper-in-form-item"),Z),n),k);return r.createElement("label",{className:N,style:P,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},r.createElement(l.Z,(0,o.Z)({},F,{type:"radio",prefixCls:O,ref:x})),void 0!==j?r.createElement("span",null,j):null)},b=r.forwardRef(g);b.displayName="Radio";const x=b;var Z=n(29439),C=n(75179),k=n(1815),j=n(69019),P=r.forwardRef((function(e,t){var n=r.useContext(d.E_),l=n.getPrefixCls,i=n.direction,s=r.useContext(k.Z),u=(0,C.Z)(e.defaultValue,{value:e.value}),p=(0,Z.Z)(u,2),f=p[0],m=p[1];return r.createElement(v,{value:{onChange:function(t){var n=f,a=t.target.value;"value"in e||m(a);var o=e.onChange;o&&a!==n&&o(t)},value:f,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var n,u=e.prefixCls,d=e.className,p=void 0===d?"":d,v=e.options,m=e.buttonStyle,h=void 0===m?"outline":m,y=e.disabled,g=e.children,b=e.size,Z=e.style,C=e.id,k=e.onMouseEnter,P=e.onMouseLeave,E=l("radio",u),w="".concat(E,"-group"),O=g;v&&v.length>0&&(O=v.map((function(e){return"string"===typeof e||"number"===typeof e?r.createElement(x,{key:e.toString(),prefixCls:E,disabled:y,value:e,checked:f===e},e):r.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:f===e.value,style:e.style},e.label)})));var F=b||s,N=c()(w,"".concat(w,"-").concat(h),(n={},(0,a.Z)(n,"".concat(w,"-").concat(F),F),(0,a.Z)(n,"".concat(w,"-rtl"),"rtl"===i),n),p);return r.createElement("div",(0,o.Z)({},(0,j.Z)(e),{className:N,style:Z,onMouseEnter:k,onMouseLeave:P,id:C,ref:t}),O)}())}));const E=r.memo(P);var w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},O=function(e,t){var n=r.useContext(d.E_).getPrefixCls,a=e.prefixCls,l=w(e,["prefixCls"]),i=n("radio",a);return r.createElement(h,{value:"button"},r.createElement(x,(0,o.Z)({prefixCls:i},l,{type:"radio",ref:t})))};const F=r.forwardRef(O);var N=x;N.Button=F,N.Group=E;const I=N},28083:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(4942),r=n(45987),l=n(1413),i=n(15671),c=n(43144),s=n(60136),u=n(54062),d=n(72791),p=n(81694),v=n.n(p),f=function(e){(0,s.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,i.Z)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,o=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),o&&o({target:(0,l.Z)((0,l.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var o="checked"in e?e.checked:e.defaultChecked;return a.state={checked:o},a}return(0,c.Z)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,l=t.className,i=t.style,c=t.name,s=t.id,u=t.type,p=t.disabled,f=t.readOnly,m=t.tabIndex,h=t.onClick,y=t.onFocus,g=t.onBlur,b=t.onKeyDown,x=t.onKeyPress,Z=t.onKeyUp,C=t.autoFocus,k=t.value,j=t.required,P=(0,r.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(P).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=P[t]),e}),{}),w=this.state.checked,O=v()(n,l,(e={},(0,o.Z)(e,"".concat(n,"-checked"),w),(0,o.Z)(e,"".concat(n,"-disabled"),p),e));return d.createElement("span",{className:O,style:i},d.createElement("input",(0,a.Z)({name:c,id:s,type:u,required:j,readOnly:f,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!w,onClick:h,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:k},E)),d.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,l.Z)((0,l.Z)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);f.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=f}}]);
//# sourceMappingURL=2157.00aa2883.chunk.js.map