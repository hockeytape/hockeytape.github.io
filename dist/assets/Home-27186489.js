import{m as g,a as y,b as U,_ as H,n as K,V as M,l as F,k as J}from"./_plugin-vue_export-helper-40ae98c8.js";import{p as m,l as h,x as W,m as o,Q as _,R as C,c as N,q as j,H as x,I as L,J as i,L as z,O as Y,P as q,K as l,G as Q}from"./index-91a91454.js";const D=""+new URL("art1-6c89a244.png",import.meta.url).href;const X=m({fluid:{type:Boolean,default:!1},...g(),...y()},"VContainer"),Z=h()({name:"VContainer",props:X(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=W();return U(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),P=(()=>_.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),E=(()=>_.reduce((e,n)=>{const t="offset"+C(n);return e[t]={type:[String,Number],default:null},e},{}))(),$=(()=>_.reduce((e,n)=>{const t="order"+C(n);return e[t]={type:[String,Number],default:null},e},{}))(),S={col:Object.keys(P),offset:Object.keys(E),order:Object.keys($)};function ee(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const te=["auto","start","end","center","baseline","stretch"],ne=m({cols:{type:[Boolean,String,Number],default:!1},...P,offset:{type:[String,Number],default:null},...E,order:{type:[String,Number],default:null},...$,alignSelf:{type:String,default:null,validator:e=>te.includes(e)},...g(),...y()},"VCol"),V=h()({name:"VCol",props:ne(),setup(e,n){let{slots:t}=n;const a=N(()=>{const s=[];let r;for(r in S)S[r].forEach(u=>{const f=e[u],v=ee(r,u,f);v&&s.push(v)});const d=s.some(u=>u.startsWith("v-col-"));return s.push({"v-col":!d||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return j(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),b=["start","end","center"],I=["space-between","space-around","space-evenly"];function p(e,n){return _.reduce((t,a)=>{const s=e+C(a);return t[s]=n(),t},{})}const se=[...b,"baseline","stretch"],A=e=>se.includes(e),O=p("align",()=>({type:String,default:null,validator:A})),ae=[...b,...I],R=e=>ae.includes(e),B=p("justify",()=>({type:String,default:null,validator:R})),oe=[...b,...I,"stretch"],G=e=>oe.includes(e),T=p("alignContent",()=>({type:String,default:null,validator:G})),k={align:Object.keys(O),justify:Object.keys(B),alignContent:Object.keys(T)},le={align:"align",justify:"justify",alignContent:"align-content"};function ce(e,n,t){let a=le[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const re=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A},...O,justify:{type:String,default:null,validator:R},...B,alignContent:{type:String,default:null,validator:G},...T,...g(),...y()},"VRow"),w=h()({name:"VRow",props:re(),setup(e,n){let{slots:t}=n;const a=N(()=>{const s=[];let r;for(r in k)k[r].forEach(d=>{const u=e[d],f=ce(r,d,u);f&&s.push(f)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return j(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),ie={},c=e=>(Y("data-v-60a8679c"),e=e(),q(),e),ue=c(()=>l("div",{class:"py-2"},null,-1)),de=c(()=>l("div",{class:"text-body-2 font-weight-bold mb-n1"},"Aliens On Ice EP",-1)),fe=c(()=>l("div",{class:"text-body-2 font-weight-light mb-n1 font-italic coolColor"},"Coming soon...",-1)),_e=c(()=>l("div",{class:"py-4"},null,-1)),ge=c(()=>l("h1",{class:"text-h3 font-weight-bold custom-font makeSmaller"},"HOCKEYTAPE",-1)),ye=c(()=>l("div",{class:"py-3"},null,-1)),me=c(()=>l("p",null,"Enter the mysterious realm where icy wobbles cut through the silence. Join the movement and explore the depths of sound.",-1)),he=c(()=>l("div",{class:"py-8"},null,-1));function Ce(e,n){return x(),L(Z,{class:"fill-height app-container"},{default:i(()=>[o(K,{class:"align-center text-center fill-height"},{default:i(()=>[o(M,{height:"300",src:D}),ue,de,fe,_e,ge,ye,o(w,{class:"d-flex align-center justify-center"},{default:i(()=>[o(V,{cols:"auto"},{default:i(()=>[me]),_:1})]),_:1}),o(w,{class:"d-flex align-center justify-center"},{default:i(()=>[o(V,{cols:"auto"},{default:i(()=>[o(F,{href:"https://soundcloud.com/hockeytape","min-width":"164",rel:"noopener noreferrer",target:"_blank",variant:"text",class:"prettyColor"},{default:i(()=>[o(J,{icon:"mdi-soundcloud",size:"large",start:""}),z(" Soundcloud ")]),_:1}),he]),_:1})]),_:1})]),_:1})]),_:1})}const be=H(ie,[["render",Ce],["__scopeId","data-v-60a8679c"]]),Se=Q({__name:"Home",setup(e){return(n,t)=>(x(),L(be))}});export{Se as default};
