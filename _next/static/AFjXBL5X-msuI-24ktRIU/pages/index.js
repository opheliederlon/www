(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("YFqc"),s=a.n(r),u=a("m/Pd"),c=a.n(u),i=a("tKWW"),o=a("xG6Q"),m=a("zrwo"),d=a("0iUn"),f=a("sLSF"),p=a("MI3g"),b=a("a7VT"),h=a("Tit0"),E=a("AT/M"),v=a("vYYK"),g=function(e){function t(){var e,a;Object(d.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=Object(p.default)(this,(e=Object(b.default)(t)).call.apply(e,[this].concat(l))),Object(v.a)(Object(E.default)(Object(E.default)(a)),"state",{status:"idle",result:null}),Object(v.a)(Object(E.default)(Object(E.default)(a)),"mounted",!1),Object(v.a)(Object(E.default)(Object(E.default)(a)),"fetch",function(e){a.setState({status:"loading"},function(){a.props.fetch(e).then(function(e){a.mounted&&a.setState({status:"success",result:e})}).catch(function(e){a.mounted&&a.setState({status:"error",result:e.message})})})}),Object(v.a)(Object(E.default)(Object(E.default)(a)),"clear",function(){a.setState({result:null})}),a}return Object(h.default)(t,e),Object(f.default)(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.autoFetch&&this.fetch()}},{key:"componentDidUpdate",value:function(e){this.props.fetch!==e.fetch&&this.fetch()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.props.render(Object(m.a)({},this.state,{fetch:this.fetch,clear:this.clear}))}}]),t}(l.a.Component);g.defaultProps={autoFetch:!0};var j=g,O=[{title:"Startups incubées",value:o.length},{title:"Intrapreneurs",value:11},{title:"m² d&apos;espace dédié",value:150},{title:"Startups en création",value:3}];t.default=function(){return l.a.createElement(i.j,null,l.a.createElement(c.a,null,l.a.createElement("title",null,"Incubateur des ministères sociaux")),l.a.createElement(i.i,{title:"Bienvenue à l'incubateur des ministères sociaux",tagline:"incubateur.social.gouv.fr"}),l.a.createElement(i.o,{className:"section-white",title:"",subTitle:"",style:{padding:"1em 0"}},l.a.createElement(i.d,{chiffres:O})),l.a.createElement(i.o,{title:"Notre activité",subTitle:""},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return fetch(document.location.origin+"/static/github-stats.json").then(function(e){return e.json()})}),render:function(e){var t,a=e.status,n=e.result;return"success"===a&&n&&l.a.createElement(i.d,{chiffres:(t=n,[{title:"Projets open-source",value:t.count},{title:"Tickets",value:t.issues},{title:"Commits",value:t.commits},{title:"Contributeurs",value:t.contributors}])})}})),l.a.createElement("div",{id:"produits"}),l.a.createElement(i.p,{className:"section-color",title:"Nos startups"}),l.a.createElement(i.o,{title:"L'incubateur des ministères sociaux, qu'est-ce donc ?",subTitle:"",className:"section-white"},l.a.createElement("div",{className:"container"},l.a.createElement("br",null),"C'est à la fois un lieu, une démarche et un ensemble de personnes !",l.a.createElement("br",null),l.a.createElement("br",null),"L'incubateur des ministères sociaux reprend la démarche et les grands principes de"," ",l.a.createElement("a",{href:"http://beta.gouv.fr",target:"_blank",rel:"noopener noreferrer"},"beta.gouv"),", à savoir :",l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Un leitmotiv : la résolution d'irritants dont vous êtes témoin"),l.a.createElement("li",null,"Des produits fabriqués par des agents"," ",l.a.createElement("a",{href:"/actus/saison2"},' "intrapreneurs"')," "),l.a.createElement("li",null,"Un plateau qui rassemble les développeurs, les coachs, les intrapreneurs et bien d'autres ;)"),l.a.createElement("li",null,"De la co - construction, des petits pas et des produits utilisables très rapidement")),"L'incubateur offre ainsi l'opportunité de tester de nouveaux modes de conception de services, plus simples, plus agiles et en proximité avec les usagers !",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.a,{href:"/fonctionnement-incubateur"},l.a.createElement("a",null,l.a.createElement("center",null,l.a.createElement("img",{src:"../static/images/schema%20inc%201%20v1.png",alt:"Illustration fonctionnement IMS",width:"600",height:"286",style:{margin:" 0 auto",borderRadius:"50px"}}),l.a.createElement("br",null),l.a.createElement("div",{align:"center",style:{margin:"20px 0"}},l.a.createElement("a",{className:"button warning large",href:"/actus"},"En savoir plus")))))," ")),l.a.createElement(i.o,{title:"Dernières actualités",className:"section-color",subTitle:""},l.a.createElement("br",null),l.a.createElement(i.a,{count:3,promote:!0}),l.a.createElement("div",{align:"center",style:{marginBottom:50}},l.a.createElement("a",{className:"button large",href:"/actus"},"Voir toutes les actus"))))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1","ad9d"]]]);