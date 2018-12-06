(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,n){e.exports=n(97)},77:function(e,t){},79:function(e,t){},97:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(13),l=n.n(c),o=n(6),u=n(7),i=n(10),s=n(8),m=n(11),E=n(3),h=n(21),S=n(9),p=n(54),f=n(55),d=n(14),g={SHOW_SEARCH_PAGE:"SHOW_SEARCH_PAGE",SHOW_SINGLE_RESULT_PAGE:"SHOW_SINGLE_RESULT_PAGE",RENDER_SEARCH_RESULTS:"RENDER_SEARCH_RESULTS",CLEAR_SEARCH_RESULTS:"CLEAR_SEARCH_RESULTS",FETCH_RESULTS:"FETCH_RESULTS",SHOW_MESSAGE:"SHOW_MESSAGE",HIDE_MESSAGE:"HIDE_MESSAGE"},b={message:null,searchText:null,currentComic:null,currentSearchResults:[]},O=function(e){return{type:g.SHOW_SINGLE_RESULT_PAGE,comic:e}},R=function(e,t){return{type:g.SHOW_MESSAGE,text:e,level:t}},C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(this.props.hide)return null;var e=this.props,t=e.message,n=t.text,r=t.level;return a.a.createElement(E.a,{color:r,isOpen:!0,toggle:e.onDismiss},n)}}]),t}(a.a.Component),_=Object(S.b)(function(e){return{hide:!e.message,message:e.message}},function(e){return{onDismiss:function(){e({type:g.HIDE_MESSAGE})}}})(C),j="https://gateway.marvel.com",y="191e309068f42c22cf8dac1c9cd641bc",v={fetchBySearchText:function(e){var t="".concat(j,"/v1/public/comics?title=").concat(e,"&apikey=").concat(y);return fetch(t,{}).then(function(e){return e.json()})},fetchById:function(e){var t="".concat(j,"/v1/public/comics/").concat(e,"?apikey=").concat(y);return fetch(t,{}).then(function(e){return e.json()})}},x=v,A=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).textInput=a.a.createRef(),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=e.props;return t.hide?null:a.a.createElement(E.l,null,a.a.createElement(E.i,{md:10,style:{marginBottom:"10px"}},a.a.createElement(E.k,{type:"text",name:"searchText",id:"searchText",placeholder:"Search Comics By Title",innerRef:this.textInput})),a.a.createElement(E.i,{md:2},a.a.createElement(E.b,{onClick:function(){t.doSearch(e.textInput.current.value)}},"Search")))}}]),t}(a.a.Component),T=Object(S.b)(function(e){return{hide:!!e.currentComic}},function(e){return{doSearch:function(t){t?(e(function(e){return{type:g.FETCH_RESULTS,searchText:e}}(t)),x.fetchBySearchText(t).then(function(n){n.data?0===n.data.results.length?e(R("No results were returned for search text: "+t,"warning")):(console.log("Results: ",n.data.results),e(function(e){return{type:g.RENDER_SEARCH_RESULTS,results:e}}(n.data.results))):(e(R("An error has occurred","danger")),console.warn("No Results: ",n))})):e(R("You must enter search text","danger"))}}})(A),H=function(e){var t=e.comic,n=e.onClick;return a.a.createElement(E.i,{md:4,style:{marginTop:"10px"}},a.a.createElement(E.c,{style:{cursor:"pointer"}},t.images&&t.images.length>0&&a.a.createElement(E.e,{top:!0,width:"100%",src:t.images[0].path+"."+t.images[0].extension,onClick:function(){return n(t.id)}}),t.images&&0===t.images.length&&a.a.createElement(E.d,{onClick:function(){return n(t.id)}},a.a.createElement(E.g,null,t.title))))},k=function(e){var t=e.rowData,n=e.onClick;return a.a.createElement(E.l,{style:{marginTop:"10px"}},t.map(function(e,t){return a.a.createElement(H,{key:t,comic:e,onClick:n})}))},L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.results;return e.hide?null:a.a.createElement(E.l,{style:{marginBottom:"10px"}},a.a.createElement(E.i,null,a.a.createElement(E.j,{fluid:!0,style:{paddingLeft:0}},t.reduce(function(e,t,n){return n%3===0&&e.push([]),e[e.length-1].push(t),e},[]).map(function(t,n){return a.a.createElement(k,{key:n,rowData:t,onClick:e.onComicClick})}))))}}]),t}(a.a.Component),w=Object(S.b)(function(e){return{hide:0===e.currentSearchResults.length||!!e.currentComic,results:e.currentSearchResults}},function(e){return{onComicClick:function(t){x.fetchById(t).then(function(t){0===t.data.results.length?e(O(null)):(console.log("Single result: ",t.data.results[0]),e(O(t.data.results[0])))})}}})(L),G=n(57),B=n.n(G),D=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(this.props.hide)return null;var e=this.props,t=e.comic,n=t.images&&t.images.length>0?t.images[0].path+"."+t.images[0].extension:null,r=function(e){return e?(console.log("Date: ",e),new Date(e.date).toLocaleDateString()):""}(t.dates&&t.dates.length>0?t.dates[0]:null);return a.a.createElement(E.l,{style:{marginBottom:"10px"}},a.a.createElement(E.j,null,a.a.createElement(E.l,null,a.a.createElement(E.i,{md:{offset:10,size:2},style:{marginBottom:"20px"}},a.a.createElement(E.b,{onClick:e.showSearch},"Back to Results"))),a.a.createElement(E.l,null,a.a.createElement(E.i,{md:{size:6,offset:3}},a.a.createElement(E.c,null,n&&a.a.createElement(E.e,{top:!0,width:"100%",src:n}),!n&&a.a.createElement(E.d,null,a.a.createElement(E.h,null,t.title)),a.a.createElement(E.d,null,a.a.createElement(E.h,{style:{marginBottom:"15px"}},t.title),a.a.createElement(E.f,null,B()(t.description||"")),r&&a.a.createElement(E.g,{style:{marginTop:"5px"}},a.a.createElement("strong",null,"Published:")," ",r)))))))}}]),t}(a.a.Component),U=Object(S.b)(function(e){return{hide:!e.currentComic,comic:e.currentComic}},function(e){return{showSearch:function(){e({type:g.SHOW_SEARCH_PAGE})}}})(D),I=Object(h.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SHOW_SEARCH_PAGE:return Object(d.a)({},e,{message:null,currentComic:null});case g.SHOW_SINGLE_RESULT_PAGE:return Object(d.a)({},e,{message:null,currentComic:t.comic});case g.RENDER_SEARCH_RESULTS:return Object(d.a)({},e,{message:null,currentSearchResults:t.results||[]});case g.CLEAR_SEARCH_RESULTS:return Object(d.a)({},e,{message:null,currentSearchResults:[]});case g.FETCH_RESULTS:return Object(d.a)({},e,{message:null,searchText:t.searchText});case g.SHOW_MESSAGE:return Object(d.a)({},e,{message:{text:t.text,level:t.level}});case g.HIDE_MESSAGE:return Object(d.a)({},e,{message:null});default:return e}},Object(h.a)(f.a,Object(p.createLogger)())),W=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(S.a,{store:I},a.a.createElement(E.j,{fluid:!0},a.a.createElement(E.l,{style:{paddingTop:"20px",paddingBottom:"10px",marginBottom:"30px",backgroundColor:"#444444",color:"#FFFFFF"}},a.a.createElement(E.i,null,a.a.createElement("h3",null,"Marvel Comics Search App"),a.a.createElement("h6",null,"Search 1000s of Marvel Comic titles"))),a.a.createElement(E.j,null,a.a.createElement(_,null),a.a.createElement(T,null),a.a.createElement(w,null),a.a.createElement(U,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(95);l.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,2,1]]]);
//# sourceMappingURL=main.c7a179a0.chunk.js.map