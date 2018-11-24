(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{4:function(e,t,n){(function(e,r){(function(t,n){"use strict";var o="default"in n?n.default:n;function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?h(e):t}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b="react-accessible-accordion@AccordionContainer",E=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return u(h(h(n=v(this,(e=p(t)).call.apply(e,[this].concat(o))))),"state",{items:n.props.items||[]}),u(h(h(n)),"addItem",function(e){n.setState(function(t){return t.items.some(function(t){return t.uuid===e.uuid})&&console.error('AccordionItem error: One item already has the uuid "'.concat(e.uuid,'". Uuid property must be unique. See: https://github.com/springload/react-accessible-accordion#accordionitem')),{items:n.props.accordion&&e.expanded?y(t.items.map(function(e){return l({},e,{expanded:!1})})).concat([e]):y(t.items).concat([e])}})}),u(h(h(n)),"removeItem",function(e){return n.setState(function(t){return{items:t.items.filter(function(t){return t.uuid!==e})}})}),u(h(h(n)),"setExpanded",function(e,t){return n.setState(function(r){return{items:r.items.map(function(r){return r.uuid===e?l({},r,{expanded:t}):n.props.accordion&&t?l({},r,{expanded:!1}):r})}},function(){n.props.onChange&&n.props.onChange(n.props.accordion?e:n.state.items.filter(function(e){return e.expanded}).map(function(e){return e.uuid}))})}),n}return d(t,n.Component),c(t,[{key:"getChildContext",value:function(){var e={items:this.state.items,accordion:!!this.props.accordion,addItem:this.addItem,removeItem:this.removeItem,setExpanded:this.setExpanded};return u({},b,e)}},{key:"render",value:function(){return this.props.children||null}}]),t}();u(E,"childContextTypes",u({},b,function(){return null}));var g=function(e){function t(){return a(this,t),v(this,p(t).apply(this,arguments))}return d(t,n.Component),c(t,[{key:"render",value:function(){return this.props.children(this.context[b])}}]),t}();u(g,"contextTypes",u({},b,function(){return null}));var I=function(e){var t=e.accordion,n=f(e,["accordion"]);return o.createElement("div",s({role:t?"tablist":null},n))};I.defaultProps={accordion:!0};var x=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return u(h(h(n=v(this,(e=p(t)).call.apply(e,[this].concat(i))))),"renderAccordion",function(e){var t=n.props,r=(t.accordion,t.onChange,f(t,["accordion","onChange"]));return o.createElement(I,s({accordion:e.accordion},r))}),n}return d(t,n.Component),c(t,[{key:"render",value:function(){return o.createElement(E,{accordion:this.props.accordion,onChange:this.props.onChange},o.createElement(g,null,this.renderAccordion))}}]),t}();function A(e,t){return e(t={exports:{}},t.exports),t.exports}u(x,"defaultProps",{accordion:!0,onChange:function(){},className:"accordion",children:null});var C,_=A(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var o=t.indexOf(e);t.splice(o,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}});(C=_)&&C.__esModule&&Object.prototype.hasOwnProperty.call(C,"default")&&C.default;_.createChangeEmitter;(function(e){var t,n=e.Symbol;"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable"})("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r),n.Component;var N=function(e,t,n){return void 0===n&&(n="children"),function(r){var a=o.createFactory(r),i=o.createFactory(e);return function(e){var r;return i(((r={})[n]=function(){return a(s({},e,t.apply(void 0,arguments)))},r))}}},S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}},function(e){return e})},w=function(e,t,n){var r=e||0;return"number"!=typeof t&&(t=10),"number"!=typeof n&&(n=1),function(){var e;return void 0===t||10===t?(e=r,r+=n):(e=r.toString(),r=(parseInt(r,t)+n).toString(t)),e}},O="react-accessible-accordion@ItemContainer",q=function(e){function t(){return a(this,t),v(this,p(t).apply(this,arguments))}return d(t,n.Component),c(t,[{key:"getChildContext",value:function(){var e=this.props.uuid;return u({},O,{uuid:e})}},{key:"render",value:function(){return this.props.children||null}}]),t}();u(q,"childContextTypes",u({},O,function(){return null}));var j=function(e){function t(){return a(this,t),v(this,p(t).apply(this,arguments))}return d(t,n.Component),c(t,[{key:"render",value:function(){return this.props.children(this.context[O])}}]),t}();u(j,"contextTypes",u({},O,function(){return null}));var P=A(function(e){
/*!
    Copyright (c) 2016 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===a)for(var i in o)t.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()}),k=function(e){function t(){return a(this,t),v(this,p(t).apply(this,arguments))}return d(t,n.Component),c(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.uuid,n=e.accordionStore,r=e.disabled;n.addItem({uuid:t,expanded:this.props.expanded||!1,disabled:r})}},{key:"componentWillUnmount",value:function(){this.props.accordionStore.removeItem(this.props.uuid)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.uuid,r=t.expanded,o=t.accordionStore;r!==e.expanded&&o.setExpanded(n,r)}},{key:"render",value:function(){var e=this.props,t=e.uuid,n=e.className,r=e.hideBodyClassName,a=e.accordionStore,i=(e.disabled,e.expanded,f(e,["uuid","className","hideBodyClassName","accordionStore","disabled","expanded"])),c=a.items.filter(function(e){return e.uuid===t})[0];return c?o.createElement("div",s({className:P(n,u({},r,!c.expanded&&r))},i)):null}}]),t}(),T=w();var B=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return u(h(h(n=v(this,(e=p(t)).call.apply(e,[this].concat(o))))),"id",T()),n}return d(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.accordionStore,n=e.uuid,r=f(e,["accordionStore","uuid"]),a=void 0!==n?n:this.id;return o.createElement(q,{uuid:a},o.createElement(k,s({},r,{uuid:a,accordionStore:t})))}}]),t}();u(B,"defaultProps",{className:"accordion__item",hideBodyClassName:"",disabled:!1,expanded:!1,uuid:void 0});var D=S(N(g,function(e){return{accordionStore:e}}))(B),L=function(e){function t(){var e,n;a(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return u(h(h(n=v(this,(e=p(t)).call.apply(e,[this].concat(o))))),"handleClick",function(){var e=n.props,t=e.uuid,r=e.expanded;(0,e.setExpanded)(t,!r)}),u(h(h(n)),"handleKeyPress",function(e){13!==e.charCode&&32!==e.charCode||(e.preventDefault(),n.handleClick())}),n}return d(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.hideBodyClassName,r=(e.item,e.accordion),a=(e.setExpanded,e.expanded),i=e.uuid,c=e.disabled,l=f(e,["className","hideBodyClassName","item","accordion","setExpanded","expanded","uuid","disabled"]),d="accordion__title-".concat(i),p="accordion__body-".concat(i),m=r?"tab":"button",h=P(t,u({},n,n&&!a));return"tab"===m?o.createElement("div",s({id:d,"aria-selected":a,"aria-controls":p,className:h,onClick:c?void 0:this.handleClick,role:m,tabIndex:"0",onKeyPress:this.handleKeyPress,disabled:c},l)):o.createElement("div",s({id:d,"aria-expanded":a,"aria-controls":p,className:h,onClick:c?void 0:this.handleClick,role:m,tabIndex:"0",onKeyPress:this.handleKeyPress,disabled:c},l))}}]),t}();u(L,"accordionElementName","AccordionItemTitle");var R=function(e){function t(){return a(this,t),v(this,p(t).apply(this,arguments))}return d(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.itemStore,n=e.accordionStore,r=f(e,["itemStore","accordionStore"]),a=t.uuid,i=n.items,c=n.accordion,u=i.filter(function(e){return e.uuid===a})[0];return o.createElement(L,s({},r,u,{setExpanded:n.setExpanded,accordion:c}))}}]),t}();u(R,"defaultProps",{className:"accordion__title",hideBodyClassName:""});var Q=S(N(g,function(e){return{accordionStore:e}}),N(j,function(e){return{itemStore:e}}))(R),U=function(e){var t=e.className,n=e.hideBodyClassName,r=e.uuid,a=e.expanded,i=(e.disabled,e.accordion),c=f(e,["className","hideBodyClassName","uuid","expanded","disabled","accordion"]);return o.createElement("div",s({id:"accordion__body-".concat(r),className:P(t,u({},n,!a)),"aria-hidden":!a,"aria-labelledby":"accordion__title-".concat(r),role:i?"tabpanel":null},c))},M=function(e){function t(){return a(this,t),v(this,p(t).apply(this,arguments))}return d(t,n.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.itemStore,n=e.accordionStore,r=f(e,["itemStore","accordionStore"]),a=t.uuid,i=n.items,c=n.accordion,u=i.filter(function(e){return e.uuid===a})[0];return u?o.createElement(U,s({},r,u,{accordion:c})):null}}]),t}();u(M,"defaultProps",{className:"accordion__body",hideBodyClassName:"accordion__body--hidden"});var G=S(N(g,function(e){return{accordionStore:e}}),N(j,function(e){return{itemStore:e}}))(M);t.Accordion=x,t.AccordionItem=D,t.AccordionItemTitle=Q,t.AccordionItemBody=G,t.resetNextUuid=function(){T=w()},Object.defineProperty(t,"__esModule",{value:!0})})(t,n(0))}).call(this,n(39),n(91)(e))},608:function(e,t,n){__NEXT_REGISTER_PAGE("/faq",function(){return e.exports=n(609),{page:e.exports.default}})},609:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n(4);t.default=function(){return o.a.createElement(a.k,null,o.a.createElement(a.j,{style:{backgroundImage:"url(/static/images/faq.jpg)"},title:"FAQ",tagline:"Les questions le plus fréquemment posées"}),o.a.createElement(a.p,{className:"section-white",title:"",subTitle:""},o.a.createElement(i.Accordion,null,o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Qu'est-ce qu'un incubateur de services numériques ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"Un incubateur est une structure légère qui permet d'accueillir des porteurs d'idées internes, les « intrapreneurs », et de leur fournir le cadre et les outils nécessaires pour pouvoir créer leur produit numérique en mode « startup d'état » pendant 6 mois."))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Qu'est-ce qu'une Startup d'Etat ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null," ","◦ Une Startup d'Etat permet le développement rapide de produits et services numériques, en cycles courts de développement. Elle est agencée selon le modèle de l'incubateur interministériel porté par la DINSIC. Elle est composée d'une équipe autonome, et a pour objectif de produire un service numérique qui résout un irritant vécu par les usagers ou les agents, et dont les premiers impacts peuvent être mesurés dans les 6 mois.",o.a.createElement("br",null),o.a.createElement("a",{href:"https://beta.gouv.fr/2017/09/05/les-6-prochains-mois-dune-startup-detat.html"},"https://beta.gouv.fr/2017/09/05/les-6-prochains-mois-dune-startup-detat.html")))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Pourquoi un incubateur dans les ministères sociaux ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"Car le numérique transforme en profondeur notre environnement et apporte des opportunités nouvelles. Les ministères sociaux ont un rôle à jouer dans le domaine du numérique, en tant que porteurs de valeurs et de services pour l'ensemble des citoyens. Les attentes des usagers sont particulièrement fortes dans le domaine social, dans toutes ses composantes, qui ont un impact direct sur la vie quotidienne de chacun."))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Y a-t-il d'autres incubateurs ministériels ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"◦ Au niveau interministériel, BetaGouv, l'incubateur des services numériques de la DINSIC Incubateur de services publics numériques — ",o.a.createElement("a",{href:"beta.gouv.fr"},"beta.gouv.fr"),o.a.createElement("br",null),"◦ Au niveau ministériel, le ministère de l'écologie, le ministère de l'Intérieur"))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Qui est chargé fonctionnellement de l'animation de la mission «incubateur de services numériques des ministères sociaux » ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"La direction des systèmes d'information (DSI) est chargée de l'animation fonctionnelle de la mission « incubateur de services numériques des ministères sociaux ». Elle est composée d'un chef de la mission, d'un Techlead, d'un Product Manager. Les intrapreneurs sont également aidés de coachs et de développeurs (experts du secteur numérique Numa, coachs et développeurs de la DINSIC)."))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Quels ont été les résultats du premier appel à candidatures en 2017 ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"Un total de 138 idées a été déposé par les agents de l'administration centrale, des DIRECCTE, des DR(D)JSCS) et des ARS pour l'incubateur des ministères sociaux, dont 41 dossiers pour les DIRECCTE (30 %), 35 dossiers pour la DGS (25%), 22 dossiers pour les DRJSCS (16%) et 19 dossiers pour les directions du SG (14 %). Parmi ces 138 candidatures, 19 ont été pré-sélectionnées pour la sélection finale effectuée par un jury composé d'institutionnels et d'experts issus du numérique."))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Quelles qualités doivent avoir un porteur d'idées ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"Il doit avoir les qualités d'un « intrapreneur » souhaitant s'engager et étant en capacité de se rendre disponible. C'est une personne engagée, avec des compétences et une expertise propres, qui a la posture nécessaire pour porter une Startup d'Etat. Il est accompagné par des coachs et des développeurs pour présenter un premier produit au bout de six mois."))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Travaille-t-on différemment au sein de l'incubateur ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"Le fonctionnement de l'incubateur est basé sur le principe innovant du développement agile itératif. L'objectif est de mettre en production un service rapidement, puis de l'améliorer en continue, avec les utilisateurs. Confrontation au terrain très tôt, droit à l'erreur, travail par itérations, auto-organisation,… sont des principes liés aux méthodes dites « agiles ». Celles-ci découpent, séquencent les réalisations en briques plus rapides à déployer et plus proches des attentes réelles des utilisateurs.",o.a.createElement("br",null),"◦"," ",o.a.createElement("a",{href:"https://beta.gouv.fr/2016/11/28/equipes-autonomes.html"},"https://beta.gouv.fr/2016/11/28/equipes-autonomes.html"),"◦"," ",o.a.createElement("a",{href:"https://beta.gouv.fr/2017/10/02/10-bonnes-raisons-pour-ne-pas-faire-de-tests-utilisateur.html"},"https://beta.gouv.fr/2017/10/02/10-bonnes-raisons-pour-ne-pas-faire-de-tests-utilisateur.html")))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Où se situe l'incubateur des ministères sociaux ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"L'incubateur se situe dans les locaux de la DSI, au 8è étage de la tour Mirabeau à Paris."))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"Y aura-t-il d'autres appels à candidatures auprès des agents ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"Oui, tous les ans mais rien n'est figé… L'appel à idées pour la saison 2 est en cours !"))),o.a.createElement(i.AccordionItem,null,o.a.createElement(i.AccordionItemTitle,null,o.a.createElement("h3",{className:"u-position-relative"},"J'ai encore des questions… Qui contacter ?",o.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))),o.a.createElement(i.AccordionItemBody,null,o.a.createElement("p",null,"L'équipe de DSI Incubateur :"," ",o.a.createElement("a",{href:"mailto:DSI-incubateur@sg.social.gouv.fr"},"DSI-incubateur@sg.social.gouv.fr")))))))}}},[[608,1,0]]]);