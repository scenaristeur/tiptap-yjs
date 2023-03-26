(function(){"use strict";var e={1591:function(e,t,o){var i=o(9242),r=o(3396);function n(e,t,o,i,n,s){const c=(0,r.up)("router-view"),a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(c),(0,r._)("nav",null,[(0,r.Wm)(a,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(a,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})])])}var s={name:"HomeView",components:{}},c=o(89);const a=(0,c.Z)(s,[["render",n]]);var u=a,l=o(5431);(0,l.z)("/tiptap-yjs/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noosphere has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=o(2483);const h={class:"home"};function f(e,t,o,i,n,s){const c=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(c,{msg:"Welcome to Your Vue.js App"})])}function p(e,t,o,i,n,s){const c=(0,r.up)("TipTapEditor");return(0,r.wg)(),(0,r.j4)(c)}var g=o(7139);const m={key:0,class:"editor"},v={class:"editor__footer"},b={class:"editor__name"},y={class:"editor__name"};function k(e,t,o,i,n,s){const c=(0,r.up)("menu-bar"),a=(0,r.up)("editor-content");return n.editor?((0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(c,{class:"editor__header",editor:n.editor},null,8,["editor"]),(0,r.Wm)(a,{class:"editor__content",editor:n.editor},null,8,["editor"]),(0,r._)("div",v,[(0,r._)("div",{class:(0,g.C_)(`editor__status editor__status--${n.status}`)},["connected"===n.status?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Uk)((0,g.zw)(n.editor.storage.collaborationCursor.users.length)+" user"+(0,g.zw)(1===n.editor.storage.collaborationCursor.users.length?"":"s")+" online in ",1),(0,r._)("div",b,[(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>s.setRoom&&s.setRoom(...e))},(0,g.zw)(n.room),1)])],64)):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Uk)(" offline ")],64))],2),(0,r._)("div",y,[(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>s.setName&&s.setName(...e))},(0,g.zw)(n.currentUser.name),1)])])])):(0,r.kq)("",!0)}var w=o(7601),A=o(2019),C=o(5808),_=o(5017),O=o(3778),U=o(3747),H=o(1531),R=o(6355),B=o(7200),N=o(3248);function S(e,t,o,i,n,s){const c=(0,r.up)("MenuItem");return(0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.items,((e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,["divider"===e.type?((0,r.wg)(),(0,r.iD)("div",{class:"divider",key:`divider${t}`})):((0,r.wg)(),(0,r.j4)(c,(0,r.dG)({key:t},e),null,16))],64)))),256))])}const j=["title"],M={class:"remix"},T=["xlink:href"];function E(e,t,o,i,n,s){return(0,r.wg)(),(0,r.iD)("button",{class:(0,g.C_)(["menu-item",{"is-active":o.isActive?o.isActive():null}]),onClick:t[0]||(t[0]=(...e)=>o.action&&o.action(...e)),title:o.title},[((0,r.wg)(),(0,r.iD)("svg",M,[(0,r._)("use",{"xlink:href":`${n.remixiconUrl}#ri-${o.icon}`},null,8,T)]))],10,j)}var F=o(4727),L={props:{icon:{type:String,required:!0},title:{type:String,required:!0},action:{type:Function,required:!0},isActive:{type:Function,default:null}},data(){return{remixiconUrl:F}}};const x=(0,c.Z)(L,[["render",E]]);var D=x,Z={components:{MenuItem:D},props:{editor:{type:Object,required:!0}},data(){return{items:[{icon:"bold",title:"Bold",action:()=>this.editor.chain().focus().toggleBold().run(),isActive:()=>this.editor.isActive("bold")},{icon:"italic",title:"Italic",action:()=>this.editor.chain().focus().toggleItalic().run(),isActive:()=>this.editor.isActive("italic")},{icon:"strikethrough",title:"Strike",action:()=>this.editor.chain().focus().toggleStrike().run(),isActive:()=>this.editor.isActive("strike")},{icon:"code-view",title:"Code",action:()=>this.editor.chain().focus().toggleCode().run(),isActive:()=>this.editor.isActive("code")},{icon:"mark-pen-line",title:"Highlight",action:()=>this.editor.chain().focus().toggleHighlight().run(),isActive:()=>this.editor.isActive("highlight")},{type:"divider"},{icon:"h-1",title:"Heading 1",action:()=>this.editor.chain().focus().toggleHeading({level:1}).run(),isActive:()=>this.editor.isActive("heading",{level:1})},{icon:"h-2",title:"Heading 2",action:()=>this.editor.chain().focus().toggleHeading({level:2}).run(),isActive:()=>this.editor.isActive("heading",{level:2})},{icon:"paragraph",title:"Paragraph",action:()=>this.editor.chain().focus().setParagraph().run(),isActive:()=>this.editor.isActive("paragraph")},{icon:"list-unordered",title:"Bullet List",action:()=>this.editor.chain().focus().toggleBulletList().run(),isActive:()=>this.editor.isActive("bulletList")},{icon:"list-ordered",title:"Ordered List",action:()=>this.editor.chain().focus().toggleOrderedList().run(),isActive:()=>this.editor.isActive("orderedList")},{icon:"list-check-2",title:"Task List",action:()=>this.editor.chain().focus().toggleTaskList().run(),isActive:()=>this.editor.isActive("taskList")},{icon:"code-box-line",title:"Code Block",action:()=>this.editor.chain().focus().toggleCodeBlock().run(),isActive:()=>this.editor.isActive("codeBlock")},{type:"divider"},{icon:"double-quotes-l",title:"Blockquote",action:()=>this.editor.chain().focus().toggleBlockquote().run(),isActive:()=>this.editor.isActive("blockquote")},{icon:"separator",title:"Horizontal Rule",action:()=>this.editor.chain().focus().setHorizontalRule().run()},{type:"divider"},{icon:"text-wrap",title:"Hard Break",action:()=>this.editor.chain().focus().setHardBreak().run()},{icon:"format-clear",title:"Clear Format",action:()=>this.editor.chain().focus().clearNodes().unsetAllMarks().run()},{type:"divider"},{icon:"arrow-go-back-line",title:"Undo",action:()=>this.editor.chain().focus().undo().run()},{icon:"arrow-go-forward-line",title:"Redo",action:()=>this.editor.chain().focus().redo().run()}]}}};const J=(0,c.Z)(Z,[["render",S]]);var q=J;const P=e=>e[Math.floor(Math.random()*e.length)],W=()=>{const e=[...Array(99).keys()];return P(e.map((e=>`rooms.${e}`)))};var z={name:"TipTapEditor",components:{EditorContent:B.kg,MenuBar:q},data(){return{currentUser:JSON.parse(localStorage.getItem("currentUser"))||{name:this.getRandomName(),color:this.getRandomColor()},provider:null,editor:null,status:"connecting",room:JSON.parse(localStorage.getItem("currentRoom"))||W()}},mounted(){this.createEditor()},methods:{createEditor(){const e=new N.QW;this.provider=new w.Ui({url:"wss://connect.hocuspocus.cloud",parameters:{key:"write_bqgvQ3Zwl34V4Nxt43zR"},name:this.room,document:e}),this.provider.on("status",(e=>{this.status=e.status})),this.editor=new B.ML({extensions:[R.Z.configure({history:!1}),O.ZP,H.Z,U.ZP,C.ZP.configure({document:e}),_.Z.configure({provider:this.provider,user:this.currentUser}),A.Z.configure({limit:1e4})]}),localStorage.setItem("currentUser",JSON.stringify(this.currentUser)),localStorage.setItem("currentRoom",JSON.stringify(this.room))},setName(){const e=(window.prompt("Name")||"").trim().substring(0,32);if(e)return this.updateCurrentUser({name:e})},setRoom(){const e=(window.prompt("Choose a Room from 0 to 99")||"").trim().substring(0,32);if(e)return this.updateCurrentRoom({room:e})},updateCurrentUser(e){this.currentUser={...this.currentUser,...e},this.editor.chain().focus().updateUser(this.currentUser).run(),localStorage.setItem("currentUser",JSON.stringify(this.currentUser))},updateCurrentRoom(e){console.log(e),this.room="rooms."+e.room,this.editor.destroy(),this.provider.destroy(),this.createEditor()},getRandomColor(){return P(["#958DF1","#F98181","#FBBC88","#FAF594","#70CFF8","#94FADB","#B9F18D"])},getRandomName(){return P(["Lea Thompson","Cyndi Lauper","Tom Cruise","Madonna","Jerry Hall","Joan Collins","Winona Ryder","Christina Applegate","Alyssa Milano","Molly Ringwald","Ally Sheedy","Debbie Harry","Olivia Newton-John","Elton John","Michael J. Fox","Axl Rose","Emilio Estevez","Ralph Macchio","Rob Lowe","Jennifer Grey","Mickey Rourke","John Cusack","Matthew Broderick","Justine Bateman","Lisa Bonet"])}},beforeUnmount(){this.editor.destroy(),this.provider.destroy()}};const I=(0,c.Z)(z,[["render",k]]);var Y=I,$={name:"HelloWorld",components:{TipTapEditor:Y}};const V=(0,c.Z)($,[["render",p]]);var G=V,Q={name:"HomeView",components:{HelloWorld:G}};const K=(0,c.Z)(Q,[["render",f]]);var X=K;const ee=[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,9468))}],te=(0,d.p7)({history:(0,d.PO)("/tiptap-yjs/"),routes:ee});var oe=te,ie=o(65),re=(0,ie.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(u).use(re).use(oe).mount("#app")}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,i,r,n){if(!i){var s=1/0;for(l=0;l<e.length;l++){i=e[l][0],r=e[l][1],n=e[l][2];for(var c=!0,a=0;a<i.length;a++)(!1&n||s>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[a])}))?i.splice(a--,1):(c=!1,n<s&&(s=n));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[i,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.8e1437f2.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="noosphere3:";o.l=function(i,r,n,s){if(e[i])e[i].push(r);else{var c,a;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==t+n){c=d;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+n),c.src=i),e[i]=[r];var h=function(t,o){c.onerror=c.onload=null,clearTimeout(f);var r=e[i];if(delete e[i],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/tiptap-yjs/"}(),function(){var e={143:0};o.f.j=function(t,i){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise((function(o,i){r=e[t]=[o,i]}));i.push(r[2]=n);var s=o.p+o.u(t),c=new Error,a=function(i){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,r[1](c)}};o.l(s,a,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,n,s=i[0],c=i[1],a=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var l=a(o)}for(t&&t(i);u<s.length;u++)n=s[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(l)},i=self["webpackChunknoosphere3"]=self["webpackChunknoosphere3"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(1591)}));i=o.O(i)})();
//# sourceMappingURL=app.d9faecc6.js.map