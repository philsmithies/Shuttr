(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{162:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},215:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){},359:function(e,t){},360:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(15),s=a.n(o),i=(a(189),a(190),a(20)),r=a(18),l=(a(191),a(17)),d=a.n(l),j=a(9),u=a(1),b=Object(c.createContext)(),p=function(e){var t=Object(c.useState)(),a=Object(j.a)(t,2),n=a[0],o=a[1];return Object(c.useEffect)((function(){d()({method:"GET",withCredentials:!0,url:"/user"}).then((function(e){o(e.data)}))}),[]),Object(u.jsx)(b.Provider,{value:n,children:e.children})};function h(){var e=Object(c.useContext)(b);return Object(u.jsxs)("nav",{children:[e?Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("img",{class:"navbar_logo",src:"/images/shuttrlogo.png",alt:"header logo"})}):null,e?Object(u.jsx)(i.b,{to:"/profile",className:"index-button",children:Object(u.jsx)("li",{children:"Profile"})}):null,e?Object(u.jsx)(i.b,{to:"/Map",className:"index-button",children:Object(u.jsx)("li",{children:"Map"})}):null,e?Object(u.jsx)(i.b,{to:"/Discover",className:"index-button",children:Object(u.jsx)("li",{className:"discover",children:"Discover"})}):null,e?Object(u.jsx)(i.b,{to:"/Inspiration",className:"index-button",children:Object(u.jsx)("li",{children:"Inspiration"})}):null,e?Object(u.jsx)(i.b,{to:"/ImageUpload",className:"index-button",children:Object(u.jsx)("li",{children:"Upload"})}):null,e?Object(u.jsx)(i.b,{to:"/",onClick:function(){d.a.get("/logout",{withCredentials:!0}).then((function(e){if(console.log(e.data),"success"===e.data)return window.location.href="/"}))},className:"index-button",children:Object(u.jsx)("li",{className:"login",children:"Logout"})}):null,e?null:Object(u.jsx)(i.b,{to:"/login",className:"login-button",children:Object(u.jsx)("li",{className:"login",children:"Log In"})})]})}var m=a(40),g=a.n(m),f=a(60),x=(a(215),a(164)),O=a.n(x),v=a(404),y=a(399),w=a(396),C=a(402),k=a(400),N=a(81),S=a.n(N),I=a(397),_=a(392),T=a(394),q=Object(_.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function z(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),i=s[0],r=s[1],l=Object(c.useState)(""),b=Object(j.a)(l,2),p=b[0],h=b[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),N=x[0],_=x[1],z=Object(c.useState)(""),L=Object(j.a)(z,2),P=L[0],V=L[1],W=Object(c.useState)(""),A=Object(j.a)(W,2),D=A[0],U=A[1],E=Object(c.useState)(""),F=Object(j.a)(E,2),M=F[0],B=F[1],R=Object(c.useState)(""),J=Object(j.a)(R,2),Y=J[0],Z=J[1],G=Object(c.useState)(""),$=Object(j.a)(G,2),H=$[0],Q=$[1],X=Object(c.useState)(""),K=Object(j.a)(X,2),ee=K[0],te=K[1],ae=new RegExp("^(?=.{4,})"),ce=new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"),ne=0,oe=["Password does not meet criteria:","\n\u2022 Must be over 4 characters long"].join("").split("\n").map((function(e){return Object(u.jsx)("p",{children:e})})),se=function(){var e=Object(f.a)(g.a.mark((function e(){var t,c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("file",a),t.append("upload_preset","cyber_photos"),e.next=5,d.a.post("https://api.cloudinary.com/v1_1/dryaxqxie/image/upload",t);case 5:return c=e.sent,n=c.data.secure_url,e.prev=7,e.next=10,d.a.post("/signup",{name:D,username:i,password:N,email:P,publicId:n,job:p},{withCredentials:!0}).then((function(e){console.log(e),"User Created"===e.data?window.location.href="/login":"User Created"!==e.data&&(Z("User already exists, please sign in or create new account"),clearTimeout(ne),ne=setTimeout((function(){Z(""),ne=0}),6500))}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(){return e.apply(this,arguments)}}(),ie=q();return Object(u.jsxs)(T.a,{style:{backgroundColor:"#2c3531",color:"#ffffff"},component:"main",maxWidth:"xs",children:[Object(u.jsx)(w.a,{}),Object(u.jsxs)("div",{className:ie.paper,children:[Object(u.jsx)(v.a,{className:ie.avatar,children:Object(u.jsx)(S.a,{})}),ee," ",H," ",Y,Object(u.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(u.jsxs)("form",{className:ie.form,noValidate:!0,children:[Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){r(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Name",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){U(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Job Title",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){V(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){_(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(O.a,{password:N}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password Confirmation",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){B(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsxs)(y.a,{variant:"contained",component:"label",style:{backgroundColor:"#51fbee",color:"#000000"},children:["Profile Picture",Object(u.jsx)("input",{type:"file",hidden:!0,onChange:function(e){n(e.target.files[0])},style:{display:"none"}})]}),Object(u.jsx)(y.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:ie.submit,onClick:function(e){ce.test(P)?ae.test(N)?N!==M?(Z("Passwords do not match"),clearTimeout(ne),ne=setTimeout((function(){Z(""),ne=0}),6500)):se():(Q(oe),clearTimeout(ne),ne=setTimeout((function(){Q(""),ne=0}),6500)):(te("Not a valid email address"),clearTimeout(ne),ne=setTimeout((function(){te(""),ne=0}),6500))},style:{backgroundColor:"#51fbee",color:"#000000",marginBottom:"5em"},children:"Create User"}),Object(u.jsx)(k.a,{container:!0,children:Object(u.jsx)(k.a,{item:!0})})]})]})]})}var L=a(34),P=a(46),V=a(401),W=a(30);a(349);var A=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(null),s=Object(j.a)(o,2),i=s[0],r=s[1];Object(c.useEffect)((function(){d()("/photos/all").then((function(e){console.log(e.data),n(e.data)})).catch((function(e){console.log("Error getting data: "+e)}))}),[]);var l=Object(c.useState)({width:"100vw",height:"100vh",latitude:51.5073509,longitude:-.1277583,zoom:13}),b=Object(j.a)(l,2),p=b[0],h=b[1];return Object(u.jsx)("div",{children:Object(u.jsx)(P.c,Object(L.a)(Object(L.a)({},p),{},{mapboxApiAccessToken:"pk.eyJ1IjoiYWptY2NvciIsImEiOiJja3BzcDlhYzMxNXNpMnZzNHQ4NXU1OTkxIn0.B2Wznfb0ZLgT1QhCHqxd8A",onViewportChange:function(e){return h(e)},mapStyle:"mapbox://styles/ajmccor/ckq0xqybt3fsf18rltfgs0y5t",children:Object(u.jsx)("div",{children:a.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(P.a,{latitude:(e.coordinates||{lat:0}).lat,longitude:(e.coordinates||{lng:0}).lng,offsetLeft:-20,offsetTop:-10,children:Object(u.jsx)(V.a,{style:{fontSize:4*p.zoom,color:"#45A293"},onClick:function(){return t=e._id,void r(t);var t}})}),e._id===i&&Object(u.jsx)(P.b,{latitude:(e.coordinates||{lat:0}).lat,longitude:(e.coordinates||{lng:0}).lng,closeButton:!0,closeOnClick:!1,sortByDepth:!0,anchor:"bottom",onClose:function(){return r(null)},children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)(W.a,{className:"map_photo",cloudName:"cyber_photos",publicId:e.publicId}),Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://maps.google.com/maps?&z={10}&q=".concat((e.coordinates||{lat:0}).lat,"+").concat((e.coordinates||{lng:0}).lng),children:"Link To Maps"})]})})]},e.id)}))})}))})},D=(a(350),a(398)),U=a(403);function E(){return Object(u.jsxs)(I.a,{variant:"body2",style:{color:"#51fbee"},align:"center",children:["Copyright \xa9 ","Shuttr ",(new Date).getFullYear(),"."]})}var F=Object(_.a)((function(e){return{root:{height:"100vh"},text:{colorBlack:"#000000"},image:{backgroundImage:"url(https://source.unsplash.com/featured/?london,shoreditch)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center",color:"#ffffff"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),color:"#ffffff"},submit:{margin:e.spacing(3,0,2)}}}));function M(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),r=s[0],l=s[1],b=F();return Object(u.jsxs)(k.a,{container:!0,component:"main",className:b.root,children:[Object(u.jsx)(w.a,{}),Object(u.jsx)(k.a,{item:!0,xs:!1,sm:4,md:7,className:b.image}),Object(u.jsx)(k.a,{style:{backgroundColor:"#2c3531",color:"#ffffff"},item:!0,xs:12,sm:8,md:5,component:D.a,elevation:6,square:!0,children:Object(u.jsxs)("div",{className:b.paper,children:[Object(u.jsx)(v.a,{className:b.avatar,children:Object(u.jsx)(S.a,{})}),Object(u.jsx)(I.a,{component:"h1",variant:"h5",children:"Login"}),Object(u.jsxs)("form",{className:b.form,noValidate:!0,children:[Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"User Name",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){n(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){l(e.target.value)},style:{backgroundColor:"#b9bbb6",color:"#000000"}}),Object(u.jsx)(y.a,{type:"button",fullWidth:!0,variant:"contained",className:b.submit,onClick:function(){d()({method:"POST",data:{username:a.toLowerCase(),password:r},withCredentials:!0,url:"/login"}).then((function(e){"Successfully Authenticated"===e.data&&(window.location.href="/pages/discover")}))},style:{backgroundColor:"#51fbee",color:"#000000"},children:"Login"}),Object(u.jsx)(k.a,{container:!0,children:Object(u.jsx)(k.a,{item:!0,children:Object(u.jsx)(i.b,{to:"/signup",style:{color:"#ffffff"},variant:"body2",children:"Don't have an account? Sign Up"})})}),Object(u.jsx)(U.a,{mt:5,children:Object(u.jsx)(E,{})})]})]})})]})}a(351);var B=a(87),R=a.n(B);var J=function(e){var t=e.lat,a=e.lng,n=e.width,o=e.height,s=e.zoom,i=e.color,r=Object(c.useState)({width:n,height:o,latitude:t,longitude:a,zoom:s}),l=Object(j.a)(r,2),d=l[0],b=l[1];return Object(u.jsx)("div",{children:Object(u.jsx)(P.c,Object(L.a)(Object(L.a)({},d),{},{mapboxApiAccessToken:"pk.eyJ1IjoiYWptY2NvciIsImEiOiJja3BzcDlhYzMxNXNpMnZzNHQ4NXU1OTkxIn0.B2Wznfb0ZLgT1QhCHqxd8A",onViewportChange:function(e){return b(e)},mapStyle:"mapbox://styles/ajmccor/ckq0xqybt3fsf18rltfgs0y5t",children:Object(u.jsx)(P.a,{latitude:t,longitude:a,offsetLeft:-20,offsetTop:-10,children:Object(u.jsx)(V.a,{style:{fontSize:4*d.zoom,color:i}})})}))})};function Y(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),s=Object(j.a)(o,2),i=s[0],r=s[1],l=Object(c.useState)(""),b=Object(j.a)(l,2),p=b[0],h=b[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),O=x[0],v=x[1],N=Object(c.useState)(""),S=Object(j.a)(N,2),T=S[0],q=S[1],z=Object(c.useState)(!1),P=Object(j.a)(z,2),V=P[0],W=P[1],A=Object(c.useState)(""),D=Object(j.a)(A,2),U=D[0],E=D[1],F=Object(c.useState)({lat:51.5073509,lng:-.1277583}),M=Object(j.a)(F,2),Y=M[0],Z=M[1],G=function(e){var t=new FileReader;t.readAsDataURL(e),t.onloadend=function(){E(t.result)}};function $(){if(V)return Object(u.jsx)("div",{children:Object(u.jsx)("img",{class:"loadinggif",src:"/images/loading.gif",alt:"loading animation"})})}var H=function(){var e=Object(f.a)(g.a.mark((function e(){var t,c,o,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(p),(t=new FormData).append("file",a),t.append("upload_preset","cyber_photos"),e.prev=4,W(!0),$(),c={withCredentials:!0},e.next=10,d.a.post("https://api.cloudinary.com/v1_1/dryaxqxie/image/upload",t);case 10:return o=e.sent,s=o.data.secure_url,e.next=14,d.a.post("/photos/upload",{imageUrl:s,hashtag:i,caption:O,location:p,coordinates:Y,description:T},c).then(window.location.href="/discover");case 14:l=e.sent,console.log(l.data),W(!1),$(),n(""),v(""),r(""),h(""),q(""),E(""),e.next=29;break;case 26:e.prev=26,e.t0=e.catch(4),console.error(e.t0);case 29:case"end":return e.stop()}}),e,null,[[4,26]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.geocodeByAddress)(t);case 2:return a=e.sent,e.next=5,Object(B.getLatLng)(a[0]);case 5:c=e.sent,h(t),Z(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=Object(_.a)((function(e){return{typography:{fontFamily:["Roboto"].join(",")},root:{height:"100vh"},image:{backgroundColor:"#2c3531",backgroundSize:"cover",backgroundPosition:"center"},container:{marginRight:"300px"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"70%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}))();return Object(u.jsxs)("div",{class:"form_wrapper",children:[Object(u.jsxs)("div",{class:"preview",children:[Object(u.jsx)("div",{className:"preview-text",children:Object(u.jsx)("h2",{children:"Upload preview"})}),U&&Object(u.jsx)("img",{src:U,alt:"chosen",className:"preview-image"})]}),Object(u.jsx)(w.a,{}),Object(u.jsx)(k.a,{className:X.image}),Object(u.jsxs)("div",{id:"signup-wrapper",className:X.paper,children:[Object(u.jsx)(I.a,{className:"upload",component:"h1",variant:"h4",style:{color:"#fff"},children:"ADD IMAGE"}),Object(u.jsxs)("form",{className:X.form,noValidate:!0,children:[Object(u.jsxs)(y.a,{variant:"contained",component:"label",children:["Upload",Object(u.jsx)("input",{accept:"image/*",className:X.input,id:"contained-button-file",multiple:!0,type:"file",style:{display:"none"},onChange:function(e){n(e.target.files[0]);var t=e.target.files[0];G(t)}})]}),Object(u.jsx)("div",{class:"places",children:Object(u.jsx)(R.a,{searchOptions:{componentRestrictions:{country:["gb"]}},value:p,onChange:h,onSelect:Q,children:function(e){var t=e.getInputProps,a=e.suggestions,c=e.getSuggestionItemProps,n=e.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",Object(L.a)({},t({placeholder:"Type address"}))),Object(u.jsxs)("div",{children:[n?Object(u.jsx)("div",{children:"...loading"}):null,a.map((function(e){var t={backgroundColor:e.active?"#41b6e6":"#fff",cursor:"pointer"};return Object(u.jsx)("div",Object(L.a)(Object(L.a)({},c(e,{style:t})),{},{children:e.description}))}))]})]})}})}),Object(u.jsx)(C.a,{style:{backgroundColor:"#fff",color:"#000000"},variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"#hashtag",label:"#hashtag",name:"#hashtag",autoComplete:"#hashtag",value:i,autoFocus:!0,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"caption",label:"caption",name:"caption",autoComplete:"caption",value:O,autoFocus:!0,style:{backgroundColor:"#fff",color:"#000000"},onChange:function(e){return v(e.target.value)}}),Object(u.jsx)(C.a,{variant:"filled",margin:"normal",required:!0,fullWidth:!0,style:{backgroundColor:"#fff",color:"#000000"},id:"description",label:"description",name:"description",autoComplete:"description",value:T,autoFocus:!0,onChange:function(e){return q(e.target.value)}}),Object(u.jsx)(y.a,{type:"button",fullWidth:!0,variant:"contained",className:X.submit,onClick:H,style:{backgroundColor:"#51fbee",color:"#000000"},children:"Upload"}),$()]})]}),Object(u.jsxs)("div",{class:"map_card",children:[Object(u.jsx)("div",{class:"map_text",children:Object(u.jsx)("h2",{children:"Preview"})}),Object(u.jsx)("div",{class:"minimap_wrapper",children:function(){if("-0.1277583"!==Y.lng)return Object(u.jsx)(J,{width:"100%",height:"400px",zoom:13,lat:Y.lat,lng:Y.lng,color:"#45A293"})}()})]})]})}a(356);var Z=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)([]),s=Object(j.a)(o,2),l=s[0],b=s[1],p=Object(c.useState)([]),h=Object(j.a)(p,2),m=h[0],g=h[1],f=Object(r.f)().userId;return Object(c.useEffect)((function(){console.log(f),function(e){console.log("getProfileData"),e?d()({method:"GET",withCredentials:!0,url:"/user/"+e}).then((function(e){console.log(e.data),n(e.data)})):d()({method:"GET",withCredentials:!0,url:"/user"}).then((function(e){console.log(e.data),n(e.data)}))}(f),d()("/photos/all").then((function(e){console.log(e.data),b(e.data)}))}),[f]),Object(c.useEffect)((function(){!function(e){console.log(e);var t=e.filter((function(e){return a&&e.author===a.username}));console.log(t),g(t)}(l)}),[a,l]),Object(u.jsx)("div",{children:!!a&&Object(u.jsxs)("div",{children:[console.log("this is rendered"),console.log(a),Object(u.jsxs)("div",{class:"profile_layout",children:[Object(u.jsxs)("div",{className:"userwrapper",children:[Object(u.jsx)("div",{className:"profilephoto_wrapper",children:Object(u.jsx)(W.a,{className:"profile_photo",cloudName:"cyber_photos",publicId:a.publicId})}),Object(u.jsxs)("div",{class:"profile-bio",children:[Object(u.jsxs)("h3",{class:"handle-title",children:["@",a.username]}),Object(u.jsxs)("p",{className:"profile-title",children:["Bio:",Object(u.jsx)("br",{}),a.job]}),Object(u.jsx)("p",{class:"location-title",children:"London, UK"})]})]}),Object(u.jsxs)("div",{className:"userposts",children:[Object(u.jsxs)(I.a,{className:"your-posts-title",component:"h1",variant:"h4",style:{fontWeight:"100",color:"#fff",marginBottom:"2rem"},children:[a.username,"'s Posts"]}),m.map((function(e,t){return Object(u.jsxs)("div",{class:"single-post",children:[Object(u.jsx)(W.a,{className:"profile-feed",cloudName:"cyber_photos",publicId:e.publicId}),Object(u.jsxs)("p",{class:"photo-title",children:["Taken in: ",e.location]}),Object(u.jsx)("p",{class:"location_description",children:"Description:"}),Object(u.jsx)("p",{class:"location_description-text",children:e.description}),Object(u.jsxs)("p",{children:["Tags:"," ",Object(u.jsxs)("span",{class:"tagsprofile",children:[" ",Object(u.jsxs)(i.b,{to:"/".concat(e.hashtag),className:"index-button",children:["#",e.hashtag]})]})]}),Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://maps.google.com/maps?&z={10}&q=".concat(e.coordinates.lat,"+").concat(e.coordinates.lng),children:"Link To Maps"})]},t)}))]})]})]})})};a(357);function G(){return Object(u.jsxs)("div",{class:"home-wrapper",children:[Object(u.jsxs)("div",{class:"fullscrenvideo",children:[Object(u.jsx)("div",{class:"overlay",children:Object(u.jsx)("img",{class:"shuttrlogo",src:"/images/shuttrlogo.png",alt:"shuttr logo"})}),Object(u.jsx)("video",{className:"videoTag",autoPlay:!0,loop:!0,muted:!0,children:Object(u.jsx)("source",{src:"/images/banner_dark.mp4",type:"video/mp4"})})]}),Object(u.jsxs)("div",{class:"cta-wrapper",children:[Object(u.jsx)("img",{class:"shuttriphone",src:"/images/shuttr_iphone.png",alt:"iphone shuttr"}),Object(u.jsxs)("div",{class:"text_home",children:[Object(u.jsx)("h2",{children:" Find the best spots,"}),Object(u.jsx)("p",{children:"See what you're missing out on in your city and discover more."}),Object(u.jsx)("p",{class:"no-account",style:{color:"white"},children:"Don't have an account?"}),Object(u.jsx)(y.a,{type:"button",width:"50%",variant:"contained",color:"primary",href:"/signup",style:{backgroundColor:"#51fbee",color:"#000000"},children:"Sign up"})]})]}),Object(u.jsxs)("div",{class:"grid",children:[Object(u.jsx)("div",{class:"grid-left",children:Object(u.jsx)("img",{class:"home-img-left",src:"/images/londonpub.jpg",alt:"london pub"})}),Object(u.jsxs)("div",{class:"grid-right",children:[Object(u.jsx)("h2",{children:" Want to see more?"}),Object(u.jsx)("p",{style:{color:"white"},children:"Join today and see your city like you've not seen it before."}),Object(u.jsx)(y.a,{type:"button",width:"50%",variant:"contained",color:"primary",href:"/signup",style:{backgroundColor:"#51fbee",color:"#000000"},children:"Find Out More"})]})]})]})}a(162),a(358);function $(e){e.name;var t=e.hashtag,a=e.location,c=e.coordinates,n=(e.lat,e.lng,e.caption,e.description),o=e.publicId;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{class:"location-newtext",children:a}),Object(u.jsxs)("div",{class:"location_newwrapper",children:[Object(u.jsx)("div",{class:"location_newphoto",children:Object(u.jsx)(W.a,{className:"location-img",cloudName:"cyber_photos",publicId:o})}),Object(u.jsx)("div",{class:"location_newmap",children:Object(u.jsx)(J,{lat:c.lat,lng:c.lng,width:"300px",height:"300px",zoom:14,color:"orangeRed"})}),Object(u.jsxs)("div",{class:"location_info",children:[Object(u.jsx)("p",{class:"location_description",children:"Description:"}),Object(u.jsx)("p",{class:"location_description-text",children:n}),Object(u.jsxs)("p",{children:["Tags:"," ",Object(u.jsxs)("span",{class:"tags",children:[" ",Object(u.jsxs)(i.b,{to:"/".concat(t),className:"index-button",children:["#",t]})]})]}),Object(u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://maps.google.com/maps?&z={10}&q=".concat(c.lat,"+").concat(c.lng),children:"Link To Maps"})]})]})]})}var H=a(83);a(163);function Q(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)([]),s=Object(j.a)(o,2),i=s[0],r=s[1],l=Object(c.useState)(""),b=Object(j.a)(l,2),p=b[0],h=b[1];return Object(c.useEffect)((function(){d()("/photos/all").then((function(e){n(e.data),r(e.data)})).catch((function(e){console.log("Error getting data: "+e)}))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"page",children:[Object(u.jsxs)("div",{class:"discover_container",children:[Object(u.jsx)("label",{class:"title",children:"Search Locations:"}),Object(u.jsx)("input",{type:"text",placeholder:"Search Locations",onChange:function(e){return function(e){var t=e.target.value;h(t?"Showing search results for: "+t:"");var c,n=t.charAt(0).toUpperCase()+t.slice(1);c=a.filter((function(e){return-1!==e.location.search(n)})),r(c)}(e)}}),Object(u.jsx)("div",{class:"search"})]}),Object(u.jsxs)("div",{class:"search_results",children:[Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:p})]}),Object(u.jsx)("div",{class:"container",children:i.map((function(e,t){return Object(u.jsxs)("div",{class:"card",children:[Object(u.jsx)("div",{class:"face1",children:Object(u.jsx)("div",{class:"content",children:Object(u.jsx)(W.a,{class:"cloud_photo",cloudName:"cyber_photos",publicId:e.publicId})},e.id)}),Object(u.jsx)("div",{class:"face2",children:Object(u.jsxs)("div",{class:"content",children:[Object(u.jsxs)("p",{children:["#",e.hashtag]}),Object(u.jsxs)("p",{children:["Taken at: ",e.location]}),Object(u.jsxs)("a",{href:"/profile/"+e.author,children:[" @",e.author]}),Object(u.jsx)("br",{}),Object(u.jsx)(H.a,{trigger:Object(u.jsx)("button",{className:"button",children:"View More"}),modal:!0,nested:!0,children:function(t){return Object(u.jsxs)("div",{className:"modal",children:[Object(u.jsx)("button",{className:"close",onClick:t,children:"\xd7"}),Object(u.jsxs)("div",{className:"modal-content",children:[" ",Object(u.jsx)($,{name:e.name,hashtag:e.hashtag,location:e.location,coordinates:e.coordinates,caption:e.caption,description:e.description,publicId:e.publicId})]})]})}})]})})]})}))})]})})}a(359);var X=a(62),K=a(366),ee=(a(360),[{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623939967/erilqk0qiguividbjvq5.jpg",title:"Architecture",width:"33.4%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623939946/brvw91jzygfjpuky8rsk.jpg",title:"Colourful",width:"33.3%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623939957/hcie3peztxbtsatgxgy8.jpg",title:"Greenery",width:"33.3%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623687028/a10bfadoyvgduczxatit.jpg",title:"Vibes",value:"vibes",width:"33.4%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623338814/qcmksfniv6ml6uyx8kes.jpg",title:"Tourist",width:"33.3%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623939955/jtopwat1d4jttdthmxuv.jpg",title:"StreetArt",width:"33.3%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623992203/rkouyrzg0r6g4cffdyo3.jpg",title:"Rooftop",width:"33.4%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623939961/mxmibcyxrbs2ckgxye1k.jpg",title:"Sunset",width:"33.3%"},{url:"https://res.cloudinary.com/dryaxqxie/image/upload/v1623939967/m3ecnwe1gsrbjoqsf4ip.jpg",title:"Lights",width:"33.3%"}]),te=Object(_.a)((function(e){var t;return{root:{flexWrap:"wrap",minWidth:300,width:"100vw",height:"100vh"},image:(t={position:"relative",height:"33.4%"},Object(X.a)(t,e.breakpoints.down("xs"),{width:"255px !important",height:100}),Object(X.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid #ffcb9a",color:"#ffcb9a",backgroundColor:"#2c35317a"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#d1e8e2"},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px ").concat(e.spacing(1)+6,"px")},imageMarked:{height:3,width:18,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}}));function ae(){var e=te();return Object(u.jsx)("div",{class:"hashtagswrapper",children:Object(u.jsx)("div",{className:e.root,children:ee.map((function(t){return Object(u.jsxs)(K.a,{focusRipple:!0,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:t.width},onClick:function(e){e.preventDefault(),window.location.href="http://localhost:3000/"+t.title},children:[Object(u.jsx)("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(t.url,")")}}),Object(u.jsx)("span",{className:e.imageBackdrop}),Object(u.jsx)("span",{className:e.imageButton,children:Object(u.jsxs)(I.a,{component:"span",variant:"subtitle1",color:"inherit",className:e.imageTitle,children:[t.title,Object(u.jsx)("span",{className:e.imageMarked})]})})]},t.title)}))})})}a(361);function ce(e){var t=e.searchValue,a=Object(c.useState)([]),n=Object(j.a)(a,2),o=n[0],s=n[1];Object(c.useEffect)((function(){d()("/photos/all").then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log("Error getting data: "+e)}))}),[]);var i=o.filter((function(e){return e.hashtag===t}));return Object(u.jsx)("div",{class:"page",children:Object(u.jsx)("div",{class:"container",children:i.map((function(e,t){return Object(u.jsxs)("div",{class:"card",children:[Object(u.jsx)("div",{class:"face1",children:Object(u.jsx)("div",{class:"content",children:Object(u.jsx)(W.a,{class:"cloud_photo",cloudName:"cyber_photos",publicId:e.publicId})},e.id)}),Object(u.jsx)("div",{class:"face2",children:Object(u.jsxs)("div",{class:"content",children:[Object(u.jsx)("p",{children:e.location}),Object(u.jsx)(H.a,{trigger:Object(u.jsx)("button",{className:"button",children:"View More"}),modal:!0,nested:!0,children:function(t){return Object(u.jsxs)("div",{className:"modal",children:[Object(u.jsx)("button",{className:"close",onClick:t,children:"\xd7"}),Object(u.jsxs)("div",{className:"modal-content",children:[" ",Object(u.jsx)($,{name:e.name,hashtag:e.hashtag,location:e.location,coordinates:e.coordinates,caption:e.caption,description:e.description,publicId:e.publicId})]})]})}})]})})]})}))})})}function ne(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(h,{}),Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"/",exact:!0,component:G}),Object(u.jsx)(r.a,{path:"/pages/login",component:M}),Object(u.jsx)(r.a,{path:"/SignUp",component:z}),Object(u.jsx)(r.a,{path:"/Map",component:A}),Object(u.jsx)(r.a,{path:"/ImageUpload",component:Y}),Object(u.jsx)(r.a,{path:"/Inspiration",component:ae}),Object(u.jsx)(r.a,{path:"/Profile/:userId",component:Z}),Object(u.jsx)(r.a,{path:"/Profile",component:Z}),Object(u.jsx)(r.a,{path:"/pages/discover",component:Q}),Object(u.jsx)(r.a,{path:"/Architecture",render:function(){return Object(u.jsx)(ce,{searchValue:"architecture"})}}),Object(u.jsx)(r.a,{path:"/Colourful",render:function(){return Object(u.jsx)(ce,{searchValue:"colourful"})}}),Object(u.jsx)(r.a,{path:"/Greenery",render:function(){return Object(u.jsx)(ce,{searchValue:"greenery"})}}),Object(u.jsx)(r.a,{path:"/Vibes",render:function(){return Object(u.jsx)(ce,{searchValue:"vibes"})}}),Object(u.jsx)(r.a,{path:"/Tourist",render:function(){return Object(u.jsx)(ce,{searchValue:"tourist"})}}),Object(u.jsx)(r.a,{path:"/Rooftop",render:function(){return Object(u.jsx)(ce,{searchValue:"rooftop"})}}),Object(u.jsx)(r.a,{path:"/Sunset",render:function(){return Object(u.jsx)(ce,{searchValue:"sunset"})}}),Object(u.jsx)(r.a,{path:"/Lights",render:function(){return Object(u.jsx)(ce,{searchValue:"lights"})}}),Object(u.jsx)(r.a,{path:"/Location",render:function(){return Object(u.jsx)(ce,{searchValue:"location"})}}),Object(u.jsx)(r.a,{component:Error})]})]})})})}var oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,407)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(ne,{})})}),document.getElementById("root")),oe()}},[[362,1,2]]]);
//# sourceMappingURL=main.42849b79.chunk.js.map