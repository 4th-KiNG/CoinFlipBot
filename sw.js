if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>i(e,t),d={module:{uri:t},exports:l,require:o};s[t]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(n(...e),l)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/howler-ltr8JqEA.js",revision:null},{url:"assets/index-BBrFeJT8.css",revision:null},{url:"assets/index-CJWM_0BE.js",revision:null},{url:"index.html",revision:"653909772d98079b1ed8b89beadf0a88"},{url:"registerSW.js",revision:"3753f09b6ddfd035463e8cd6959b3ebc"},{url:"manifest.webmanifest",revision:"db71b53b257a23c4e97c5752854a0647"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
