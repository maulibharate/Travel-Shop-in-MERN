(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{491:function(e,t,a){e.exports=a(981)},719:function(e,t,a){},802:function(e,t,a){},976:function(e,t,a){},977:function(e,t,a){},981:function(e,t,a){"use strict";a.r(t);a(301),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(492),a(493),a(494),a(495),a(496),a(497),a(498),a(329),a(499),a(500),a(150),a(501),a(502),a(503),a(504),a(505),a(506),a(507),a(508),a(509),a(510),a(511),a(512),a(513),a(515),a(516),a(335),a(184),a(517),a(518),a(519),a(520),a(521),a(522),a(523),a(524),a(525),a(526),a(527),a(528),a(529),a(530),a(531),a(532),a(340),a(533),a(534),a(535),a(536),a(537),a(538),a(539),a(540),a(541),a(542),a(543),a(545),a(546),a(547),a(548),a(549),a(550),a(551),a(552),a(553),a(554),a(555),a(556),a(557),a(558),a(559),a(560),a(561),a(562),a(563),a(564),a(255),a(566),a(567),a(568),a(569),a(570),a(571),a(572),a(574),a(575),a(576),a(577),a(578),a(579),a(580),a(581),a(582),a(583),a(584),a(352),a(585),a(586),a(257),a(587),a(588),a(589),a(590),a(192),a(591),a(592),a(593),a(594),a(595),a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(604),a(605),a(606),a(607),a(608),a(609),a(610),a(611),a(612),a(613),a(614),a(615),a(616),a(620),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(628),a(629),a(630),a(631),a(632),a(633),a(634),a(635),a(636),a(637),a(638),a(639),a(640),a(641),a(642),a(643),a(644),a(645),a(646),a(647),a(648),a(649),a(650),a(651),a(652),a(262),a(653),a(654),a(655),a(656),a(657),a(658),a(659),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(662),a(663),a(664),a(665),a(666),a(667),a(668),a(669),a(670),a(671),a(672),a(673),a(674),a(675),a(676),a(677),a(679),a(680),a(681),a(682),a(683),a(684),a(685),a(686),a(687),a(688),a(689),a(380),a(382),a(383),a(384),a(385),a(386),a(387),a(388),a(389),a(390),a(391),a(392),a(393),a(394),a(395),a(396),a(397),a(398),a(690),a(691),a(692),a(694),a(399),a(400),a(401),a(695),a(696),a(697),a(698),a(699),a(700),a(701),a(702),a(263),a(704),a(705),a(706),a(708),a(404),a(709),a(405);var r=a(0),n=a.n(r),c=a(7),l=a.n(c),i=(a(719),a(106)),o=a(40),s=a.n(o);function m(){return{type:"auth_user",payload:s.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var u=a(55),d=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function c(c){var l=Object(u.c)((function(e){return e.user})),i=Object(u.b)();return Object(r.useEffect)((function(){i(m()).then((function(e){e.payload.isAuth?(a&&!e.payload.isAdmin||!1===t)&&c.history.push("/"):t&&c.history.push("/login")}))}),[]),n.a.createElement(e,Object.assign({},c,{user:l}))}return c},p=a(41),E=a(105),f=a(20),h=a(983),v=a(75),b=a(19),g=a(982);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT;var y=a(986),O=a(992),_=y.a.Panel;var j=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement(y.a,{defaultActiveKey:["1"]},n.a.createElement(_,{header:"continents",key:"1"},e.list.map((function(t,a){return n.a.createElement(n.a.Fragment,{key:a},n.a.createElement("div",{className:"my-2"},n.a.createElement(O.a,{onChange:function(){return function(t){var a=c.indexOf(t),r=Object(E.a)(c);-1===a?r.push(t):r.splice(a,1),l(r),e.handleFilters(r)}(t._id)},type:"checkbox",checked:-1!==c.indexOf(t._id),className:"mx-1"}),n.a.createElement("span",{className:"mx-1"},t.name)))})))))},S=a(989),w=y.a.Panel;var N=function(e){var t=Object(r.useState)("0"),a=Object(f.a)(t,2),c=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement(y.a,{defaultActiveKey:["1"]},n.a.createElement(w,{header:"price",key:"1"},n.a.createElement(S.a.Group,{onChange:function(t){l(t.target.value),e.handleFilters(t.target.value)},value:c},e.list.map((function(e){return n.a.createElement("div",{className:"my-1"},n.a.createElement(S.a,{key:e._id,value:"".concat(e._id)},e.name))}))))))},x=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $199",array:[0,199]},{_id:2,name:"$200 to $249",array:[200,249]},{_id:3,name:"$250 to $279",array:[250,279]},{_id:4,name:"$280 to $299",array:[280,299]},{_id:5,name:"More than $300",array:[300,15e5]}],k=[{_id:1,name:"Africa"},{_id:2,name:"Europe"},{_id:3,name:"Asia"},{_id:4,name:"North America"},{_id:5,name:"South America"},{_id:6,name:"Australia"},{_id:7,name:"Antarctica"}],C=a(990),I=C.a.Search;var D=function(e){var t=Object(r.useState)(""),a=Object(f.a)(t,2),c=a[0],l=a[1];return n.a.createElement("div",null,n.a.createElement(I,{value:c,onChange:function(t){l(t.currentTarget.value),e.refreshFunction(t.currentTarget.value)},placeholder:"Search By Typing..."}))},T=(a(802),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT,h.a.Meta);var P=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)(0),i=Object(f.a)(l,2),o=i[0],m=i[1],u=Object(r.useState)(8),d=Object(f.a)(u,2),y=d[0],O=(d[1],Object(r.useState)(0)),_=Object(f.a)(O,2),S=(_[0],_[1]),w=Object(r.useState)(""),C=Object(f.a)(w,2),I=(C[0],C[1]),P=Object(r.useState)({continents:[],price:[]}),A=Object(f.a)(P,2),q=A[0],R=A[1];Object(r.useEffect)((function(){L({skip:o,limit:y})}),[]);var L=function(e){s.a.post("/api/product/getProducts",e).then((function(t){t.data.success?(e.loadMore?c([].concat(Object(E.a)(a),[t.data.products])):c(t.data.products),S(t.data.PostSize)):console.log("Failed to fectch product datas")}))},W=Object.keys(a).map((function(e){return n.a.createElement(v.a,{lg:12,md:12,xs:24,className:"p-1"},n.a.createElement(h.a,{hoverable:!0,cover:n.a.createElement("a",{href:"product/".concat(a[e]._id)},n.a.createElement(g.a,{autoplay:!0},Object.keys(a[e].images).map((function(t){return n.a.createElement("div",null,n.a.createElement("img",{src:"https://travel-shop-in-mern.herokuapp.com/".concat(a[e].images[t]),alt:"productImage",style:{width:"100%",maxHeight:"250px"}}))}))))},n.a.createElement(T,{title:a[e].title,description:"$".concat(a[e].price)})))})),B=function(e,t){var a=Object(p.a)({},q);if(a[t]=e,"price"===t){var r=function(e){var t=x,a=[];for(var r in t)t[r]._id===parseInt(e,10)&&(a=t[r].array);return a}(e);a[t]=r}!function(e){L({skip:0,limit:y,filters:e}),m(0)}(a),R(a)};return n.a.createElement("div",null,n.a.createElement("div",{className:"MainHeading",style:{textAlign:"center"}},n.a.createElement("h1",null," Let's Travel Anywhere ",n.a.createElement(b.a,{type:"rocket"}))),n.a.createElement("div",{className:"container-fluid MainContainer"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 ps-4"},0===a.length?n.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,"No Post yet...")):n.a.createElement("div",null,n.a.createElement("div",{className:"row"},W))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"row mb-3"},n.a.createElement(D,{refreshFunction:function(e){var t={skip:0,limit:y,filters:q,searchTerm:e};m(0),I(e),L(t)}})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(j,{list:k,handleFilters:function(e){return B(e,"continents")}})),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(N,{list:x,handleFilters:function(e){return B(e,"price")}})))))))},A=a(230),q=a(69),R=a(985),L=a(984),W=a(299),B=R.a.Title;var F=Object(i.f)((function(e){var t=Object(u.b)(),a=!!localStorage.getItem("rememberMe"),c=Object(r.useState)(""),l=Object(f.a)(c,2),i=l[0],o=l[1],m=Object(r.useState)(a),d=Object(f.a)(m,2),p=d[0],E=d[1],h=function(){E(!p)},v=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(A.a,{initialValues:{email:v||"fullstack@mern.com",password:"Test@123"},validationSchema:q.object().shape({email:q.string().email("Email is invalid").required("Email is required"),password:q.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout((function(){var r={email:a.email,password:a.password};t(function(e){return{type:"login_user",payload:s.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(r)).then((function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===p?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):o("Check out your Account or Password again")})).catch((function(e){o("Check out your Account or Password again"),setTimeout((function(){o("")}),3e3)})),n(!1)}),500)}},(function(e){var t=e.values,a=e.touched,r=e.errors,c=(e.dirty,e.isSubmitting),l=e.handleChange,o=e.handleBlur,s=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement(B,{level:2},"Log In"),n.a.createElement("form",{onSubmit:s,style:{width:"350px"}},n.a.createElement(L.a.Item,{required:!0},n.a.createElement(C.a,{id:"email",prefix:n.a.createElement(b.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:l,onBlur:o,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(L.a.Item,{required:!0},n.a.createElement(C.a,{id:"password",prefix:n.a.createElement(b.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:l,onBlur:o,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),i&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},i)),n.a.createElement(L.a.Item,null,n.a.createElement(O.a,{id:"rememberMe",onChange:h,checked:p},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement(W.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:c,onSubmit:s},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))}))})),K=a(174),H=a.n(K),U={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},M={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var $=function(e){var t=Object(u.b)();return n.a.createElement(A.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:q.object().shape({name:q.string().required("Name is required"),lastName:q.string().required("Last Name is required"),email:q.string().email("Email is invalid").required("Email is required"),password:q.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:q.string().oneOf([q.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout((function(){var r={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(H()().unix(),"?d=identicon")};t(function(e){return{type:"register_user",payload:s.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(r)).then((function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)})),n(!1)}),500)}},(function(e){var t=e.values,a=e.touched,r=e.errors,c=(e.dirty,e.isSubmitting),l=e.handleChange,i=e.handleBlur,o=e.handleSubmit;e.handleReset;return n.a.createElement("div",{className:"app"},n.a.createElement("h2",null,"Sign up"),n.a.createElement(L.a,Object.assign({style:{minWidth:"375px"}},U,{onSubmit:o}),n.a.createElement(L.a.Item,{required:!0,label:"Name"},n.a.createElement(C.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:l,onBlur:i,className:r.name&&a.name?"text-input error":"text-input"}),r.name&&a.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(L.a.Item,{required:!0,label:"Last Name"},n.a.createElement(C.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:l,onBlur:i,className:r.lastName&&a.lastName?"text-input error":"text-input"}),r.lastName&&a.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(L.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&a.email?"error":"success"},n.a.createElement(C.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:l,onBlur:i,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(L.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&a.password?"error":"success"},n.a.createElement(C.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:l,onBlur:i,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(L.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement(C.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:l,onBlur:i,className:r.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&a.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(L.a.Item,M,n.a.createElement(W.a,{onClick:o,type:"primary",disabled:c},"Submit"))))}))},z=a(987),V=z.a.SubMenu,X=z.a.ItemGroup;var G=function(e){return n.a.createElement(z.a,{mode:e.mode},n.a.createElement(z.a.Item,{key:"mail"},n.a.createElement("a",{href:"/"},"Home")),n.a.createElement(V,{title:n.a.createElement("span",null,"Blogs")},n.a.createElement(X,{title:"Item 1"},n.a.createElement(z.a.Item,{key:"setting:1"},"Option 1"),n.a.createElement(z.a.Item,{key:"setting:2"},"Option 2")),n.a.createElement(X,{title:"Item 2"},n.a.createElement(z.a.Item,{key:"setting:3"},"Option 3"),n.a.createElement(z.a.Item,{key:"setting:4"},"Option 4"))))},J=a(993);var Q=Object(i.f)((function(e){var t=Object(u.c)((function(e){return e.user}));return t.userData&&!t.userData.isAuth?n.a.createElement(z.a,{mode:e.mode},n.a.createElement(z.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(z.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(z.a,{mode:e.mode},n.a.createElement(z.a.Item,{key:"upload"},n.a.createElement("a",{href:"/product/upload"},"Upload")),n.a.createElement(z.a.Item,{key:"cart"},n.a.createElement(J.a,{count:t.userData&&t.userData.cart.length},n.a.createElement("a",{href:"/user/cart",style:{marginRight:-22,color:"#667777"}},n.a.createElement(b.a,{type:"shopping-cart",style:{fontSize:30,marginBottom:12}})))),n.a.createElement(z.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){s.a.get("".concat("/api/users","/logout")).then((function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout")))})),Y=a(988);a(976);var Z=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),a=t[0],c=t[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Logo")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(G,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(Q,{mode:"horizontal"})),n.a.createElement(W.a,{className:"menu__mobile-button",type:"primary",onClick:function(){c(!0)}},n.a.createElement(b.a,{type:"align-right"})),n.a.createElement(Y.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){c(!1)},visible:a},n.a.createElement(G,{mode:"inline"}),n.a.createElement(Q,{mode:"inline"}))))};var ee=function(){return n.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},n.a.createElement("p",null," Happy Coding With  ",n.a.createElement(b.a,{type:"smile"})," Mauli"))},te=a(487);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT;var ae=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1];return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(te.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),s.a.post("/api/product/uploadImage",a,{header:{"content-type":"multipart/form-data"}}).then((function(t){t.data.success?(l([].concat(Object(E.a)(c),[t.data.image])),e.refreshFunction([].concat(Object(E.a)(c),[t.data.image]))):alert("Failed to save the image in server")}))},multiple:!1,maxSize:9e11},(function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("div",Object.assign({className:"d-flex justify-content-center align-items-center border border-2 rounded-3",style:{width:"300px",height:"240px",cursor:"pointer"}},t()),n.a.createElement("input",a()),n.a.createElement(b.a,{type:"plus",style:{fontSize:"3rem"}}))})),n.a.createElement("div",{className:"d-flex "+(c.length>0?"overflow-scroll":""),style:{display:"flex",width:"350px",height:"240px"}},c.map((function(t,a){return n.a.createElement("div",{onClick:function(){return function(t){var a=c.indexOf(t),r=Object(E.a)(c);r.splice(a,1),l(r),e.refreshFunction(r)}(t)}},n.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px",cursor:"pointer"},src:"https://travel-shop-in-mern.herokuapp.com/".concat(t),alt:"productImg-".concat(a)}))}))))},re=[{key:1,value:"Africa"},{key:2,value:"Europe"},{key:3,value:"Asia"},{key:4,value:"North America"},{key:5,value:"South America"},{key:6,value:"Australia"},{key:7,value:"Antarctica"}];var ne=function(e){var t=Object(r.useState)(""),a=Object(f.a)(t,2),c=a[0],l=a[1],i=Object(r.useState)(""),o=Object(f.a)(i,2),m=o[0],u=o[1],d=Object(r.useState)(0),p=Object(f.a)(d,2),E=p[0],h=p[1],v=Object(r.useState)(1),b=Object(f.a)(v,2),g=b[0],y=b[1],O=Object(r.useState)([]),_=Object(f.a)(O,2),j=_[0],S=_[1],w=function(t){if(t.preventDefault(),!c||!m||!E||!j||!g)return alert("fill all the fields first!");var a={writer:e.user.userData._id,title:c,description:m,price:E,images:j,continents:g};s.a.post("/api/product/uploadProduct",a).then((function(t){t.data.success?(alert("Product Successfully Uploaded"),e.history.push("/")):alert("Failed to upload Product")}))};return n.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},n.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},n.a.createElement("h2",null,"Upload Travel Product")),n.a.createElement("form",{onSubmit:w},n.a.createElement(ae,{refreshFunction:function(e){S(e)}}),n.a.createElement("div",{className:"d-flex flex-column mt-4"},n.a.createElement("label",null,"Title"),n.a.createElement("input",{onChange:function(e){l(e.target.value)},value:c}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{style:{marginTop:"-1.5em"}},"Description"),n.a.createElement("textarea",{onChange:function(e){u(e.target.value)},value:m}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{style:{marginTop:"-1.5em"}},"Price(#)"),n.a.createElement("input",{onChange:function(e){h(e.target.value)},value:E,type:"number"}),n.a.createElement("select",{className:"w-25",onChange:function(e){y(e.target.value)}},re.map((function(e){return n.a.createElement("option",{value:e.key,key:e.key},e.value)}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-primary",style:{marginTop:"-1.5em"},onClick:w},"Submit"))))},ce=a(484),le=a.n(ce);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT;var ie=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1];return Object(r.useEffect)((function(){if(e.detail.images&&e.detail.images.length>0){var t=[];e.detail.images&&e.detail.images.map((function(e){t.push({original:"https://travel-shop-in-mern.herokuapp.com/".concat(e),thumbnail:"https://travel-shop-in-mern.herokuapp.com/".concat(e)})})),l(t)}}),[e.detail]),n.a.createElement("div",null,n.a.createElement(le.a,{items:c}))},oe=a(994),se=a(236),me=a.n(se);a(977);var ue=function(e){var t=Object(r.useState)([]),a=Object(f.a)(t,2),c=a[0],l=a[1];Object(r.useEffect)((function(){l(e.detail)}),[e.detail]);var i=function(){me()("body").append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>'),setTimeout(o,1e4)},o=function(){me()("#loadingDiv").fadeOut(500,(function(){me()("#loadingDiv").remove()}))};return n.a.createElement("div",null,n.a.createElement(oe.a,{title:"Produc Indo"},n.a.createElement(oe.a.Item,{label:"Price"},c.price),n.a.createElement(oe.a.Item,{label:"Sold"},c.sold),n.a.createElement(oe.a.Item,{label:"View"},c.view),n.a.createElement(oe.a.Item,{label:"Description"},n.a.createElement("div",{className:"bg-light rounded-3 p-2"},c.description))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"d-flex text-center"},n.a.createElement(W.a,{disabled:!e.detail._id,size:"large",shape:"round",type:"danger",onClick:function(){i(),e.addToCart(e.detail._id)}},"Add to Cart")))};var de=function(e){var t=Object(u.b)(),a=e.match.params.productId,c=Object(r.useState)([]),l=Object(f.a)(c,2),i=l[0],o=l[1];return Object(r.useEffect)((function(){s.a.get("/api/product/products_by_id?id=".concat(a,"&type=single")).then((function(e){o(e.data[0])}))}),[]),n.a.createElement("div",{className:"p-5"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,i.title)),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-lg-6"},n.a.createElement(ie,{detail:i})),n.a.createElement("div",{className:"col-xs-12 col-lg-6"},n.a.createElement(ue,{addToCart:function(e){var a;t((a=e,{type:"add_to_cart_user",payload:s.a.get("".concat("/api/users","/addToCart?productId=").concat(a)).then((function(e){return e.data}))}))},detail:i}))))};Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT;var pe=function(e){return n.a.createElement("div",null,n.a.createElement("table",{class:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Product Image"),n.a.createElement("th",{scope:"col"},"Product Quantity"),n.a.createElement("th",{scope:"col"},"Product Price"),n.a.createElement("th",{scope:"col"},"Remove from Cart"))),n.a.createElement("tbody",{className:"align-middle"},e.products&&Object.keys(e.products).map((function(t){return e.products[t]._id?n.a.createElement("tr",{key:e.products[t]._id},n.a.createElement("th",null,n.a.createElement("img",{style:{width:"75px"},alt:"product",src:"https://travel-shop-in-mern.herokuapp.com/".concat(e.products[t].images[0])})),n.a.createElement("td",null,e.products[t].quantity," EA"),n.a.createElement("td",null,"$".concat(e.products[t].price)),n.a.createElement("td",null,n.a.createElement("button",{onClick:function(){return e.removeItem(e.products[t]._id)},className:"btn btn-outline-dark"},"Remove"))):""})))))},Ee=a(991),fe=a(137);var he=function(e){var t=Object(u.b)(),a=Object(r.useState)(),c=Object(f.a)(a,2),l=c[0],i=c[1],o=Object(r.useState)(!1),m=Object(f.a)(o,2),d=m[0],p=m[1],E=Object(r.useState)(!1),h=Object(f.a)(E,2),v=h[0];h[1],Object(r.useEffect)((function(){var a=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach((function(e){a.push(e.id)})),t(function(e,t){return{type:"get_cart_items_user",payload:s.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then((function(e){return t.forEach((function(t){e.data.forEach((function(a,r){t.id===a._id&&(e.data[r].quantity=t.quantity)}))})),e.data}))}}(a,e.user.userData.cart)))}),[e.user.userData]),Object(r.useEffect)((function(){e.user.cartDetail&&e.user.cartDetail.length>0&&b(e.user.cartDetail)}),[e.user.cartDetail]);var b=function(e){console.log(e,"@@@@@@@@@");var t=0;e.map((function(e){e.quantity&&(t+=parseInt(e.price,10)*e.quantity,console.log(e.price,"@@@@@@",parseInt(e.price,10),"@@@@@@",e.quantity,"@@@@@@@@@@@@@@"))})),i(t),p(!0)};return n.a.createElement("div",{className:"w-75 my-5 mx-auto"},n.a.createElement("h1",null,"My Cart"),n.a.createElement("div",null,n.a.createElement(pe,{products:e.user.cartDetail,removeItem:function(e){var a;t((a=e,{type:"remove_cart_item_user",payload:s.a.get("/api/users/removeFromCart?_id=".concat(a)).then((function(e){return e.data.cart.forEach((function(t){e.data.cartDetail.forEach((function(a,r){t.id===a._id&&(e.data.cartDetail[r].quantity=t.quantity)}))})),e.data}))})).then((function(){s.a.get("/api/users/userCartInfo").then((function(e){e.data.success?e.data.cartDetail.length<=0?p(!1):b(e.data.cartDetail):alert("Failed to get cart info")}))}))}}),d?n.a.createElement("div",{className:"mt-5"},n.a.createElement("h2",null,"Total amount: $",l)):v?n.a.createElement(Ee.a,{status:"success",title:"Successfully Purchased Items"}):n.a.createElement("div",{className:"w-100 d-flex flex-column justify-content-center"},n.a.createElement("br",null),n.a.createElement(fe.a,{description:!1}),n.a.createElement("p",null,"No Items In the Cart"))))};var ve=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(Z,null),n.a.createElement("div",{style:{paddingTop:"69px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:d(P,null)}),n.a.createElement(i.a,{exact:!0,path:"/login",component:d(F,!1)}),n.a.createElement(i.a,{exact:!0,path:"/register",component:d($,!1)}),n.a.createElement(i.a,{exact:!0,path:"/product/upload",component:d(ne,!0)}),n.a.createElement(i.a,{exact:!0,path:"/product/:productId",component:d(de,null)}),n.a.createElement(i.a,{exact:!0,path:"/user/cart",component:d(he,!0)}))),n.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(168),ge=a(121),ye=Object(ge.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"register_user":return Object(p.a)(Object(p.a)({},e),{},{register:t.payload});case"login_user":return Object(p.a)(Object(p.a)({},e),{},{loginSucces:t.payload});case"auth_user":return Object(p.a)(Object(p.a)({},e),{},{userData:t.payload});case"logout_user":return Object(p.a)({},e);case"add_to_cart_user":return Object(p.a)(Object(p.a)({},e),{},{userData:Object(p.a)(Object(p.a)({},e.userData),{},{cart:t.payload})});case"get_cart_items_user":return Object(p.a)(Object(p.a)({},e),{},{cartDetail:t.payload});case"remove_cart_item_user":return Object(p.a)(Object(p.a)({},e),{},{cartDetail:t.payload.cartDetail,userData:Object(p.a)(Object(p.a)({},e.userData),{},{cart:t.payload.cart})});default:return e}}}),Oe=a(485),_e=a.n(Oe),je=a(486),Se=Object(ge.a)(_e.a,je.a)(ge.d);l.a.render(n.a.createElement(u.a,{store:Se(ye,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(be.a,null,n.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[491,1,2]]]);
//# sourceMappingURL=main.d8c7415b.chunk.js.map