"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1933],{72957:(e,t,s)=>{s.d(t,{Z:()=>h});var l=s(72791),r=s(54080),n=s(13496),i=s(86307),o=s(16056),a=s(80184);const d={position:"absolute",zIndex:"1"},c={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:s,width:u,height:h,xAxis:v,customOptions:x,card:m,type:p,extra:f,direction:j,bodyClass:g}=e,Z=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return o.jd;case"bar":return o.B0;case"area":return o.fT;case"pie":return o.LB}})(p)));const b=window.innerWidth<768,y=()=>{if(k.current){var e;const t=k.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight=`${b?0:null===(e=w.current)||void 0===e?void 0:e.offsetWidth}px`,"rtl"===j&&(t.style.right="auto",t.style.left="0"),b&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,l.useEffect)((()=>{y()}),[]);const w=(0,l.useRef)(null),k=(0,l.useRef)();Z.xaxis={categories:v},x&&(Z={...Z,...x});const C=()=>(0,a.jsx)(i.ZP,{onResize:void setTimeout((()=>{y()}),600),children:(0,a.jsx)("div",{style:"rtl"===j?{direction:"ltr"}:{},className:"chartRef",ref:k,children:(0,a.jsx)(n.Z,{options:Z,type:p,series:s,width:u,height:h})})});return(0,a.jsx)(a.Fragment,{children:m?(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{className:`position-relative ${g}`,children:[(0,a.jsx)("div",{style:b?{}:d,children:t})&&(0,a.jsx)("h4",{className:"font-weight-bold",style:b?{}:d,children:t}),f&&(0,a.jsx)("div",{ref:w,style:b?{}:c,children:f}),C()]})}):C()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},47846:(e,t,s)=>{s.d(t,{Z:()=>d});s(72791);var l=s(33168),r=s(1760);const n=s.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",i=s.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=s.p+"static/media/nosell.32cb2c2cc548a15c820d.riv";var a=s(80184);const d=function(e){let{id:t="noresult",text:s=""}=e;const{t:d}=(0,l.$)(),c={src:{noproductsfound:n,noresult:i,nosell:o}[t],artboard:"New Artboard",autoplay:!0},{RiveComponent:u}=(0,r.useRive)(c);return(0,a.jsxs)("div",{className:"animation-canvas",children:[(0,a.jsx)("div",{style:{width:"100%",height:200},children:(0,a.jsx)(u,{})}),(0,a.jsx)("div",{className:"text text-center",children:d(s)})]})}},16056:(e,t,s)=>{s.d(t,{B0:()=>i,DM:()=>l,LB:()=>o,fT:()=>n,jd:()=>r});const l=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],r={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...l],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},n={...r},i={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...l],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}}},o={colors:[...l],plotOptions:{pie:{size:200,donut:{labels:{show:!0,total:{show:!1,showAlways:!0,label:"",fontSize:"18px",fontFamily:"Roboto",fontWeight:"bold",color:"#1a3353",formatter:function(e){return e.globals.seriesTotals.reduce(((e,t)=>e+t),0)+"Orders count"}}},size:"100%"}}},labels:[],dataLabels:{enabled:!0},legend:{show:!0}}},39366:(e,t,s)=>{s.d(t,{Z:()=>r});var l=s(80470);function r(){var e,t;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;const i=null===(e=l.h.getState())||void 0===e||null===(t=e.currency)||void 0===t?void 0:t.defaultCurrency,o=Number(s).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,"),a=r||(null===i||void 0===i?void 0:i.symbol)||"$",d=n||(null===i||void 0===i?void 0:i.position)||"before";return"after"===d?`${o} ${a}`:`${a} ${o}`}},86601:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ce});var l=s(72791),r=s(79337),n=s(48030),i=s(72063),o=s(94490),a=s(69647),d=s(63446),c=s(3455),u=s(94102),h=s(66106),v=s(30914),x=s(33168),m=s(16871),p=s(54080),f=s(66818),j=s(37083),g=s(75594),Z=s(72426),b=s.n(Z),y=s(72957),w=s(16056),k=s(80184);function C(){const{t:e}=(0,x.$)(),t=(0,r.I0)(),{counts:s,params:n,loading:i}=(0,r.v9)((e=>e.orderCounts),r.wU),{role:o}=(0,r.v9)((e=>e.auth.user),r.wU),{direction:a}=(0,r.v9)((e=>e.theme.theme),r.wU),d=(0,l.useMemo)((()=>s.map((e=>b()(e.date).format("D MMM")))),[s]),u=(0,l.useMemo)((()=>[{name:e("orders"),data:(null===s||void 0===s?void 0:s.map((e=>e.count)))||[]}]),[s]);return(0,k.jsxs)(p.Z,{title:e("orders"),extra:(0,k.jsxs)(f.Z,{value:n.time,size:"small",style:{minWidth:110},onSelect:e=>{const s={time:e};switch(t((0,c.KJ)(s)),o){case"admin":t((0,c.n8)(s));break;case"seller":t((0,c._I)(s))}},defaultValue:"subWeek",children:[(0,k.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,k.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,k.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]}),children:[i&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(j.Z,{})}),(0,k.jsx)("div",{className:"d-flex",children:(0,k.jsxs)("div",{className:"mr-5",children:[(0,k.jsx)("h2",{className:"font-weight-bold mb-1",children:s.reduce(((e,t)=>e+(null===t||void 0===t?void 0:t.count)),0)}),(0,k.jsxs)("p",{children:[(0,k.jsx)(g.Z,{color:w.DM[6]}),e("total.orders.count")]})]})}),(0,k.jsx)("div",{children:(0,k.jsx)(y.Z,{card:!1,series:u,xAxis:d,height:280,customOptions:{colors:[w.DM[6],w.DM[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:a})})]})}var N=s(39366);function O(){const{t:e}=(0,x.$)(),t=(0,r.I0)(),{defaultCurrency:s}=(0,r.v9)((e=>e.currency),r.wU),{sales:n,params:i,loading:o}=(0,r.v9)((e=>e.orderSales),r.wU),{role:a}=(0,r.v9)((e=>e.auth.user),r.wU),{direction:d}=(0,r.v9)((e=>e.theme.theme),r.wU),c=(0,l.useMemo)((()=>n.map((e=>b()(e.date).format("D MMM")))),[n]),h=(0,l.useMemo)((()=>[{name:e("sales"),data:n.map((e=>e.total_price.toFixed(2)))}]),[n]);return(0,k.jsxs)(p.Z,{title:e("sales"),extra:(0,k.jsxs)(f.Z,{value:i.time,size:"small",style:{minWidth:110},onSelect:e=>{const s={time:e};switch(t((0,u.wJ)(s)),a){case"admin":t((0,u.yS)(s));break;case"seller":t((0,u.xe)(s))}},defaultValue:0,children:[(0,k.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,k.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,k.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]}),children:[o&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(j.Z,{})}),(0,k.jsx)("div",{className:"d-flex",children:(0,k.jsxs)("div",{className:"mr-5",children:[(0,k.jsx)("h2",{className:"font-weight-bold mb-1",children:(0,N.Z)(n.reduce(((e,t)=>e+t.total_price),0),null===s||void 0===s?void 0:s.symbol,null===s||void 0===s?void 0:s.position)}),(0,k.jsxs)("p",{children:[(0,k.jsx)(g.Z,{color:w.DM[0]}),e("total.sales.amount")]})]})}),(0,k.jsx)("div",{children:(0,k.jsx)(y.Z,{card:!1,type:"area",series:h,xAxis:c,height:280,customOptions:{colors:w.DM,legend:{show:!1},stroke:{width:2.5,curve:"smooth"}},direction:d})})]})}var _=s(39868);function M(e){let{title:t="Orders",value:s=0,subtitle:l}=e;const{defaultCurrency:n}=(0,r.v9)((e=>e.currency),r.wU);return(0,k.jsxs)(p.Z,{children:[t&&(0,k.jsx)("h4",{className:"mb-0",children:t}),(0,k.jsx)("div",{className:""+(t?"mt-3":""),children:(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"d-flex align-items-center",children:(0,k.jsx)("h1",{className:"mb-0 font-weight-bold",children:(0,N.Z)(s,null===n||void 0===n?void 0:n.symbol,null===n||void 0===n?void 0:n.position)})}),l&&(0,k.jsx)("div",{className:"text-gray-light mt-1",children:l})]})})]})}var $=s(83099),P=s(87309);const S=[{label:"this.week",value:"subWeek"},{label:"this.month",value:"subMonth"},{label:"this.year",value:"subYear"}];function I(){const{t:e}=(0,x.$)(),{user:t}=(0,r.v9)((e=>e.auth),r.wU),s=(0,r.I0)(),{params:l}=(0,r.v9)((e=>e.statisticsCount),r.wU);return(0,k.jsx)(p.Z,{children:(0,k.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,k.jsxs)("div",{children:[(0,k.jsxs)("h2",{children:[e("hello"),", ",t.fullName," \ud83d\udc4b"]}),(0,k.jsx)("p",{children:e("hello.text")})]}),(0,k.jsx)($.Z,{children:S.map((t=>(0,k.jsx)(P.Z,{onClick:()=>(e=>{s((0,i.tr)({type:e}))})(t.value),type:(null===l||void 0===l?void 0:l.type)===t.value?"primary":"default",children:e(t.label)},t.value)))})]})})}var E=s(36755),U=s(17753),z=s(47846);function F(){const{t:e}=(0,x.$)(),t=(0,r.I0)(),{topCustomers:s,loading:l,params:n}=(0,r.v9)((e=>e.topCustomers),r.wU),{defaultCurrency:i}=(0,r.v9)((e=>e.currency),r.wU),{role:a}=(0,r.v9)((e=>e.auth.user),r.wU),d=(e,s)=>{const l={...n,[e]:s};switch(t((0,o.Ww)(l)),a){case"admin":t((0,o.sl)(l));break;case"seller":t((0,o.n)(l))}};return(0,k.jsxs)(p.Z,{title:e("top.customers"),extra:(0,k.jsxs)($.Z,{children:[(0,k.jsxs)(f.Z,{value:n.perPage,size:"small",style:{minWidth:110},onSelect:e=>d("perPage",e),children:[(0,k.jsx)(f.Z.Option,{value:5,children:`5 / ${e("page")}`}),(0,k.jsx)(f.Z.Option,{value:10,children:`10 / ${e("page")}`}),(0,k.jsx)(f.Z.Option,{value:50,children:`50 / ${e("page")}`}),(0,k.jsx)(f.Z.Option,{value:100,children:`100 / ${e("page")}`})]}),(0,k.jsxs)(f.Z,{value:n.time,size:"small",style:{minWidth:110},onSelect:e=>d("time",e),defaultValue:"subWeek",children:[(0,k.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,k.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,k.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]})]}),children:[l&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(j.Z,{})}),(0,k.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:s.length?s.map(((t,s)=>(0,k.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,k.jsxs)("div",{className:"d-flex avatar",children:[(0,k.jsx)(E.Z,{src:(0,U.Z)(t.img),width:40,height:40,preview:!1,className:"rounded"}),(0,k.jsxs)("div",{className:"ml-2 avatar-text",children:[(0,k.jsx)("h5",{className:"title",children:t.firstname+" "+t.lastname}),(0,k.jsx)("div",{className:"text-muted",children:t.phone})]})]}),(0,k.jsx)("div",{className:"d-flex",children:(0,k.jsxs)("div",{className:"mr-3 text-right",children:[(0,k.jsxs)("span",{className:"text-muted",children:[t.count," ",e("orders")]}),(0,k.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:(0,N.Z)(t.total_price,i.symbol,null===i||void 0===i?void 0:i.position)})]})})]},s))):(0,k.jsx)(h.Z,{children:(0,k.jsx)(v.Z,{span:24,children:(0,k.jsx)(z.Z,{id:"nosell"})})})})]})}var W=s(6533);function T(){const{t:e}=(0,x.$)(),t=(0,r.I0)(),{topProducts:s,loading:l,params:n}=(0,r.v9)((e=>e.topProducts),r.wU),{role:i}=(0,r.v9)((e=>e.auth.user),r.wU),o=(e,s)=>{const l={...n,[e]:s};switch(t((0,a.ut)(l)),i){case"admin":t((0,a.hT)(l));break;case"seller":t((0,a.t3)(l))}};return(0,k.jsxs)(p.Z,{title:e("top.selled.products"),extra:(0,k.jsxs)($.Z,{children:[(0,k.jsxs)(f.Z,{value:n.perPage,size:"small",style:{minWidth:110},onSelect:e=>o("perPage",e),children:[(0,k.jsx)(f.Z.Option,{value:5,children:`5 / ${e("page")}`}),(0,k.jsx)(f.Z.Option,{value:10,children:`10 / ${e("page")}`}),(0,k.jsx)(f.Z.Option,{value:50,children:`50 / ${e("page")}`}),(0,k.jsx)(f.Z.Option,{value:100,children:`100 / ${e("page")}`})]}),(0,k.jsxs)(f.Z,{value:n.time,size:"small",style:{minWidth:110},onSelect:e=>o("time",e),defaultValue:"subWeek",children:[(0,k.jsx)(f.Z.Option,{value:"subWeek",children:e("this.week")}),(0,k.jsx)(f.Z.Option,{value:"subMonth",children:e("this.month")}),(0,k.jsx)(f.Z.Option,{value:"subYear",children:e("this.year")})]})]}),children:[l&&(0,k.jsx)("div",{className:"loader",children:(0,k.jsx)(j.Z,{})}),(0,k.jsx)("div",{style:{overflowY:"auto",maxHeight:370},children:null!==s&&void 0!==s&&s.length?s.map(((t,s)=>(0,k.jsxs)("div",{className:"w-100 py-3 flex",children:[(0,k.jsxs)("div",{className:"d-flex avatar",children:[(0,k.jsx)(E.Z,{src:(0,W.Z)(null===t||void 0===t?void 0:t.img),width:40,height:40,preview:!1}),(0,k.jsx)("div",{className:"ml-2 avatar-text",children:(0,k.jsx)("h5",{className:"title",children:null===t||void 0===t?void 0:t.title})})]}),(0,k.jsx)("div",{className:"d-flex",children:(0,k.jsxs)("div",{className:"mr-3 text-right",children:[(0,k.jsx)("span",{className:"text-muted",children:e("sales")}),(0,k.jsx)("div",{className:"mb-0 h5 font-weight-bold",children:null===t||void 0===t?void 0:t.count})]})})]},s))):(0,k.jsx)(h.Z,{children:(0,k.jsx)(v.Z,{span:24,children:(0,k.jsx)(z.Z,{id:"nosell"})})})})]})}var D=s(77483),A=s(86005),K=s(1413);const R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"};var V=s(54291),Y=function(e,t){return l.createElement(V.Z,(0,K.Z)((0,K.Z)({},e),{},{ref:t,icon:R}))};Y.displayName="PlusCircleFilled";const L=l.forwardRef(Y),B=e=>{let{onFormSubmit:t}=e;const[s]=D.Z.useForm(),{t:l}=(0,x.$)();return(0,k.jsx)(D.Z,{form:s,onFinish:e=>{t(e),s.resetFields()},layout:"horizontal",className:"todo-form",children:(0,k.jsxs)(h.Z,{gutter:20,children:[(0,k.jsx)(v.Z,{xs:24,sm:24,md:12,lg:14,xl:18,children:(0,k.jsx)(D.Z.Item,{name:"name",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(l("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(l("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(l("required")))}],children:(0,k.jsx)(A.Z,{placeholder:l("todo.placeholder")})})}),(0,k.jsx)(v.Z,{xs:24,sm:24,md:12,lg:10,xl:6,children:(0,k.jsxs)(P.Z,{type:"primary",htmlType:"submit",block:!0,children:[(0,k.jsx)(L,{}),l("todo.add")]})})]})})};var H=s(87407),q=s(2126),J=s(32014);const G=e=>{let{todos:t,onTodoToggle:s}=e;const{t:l}=(0,x.$)();return(0,k.jsxs)(k.Fragment,{children:[0===t.length||(0,k.jsxs)(H.Z.Text,{children:[t.filter((e=>e.isComplete)).length," of ",t.length," ",l("remaining")]}),(0,k.jsx)("div",{style:{maxHeight:"280px",overflowY:"auto"},children:(0,k.jsx)(q.ZP,{locale:{emptyText:l("todo.empty")},dataSource:t,renderItem:e=>(0,k.jsx)(q.ZP.Item,{style:{paddingRight:0,paddingLeft:0},onClick:()=>s(e.id),children:(0,k.jsxs)($.Z,{className:"w-100 justify-content-between",children:[(0,k.jsxs)($.Z,{className:"align-items-end",children:[(0,k.jsx)(J.Z,{checked:e.isComplete}),(0,k.jsx)(H.Z.Text,{delete:e.isComplete,children:e.name})]}),(0,k.jsx)(H.Z.Text,{children:b()(e.date).format("MMM DD YYYY hh:mm a")})]})},e.id)})})]})};var X=s(98241);const Q=()=>{const e=(0,r.v9)((e=>e.todo.todos)),{t:t}=(0,x.$)(),s=(0,r.I0)();return(0,k.jsxs)(p.Z,{title:t("todo.list"),style:{height:"calc(100% - 20px)"},extra:(0,k.jsx)(P.Z,{danger:!0,type:"primary",disabled:0===e.filter((e=>e.isComplete)).length,onClick:()=>{s((0,X.Xd)(e.filter((e=>e.isComplete)).map((e=>e.id))))},children:t("archive")}),children:[(0,k.jsx)(B,{onFormSubmit:e=>s((0,X.rk)(e))}),(0,k.jsx)(G,{todos:e,onTodoToggle:e=>s((0,X.wv)(e))})]})},ee=e=>{let{counts:t}=e;const{t:s}=(0,x.$)();return(0,k.jsx)(p.Z,{title:s("orders"),children:(0,k.jsx)(y.Z,{type:"pie",series:[(null===t||void 0===t?void 0:t.progress_orders_count)||{data:[]},(null===t||void 0===t?void 0:t.delivered_orders_count)||{data:[]},(null===t||void 0===t?void 0:t.cancel_orders_count)||{data:[]}],xAxis:[s("in.progress.orders"),s("delivered.orders"),s("canceled.orders")],customOptions:{labels:[s("in.progress.orders"),s("delivered.orders"),s("canceled.orders")]}})})};function te(){const{t:e}=(0,x.$)(),t=(0,m.s0)(),s=(0,r.I0)(),{user:i}=(0,r.v9)((e=>e.auth),r.wU),{counts:o}=(0,r.v9)((e=>e.statisticsCount),r.wU),{theme:a}=(0,r.v9)((e=>e.theme),r.wU),d=(0,l.useMemo)((()=>!!a.parcelMode&&"admin"===(null===i||void 0===i?void 0:i.role)),[a,i]),c=(e,l)=>{const r="report/stock"===e?{id:e,url:e,name:l,refetch:!0,data:{value:"out_of_stock",label:"Out of stock"}}:{id:e,url:e,name:l,refetch:!0};s((0,n.K0)(r)),t(`/${e}`)};return(0,k.jsxs)("div",{children:[(0,k.jsx)(I,{}),d?(0,k.jsx)("div",{}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:e("in.progress.orders"),value:null===o||void 0===o?void 0:o.progress_orders_count,color:"purple",onClick:()=>c("seller"===(null===i||void 0===i?void 0:i.role)?"seller/orders?status=new":"orders?status=new",e("in.progress.orders"))})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:e("cancelled.orders"),value:null===o||void 0===o?void 0:o.cancel_orders_count,color:"red",onClick:()=>c("seller"===(null===i||void 0===i?void 0:i.role)?"seller/orders?status=canceled":"orders?status=canceled",e("cancelled.orders"))})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:e("delivered.orders"),value:null===o||void 0===o?void 0:o.delivered_orders_count,color:"green",onClick:()=>c("seller"===(null===i||void 0===i?void 0:i.role)?"seller/orders?status=delivered":"orders?status=delivered",e("delivered.orders"))})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:e("out.of.stock.products"),value:null===o||void 0===o?void 0:o.products_out_of_count,color:"red",onClick:()=>{"admin"===(null===i||void 0===i?void 0:i.role)&&c("report/stock",e("stock"))}})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:e("total.products"),value:null===o||void 0===o?void 0:o.products_count,color:"grey",onClick:()=>c("seller"===(null===i||void 0===i?void 0:i.role)?"seller/products":"catalog/products",e("products"))})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:e("order.reviews"),value:null===o||void 0===o?void 0:o.reviews_count,color:"purple",onClick:()=>c("seller"===(null===i||void 0===i?void 0:i.role)?"seller/reviews/order":"reviews/order",e("order.reviews"))})})]}),(0,k.jsxs)(h.Z,{gutter:16,children:[(0,k.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,k.jsx)(M,{title:e("total.earned"),value:null===o||void 0===o?void 0:o.total_earned,subtitle:e("last.30.days")})}),(0,k.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,k.jsx)(M,{title:e("delivery.earning"),value:null===o||void 0===o?void 0:o.delivery_earned,subtitle:e("last.30.days")})}),(0,k.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,k.jsx)(M,{title:e("total.order.tax"),value:null===o||void 0===o?void 0:o.tax_earned,subtitle:e("last.30.days")})}),(0,k.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,k.jsx)(M,{title:e("total.comission"),value:null===o||void 0===o?void 0:o.commission_earned,subtitle:e("last.30.days")})})]}),(0,k.jsxs)(h.Z,{gutter:24,children:[(0,k.jsx)(v.Z,{span:12,children:(0,k.jsx)(C,{})}),(0,k.jsx)(v.Z,{span:12,children:(0,k.jsx)(Q,{})}),(0,k.jsx)(v.Z,{span:12,children:(0,k.jsx)(T,{})}),(0,k.jsx)(v.Z,{span:12,children:(0,k.jsx)(O,{})}),(0,k.jsx)(v.Z,{span:12,children:(0,k.jsx)(F,{})}),(0,k.jsx)(v.Z,{span:12,children:(0,k.jsx)(ee,{counts:o})})]})]})]})}var se=s(28748);function le(){var e;const{t:t}=(0,x.$)(),[s,n]=(0,l.useState)(null),{counts:i}=(0,r.v9)((e=>e.statisticsCount),r.wU);return(0,l.useEffect)((()=>{se.Z.profileShow().then((e=>{let{data:t}=e;return n(t)}))}),[]),(0,k.jsxs)("div",{children:[(0,k.jsxs)(h.Z,{gutter:16,className:"mt-3",children:[(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:t("total.orders"),value:i.orders_count})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:t("in.progress.orders"),value:i.progress_orders_count})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:t("cancelled.orders"),value:i.cancel_orders_count})}),(0,k.jsx)(v.Z,{flex:"0 0 16.6%",children:(0,k.jsx)(_.Z,{title:t("delivered.orders"),value:i.delivered_orders_count})})]}),(0,k.jsx)(h.Z,{gutter:16,children:(0,k.jsx)(v.Z,{xs:24,sm:24,md:24,lg:24,xl:6,children:(0,k.jsx)(M,{title:t("balance"),value:null===s||void 0===s||null===(e=s.wallet)||void 0===e?void 0:e.price})})})]})}var re=s(77063);const ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"}}]},name:"smile",theme:"outlined"};var ie=function(e,t){return l.createElement(V.Z,(0,K.Z)((0,K.Z)({},e),{},{ref:t,icon:ne}))};ie.displayName="SmileOutlined";const oe=l.forwardRef(ie);function ae(){const{t:e}=(0,x.$)(),t=(0,r.I0)(),s=(0,m.s0)(),{user:l}=(0,r.v9)((e=>e.auth),r.wU);return(0,k.jsx)(p.Z,{children:(0,k.jsx)(re.ZP,{icon:(0,k.jsx)(oe,{}),title:`${e("welcome")}, ${null===l||void 0===l?void 0:l.fullName}`,subTitle:e("welcome.manager"),extra:(0,k.jsx)(P.Z,{type:"primary",onClick:()=>{t((0,n.bL)({id:"orders",url:"orders",name:e("orders")})),s("/orders")},children:e("get.started")})})})}function de(){const{t:e}=(0,x.$)(),t=(0,r.I0)(),s=(0,m.s0)(),{user:l}=(0,r.v9)((e=>e.auth),r.wU);return(0,k.jsx)(p.Z,{children:(0,k.jsx)(re.ZP,{icon:(0,k.jsx)(oe,{}),title:`${e("welcome")}, ${null===l||void 0===l?void 0:l.fullName}`,subTitle:e("welcome.manager"),extra:(0,k.jsx)(P.Z,{type:"primary",onClick:()=>{t((0,n.bL)({id:"orders",url:"seller/orders",name:e("orders")})),s("/seller/orders")},children:e("get.started")})})})}function ce(){const e=(0,r.I0)(),{activeMenu:t}=(0,r.v9)((e=>e.menu),r.wU),{user:s}=(0,r.v9)((e=>e.auth),r.wU),{loading:h,params:v}=(0,r.v9)((e=>e.statisticsCount),r.wU);(0,l.useEffect)((()=>{(t.refetch||v.type)&&(!function(){const t={time:v.type||"subMonth"},l={time:"subWeek"};switch(null===s||void 0===s?void 0:s.role){case"admin":e((0,i.dL)(t)),e((0,o.sl)(l)),e((0,a.hT)(l)),e((0,c.n8)(l)),e((0,u.yS)(l));break;case"manager":e((0,o.sl)(l)),e((0,a.hT)(l));break;case"seller":e((0,i.gm)(t)),e((0,o.n)(l)),e((0,a.t3)(l)),e((0,c._I)(l)),e((0,u.xe)(l));break;case"moderator":default:break;case"deliveryman":e((0,i.Hq)())}}(),e((0,n.A_)(t)))}),[t.refetch,v.type]);return(0,k.jsx)("div",{className:"h-100",children:h?(0,k.jsx)(d.Z,{size:"large"}):(()=>{switch(s.role){case"admin":case"seller":return(0,k.jsx)(te,{});case"manager":return(0,k.jsx)(ae,{});case"moderator":return(0,k.jsx)(de,{});case"deliveryman":return(0,k.jsx)(le,{});case"waiter":return(0,k.jsx)(m.Fg,{to:"/waiter/orders-board",replace:!0});default:return null}})()})}},39868:(e,t,s)=>{s.d(t,{Z:()=>n});s(72791);var l=s(54080),r=s(80184);function n(e){let{title:t="Orders",value:s=0,color:n="grey",onClick:i}=e;return(0,r.jsx)(l.Z,{className:"statistics-card",hoverable:!!i,onClick:i,children:(0,r.jsxs)("div",{className:"card-wrapper",children:[(0,r.jsx)("div",{className:"space"}),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)("h1",{className:"number",children:s})}),(0,r.jsx)("span",{className:`highlighter ${n}`}),t&&(0,r.jsx)("h4",{className:"title",children:t})]})})}},32014:(e,t,s)=>{s.d(t,{Z:()=>k});var l=s(4942),r=s(87462),n=s(72791),i=s(81694),o=s.n(i),a=s(28083),d=s(91940),c=s(93433),u=s(29439),h=s(41818),v=s(69077),x=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]])}return s},m=n.createContext(null),p=function(e,t){var s=e.defaultValue,i=e.children,a=e.options,d=void 0===a?[]:a,p=e.prefixCls,f=e.className,j=e.style,g=e.onChange,Z=x(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),b=n.useContext(v.E_),w=b.getPrefixCls,k=b.direction,C=n.useState(Z.value||s||[]),N=(0,u.Z)(C,2),O=N[0],_=N[1],M=n.useState([]),$=(0,u.Z)(M,2),P=$[0],S=$[1];n.useEffect((function(){"value"in Z&&_(Z.value||[])}),[Z.value]);var I=function(){return d.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},E=w("checkbox",p),U="".concat(E,"-group"),z=(0,h.Z)(Z,["value","disabled"]);d&&d.length>0&&(i=I().map((function(e){return n.createElement(y,{prefixCls:E,key:e.value.toString(),disabled:"disabled"in e?e.disabled:Z.disabled,value:e.value,checked:-1!==O.indexOf(e.value),onChange:e.onChange,className:"".concat(U,"-item"),style:e.style},e.label)})));var F={toggleOption:function(e){var t=O.indexOf(e.value),s=(0,c.Z)(O);-1===t?s.push(e.value):s.splice(t,1),"value"in Z||_(s);var l=I();null===g||void 0===g||g(s.filter((function(e){return-1!==P.indexOf(e)})).sort((function(e,t){return l.findIndex((function(t){return t.value===e}))-l.findIndex((function(e){return e.value===t}))})))},value:O,disabled:Z.disabled,name:Z.name,registerValue:function(e){S((function(t){return[].concat((0,c.Z)(t),[e])}))},cancelValue:function(e){S((function(t){return t.filter((function(t){return t!==e}))}))}},W=o()(U,(0,l.Z)({},"".concat(U,"-rtl"),"rtl"===k),f);return n.createElement("div",(0,r.Z)({className:W,style:j},z,{ref:t}),n.createElement(m.Provider,{value:F},i))},f=n.forwardRef(p);const j=n.memo(f);var g=function(e,t){var s={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(s[l[r]]=e[l[r]])}return s},Z=function(e,t){var s,i=e.prefixCls,c=e.className,u=e.children,h=e.indeterminate,x=void 0!==h&&h,p=e.style,f=e.onMouseEnter,j=e.onMouseLeave,Z=e.skipGroup,b=void 0!==Z&&Z,y=g(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),w=n.useContext(v.E_),k=w.getPrefixCls,C=w.direction,N=n.useContext(m),O=(0,n.useContext)(d.aM).isFormItemInput,_=n.useRef(y.value);n.useEffect((function(){null===N||void 0===N||N.registerValue(y.value)}),[]),n.useEffect((function(){if(!b)return y.value!==_.current&&(null===N||void 0===N||N.cancelValue(_.current),null===N||void 0===N||N.registerValue(y.value),_.current=y.value),function(){return null===N||void 0===N?void 0:N.cancelValue(y.value)}}),[y.value]);var M=k("checkbox",i),$=(0,r.Z)({},y);N&&!b&&($.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),N.toggleOption&&N.toggleOption({label:u,value:y.value})},$.name=N.name,$.checked=-1!==N.value.indexOf(y.value),$.disabled=y.disabled||N.disabled);var P=o()((s={},(0,l.Z)(s,"".concat(M,"-wrapper"),!0),(0,l.Z)(s,"".concat(M,"-rtl"),"rtl"===C),(0,l.Z)(s,"".concat(M,"-wrapper-checked"),$.checked),(0,l.Z)(s,"".concat(M,"-wrapper-disabled"),$.disabled),(0,l.Z)(s,"".concat(M,"-wrapper-in-form-item"),O),s),c),S=o()((0,l.Z)({},"".concat(M,"-indeterminate"),x)),I=x?"mixed":void 0;return n.createElement("label",{className:P,style:p,onMouseEnter:f,onMouseLeave:j},n.createElement(a.Z,(0,r.Z)({"aria-checked":I},$,{prefixCls:M,className:S,ref:t})),void 0!==u&&n.createElement("span",null,u))},b=n.forwardRef(Z);b.displayName="Checkbox";const y=b;var w=y;w.Group=j,w.__ANT_CHECKBOX=!0;const k=w},28083:(e,t,s)=>{s.d(t,{Z:()=>m});var l=s(87462),r=s(4942),n=s(45987),i=s(1413),o=s(15671),a=s(43144),d=s(60136),c=s(54062),u=s(72791),h=s(81694),v=s.n(h),x=function(e){(0,d.Z)(s,e);var t=(0,c.Z)(s);function s(e){var l;(0,o.Z)(this,s),(l=t.call(this,e)).handleChange=function(e){var t=l.props,s=t.disabled,r=t.onChange;s||("checked"in l.props||l.setState({checked:e.target.checked}),r&&r({target:(0,i.Z)((0,i.Z)({},l.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},l.saveInput=function(e){l.input=e};var r="checked"in e?e.checked:e.defaultChecked;return l.state={checked:r},l}return(0,a.Z)(s,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,s=t.prefixCls,i=t.className,o=t.style,a=t.name,d=t.id,c=t.type,h=t.disabled,x=t.readOnly,m=t.tabIndex,p=t.onClick,f=t.onFocus,j=t.onBlur,g=t.onKeyDown,Z=t.onKeyPress,b=t.onKeyUp,y=t.autoFocus,w=t.value,k=t.required,C=(0,n.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),O=this.state.checked,_=v()(s,i,(e={},(0,r.Z)(e,"".concat(s,"-checked"),O),(0,r.Z)(e,"".concat(s,"-disabled"),h),e));return u.createElement("span",{className:_,style:o},u.createElement("input",(0,l.Z)({name:a,id:d,type:c,required:k,readOnly:x,disabled:h,tabIndex:m,className:"".concat(s,"-input"),checked:!!O,onClick:p,onFocus:f,onBlur:j,onKeyUp:b,onKeyDown:g,onKeyPress:Z,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:w},N)),u.createElement("span",{className:"".concat(s,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?(0,i.Z)((0,i.Z)({},t),{},{checked:e.checked}):null}}]),s}(u.Component);x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}};const m=x}}]);
//# sourceMappingURL=1933.28141b35.chunk.js.map