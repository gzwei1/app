(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},79:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(24),o=n.n(r),i=(n(54),n(6)),l=(n(55),n(5)),u=n(4),p=n.n(u),j=n(10),d=n(8),b=n.n(d),m=function(e){e?b.a.defaults.headers.common["x-auth-token"]=e:delete b.a.defaults.headers.common["x-auth.token"]},h=n(99),O="SET_ALERT",f="REMOVE_ALERT",x="REGISTER_SUCCESS",g="REGISTER_FAIL",y="USER_LOADED",v="AUTH_ERROR",N="LOGIN_SUCCESS",w="LOGIN_FAIL",C="LOG_OUT",k="GET_POSTS",S="POST_ERROR",E="CHANGE_ZIPCODE",T="CHANGE_PAGE",A="LOADING",_="DELETE_POST",D="GET_POST",P="ADD_COMMENT",z="REMOVE_COMMET",I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(a){var c=Object(h.a)();a({type:O,payload:{msg:e,alertType:t,id:c}}),setTimeout((function(){a({type:f,payload:c})}),n)}},R="http://localhost:5000",L=function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&m(localStorage.token),e.prev=1,e.next=4,b.a.get("".concat(R,"/api/auth"));case 4:n=e.sent,t({type:y,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:v});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},M=Object(l.b)((function(e){return{auth:e.auth,zipCode:e.zipCode.zipCode}}),{logout:function(){return function(e){e({type:C})}},changeZip:function(e){return function(t){t({type:E,payload:{zip:e}})}}})((function(e){var t=e.auth,n=t.isAuthenticated,s=t.loading,r=e.logout,o=(e.changeZip,e.zipCode,Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(i.b,{to:"/send",children:[Object(a.jsx)("span",{className:"",children:"\u53d1\u5e03\u4fe1\u606f"})," "]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(i.b,{to:"/",onClick:r,children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(a.jsx)("span",{className:"",children:"\u9000\u51fa\u767b\u5f55"})," "]})})]})),l=Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(i.b,{to:"/send",children:[Object(a.jsx)("span",{className:"",children:"\u53d1\u5e03\u4fe1\u606f"})," "]})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/register",children:"\u6ce8\u518c"})}),Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/login",children:"\u767b\u5f55"})})]});return Object(a.jsxs)("nav",{className:"navbar bg-dark",children:[Object(a.jsx)("ul",{id:"logo",children:Object(a.jsxs)("li",{children:[Object(a.jsx)(i.b,{to:"/",children:"\u4efb\u610f\u95e8"}),Object(a.jsx)("span",{className:"ns-1",children:"\u8fde\u63a5\u5728\u7f8e\u534e\u4eba"})]})}),!s&&Object(a.jsx)(c.Fragment,{children:n?o:l})]})})),q=(n(79),n(26)),F=n.n(q),Y=(n(43),n(89),n(7)),G=Object(l.b)((function(e){return{post:e.post}}))((function(e){var t=e.post.posts,n=[],c=Object(Y.g)();return t.forEach((function(e){return n.push({original:e.imageUrl[0]?R+"/"+e.imageUrl[0].url:null})})),Object(a.jsx)("div",{className:"imgwrapper",children:Object(a.jsx)(F.a,{onClick:function(e){return function(e){for(var n,a=e.target.src.slice(R.length+1),s=0;s<=t.length;s++)if(t[s].imageUrl[0].url===a){n=s;break}c.push("/posts/".concat(t[n].type,"/").concat(t[n]._id))}(e)},items:n,showFullscreenButton:!1,showPlayButton:!1,showNav:!1,showBullets:!0,showThumbnails:!1,autoPlay:!1})})}));n(90),n(91);var J=function(e){var t=e.content;return Object(a.jsx)(i.b,{className:"Direction",to:"/posts/"+t,children:t})};var U=function(){return Object(a.jsxs)("div",{id:"Directions",children:[Object(a.jsx)(J,{content:"\u95f2\u7f6e"}),Object(a.jsx)(J,{content:"\u79df\u623f"}),Object(a.jsx)(J,{content:"\u6c42\u52a9"}),Object(a.jsx)(J,{content:"\u4e8c\u624b\u8f66"})]})},B=n(16),Z=n(2),H=n(17),V=function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:A});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(j.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.delete("".concat(R,"/api/post/").concat(e));case 3:t.sent,n({type:_,payload:e}),n(I("Post removed","success")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:S,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},K=n.p+"static/media/spinner.b9db43a8.gif",Q=function(){return Object(a.jsx)(c.Fragment,{children:Object(a.jsx)("img",{src:K,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},X=n(21),$=n.n(X),ee=(n(93),Object(l.b)((function(e){return{auth:e.auth}}),{deletePost:W})((function(e){var t=e.deletePost,n=e.auth,c=e.post,s=c._id,r=c.text,o=c.name,l=c.user,u=(c.comments,c.postDate),p=c.imageUrl,j=c.type,d=c.price,b=c.year,m=c.odo,h=c.make;return Object(a.jsxs)("div",{style:{border:"1px solid rgb(200,200,200",position:"relative",marginTop:20},children:[!n.loading&&l===(n.user?n.user._id:null)&&Object(a.jsx)("button",{style:{border:"none",background:"white",position:"absolute",right:10},onClick:function(){return t(s)},children:Object(a.jsx)("i",{class:"fas fa-backspace"})}),Object(a.jsxs)("div",{className:"post bg-white p-1 my-1",style:{border:"none",marginBottom:0},children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:p[0]?R+"/"+p[0].url:null,alt:""})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"my-10",children:r}),Object(a.jsxs)("p",{className:"post-date",children:[o," \u53d1\u5e03\u4e8e\uff1a",Object(a.jsx)($.a,{format:"YYYY/MM/DD  h:mm:ss a",children:u})]}),"\u4e8c\u624b\u8f66"===j?Object(a.jsxs)("p",{className:"post-date",children:["\u5e74\u4efd\uff1a",b," \u4ef7\u683c\uff1a",d," \u91cc\u7a0b\uff1a",m," \u5382\u5546\uff1a",h]}):null,Object(a.jsx)(i.b,{to:"/posts/".concat(j,"/").concat(s),className:"btn btn-primary",children:"\u67e5\u770b\u8be6\u60c5"})]})]})]})}))),te=(n(94),Object(l.b)((function(e){return{post:e.post,zipCode:e.zipCode.zipCode}}),{getPosts:function(e){var t=e.query;return function(){var e=Object(j.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(R,"/api/post/").concat(t));case 3:a=e.sent,console.log(t),n({type:k,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({type:S,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},changePage:function(e){var t=e.query;e.nop;return function(){var e=Object(j.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(R,"/api/post/").concat(t));case 3:a=e.sent,n({type:T,payload:a.data}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},loadingf:V})((function(e){var t=e.loadingf,n=e.getPosts,s=e.changePage,r=e.post,o=r.posts,i=r.loading,l=r.current,u=r.count,p=e.zipCode,j=e.match,d=Object(c.useState)({pricemin:"",pricemax:"",yearmin:"",yearmax:"",odomax:"",sorted:!1}),b=Object(H.a)(d,2),m=b[0],h=b[1],O=function(e){h(Object(Z.a)(Object(Z.a)({},m),{},Object(B.a)({},e.target.name,e.target.value))),console.log(m)},f=m.pricemax,x=m.pricemin,g=m.yearmin,y=m.yearmax,v=m.odomax;if(j)var N=j.params.type;else N=null;Object(c.useEffect)((function(){t();var e=JSON.stringify({zipCode:p,type:N,fil:null,page:1});console.log(n),n({query:e})}),[]);var w=function(e){t();var n=JSON.stringify({zipCode:p,type:N,fil:m.sorted?{pricemax:f,pricemin:x,yearmin:g,yearmax:y,odomax:v}:null,page:l+e});s({query:n})};return i||null===o.length?Object(a.jsx)(Q,{}):Object(a.jsxs)("section",{className:"container",children:[Object(a.jsxs)("p",{className:"hp",style:N?null:{padding:5,textAlign:"center",fontSize:"30px",background:"#17a2b8",color:"white"},children:[Object(a.jsxs)("span",{className:"hps",children:[" ",N||"\u6240\u6709","\u4fe1\u606f"]})," ",Object(a.jsx)("span",{className:"hpss",children:"\u6d4b\u8bd5\u7248\u672c\u4ec5\u652f\u6301\u6e7e\u533a(San Jose, San Francisco, Oakland)\uff0c\u5176\u4ed6\u5730\u533a\u548c\u8303\u56f4\u641c\u7d22\u529f\u80fd\u9646\u7eed\u4e0a\u7ebf\u4e2d"})]}),"\u4e8c\u624b\u8f66"===N?Object(a.jsxs)("div",{className:"sd-1",children:[Object(a.jsxs)("div",{className:"sd-2",children:[Object(a.jsxs)("p",{className:"sp-1",children:["\u4ef7\u683c",Object(a.jsxs)("span",{className:"ss-1",children:[Object(a.jsxs)("span",{className:"ss-2",children:["\u6700\u4f4e"," ",Object(a.jsx)("input",{name:"pricemin",type:"text",onChange:function(e){O(e)},className:"sb-1"})," "]}),Object(a.jsxs)("span",{className:"ss-3",children:["\u6700\u9ad8"," ",Object(a.jsx)("input",{name:"pricemax",onChange:function(e){O(e)},type:"text",className:"sb-2"})]})]})]}),Object(a.jsxs)("p",{className:"sp-1",children:["\u5e74\u4efd",Object(a.jsxs)("span",{className:"ss-1",children:[Object(a.jsxs)("span",{className:"ss-2",children:["\u6700\u65e9"," ",Object(a.jsx)("input",{name:"yearmin",onChange:function(e){O(e)},type:"text",className:"sb-1"})," "]}),Object(a.jsxs)("span",{className:"ss-3",children:["\u6700\u665a"," ",Object(a.jsx)("input",{name:"yearmax",onChange:function(e){O(e)},type:"text",className:"sb-2"})]})]})]}),Object(a.jsxs)("p",{className:"sp-2",children:["\u91cc\u7a0b",Object(a.jsx)("span",{className:"ss-1",children:Object(a.jsxs)("span",{className:"ss-2",children:["\u6700\u5927"," ",Object(a.jsx)("input",{onChange:function(e){O(e)},name:"odomax",type:"text",className:"sb-2"})]})})]})]}),Object(a.jsx)("div",{className:"sd-3",children:Object(a.jsx)("button",{onClick:function(){t();var e=JSON.stringify({zipCode:p,fil:{pricemax:f,pricemin:x,yearmin:g,yearmax:y,odomax:v},type:N,page:1});h(Object(Z.a)(Object(Z.a)({},m),{},{sorted:!0})),n({query:e})},children:"\u7b5b\u9009"})})]}):null,Object(a.jsx)("div",{className:"posts",children:o.map((function(e){return Object(a.jsx)(ee,{post:e},e._id)}))}),Object(a.jsxs)("div",{className:"gd-1",children:[Object(a.jsx)("button",{onClick:function(){t();var e=JSON.stringify({zipCode:p,type:N,fil:null,page:1});console.log(n),n({query:e})},className:"gb-1",disabled:1===l,children:"\u9996\u9875"}),Object(a.jsx)("button",{onClick:function(){return w(-1)},className:"gb-1",disabled:1===l,children:"\u4e0a\u9875"}),"\u7b2c",l,"\u9875\uff0c\u5171",Math.ceil(u/5),"\u9875",Object(a.jsx)("button",{className:"gb-2",onClick:function(){return w(1)},style:{float:"right"},disabled:!(u/5>=l),children:"\u4e0b\u9875"})]})]})}))),ne=function(){return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsxs)("div",{className:"landing",children:[Object(a.jsx)(G,{}),Object(a.jsx)(U,{})]}),Object(a.jsx)(te,{})]})},ae=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:I,register:function(e){var t=e.name,n=e.email,a=e.password;return function(){var e=Object(j.a)(p.a.mark((function e(c){var s,r,o,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{"Content-Type":"application/json"}},r=JSON.stringify({name:t,email:n,password:a}),e.prev=2,e.next=5,b.a.post("".concat(R,"/api/users"),r,s);case 5:o=e.sent,console.log("".concat(R,"/api/auth")),c({type:x,payload:o.data}),c(L()),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),(i=e.t0.response.data.errors)&&i.forEach((function(e){return c(I(e.msg,"danger"))})),c({type:g});case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,n=e.register,s=e.isAuthenticated,r=Object(c.useState)({name:"",email:"",password:"",password2:""}),o=Object(H.a)(r,2),l=o[0],u=o[1],p=l.name,j=l.email,d=l.password,b=l.password2,m=function(e){u(Object(Z.a)(Object(Z.a)({},l),{},Object(B.a)({},e.target.name,e.target.value)))};return s?Object(a.jsx)(Y.a,{to:"/send"}):Object(a.jsxs)("section",{className:"container",children:[Object(a.jsx)("h1",{className:"large text-primary",children:"\u6ce8\u518c APP"}),Object(a.jsxs)("p",{className:"lead",children:[Object(a.jsx)("i",{className:"fas fa-user"})," \u521b\u5efa\u8d26\u6237"]}),Object(a.jsxs)("form",{className:"form",action:"/send",onSubmit:function(e){return function(e){e.preventDefault(),d!==b?t("password dont match","danger",1e3):n({name:p,email:j,password:d})}(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",placeholder:"\u7528\u6237\u540d",name:"name",value:p,onChange:function(e){return m(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",placeholder:"\u90ae\u7bb1",name:"email",value:j,onChange:function(e){return m(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",placeholder:"\u5bc6\u7801",name:"password",minLength:"6",value:d,onChange:function(e){return m(e)}})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",placeholder:"\u786e\u8ba4\u5bc6\u7801",name:"password2",minLength:"6",value:b,onChange:function(e){return m(e)}})}),Object(a.jsx)("input",{type:"submit",className:"btn btn-primary",value:"\u6ce8\u518c"})]}),Object(a.jsxs)("p",{className:"my-1",children:["\u5df2\u6709\u8d26\u6237\uff1f ",Object(a.jsx)(i.b,{to:"/login",children:"\u767b\u5f55"})]})]})})),ce=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e){var t=e.email,n=e.password;return function(){var e=Object(j.a)(p.a.mark((function e(a){var c,s,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:{"Content-Type":"application/json"}},s=JSON.stringify({email:t,password:n}),e.prev=2,e.next=5,b.a.post("".concat(R,"/api/auth"),s,c);case 5:r=e.sent,a({type:N,payload:r.data}),a(L()),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),(o=e.t0.response.data.errors)&&o.forEach((function(e){return a(I(e.msg,"danger"))})),a({type:w});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.login,n=e.isAuthenticated,s=Object(c.useState)({email:"",password:""}),r=Object(H.a)(s,2),o=r[0],l=r[1],u=o.email,p=o.password,j=function(e){l(Object(Z.a)(Object(Z.a)({},o),{},Object(B.a)({},e.target.name,e.target.value)))};return n?Object(a.jsx)(Y.a,{to:"/send"}):Object(a.jsxs)("section",{className:"container",children:[Object(a.jsx)("h1",{className:"large text-primary",children:"\u767b\u5f55 APP"}),Object(a.jsxs)("p",{className:"lead",children:[Object(a.jsx)("i",{className:"fas fa-user"})," \u767b\u5165\u8d26\u6237"]}),Object(a.jsxs)("form",{className:"form",action:"/send",onSubmit:function(e){return function(e){e.preventDefault(),t({email:u,password:p})}(e)},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",placeholder:"\u90ae\u7bb1",name:"email",value:u,onChange:function(e){j(e)},required:!0})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",placeholder:"\u5bc6\u7801",name:"password",value:p,onChange:function(e){j(e)}})}),Object(a.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Login"})]}),Object(a.jsxs)("p",{className:"my-1",children:["\u6ca1\u6709\u8d26\u6237\uff1f ",Object(a.jsx)(i.b,{to:"/register",children:"\u6ce8\u518c"})]}),";"]})})),se=Object(l.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(a.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}))})),re=Object(l.b)(null,{addComment:function(e,t){return function(){var n=Object(j.a)(p.a.mark((function n(a){var c,s,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},n.prev=1,n.next=4,b.a.post("".concat(R,"/api/post/comment/").concat(e),t,c);case 4:s=n.sent,a({type:P,payload:s.data}),a(I("\u56de\u590d\u6210\u529f","success")),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),a({type:S,payload:{msg:n.t0.response.statusText,status:n.t0.response.status}}),r=n.t0.response.data,a(I(r.msg,"danger"));case 14:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.postId,n=e.addComment,s=Object(c.useState)(""),r=Object(H.a)(s,2),o=r[0],i=r[1];return Object(a.jsx)(c.Fragment,{children:Object(a.jsxs)("div",{className:"post-form",children:[Object(a.jsx)("div",{className:"bg-primary p",children:Object(a.jsx)("h3",{children:"\u56de\u590d"})}),Object(a.jsxs)("form",{className:"form my-1",action:"/",onSubmit:function(e){return function(e){e.preventDefault(),n(t,{text:o}),i("")}(e)},children:[Object(a.jsx)("textarea",{name:"text",cols:"30",rows:"5",placeholder:"",onChange:function(e){!function(e){i(e.target.value)}(e)},value:o,required:!0}),Object(a.jsx)("input",{type:"file",style:{display:"none"},name:"test",id:"file",multiple:!0}),Object(a.jsx)("input",{type:"submit",className:"btn btn-dark my-1",value:"\u53d1\u5e03"})]})]})})})),oe=(n(95),Object(l.b)((function(e){return{auth:e.auth}}),{deleteComment:function(e,t){return function(){var n=Object(j.a)(p.a.mark((function n(a){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.delete("".concat(R,"/api/post/comment/").concat(e,"/").concat(t));case 3:n.sent,a({type:z,payload:t}),a(I("Comment deleted","success")),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a({type:S,payload:{msg:n.t0.response.statusText,status:n.t0.response.status}});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.postId,n=e.comment,c=n._id,s=n.text,r=n.name,o=n.user,i=n.date,l=e.auth,u=e.deleteComment;return Object(a.jsx)("div",{class:"comment bg-white p-1 my-1",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{class:"my-1",children:s}),Object(a.jsxs)("p",{class:"post-date",style:{fontSize:"15px",color:"rgb(200,200,200)"},children:[r," \u56de\u590d\u4e8e ",Object(a.jsx)($.a,{format:"YYYY/MM/DD  h:mm:ss a",children:i}),!l.loading&&o===(l.user?l.user._id:null)&&Object(a.jsxs)("span",{className:"cp-2",children:[Object(a.jsx)("button",{onClick:function(e){return u(t,c)},type:"button",style:{float:"right",background:"white",color:"rgb(200,200,200)"},className:"btn btn-danger",children:"\u5220\u9664"})," ",Object(a.jsx)("button",{onClick:function(e){return u(t,c)},type:"button",style:{float:"right",background:"white",color:"rgb(200,200,200)"},className:"btn btn-danger",children:"\u7f16\u8f91"})]})]})]})})}))),ie=function(e){var t=e.items;return Object(a.jsx)("div",{children:Object(a.jsx)(F.a,{items:t,showFullscreenButton:!1,showPlayButton:!1,showNav:!0,showBullets:!0,showThumbnails:!1,autoPlay:!1,style:{width:"100%"}})})};n(96);var le=Object(l.b)((function(e){return{post:e.post,auth:e.auth}}),{getPost:function(e){var t=e.query;return function(){var e=Object(j.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("".concat(R,"/api/post/").concat(t));case 3:a=e.sent,console.log(a),n({type:D,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({type:S,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},loadingf:V})((function(e){var t=e.auth,n=e.getPost,s=e.post,r=s.post,o=s.loading,l=e.match;if(Object(c.useEffect)((function(){var e=JSON.stringify({id:l.params.id});n({query:e})}),[n]),o||null===r)return Object(a.jsx)(Q,{});var u=r._id,p=r.text,j=r.name,d=r.user,b=(r.comments,r.postDate),m=r.imageUrl,h=r.type,O=[];return m.forEach((function(e){return O.push({original:e?R+"/"+e.url:null})})),Object(a.jsxs)("section",{className:"container",children:[Object(a.jsx)(i.b,{to:"/posts/".concat(h),className:"btn",children:"\u8fd4\u56de"}),Object(a.jsxs)("div",{className:"post1 bg-white p-1 my-1",children:[Object(a.jsx)("div",{children:Object(a.jsx)(ie,{items:O})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{className:"my-10",children:p}),Object(a.jsxs)("p",{className:"post-date",children:[j," \u53d1\u5e03\u4e8e"," ",Object(a.jsx)($.a,{format:"YYYY/MM/DD  h:mm:ss a",children:b}),!t.loading&&d===(t.user?t.user._id:null)&&Object(a.jsxs)("span",{className:"bs-1",children:[Object(a.jsx)("button",{style:{float:"right",background:"white",color:"rgb(200,200,200)"},type:"button",className:"btn btn-danger",onClick:function(){return W(u)},children:"\u5220\u9664"}),Object(a.jsx)("button",{style:{float:"right",background:"white",color:"rgb(200,200,200)"},type:"button",className:"btn btn-danger",onClick:function(){return W(u)},children:"\u7f16\u8f91"})]})]})]})]}),Object(a.jsx)(re,{postId:r._id}),Object(a.jsx)("div",{className:"comment",children:r.comments.map((function(e){return Object(a.jsx)(oe,{comment:e,postId:r._id},e._id)}))})]})})),ue=Object(l.b)(null,{t1:function(e,t,n,a){return function(){var c=Object(j.a)(p.a.mark((function c(s){return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,b.a.post("".concat(R,"/api/post"),e,t);case 3:c.sent,s(I("\u53d1\u5e03\u6210\u529f,\u4e09\u79d2\u540e\u8df3\u8f6c...","success",3e3)),setTimeout((function(){return n.push("/posts/".concat(a))}),3e3),c.next=10;break;case 8:c.prev=8,c.t0=c.catch(0);case 10:case"end":return c.stop()}}),c,null,[[0,8]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.t1,n=Object(c.useState)({text:"",zipCode:"",type:"",model:"",make:"",year:"",odo:"",names:null,files:[]}),s=Object(H.a)(n,2),r=s[0],o=s[1],i=r.text,l=r.zipCode,u=r.files,d=r.price,b=r.year,m=r.make,h=r.odo,O=r.type,f=Object(Y.g)(),x=function(e){o(Object(Z.a)(Object(Z.a)({},r),{},Object(B.a)({},e.target.name,e.target.value))),console.log(r)},g=function(){var e=Object(j.a)(p.a.mark((function e(n){var a,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a={text:i,zipCode:l,year:b,make:m,odo:h,price:d,type:O,files:u};try{c={headers:{}},s=new FormData,u.forEach((function(e){return s.append("files",e)})),s.append("json",JSON.stringify(a)),console.log(t),t(s,c,f,O)}catch(r){console.log(r.response.data)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("section",{className:"container",children:[Object(a.jsxs)("div",{className:"post-form",children:[Object(a.jsx)("div",{className:"bg-primary p",children:Object(a.jsx)("h3",{children:"\u53d1\u5e03\u4fe1\u606f"})}),Object(a.jsxs)("form",{className:"form my-1",action:"/",onSubmit:function(e){return g(e)},children:[Object(a.jsx)("input",{type:"text",name:"type",placeholder:"\u79df\u623f/\u4e8c\u624b\u8f66/\u95f2\u7f6e/\u6c42\u52a9",onChange:function(e){x(e)}}),Object(a.jsx)("textarea",{name:"text",cols:"30",rows:"5",placeholder:"",onChange:function(e){x(e)},required:!0}),Object(a.jsx)("input",{type:"text",name:"zipCode",placeholder:"ZIPCODE",maxLength:"5",onChange:function(e){x(e)}}),"\u79df\u623f"===O||"\u4e8c\u624b\u8f66"===O?Object(a.jsx)("input",{type:"text",name:"price",placeholder:"\u4ef7\u683c",onChange:function(e){x(e)},required:!0}):null,"\u95f2\u7f6e"===O?Object(a.jsx)("input",{type:"text",name:"price",placeholder:"\u4ef7\u683c\uff08\u514d\u8d39\u8bf7\u586b0\uff09",onChange:function(e){x(e)},required:!0}):null,"\u4e8c\u624b\u8f66"===O?Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("input",{type:"text",name:"year",placeholder:"\u5e74\u4efd",onChange:function(e){x(e)}})," ",Object(a.jsx)("input",{type:"text",name:"make",placeholder:"\u5382\u5546",onChange:function(e){x(e)}}),Object(a.jsx)("input",{type:"text",name:"odo",placeholder:"\u91cc\u7a0b",onChange:function(e){x(e)}})]}):null,Object(a.jsx)("input",{className:"btn btn-dark my-1",type:"button",value:"\u63d2\u5165\u56fe\u7247\uff08\u6700\u591a10\u5f20\uff09",onClick:function(){return document.getElementById("file").click()}}),Object(a.jsx)("input",{type:"file",style:{display:"none"},name:"test",id:"file",onChange:function(e){return function(e){o(Object(Z.a)(Object(Z.a)({},r),{},{files:Array.from(e.target.files),names:Array.from(e.target.files).map((function(e){return e.name}))}))}(e)},multiple:!0}),Object(a.jsx)("input",{type:"submit",className:"btn btn-dark my-1",value:"\u53d1\u5e03"})]})]}),r.names?r.names.map((function(e){return Object(a.jsxs)("p",{id:e,children:[e," ",Object(a.jsx)("i",{onClick:function(e){return function(e){var t=e.target.closest("p").id,n=r.files.filter((function(e){return e.name!==t})),a=n.map((function(e){return e.name}));o(Object(Z.a)(Object(Z.a)({},r),{},{names:a,files:n}))}(e)},className:"far fa-trash-alt"})]},e)})):null]})})),pe=n(48),je=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,c=n.isAuthenticated,s=n.loading,r=Object(pe.a)(e,["component","auth"]);return Object(a.jsx)(Y.b,Object(Z.a)(Object(Z.a)({},r),{},{render:function(e){return c||s?Object(a.jsx)(t,Object(Z.a)({},e)):Object(a.jsx)(Y.a,{to:"/login"})}}))})),de=n(18),be=n(45),me=n(46),he=n(47),Oe=[];var fe={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var xe={count:0,posts:[],post:null,loading:!0,error:{},current:1},ge={zipCode:"00000"};var ye=Object(de.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O:return[].concat(Object(he.a)(e),[a]);case f:return e.filter((function(e){return e.id!==a}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return Object(Z.a)(Object(Z.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case x:case N:return localStorage.setItem("token",a.token),Object(Z.a)(Object(Z.a)(Object(Z.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case g:case v:case w:case C:return localStorage.removeItem("token"),Object(Z.a)(Object(Z.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case k:return Object(Z.a)(Object(Z.a)({},e),{},{current:a.page,posts:a.currentposts.docs,count:a.count,loading:!1});case T:return Object(Z.a)(Object(Z.a)({},e),{},{posts:a.currentposts.docs,current:a.page,loading:!1});case D:return Object(Z.a)(Object(Z.a)({},e),{},{post:a,loading:!1});case _:return Object(Z.a)(Object(Z.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==a})),loading:!1});case S:return Object(Z.a)(Object(Z.a)({},e),{},{error:a,loading:!1});case A:return Object(Z.a)(Object(Z.a)({},e),{},{loading:!0});case P:return Object(Z.a)(Object(Z.a)({},e),{},{post:Object(Z.a)(Object(Z.a)({},e.post),{},{comments:a}),loading:!1});case z:return Object(Z.a)(Object(Z.a)({},e),{},{post:Object(Z.a)(Object(Z.a)({},e.post),{},{comments:e.post.comments.filter((function(e){return e._id!==a}))}),loading:!1});default:return e}},zipCode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case E:return{zipCode:a.zip};default:return e}}}),ve=[me.a],Ne=Object(de.createStore)(ye,{},Object(be.composeWithDevTools)(de.applyMiddleware.apply(void 0,ve)));localStorage.token&&m(localStorage.token);var we=function(){return Object(c.useEffect)((function(){Ne.dispatch(L())}),[]),Object(a.jsx)(l.a,{store:Ne,children:Object(a.jsx)(i.a,{basename:"app",children:Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)(M,{}),Object(a.jsx)(se,{}),Object(a.jsx)(Y.b,{exact:!0,path:"/",component:ne}),Object(a.jsx)(c.Fragment,{children:Object(a.jsxs)(Y.d,{children:[Object(a.jsx)(Y.b,{exact:!0,path:"/register",component:ae}),Object(a.jsx)(Y.b,{exact:!0,path:"/login",component:ce}),Object(a.jsx)(je,{exact:!0,path:"/send",component:ue}),Object(a.jsx)(Y.b,{exact:!0,path:"/posts/:type",component:te}),Object(a.jsx)(Y.b,{exact:!0,path:"/posts/",component:te}),Object(a.jsx)(Y.b,{exact:!0,path:"/posts/:type/:id",component:le})]})})]})})})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(we,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.16903dba.chunk.js.map