"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8384],{79586:(e,t,n)=>{n.d(t,{Z:()=>c});n(72791);var a=n(87309),l=n(82622),r=n(30577),o=n(33168),s=n(19011),i=n(80184);function c(e){let{size:t="",onClick:n,type:c="default",...u}=e;const{t:d}=(0,o.$)(),{isDemo:v}=(0,s.Z)();return(0,i.jsx)(a.Z,{size:t,icon:(0,i.jsx)(l.Z,{}),onClick:e=>{v?r.Am.warning(d("cannot.work.demo")):n(e)},type:c,...u})}},255:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(72791),l=n(87407),r=n(56014),o=n(83099),s=n(25581),i=n(32385),c=n(43751),u=n(87309),d=n(99197),v=n(33168),f=n(80184);const{Text:h}=l.Z,p=e=>{let{columns:t=[],setColumns:n,style:l,size:p="",iconOnly:m}=e;const{t:x}=(0,v.$)(),[Z,g]=(0,a.useState)(!1),y=(0,f.jsx)(r.Z,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,f.jsx)(r.Z.Item,{children:(0,f.jsxs)(o.Z,{className:"d-flex justify-content-between",children:[(0,f.jsx)(h,{children:e.title}),(0,f.jsx)(s.Z,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,f.jsx)(i.Z,{overlay:y,trigger:["click"],onVisibleChange:e=>{g(e)},visible:Z,children:(0,f.jsx)(c.Z,{title:x("change.columns"),children:(0,f.jsx)(u.Z,{style:{...l},size:p,icon:(0,f.jsx)(d.Z,{}),children:m?null:x("Columns")})})})}},1728:(e,t,n)=>{n.d(t,{Z:()=>i});n(72791);var a=n(65873),l=n(77063),r=n(87309),o=n(33168),s=n(80184);const i=e=>{let{open:t,handleCancel:n,text:i,click:c,loading:u,subTitle:d}=e;const{t:v}=(0,o.$)();return(0,s.jsxs)(a.Z,{closable:!1,visible:t,footer:null,centered:!0,children:[(0,s.jsx)(l.ZP,{status:"warning",title:i,subTitle:d}),(0,s.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,s.jsx)(r.Z,{type:"primary",className:"mr-2",onClick:c,loading:u,children:v("yes")}),(0,s.jsx)(r.Z,{onClick:()=>n(),children:v("no")})]})]})}},28640:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{Z:()=>a})},68384:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(72791),l=n(24215),r=n(82622),o=n(15797),s=n(83099),i=n(87309),c=n(54080),u=n(95332),d=n(30577),v=n(73182),f=n(52666),h=n(79337),p=n(48030),m=n(17076),x=n(28640),Z=n(33168),g=n(24615),y=n(5067),C=n(65873),b=n(30394),w=n(66106),j=n(30914),k=n(36755),V=n(63446),H=n(6533),S=n(72426),I=n.n(S),D=n(80184);function z(e){var t,n,l,r;let{id:o,handleCancel:s}=e;const[c,u]=(0,a.useState)({}),[d,v]=(0,a.useState)(!1),{t:f}=(0,Z.$)();return(0,a.useEffect)((()=>{!function(e){v(!0),g.Z.getById(e).then((e=>u(e.data))).finally((()=>v(!1)))}(o)}),[o]),(0,D.jsx)(C.Z,{visible:!!o,title:f("product.review"),onCancel:s,footer:(0,D.jsx)(i.Z,{type:"default",onClick:s,children:f("cancel")}),children:d?(0,D.jsx)(V.Z,{}):(0,D.jsxs)(b.Z,{bordered:!0,children:[(0,D.jsx)(b.Z.Item,{span:3,label:f("id"),children:c.id}),(0,D.jsxs)(b.Z.Item,{span:3,label:f("user"),children:[null===(t=c.user)||void 0===t?void 0:t.firstname," ",(null===(n=c.user)||void 0===n?void 0:n.lastname)||""]}),(0,D.jsx)(b.Z.Item,{span:3,label:f("rating"),children:c.rating}),(0,D.jsx)(b.Z.Item,{span:3,label:f("image"),children:(0,D.jsx)(w.Z,{gutter:12,children:null===(l=c.galleries)||void 0===l?void 0:l.map((e=>(0,D.jsx)(j.Z,{children:(0,D.jsx)(k.Z,{width:145,height:100,src:(0,H.Z)(e.path),placeholder:!0,className:"rounded",style:{objectFit:"contain"},preview:!1})})))})}),(0,D.jsx)(b.Z.Item,{span:3,label:f("product.id"),children:null===(r=c.product)||void 0===r?void 0:r.id}),(0,D.jsx)(b.Z.Item,{span:3,label:f("comment"),children:c.comment}),(0,D.jsx)(b.Z.Item,{span:3,label:f("created.at"),children:I()(null===c||void 0===c?void 0:c.created_at).format("YYYY-MM-DD HH:mm")})]})})}var O=n(16871),_=n(79586),E=n(255),M=n(1728);function N(){const{t:e}=(0,Z.$)(),t=(0,h.I0)(),n=(0,O.s0)(),[C,b]=(0,a.useState)([{title:e("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:a=>(0,D.jsxs)("div",{className:"text-hover",onClick:()=>(a=>{t((0,p.bL)({url:`/users/user/${a.uuid}`,id:"user_info",name:e("user.info")})),n(`/users/user/${a.uuid}`,{state:{user_id:a.id}})})(a),children:[a.firstname," ",a.lastname||""]})},{title:e("shop"),dataIndex:"product",key:"shop",is_show:!0,render:a=>{var l,r;return(0,D.jsx)("div",{className:"text-hover",onClick:()=>(a=>{t((0,p.bL)({id:"edit-shop",url:`shop/${a.uuid}`,name:e("edit.shop")})),n(`/shop/${a.uuid}`)})(a.shop),children:null===(l=a.shop)||void 0===l||null===(r=l.translation)||void 0===r?void 0:r.title})}},{title:e("product"),dataIndex:"product",key:"product",is_show:!0,render:a=>{var l;return(0,D.jsx)("div",{className:"text-hover",onClick:()=>(a=>{t((0,p.bL)({id:"product-edit",url:`product/${a.uuid}`,name:e("edit.product")})),n(`/product/${a.uuid}`)})(a),children:null===a||void 0===a||null===(l=a.translation)||void 0===l?void 0:l.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:e=>(0,D.jsx)(o.Z,{disabled:!0,defaultValue:e})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>I()(e).format("YYYY-MM-DD HH:mm")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,D.jsxs)(s.Z,{children:[(0,D.jsx)(i.Z,{type:"primary",icon:(0,D.jsx)(l.Z,{}),onClick:()=>H(t.id)}),(0,D.jsx)(_.Z,{icon:(0,D.jsx)(r.Z,{}),onClick:()=>{k([t.id]),w(!0),L(!0)}})]})}]),{setIsModalVisible:w}=(0,a.useContext)(f._),[j,k]=(0,a.useState)(null),[V,H]=(0,a.useState)(null),[S,N]=(0,a.useState)(!1),[R,L]=(0,a.useState)(null),[T,P]=(0,a.useState)(null),{activeMenu:$}=(0,h.v9)((e=>e.menu),h.wU),{reviews:F,meta:A,loading:B,params:K}=(0,h.v9)((e=>e.productReview),h.wU);(0,a.useEffect)((()=>{$.refetch&&(t((0,y.O)()),t((0,p.A_)($)))}),[$.refetch]),(0,m.Z)((()=>{const e=$.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,y.O)(n))}),[$.data]);const Y={id:j,onChange:e=>{k(e)}};return(0,D.jsxs)(c.Z,{title:e("product.reviews"),extra:(0,D.jsxs)(s.Z,{wrap:!0,children:[(0,D.jsx)(_.Z,{size:"",onClick:()=>{null===j||0===j.length?d.Am.warning(e("select.the.product")):(w(!0),L(!1))},children:e("delete.selected")}),(0,D.jsx)(E.Z,{columns:C,setColumns:b})]}),children:[(0,D.jsx)(u.Z,{scroll:{x:!0},rowSelection:Y,columns:null===C||void 0===C?void 0:C.filter((e=>e.is_show)),dataSource:F,pagination:{pageSize:K.perPage,page:K.page,total:A.total,defaultCurrent:K.page},rowKey:e=>e.id,onChange:function(e,n,a){const{pageSize:l,current:r}=e,{field:o,order:s}=a,i=(0,x.Z)(s);t((0,p.nc)({activeMenu:$,data:{perPage:l,page:r,column:o,sort:i}}))},loading:B}),(0,D.jsx)(v.Z,{click:()=>{N(!0);const n={...Object.assign({},...j.map(((e,t)=>({[`ids[${t}]`]:e}))))};g.Z.delete(n).then((()=>{d.Am.success(e("successfully.deleted")),t((0,y.O)()),w(!1),L(null)})).finally((()=>{k(null),N(!1)}))},text:e(R?"delete":"all.delete"),setText:k,loading:S}),V&&(0,D.jsx)(z,{id:V,handleCancel:()=>H(null)}),T&&(0,D.jsx)(M.Z,{open:T,handleCancel:()=>P(null),click:T.restore?()=>{N(!0),g.Z.restoreAll().then((()=>{d.Am.success(e("successfully.restored")),t((0,y.O)()),P(null)})).finally((()=>N(!1)))}:()=>{N(!0),g.Z.dropAll().then((()=>{d.Am.success(e("successfully.deleted")),t((0,y.O)()),P(null)})).finally((()=>N(!1)))},text:T.restore?e("restore.modal.text"):e("read.carefully"),subTitle:T.restore?"":e("confirm.deletion"),loading:S,setText:k})]})}},99197:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1413),l=n(72791);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var o=n(54291),s=function(e,t){return l.createElement(o.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:r}))};s.displayName="TableOutlined";const i=l.forwardRef(s)},15797:(e,t,n)=>{n.d(t,{Z:()=>H});var a=n(87462),l=n(72791),r=n(1413),o=n(4942),s=n(15671),i=n(43144),c=n(60136),u=n(54062),d=n(84304),v=n(81694),f=n.n(v),h=n(11354);var p=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,a=n.onClick,l=n.index;13===t.keyCode&&a(t,l)},e}return(0,i.Z)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,a=e.value,l=e.allowHalf,r=e.focused,o=n+1,s=t;return 0===a&&0===n&&r?s+=" ".concat(t,"-focused"):l&&a+.5>=o&&a<o?(s+=" ".concat(t,"-half ").concat(t,"-active"),r&&(s+=" ".concat(t,"-focused"))):(s+=" ".concat(t,o<=a?"-full":"-zero"),o===a&&r&&(s+=" ".concat(t,"-focused"))),s}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,a=this.props,r=a.disabled,o=a.prefixCls,s=a.character,i=a.characterRender,c=a.index,u=a.count,d=a.value,v="function"===typeof s?s(this.props):s,f=l.createElement("li",{className:this.getClassName()},l.createElement("div",{onClick:r?null:t,onKeyDown:r?null:n,onMouseMove:r?null:e,role:"radio","aria-checked":d>c?"true":"false","aria-posinset":c+1,"aria-setsize":u,tabIndex:r?-1:0},l.createElement("div",{className:"".concat(o,"-first")},v),l.createElement("div",{className:"".concat(o,"-second")},v)));return i&&(f=i(f,this.props)),f}}]),n}(l.Component);function m(){}var x=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(e){var a;(0,s.Z)(this,n),(a=t.call(this,e)).stars=void 0,a.rate=void 0,a.onHover=function(e,t){var n=a.props.onHoverChange,l=a.getStarValue(t,e.pageX);l!==a.state.cleanedValue&&a.setState({hoverValue:l,cleanedValue:null}),n(l)},a.onMouseLeave=function(){var e=a.props.onHoverChange;a.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},a.onClick=function(e,t){var n=a.props.allowClear,l=a.state.value,r=a.getStarValue(t,e.pageX),o=!1;n&&(o=r===l),a.onMouseLeave(),a.changeValue(o?0:r),a.setState({cleanedValue:o?r:null})},a.onFocus=function(){var e=a.props.onFocus;a.setState({focused:!0}),e&&e()},a.onBlur=function(){var e=a.props.onBlur;a.setState({focused:!1}),e&&e()},a.onKeyDown=function(e){var t=e.keyCode,n=a.props,l=n.count,r=n.allowHalf,o=n.onKeyDown,s="rtl"===n.direction,i=a.state.value;t===h.Z.RIGHT&&i<l&&!s?(i+=r?.5:1,a.changeValue(i),e.preventDefault()):t===h.Z.LEFT&&i>0&&!s||t===h.Z.RIGHT&&i>0&&s?(i-=r?.5:1,a.changeValue(i),e.preventDefault()):t===h.Z.LEFT&&i<l&&s&&(i+=r?.5:1,a.changeValue(i),e.preventDefault()),o&&o(e)},a.saveRef=function(e){return function(t){a.stars[e]=t}},a.saveRate=function(e){a.rate=e};var l=e.value;return void 0===l&&(l=e.defaultValue),a.stars={},a.state={value:l,focused:!1,cleanedValue:null},a}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,d.Z)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,a=n.allowHalf,l="rtl"===n.direction,r=e+1;if(a){var o=this.getStarDOM(e),s=function(e){var t=function(e){var t,n,a=e.ownerDocument,l=a.body,r=a&&a.documentElement,o=e.getBoundingClientRect();return t=o.left,n=o.top,{left:t-=r.clientLeft||l.clientLeft||0,top:n-=r.clientTop||l.clientTop||0}}(e),n=e.ownerDocument,a=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var a=e.document;"number"!==typeof(t=a.documentElement[n])&&(t=a.body[n])}return t}(a),t.left}(o),i=o.clientWidth;(l&&t-s>i/2||!l&&t-s<i/2)&&(r-=.5)}return r}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,a=e.style,r=e.prefixCls,s=e.disabled,i=e.className,c=e.character,u=e.characterRender,d=e.tabIndex,v=e.direction,h=this.state,m=h.value,x=h.hoverValue,Z=h.focused,g=[],y=s?"".concat(r,"-disabled"):"",C=0;C<t;C+=1)g.push(l.createElement(p,{ref:this.saveRef(C),index:C,count:t,disabled:s,prefixCls:"".concat(r,"-star"),allowHalf:n,value:void 0===x?m:x,onClick:this.onClick,onHover:this.onHover,key:C,character:c,characterRender:u,focused:Z}));var b=f()(r,y,i,(0,o.Z)({},"".concat(r,"-rtl"),"rtl"===v));return l.createElement("ul",{className:b,style:a,onMouseLeave:s?null:this.onMouseLeave,tabIndex:s?-1:d,onFocus:s?null:this.onFocus,onBlur:s?null:this.onBlur,onKeyDown:s?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},g)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,r.Z)((0,r.Z)({},t),{},{value:e.value}):t}}]),n}(l.Component);x.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};const Z=x;const g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};var y=n(54291),C=function(e,t){return l.createElement(y.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:g}))};C.displayName="StarFilled";const b=l.forwardRef(C);var w=n(43751),j=n(69077),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},V=l.forwardRef((function(e,t){var n=e.prefixCls,r=e.tooltips,o=k(e,["prefixCls","tooltips"]),s=l.useContext(j.E_),i=s.getPrefixCls,c=s.direction,u=i("rate",n);return l.createElement(Z,(0,a.Z)({ref:t,characterRender:function(e,t){var n=t.index;return r?l.createElement(w.Z,{title:r[n]},e):e}},o,{prefixCls:u,direction:c}))}));V.displayName="Rate",V.defaultProps={character:l.createElement(b,null)};const H=V}}]);
//# sourceMappingURL=8384.d08ba916.chunk.js.map