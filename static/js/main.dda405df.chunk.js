(this["webpackJsonpir-database"]=this["webpackJsonpir-database"]||[]).push([[0],{15:function(e,t,n){e.exports=n(25)},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),i=n.n(c),o=(n(20),n(1)),u=n(3),l=n.n(u),s=n(5),f=n(7),d=n(2),v=n(11),m=n.n(v),p=a.a.createContext({ir:{uri:"",setUri:function(){}},source:{uri:"",setUri:function(){}}});function b(){var e=Object(o.a)(["\n    border: 1px solid #777;\n  "]);return b=function(){return e},e}var E=function(e){var t=e.audioContext,n=e.mediaElement,a=e.uri,c=e.type,i=Object(r.useContext)(p),o=Object(r.useRef)(null);Object(r.useEffect)((function(){var e=Boolean(o&&o.current),r=Boolean(n&&n.current);if(e&&r){var a={containers:{overview:o.current},mediaElement:n.current,webAudio:{audioContext:t},playheadColor:"#333"};m.a.init(a,(function(e,t){e&&console.error("failed: ",e.message)}))}}),[t,n]);var u=d.a.div(b());return r.createElement("div",null,r.createElement("input",{type:"file",onChange:function(e){if(e.target.files){var t,n=(window.URL||window.webkitURL).createObjectURL;switch(c){case"IR":t=n(e.target.files[0]),i.ir.setUri(t);break;case"SOURCE":t=n(e.target.files[0]),i.source.setUri(t)}}}}),r.createElement(u,{ref:o}),r.createElement("audio",{controls:!0,ref:n},r.createElement("source",{src:a,type:"audio/wav"})))};function w(){var e=Object(o.a)(["\n    display: flex; \n    flex-direction: column; \n    justify-content: center;\n    align-items: center;  \n    transform: rotate(90deg);\n    font-size: 50px;\n    "]);return w=function(){return e},e}function h(){var e=Object(o.a)(["\n    display: inline-block;\n    font-size: 50px;\n    height: 200px;\n    line-height: 200px;\n  "]);return h=function(){return e},e}function O(){var e=Object(o.a)(["\n    display: flex; \n    flex-direction: row; \n    justify-content: space-around; \n    align-items: center;  \n  "]);return O=function(){return e},e}function j(){var e=Object(o.a)(["\n    padding: 5% 10%;\n  "]);return j=function(){return e},e}function x(){var e=Object(o.a)(["\n  "]);return x=function(){return e},e}var y=function(){var e=Object(r.useState)("".concat("/react-ir-convolver","/60x45y.wav")),t=Object(f.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("".concat("/react-ir-convolver","/modern-viola-c-major-bow-lift.wav")),o=Object(f.a)(i,2),u=o[0],v=o[1],m=Object(r.useRef)(null),b=Object(r.useRef)(null),y=Object(r.useRef)(null),g=new AudioContext,C=g.createConvolver(),R=function(){var e=Object(s.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(n).then((function(e){return e.arrayBuffer()})).then((function(e){return t.decodeAudioData(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){b&&b.current&&y&&y.current&&(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(g,n);case 2:C.buffer=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),g.createMediaElementSource(y.current).connect(C).connect(g.destination))}),[g,C,n]);var U=d.a.div(x()),k=d.a.div(j()),S=d.a.div(O()),B=d.a.div(h()),A=d.a.div(w());return a.a.createElement("div",{className:"App"},a.a.createElement(p.Provider,{value:{source:{uri:u,setUri:v},ir:{uri:n,setUri:c}}},a.a.createElement(U,null,a.a.createElement(k,null,a.a.createElement(S,null,a.a.createElement(E,{audioContext:g,mediaElement:m,uri:n,type:"IR"}),a.a.createElement(B,null,"*"),a.a.createElement(E,{audioContext:g,mediaElement:b,uri:u,type:"SOURCE"})),a.a.createElement(A,null,"="),a.a.createElement(E,{audioContext:g,mediaElement:y,uri:u,type:"CONVOLVED"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.dda405df.chunk.js.map