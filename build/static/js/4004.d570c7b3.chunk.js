(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4004],{58998:(e,r,t)=>{"use strict";t.d(r,{Z:()=>j});var s=t(72791),n=t(7631);const o=t.p+"static/media/pin.0e41858db80c699cd8a2.png";var l=t(74569),i=t.n(l),a=t(85830);async function d(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.kr,t={latlng:`${null===e||void 0===e?void 0:e.lat},${null===e||void 0===e?void 0:e.lng}`,key:r};return i().get("https://maps.googleapis.com/maps/api/geocode/json",{params:t}).then((e=>{var r;let{data:t}=e;return null===(r=t.results[0])||void 0===r?void 0:r.formatted_address})).catch((e=>"not found"))}var c=t(7692),u=t(30577),m=t(33168),p=t(82378),v=t(80184);const h=(0,p.Z)();const j=(0,n.GoogleApiWrapper)({apiKey:h,libraries:["places","geometry"]})((function(e){var r,t;const[l,i]=(0,s.useState)(),{t:a}=(0,m.$)(),p=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const r={lat:e.coords.latitude,lng:e.coords.longitude};i(r)}),(function(e){u.Am.warning(a("turn.on.gps"))}))};(0,s.useEffect)((()=>{p()}),[]);const j=[{lat:Number(null===e||void 0===e||null===(r=e.location)||void 0===r?void 0:r.lat)||0,lng:Number(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.lng)||0}];for(var g=new e.google.maps.LatLngBounds,x=0;x<j.length;x++)g.extend(j[x]);return(0,v.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,v.jsx)("button",{className:"map-button",type:"button",onClick:()=>{p(),l&&(async r=>{const t={lat:null===r||void 0===r?void 0:r.lat,lng:null===r||void 0===r?void 0:r.lng};e.setLocation(t);const s=await d(t,h);e.setAddress(s)})(l)},children:(0,v.jsx)(c.nDs,{})}),(0,v.jsx)(n.Map,{cursor:"pointer",onClick:async(r,t,s)=>{const{latLng:n}=s,o={lat:n.lat(),lng:n.lng()};e.setLocation(o);const l=await d(o,h);e.setAddress(l)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,v.jsx)(n.Marker,{position:e.location,icon:{url:o,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},35740:(e,r,t)=>{"use strict";t.d(r,{R:()=>d});var s=t(72791),n=t(48573),o=t.n(n),l=t(66818),i=t(37083),a=t(80184);const d=e=>{let{fetchOptions:r,debounceTimeout:t=400,refetch:n=!1,...d}=e;const[c,u]=(0,s.useState)(!1),[m,p]=(0,s.useState)([]),v=(0,s.useMemo)((()=>o()((e=>{p([]),u(!0),r(e).then((e=>{p(e),u(!1)}))}),t)),[r,t]);return(0,a.jsx)(l.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>v(""),filterOption:!1,onSearch:v,notFoundContent:c?(0,a.jsx)(i.Z,{size:"small"}):"no results",...d,options:m,onFocus:()=>{v("")}})}},6200:(e,r,t)=>{"use strict";t.d(r,{h:()=>d});var s=t(72791),n=t(48573),o=t.n(n),l=t(66818),i=t(37083),a=t(80184);const d=e=>{let{fetchOptions:r,debounceTimeout:t=400,onClear:n,...d}=e;const[c,u]=(0,s.useState)(!1),[m,p]=(0,s.useState)([]),v=(0,s.useMemo)((()=>o()((e=>{p([]),u(!0),r(e).then((e=>{p(e),u(!1)}))}),t)),[r,t]);return(0,a.jsx)(l.Z,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:v,onClear:()=>{v(""),n&&n()},notFoundContent:c?(0,a.jsx)(i.Z,{size:"small"}):"no results",...d,options:m,onFocus:()=>{v("")}})}},51720:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});t(85830);function s(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const r=e.location.split(", ");return{lat:Number(null===r||void 0===r?void 0:r[0]),lng:Number(null===r||void 0===r?void 0:r[1])}}},82378:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var s=t(80470),n=t(85830);const o=()=>{var e,r;const{google_map_key:t}=null===(e=s.h.getState())||void 0===e||null===(r=e.globalSettings)||void 0===r?void 0:r.settings;return t||n.kr}},39366:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(80470);function n(){var e,r;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;const l=null===(e=s.h.getState())||void 0===e||null===(r=e.currency)||void 0===r?void 0:r.defaultCurrency,i=Number(t).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),a=n||(null===l||void 0===l?void 0:l.symbol)||"$",d=o||(null===l||void 0===l?void 0:l.position)||"before";return"after"===d?`${i} ${a}`:`${a} ${i}`}},27081:(e,r,t)=>{"use strict";t.d(r,{K:()=>l});var s=t(16871),n=t(32808),o=t.n(n);const l=()=>{const e=(0,s.s0)(),r=(0,s.TH)(),t=o().parse(r.search,{ignoreQueryPrefix:!0});return{values:t,set:(r,s)=>e({search:o().stringify({...t,[r]:s})}),reset:r=>{const s={...t};s[r]&&delete s[r],e({search:o().stringify({...s})})},clear:()=>e({search:o().stringify({})}),merge:r=>e({search:o().stringify({...t,...r})}),get:e=>t[e],setMultiple:r=>{const s={...t,...r};e({search:o().stringify(s)})},resetMultiple:r=>{const s={...t};r.forEach((e=>{s[e]&&delete s[e]})),e({search:o().stringify(s)})}}}},24568:(e,r,t)=>{"use strict";t.d(r,{Z:()=>w});var s=t(72791),n=t(66106),o=t(30914),l=t(77483),i=t(90894),a=t(97943),d=t(86005),c=t(83099),u=t(87309),m=t(33168),p=t(11918),v=t(6200),h=t(45747),j=t(42252),g=t(39366),x=t(79337),Z=t(72426),f=t.n(Z),y=t(26650),b=t(80184);function w(e){var r;let{form:t,loading:Z,prev:w,locationFrom:P,locationTo:E,image:_,setImage:S}=e;const{t:q}=(0,m.$)(),{activeMenu:C}=(0,x.v9)((e=>e.menu),x.wU),{payments:I}=(0,x.v9)((e=>e.payment),x.wU),[k,N]=(0,s.useState)(null===C||void 0===C||null===(r=C.data)||void 0===r?void 0:r.type),[F,O]=(0,s.useState)(0);(0,s.useEffect)((()=>{if(k&&P&&E){const e={"address_from[latitude]":P.lat,"address_from[longitude]":P.lng,"address_to[latitude]":E.lat,"address_to[longitude]":E.lng,type_id:null===k||void 0===k?void 0:k.value};j.Z.calculate(e).then((e=>{let{data:r}=e;O(r.price)})).catch((e=>console.error(e)))}}),[k,P,E]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(n.Z,{gutter:24,children:[(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:q("type"),name:"type",rules:[{required:!0,message:q("required")}],children:(0,b.jsx)(v.h,{fetchOptions:async function(e){const r={search:e};return h.Z.getAll(r).then((e=>e.data.map((e=>({label:e.type,value:e.id})))))},onChange:e=>{N(e)}})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:q("image"),name:"images",rules:[{validator:()=>0===(null===_||void 0===_?void 0:_.length)?Promise.reject(new Error(q("required"))):Promise.resolve()}],children:(0,b.jsx)(p.Z,{type:"languages",imageList:_,setImageList:S,form:t,multiple:!1})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:q("payment.type"),name:"payment_type",rules:[{required:!0,message:q("missing.payment.type")}],children:(0,b.jsx)(v.h,{fetchOptions:async function(e){const r={search:e};return y.Z.getAll(r).then((e=>{var r,t;return null===(r=e.data)||void 0===r||null===(t=r.filter((e=>"cash"===e.tag||"wallet"===e.tag)))||void 0===t?void 0:t.map((e=>({label:q(e.tag),value:e.id})))}))}})})}),(0,b.jsx)(o.Z,{span:12}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:q("delivery.date"),name:"delivery_date",rules:[{required:!0,message:q("required")}],children:(0,b.jsx)(i.Z,{className:"w-100",placeholder:"",disabledDate:e=>f()().add(-1,"days")>=e})})}),(0,b.jsx)(o.Z,{span:12,children:(0,b.jsx)(l.Z.Item,{label:q("delivery.time"),name:"delivery_time",rules:[{required:!0,message:q("required")}],children:(0,b.jsx)(a.Z,{className:"w-100",format:"HH:mm",placeholder:""})})}),(0,b.jsx)(o.Z,{span:24,children:(0,b.jsx)(l.Z.Item,{label:q("note"),name:"note",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(q("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(q("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(q("required")))}],children:(0,b.jsx)(d.Z,{})})})]}),(0,b.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,b.jsxs)(c.Z,{children:[(0,b.jsx)(u.Z,{type:"default",htmlType:"button",onClick:w,children:q("prev")}),(0,b.jsx)(u.Z,{type:"primary",htmlType:"submit",loading:Z,disabled:!F,children:q("submit")})]}),(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)("span",{children:[q("total.price"),":"]}),(0,b.jsx)("span",{children:(0,g.Z)(F)})]})]})]})}},74807:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var s=t(72791),n=t(66106),o=t(30914),l=t(77483),i=t(86005),a=t(38243),d=t(83099),c=t(87309),u=t(33168),m=(t(35740),t(58998)),p=(t(28748),t(80184));const v=e=>{let{form:r,next:t,prev:v,location:h,setLocation:j}=e;const{t:g}=(0,u.$)(),[x,Z]=(0,s.useState)(null),[f,y]=(0,s.useState)([]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.Z,{gutter:24,children:[(0,p.jsxs)(o.Z,{span:12,children:[(0,p.jsx)(l.Z.Item,{label:g("username"),name:"username_to",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(g("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(g("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(g("required")))}],children:(0,p.jsx)(i.Z,{})}),(0,p.jsx)(l.Z.Item,{label:g("phone"),name:"phone_to",rules:[{validator:(e,r)=>r?r&&r<0?Promise.reject(new Error(g("must.be.positive"))):r&&(null===r||void 0===r?void 0:r.toString().length)<7?Promise.reject(new Error(g("min.7.numbers"))):Promise.resolve():Promise.reject(new Error(g("required")))}],children:(0,p.jsx)(a.Z,{className:"w-100"})}),(0,p.jsxs)(n.Z,{gutter:12,children:[(0,p.jsx)(o.Z,{span:8,children:(0,p.jsx)(l.Z.Item,{label:g("house"),name:"house_to",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(g("no.empty.space"))):Promise.resolve():Promise.reject(new Error(g("required")))}],children:(0,p.jsx)(i.Z,{})})}),(0,p.jsx)(o.Z,{span:8,children:(0,p.jsx)(l.Z.Item,{label:g("stage"),name:"stage_to",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(g("no.empty.space"))):Promise.resolve():Promise.reject(new Error(g("required")))}],children:(0,p.jsx)(i.Z,{})})}),(0,p.jsx)(o.Z,{span:8,children:(0,p.jsx)(l.Z.Item,{label:g("room"),name:"room_to",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(g("no.empty.space"))):Promise.resolve():Promise.reject(new Error(g("required")))}],children:(0,p.jsx)(i.Z,{})})})]})]}),(0,p.jsxs)(o.Z,{span:12,children:[(0,p.jsx)(l.Z.Item,{label:g("address"),name:"address_to",rules:[{required:!0,message:g("required")}],children:(0,p.jsx)(i.Z,{})}),(0,p.jsx)(m.Z,{location:h,setLocation:j,setAddress:e=>r.setFieldsValue({address_to:e})})]})]}),(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(c.Z,{type:"default",htmlType:"button",onClick:v,children:g("prev")}),(0,p.jsx)(c.Z,{type:"primary",htmlType:"button",onClick:t,children:g("next")})]})]})}},73696:(e,r,t)=>{"use strict";t.d(r,{Z:()=>j});var s=t(72791),n=t(66106),o=t(30914),l=t(77483),i=t(86005),a=t(38243),d=t(83099),c=t(87309),u=t(33168),m=t(35740),p=t(58998),v=t(28748),h=t(80184);const j=e=>{let{form:r,next:t,location:j,setLocation:g}=e;const{t:x}=(0,u.$)(),[Z,f]=(0,s.useState)(null),[y,b]=(0,s.useState)([]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.Z,{gutter:24,children:[(0,h.jsxs)(o.Z,{span:12,children:[(0,h.jsx)(l.Z.Item,{label:x("user"),name:"user_from",rules:[{required:!0,message:x("required")}],children:(0,h.jsx)(m.R,{fetchOptions:async function(e){const r={search:e,roles:"user","empty-shop":1};return f(!1),v.Z.search(r).then((e=>(b(e.data),e.data.map((e=>({label:[e.firstname,e.lastname].join(" "),value:e.id}))))))},refetch:Z,onChange:e=>{const t=y.find((r=>r.id===e.value));r.setFieldsValue({username_from:[t.firstname,t.lastname].join(" "),phone_from:t.phone})}})}),(0,h.jsx)(l.Z.Item,{label:x("username"),name:"username_from",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(x("no.empty.space"))):r&&(null===r||void 0===r?void 0:r.trim().length)<2?Promise.reject(new Error(x("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(i.Z,{})}),(0,h.jsx)(l.Z.Item,{label:x("phone"),name:"phone_from",rules:[{validator:(e,r)=>r?r&&r<0?Promise.reject(new Error(x("must.be.positive"))):r&&(null===r||void 0===r?void 0:r.toString().length)<7?Promise.reject(new Error(x("min.7.numbers"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(a.Z,{className:"w-100"})}),(0,h.jsxs)(n.Z,{gutter:12,children:[(0,h.jsx)(o.Z,{span:8,children:(0,h.jsx)(l.Z.Item,{label:x("house"),name:"house_from",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(x("no.empty.space"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(i.Z,{})})}),(0,h.jsx)(o.Z,{span:8,children:(0,h.jsx)(l.Z.Item,{label:x("stage"),name:"stage_from",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(x("no.empty.space"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(i.Z,{})})}),(0,h.jsx)(o.Z,{span:8,children:(0,h.jsx)(l.Z.Item,{label:x("room"),name:"room_from",rules:[{validator:(e,r)=>r?r&&""===(null===r||void 0===r?void 0:r.trim())?Promise.reject(new Error(x("no.empty.space"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(i.Z,{})})})]})]}),(0,h.jsxs)(o.Z,{span:12,children:[(0,h.jsx)(l.Z.Item,{label:x("address"),name:"address_from",rules:[{required:!0,message:x("required")}],children:(0,h.jsx)(i.Z,{})}),(0,h.jsx)(p.Z,{location:j,setLocation:g,setAddress:e=>r.setFieldsValue({address_from:e})})]})]}),(0,h.jsx)(d.Z,{children:(0,h.jsx)(c.Z,{type:"primary",htmlType:"button",onClick:t,children:x("next")})})]})}},59519:(e,r,t)=>{"use strict";t.d(r,{S:()=>s});const s=[{title:"sender.details",content:"First-content"},{title:"receiver.details",content:"Second-content"},{title:"parcel.details",content:"Third-content"}]},97943:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var s=t(87462),n=t(72791),o=t(90894),l=function(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)r.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(t[s[n]]=e[s[n]])}return t},i=o.Z.TimePicker,a=o.Z.RangePicker,d=n.forwardRef((function(e,r){return n.createElement(a,(0,s.Z)({},e,{dropdownClassName:e.popupClassName,picker:"time",mode:void 0,ref:r}))})),c=n.forwardRef((function(e,r){var t=e.addon,o=e.renderExtraFooter,a=e.popupClassName,d=l(e,["addon","renderExtraFooter","popupClassName"]),c=n.useMemo((function(){return o||(t||void 0)}),[t,o]);return n.createElement(i,(0,s.Z)({},d,{dropdownClassName:a,mode:void 0,ref:r,renderExtraFooter:c}))}));c.displayName="TimePicker",c.RangePicker=d;const u=c},24654:()=>{}}]);
//# sourceMappingURL=4004.d570c7b3.chunk.js.map