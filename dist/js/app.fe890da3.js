(function(){"use strict";var e={2562:function(e,o,t){var r=t(9242),s=t(3396);function n(e,o,t,r,n,i){const a=(0,s.up)("router-view"),l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(a),(0,s._)("nav",null,[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(l,{to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1})])])}var i={name:"HomeView",created(){console.log("router",this.$router,this.$route),this.$route.query.room}},a=t(89);const l=(0,a.Z)(i,[["render",n]]);var c=l,u=t(5431);(0,u.z)("/tiptap-yjs/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh."),alert("Noosphere has been updated, please close the app & reopen")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=t(2483),h=t(7139);const m=(0,s._)("hr",null,null,-1),g=(0,s._)("span",null,[(0,s._)("input",{type:"checkbox",id:"replace",name:"replace",disabled:""}),(0,s._)("label",{for:"replace"},"overwrite")],-1),p=["href"],w=(0,s._)("a",{href:"https://web3.storage/tokens/",target:"_blank"},"5GiB web3 storage",-1),f={key:1},v={key:2},k=["href"];function b(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[m,(0,s.Uk)(" PErsist THis ROom TO YOur WEb3 STorage "),(0,s._)("button",{onClick:o[0]||(o[0]=(...e)=>i.get_token&&i.get_token(...e))},"💾 web3"),g,null!=n.rootCid?((0,s.wg)(),(0,s.iD)("a",{key:0,href:"https://"+n.rootCid+".ipfs.w3s.link/",target:"_blank"},"last save",8,p)):(0,s.kq)("",!0),(0,s.Uk)(" files ("+(0,h.zw)(n.uploads.length)+"): ",1),w,"updating"==n.uploads[0]?((0,s.wg)(),(0,s.iD)("span",f,"Updating")):((0,s.wg)(),(0,s.iD)("ul",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.uploads,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e._id},[(0,s.Uk)((0,h.zw)(e.name)+", created: "+(0,h.zw)(new Date(e.created).toLocaleString())+", updated: "+(0,h.zw)(new Date(e.updated).toLocaleString())+", ",1),(0,s._)("a",{href:"https://"+e.cid+".ipfs.w3s.link/"+e.name+".json",target:"_blank"},(0,h.zw)(e.cid.slice(-10)),9,k),(0,s.Uk)(", status: "+(0,h.zw)(e.pins[0].status),1)])))),128))]))],64)}t(7658);var y=t(2543),R={name:"Web3Store",data(){return{web3_token:localStorage.getItem("web3_token"),rootCid:null,uploads:[]}},created(){this.updatePinned()},methods:{get_token(){(null==this.web3_token||this.web3_token.length<10)&&(this.web3_token=prompt("My web3 token"),null!=this.web3_token&&this.web3_token.length>9&&localStorage.setItem("web3_token",this.web3_token)),this.pin()},async updatePinned(){if(console.log("update"),this.uploads=["updating"],null!=this.web3_token)try{let e=new y.xk({token:this.web3_token});const o=[];for await(const t of e.list())o.push(t);console.log(o),this.uploads=o.filter((e=>e.name.startsWith("rooms.")))}catch(e){alert(e)}},async pin(){console.log("pinning");let e=this.step.room,o=new File([JSON.stringify(this.step.data)],e+".json");console.log(o);let t=new y.xk({token:this.web3_token});const r=e=>{console.log("-- root cid:",e),this.rootCid=e},s=e=>{console.log(`stored chunk of ${e} bytes`)};await t.put([o],{name:e,maxRetries:3,onRootCidReady:r,onStoredChunk:s}),this.updatePinned()}},computed:{step(){return this.$store.state.step}}};const _=(0,a.Z)(R,[["render",b]]);var C=_;const O={class:"home"};function U(e,o,t,r,n,i){const a=(0,s.up)("TextEditor"),l=(0,s.up)("b-col"),c=(0,s.up)("ThreeView"),u=(0,s.up)("b-row"),d=C,h=(0,s.up)("UsersRooms"),m=(0,s.up)("UsersView"),g=(0,s.up)("RoomsView"),p=(0,s.up)("b-container");return(0,s.wg)(),(0,s.iD)("div",O,[(0,s.Wm)(p,{fluid:""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(a)])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(c)])),_:1})])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d)])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h)])),_:1})])),_:1}),(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1}),(0,s.Wm)(l,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g)])),_:1})])),_:1})])),_:1})])}var E=t(9591),D=(t(6316),t(3989)),S=(t(9237),t(5728)),A=(t(923),t(3649));t(4165);const $=(0,s._)("hr",null,null,-1),I=(0,s._)("br",null,null,-1),T=(0,s._)("br",null,null,-1),P=(0,s._)("b",null,"Ctrl+v",-1),W=(0,s._)("br",null,null,-1),H={id:"printable"},N=["src"],j=(0,s._)("hr",null,null,-1),x=(0,s._)("br",null,null,-1),B={ref:"camera",id:"camera"};function z(e,o,t,r,n,i){const a=A.JO,l=S.bL,c=D.zx,u=E.GI;return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(l,{"is-link":"",onClick:i.showPopup},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{name:"share-o",size:"1.5rem",color:"#1989fa"})])),_:1},8,["onClick"]),(0,s.Wm)(u,{show:n.show,"onUpdate:show":o[3]||(o[3]=e=>n.show=e),style:{padding:"14px"},closeable:"",round:"",onClickOverlay:i.stopScanner,onClickCloseIcon:i.stopScanner},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s._)("h2",null,(0,h.zw)(i.room),1),$,(0,s.Uk)(" The url of this room has been copied"),I,(0,s.Uk)(" to your clipboard,"),T,(0,s.Uk)(" you can paste it with "),P,W,(0,s.Uk)(" in any other app to share it ! ")]),(0,s._)("div",H,[(0,s._)("img",{src:n.QRsrc,width:"300"},null,8,N),j]),(0,s.Wm)(c,{onClick:o[0]||(o[0]=e=>i.scan()),type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Scan QR")])),_:1}),(0,s.Wm)(c,{onClick:o[1]||(o[1]=e=>i.print("fr")),type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Imprime QR")])),_:1}),(0,s.Wm)(c,{onClick:o[2]||(o[2]=e=>i.print("en")),type:"primary"},{default:(0,s.w5)((()=>[(0,s.Uk)("Print QR")])),_:1}),x,(0,s._)("div",B,null,512)])),_:1},8,["show","onClickOverlay","onClickCloseIcon"])])}var M=t(8385),L=t(4405),F={name:"ShareModal",components:{VanButton:D.zx,VanPopup:E.GI,VanCell:S.bL,VanIcon:A.JO},data(){return{show:!1,QRsrc:null,url:null}},methods:{async showPopup(){this.show=!0,this.url="https://scenaristeur.github.io/tiptap-yjs?room="+this.room;let e="Noosphere",o="[en] Share & grab ideas !\n[fr] Attrape des idées et partage les tiennes !\n\n";if(navigator&&navigator.share){let t={title:e,text:o,url:this.url},r=[];navigator.canShare({files:r})&&(t.files=r),window.navigator.share(t).then((()=>console.log("Successful share"))).catch((e=>console.log("Error sharing",e)))}navigator.clipboard.writeText(this.url).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})),await this.generateQR()},async generateQR(){this.url="https://scenaristeur.github.io/tiptap-yjs/?room="+this.room,this.QRsrc=await M.toDataURL(encodeURI(this.url),{color:{light:"#98faf5"}})},print(e){let o={fr:"Parlons de :<br>",en:"Let's talk about :<br>"},t={en:"Share & grab ideas !",fr:"Attrape des idées et partage les tiennes !"},r="NOOSPHERE",s="printable";var n=window.open("","PRINT","height=400,width=600");n.document.write("<html><head><title>"+this.room+"</title>"),n.document.write("</head><body >"),n.document.write("<h1>"+r+"</h1>"),n.document.write("<h2>"+t[e]+"</h2>"),n.document.write(document.getElementById(s).innerHTML),n.document.write("<h2>"+o[e]+" "+this.room+"</h2>"),n.document.write("</body></html>"),n.focus(),n.print()},scan(){if(void 0!=this.scanner&&this.scanner.isScanning)return void this.stopScanner();let e=this;this.scanner=new L.t2("camera"),console.log("starting camera...");const o={facingMode:"environment"},t={fps:10,qrbox:{width:200,height:200}};this.scanner.start(o,t,(function(o){console.log(Date.now(),"decoded",o);let t=o.split("=");"https://scenaristeur.github.io/tiptap-yjs/?room"==t[0]&&(e.$store.commit("setRoom",t[1]),e.stopScanner())})).then((function(){console.log(Date.now(),"camera started")})).catch((function(e){console.log(Date.now(),"error starting camera",e)}))},stopScanner(){if(void 0!=this.scanner&&this.scanner.isScanning){let e=this;this.scanner.stop().then((function(){e.$refs.camera.innerHTML="",console.log("camera stopped"),e.scanner.clear(),console.log("scan cleared"),e.show=!1})).catch((function(e){console.log("error stopping camera",e)}))}}},computed:{room(){return this.$store.state.room}}};const V=(0,a.Z)(F,[["render",z]]);var Z=V;const q=["title"],J={class:"remix"},Y=["xlink:href"];function G(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)("button",{class:(0,h.C_)(["menu-item",{"is-active":t.isActive?t.isActive():null}]),onClick:o[0]||(o[0]=(...e)=>t.action&&t.action(...e)),title:t.title},[((0,s.wg)(),(0,s.iD)("svg",J,[(0,s._)("use",{"xlink:href":`${n.remixiconUrl}#ri-${t.icon}`},null,8,Y)]))],10,q)}var Q=t(4727),K={props:{icon:{type:String,required:!0},title:{type:String,required:!0},action:{type:Function,required:!0},isActive:{type:Function,default:null}},data(){return{remixiconUrl:Q}}};const X=(0,a.Z)(K,[["render",G]]);var ee=X;function oe(e,o,t,r,n,i){const a=ee;return(0,s.wg)(),(0,s.iD)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.items,((e,o)=>((0,s.wg)(),(0,s.iD)(s.HY,null,["divider"===e.type?((0,s.wg)(),(0,s.iD)("div",{class:"divider",key:`divider${o}`})):((0,s.wg)(),(0,s.j4)(a,(0,s.dG)({key:o},e),null,16))],64)))),256))])}var te={components:{MenuItem:ee},props:{editor:{type:Object,required:!0}},data(){return{items:[{icon:"bold",title:"Bold",action:()=>this.editor.chain().focus().toggleBold().run(),isActive:()=>this.editor.isActive("bold")},{icon:"italic",title:"Italic",action:()=>this.editor.chain().focus().toggleItalic().run(),isActive:()=>this.editor.isActive("italic")},{icon:"strikethrough",title:"Strike",action:()=>this.editor.chain().focus().toggleStrike().run(),isActive:()=>this.editor.isActive("strike")},{icon:"code-view",title:"Code",action:()=>this.editor.chain().focus().toggleCode().run(),isActive:()=>this.editor.isActive("code")},{icon:"mark-pen-line",title:"Highlight",action:()=>this.editor.chain().focus().toggleHighlight().run(),isActive:()=>this.editor.isActive("highlight")},{type:"divider"},{icon:"h-1",title:"Heading 1",action:()=>this.editor.chain().focus().toggleHeading({level:1}).run(),isActive:()=>this.editor.isActive("heading",{level:1})},{icon:"h-2",title:"Heading 2",action:()=>this.editor.chain().focus().toggleHeading({level:2}).run(),isActive:()=>this.editor.isActive("heading",{level:2})},{icon:"paragraph",title:"Paragraph",action:()=>this.editor.chain().focus().setParagraph().run(),isActive:()=>this.editor.isActive("paragraph")},{icon:"list-unordered",title:"Bullet List",action:()=>this.editor.chain().focus().toggleBulletList().run(),isActive:()=>this.editor.isActive("bulletList")},{icon:"list-ordered",title:"Ordered List",action:()=>this.editor.chain().focus().toggleOrderedList().run(),isActive:()=>this.editor.isActive("orderedList")},{icon:"list-check-2",title:"Task List",action:()=>this.editor.chain().focus().toggleTaskList().run(),isActive:()=>this.editor.isActive("taskList")},{icon:"code-box-line",title:"Code Block",action:()=>this.editor.chain().focus().toggleCodeBlock().run(),isActive:()=>this.editor.isActive("codeBlock")},{type:"divider"},{icon:"double-quotes-l",title:"Blockquote",action:()=>this.editor.chain().focus().toggleBlockquote().run(),isActive:()=>this.editor.isActive("blockquote")},{icon:"separator",title:"Horizontal Rule",action:()=>this.editor.chain().focus().setHorizontalRule().run()},{type:"divider"},{icon:"text-wrap",title:"Hard Break",action:()=>this.editor.chain().focus().setHardBreak().run()},{icon:"format-clear",title:"Clear Format",action:()=>this.editor.chain().focus().clearNodes().unsetAllMarks().run()},{type:"divider"},{icon:"arrow-go-back-line",title:"Undo",action:()=>this.editor.chain().focus().undo().run()},{icon:"arrow-go-forward-line",title:"Redo",action:()=>this.editor.chain().focus().redo().run()}]}}};const re=(0,a.Z)(te,[["render",oe]]);var se=re;const ne={key:0,class:"editor"},ie={class:"editor__footer"},ae=(0,s._)("span",{style:{color:"red"}},"offline : ",-1),le={class:"editor__name"};function ce(e,o,t,r,n,i){const a=se,l=(0,s.up)("editor-content"),c=Z;return n.editor?((0,s.wg)(),(0,s.iD)("div",ne,[(0,s.Wm)(a,{class:"editor__header",editor:n.editor},null,8,["editor"]),(0,s.Wm)(l,{class:"editor__content",editor:n.editor},null,8,["editor"]),(0,s._)("div",ie,[(0,s._)("div",{class:(0,h.C_)(`editor__status editor__status--${n.status}`)},["connected"===n.status?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Uk)((0,h.zw)(n.editor.storage.collaborationCursor.users.length)+" user"+(0,h.zw)(1===n.editor.storage.collaborationCursor.users.length?"":"s")+" online in "+(0,h.zw)(n.room)+" ",1),(0,s._)("div",null,[(0,s._)("button",{onClick:o[0]||(o[0]=(...e)=>i.setRoom&&i.setRoom(...e))},"Create or Connect")])],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[ae,(0,s.Uk)("merci d'attendre 30 secondes que le serveur démarre ")],64))],2),(0,s.Wm)(c),(0,s._)("div",le,[(0,s.Uk)(" change username : "),(0,s._)("button",{onClick:o[1]||(o[1]=(...e)=>i.setName&&i.setName(...e))},(0,h.zw)(n.currentUser.name),1)])])])):(0,s.kq)("",!0)}var ue=t(7601),de=t(2019),he=t(5808),me=t(5776),ge=t(3778),pe=t(3747),we=t(1531),fe=t(3929),ve=t(3594),ke=t(8954),be=t(3029),ye=t(114);const Re=e=>e[Math.floor(Math.random()*e.length)],_e=()=>{const e=[...Array(99).keys()];return Re(e.map((e=>`rooms.${e}`)))};var Ce={components:{EditorContent:ve.kg,MenuBar:se,ShareModal:Z},data(){return{currentUser:JSON.parse(localStorage.getItem("currentUser"))||{name:this.getRandomName(),color:this.getRandomColor(),rooms:{},uuid:(0,be.Z)()},provider:null,editor:null,status:"connecting",room:_e()}},created(){console.log("router",this.$router,this.$route),this.$route.query.room&&(this.room=this.$route.query.room,console.log("room",this.room))},mounted(){this.createEditor()},methods:{createEditor(){const e=new ke.QW;this.provider=new ue.Ui({url:"wss://hocus-noosphere.glitch.me/",name:this.room,document:e});const o=this.provider.awareness;console.log("awareness",o),window.addEventListener("beforeunload",(()=>{ye.Ag(o,[e.clientID],"window unload")})),console.log("EDITOR awareness",o,o.clientID),o.on("change",(e=>{console.log("changes",e),console.log("USERS",Array.from(o.getStates().values()))})),this.provider.on("status",(e=>{this.status=e.status})),this.currentUser.rooms[this.room]={room:this.room,date:Date.now()},this.editor=new ve.ML({extensions:[fe.Z.configure({history:!1}),ge.ZP,we.Z,pe.ZP,he.ZP.configure({document:e}),me.Z.configure({provider:this.provider,user:this.currentUser}),de.Z.configure({limit:1e4})]}),this.editor.on("create",(({editor:e})=>{let o={room:this.room,data:e.getJSON(),type:"tiptap"};this.$store.dispatch("push",o),console.log("setEDitoruser",this.currentUser),this.$store.commit("setUser",this.currentUser),console.log("setEDITORRoom",this.room),this.$store.commit("setEDITORRoom",this.room)})),this.editor.on("update",(({editor:e})=>{let o={room:this.room,data:e.getJSON(),type:"tiptap"};this.$store.dispatch("push",o)})),localStorage.setItem("currentUser",JSON.stringify(this.currentUser)),localStorage.setItem("currentRoom",JSON.stringify(this.room));let t={room:this.room,users:this.editor.storage.collaborationCursor.users};console.log("users in room ",t),console.log("clientID is CORE awareness, ClienId is editor awareness"),this.$store.commit("updateRooms",t)},setName(){const e=(window.prompt("Name")||"").trim().substring(0,32);if(e)return this.updateCurrentUser({name:e})},setRoom(){const e=(window.prompt("Choose a Room from 0 to 99")||"").trim().substring(0,32);if(e)return this.updateCurrentRoom({room:e})},updateCurrentUser(e){this.currentUser={...this.currentUser,...e},this.editor.chain().focus().updateUser(this.currentUser).run(),localStorage.setItem("currentUser",JSON.stringify(this.currentUser))},updateCurrentRoom(e){console.log(e),this.room=e.room.startsWith("rooms.")?e.room:"rooms."+e.room,this.editor.destroy(),this.provider.destroy(),this.createEditor(),this.$store.commit("setUsersInRoom",{room:this.room,users:this.collaborationUsers})},getRandomColor(){return Re(["#958DF1","#F98181","#FBBC88","#FAF594","#70CFF8","#94FADB","#B9F18D"])},getRandomName(){return Re(["Leon Thompson","Bonnie Journey","Thomas Croisé","Malouna","Terry Ball","Jean Collik","Winoumanona Raider","Christina Pompin","Alycia Francisco","Moully Ringinald","Béatrice Allou","Pierre Kiroul","Namass Pamouss","Etu Diante","Da Di Falavaleris","Dgef","Emilio Agricolo","Miss B","Spider Marvel","Hulkor Geeen","Smoke Onthewater","Bebop Euloula","Mick Mock","Peter Piter","Stocking Head"])}},beforeUnmount(){this.editor.destroy(),this.provider.destroy()},watch:{roomFromSomewhere(){if(this.room!=this.roomFromSomewhere){let e=this.roomFromSomewhere;console.log(e),this.updateCurrentRoom({room:e})}},collaborationUsers(){this.users!=this.collaborationUsers&&console.log("collaborationUsers changed",this.collaborationUsers)}},computed:{roomFromSomewhere(){return this.$store.state.room},collaborationUsers(){return null==this.editor?[]:this.editor.storage.collaborationCursor.users},users(){return this.$store.state.users}}};const Oe=(0,a.Z)(Ce,[["render",ce]]);var Ue=Oe,Ee=t(3068);t(124);const De={class:""},Se={class:"editor__name"},Ae=(0,s._)("br",null,null,-1),$e=(0,s._)("br",null,null,-1),Ie=["onClick"],Te=["onClick"],Pe=(0,s._)("br",null,null,-1);function We(e,o,t,r,n,i){const a=Ee.Ct;return(0,s.wg)(),(0,s.iD)("div",De,[(0,s.Uk)(" DEfault HEllo ROom "),(0,s._)("span",Se,[(0,s._)("button",{style:{"background-color":"yellow"},onClick:o[0]||(o[0]=e=>i.showRoom("rooms.hello"))}," rooms.hello ")]),Ae,(0,s.Uk)(" ALl USers ANd THe ROoms THey HAve VIsited "),$e,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Array.from(i.rooms).reverse().sort(((e,o)=>o[1].length-e[1].length)).slice(0,100),(e=>((0,s.wg)(),(0,s.iD)("span",{class:"editor__name",key:e[0]},[(0,s.Uk)(" IN ROom "),(0,s._)("button",{onClick:o=>i.showRoom(e[0])},[(0,s.Wm)(a,{content:e[1].length,color:"#1989fa",position:"bottom-left"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,h.zw)(e[0]),1)])),_:2},1032,["content"])],8,Ie),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e[1],(e=>((0,s.wg)(),(0,s.iD)("span",{key:e.clientID},[(0,s.Uk)(" WE HAve SEen "),(0,s._)("span",{style:(0,h.j5)("background-color:"+e.color)},(0,h.zw)(e.name),5),(0,s.Uk)(" ANd (S)He HAs VIsited "),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Object.entries(e.rooms).sort(((e,o)=>o.date-e.date)).slice(0,10),(e=>((0,s.wg)(),(0,s.iD)("span",{class:"editor__name",key:e},[(0,s._)("button",{onClick:o=>i.showRoom(e[0])},(0,h.zw)(e[0])+" ",9,Te)])))),128))])))),128)),Pe])))),128))])}var He={name:"UsersRooms",created(){},methods:{showRoom(e){console.log(e),this.$store.commit("setEDITORRoom",e)}},watch:{rooms(){console.log("rooms",this.rooms.toJSON()),this.users_rooms=[];for(const[e,o]of Object.entries(this.rooms.toJSON()))console.log(`${e}: ${o}`)}},computed:{room(){return this.$store.state.room},user(){return this.$store.state.user},rooms(){return this.$store.state.rooms},users(){return this.$store.state.users},awareness(){return this.$store.state.awareness}}};const Ne=(0,a.Z)(He,[["render",We]]);var je=Ne;const xe={ref:"graph"},Be=(0,s._)("hr",null,null,-1);function ze(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",xe,null,512),Be],64)}var Me=t(490),Le={name:"ThreeView",data(){return{nodes:[],links:[],coreYdoc:null,Graph:null}},created(){},mounted(){this.Graph=(0,Me.Z)()(this.$refs.graph).nodeAutoColorBy("group").height(480).width(480).onNodeClick((e=>{console.log(e),"room"==e.group&&this.$store.commit("setEDITORRoom",e.id)})),console.log(this.Graph)},methods:{showRoom(e){console.log(e),this.$store.commit("setRoom",e)}},watch:{rooms(){let e=this;if(console.log("rooms",this.rooms),null!=this.Graph){for(const[o,t]of Object.entries(this.rooms)){let r={id:o,name:o,group:"room"},s=this.nodes.find((e=>e.id==r));void 0==s&&this.nodes.push(r),void 0!=t&&t.forEach((t=>{console.log("THREEuser",e.user);let r={id:t.uuid,name:t.name,group:"user"};null!=e.user&&t.name!=e.user.name||(r.color="red");let s=this.nodes.find((e=>e.id==r.id));void 0==s&&this.nodes.push(r);let n={source:r.id,target:o,name:"active",color:"red",width:4,opacity:1},i=this.links.find((e=>e.source==n.source&&e.target==n.target&&e.name==n.name));void 0==i&&this.links.push(n),console.log(t.rooms);for(const[e,o]of Object.entries(t.rooms)){let t={id:e,name:o.room,group:"room"},s=this.nodes.find((e=>e.id==t.id));void 0==s&&this.nodes.push(t);let n={source:r.id,target:e,name:"visited",color:"blue"},i=this.links.find((e=>e.source==n.source&&e.target==n.target&&e.name==n.name));void 0==i&&(this.links.push(n)&&console.log(i))}}))}this.Graph.graphData({nodes:this.nodes,links:this.links}),console.log(this.nodes,this.links)}else console.log("graph is null")},users(e){console.log(Array.from(e)),console.log("users",e)},awareness(){console.log("aware",this.awareness)}},computed:{room(){return this.$store.state.room},user(){return this.$store.state.user},rooms(){return null!=this.$store.state.rooms?this.$store.state.rooms.toJSON():[]},users(){return this.$store.state.users},awareness(){return this.$store.state.awareness}}};const Fe=(0,a.Z)(Le,[["render",ze]]);var Ve=Fe;const Ze=(0,s._)("hr",null,null,-1),qe=(0,s._)("hr",null,null,-1),Je=(0,s._)("hr",null,null,-1);function Ye(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Uk)(" User : "+(0,h.zw)(i.user)+" ",1),Ze,(0,s.Uk)(" Users: "+(0,h.zw)(i.users)+" ",1),qe,(0,s.Uk)(" COREawareness : "+(0,h.zw)(i.COREawareness)+" ",1),Je,(0,s.Uk)(" EDITORawareness: "+(0,h.zw)(i.EDITORawareness),1)])}var Ge={name:"UsersView",computed:{user(){return this.$store.state.user},users(){return this.$store.state.users},COREawareness(){return this.$store.state.COREawareness},EDITORawareness(){return this.$store.state.EDITORawareness}}};const Qe=(0,a.Z)(Ge,[["render",Ye]]);var Ke=Qe;const Xe=(0,s._)("hr",null,null,-1);function eo(e,o,t,r,n,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Uk)(" Room : "+(0,h.zw)(i.room)+" ",1),Xe,(0,s.Uk)(" Rooms: "+(0,h.zw)(i.rooms),1)])}var oo={name:"RoomsView",computed:{room(){return this.$store.state.room},rooms(){return this.$store.state.rooms}}};const to=(0,a.Z)(oo,[["render",eo]]);var ro=to,so={name:"HomeView",components:{TextEditor:Ue,UsersRooms:je,Web3Store:C,ThreeView:Ve,UsersView:Ke,RoomsView:ro}};const no=(0,a.Z)(so,[["render",U]]);var io=no;const ao=[{path:"/",name:"home",component:io},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,6501))}],lo=(0,d.p7)({history:(0,d.PO)("/tiptap-yjs/"),routes:ao});var co=lo,uo=t(65),ho=(0,uo.MT)({state:{ipfs:null,step:null,room:null,user:null,rooms:null,users:[],COREawareness:null,EDITORawareness:null},getters:{},mutations:{setEDITORRoom(e,o){e.room=o,console.log(e.room)},setCORERooms(e,o){e.rooms=o,console.log("setRooms",e.rooms)},setUser(e,o){e.user=o,console.log("SET USER",e.user,e.users),e.users.set(e.COREawareness.clientID,e.user)},setCOREUsers(e,o){console.log("setusers",o),e.users=o},setUsersInRoom(e,o){try{console.log("SET USERS IN ROOM",o.room,o.users),e.rooms.set(o.room,o.users),console.log("ROOMS3",e.rooms)}catch(t){console.log(t)}},setCOREAwareness(e,o){e.COREawareness=o,console.log("COREawareness",e.COREawareness)},setEDITORAwareness(e,o){e.EDITORawareness=o,console.log("EDITORawareness",e.EDITORawareness)},updateRooms(e,o){console.log("update rooms",o),e.rooms.set(o.room,o.users)},setIpfs(e,o){e.ipfs=o}},actions:{async push(e,o){e.state.step=o}},modules:{}}),mo=(t(5110),t(227));const go={install(e,o={}){let t=o.store;const r=new ke.QW,s=new ue.Ui({url:"wss://hocus-noosphere.glitch.me/",name:"noosphere",document:r});console.log("Gestion de deux canaux : noosphere/core dans le plugin  (utilisateurs, rooms) et  par le nom de la room dans l'editeur");let n=r.getMap("users");console.log("CORE users ",n),t.commit("setCOREUsers",n);let i=r.getMap("rooms");console.log("CORE rooms",i),t.commit("setCORERooms",i),n.observe((e=>{e.target,e.keysChanged,e.changes.keys,e.changes.keys.forEach(((e,o)=>{"add"===e.action?console.log(`Property "${o}" was added. Initial value: `,n.get(o)):"update"===e.action?console.log(`Property "${o}" was updated. New value: "${n.get(o)}". Previous value: `,e.oldValue):"delete"===e.action&&console.log(`Property "${o}" was deleted. New value: undefined. Previous value: `,e.oldValue)}))})),i.observe((e=>{e.target,e.keysChanged,e.changes.keys,e.changes.keys.forEach(((e,o)=>{"add"===e.action?console.log(`Property "${o}" was added. Initial value: `,i.get(o)):"update"===e.action?console.log(`Property "${o}" was updated. New value: "${i.get(o)}". Previous value: `,e.oldValue):"delete"===e.action&&console.log(`Property "${o}" was deleted. New value: undefined. Previous value: `,e.oldValue)}))}));const a=s.awareness;console.log("CORE awareness",a,a.clientID),window.addEventListener("beforeunload",(()=>{ye.Ag(a,[r.clientID],"window unload")})),t.commit("setCOREAwareness",a),a.on("update",(({added:e,updated:o,removed:t})=>{const r=e.concat(o).concat(t);console.log("CORE awareness update",r,e,o,t)}))}};var po=go;(0,r.ri)(c).use(ho).use(co).use(mo.ZP).use(po,{store:ho,router:co}).mount("#app")}},o={};function t(r){var s=o[r];if(void 0!==s)return s.exports;var n=o[r]={exports:{}};return e[r].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,r,s,n){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],n=e[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(a=!1,n<i&&(i=n));if(a){e.splice(u--,1);var c=s();void 0!==c&&(o=c)}}return o}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,s,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,r){return t.f[r](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/about.dec6400a.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="noosphere3:";t.l=function(r,s,n,i){if(e[r])e[r].push(s);else{var a,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==o+n){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",o+n),a.src=r),e[r]=[s];var h=function(o,t){a.onerror=a.onload=null,clearTimeout(m);var s=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((function(e){return e(t)})),o)return o(t)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/tiptap-yjs/"}(),function(){var e={143:0};t.f.j=function(o,r){var s=t.o(e,o)?e[o]:void 0;if(0!==s)if(s)r.push(s[2]);else{var n=new Promise((function(t,r){s=e[o]=[t,r]}));r.push(s[2]=n);var i=t.p+t.u(o),a=new Error,l=function(r){if(t.o(e,o)&&(s=e[o],0!==s&&(e[o]=void 0),s)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+o+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,s[1](a)}};t.l(i,l,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,r){var s,n,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(o){return 0!==e[o]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(l)var u=l(t)}for(o&&o(r);c<i.length;c++)n=i[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},r=self["webpackChunknoosphere3"]=self["webpackChunknoosphere3"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2562)}));r=t.O(r)})();
//# sourceMappingURL=app.fe890da3.js.map