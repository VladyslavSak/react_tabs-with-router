(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),i=a(7),m=a(6),o=(a(22),function(){return c.a.createElement("h1",{className:"home-title"},"Home page")}),s=a(2),u=a.n(s),d=(u.a.arrayOf(u.a.shape({id:u.a.string,title:u.a.string,content:u.a.string})).isRequired,u.a.shape({params:u.a.shape({tabId:u.a.string})}),u.a.shape({path:u.a.string}).isRequired,function(e){var t=e.match,a=e.tabs;return c.a.createElement("p",null,a.find(function(e){return e.id===t.params.tabId})&&a.find(function(e){return e.id===t.params.tabId}).content)}),b=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],p=function(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement("h2",null,"Page of tabs"),c.a.createElement("ul",null,b.map(function(e){return c.a.createElement("li",null,c.a.createElement(i.c,{to:"/tabs/".concat(e.id)},e.title))})),c.a.createElement(d,{match:t,tabs:b,key:b.id}))},E=(a(28),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"menu"},c.a.createElement(i.b,{className:"menu-item",exact:!0,to:"/"},"Home"),c.a.createElement(i.b,{className:"menu-item",exact:!0,to:"/tabs"},"Tabs")),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:o}),c.a.createElement(m.a,{path:"/tabs/:tabId?",component:p})))});l.a.render(c.a.createElement(i.a,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1215f432.chunk.js.map