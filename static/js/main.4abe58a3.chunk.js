(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c.n(s),n=c(10),r=c(6),i=c(2),l=c(3),o=c.n(l),d=c(1),j=(c(16),c(17),c(7)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.activeTodoId,s=e.setActiveTodoId;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,r=c===t;return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":r}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:n&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-success":n},{"has-text-danger":!n}),children:a})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(t)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":!r},{"fa-eye-slash":r})})})})})]},t)}))})]})},m=function(e){var t=e.todos,c=e.setTodos,s=e.query,a=e.setQuery,n=e.filterType,r=e.setFilterType;return Object(d.useEffect)((function(){c(t)}),[s,n]),Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(e){return r(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"clear",onClick:function(){return a("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(19);var x=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},f=function(e){var t=e.activeTodo,c=e.setActiveTodoId,s=Object(d.useState)(),a=Object(i.a)(s,2),n=a[0],l=a[1],j=Object(d.useState)(!1),u=Object(i.a)(j,2),h=u[0],m=u[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=t.userId,O("/users/".concat(s));case 3:c=e.sent,l(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(!0);case 10:case"end":return e.stop()}var s}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),!n||h?Object(b.jsx)(x,{}):Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close",onClick:function(){return c(0)}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},p=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)(!1),l=Object(i.a)(a,2),j=l[0],u=l[1],p=Object(d.useState)(""),v=Object(i.a)(p,2),N=v[0],y=v[1],g=Object(d.useState)("all"),T=Object(i.a)(g,2),k=T[0],w=T[1],S=Object(d.useState)(0),C=Object(i.a)(S,2),I=C[0],A=C[1],E=c.find((function(e){return e.id===I})),_=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=s,e.next=4,t;case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),u(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){_(O("/todos"))}),[]);var L=Object(n.a)(c);return"active"===k&&(L=L.filter((function(e){return!e.completed}))),"completed"===k&&(L=L.filter((function(e){return e.completed}))),L=L.filter((function(e){return e.title.toLowerCase().includes(N.trim().toLowerCase())})),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{todos:c,setTodos:s,query:N,setQuery:y,filterType:k,setFilterType:w})}),Object(b.jsx)("div",{className:"block",children:!c.length||j?Object(b.jsx)(x,{}):0===L.length?Object(b.jsxs)("article",{className:"message is-warning",children:[Object(b.jsx)("div",{className:"message-header",children:Object(b.jsx)("p",{children:"Warning"})}),Object(b.jsx)("div",{className:"message-body",children:"Warning: No users found!"})]}):Object(b.jsx)(h,{todos:L,activeTodoId:I,setActiveTodoId:A})})]})})}),E&&Object(b.jsx)(f,{activeTodo:E,setActiveTodoId:A})]})};a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4abe58a3.chunk.js.map