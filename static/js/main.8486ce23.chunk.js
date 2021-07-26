(this["webpackJsonpspacex-utils"]=this["webpackJsonpspacex-utils"]||[]).push([[1],{112:function(t,n,e){"use strict";e.r(n);var a,r,i,o,c,s,l,d,p,u,x=e(1),b=e.n(x),h=e(60),g=e.n(h),m=e(139),f=e(140),j=e(138),O=e(6),w=e(7),k=Object(w.a)(a||(a=Object(O.a)(["\n  body {\n    margin: 0 0 30px 0;\n    padding: 0;\n    background: #fdfdfd;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n\tbutton {\n\t\tfont-family: 'Nunito Sans', sans-serif;\n\t\tfont-weight: 700;\n\t}\n"]))),v=e(141),y=e(131),C=e(43),F=e(9),D=e(63),B=e(62),E=e(16),S={xs:"700px",s:"768px",ms:"992px",mm:"1024px",m:"1200px",l:"1360px",lg:"1440px",lgg:"1680px",xl:"1800px",xlg:"1920px"},N=Object.keys(S).reduce((function(t,n){return t[n]=function(){return Object(w.b)(r||(r=Object(O.a)(["\n\t\t@media (min-width: ",") {\n\t\t\t",";\n\t\t}\n\t"])),S[n],w.b.apply(void 0,arguments))},t}),{}),A=w.c.main(i||(i=Object(O.a)(["\n\tpadding-top: 90px;\n\tpadding-left: 220px;\n"]))),L=(w.c.div(o||(o=Object(O.a)(["\n\twidth: 100%;\n\tmargin: 0 auto;\n\tdisplay: block;\n\tposition: relative;\n\n\t","\n"])),N.mm(c||(c=Object(O.a)(["\n    padding-left: 80px;\n    padding-right: 70px;\n\t"])))),w.c.div(s||(s=Object(O.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\talign-items: flex-start;\n\theight: auto;\n\tpadding: 32px;\n"]))),w.c.div(l||(l=Object(O.a)(["\n\tposition: initial;\n\tz-index: 5;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: ",";\n\twidth: 100%;\n\theight: 30px;\n\tbackground: #030340;\n\tcolor: #fff;\n\tpadding: 20px 0px 20px 68px;\n\tfont-size: 14px;\n\n\t","\n"])),E.a,N.xs(d||(d=Object(O.a)(["\n\t\tdisplay: none;\n\t"])))),w.c.span(p||(p=Object(O.a)(["\n\tfont-weight: bold;\n"]))),w.c.button(u||(u=Object(O.a)(["\n\tpadding: 4px 6px;\n\tborder-radius: 4px;\n\tbackground: #ac1616;\n\tcolor: #fff;\n\tcursor: pointer;\n"]))),e(4)),M=function(t){var n=t.routes,e=t.children;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(B.a,{title:"SpaceX - Utils",description:"Graphql Front of SpaceX"}),Object(L.jsx)(D.a,{routes:n}),Object(L.jsx)(A,{children:e})]})},T=b.a.lazy((function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,172))})),z=b.a.lazy((function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,173))})),I=function(){return[{title:"Lan\xe7amentos",prefixUrlMatch:"launches",background:E.c.launchesColor,path:"/launches",component:function(){return Object(L.jsx)(T,{})},anchors:[]},{title:"Foguetes",prefixUrlMatch:"rockets",background:E.c.rocketsColor,path:"/rockets",component:function(){return Object(L.jsx)(z,{})},anchors:[]}]},P=e(40),U=function(){var t=I(),n=Object(v.a)().t;return Object(L.jsx)(P.a.Provider,{value:{t:n,routes:t},children:Object(L.jsx)(C.a,{children:Object(L.jsx)(x.Suspense,{fallback:Object(L.jsx)(y.a,{color:"secondary"}),children:Object(L.jsx)(M,{routes:t,children:Object(L.jsxs)(F.d,{children:[Object(L.jsx)(F.a,{from:"/spacex-utils",to:"/launches"}),t.map((function(t,n){var e=t.path,a=t.component;return Object(L.jsx)(F.b,{path:e,render:a},"route-".concat(e,"-").concat(n))}))]})})})})})},H=function(t){t&&t instanceof Function&&e.e(6).then(e.bind(null,174)).then((function(n){var e=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),a(t),r(t),i(t),o(t)}))},J=e(57),q=e(39),G=e(82),R={"pt-BR":e(84),"en-US":e(85)};J.a.use(q.e).use(G.a).init({debug:!0,resources:R,react:{useSuspense:!1},initImmediate:!1,lng:navigator.language,interpolation:{escapeValue:!1}});J.a;var X=new m.a({uri:"https://api.spacex.land/graphql/",cache:new f.a});g.a.render(Object(L.jsx)(b.a.StrictMode,{children:Object(L.jsxs)(j.a,{client:X,children:[Object(L.jsx)(k,{}),Object(L.jsx)(U,{})]})}),document.getElementById("root")),H()},16:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i}));var a="'Inter', sans-serif;",r={white:"#fff",blueGrey400:"#78909C",dark400:"#4B5057",dark600:"#28293D",dark700:"#2E2E2E",grey200:"#F4F4F4",grey300:"#C4C4C4",grey700:"#3E3838",purple100:"rgba(84, 43, 151, 0.35)",purple700:"#07074D",blue500:"#5E01DC",blue600:"#5D00DC",blue700:"#6415AD",pink600:"#BB6BD9",green:"#4FFCBC"},i={background:"#19191E",backgroundHero:"#1C1D22",backgroundDark:"#16161B",backgroundContrast:"#46464E",darkText:"#A3A3B6",tooltip:"#1F1F25",backgroundAccent:"#1F1F25",instantCardBackground:"#15151b",instantCardBackgroundHover:"#15151b",heroBtnNav:"#15151b",instantCardText:"#FFFEFE",launchesColor:"#FF00AF",rocketsColor:"#00DBEE",nulaunchesColor:"#0089FF",tableTextColor:"#868698",tableDivisor:"rgba(75, 74, 74, 0.35)",scrollTrack:"#2E2E39",sectionDescriptionColor:"#B8B8BE",likeText:"#9A9AAF",dislikeText:"#484855",loadMoreBorder:"#32323A"}},40:function(t,n,e){"use strict";var a=e(1),r=Object(a.createContext)({t:null,routes:[]});n.a=r},61:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return h}));var a,r,i,o,c,s,l,d,p=e(6),u=e(7),x=e(16),b=(u.c.h2(a||(a=Object(p.a)(["\n\tcolor: ",";\n\tfont-size: 45px;\n\tfont-weight: 400;\n\ttext-transform: uppercase;\n\n\t& b,\n\t& strong {\n\t\tcolor: ",";\n\t\tfont-weight: 600;\n\t}\n"])),x.b.white,x.c.homeColor),u.c.div(r||(r=Object(p.a)(["\n\tbackground-color: ",";\n\tborder: 1px solid ",";\n\tborder-radius: 10px;\n"])),x.c.backgroundDark,x.b.borderLight),u.c.span(i||(i=Object(p.a)(["\n\tcolor: ",";\n\tfont-size: 16px;\n\tmargin: 15px 0;\n\tjustify-self: start;\n"])),x.c.errorColor)),h=u.c.div(o||(o=Object(p.a)(["\n\twidth: 90%;\n\tmargin: 0 auto;\n\tpadding: 0 15px;\n\tmax-width: 1200px;\n\n\t@media (max-width: 1368px) {\n\t\tmax-width: 1600px;\n\t}\n\n\t@media (max-width: 768px) {\n\t\tmax-width: 720px;\n\t}\n\n\t@media (max-width: 576px) {\n\t\tmax-width: 540px;\n\t}\n"])));u.c.div(c||(c=Object(p.a)(["\n\twidth: 90%;\n\tmargin: 0 auto;\n\tmax-width: 1200px;\n\n\t@media (min-width: 1368px) {\n\t\tmax-width: 1600px;\n\t}\n"]))),u.c.div(s||(s=Object(p.a)(["\n\tdisplay: flex;\n\tmargin: ",";\n"])),(function(t){return t.margin||"0"})),u.c.div(l||(l=Object(p.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),u.c.hr(d||(d=Object(p.a)(["\n\tborder-style: solid;\n\tborder-bottom-color: ",";\n\tborder-bottom-width: 1px;\n\tbox-shadow: 1px 1px 1px ",";\n\tmargin: ",";\n"])),x.b.borderDark,x.b.borderLight,(function(t){return t.margin||"50px 0"}))},62:function(t,n,e){"use strict";var a=e(1),r=e(75),i=e(4);n.a=function(t){var n=t.title,e=t.description;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(i.jsxs)(r.a,{children:[Object(i.jsx)("title",{children:n}),Object(i.jsx)("meta",{name:"description",content:e}),Object(i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),Object(i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700&display=swap",rel:"stylesheet"})]})}},63:function(t,n,e){"use strict";var a,r,i,o,c,s,l,d,p=e(1),u=e(43),x=e(40),b=e(61),h=e(6),g=e(7),m=g.c.header(a||(a=Object(h.a)(["\n\tdisplay: flex;\n\tmargin: 0;\n\twidth: 100%;\n\theight: 90px;\n\tbackground: rgb(112, 65, 252);\n\tbackground: linear-gradient(\n\t\t60deg,\n\t\trgba(112, 65, 252, 1) 17%,\n\t\trgba(255, 62, 166, 1) 85%\n\t);\n\t-webkit-box-shadow: 1px 9px 10px -8px #828282;\n\tbox-shadow: 1px 9px 10px -8px #828282;\n\tborder-bottom: 0.6px solid #828282;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 10;\n\n\t& .spcx-header-container {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n"]))),f=(g.c.div(r||(r=Object(h.a)(["\n\tdisplay: flex;\n\tmax-width: 100px;\n\tjustify-content: center;\n\talign-items: center;\n"]))),g.c.div(i||(i=Object(h.a)(["\n\tdisplay: flex;\n\tmax-width: 220px;\n\tjustify-content: center;\n\talign-items: center;\n"]))),e(4)),j=function(){return Object(f.jsx)(m,{children:Object(f.jsx)(b.a,{className:"spcx-header-container"})})},O=g.c.aside(o||(o=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 220px;\n\twidth: 100%;\n\theight: 91%;\n\tborder-right: 2px solid #e3e3e3;\n\tposition: fixed;\n\tbackground: #fff;\n\tbox-shadow: -1px 2px 9px -2px rgba(0, 0, 0, 0.9);\n\t-webkit-box-shadow: -1px 2px 9px -2px rgba(0, 0, 0, 0.9);\n\t-moz-box-shadow: -1px 2px 9px -2px rgba(0, 0, 0, 0.9);\n\tleft: 0;\n\ttop: 92px;\n"]))),w=g.c.nav(c||(c=Object(h.a)(["\n\twidth: 100%;\n\theight: auto;\n"]))),k=g.c.ul(s||(s=Object(h.a)(["\n\tpadding: 10px 0;\n\ttext-align: left;\n\twidth: 100%;\n\tlist-style: none;\n"]))),v=g.c.li(l||(l=Object(h.a)(["\n\tdisplay: flex;\n\theight: 55px;\n\tborder-bottom: 1px solid #e3e3e3;\n\talign-items: center;\n\tpadding: 0 10px;\n\n\t& a {\n\t\ttext-decoration: none;\n\t\tfont-weight: 600;\n\t\tcolor: #000;\n\t\ttransition: all 0.2s;\n\n\t\t&:hover {\n\t\t\tcolor: #e3e3e3;\n\t\t}\n\n\t\t&:active {\n\t\t\tcolor: #e3e3e3;\n\t\t\topacity: 0.6;\n\t\t}\n\t}\n"]))),y=g.c.footer(d||(d=Object(h.a)(["\n\theight: 80px;\n\twidth: 100%;\n\tbackground: rgb(112, 65, 252);\n\tbackground: linear-gradient(\n\t\t60deg,\n\t\trgba(112, 65, 252, 1) 17%,\n\t\trgba(255, 62, 166, 1) 85%\n\t);\n"])));n.a=function(){var t=Object(p.useContext)(x.a),n=t.t,e=t.routes;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{}),Object(f.jsxs)(O,{children:[Object(f.jsx)(w,{children:Object(f.jsx)(k,{children:e.map((function(t,e){var a=t.path,r=t.prefixUrlMatch;return Object(f.jsx)(v,{className:"mn-item",children:Object(f.jsx)(u.b,{to:"".concat(a),children:n("".concat(r,".title"))})},"".concat(r,"-").concat(e))}))})}),Object(f.jsx)(y,{})]})]})}},84:function(t){t.exports=JSON.parse('{"translation":{"launches":{"title":"lan\xe7amentos"},"rockets":{"title":"foguetes"},"new-launches":{"title":"novos lan\xe7amentos"},"button":{"readmore":{"show":"Mostrar mais","hide":"Mostrar menos"}},"search":{"label":"Buscar"},"showing-label":"Exibindo","card":{"name":"Nome","date":"Data de Lan\xe7amento","rocket":"Nome do Foguete","description":"Descri\xe7\xe3o","place":"Local do Lan\xe7amento","ships":"Naves","ship-name":"nome","ship-type":"tipo"},"rocket-card":{"name":"Nome","stages":"N\xfamero de Est\xe1gios","status":{"label":"Status","active":"Ativo","inactive":"Inativo"},"height":{"label":"metros","value":"Altura"},"diameter":{"label":"metros","value":"Di\xe2metro"},"charge":{"label":"kg","value":"Capacidade de Carga"},"description":"Descri\xe7\xe3o","engines":"Motores","number":"quantidade","type":"tipo"}}}')},85:function(t){t.exports=JSON.parse('{"translation":{"launches":{"title":"launches"},"rockets":{"title":"rockets"},"new-launches":{"title":"new launches"},"button":{"readmore":{"show":"Show more","hide":"Hide"}},"search":{"label":"Search"},"showing-label":"Showing","card":{"name":"Name","date":"Launched at","rocket":"Rocket name","description":"Details","place":"Launched where","ships":"Ships","ship-name":"name","ship-type":"type"},"rocket-card":{"name":"Name","stages":"Stages","status":{"label":"Status","active":"Active","inactive":"Inactive"},"height":{"label":"meters","value":"Height"},"diameter":{"label":"meters","value":"Diameter"},"charge":{"label":"kg","value":"Payload Weight"},"description":"Description","engines":"Engines","number":"number","type":"type"}}}')}},[[112,2,3]]]);
//# sourceMappingURL=main.8486ce23.chunk.js.map