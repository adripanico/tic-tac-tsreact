(this["webpackJsonptic-tac-tsreact"]=this["webpackJsonptic-tac-tsreact"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),c=n.n(i),s=(n(14),n(8)),o=n(2),u=n(4),l=n(3),h=n(1),v=n(5),d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="square"+(this.props.highlight?" highlight":"")+(this.props.pointer&&void 0===this.props.value?" clickable":"");return a.a.createElement("button",{className:t,onClick:function(){return e.props.onClick()}},this.props.value)}}]),t}(a.a.Component),m=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(d,{highlight:void 0!==this.props.winnerLine&&this.props.winnerLine.includes(e),key:e,pointer:void 0===this.props.winnerLine,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"board"},Array(9).fill(0).map((function(t,n){return e.renderSquare(n)})))}}]),t}(a.a.Component),p=(n(15),function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this,n))).state={currentMove:0,history:[{clicked:void 0,squares:Array(9).fill(void 0)}],xIsNext:!0},e}return Object(v.a)(t,e),Object(h.a)(t,null,[{key:"getWinner",value:function(e){var n=t.getWinnerLine(e);return n?e.squares[n[0]]:null}},{key:"getWinnerLine",value:function(e){for(var t=0,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<n.length;t++){var r=n[t],a=Object(s.a)(r,3),i=a[0],c=a[1],o=a[2];if(e.squares[i]&&e.squares[i]===e.squares[c]&&e.squares[c]===e.squares[o])return r}}}]),Object(h.a)(t,[{key:"handleClick",value:function(e){var n=this.state.history[this.state.currentMove],r=n.squares.slice();if(!t.getWinner(n)&&!r[e]){var a=this.state.history.slice(0,this.state.currentMove+1);a[this.state.currentMove].clicked=e,r[e]=this.state.xIsNext?"X":"O",this.setState({currentMove:this.state.currentMove+1,history:a.concat({clicked:void 0,squares:r}),xIsNext:!this.state.xIsNext})}}},{key:"jumpTo",value:function(e){this.setState({currentMove:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,n=this,r=this.state.history.slice(),i=r.length-1,c=t.getWinner(r[i]),s=r.map((function(e,t){var s="#".concat(t," ");0===t&&0!==n.state.currentMove?s+="Game started":c&&t===i?s+="Game ended with a victory for ".concat(c):c||9!==t?t===n.state.currentMove&&(s+="Current move"):s+="Game ended with a draw";var o=t!==n.state.currentMove?"enabled":"disabled";return a.a.createElement("li",{key:t},a.a.createElement("p",{className:o,onClick:function(){return n.jumpTo(t)}},s),a.a.createElement("p",{className:"mov-row-col-desc"},function(e){if(void 0!==e.clicked){var t=e.squares.filter((function(e){return!!e})).length%2===0?"X":"O",n=Math.floor(e.clicked/3),r=e.clicked%3;return"".concat(t," marked row ").concat(n+1,", column ").concat(r+1)}}(r[t])))})),o=t.getWinner(r[this.state.currentMove]);return e=o?"Game ended! ".concat(o," won!"):9===this.state.currentMove?"Game ended! It's a draw!":"Next player: ".concat(this.state.xIsNext?"X":"O"),a.a.createElement("div",{className:"game"},a.a.createElement(m,{winnerLine:t.getWinnerLine(r[this.state.currentMove]),squares:r[this.state.currentMove].squares,onClick:function(e){return n.handleClick(e)}}),a.a.createElement("div",{className:"game-info"},a.a.createElement("h3",null,e),a.a.createElement("ul",null,s)))}}]),t}(a.a.Component)),f=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Tic Tac TSReact!"),a.a.createElement(p,null))};n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.66ad80bb.chunk.js.map