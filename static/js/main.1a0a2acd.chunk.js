(this["webpackJsonpgiphy-expert-app"]=this["webpackJsonpgiphy-expert-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(2),r=c(1),i=c(9),j=c.p+"static/media/search.3a608aca.png",l=c(0),d=function(e){var t=e.setCategorias,c=Object(r.useState)(""),n=Object(s.a)(c,2),a=n[0],d=n[1],u=function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(i.a)(e))})),d(""))};return Object(l.jsxs)("form",{className:"form",onSubmit:u,children:[Object(l.jsx)("div",{className:"container-icon",onClick:u,children:Object(l.jsx)("img",{src:j,alt:"search",className:"icon"})}),Object(l.jsx)("input",{value:a,type:"text",onChange:function(e){d(e.target.value)},className:"input",placeholder:"Search any gif...",autoFocus:"true"})]})},u=c(10),o=function(e){var t=e.url,c=(e.id,e.title);return Object(l.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(l.jsx)("img",{src:t,alt:c}),Object(l.jsx)("div",{className:"title",children:Object(l.jsxs)("p",{children:[" ",c," "]})})]})},b=c(6),h=c.n(b),p=c(8),O=function(){var e=Object(p.a)(h.a.mark((function e(t){var c,n,a,s,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t)," &limit=10&api_key=FMhyGibIwevlIDT96VLM3CQUnXKiubk2"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,s=a.data,r=s.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.category,c=function(e){var t=Object(r.useState)({data:[],loading:!0}),c=Object(s.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){O(e).then((function(e){setTimeout((function(){a({data:e,loading:!1},4e3)}))}))}),[e]),n}(t),n=c.loading,a=c.data;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{className:"title-category",children:[" ",t," "]}),n&&"Loading..",Object(l.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(l.jsx)(o,Object(u.a)({},e),e.id)}))})]})},m=function(){return Object(l.jsxs)("div",{className:"container-title",children:[Object(l.jsxs)("div",{className:"block-1",children:[Object(l.jsx)("span",{children:"G"}),Object(l.jsx)("span",{children:"i"}),Object(l.jsx)("span",{children:"f"})]}),Object(l.jsxs)("div",{className:"block-2",children:[Object(l.jsx)("span",{children:"E"}),Object(l.jsx)("span",{children:"x"}),Object(l.jsx)("span",{children:"p"}),Object(l.jsx)("span",{children:"e"}),Object(l.jsx)("span",{children:"r"}),Object(l.jsx)("span",{children:"t"})]}),Object(l.jsxs)("div",{className:"block-3",children:[Object(l.jsx)("span",{children:"A"}),Object(l.jsx)("span",{children:"p"}),Object(l.jsx)("span",{children:"p"})]})]})},f=function(){var e=Object(r.useState)(["One Punch"]),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(m,{}),Object(l.jsx)(d,{setCategorias:n})]}),Object(l.jsx)("hr",{className:"separator-line"}),Object(l.jsx)("ol",{children:c.map((function(e){return Object(l.jsx)(x,{category:e},e)}))})]})};c(17);a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1a0a2acd.chunk.js.map