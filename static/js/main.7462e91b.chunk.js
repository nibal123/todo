(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{71:function(e,t,a){e.exports=a(89)},76:function(e,t,a){},77:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(76),a(2)),s=(a(77),Object(n.createContext)()),i=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),d=u[0],m=u[1],v=Object(n.useState)({name:"",Description:"",Severity:"",type:"",id:"",date:""}),f=Object(o.a)(v,2),p=f[0],h=f[1],g=Object(n.useState)(""),E=Object(o.a)(g,2),b=E[0],O=E[1],y=Object(n.useState)(),w=Object(o.a)(y,2),j=w[0],N=w[1],S=Object(n.useState)({show:!1,message:""}),k=Object(o.a)(S,2),I=k[0],C=k[1],x=Object(n.useState)(!1),U=Object(o.a)(x,2),D=U[0],T=U[1],A=Object(n.useState)(!1),P=Object(o.a)(A,2),B=P[0],L=P[1];return r.a.createElement(s.Provider,{value:{value:[c,l],value2:[d,m],value3:[p,h],value4:[b,O],value5:[j,N],value6:[I,C],value7:[D,T],value8:[B,L]}}," ",e.children)},u=a(7),d=a.n(u),m=a(13),v=a(24),f=a(62),p=a(10),h=a(60),g=a(61),E=a(47),b=a.n(E),O=(a(81),a(83),{apiKey:"AIzaSyABwV55Xx7veggQay7Q9hw5vhU04ZmB21w",authDomain:"todotask-d245d.firebaseapp.com",databaseURL:"https://todotask-d245d.firebaseio.com",projectId:"todotask-d245d",storageBucket:"todotask-d245d.appspot.com",messagingSenderId:"403896536837",appId:"1:403896536837:web:39c2e8b4a57bf24931316c",measurementId:"G-G513JXD545"}),y=new(function(){function e(){Object(h.a)(this,e),b.a.initializeApp(O),this.auth=b.a.auth(),this.db=b.a.firestore()}return Object(g.a)(e,[{key:"login",value:function(e,t){return this.auth.signInWithEmailAndPassword(e,t)}},{key:"logout",value:function(){return this.auth.signOut()}},{key:"register",value:function(){var e=Object(m.a)(d.a.mark((function e(t,a,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(a,n);case 2:return e.abrupt("return",this.auth.currentUser.updateProfile({displayName:t}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"setUserDataBase",value:function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("id",t),e.abrupt("return",this.db.collection("users").doc("".concat(t)).set({id:t,tasks:[],archived:[]}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isInitialized",value:function(){var e=this;return new Promise((function(t){e.auth.onAuthStateChanged(t)}))}},{key:"getCurrentUsername",value:function(){return this.auth.currentUser&&this.auth.currentUser.displayName}},{key:"getCurrentUserId",value:function(){return this.auth.currentUser&&this.auth.currentUser.uid}},{key:"database",value:function(){return this.db}},{key:"getUserTasks",value:function(){var e=Object(m.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.collection("users").doc("".concat(t)).get();case 2:return a=e.sent,e.abrupt("return",a.get("tasks"));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeUserData",value:function(e,t){return console.log("idd",e),this.db.settings({timestampsInSnapshots:!0}),this.db.collection("users").doc("".concat(e)).update({tasks:{name:"task#1"}}).then((function(){console.log("Doc updated successfully")}))}}]),e}()),w=function(e){var t=Object(p.f)(),a=Object(n.useContext)(s),c=a.value,l=a.value2,i=(a.value3,a.value4),u=Object(o.a)(c,2),h=(u[0],u[1]),g=Object(o.a)(l,2),E=(g[0],g[1]),b=Object(o.a)(i,2),O=(b[0],b[1]),w=Object(v.a)(),j=w.register,N=w.handleSubmit,S=w.errors;function k(){return(k=Object(m.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.login(a.email,a.password).then((function(){O(a.password),y.db.collection("users").doc("".concat(y.getCurrentUserId())).get().then((function(e){e.exists?(h(e.data().tasks),E(e.data().archived)):y.setUserDataBase(y.getCurrentUserId())})).catch((function(e){console.log("Error getting document:",e)}))}));case 3:t.push("./home"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var I=function(e,t){return r.a.createElement("p",null,"*","required"===S[e].type?"Required":"minLength"===S[e].type?"".concat(e," is too short"):"validate"===S[e].type?"Invalid Email":"")};return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"d-flex flex-column ",onSubmit:N((function(e,t){console.log(e),function(e){k.apply(this,arguments)}(e)}))},r.a.createElement("input",{ref:j({required:!0,minLength:2,validate:function(e){return/\S+@\S+\.\S+/.test(e)}}),className:S.email?"has-error":"",placeholder:"Email",name:"email"}),S.email&&I("email"),r.a.createElement("input",{type:"password",ref:j({required:!0,minLength:5}),className:S.password?"has-error":"",name:"password",placeholder:"Password"}),S.password&&I("password"),r.a.createElement(f.a,{type:"submit",variant:"primary"},"Login"),r.a.createElement("a",{href:"/signup"},"Create New Account"),I)))))},j=a(25),N=(a(17),a(5)),S=a(97),k=a(95),I=a(94),C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=function(e,t){var a=Object(n.useContext)(s),c=a.value,l=(a.value2,a.value3),i=(a.value4,a.value5),u=a.value6,d=a.value7,m=a.value8,p=Object(o.a)(c,2),h=p[0],g=p[1],E=Object(o.a)(l,2),b=E[0],O=E[1],w=Object(o.a)(i,2),j=w[0],S=(w[1],Object(o.a)(u,2)),k=(S[0],S[1]),I=Object(o.a)(d,2),x=(I[0],I[1]),U=Object(o.a)(m,2),D=(U[0],U[1]),T=function(e,t){return r.a.createElement("p",null,"*","required"===L[e].type?"Required":"minLength"===L[e].type?"".concat(e," is too short"):"validate"===L[e].type?"Invalid Email":"")},A=Object(v.a)(),P=A.register,B=A.handleSubmit,L=A.errors;return r.a.createElement("div",{className:"form",id:e.id},r.a.createElement("form",{className:"d-flex flex-column ",onSubmit:B((function(t,a){var n=new Date(t.date),r=n.getDay()+2,c=n.getMonth(),l={name:t.name,Description:t.description,Severity:t.severity,date:"edit"===e.value.function?b.date:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][r-2]+" "+C[c]+" "+r+" "+n.getFullYear(),type:"add"===e.value.function?j:b.type,id:"add"===e.value.function?JSON.parse(localStorage.getItem("ids"))+"":b.id};if("add"===e.value.function){D(!1),g([].concat(Object(N.a)(h),[l])),console.log("tasks",h);var o=y.db.collection("users").doc("".concat(y.getCurrentUserId()));return localStorage.setItem("ids",JSON.stringify(1+JSON.parse(localStorage.getItem("ids")))),a.target.reset(),o.update({tasks:[].concat(Object(N.a)(h),[l])}).then((function(){k({show:!0,message:"Added Successfully"})})).catch((function(e){console.error("Error updating document: ",e)}))}if("edit"===e.value.function){console.log("edit",l),x(!1);var s=h.filter((function(e){return e.id!==l.id}));return a.target.reset(),g([].concat(Object(N.a)(s),[l])),O(l),(o=y.db.collection("users").doc("".concat(y.getCurrentUserId()))).update({tasks:[].concat(Object(N.a)(s),[l])}).then((function(){k({show:!0,message:"Edited Succesfully"})})).catch((function(e){console.error("Error updating document: ",e)}))}a.target.reset()})),key:e.id},r.a.createElement("label",null,"Name"),r.a.createElement("input",{ref:P({required:!0,minLength:2}),className:L.name?"has-error":"",key:e.value.id,id:e.value.id,name:"name",defaultValue:"edit"===e.value.function?b.name:""}),L.name&&T("name"),r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{className:L.description?"has-error":"",id:"desc",name:"description",defaultValue:e.value.task?b.Description:"",ref:P({required:!0})}),L.description&&T("description"),r.a.createElement("label",null,"Severity"),r.a.createElement("select",{id:"severity",className:"form-control",name:"severity",ref:P({required:!0})},r.a.createElement("option",{value:"Normal",selected:"Normal"===b.Severity?"selected":""},"Normal"),r.a.createElement("option",{value:"Important",selected:"Important"===b.Severity?"selected":""},"Important"),r.a.createElement("option",{value:"Urgent",selected:"Urgent"===b.Severity?"selected":""},"Urgent")),"add"===e.value.function&&r.a.createElement("label",null,"Date"),"add"===e.value.function&&r.a.createElement("input",{type:"date",name:"date",ref:P({required:!0})}),r.a.createElement("div",{className:" d-flex justify-content-end"},r.a.createElement(f.a,{type:"submit",variant:"primary",id:"submitt"},"add"===e.value.function?"Add":"Edit"),r.a.createElement(f.a,{variant:"outline-secondary light ",onClick:function(){x(!1),D(!1)}},"Cancel"))))},U=a(14),D=function(e,t){var a=Object(n.useRef)(null),c=Object(n.useState)(!1),l=Object(o.a)(c,2),i=l[0],u=l[1],d={Normal:"success",Important:"warning",Urgent:"danger"},m=Object(n.useContext)(s),v=m.value,p=m.value2,h=m.value3,g=(m.value4,m.value5,m.value6),E=m.value7,b=Object(o.a)(v,2),O=b[0],w=b[1],j=Object(o.a)(p,2),C=j[0],D=j[1],T=Object(o.a)(h,2),A=(T[0],T[1]),P=Object(o.a)(g,2),B=(P[0],P[1]),L=Object(o.a)(E,2),q=L[0],J=L[1],H=Object(n.useState)(!1),M=Object(o.a)(H,2),F=M[0],R=M[1],W=function(){return R(!1)},V=function(){return R(!0)};return r.a.createElement("div",null,r.a.createElement(S.a,{border:d["".concat(e.value.Severity)],className:e.archivedTask?"task-card archived ".concat(d["".concat(e.value.Severity)]," "):"task-card ".concat(d["".concat(e.value.Severity)]," "),draggable:e.archivedTask?"false":"true",id:e.id,value:e.value,onDragStart:function(t){localStorage.setItem("draggedId",e.id),u(!0);var a=t.target;t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("card_id",a.id);var n=JSON.stringify(e.value);t.dataTransfer.setData("card_value",n),t.dataTransfer.setData(" ",a.id)},onDragOver:function(e){e.stopPropagation(),u(!1)},droppable:"true",ref:a,onDragEnter:function(){if(!i){var t,a;console.log(e.id+"dropppe"+localStorage.getItem("draggedId")),O.map((function(e){e.id==localStorage.getItem("draggedId")&&(t=e)})),console.log("dragged",t),localStorage.setItem("draggedTask",JSON.stringify(t)),localStorage.setItem("dropped",e.id),console.log("dopped",e.value),O.map((function(t,n){t.id==e.id&&(a=n)})),console.log(a);var n=O.filter((function(e){return e.id!=localStorage.getItem("draggedId")}));return n.splice(a,0,t),w(n),y.db.collection("users").doc("".concat(y.getCurrentUserId())).update({tasks:Object(N.a)(n)}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}))}}},r.a.createElement("div",{className:"d-flex flex-row-reverse"}," ",r.a.createElement(U.a,null,r.a.createElement(U.a.Toggle,{variant:"border-light",id:"dropdown-basic",className:"add"}),r.a.createElement(U.a.Menu,null,r.a.createElement(U.a.Item,null,r.a.createElement(f.a,{onClick:e.archivedTask?function(){var t=C.filter((function(t){return t.id!==e.id}));return D(Object(N.a)(t)),y.db.collection("users").doc("".concat(y.getCurrentUserId())).update({archived:Object(N.a)(t)}).then((function(){B({show:!0,message:"Deleted Succesfully"})})).catch((function(e){console.error("Error updating document: ",e)}))}:function(){var t=O.filter((function(t){return t.id!==e.id}));return w(Object(N.a)(t)),y.db.collection("users").doc("".concat(y.getCurrentUserId())).update({tasks:Object(N.a)(t)}).then((function(){B({show:!0,message:"Deleted Succesfully"})})).catch((function(e){console.error("Error updating document: ",e)}))},className:"dropdown-button"},"Delete")),r.a.createElement(U.a.Item,null,e.archivedTask&&r.a.createElement(f.a,{onClick:function(){var t=C.filter((function(t){return t.id!==e.id}));return D(Object(N.a)(t)),D([].concat(Object(N.a)(C),[e.value])),y.db.collection("users").doc("".concat(y.getCurrentUserId())).update({tasks:[].concat(Object(N.a)(O),[e.value]),archived:Object(N.a)(t)}).then((function(){B({show:!0,message:"Moved to Tasks"})})).catch((function(e){console.error("Error updating document: ",e)}))},className:"dropdown-button"},"Return Task")),r.a.createElement(U.a.Item,null,!e.archivedTask&&r.a.createElement(f.a,{onClick:function(){var t=O.filter((function(t){return t.id!==e.id}));return w(Object(N.a)(t)),D([].concat(Object(N.a)(C),[e.value])),y.db.collection("users").doc("".concat(y.getCurrentUserId())).update({tasks:Object(N.a)(t),archived:[].concat(Object(N.a)(C),[e.value])}).then((function(){B({show:!0,message:"Moved to Archive"})})).catch((function(e){console.error("Error updating document: ",e)}))},className:"dropdown-button"},"Archive")),r.a.createElement(U.a.Item,null," ",!e.archivedTask&&r.a.createElement(f.a,{"data-toggle":"modal","data-target":".bd-edit-modal-sm",onClick:function(){console.log(e.value),A(e.value),J(!0)},className:"dropdown-button"},"Edit")))),r.a.createElement("div",{onClick:V},r.a.createElement(I.a,{className:"badge",variant:d["".concat(e.value.Severity)]},r.a.createElement("h6",null,e.value.Severity)))),r.a.createElement("div",{onClick:V},r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("h4",null,r.a.createElement("b",null,e.value.name))),r.a.createElement("div",{className:"d-flex flex-row-reverse"},r.a.createElement("h6",null,e.value.date)))),r.a.createElement(k.a,{show:F,onHide:W},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,r.a.createElement("h2",null,r.a.createElement("b",null,e.value.name)))),r.a.createElement(k.a.Body,null,r.a.createElement("h3",null,e.value.Description)),r.a.createElement(k.a.Body,null,"Added on : ",e.value.date),r.a.createElement(k.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:W},"Close"))),r.a.createElement(k.a,{show:q,onHide:function(){J(!1)}},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,r.a.createElement("h2",null,"Edit Task"))),r.a.createElement(k.a.Body,null,r.a.createElement(x,{id:"form".concat(e.id),value:{type:e.id,severity:e.value.Severity,function:"edit",task:e.value},key:"form".concat(e.id)}))))},T=function(e){var t=Object(n.useContext)(s),a=t.value,c=(t.value2,t.value3,t.value4,t.value5),l=(t.value6,t.value7,t.value8),i=Object(o.a)(a,2),u=i[0],d=i[1],m=Object(o.a)(c,2),v=(m[0],m[1]),p=Object(o.a)(l,2),h=p[0],g=p[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),O=b[0],w=b[1];Object(n.useEffect)((function(){setTimeout((function(){w(!1)}),50)}),[O]);var j={Urgent:-1,Important:0,Normal:1},I=Object(n.useState)(""),U=Object(o.a)(I,2),T=U[0],A=U[1];u.sort((function(e,t){switch(T){case"alphabet":return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0;case"severity":return j["".concat(e.Severity)]>j["".concat(t.Severity)]?1:j["".concat(e.Severity)]<j["".concat(t.Severity)]?-1:0;case"time":var a=e.date.split(" "),n=t.date.split(" ");if(n[3]>a[3])return-1;if(n[3]<a[3])return 1;if(C.indexOf(n[1])<C.indexOf(a[1]))return 1;if(C.indexOf(n[1])>C.indexOf(a[1]))return-1;if(parseInt(n[2])<parseInt(a[2]))return 1;if(parseInt(n[2])>parseInt(a[2]))return-1;break;default:return 0}}));var P=Object(n.useState)(!1),B=Object(o.a)(P,2);B[0],B[1];return r.a.createElement(S.a,{className:O?"card-yellow":"card-main",onPointerUp:function(){w(!0)},border:"primary",id:e.id,onDrop:function(t){document.getElementById(e.id).setAttribute("className","card-main"),t.preventDefault();t.dataTransfer.getData("card_id");w(!1);var a=JSON.parse(t.dataTransfer.getData("card_value"));a.type=e.id;var n,r=localStorage.getItem("dropped");u.map((function(e,t){e.id==r&&(n=t)})),console.log(n);var c=u.filter((function(e){return e.id!==a.id}));return c.splice(n,0,a),d(c),y.db.collection("users").doc("".concat(y.getCurrentUserId())).update({tasks:Object(N.a)(c)}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}))},onDragOver:function(e){e.preventDefault(),w(!0)},droppable:"true"},r.a.createElement("div",{className:"card-header row"},r.a.createElement("div",{className:"col-5"},e.value.name),r.a.createElement("div",{className:"col"}," ",r.a.createElement("select",{id:"new".concat(e.id),className:"add",onChange:function(){A(document.getElementById("new".concat(e.id)).value)}},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Sort By"),r.a.createElement("option",{value:"time"},"Time Added"),r.a.createElement("option",{value:"severity"},"Severity"),r.a.createElement("option",{value:"alphabet"},"A-Z")))),r.a.createElement("div",{className:"card-body",key:e.id,id:e.id},u.map((function(t){return e.id===t.type?r.a.createElement(D,{value:t,id:t.id,key:t.id,archivedTask:!1}):""})),r.a.createElement("div",null,r.a.createElement(f.a,{variant:"outline-secondary",className:"add",onClick:function(){g(!0),v(e.id)}},"ADD TASK +"),r.a.createElement(k.a,{show:h,onHide:function(){g(!1)}},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,r.a.createElement("h2",null,"Add Task"))),r.a.createElement(k.a.Body,null,r.a.createElement(x,{id:e.id,value:{type:e.id,function:"add"}}))))))},A=function(){var e=Object(n.useContext)(s),t=(e.value,e.value2),a=(e.value3,e.value4),c=(e.value5,e.value6),l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],d=i[1],m=Object(o.a)(c,2),h=(m[0],m[1]),g=Object(o.a)(a,2),E=g[0],b=g[1],O=Object(o.a)(t,2),w=O[0],j=(O[1],Object(v.a)()),N=j.register,S=j.handleSubmit,I=j.errors,C=Object(n.useState)(!1),x=Object(o.a)(C,2),D=x[0],T=x[1],A=function(){return d(!1)},P=Object(p.f)();var B=function(e,t){return r.a.createElement("p",null,"*","required"===I[e].type?"Required":"minLength"===I[e].type?"".concat(t," is too short"):"validate"===I[e].type?"Invalid Email":"")};return r.a.createElement("div",{className:" nav"},r.a.createElement("div",{className:"col-2"}," ",r.a.createElement("img",{src:"icon2.png"})),r.a.createElement("div",{className:"col-3"},r.a.createElement(f.a,{className:"taskk",onClick:function(){P.push("./home")},variant:""},r.a.createElement("h5",null,"Tasks"))," "),r.a.createElement("div",{className:"col-3 "},0!=w.length&&r.a.createElement(f.a,{onClick:function(){P.push("./archived")},className:"taskk",variant:""},r.a.createElement("h5",null,"Archived"))),r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col-1"},r.a.createElement(U.a,null,r.a.createElement(U.a.Toggle,{variant:"border-light",id:"dropdown-basic",className:"add"}),r.a.createElement(U.a.Menu,null,r.a.createElement(U.a.Item,null,r.a.createElement(f.a,{className:"dropdown-button",onClick:function(){return d(!0)}},"Edit Profile")),r.a.createElement(U.a.Item,null,r.a.createElement(f.a,{className:"dropdown-button logout",onClick:function(){y.logout(),P.push("/login")}},"Logout"))))),r.a.createElement(k.a,{show:u,onHide:function(){A(),T(!1)},animation:!1},r.a.createElement(k.a.Header,{closeButton:!0},r.a.createElement(k.a.Title,null,"Your Info")),r.a.createElement(k.a.Body,null,r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"d-flex flex-column ",onSubmit:S((function(e){if(e.password==E)if(A(),D){if(e.password==E&&D){var t=y.auth.currentUser,a=e.passwordNew;b(e.passwordNew),t.updateProfile({displayName:e.name}).then((function(){console.log(y.auth.currentUser)})).catch((function(e){console.log("error")})),t.updatePassword(a).then((function(){h({show:!0,message:"Updated Successfully"})})).catch((function(e){console.log("error")}))}}else(t=y.auth.currentUser).updateProfile({displayName:e.name}).then((function(){console.log(y.auth.currentUser),h({show:!0,message:"Updated Successfully"})})).catch((function(e){console.log("error")}));else alert("Wrong Password")}))},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",defaultValue:y.auth.currentUser.displayName,ref:N({required:!0,minLength:2}),name:"name",className:I.name?"has-error":""}),I.name&&B("name","Name"),r.a.createElement("label",null,"Enter your Password"),r.a.createElement("input",{type:"password",ref:N({required:!0,minLength:2}),defaultValue:y.auth.currentUser.password,name:"password",className:I.password?"has-error":"",placeholder:D?"Old Password":""}),I.password&&B("password","Password"),!D&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("a",{href:"#changePassword",onClick:function(){T(!0)}},"Change Password"))),D&&r.a.createElement("div",{className:"d-flex flex-column "},r.a.createElement("input",{type:"password",ref:N({required:!0,minLength:2}),name:"passwordNew",className:I.passwordNew?"has-error":"",placeholder:"New Password"}),I.passwordNew&&B("passwordNew","Password")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement(f.a,{type:"submit "},"Save changes"),r.a.createElement(f.a,{variant:"secondary",onClick:function(){A(),T(!1)}},"Close")))))))},P=a(54),B=a(55);function L(){var e=Object(P.a)(["\n  border: 0.2em solid rgba(0, 0, 0, 0.1);\n  border-top: 0.2em solid #767676;\n  border-radius: 50%;\n  width: 2.28571429rem;\n  height: 2.28571429rem;\n  animation: "," 0.6s linear infinite;\n"]);return L=function(){return e},e}function q(){var e=Object(P.a)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]);return q=function(){return e},e}var J=Object(B.b)(q()),H=B.a.div(L(),J),M=a(96),F=function(e){var t=Object(n.useContext)(s),a=(t.value,t.value2,t.value3,t.value4,t.value5,t.value6),c=Object(o.a)(a,2),l=c[0],i=c[1];return r.a.createElement(M.a,{onClose:function(){return i({show:!1})},show:l.show,delay:3e3,autohide:!0},r.a.createElement(M.a.Header,null),r.a.createElement(M.a.Body,null,r.a.createElement("h5",null,l.message)))},R=function(e){var t=Object(p.f)(),a=Object(n.useContext)(s),c=a.value,l=a.value2,i=(a.value3,a.value4,a.value5,a.value6),u=Object(o.a)(c,2),d=u[0],m=u[1],v=Object(o.a)(l,2),f=v[0],h=v[1],g=Object(n.useState)(""),E=Object(o.a)(g,2),b=(E[0],E[1]),O=Object(n.useState)(!0),w=Object(o.a)(O,2),j=w[0],N=w[1],S=Object(o.a)(i,2),k=S[0];S[1];return y.getCurrentUsername()||(alert("Please login first"),t.push("/login")),setTimeout((function(){N(!1)}),600),Object(n.useEffect)((function(){b(y.getCurrentUsername()),y.db.collection("users").doc("".concat(y.getCurrentUserId())).get().then((function(e){e.exists?(m(e.data().tasks),h(e.data().archived)):y.setUserDataBase(y.getCurrentUserId())})).catch((function(e){console.log("Error getting document:",e)}))}),[d],[f]),r.a.createElement("div",{className:"App"},j?r.a.createElement("div",{id:"loader",className:"load"},r.a.createElement(H,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"body-task"},r.a.createElement(A,null),r.a.createElement("div",{className:"row relative"},r.a.createElement("div",{className:"col-4"}," ",r.a.createElement(T,{value:{name:"To Do"},id:"toDo"})),r.a.createElement("div",{className:"col-4"}," ",r.a.createElement(T,{value:{name:"In Progress"},id:"inProgress"})),r.a.createElement("div",{className:"col-4"}," ",r.a.createElement(T,{value:{name:"Done"},id:"done"}))),r.a.createElement("div",{className:"absolute"},r.a.createElement(F,null,k)))))},W=function(){var e=Object(v.a)(),t=e.register,a=e.handleSubmit,n=e.errors,c=Object(p.f)();function l(){return(l=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{y.register(t.name,t.email,t.password),console.log("idddddd",y.getCurrentUserId()),c.push("./login")}catch(o){alert(o.message)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}y.auth.onAuthStateChanged((function(e){e?console.log(e):console.log("not logged in")}));var o=function(e,t){return r.a.createElement("p",null,"*","required"===n[e].type?"Required":"minLength"===n[e].type?"".concat(e," is too short"):"validate"===n[e].type?"Invalid Email":"")};return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",{className:"form"},r.a.createElement("form",{className:"d-flex flex-column ",onSubmit:a((function(e,t){!function(e){l.apply(this,arguments)}(e)}))},r.a.createElement("input",{ref:t({required:!0,minLength:2,validate:function(e){return/\S+@\S+\.\S+/.test(e)}}),className:n.email?"has-error":"",name:"email",placeholder:"Email"}),n.email&&o("email"),r.a.createElement("input",{ref:t({required:!0,minLength:2}),className:n.name?"has-error":"",name:"name",placeholder:"Name"}),n.name&&o("name"),r.a.createElement("input",{type:"password",ref:t({required:!0,minLength:5}),className:n.password?"has-error":"",name:"password",placeholder:"Password"}),n.password&&o("password"),r.a.createElement(f.a,{type:"submit",variant:"primary"},"Sign Up")),r.a.createElement("a",{href:"/login"},"Already have an account?")))))},V=function(){var e=Object(p.f)(),t=Object(n.useContext)(s),a=t.value,c=t.value2,l=(t.value3,t.value4,t.value5,t.value6),i=Object(o.a)(a,2),u=i[0],d=i[1],m=Object(o.a)(c,2),v=m[0],f=m[1],h=Object(o.a)(l,2),g=h[0],E=(h[1],Object(n.useState)(!0)),b=Object(o.a)(E,2),O=b[0],w=b[1];return y.getCurrentUsername()||(alert("Please login first"),e.push("/login")),setTimeout((function(){w(!1)}),600),Object(n.useEffect)((function(){y.db.collection("users").doc("".concat(y.getCurrentUserId())).get().then((function(e){e.exists?(d(e.data().tasks),f(e.data().archived)):y.setUserDataBase(y.getCurrentUserId())})).catch((function(e){console.log("Error getting document:",e)}))}),[u],[v]),r.a.createElement(r.a.Fragment,null,O?r.a.createElement("div",{id:"loader",className:"load"},r.a.createElement(H,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"relative"},v.map((function(e){return r.a.createElement(D,{value:e,id:e.id,key:e.id,archivedTask:"true"})}))),r.a.createElement("div",{className:"absolute"},r.a.createElement(F,null,g))))};var z=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){y.isInitialized().then((function(e){setTimeout((function(){c(e)}),100)}))})),!1!==a?r.a.createElement(i,null,r.a.createElement(j.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/signup",exact:!0,component:W}),r.a.createElement(p.a,{path:"/login",exact:!0,component:w}),r.a.createElement(p.a,{path:"/",exact:!0,component:w}),r.a.createElement(p.a,{path:"/todo",exact:!0,component:w}),r.a.createElement(p.a,{path:"/home",component:R}),r.a.createElement(p.a,{path:"/archived",component:V})))):r.a.createElement("div",{id:"loader",className:"load"},r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.7462e91b.chunk.js.map