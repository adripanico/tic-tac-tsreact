(this["webpackJsonptic-tac-tsreact"]=this["webpackJsonptic-tac-tsreact"]||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),s=n(13),o=n(5),l=(n(28),n(22)),u=n(8),h=n(10),v=n(9),m=n(6),d=n(11),p=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t="square"+(this.props.highlight?" highlight":"")+(this.props.pointer&&void 0===this.props.value?" clickable":"");return r.a.createElement("button",{className:t,onClick:function(){return e.props.onClick()}},this.props.value)}}]),t}(r.a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(p,{highlight:void 0!==this.props.winnerLine&&this.props.winnerLine.includes(e),key:e,pointer:void 0===this.props.winnerLine,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board"},Array(9).fill(0).map((function(t,n){return e.renderSquare(n)})))}}]),t}(r.a.Component),b=(n(29),function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.a)(this,t),(e=Object(h.a)(this,Object(v.a)(t).call(this,n))).state={currentMove:0,history:[{clicked:void 0,squares:Array(9).fill(void 0)}],xIsNext:!0},e}return Object(d.a)(t,e),Object(m.a)(t,null,[{key:"getWinner",value:function(e){var n=t.getWinnerLine(e);return n?e.squares[n[0]]:null}},{key:"getWinnerLine",value:function(e){for(var t=0,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<n.length;t++){var a=n[t],r=Object(l.a)(a,3),c=r[0],i=r[1],s=r[2];if(e.squares[c]&&e.squares[c]===e.squares[i]&&e.squares[i]===e.squares[s])return a}}}]),Object(m.a)(t,[{key:"handleClick",value:function(e){var n=this.state.history[this.state.currentMove],a=n.squares.slice();if(!t.getWinner(n)&&!a[e]){var r=this.state.history.slice(0,this.state.currentMove+1);r[this.state.currentMove].clicked=e,a[e]=this.state.xIsNext?"X":"O",this.setState({currentMove:this.state.currentMove+1,history:r.concat({clicked:void 0,squares:a}),xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({currentMove:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,n=this,a=this.state.history.slice(),c=a.length-1,i=t.getWinner(a[c]),s=a.map((function(e,t){var s="#".concat(t," ");0===t&&0!==n.state.currentMove?s+="Game started":i&&t===c?s+="Game ended with a victory for ".concat(i):i||9!==t?t===n.state.currentMove&&(s+="Current move"):s+="Game ended with a draw";var o=t!==n.state.currentMove?"enabled":"disabled";return r.a.createElement("li",{key:t},r.a.createElement("p",{className:o,onClick:function(){return n.jumpTo(t)}},s),r.a.createElement("p",{className:"mov-row-col-desc"},function(e){if(void 0!==e.clicked){var t=e.squares.filter((function(e){return!!e})).length%2===0?"X":"O",n=Math.floor(e.clicked/3),a=e.clicked%3;return"".concat(t," marked row ").concat(n+1,", column ").concat(a+1)}}(a[t])))})),o=t.getWinner(a[this.state.currentMove]);return e=o?"Game ended! ".concat(o," won!"):9===this.state.currentMove?"Game ended! It's a draw!":"Next player: ".concat(this.state.xIsNext?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement(f,{winnerLine:t.getWinnerLine(a[this.state.currentMove]),squares:a[this.state.currentMove].squares,onClick:function(e){return n.handleClick(e)}}),r.a.createElement("div",{className:"game-info"},r.a.createElement("h3",null,e),r.a.createElement("ul",null,s)))}}]),t}(r.a.Component)),k=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/"},"TTT")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/about"},"About")))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/about"},r.a.createElement("h2",null,"About")),r.a.createElement(o.a,{path:"/"},r.a.createElement("h2",null,"Tic Tac TSReact!"),r.a.createElement(b,null)))))};n(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.9758a4bd.chunk.js.map