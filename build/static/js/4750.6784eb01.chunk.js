"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4750],{87320:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(72791),l=t(50881),o=t(79337),i=t(76770),r=t(12362),s=t(80184);const d=()=>{const e=(0,o.I0)(),{languages:n,defaultLang:t}=(0,o.v9)((e=>e.formLang),o.wU);(0,a.useEffect)((()=>{r.Z.getAllActive().then((n=>{let{data:t}=n;e((0,i.dc)(t)),e((0,i.mh)(t.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.ZP.Group,{value:t,onChange:n=>{let{target:{value:t}}=n;e((0,i.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===n||void 0===n?void 0:n.map((e=>(0,s.jsx)(l.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},35740:(e,n,t)=>{t.d(n,{R:()=>d});var a=t(72791),l=t(48573),o=t.n(l),i=t(66818),r=t(37083),s=t(80184);const d=e=>{let{fetchOptions:n,debounceTimeout:t=400,refetch:l=!1,...d}=e;const[c,u]=(0,a.useState)(!1),[v,p]=(0,a.useState)([]),m=(0,a.useMemo)((()=>o()((e=>{p([]),u(!0),n(e).then((e=>{p(e),u(!1)}))}),t)),[n,t]);return(0,s.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>m(""),filterOption:!1,onSearch:m,notFoundContent:c?(0,s.jsx)(r.Z,{size:"small"}):"no results",...d,options:v,onFocus:()=>{m("")}})}},6200:(e,n,t)=>{t.d(n,{h:()=>d});var a=t(72791),l=t(48573),o=t.n(l),i=t(66818),r=t(37083),s=t(80184);const d=e=>{let{fetchOptions:n,debounceTimeout:t=400,onClear:l,...d}=e;const[c,u]=(0,a.useState)(!1),[v,p]=(0,a.useState)([]),m=(0,a.useMemo)((()=>o()((e=>{p([]),u(!0),n(e).then((e=>{p(e),u(!1)}))}),t)),[n,t]);return(0,s.jsx)(i.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,onClear:()=>{m(""),l&&l()},notFoundContent:c?(0,s.jsx)(r.Z,{size:"small"}):"no results",...d,options:v,onFocus:()=>{m("")}})}},73052:(e,n,t)=>{function a(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["title"];if(null===n||void 0===n||!n.translations)return{};const{translations:a}=n,l=(e,n)=>{const t=null===a||void 0===a?void 0:a.find((n=>(null===n||void 0===n?void 0:n.locale)===(null===e||void 0===e?void 0:e.locale)));return t||{[n]:""}},o=e.flatMap((e=>t.flatMap((n=>({[`${n}[${null===e||void 0===e?void 0:e.locale}]`]:l(e,n)[n]})))));return Object.assign({},...o)}t.d(n,{Z:()=>a})},12098:(e,n,t)=>{function a(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=null===e||void 0===e?void 0:e.map((e=>({[null===e||void 0===e?void 0:e.locale]:n[`${t}[${null===e||void 0===e?void 0:e.locale}]`]?n[`${t}[${null===e||void 0===e?void 0:e.locale}]`]:void 0})));return Object.assign({},...a)}t.d(n,{Z:()=>a})},74750:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var a=t(72791),l=t(77483),o=t(54080),i=t(37083),r=t(16871),s=t(87320),d=t(79337),c=t(48030),u=t(15764),v=t(33168),p=t(73052),m=t(62605),h=t(17076),f=t(93943),y=t(80184);const g=()=>{const{t:e}=(0,v.$)(),n=(0,d.I0)(),{activeMenu:t}=(0,d.v9)((e=>e.menu),d.wU),[g,b]=(0,a.useState)(!1),[x]=l.Z.useForm(),{uuid:Z}=(0,r.UO)(),{languages:C}=(0,d.v9)((e=>e.formLang),d.wU);(0,h.Z)((()=>{t.refetch&&(j(Z),n((0,c.A_)(t)))}),[t.refetch]),(0,a.useEffect)((()=>{j(Z),n((0,c.A_)(t))}),[]),(0,a.useEffect)((()=>()=>{const e=x.getFieldsValue(!0);n((0,c.nc)({activeMenu:t,data:e}))}),[]);const j=e=>{e&&(b(!0),u.Z.getById(e).then((e=>{var a,l,o;let i=null===e||void 0===e?void 0:e.data;const r={...i,...(0,p.Z)(C,i,["title","description"]),image:[(0,m.Z)(i.img)],keywords:null===i||void 0===i||null===(a=i.keywords)||void 0===a?void 0:a.split(","),parent_id:{label:null===(l=i.parent)||void 0===l||null===(o=l.translation)||void 0===o?void 0:o.title,value:i.parent_id,key:i.parent_id}};x.setFieldsValue(r),n((0,c.nc)({activeMenu:t,data:r}))})).finally((()=>{b(!1),n((0,c.A_)(t))})))};return(0,y.jsx)(o.Z,{title:e("category.clone"),extra:(0,y.jsx)(s.Z,{}),children:g?(0,y.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,y.jsx)(i.Z,{size:"large",className:"mt-5 pt-5"})}):(0,y.jsx)(f.Z,{form:x,handleSubmit:e=>u.Z.create(e)})})}},93943:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(72791),l=t(77483),o=t(66106),i=t(30914),r=t(86005),s=t(66818),d=t(38243),c=t(25581),u=t(87309),v=t(49355),p=t(35740),m=t(11918),h=t(33168),f=t(79337),y=t(16871),g=t(15764),b=(t(6200),t(30577)),x=t(48030),Z=t(46894),C=t(12098),j=t(80184);function k(e){var n,t;let{form:k,handleSubmit:w,error:I}=e;const{t:O}=(0,h.$)(),E=(0,f.I0)(),P=(0,y.s0)(),{state:S}=(0,y.TH)(),{activeMenu:F}=(0,f.v9)((e=>e.menu),f.wU),{defaultLang:N,languages:_}=(0,f.v9)((e=>e.formLang),f.wU),{params:M}=(0,f.v9)((e=>e.category),f.wU),[q,U]=(0,a.useState)(!1),[K,$]=(0,a.useState)(null!==(n=F.data)&&void 0!==n&&n.image?null===(t=F.data)||void 0===t?void 0:t.image:[]),L={...M,type:null!==S&&void 0!==S&&S.parentId?"sub_main":"main",parent_id:null===S||void 0===S?void 0:S.parentId};return(0,j.jsxs)(l.Z,{name:"basic",layout:"vertical",onFinish:e=>{var n,t;const a={...e,title:(0,C.Z)(_,e),description:(0,C.Z)(_,e,"description"),type:null!==S&&void 0!==S&&S.parentId?"sub_main":"main",active:Number(null===e||void 0===e?void 0:e.active),keywords:null===e||void 0===e||null===(n=e.keywords)||void 0===n?void 0:n.join(","),parent_id:(null===S||void 0===S?void 0:S.parentId)||(null===e||void 0===e||null===(t=e.parent_id)||void 0===t?void 0:t.value),images:null===K||void 0===K?void 0:K.map((e=>null===e||void 0===e?void 0:e.name))};U(!0),w(a).then((()=>{const e=null!==S&&void 0!==S&&S.parentId?`category/${null===S||void 0===S?void 0:S.parentUuid}`:"catalog/categories";b.Am.success(O("successfully.updated")),(0,f.dC)((()=>{E((0,x.ph)({...F,nextUrl:e})),E((0,Z.pE)(L))})),P(`/${e}`)})).finally((()=>{U(!1)}))},initialValues:{active:!0,...F.data},form:k,children:[(0,j.jsxs)(o.Z,{gutter:12,children:[(0,j.jsx)(i.Z,{span:12,children:_.map((e=>(0,j.jsx)(l.Z.Item,{label:O("name"),name:`title[${(null===e||void 0===e?void 0:e.locale)||"en"}]`,hidden:(null===e||void 0===e?void 0:e.locale)!==N,rules:[{required:(null===e||void 0===e?void 0:e.locale)===N,message:O("required")},{type:"string",min:2,max:200,message:O("min.2.max.200.chars")}],children:(0,j.jsx)(r.Z,{})},null===e||void 0===e?void 0:e.locale)))}),(0,j.jsx)(i.Z,{span:12,children:_.map((e=>(0,j.jsx)(l.Z.Item,{label:O("description"),name:`description[${(null===e||void 0===e?void 0:e.locale)||"en"}]`,hidden:(null===e||void 0===e?void 0:e.locale)!==N,rules:[{required:(null===e||void 0===e?void 0:e.locale)===N,message:O("required")},{type:"string",min:2,max:200,message:O("min.2.max.200.chars")}],children:(0,j.jsx)(v.Z,{rows:2})},null===e||void 0===e?void 0:e.locale)))}),(0,j.jsx)(i.Z,{span:12,children:(0,j.jsx)(l.Z.Item,{label:O("keywords"),name:"keywords",rules:[{required:!0,message:O("required")}],children:(0,j.jsx)(s.Z,{mode:"tags",style:{width:"100%"}})})}),!(null!==S&&void 0!==S&&S.parentId)&&(0,j.jsx)(i.Z,{span:12,children:(0,j.jsx)(l.Z.Item,{label:O("parent.category"),name:"parent_id",rules:[{required:!0,message:O("required")}],children:(0,j.jsx)(p.R,{refetch:!0,fetchOptions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const n={perPage:100,type:null!==S&&void 0!==S&&S.parentId?"main":"sub_shop",active:1,search:null!==e&&void 0!==e&&e.length?e:void 0};return g.Z.selectPaginate(n).then((e=>e.data.map((e=>{var n;return{label:null===e||void 0===e||null===(n=e.translation)||void 0===n?void 0:n.title,value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))))}})})}),(0,j.jsx)(i.Z,{span:12,children:(0,j.jsx)(l.Z.Item,{name:"input",label:O("position"),rules:[{required:!0,message:O("required")}],children:(0,j.jsx)(d.Z,{min:0,parser:e=>parseInt(e,10),max:32767,className:"w-100"})})}),(0,j.jsx)(i.Z,{span:4,children:(0,j.jsx)(l.Z.Item,{label:O("image"),name:"images",rules:[{required:!(null!==K&&void 0!==K&&K.length),message:O("required")}],children:(0,j.jsx)(m.Z,{type:"categories",imageList:K,setImageList:$,form:k,multiple:!1})})}),(0,j.jsx)(i.Z,{span:2,children:(0,j.jsx)(l.Z.Item,{label:O("active"),name:"active",valuePropName:"checked",children:(0,j.jsx)(c.Z,{})})})]}),(0,j.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:q,children:O("submit")})]})}},50881:(e,n,t)=>{t.d(n,{ZP:()=>F});var a=t(4942),l=t(87462),o=t(72791),i=t(28083),r=t(81694),s=t.n(r),d=t(88834),c=t(91940),u=t(69077),v=o.createContext(null),p=v.Provider;const m=v;var h=o.createContext(null),f=h.Provider,y=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},g=function(e,n){var t,r=o.useContext(m),v=o.useContext(h),p=o.useContext(u.E_),f=p.getPrefixCls,g=p.direction,b=o.useRef(),x=(0,d.sQ)(n,b),Z=(0,o.useContext)(c.aM).isFormItemInput,C=e.prefixCls,j=e.className,k=e.children,w=e.style,I=y(e,["prefixCls","className","children","style"]),O=f("radio",C),E="button"===((null===r||void 0===r?void 0:r.optionType)||v)?"".concat(O,"-button"):O,P=(0,l.Z)({},I);r&&(P.name=r.name,P.onChange=function(n){var t,a;null===(t=e.onChange)||void 0===t||t.call(e,n),null===(a=null===r||void 0===r?void 0:r.onChange)||void 0===a||a.call(r,n)},P.checked=e.value===r.value,P.disabled=e.disabled||r.disabled);var S=s()("".concat(E,"-wrapper"),(t={},(0,a.Z)(t,"".concat(E,"-wrapper-checked"),P.checked),(0,a.Z)(t,"".concat(E,"-wrapper-disabled"),P.disabled),(0,a.Z)(t,"".concat(E,"-wrapper-rtl"),"rtl"===g),(0,a.Z)(t,"".concat(E,"-wrapper-in-form-item"),Z),t),j);return o.createElement("label",{className:S,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},o.createElement(i.Z,(0,l.Z)({},P,{type:"radio",prefixCls:E,ref:x})),void 0!==k?o.createElement("span",null,k):null)},b=o.forwardRef(g);b.displayName="Radio";const x=b;var Z=t(29439),C=t(75179),j=t(1815),k=t(69019),w=o.forwardRef((function(e,n){var t=o.useContext(u.E_),i=t.getPrefixCls,r=t.direction,d=o.useContext(j.Z),c=(0,C.Z)(e.defaultValue,{value:e.value}),v=(0,Z.Z)(c,2),m=v[0],h=v[1];return o.createElement(p,{value:{onChange:function(n){var t=m,a=n.target.value;"value"in e||h(a);var l=e.onChange;l&&a!==t&&l(n)},value:m,disabled:e.disabled,name:e.name,optionType:e.optionType}},function(){var t,c=e.prefixCls,u=e.className,v=void 0===u?"":u,p=e.options,h=e.buttonStyle,f=void 0===h?"outline":h,y=e.disabled,g=e.children,b=e.size,Z=e.style,C=e.id,j=e.onMouseEnter,w=e.onMouseLeave,I=i("radio",c),O="".concat(I,"-group"),E=g;p&&p.length>0&&(E=p.map((function(e){return"string"===typeof e||"number"===typeof e?o.createElement(x,{key:e.toString(),prefixCls:I,disabled:y,value:e,checked:m===e},e):o.createElement(x,{key:"radio-group-value-options-".concat(e.value),prefixCls:I,disabled:e.disabled||y,value:e.value,checked:m===e.value,style:e.style},e.label)})));var P=b||d,S=s()(O,"".concat(O,"-").concat(f),(t={},(0,a.Z)(t,"".concat(O,"-").concat(P),P),(0,a.Z)(t,"".concat(O,"-rtl"),"rtl"===r),t),v);return o.createElement("div",(0,l.Z)({},(0,k.Z)(e),{className:S,style:Z,onMouseEnter:j,onMouseLeave:w,id:C,ref:n}),E)}())}));const I=o.memo(w);var O=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]])}return t},E=function(e,n){var t=o.useContext(u.E_).getPrefixCls,a=e.prefixCls,i=O(e,["prefixCls"]),r=t("radio",a);return o.createElement(f,{value:"button"},o.createElement(x,(0,l.Z)({prefixCls:r},i,{type:"radio",ref:n})))};const P=o.forwardRef(E);var S=x;S.Button=P,S.Group=I;const F=S},28083:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(87462),l=t(4942),o=t(45987),i=t(1413),r=t(15671),s=t(43144),d=t(60136),c=t(54062),u=t(72791),v=t(81694),p=t.n(v),m=function(e){(0,d.Z)(t,e);var n=(0,c.Z)(t);function t(e){var a;(0,r.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){var n=a.props,t=n.disabled,l=n.onChange;t||("checked"in a.props||a.setState({checked:e.target.checked}),l&&l({target:(0,i.Z)((0,i.Z)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var l="checked"in e?e.checked:e.defaultChecked;return a.state={checked:l},a}return(0,s.Z)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,i=n.className,r=n.style,s=n.name,d=n.id,c=n.type,v=n.disabled,m=n.readOnly,h=n.tabIndex,f=n.onClick,y=n.onFocus,g=n.onBlur,b=n.onKeyDown,x=n.onKeyPress,Z=n.onKeyUp,C=n.autoFocus,j=n.value,k=n.required,w=(0,o.Z)(n,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),I=Object.keys(w).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=w[n]),e}),{}),O=this.state.checked,E=p()(t,i,(e={},(0,l.Z)(e,"".concat(t,"-checked"),O),(0,l.Z)(e,"".concat(t,"-disabled"),v),e));return u.createElement("span",{className:E,style:r},u.createElement("input",(0,a.Z)({name:s,id:d,type:c,required:k,readOnly:m,disabled:v,tabIndex:h,className:"".concat(t,"-input"),checked:!!O,onClick:f,onFocus:y,onBlur:g,onKeyUp:Z,onKeyDown:b,onKeyPress:x,onChange:this.handleChange,autoFocus:C,ref:this.saveInput,value:j},I)),u.createElement("span",{className:"".concat(t,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return"checked"in e?(0,i.Z)((0,i.Z)({},n),{},{checked:e.checked}):null}}]),t}(u.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const h=m}}]);
//# sourceMappingURL=4750.6784eb01.chunk.js.map