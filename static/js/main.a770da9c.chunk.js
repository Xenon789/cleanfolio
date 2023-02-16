(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),s=n(1),i=n(0),l=Object(s.createContext)(),o=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(a.a)(n,2),o=c[0],r=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="https://xenon789.github.io/cleanfolio/",j="XS.",d="Xenon Santillan",h="Full Stack Developer",u="A young, driven problem solver looking to broaden and expand my skills and experiences with development. I am interested in becoming a Software Engineer. My goal is to become proficient with working in both Front End and Back End.\n\n    I am currently enrolled at UC Davis Continuing and Professional Education for Full Stack Development, where students are exposed to an accelerated learning environment working alone or with teams to complete projects from scratch. I am confident in my ability to plan, discuss, create, test, and deploy applications/web applications. \n    \n    One thing I love about development is that no two days are the same. There is always something new to learn when it comes to developing.",b="https://docs.google.com/document/d/1CUJSQLRf-8DQgNs_Swr8g2pHZlJx-Glo/edit?usp=sharing&ouid=115643213634257744656&rtpof=true&sd=true",m={linkedin:"https://www.linkedin.com/in/xenon-santillan-b2148a24a/",github:"https://github.com/Xenon789/"},p=[{name:"Wallet Watchdog",description:"You're a Github user and tech enthusiast looking to support new repositories while also needing an application to help you manage your finances. Introducing... Wallet Watchdog. Tell your digital dog about your finances and help manage your expenses by setting monthly goals and limits for yourself. Your wallet watchdog will help you visualize your expenses and adjust your budgets accordingly.",stack:["CSS","Javascript","Handlebars.js","Express","MySQL","Heroku"],sourceCode:"https://github.com/Xenon789/Wallet-Watchdog",livePreview:"https://wallet-watchdog-1.herokuapp.com/"},{name:"Crypto-Conversion-Project",description:"A simple and clean Crypto-currency web app that takes in information using a crypto api and displays the information. This app was created using Bulma, HTML, CSS, and Javascript.",stack:["Javascript","HTML","CSS","BULMA"],sourceCode:"https://github.com/Xenon789/Crypto-conversion-project",livePreview:"https://xenon789.github.io/Crypto-conversion-project/"},{name:"Workday Scheduler",description:"A simple web application that you can use to scheduler your daily events for work.",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/Xenon789/workday-scheduler",livePreview:"https://xenon789.github.io/workday-scheduler/"}],x=["HTML","CSS","JavaScript","TypeScript","NodeJS","Express","React","Regex","SASS","Bootstrap","Git","CI/CD","Jest","Tailwind CSS","C++","Java","Python","Handlebars.js","Agile Software Development","Wire Framing","UI/UX","Adobe Photoshop","Adobe Lightroom"],O="xenonxpo@gmail.com",g=n(16),f=n.n(g),v=n(14),k=n.n(v),w=n(18),y=n.n(w),N=n(17),_=n.n(N),S=(n(28),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,o=Object(s.useState)(!1),r=Object(a.a)(o,2),j=r[0],d=r[1],h=function(){return d(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,x.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,O?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(k.a,{}):Object(i.jsx)(f.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(_.a,{}):Object(i.jsx)(y.a,{})})]})}),C=(n(32),function(){var e=r,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(S,{})]})}),E=n(11),J=n.n(E),P=n(19),T=n.n(P),L=(n(33),function(){var e=d,t=h,n=u,c=b,a=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hello, My name is ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(J.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(T.a,{})})]})]})]})}),A=n(7),H=n.n(A),I=n(20),M=n.n(I),W=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},H()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(J.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(M.a,{})})]})}),X=(n(36),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(W,{project:e},H()())}))})]}):null}),D=(n(37),function(){return x.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},H()())}))})]}):null}),B=n(21),F=n.n(B),U=(n(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(F.a,{fontSize:"large"})})}):null}),R=(n(39),function(){return O?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(O),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),G=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/Xenon789",className:"link footer__link",children:"Thank you for visiting!"})})}),Q=(n(41),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(L,{}),Object(i.jsx)(X,{}),Object(i.jsx)(D,{}),Object(i.jsx)(R,{})]}),Object(i.jsx)(U,{}),Object(i.jsx)(G,{})]})});n(42);Object(c.render)(Object(i.jsx)(o,{children:Object(i.jsx)(Q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a770da9c.chunk.js.map