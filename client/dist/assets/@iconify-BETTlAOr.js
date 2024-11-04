import{R as I}from"./react-Cq8SGPnk.js";const _=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!O(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!O(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return e&&!O(c,n)?null:c}return null},O=(t,e)=>t?!!((t.provider===""||t.provider.match(_))&&(e&&t.prefix===""||t.prefix.match(_))&&t.name.match(_)):!1,ht=Object.freeze({left:0,top:0,width:16,height:16}),A=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),W=Object.freeze({...ht,...A}),B=Object.freeze({...W,body:"",hidden:!1});function Lt(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function et(t,e){const n=Lt(t,e);for(const r in B)r in A?r in t&&!(r in n)&&(n[r]=A[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Mt(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return Object.keys(n).concat(Object.keys(r)).forEach(i),o}function Ot(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(c){i=et(r[c]||o[c],i)}return s(e),n.forEach(s),et(t,i)}function pt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=Mt(t);for(const o in r){const i=r[o];i&&(e(o,Ot(t,o,i)),n.push(o))}return n}const Ft={provider:"",aliases:{},not_found:{},...ht};function H(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function gt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!H(t,Ft))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(_)||typeof i.body!="string"||!H(i,B))return null}const r=e.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(_)||typeof s!="string"||!n[s]&&!r[s]||!H(i,B))return null}return e}const nt=Object.create(null);function At(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){const n=nt[t]||(nt[t]=Object.create(null));return n[e]||(n[e]=At(t,e))}function G(t,e){return gt(e)?pt(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Dt(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let j=!1;function mt(t){return typeof t=="boolean"&&(j=t),j}function Nt(t){const e=typeof t=="string"?D(t,!0,j):t;if(e){const n=v(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Rt(t,e){const n=D(t,!0,j);if(!n)return!1;const r=v(n.provider,n.prefix);return Dt(r,n.name,e)}function Ht(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),j&&!e&&!t.prefix){let o=!1;return gt(t)&&(t.prefix="",pt(t,(i,s)=>{s&&Rt(i,s)&&(o=!0)})),o}const n=t.prefix;if(!O({provider:e,prefix:n,name:"a"}))return!1;const r=v(e,n);return!!G(r,t)}const yt=Object.freeze({width:null,height:null}),bt=Object.freeze({...yt,...A}),Ut=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Bt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ot(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Ut);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=Bt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const zt=t=>t==="unset"||t==="undefined"||t==="none";function Qt(t,e){const n={...W,...t},r={...bt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const g=[],C=w.hFlip,m=w.vFlip;let u=w.rotate;C?m?u+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):m&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let b;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:b=o.height/2+o.top,g.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,g.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}u%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let a,d;s===null?(d=c===null?"1em":c==="auto"?f:c,a=ot(d,l/f)):(a=s==="auto"?l:s,d=c===null?ot(a,f/l):c==="auto"?f:c);const p={},y=(w,g)=>{zt(g)||(p[w]=g.toString())};return y("width",a),y("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:i}}const qt=/\sid="(\S+)"/g,$t="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Vt=0;function Kt(t,e=$t){const n=[];let r;for(;r=qt.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof e=="function"?e(i):e+(Vt++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const z=Object.create(null);function Wt(t,e){z[t]=e}function Q(t){return z[t]||z[""]}function J(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const X=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],F=[];for(;T.length>0;)T.length===1||Math.random()>.5?F.push(T.shift()):F.push(T.pop());X[""]=J({resources:["https://api.iconify.design"].concat(F)});function Gt(t,e){const n=J(e);return n===null?!1:(X[t]=n,!0)}function Y(t){return X[t]}const Jt=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let rt=Jt();function Xt(t,e){const n=Y(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function Yt(t){return t===404}const Zt=(t,e,n)=>{const r=[],o=Xt(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function te(t){if(typeof t=="string"){const e=Y(t);if(e)return e.path}return"/"}const ee=(t,e,n)=>{if(!rt){n("abort",424);return}let r=te(e.provider);switch(e.type){case"icons":{const i=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;rt(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Yt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ne={prepare:Zt,send:ee};function oe(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let a;c in f.icons?a=e.loaded:s===""||f.missing.has(c)?a=e.missing:a=e.pending;const d={provider:i,prefix:s,name:c};a.push(d)}),e}function wt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function re(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||wt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let ie=0;function se(t,e,n){const r=ie++,o=wt.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function ce(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?D(o,e,n):o;i&&r.push(i)}),r}var le={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function fe(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let h=t.resources.slice(0);for(s=[];h.length>1;){const x=Math.floor(Math.random()*h.length);s.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}s=s.concat(h)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",f=0,a,d=null,p=[],y=[];typeof r=="function"&&y.push(r);function w(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),w(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function C(h,x){x&&(y=[]),typeof h=="function"&&y.push(h)}function m(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:p.length,subscribe:C,abort:g}}function u(){l="failed",y.forEach(h=>{h(void 0,a)})}function b(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function Et(h,x,k){const L=x!=="success";switch(p=p.filter(S=>S!==h),l){case"pending":break;case"failed":if(L||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){a=k,u();return}if(L){a=k,p.length||(s.length?R():u());return}if(w(),b(),!t.random){const S=t.resources.indexOf(h.resource);S!==-1&&S!==t.index&&(t.index=S)}l="completed",y.forEach(S=>{S(k)})}function R(){if(l!=="pending")return;w();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{w(),l==="pending"&&(b(),u())},t.timeout);return}u();return}const x={status:"pending",resource:h,callback:(k,L)=>{Et(x,k,L)}};p.push(x),f++,d=setTimeout(R,t.rotate),n(h,e,x.callback)}return setTimeout(R),m}function xt(t){const e={...le,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=fe(e,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(a),a}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function it(){}const U=Object.create(null);function ae(t){if(!U[t]){const e=Y(t);if(!e)return;const n=xt(e),r={config:e,redundancy:n};U[t]=r}return U[t]}function ue(t,e,n){let r,o;if(typeof t=="string"){const i=Q(t);if(!i)return n(void 0,424),it;o=i.send;const s=ae(t);s&&(r=s.redundancy)}else{const i=J(t);if(i){r=xt(i);const s=t.resources?t.resources[0]:"",c=Q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),it):r.query(e,o,n)().abort}const st="iconify2",E="iconify",It=E+"-count",ct=E+"-version",St=36e5,de=168;function q(t,e){try{return t.getItem(e)}catch{}}function Z(t,e,n){try{return t.setItem(e,n),!0}catch{}}function lt(t,e){try{t.removeItem(e)}catch{}}function $(t,e){return Z(t,It,e.toString())}function V(t){return parseInt(q(t,It))||0}const N={local:!0,session:!0},vt={local:new Set,session:new Set};let tt=!1;function he(t){tt=t}let M=typeof window>"u"?{}:window;function Ct(t){const e=t+"Storage";try{if(M&&M[e]&&typeof M[e].length=="number")return M[e]}catch{}N[t]=!1}function kt(t,e){const n=Ct(t);if(!n)return;const r=q(n,ct);if(r!==st){if(r){const c=V(n);for(let l=0;l<c;l++)lt(n,E+l.toString())}Z(n,ct,st),$(n,0);return}const o=Math.floor(Date.now()/St)-de,i=c=>{const l=E+c.toString(),f=q(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&e(a,c))return!0}catch{}lt(n,l)}};let s=V(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,$(n,s)):vt[t].add(c))}function Tt(){if(!tt){he(!0);for(const t in N)kt(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=v(r,o);if(!G(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function pe(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in N)kt(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function ge(t,e){tt||Tt();function n(r){let o;if(!N[r]||!(o=Ct(r)))return;const i=vt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=V(o),!$(o,s+1))return;const c={cached:Math.floor(Date.now()/St),provider:t.provider,data:e};return Z(o,E+s.toString(),JSON.stringify(c))}e.lastModified&&!pe(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function ft(){}function me(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,re(t)}))}function ye(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=Q(n)))return;i.prepare(n,r,o).forEach(c=>{ue(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=G(t,l);if(!f.length)return;const a=t.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),ge(t,l)}catch(f){console.error(f)}me(t)})})}))}const be=(t,e)=>{const n=ce(t,!0,mt()),r=oe(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,ft)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(v(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,p=v(f,a),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),o[f][a].push(d))}),i.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&ye(l,o[f][a])}),e?se(e,r,i):ft};function we(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in yt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const xe=/[\s,]+/;function Ie(t,e){e.split(xe).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Se(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}function ve(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ce(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ke(t){return"data:image/svg+xml,"+Ce(t)}function Te(t){return'url("'+ke(t)+'")'}let P;function _e(){try{P=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{P=null}}function Pe(t){return P===void 0&&_e(),P?P.createHTML(t):t}const _t={...bt,inline:!1},je={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ee={display:"inline-block"},K={backgroundColor:"currentColor"},Pt={backgroundColor:"transparent"},at={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ut={WebkitMask:K,mask:K,background:Pt};for(const t in ut){const e=ut[t];for(const n in at)e[t+n]=at[n]}const Le={..._t,inline:!0};function dt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Me=(t,e,n,r)=>{const o=n?Le:_t,i=we(o,e),s=e.mode||"svg",c={},l=e.style||{},f={...s==="svg"?je:{},ref:r};for(let m in e){const u=e[m];if(u!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&Ie(i,u);break;case"color":c.color=u;break;case"rotate":typeof u=="string"?i[m]=Se(u):typeof u=="number"&&(i[m]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete f["aria-hidden"];break;default:o[m]===void 0&&(f[m]=u)}}const a=Qt(t,i),d=a.attributes;if(i.inline&&(c.verticalAlign="-0.125em"),s==="svg"){f.style={...c,...l},Object.assign(f,d);let m=0,u=e.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:Pe(Kt(a.body,u?()=>u+"ID"+m++:"iconifyReact"))},I.createElement("svg",f)}const{body:p,width:y,height:w}=t,g=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),C=ve(p,{...d,width:y+"",height:w+""});return f.style={...c,"--svg":Te(C),width:dt(d.width),height:dt(d.height),...Ee,...g?K:Pt,...l},I.createElement("span",f)};mt(!0);Wt("",ne);if(typeof document<"u"&&typeof window<"u"){Tt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Ht(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Gt(n,o)||console.error(r)}catch{console.error(r)}}}}class jt extends I.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(e||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=D(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=Nt(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:be([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,n=this.state.icon;if(n===null)return e.children?e.children:I.createElement("span",{});let r=e;return n.classes&&(r={...e,className:(typeof e.className=="string"?e.className+" ":"")+n.classes.join(" ")}),Me({...W,...n.data},r,e._inline,e._ref)}}const Fe=I.forwardRef(function(e,n){const r={...e,_ref:n,_inline:!1};return I.createElement(jt,r)});I.forwardRef(function(e,n){const r={...e,_ref:n,_inline:!0};return I.createElement(jt,r)});export{Fe as I};
