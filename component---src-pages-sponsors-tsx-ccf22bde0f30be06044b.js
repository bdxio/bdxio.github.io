(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{181:function(e,t,a){"use strict";a.r(t);a(27),a(28),a(13),a(214),a(33);var n=a(0),r=a.n(n),c=a(192),l=a(194),s=a(187),i=a(186),o=a(188);t.default=function(e){var t=e.path,a=Object(s.a)(),n=Object(i.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Sponsors"}),r.a.createElement(l.a,{path:t},r.a.createElement("div",{className:"partnership"},r.a.createElement("div",{className:"row pageHeader"},r.a.createElement("div",{className:"columns small-12 pageHeader-title"},r.a.createElement("h3",{className:"sectionTitle text-center"},"Sponsors"))),r.a.createElement("div",{className:"row align-center users-container"},r.a.createElement("div",{className:"column small-12 text-center"},r.a.createElement("p",{className:"subtitle"},"Les sponsors qui soutiennent l'édition 2020 🧡")),r.a.createElement("div",{className:"column small-12 text-center"},r.a.createElement("a",{href:n.general.plaquetteUrl,target:"_blank",className:"button small primary"},"Devenir sponsors")),Object.entries(o.a).map(function(e){return 0===a.filter(function(t){return t.level===e[0]}).length?null:r.a.createElement("div",{key:e[0],className:"column small-12 large-8 partnership-wrapper"},r.a.createElement("h4",null,"/ ",e[1]),r.a.createElement("div",{className:"partnership-logo"},r.a.createElement("div",{className:"row"})))})))))}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(58),l=a.n(c);a.d(t,"a",function(){return l.a});a(185),a(7).default.enqueue,r.a.createContext({})},185:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},186:function(e,t,a){"use strict";var n=a(190);t.a=function(){return n.data.eventJson}},187:function(e,t,a){"use strict";var n=a(191);t.a=function(e){var t=n.data.allSponsorsJson;return e?t.nodes.filter(function(t){return t.level===e}):t.nodes}},188:function(e,t,a){"use strict";var n;a.d(t,"a",function(){return n}),function(e){e.BALTHAZAR="BALTHAZAR",e.IMPERIAL="IMPÉRIAL",e.MAGNUM="MAGNUM",e.CHOPINE="CHOPINE"}(n||(n={}))},189:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(81);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},190:function(e){e.exports={data:{eventJson:{general:{closingDate:"2020-10-30T19:00:00",openingDate:"2020-10-30T09:00:00",plaquetteUrl:"/plaquette-2020.pdf"},cfp:{closingDate:"2020-06-30",openingDate:"2020-05-01",url:"https://conference-hall.io/public/event/vzxtIlMnQqmNF2aOECVv"},programPublishingDate:"2020-10-30",registration:{url:"https://www.billetweb.fr/bdxio-2020",earlySoldout:!1,normalSoldout:!1,opened:"2021-05-04T12:00:00"},themes:[{title:"Design, UI & UX",icon:"/img/svg/icon_theme_design.svg",description:"CSS, Ergonomie & Design. Experience utilisateur."},{title:"Backends, Cloud & BigData",icon:"/img/svg/icon_theme_back.svg",description:"Frameworks côté serveur. Cloud. Base de données NoSQL."},{title:"Frontend Web, Mobile et VideoGames",icon:"/img/svg/icon_theme_front.svg",description:"Frameworks côté client. Application web / mobiles (hybrides, natives) / progressives. Outillage pour les jeux vidéos."},{title:"Tooling",icon:"/img/svg/icon_theme_tooling.svg",description:"Outillage pour la productivité. Outillage pour le build. IDE."},{title:"Internet des objets & marchés émergents",icon:"/img/svg/icon_theme_internet.svg",description:"A la recherche des idées disruptives au service du monde de demain."},{title:"Conception, Architecture & Pratiques de dev",icon:"/img/svg/icon_theme_dev.svg",description:" Méthodologie comme SCRUM ou Kanban. Principes d'architecture."}]}}}},191:function(e){e.exports={data:{allSponsorsJson:{nodes:[]}}}},192:function(e,t,a){"use strict";a(80),a(120),a(59),a(13),a(46),a(34),a(27);var n=a(193),r=a(0),c=a.n(r),l=a(197),s=a.n(l);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.a=function(e){var t=e.title,a=e.description,r=e.lang,l=void 0===r?"fr":r,o=e.meta,m=void 0===o?[]:o,u=n.data.site,p=a||u.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:l},title:t,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:t},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:t},{name:"twitter:description",content:p},{name:"msapplication-TileColor",content:"#ffffff"},{name:"msapplication-TileImage",content:"/favicon/ms-icon-144x144.png"},{name:"theme-color",content:"#ffffff"}].concat(m),link:[].concat(i([57,60,72,76,114,120,144,152,180].map(function(e){return{rel:"apple-touch-icon",sizes:e+"x"+e,href:"/favicon/apple-icon-"+e+"x"+e+".png"}})),[{rel:"icon",type:"image/x-icon",href:"/favicon/favicon.ico"},{rel:"icon",type:"image/png",href:"/favicon/favicon.png"},{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon/favicon-96x96.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"manifest",href:"/favicon/manifest.json"}])})}},193:function(e){e.exports={data:{site:{siteMetadata:{title:"BDX I/O",description:"Bordeaux Developer eXperience | event",author:"@bdxio"}}}}},194:function(e,t,a){"use strict";a(33);var n=a(0),r=a.n(n),c=a(184),l=a(195),s=a.n(l),i=function(){var e=Object(n.useState)(!0),t=e[0],a=e[1];return Object(n.useEffect)(function(){var e=function(){var e=window.scrollY<50;a(e)};return document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}},[]),{isOnTop:t}},o=a(186),m=function(e){var t=e.path,a=Object(o.a)();return r.a.createElement("ul",{className:"columns auto align-center main-menu-item"},r.a.createElement("li",{className:"shrink menu-item-content "+("/"===t?"selected":"")},r.a.createElement(c.a,{className:"/"===t?"selected":"",to:"/"},"Accueil")),r.a.createElement("li",{className:"shrink menu-item-content "+("/team/"===t?"selected":"")},r.a.createElement(c.a,{className:"/team/"===t?"selected":"",to:"/team"},"L'équipe")),r.a.createElement("li",{className:"shrink menu-item-content "+("/articles/"===t?"selected":"")},r.a.createElement(c.a,{className:"/articles/"===t?"selected":"",to:"/articles"},"Actualités")),s()().isSameOrAfter(s()(a.programPublishingDate))&&r.a.createElement("li",{className:"shrink menu-item-content "+("/speakers/"===t?"selected":"")},r.a.createElement(c.a,{className:"/speakers/"===t?"selected":"",to:"/speakers"},"Conférencier·ière·s")),s()().isSameOrAfter(s()(a.programPublishingDate))&&r.a.createElement("li",{className:"shrink menu-item-content "+("/schedule/"===t?"selected":"")},r.a.createElement(c.a,{className:"/schedule/"===t?"selected":"",to:"/schedule"},"Programme")),r.a.createElement("li",{className:"shrink menu-item-content "+("/sponsors/"===t?"selected":"")},r.a.createElement(c.a,{className:"/sponsors/"===t?"selected":"",to:"/sponsors"},"Sponsors")),r.a.createElement("li",{className:"shrink menu-item-content "+("/contact/"===t?"selected":"")},r.a.createElement(c.a,{className:"/contact/"===t?"selected":"",to:"/contact"},"Contact")))},u=function(e){var t=e.path,a=Object(n.useState)(!1),l=a[0],s=a[1],o=i().isOnTop;return r.a.createElement("nav",{className:"row align-middle menu "+(!o&&"scroll")},r.a.createElement("span",{className:"columns shrink menu-logo"},r.a.createElement(c.a,{to:"/"},r.a.createElement("img",{src:"/img/png/logo_white.png"}))),r.a.createElement("div",{className:"row collapse main-menu"},r.a.createElement(m,{path:t}),r.a.createElement("ul",{className:"columns shrink align-center main-menu-socialNetwork"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/bdxio",target:"_blank"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/bdxio",target:"_blank"},r.a.createElement("i",{className:"fa fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/company/10651416/",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ",target:"_blank"},r.a.createElement("i",{className:"fa fa-youtube"}))))),r.a.createElement("div",{className:"menu-toggle "+(l?"active":""),onClick:function(){s(!l)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"menu-responsive "+(l?"active":"")},r.a.createElement(m,{path:t})))},p=a(196),f=a.n(p),d=a(187),g=a(188),E=function(){var e=Object(d.a)(g.a.BALTHAZAR);return 0===e.length?null:r.a.createElement("section",{className:"row sponsorBar"},r.a.createElement("img",{className:"homeFlottant",src:"/img/svg/sponsor_flottant.svg"}),r.a.createElement("div",{className:"columns shrink text-center"},r.a.createElement("h5",{className:"title"},"Nos sponsors Balthazar")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns auto text-center"},e.map(function(e){return r.a.createElement("a",{key:e.id,href:e.website,title:e.name,target:"_blank"},r.a.createElement("img",{src:e.logo,alt:e.name,width:150}))}))))};t.a=function(e){var t=e.path,a=e.children,l=Object(n.useState)(""),s=l[0],i=l[1],o=Object(n.useState)(""),m=o[0],p=o[1],d=Object(n.useState)(""),g=d[0],h=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{path:t}),r.a.createElement("div",{className:"pageContainer"},a,r.a.createElement(E,null)),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-signIn"},r.a.createElement("div",{className:"info"},"Vous souhaitez être tenu informé ?",r.a.createElement("br",null),"Inscrivez-vous à la newsletter"),r.a.createElement("form",{className:"email",onSubmit:function(e){e.preventDefault();var t="https://bdx.us10.list-manage.com/subscribe/post-json?u=3fdd02789fbab2f90b81652a3&id=760c78a462&EMAIL="+s;f()(t,{param:"c"},function(e,t){e?(p("error"),h(e)):"success"!==t.result?(p("error"),h(t.msg)):(p("success"),h("Merci pour votre inscription !"),i("")),setTimeout(function(){p(""),h("")},5e3)})}},r.a.createElement("input",{type:"email",placeholder:"Email",value:s,onChange:function(e){i(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"button small white"},"S'inscrire"))),r.a.createElement("div",{className:"subscription-message column "+(m?"show":"")},g),r.a.createElement("div",{className:"footer-item"},r.a.createElement("ul",{className:"row"},r.a.createElement("li",{className:"columns shrink"},r.a.createElement(c.a,{to:"/"},"Accueil")),r.a.createElement("li",{className:"columns shrink"},r.a.createElement(c.a,{to:"/contact"},"Contact")),r.a.createElement("li",{className:"columns shrink"},r.a.createElement(c.a,{to:"/legal/code_de_conduite"},"Code de conduite")),r.a.createElement("li",{className:"columns auto text-right"},r.a.createElement("a",{href:"https://twitter.com/bdxio"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",{className:"columns shrink text-right"},r.a.createElement("a",{href:"https://www.facebook.com/bdxio"},r.a.createElement("i",{className:"fa fa-facebook-f"}))),r.a.createElement("li",{className:"columns shrink text-right"},r.a.createElement("a",{href:"https://www.linkedin.com/company/10651416/"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",{className:"columns shrink text-right"},r.a.createElement("a",{href:"https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"},r.a.createElement("i",{className:"fa fa-youtube"}))))),r.a.createElement("small",{className:"footer-date"},"©2020 - BDX I/O")))}},214:function(e,t,a){var n=a(6),r=a(215)(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},215:function(e,t,a){var n=a(8),r=a(30),c=a(29),l=a(48).f;e.exports=function(e){return function(t){for(var a,s=c(t),i=r(s),o=i.length,m=0,u=[];o>m;)a=i[m++],n&&!l.call(s,a)||u.push(e?[a,s[a]]:s[a]);return u}}}}]);
//# sourceMappingURL=component---src-pages-sponsors-tsx-ccf22bde0f30be06044b.js.map