(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{545:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return e(4893)}])},3565:function(n,t,e){"use strict";e.d(t,{z:function(){return h}});var r,i=e(5893),o=(e(7294),e(186));function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function c(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function l(){var n=c(["\n  display: block;\n  background: ",";\n  color: ",";\n  padding: 8px 16px;\n  min-width: 60px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function s(){var n=c(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return s=function(){return n},n}!function(n){n.PRIMARY="SILVER_DARK",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=o.ZP.button(l(),(function(n){return function(n,t){return t[r[n]]}(n.status,n.theme)}),(function(n){return n.theme.FULL_WHITE})),d=o.ZP.div(s()),h=function(n){var t=n.children,e=n.status,r=a(n,["children","status"]);return(0,i.jsx)(f,function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){u(n,t,e[t])}))}return n}({type:"button",status:null!==e&&void 0!==e?e:"PRIMARY"},r,{children:(0,i.jsx)(d,{children:t})}))}},9193:function(n,t,e){"use strict";e.d(t,{d:function(){return r},u:function(){return i}});var r=[{Author:"J. K. Rowling.",Genre:"Fantasy",Characters:["Hermione Granger","Harry Potter","Lord Voldemort","MORE"],Books:[{title:"Philosopher's Stone",date:"1997"},{title:"Chamber of Secrets",date:"1998"},{title:"Prisoner of Azkaban",date:"1999"},{title:"Goblet of Fire",date:"1999"},{title:"Order of the Phoenix",date:"2003"},{title:"Half-Blood Prince",date:"2005"},{title:"Deathly Hallows",date:"2007"}]}],i={layout:"LEFT",expand:!0,controls:!0,autoformat:!0}},5628:function(n,t,e){"use strict";e.d(t,{h:function(){return f},a:function(){return d}});var r=e(4931);function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t}function u(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(n,t)||l(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||l(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){if(n){if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}var s=function(n){try{"object"!==typeof n&&(n=JSON.parse(n)),Array.isArray(n)||(n=[n]);var t=function(n){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e=0,function(){return String(++e)});return n?[n].flat().map((function(n){var e=o(n,Object);return{id:r(),text:e?Object.fromEntries(Object.entries(n).filter((function(n){var t=a(n,2),e=(t[0],t[1]);return!Array.isArray(e)&&!o(e,Object)}))):n.toString(),parent:!1,children:Object.entries(n).filter((function(n){var t=a(n,2),e=(t[0],t[1]);return Array.isArray(e)||"object"===typeof e})).flatMap((function(n){var e=a(n,2),i=e[0],o=e[1];return[{id:r(),text:i,parent:!0,children:t(o,r)}]}))}})):[]},e=function(n){return n.flatMap((function(n){var t=n.id,r=n.children,i=void 0===r?[]:r;return c(i.map((function(n){var e=n.id;return{id:"e".concat(e,"-").concat(t),from:e,to:t}}))).concat(c(e(i)))}))},i=function(n){return n.flatMap((function(n){var t=n.children;return[u(n,["children"])].concat(c(i(t)))}))},l=t(n);return c(i(l)).concat(c(e(l)))}catch(s){return r.ZP.error("An error occured while parsing JSON data!"),[]}};function f(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n=JSON.parse(n);for(var e=s(n),r=[],i=[],o=0;o<e.length;o++){var u=e[o];if(p(u)){var a=h(u.text),c=a.split("\n"),l=c.map((function(n){return n.length})).sort((function(n,t){return n-t})),f=l.reverse()[0];r.push({id:u.id,text:u.text,data:{isParent:u.parent},width:t?35+8*f:180,height:t?30+10*c.length:50})}else i.push(u)}return{nodes:r,edges:i}}function d(n){switch(n){case"LEFT":return"UP";case"UP":return"RIGHT";case"RIGHT":return"DOWN";default:return"LEFT"}}function h(n){if(r=n,null!=(i=Object)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](r):r instanceof i){var t="",e=Object.entries(n);return Object.keys(n).every((function(n){return!isNaN(+n)}))?Object.values(n).join(""):(e.forEach((function(n){t+="".concat(n[0],": ").concat(n[1],"\n")})),t)}var r,i;return n}function p(n){return"text"in n}},4893:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return an}});var r=e(5893),i=e(7294),o=e(9008),u=e(1163),a=e(186),c=e(5884),l=e(3565),s=e(9193),f=e(5152),d=e(6126),h=e(4059),p=e(3073),b=e(5628);function v(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function y(){var n=v(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return y=function(){return n},n}function m(){var n=v(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  color: ",";\n"]);return m=function(){return n},n}function x(){var n=v(['\n  position: "relative" !important;\n  pointer-events: "none" !important;\n  width: ',";\n  height: ",";\n"]);return x=function(){return n},n}function g(){var n=v(["\n  font-style: ",";\n  color: ",";\n"]);return g=function(){return n},n}function j(){var n=v(["\n  height: fit-content;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return j=function(){return n},n}var w=a.ZP.div(y()),O=a.ZP.pre(m(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.SILVER})),S=a.ZP.foreignObject(x(),(function(n){return n.width+"px"}),(function(n){return n.height+"px"})),P=a.ZP.span(g(),(function(n){var t=n.parent,e=n.objectKey;return!(t||e)&&"italic"}),(function(n){var t=n.theme,e=n.objectKey;return n.parent?t.ORANGE:e?t.BLURPLE:t.LIGHTGREEN})),A=a.ZP.div(j(),(function(n){var t=n.width;return"".concat(t-20,"px")})),E=function(n){var t=n.width,e=n.height,i=n.value;return(0,r.jsx)(S,{width:t,height:e,x:0,y:0,children:(0,r.jsx)(w,{children:(0,r.jsx)(O,{width:t,height:e,children:i.map((function(n,e){return n[1]&&(0,r.jsxs)(A,{width:t,children:[(0,r.jsxs)(P,{objectKey:!0,children:[n[0],": "]}),n[1]]},e)}))})})})},z=function(n){var t=n.width,e=n.height,i=n.value,o=n.isParent,u=void 0!==o&&o;return(0,r.jsx)(S,{width:t,height:e,x:0,y:0,children:(0,r.jsx)(w,{children:(0,r.jsx)(O,{width:t,height:e,children:(0,r.jsx)(P,{parent:u,children:i})})})})};function R(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var I={fill:"transparent",stroke:"transparent",strokeWidth:0},k={fill:"black"},N=function(n){var t=n.properties;return(0,r.jsx)(p.Node,function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){R(n,t,e[t])}))}return n}({},n,{label:(0,r.jsx)(p.Label,{style:I}),port:(0,r.jsx)(p.Port,{style:k,rx:10,ry:10}),children:function(n){var e,i,o=n.width,u=n.height;if(e=t.text,null!=(i=Object)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i){var a=Object.entries(t.text);return(0,r.jsx)(E,{width:o,height:u,value:a})}return(0,r.jsx)(z,{isParent:t.data.isParent,width:o,height:u,value:t.text})}}))},L=e(8193),C=e(4931);function T(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function _(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return T(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return T(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function Z(){var n=G(["\n  position: relative;\n  border-left: 3px solid ",";\n"]);return Z=function(){return n},n}function H(){var n=G(["\n  position: absolute;\n"]);return H=function(){return n},n}function U(){var n=G(["\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 8px;\n  bottom: 8px;\n  right: 8px;\n  opacity: 0.9;\n\n  button:hover {\n    opacity: 0.7;\n  }\n"]);return U=function(){return n},n}var B=a.ZP.div(Z(),(function(n){return n.theme.SILVER_DARK})),D=a.ZP.div(H()),J=a.ZP.div(U()),K=function(n){var t=n.json,e=function(){var n=(0,i.useState)(!1),t=n[0],e=n[1];return(0,i.useEffect)((function(){return e(!0)}),[]),t}(),o=i.useRef(null),u=i.useRef(null),a=_((0,h._)("config",s.u),1)[0],c=(0,b.h)(t,a.expand),f=c.nodes,v=c.edges;i.useEffect((function(){var n;u.current&&(null===(n=u.current)||void 0===n||n.resetTransform())}),[t,u]);return e?(0,r.jsxs)(B,{children:[(0,r.jsx)(D,{children:(0,r.jsx)(d.d$,{maxScale:2,minScale:.4,initialScale:.8,ref:u,limitToBounds:!1,wheel:{step:.4},children:(0,r.jsx)(d.Uv,{children:(0,r.jsx)(p.Canvas,{ref:o,nodes:f,node:N,edges:v,maxWidth:2e4,maxHeight:2e4,center:!1,zoomable:!1,layoutOptions:{"elk.direction":a.layout},fit:!0,readonly:!0,animated:!0})})})}),a.controls&&(0,r.jsxs)(J,{children:[(0,r.jsx)(l.z,{onClick:function(){return function(n){var t,e,r;(null===(t=u.current)||void 0===t?void 0:t.state.scale)&&(null===(e=u.current)||void 0===e?void 0:e.state.scale)<2&&(null===(r=u.current)||void 0===r||r.setTransform(u.current.instance.transformState.positionX-200,u.current.instance.transformState.positionY-200,u.current.state.scale+n))}(.5)},children:(0,r.jsx)(L.SxL,{size:24})}),(0,r.jsx)(l.z,{onClick:function(){return function(n){var t,e,r;(null===(t=u.current)||void 0===t?void 0:t.state.scale)&&(null===(e=u.current)||void 0===e?void 0:e.state.scale)>.4&&(null===(r=u.current)||void 0===r||r.setTransform(u.current.instance.transformState.positionX+200,u.current.instance.transformState.positionY+200,u.current.state.scale-n))}(.4)},children:(0,r.jsx)(L.aAQ,{size:24})}),(0,r.jsx)(l.z,{onClick:function(){var n;return null===(n=u.current)||void 0===n?void 0:n.resetTransform()},children:(0,r.jsx)(L.vju,{size:24})}),(0,r.jsx)(l.z,{onClick:function(){localStorage.setItem("json",t),C.ZP.success("Saved JSON successfully!")},children:(0,r.jsx)(L.gg_,{size:24})})]})]}):null};function M(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function V(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return M(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function Y(){var n=F(["\n  display: flex;\n"]);return Y=function(){return n},n}function W(){var n=F(["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 700;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n']);return W=function(){return n},n}function X(){var n=F(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return X=function(){return n},n}function $(){var n=F(["\n  display: flex;\n  align-items: center;\n  height: 15px;\n  border-bottom: 1px solid ",";\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n"]);return $=function(){return n},n}function Q(){var n=F(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n  height: calc(100vh - 26px) !important;\n\n  .Resizer {\n    background: #000;\n    opacity: 0.2;\n    z-index: 1;\n    box-sizing: border-box;\n    background-clip: padding-box;\n  }\n\n  .Resizer:hover {\n    transition: all 2s ease;\n  }\n\n  .Resizer.horizontal {\n    height: 11px;\n    margin: -5px 0;\n    border-top: 5px solid rgba(255, 255, 255, 0);\n    border-bottom: 5px solid rgba(255, 255, 255, 0);\n    cursor: row-resize;\n    width: 100%;\n  }\n\n  .Resizer.horizontal:hover {\n    border-top: 5px solid rgba(0, 0, 0, 0.5);\n    border-bottom: 5px solid rgba(0, 0, 0, 0.5);\n  }\n\n  .Resizer.vertical {\n    width: 11px;\n    margin: 0 -5px;\n    border-left: 5px solid rgba(255, 255, 255, 0);\n    border-right: 5px solid rgba(255, 255, 255, 0);\n    cursor: col-resize;\n  }\n\n  .Resizer.vertical:hover {\n    border-left: 5px solid rgba(0, 0, 0, 0.5);\n    border-right: 5px solid rgba(0, 0, 0, 0.5);\n  }\n\n  .Resizer.disabled {\n    cursor: not-allowed;\n  }\n\n  .Resizer.disabled:hover {\n    border-color: transparent;\n  }\n"]);return Q=function(){return n},n}var q=(0,f.default)((function(){return Promise.all([e.e(774),e.e(228),e.e(281),e.e(581),e.e(190)]).then(e.bind(e,1190))}),{loadableGenerated:{webpack:function(){return[1190]}},ssr:!1}),nn=(0,f.default)((function(){return Promise.all([e.e(228),e.e(445),e.e(955),e.e(185)]).then(e.bind(e,2185))}),{loadableGenerated:{webpack:function(){return[2185]}},ssr:!1}),tn=a.ZP.div(Y()),en=a.ZP.div(W(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),rn=a.ZP.div(X()),on=a.ZP.div($(),(function(n){return n.theme.BLACK}),(function(n){return n.theme.BLACK_SECONDARY}),(function(n){return n.theme.SILVER})),un=(0,a.ZP)(c.Z)(Q(),(function(n){return n.theme.BLACK_LIGHT})),an=function(){var n=V(i.useState(JSON.stringify(s.d)),2),t=n[0],e=n[1],a=(0,u.useRouter)();return i.useEffect((function(){var n=localStorage.getItem("json");n&&e(n)}),[]),(0,r.jsxs)(tn,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"Editor | JSON Visio"})}),(0,r.jsx)(nn,{setJson:e}),(0,r.jsxs)(rn,{children:[(0,r.jsx)(on,{}),(0,r.jsxs)(un,{maxSize:800,minSize:300,defaultSize:450,split:"vertical",children:[(0,r.jsx)(q,{json:t,setJson:e}),(0,r.jsx)(K,{json:t,setJson:e})]})]}),(0,r.jsxs)(en,{children:["This app is not compatible with your device!",(0,r.jsx)(l.z,{className:"incompatible",onClick:function(){return a.push("/")},children:"Go Back"})]})]})}}},function(n){n.O(0,[617,319,987,967,774,888,179],(function(){return t=545,n(n.s=t);var t}));var t=n.O();_N_E=t}]);