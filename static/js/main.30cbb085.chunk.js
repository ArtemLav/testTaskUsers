(this["webpackJsonptest-task-users"]=this["webpackJsonptest-task-users"]||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(0),c=n.n(s),a=n(4),u=n.n(a),i=(n(20),n(7)),o=(n(26),n(13)),j=n(5),b="SET_USERS",l=function(e){return e.users},d=Object(j.b)((function(e,t){switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});default:return e}}),{users:[]}),f=n(8),h=n(3),p=n.n(h),O=n(6),x=n(2),g=n.n(x),v=(g.a.shape({id:g.a.string.isRequired,name:g.a.string.isRequired,surname:g.a.string.isRequired,desc:g.a.string.isRequired}),function(){var e=Object(O.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jsonbin.io/b/5fb62b0d4144f562a5f02c2c");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("".concat(t.status," - ").concat(t.statusText));case 5:return e.next=7,t.json();case 7:return n=e.sent,r=n.users,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),m=function(e){var t=e.handleClick;return Object(r.jsx)("button",{type:"button",onClick:t,className:"btn",children:"Get Started"})},k=function(e){var t=e.total,n=e.currentPage,s=e.setCurrentPage,c=e.perPage,a=Math.ceil(t/c),u=Array.from({length:a},(function(e,t){return t+1}));return Object(r.jsxs)("div",{className:"pagination",children:[Object(r.jsx)("button",{type:"button",className:"pagination__button",onClick:function(){return s(n-1)},disabled:1===n,children:"Previous"}),u.map((function(e){return Object(r.jsx)("button",{type:"button",className:"pagination__button",onClick:function(){return s(e)},children:e})})),Object(r.jsx)("button",{type:"button",className:"pagination__button",onClick:function(){return s(n+1)},disabled:n===a,children:"Next"})]})},P=function(e){var t=e.user;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:"".concat(t.name," ").concat(t.surname)}),Object(r.jsx)("p",{children:t.desc})]})},y=function(e){var t=e.users,n=e.currentPage,s=e.perPage,c=s*n-s,a=s*n,u=t.slice(c,a);return Object(r.jsx)("div",{children:u.map((function(e){return Object(r.jsx)(P,{user:e})}))})},w=function(e){var t=e.users,n=Object(s.useState)(t[0]),c=Object(f.a)(n,2),a=c[0],u=c[1];return Object(s.useEffect)((function(){var e=setInterval((function(){u(t[Math.floor(Math.random()*t.length)])}),1e5);return function(){return clearInterval(e)}}),[]),Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"".concat(a.name," ").concat(a.surname)})})},C=function(e){var t=e.users,n=e.setUsers,c=function(){var e=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,v();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=Object(s.useState)(1),u=Object(f.a)(a,2),i=u[0],o=u[1];return Object(r.jsx)("div",{children:0===t.length?Object(r.jsx)(m,{handleClick:c}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{users:t,currentPage:i,perPage:5}),Object(r.jsx)(k,{total:t.length,currentPage:i,setCurrentPage:o,perPage:5}),Object(r.jsx)(w,{users:t})]})})};C.defaultProps={users:[]};var N=C,S=Object(i.b)((function(e){return{users:l(e)}}),{setUsers:function(e){return{type:b,users:e}}})(N),_=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(S,{})})};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:d,children:Object(r.jsx)(_,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.30cbb085.chunk.js.map