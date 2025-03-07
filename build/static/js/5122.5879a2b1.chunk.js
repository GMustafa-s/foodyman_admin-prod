"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5122],{87320:(e,l,t)=>{t.d(l,{Z:()=>r});var n=t(72791),a=t(50881),o=t(79337),i=t(76770),s=t(12362),d=t(80184);const r=()=>{const e=(0,o.I0)(),{languages:l,defaultLang:t}=(0,o.v9)((e=>e.formLang),o.wU);(0,n.useEffect)((()=>{s.Z.getAllActive().then((l=>{let{data:t}=l;e((0,i.dc)(t)),e((0,i.mh)(t.find((e=>!(null===e||void 0===e||!e.default))).locale))}))}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(a.ZP.Group,{value:t,onChange:l=>{let{target:{value:t}}=l;e((0,i.mh)(t))},className:"float-right",buttonStyle:"solid",children:null===l||void 0===l?void 0:l.map((e=>(0,d.jsx)(a.ZP.Button,{value:e.locale,children:e.title},e.id)))})})}},58998:(e,l,t)=>{t.d(l,{Z:()=>h});var n=t(72791),a=t(7631);const o=t.p+"static/media/pin.0e41858db80c699cd8a2.png";var i=t(74569),s=t.n(i),d=t(85830);async function r(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.kr,t={latlng:`${null===e||void 0===e?void 0:e.lat},${null===e||void 0===e?void 0:e.lng}`,key:l};return s().get("https://maps.googleapis.com/maps/api/geocode/json",{params:t}).then((e=>{var l;let{data:t}=e;return null===(l=t.results[0])||void 0===l?void 0:l.formatted_address})).catch((e=>"not found"))}var c=t(7692),u=t(30577),v=t(33168),g=t(82378),m=t(80184);const f=(0,g.Z)();const h=(0,a.GoogleApiWrapper)({apiKey:f,libraries:["places","geometry"]})((function(e){var l,t;const[i,s]=(0,n.useState)(),{t:d}=(0,v.$)(),g=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const l={lat:e.coords.latitude,lng:e.coords.longitude};s(l)}),(function(e){u.Am.warning(d("turn.on.gps"))}))};(0,n.useEffect)((()=>{g()}),[]);const h=[{lat:Number(null===e||void 0===e||null===(l=e.location)||void 0===l?void 0:l.lat)||0,lng:Number(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.lng)||0}];for(var p=new e.google.maps.LatLngBounds,b=0;b<h.length;b++)p.extend(h[b]);return(0,m.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,m.jsx)("button",{className:"map-button",type:"button",onClick:()=>{g(),i&&(async l=>{const t={lat:null===l||void 0===l?void 0:l.lat,lng:null===l||void 0===l?void 0:l.lng};e.setLocation(t);const n=await r(t,f);e.setAddress(n)})(i)},children:(0,m.jsx)(c.nDs,{})}),(0,m.jsx)(a.Map,{cursor:"pointer",onClick:async(l,t,n)=>{const{latLng:a}=n,o={lat:a.lat(),lng:a.lng()};e.setLocation(o);const i=await r(o,f);e.setAddress(i)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,m.jsx)(a.Marker,{position:e.location,icon:{url:o,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},51720:(e,l,t)=>{t.d(l,{Z:()=>n});t(85830);function n(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const l=e.location.split(", ");return{lat:Number(null===l||void 0===l?void 0:l[0]),lng:Number(null===l||void 0===l?void 0:l[1])}}},82378:(e,l,t)=>{t.d(l,{Z:()=>o});var n=t(80470),a=t(85830);const o=()=>{var e,l;const{google_map_key:t}=null===(e=n.h.getState())||void 0===e||null===(l=e.globalSettings)||void 0===l?void 0:l.settings;return t||a.kr}},12098:(e,l,t)=>{function n(e,l){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=null===e||void 0===e?void 0:e.map((e=>({[null===e||void 0===e?void 0:e.locale]:l[`${t}[${null===e||void 0===e?void 0:e.locale}]`]?l[`${t}[${null===e||void 0===e?void 0:e.locale}]`]:void 0})));return Object.assign({},...n)}t.d(l,{Z:()=>n})},65675:(e,l,t)=>{t.r(l),t.d(l,{default:()=>p});var n=t(72791),a=t(16871),o=t(30577),i=t(77483),s=t(54080),d=t(79337),r=t(48030),c=t(33168),u=t(87320),v=t(12098),g=t(92752),m=t(43836),f=t(26009),h=t(80184);const p=()=>{const{t:e}=(0,c.$)(),{activeMenu:l}=(0,d.v9)((e=>e.menu),d.wU),t=(0,d.I0)(),[p]=i.Z.useForm(),b=(0,a.s0)(),{id:x}=(0,a.UO)(),[Z,j]=(0,n.useState)(!1),{languages:y}=(0,d.v9)((e=>e.formLang),d.wU);function N(e){if(!e)return{};const{translations:l}=e,t=y.map((e=>{var t;return{[`title[${e.locale}]`]:null===(t=l.find((l=>l.locale===e.locale)))||void 0===t?void 0:t.title}}));return Object.assign({},...t)}(0,n.useEffect)((()=>()=>{const e=p.getFieldsValue(!0);e.open_time=JSON.stringify(null===e||void 0===e?void 0:e.open_time),e.close_time=JSON.stringify(null===e||void 0===e?void 0:e.close_time),t((0,r.nc)({activeMenu:l,data:e}))}),[]);return(0,n.useEffect)((()=>{l.refetch&&(e=>{j(!0),g.Z.getById(e).then((e=>{var n;let a=e.data;const o={...a,mapCoordinates:{lat:Number(null===a||void 0===a?void 0:a.location.latitude),lng:Number(null===a||void 0===a?void 0:a.location.longitude)},...N(a),address:null===(n=a.address)||void 0===n?void 0:n.address};t((0,r.nc)({activeMenu:l,data:o})),p.setFieldsValue({...o})})).finally((()=>{t((0,r.A_)(l)),j(!1)}))})(x)}),[l.refetch]),(0,h.jsx)(s.Z,{loading:Z,title:e("edit.branch"),className:"h-100",extra:(0,h.jsx)(u.Z,{}),children:(0,h.jsx)(f.Z,{form:p,handleSubmit:n=>{const a={title:(0,v.Z)(y,n,"title"),address:{address:n.address,office:null,house:null,floor:null},location:{longitude:n.location.lng,latitude:n.location.lat}},i="seller/branch";return g.Z.update(x,a).then((()=>{o.Am.success(e("successfully.updated")),(0,d.dC)((()=>{t((0,r.ph)({...l,nextUrl:i})),t((0,m._)({}))})),b(`/${i}`)}))}})})}},26009:(e,l,t)=>{t.d(l,{Z:()=>h});var n=t(72791),a=t(77483),o=t(66106),i=t(30914),s=t(86005),d=t(87309),r=t(58998),c=t(33168),u=t(79337),v=t(51720),g=t(95568),m=t(85830),f=t(80184);function h(e){var l,t;let{form:h,handleSubmit:p}=e;const{t:b}=(0,c.$)(),{activeMenu:x}=(0,u.v9)((e=>e.menu),u.wU),{languages:Z,defaultLang:j}=(0,u.v9)((e=>e.formLang),u.wU),{settings:y}=(0,u.v9)((e=>e.globalSettings),u.wU),{google_map_key:N}=(0,u.v9)((e=>e.globalSettings.settings),u.wU),{ref:w}=(0,g.usePlacesWidget)({apiKey:N||m.kr,onPlaceSelected:e=>{const l={lat:null===e||void 0===e?void 0:e.geometry.location.lat(),lng:null===e||void 0===e?void 0:e.geometry.location.lng()};$(l),h.setFieldsValue({[`address[${j}]`]:null===e||void 0===e?void 0:e.formatted_address})}}),[S,k]=(0,n.useState)(!1),[_,$]=(0,n.useState)(null!==(l=null===x||void 0===x||null===(t=x.data)||void 0===t?void 0:t.mapCoordinates)&&void 0!==l?l:(0,v.Z)(y));return(0,f.jsxs)(a.Z,{name:"branch-form",layout:"vertical",onFinish:e=>{k(!0);const l={...e,location:_};p(l).finally((()=>k(!1)))},form:h,initialValues:{...x.data},className:"d-flex flex-column h-100",children:[(0,f.jsxs)(o.Z,{gutter:12,children:[(0,f.jsx)(i.Z,{span:12,children:Z.map(((e,l)=>(0,f.jsx)(a.Z.Item,{label:b("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===j,message:b("required")}],hidden:e.locale!==j,children:(0,f.jsx)(s.Z,{})},"title"+l)))}),(0,f.jsx)(i.Z,{span:12,children:(0,f.jsx)(a.Z.Item,{label:b("address"),name:"address",rules:[{required:!0,message:b("required")}],children:(0,f.jsx)("input",{className:"address-input",ref:w,placeholder:""})})}),(0,f.jsx)(i.Z,{span:24,children:(0,f.jsx)(r.Z,{location:_,setLocation:$,setAddress:e=>h.setFieldsValue({address:e})})})]}),(0,f.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,f.jsx)("div",{className:"pb-5",children:(0,f.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:S,children:b("submit")})})})]})}}}]);
//# sourceMappingURL=5122.5879a2b1.chunk.js.map