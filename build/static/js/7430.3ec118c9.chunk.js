"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7430],{69688:(l,e,i)=>{i.d(e,{Z:()=>a});var d=i(36755),n=i(80184);const a=l=>{let{image:e,row:i,size:a=100}=l;return(0,n.jsx)(d.Z,{src:e||"https://via.placeholder.com/150",alt:"img_gallery",width:a,height:a,className:"rounded border",preview:!0,placeholder:!e,style:{objectFit:"contain"}},e+(null===i||void 0===i?void 0:i.id))}},77430:(l,e,i)=>{i.r(e),i.d(e,{default:()=>c});var d=i(54080),n=i(30394),a=i(27081),t=i(72791),o=i(91061),s=i(33168),r=i(72426),v=i.n(r),u=i(69688),h=i(80184);const c=()=>{const{t:l}=(0,s.$)(),e=(0,a.K)().get("uuid"),[i,r]=(0,t.useState)(!1),[c,m]=(0,t.useState)({});(0,t.useEffect)((()=>{e&&(r(!0),o.Z.getById(e).then((l=>{m(null===l||void 0===l?void 0:l.data)})).catch((()=>{r(!1)})).finally((()=>{r(!1)})))}),[e]);const p=(0,t.useMemo)((()=>{var l;return null===c||void 0===c||null===(l=c.invitations)||void 0===l?void 0:l.map((l=>null===l||void 0===l?void 0:l.shop))}),[c]);return(0,h.jsx)(d.Z,{bordered:!1,loading:i,children:(0,h.jsxs)(n.Z,{bordered:!0,children:[(0,h.jsx)(n.Z.Item,{label:l("avatar"),span:3,children:(0,h.jsx)(u.Z,{image:null===c||void 0===c?void 0:c.img,id:e})}),(0,h.jsx)(n.Z.Item,{label:l("firstname"),span:3,children:(null===c||void 0===c?void 0:c.firstname)||l("N/A")}),(0,h.jsx)(n.Z.Item,{label:l("lastname"),span:3,children:(null===c||void 0===c?void 0:c.lastname)||l("N/A")}),(0,h.jsx)(n.Z.Item,{label:l("birthday"),span:3,children:null!==c&&void 0!==c&&c.birthday?v()(null===c||void 0===c?void 0:c.birthday).format("YYYY-MM-DD"):l("N/A")}),(0,h.jsx)(n.Z.Item,{label:l("phone"),span:3,children:(null===c||void 0===c?void 0:c.phone)||l("N/A")}),(0,h.jsx)(n.Z.Item,{label:l("email"),span:3,children:(null===c||void 0===c?void 0:c.email)||l("N/A")}),!(null===p||void 0===p||!p.length)&&(0,h.jsx)(n.Z.Item,{label:l((null===p||void 0===p?void 0:p.length)>1?"shop":"shops"),span:3,children:null===p||void 0===p?void 0:p.map((l=>{var e;return null===l||void 0===l||null===(e=l.translation)||void 0===e?void 0:e.title})).join(", ")})]})})}}}]);
//# sourceMappingURL=7430.3ec118c9.chunk.js.map