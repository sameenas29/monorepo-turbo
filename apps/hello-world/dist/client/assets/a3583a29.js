import{r as f,S as q,j as D,R as K}from"./index.f796a179.js";const Y=!1;function k(){return k=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}var w;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(w||(w={}));var A=function(e){return e},B="beforeunload",z="popstate";function G(e){e===void 0&&(e={});var a=e,n=a.window,r=n===void 0?document.defaultView:n,s=r.history;function c(){var t=r.location,o=t.pathname,u=t.search,v=t.hash,l=s.state||{};return[l.idx,A({pathname:o,search:u,hash:v,state:l.usr||null,key:l.key||"default"})]}var i=null;function m(){if(i)d.call(i),i=null;else{var t=w.Pop,o=c(),u=o[0],v=o[1];if(d.length){if(u!=null){var l=h-u;l&&(i={action:t,location:v,retry:function(){b(l*-1)}},b(l))}}else L(t)}}r.addEventListener(z,m);var x=w.Pop,g=c(),h=g[0],p=g[1],E=V(),d=V();h==null&&(h=0,s.replaceState(k({},s.state,{idx:h}),""));function S(t){return typeof t=="string"?t:Q(t)}function P(t,o){return o===void 0&&(o=null),A(k({pathname:p.pathname,hash:"",search:""},typeof t=="string"?W(t):t,{state:o,key:J()}))}function T(t,o){return[{usr:t.state,key:t.key,idx:o},S(t)]}function C(t,o,u){return!d.length||(d.call({action:t,location:o,retry:u}),!1)}function L(t){x=t;var o=c();h=o[0],p=o[1],E.call({action:x,location:p})}function _(t,o){var u=w.Push,v=P(t,o);function l(){_(t,o)}if(C(u,v,l)){var y=T(v,h+1),O=y[0],R=y[1];try{s.pushState(O,"",R)}catch{r.location.assign(R)}L(u)}}function j(t,o){var u=w.Replace,v=P(t,o);function l(){j(t,o)}if(C(u,v,l)){var y=T(v,h),O=y[0],R=y[1];s.replaceState(O,"",R),L(u)}}function b(t){s.go(t)}var U={get action(){return x},get location(){return p},createHref:S,push:_,replace:j,go:b,back:function(){b(-1)},forward:function(){b(1)},listen:function(o){return E.push(o)},block:function(o){var u=d.push(o);return d.length===1&&r.addEventListener(B,$),function(){u(),d.length||r.removeEventListener(B,$)}}};return U}function $(e){e.preventDefault(),e.returnValue=""}function V(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function J(){return Math.random().toString(36).substr(2,8)}function Q(e){var a=e.pathname,n=a===void 0?"/":a,r=e.search,s=r===void 0?"":r,c=e.hash,i=c===void 0?"":c;return s&&s!=="?"&&(n+=s.charAt(0)==="?"?s:"?"+s),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function W(e){var a={};if(e){var n=e.indexOf("#");n>=0&&(a.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(a.search=e.substr(r),e=e.substr(0,r)),e&&(a.pathname=e)}return a}function X(){var e;return(e=f.exports.useContext(q))!=null?e:{}}const M=f.exports.createContext(void 0);let H=!0;const N={},re=({history:e,children:a})=>{const n=f.exports.useMemo(()=>e||G(),[e]),[r,s]=f.exports.useState(n.location),[c,i]=f.exports.useState(!1),{pending:m,locationServerProps:x,setLocationServerProps:g}=X();return I({location:r,pending:m,serverProps:x,scrollNeedsRestoration:c,onFinishNavigating:()=>i(!1)}),f.exports.useLayoutEffect(()=>{const h=n.listen(({location:p,action:E})=>{var P;N[r.key]=window.scrollY,g({pathname:p.pathname,search:p.search}),s(p);const d=(P=p.state)!=null?P:{},S=E==="POP"||!!d.scroll;i(S)});return()=>h()},[n,r,i,s,g]),D(M.Provider,{value:{history:n,location:r},children:a})};function Z(){if(Y)return{location:{},history:{}};const e=f.exports.useContext(M);if(e)return e;throw new Error("Router hooks and <Link> component must be used within a <Router> component")}function ne(){return Z().location}function F(e){K.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[e])}function I({location:e,pending:a,serverProps:n,scrollNeedsRestoration:r,onFinishNavigating:s}){f.exports.useEffect(()=>{window.history.scrollRestoration="manual"},[]),F(f.exports.useCallback(()=>{window.history.scrollRestoration="auto"},[])),f.exports.useLayoutEffect(()=>{if(H||!r){H=!1;return}const c=N[e.key];if(!a&&e.pathname===n.pathname&&e.search===n.search){if(e.hash){const m=document.querySelector(e.hash);if(m){m.scrollIntoView(),s();return}}if(c){window.scrollTo(0,c),s();return}window.scrollTo(0,0),s()}},[e.pathname,e.search,e.hash,e.key,a,n.pathname,n.search,r,s])}export{re as BrowserRouter,M as RouterContext,ne as useLocation,Z as useRouter};
//# sourceMappingURL=a3583a29.js.map
