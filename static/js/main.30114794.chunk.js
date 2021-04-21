(this["webpackJsonpreact-chess-api"]=this["webpackJsonpreact-chess-api"]||[]).push([[0],{116:function(e,t,n){},118:function(e,t,n){},212:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),s=n.n(c),i=n(8),o=n.p+"static/media/chessboard.f4a57de1.jpg",l=n(246),u=n(214),b=n(215),j=n(258),h=n(255),f=n(249),d=n(250),p=n(1),g=function(e){var t=e.getUsername,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(p.jsxs)("div",{style:{display:"inline-block",height:"100%"},children:[Object(p.jsx)(l.a,{item:!0,align:"center",style:{paddingTop:"5vh"},children:Object(p.jsxs)(u.a,{elevation:10,style:{padding:80,height:"50vh",width:280,direction:"column",alignItems:"center",justify:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(p.jsx)(b.a,{variant:"h5",style:{fontFamily:"system-ui"},children:"Chess.com Stats Viewer"}),Object(p.jsx)(l.a,{align:"center",style:{padding:"30px"},children:Object(p.jsx)(j.a,{variant:"rounded",style:{height:"250px",width:"250px"},src:o})}),Object(p.jsx)(b.a,{variant:"body1",style:{fontFamily:"system-ui",paddingBottom:"20px"},children:Object(p.jsx)("b",{children:"Enter a chess.com username"})}),Object(p.jsx)(h.a,{label:"Username",placeholder:"Enter username",fullWidth:!0,required:!0,onChange:function(e){s(e.target.value)}}),Object(p.jsx)(f.a,{type:"submit",variant:"contained",style:{margin:"8px 0",backgroundColor:"#257eff",textColor:"#ffff"},fullWidth:!0,onClick:function(){t(c)},children:Object(p.jsx)(b.a,{style:{color:"#ffffff",fontWeight:"bold",fontFamily:"system-ui"},children:"CHECK!"})})]})}),Object(p.jsxs)(l.a,{item:!0,style:{padding:"40px"},align:"center",children:[Object(p.jsxs)(b.a,{style:{fontWeight:"bold",color:"#ffffff",fontFamily:"system-ui"},children:["Developed by"," ",Object(p.jsx)(d.a,{href:"https://github.com/L3thal14",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF",fontFamily:"system-ui"},children:"Karthik"})]}),Object(p.jsxs)(b.a,{style:{fontWeight:"bold",color:"#ffffff",marginBottom:"25px",fontFamily:"system-ui"},children:[" ","Checkout the project on"," ",Object(p.jsx)(d.a,{href:"https://github.com/L3thal14/chess-stats",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF",fontFamily:"system-ui"},children:"Github"})]}),Object(p.jsx)(b.a,{style:{fontWeight:"bold",color:"#ffffff",fontSize:"14px",fontFamily:"system-ui"},children:"Chess.com Stats Viewer is not affiliated with or endorsed by Chess.com."}),Object(p.jsxs)(b.a,{style:{fontWeight:"bold",color:"#ffffff",fontSize:"14px",fontFamily:"system-ui"},children:["It just utilises the"," ",Object(p.jsx)(d.a,{href:" https://www.chess.com/news/view/published-data-api",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF",fontFamily:"system-ui"},children:"chess.com public API"})," ","to get user stats."]})]})]})},m=n.p+"static/media/background.2e9cc46a.jpeg",x=(n(116),n(7)),O=n.n(x),y=n(10),v=n(66),w=n(6),k=n(24),F=n.n(k),S=n(252),C=n(251),I=n(253),W=n(254),B=n(257),_=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.chess.com/pub").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error for ".concat(t),e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/player/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();n(118);function D(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],h=Object(a.useState)(""),f=Object(i.a)(h,2),g=f[0],m=f[1],x=Object(a.useState)(""),v=Object(i.a)(x,2),w=v[0],k=v[1],_=function(){var t=Object(y.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("".concat(e.streamer.username));case 2:n=t.sent,u(n.name),m(n.avatar),k(n.title),c(!0);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){_()})),Object(p.jsx)(p.Fragment,{children:r?Object(p.jsx)("div",{className:"item",children:Object(p.jsx)(C.a,{className:e.classes.card,style:{height:"50vh",width:"40vh"},align:"center",children:Object(p.jsxs)(S.a,{href:e.streamer.twitch_url,target:"_blank",rel:"noreferrer",children:[Object(p.jsx)(j.a,{variant:"square",className:e.classes.avatar,src:g,style:{height:"100px",width:"100px"}}),Object(p.jsxs)(I.a,{className:e.classes.content,children:[Object(p.jsx)(b.a,{className:e.classes.heading,variant:"h6",gutterBottom:!0,children:e.streamer.username}),Object(p.jsxs)(B.a,{alignItems:"center",display:"flex",children:[w?Object(p.jsx)(C.a,{style:{width:"fit-content",height:"fit-content",backgroundColor:"red",padding:"2%",marginBottom:"8px"},children:Object(p.jsx)(b.a,{variant:"caption",className:e.classes.title,children:w})}):Object(p.jsx)("p",{}),Object(p.jsx)(b.a,{style:{padding:"10px",height:"40px"},className:e.classes.subheading,variant:"h6",gutterBottom:!0,children:l})]}),Object(p.jsx)(b.a,{style:{display:"block"},className:e.classes.subheading,variant:"caption",children:Object(p.jsx)(d.a,{href:"".concat(e.streamer.url),color:"inherit",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF"},children:"Chess.com Profile"})}),Object(p.jsx)(W.a,{className:e.classes.divider,light:!0}),Object(p.jsxs)(b.a,{className:e.classes.subheading,variant:"caption",children:[Object(p.jsx)("span",{className:"dot Blink"}),"\xa0 LIVE"]})]})]})})}):Object(p.jsx)(F.a,{type:"spin",color:"#257EFF",height:70,width:70})})}var N=D=Object(w.a)((function(e){return{card:{width:"250px",height:"300px",margin:"5px",transition:"0.3s",background:"rgba(0,0,0,0.3)",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.2)","&:hover":{boxShadow:"0 16px 70px -12.125px rgba(0,0,0,0.7)"}},media:{height:10,paddingTop:"56.25%"},content:{textAlign:"left",padding:3*e.spacing.unit},divider:{margin:"".concat(3*e.spacing.unit,"px 0")},heading:{fontWeight:"bold",color:"#ffffff"},title:{fontWeight:"bold",color:"#ffffff"},subheading:{lineHeight:1.6,color:"rgb(255 255 255 / 65%)"},avatar:{margin:"20px",display:"inline-block",border:"2px solid white","&:not(:first-of-type)":{marginLeft:-e.spacing.unit}}}}))(D),G=function(){var e=Object(a.useState)([{username:"",avatar:"",twitch_url:"",url:"",is_live:!1}]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1],u=function(){var e=Object(y.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.chess.com/pub/streamers"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error for streamers endpoint",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();function b(){return(b=Object(y.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:t=e.sent,n=t.streamers,r(n),l(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){b.apply(this,arguments)}()})),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(v.b,{itemsToShow:3,renderArrow:function(e){e.type;var t=e.onClick,n=(v.a.PREV,"\ud83d\udc51");return Object(p.jsx)(f.a,{onClick:t,children:n})},children:o?n.map((function(e){if(e.is_live)return Object(p.jsx)(N,{streamer:e})})):Object(p.jsx)(F.a,{type:"spin",color:"#257EFF",height:70,width:70})})})},L=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/player/".concat(t,"/is-online"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=n.p+"static/media/avatarimage.ea9eaee1.png",U=n(52),M=n.n(U),T=function(e){var t=e.profile,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),j=u[0],h=u[1],f=Object(a.useState)(""),d=Object(i.a)(f,2),g=d[0],m=d[1],x=function(){var e=Object(y.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.country));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error for streamers endpoint",e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(y.a)(O.a.mark((function e(){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return n=e.sent,s(n.name),e.next=6,L("".concat(t.username));case 6:a=e.sent,h(a.online),m(M()(M.a.unix(t.last_online)).fromNow());case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v()})),Object(p.jsxs)(l.a,{container:!0,spacing:2,alignItems:"center",align:"center",justify:"center",direction:"row",style:{marginBottom:"40px"},children:[t.avatar?Object(p.jsx)(l.a,{xs:4,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)("img",{src:t.avatar,alt:"chess.com profile picture"})}):Object(p.jsx)(l.a,{xs:4,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)("img",{src:R,alt:"chess.com profile picture",style:{height:"200px",width:"200px"}})}),Object(p.jsxs)(l.a,{xs:2,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[t.name&&Object(p.jsx)(b.a,{variant:"body1",style:{fontWeight:600},children:t.name.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),t.location?Object(p.jsxs)(b.a,{variant:"body1",style:{fontWeight:600},children:[" ",void 0!=t.location&&t.location.replace(/\b\w/g,(function(e){return e.toUpperCase()})),", ",c.replace(/\b\w/g,(function(e){return e.toUpperCase()}))]}):Object(p.jsx)(b.a,{variant:"body1",style:{fontWeight:600},children:c.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}),Object(p.jsx)(l.a,{xs:2,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:j?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(b.a,{variant:"body2",style:{color:"green"},children:"Currently Online"})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{variant:"body2",style:{color:"red"},children:"Currently Offline"}),Object(p.jsxs)(b.a,{variant:"body1",children:["Last seen ",Object(p.jsx)("br",{})," ",g," "]})]})}),Object(p.jsxs)(l.a,{xs:2,item:!0,align:"center",spacing:0,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Followers"}),Object(p.jsx)(b.a,{variant:"body1",children:t.followers})]}),Object(p.jsxs)(l.a,{xs:2,item:!0,align:"center",spacing:0,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Membership status"}),Object(p.jsx)(b.a,{variant:"body1",children:t.status.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]})]})},A=function(e){var t=e.rating;return Object(p.jsxs)(l.a,{container:!0,spacing:2,direction:"row",style:{marginBottom:"40px"},children:[t.chess_blitz&&Object(p.jsxs)(l.a,{xs:4,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Blitz Rating"}),Object(p.jsxs)(b.a,{variant:"body1",children:["Current: ",t.chess_blitz.last.rating," "]}),Object(p.jsxs)(b.a,{variant:"body1",children:["Best: ",t.chess_blitz.best.rating]})]}),t.chess_bullet&&Object(p.jsxs)(l.a,{xs:4,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Bullet Rating"}),Object(p.jsxs)(b.a,{variant:"body1",children:["Current: ",t.chess_bullet.last.rating," "]}),Object(p.jsxs)(b.a,{variant:"body1",children:["Best: ",t.chess_bullet.best.rating]})]}),t.chess_rapid&&Object(p.jsxs)(l.a,{xs:4,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Rapid Rating"}),Object(p.jsxs)(b.a,{variant:"body1",children:["Current: ",t.chess_rapid.last.rating," "]}),Object(p.jsxs)(b.a,{variant:"body1",children:["Best: ",t.chess_rapid.best.rating]})]})]})},z=["January","February","March","April","May","June","July","August","September","October","November","December"],P=function(e,t,n){for(var a,r=e.filter((function(e){return e[n].username.toLowerCase()===t.toLowerCase()})).map((function(e){var t="white"===n?/1\. (.+?) /:/1\.\.\. (.+?) /,a=e.pgn.match(t);return null==a?"(none)":a[1]})),c=1,s=0,i=0;i<r.length;i++){for(var o=i;o<r.length;o++)r[i]===r[o]&&s++,c<s&&(c=s,a=r[i]);s=0}var l=c/r.length;return"".concat(a," (").concat(Math.round(100*l),"%)")},J=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],j=o[1],h=Object(a.useState)(""),f=Object(i.a)(h,2),d=f[0],g=f[1],m=Object(a.useState)(""),x=Object(i.a)(m,2),O=x[0],y=x[1];return Object(a.useEffect)((function(){var t=function(e){var t=e.sort((function(e,t){return e.end_time-t.end_time})),n=null==t[0]?new Date(0):new Date(1e3*t[0].end_time),a=null==t[t.length-1]?new Date(0):new Date(1e3*t[t.length-1].end_time),r=n.getDate(),c=z[n.getMonth()],s=n.getFullYear(),i=a.getDate(),o=z[a.getMonth()],l=a.getFullYear();return{firstgame:{firstGame:"".concat(r," ").concat(c," ").concat(s)},lastgame:{lastGame:"".concat(i," ").concat(o," ").concat(l)}}}(e.gamesdb);c(t.firstgame.firstGame),j(t.lastgame.lastGame),g(P(e.gamesdb,e.profile.username,"white")),y(P(e.gamesdb,e.profile.username,"black"))}),[]),Object(p.jsxs)(l.a,{container:!0,spacing:2,direction:"row",style:{marginBottom:"40px"},children:[Object(p.jsxs)(l.a,{xs:3,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Number of Games"}),Object(p.jsx)(b.a,{variant:"body1",children:e.gamesdb.length})]}),Object(p.jsxs)(l.a,{xs:3,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"First Game"}),Object(p.jsx)(b.a,{variant:"body1",children:r})]}),Object(p.jsxs)(l.a,{xs:3,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Latest Game"}),Object(p.jsx)(b.a,{variant:"body1",children:u})]}),Object(p.jsxs)(l.a,{xs:3,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsx)(b.a,{variant:"body2",style:{fontWeight:600},children:"Most Played First Move"}),Object(p.jsxs)(b.a,{variant:"body1",children:["\u2654 ",d]}),Object(p.jsxs)(b.a,{variant:"body1",children:["\u265a ",O]})]})]})},V=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),u=(o[0],o[1]),j=Object(a.useState)(""),h=Object(i.a)(j,2),f=h[0],d=h[1],g=Object(a.useState)(""),m=Object(i.a)(g,2),x=m[0],v=m[1],w=Object(a.useState)(),k=Object(i.a)(w,2),F=k[0],S=k[1],C=Object(a.useState)(""),I=Object(i.a)(C,2),W=I[0],B=I[1],_=Object(a.useState)(""),D=Object(i.a)(_,2),N=D[0],G=D[1],L=Object(a.useState)(""),U=Object(i.a)(L,2),M=U[0],T=U[1],A=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,E(t);case 3:n=e.sent,console.log(n),G(n.avatar),T(n.username),c(n.name),u(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){"win"==e.gamesdb[e.gamesdb.length-1].white.result?d("Won"):d("Lost"),e.gamesdb[e.gamesdb.length-1].white.username.toLowerCase()!=e.profile.username?A(e.gamesdb[e.gamesdb.length-1].white.username):A(e.gamesdb[e.gamesdb.length-1].black.username),e.gamesdb[e.gamesdb.length-1].white.username.toLowerCase()!=e.profile.username?S(e.gamesdb[e.gamesdb.length-1].white.rating):S(e.gamesdb[e.gamesdb.length-1].black.rating),"win"==e.gamesdb[e.gamesdb.length-1].white.result?v(e.gamesdb[e.gamesdb.length-1].black.result):v(e.gamesdb[e.gamesdb.length-1].white.result),B(e.gamesdb[e.gamesdb.length-1].time_class)}),[]),Object(p.jsxs)(l.a,{container:!0,spacing:2,direction:"row",style:{marginBottom:"40px"},children:[Object(p.jsx)(l.a,{item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)(b.a,{variant:"h6",style:{fontWeight:600},children:"Latest Game Played"})}),N?Object(p.jsx)(l.a,{item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)("img",{src:N,alt:"chess.com profile picture"})}):Object(p.jsx)(l.a,{item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)("img",{src:R,alt:"chess.com profile picture",style:{height:"200px",width:"200px"}})}),Object(p.jsxs)(l.a,{item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:[Object(p.jsxs)(b.a,{variant:"body1",children:[Object(p.jsx)("b",{children:"Opponent:"})," ",M]}),r&&Object(p.jsxs)(b.a,{variant:"body1",children:[Object(p.jsx)("b",{children:"Name:"})," ",r.replace(/\b\w/g,(function(e){return e.toUpperCase()}))]}),Object(p.jsxs)(b.a,{variant:"body1",children:[Object(p.jsx)("b",{children:"Result:"})," ",f,"(",x.replace(/\b\w/g,(function(e){return e.toUpperCase()})),")"]}),Object(p.jsxs)(b.a,{variant:"body1",children:[Object(p.jsx)("b",{children:"Game Type:"})," ",W.replace(/\b\w/g,(function(e){return e.toUpperCase()}))]}),Object(p.jsxs)(b.a,{variant:"body1",children:[Object(p.jsx)("b",{children:"Opponent rating:"})," ",F]})]})]})},H=n(64);H.defaults.global.legend.position="left";var K=function(e){var t=[],n=[],r=Object(a.useState)([]),c=Object(i.a)(r,2),s=(c[0],c[1],Object(a.useState)({})),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(a.useState)(!1),h=Object(i.a)(j,2),f=h[0],d=h[1],g=["checkmated","resigned","timeout","stalemate","abandoned","timevsinsufficient","insufficient","repetition"],m=["Checkmate","Resignation","Timeout","Stalemate","Game Abandoned","Time vs Insufficient Material","Insufficient Material","Repetition"],x=function(){var e=Object(y.a)(O.a.mark((function e(t,a){var r,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r={},c=0;c<t.length;c++)s=t[c],r[s]=r[s]?r[s]+1:1;n.push(r["".concat(a)]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){!function(){e.gamesdb.map((function(e){"win"==e.white.result?t.push(e.black.result):t.push(e.white.result)}));for(var a=0;a<g.length;a++)x(t,g[a]);u({labels:m,datasets:[{label:"Game Results",data:n,backgroundColor:["#36a2eb","#ff9f3f","#ff6484","#4bc0c0","#ffcd56","#cacbcf","#9967ff","#93eb36","#eb36d3"]}]}),d(!0)}()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{variant:"h6",align:"right",style:{marginRight:"80px",fontWeight:600},children:"Result of Games"}),f?Object(p.jsx)(H.Doughnut,{data:l,width:100,height:50,options:{maintainAspectRatio:!1,legend:{position:"left",labels:{boxWidth:10}}}}):Object(p.jsx)(F.a,{type:"spin",color:"#257EFF",height:70,width:70})]})},Y=function(e){return Object(p.jsxs)(l.a,{container:!0,spacing:2,direction:"row",style:{marginBottom:"40px"},children:[Object(p.jsx)(l.a,{xs:6,item:!0,align:"center",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)(K,{gamesdb:e.gamesdb})}),Object(p.jsx)(l.a,{xs:6,item:!0,align:"left",spacing:2,alignItems:"center",justify:"center",children:Object(p.jsx)(V,{profile:e.profile,gamesdb:e.gamesdb})})]})},q=n(65),Q=function(){var e=Object(y.a)(O.a.mark((function e(t){var n,a,r,c,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/player/".concat(t,"/games/archives"));case 2:n=e.sent,a=n.archives.map((function(e){return e.replace("https://api.chess.com/pub","")})).reverse(),r=[],c=0;case 6:if(!(c<a.length)){e.next=15;break}return s=a[c],e.next=10,_(s);case 10:i=e.sent,r=[].concat(Object(q.a)(r),Object(q.a)(i.games));case 12:c++,e.next=6;break;case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://api.chess.com/pub").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error for ".concat(t),e.t0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(y.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("/player/".concat(t,"/stats"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var $=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(),o=Object(i.a)(s,2),l=o[0],b=o[1],j=Object(a.useState)(!1),h=Object(i.a)(j,2),f=h[0],d=h[1],g=Object(a.useState)({}),m=Object(i.a)(g,2),x=m[0],v=m[1],w=function(){var t=Object(y.a)(O.a.mark((function t(){var n,a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e.uname);case 2:return n=t.sent,b(n),t.next=6,E(e.uname);case 6:return a=t.sent,c(a),t.next=10,Z(e.uname);case 10:r=t.sent,v(r),d(!0);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()}),[]),Object(p.jsx)(p.Fragment,{children:f?Object(p.jsxs)(u.a,{elevation:10,style:{padding:40,marginTop:40,minHeight:"350px",width:"950px",direction:"column",alignItems:"center",justify:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(p.jsx)(T,{profile:r}),Object(p.jsx)(A,{rating:x}),Object(p.jsx)(J,{profile:r,gamesdb:l}),Object(p.jsx)(Y,{profile:r,gamesdb:l})]}):Object(p.jsx)(F.a,{type:"spin",color:"#257EFF",height:70,width:70})})};var ee=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],j=o[1],h=function(){var t=Object(y.a)(O.a.mark((function t(){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e.uname);case 2:n=t.sent,j(n.url),c(n.name),console.log(r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{item:!0,style:{paddingTop:"60px",paddingBottom:"40px"},align:"center",children:Object(p.jsxs)(b.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:"bold",color:"#ffffff"},children:[r?Object(p.jsx)(d.a,{href:u,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF"},children:r.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}):Object(p.jsx)(d.a,{href:u,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF"},children:e.uname})," ","Stats Sheet"]})}),Object(p.jsxs)(l.a,{container:!0,direction:"column",spacing:24,children:[Object(p.jsx)(l.a,{item:!0,align:"center",spacing:0,alignItems:"center",justify:"center",children:Object(p.jsx)($,{uname:e.uname})}),Object(p.jsx)(l.a,{item:!0,style:{paddingTop:"60px"},align:"center",children:Object(p.jsx)(b.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:"bold",color:"#ffffff"},children:Object(p.jsx)(d.a,{href:"/",style:{textDecoration:"none",color:"#ffff",fontFamily:"system-ui"},children:"Generate a new sheet"})})}),Object(p.jsx)(l.a,{item:!0,style:{paddingTop:"60px"},align:"center",children:Object(p.jsx)(b.a,{variant:"h5",gutterBottom:!0,style:{fontWeight:"bold",color:"#ffffff"},children:"CURRENTLY STREAMING"})}),Object(p.jsx)(l.a,{item:!0,style:{padding:"40px"},align:"center",children:Object(p.jsx)(G,{})}),Object(p.jsxs)(l.a,{item:!0,style:{padding:"40px"},align:"center",children:[Object(p.jsxs)(b.a,{style:{fontWeight:"bold",color:"#ffffff"},children:["Developed by"," ",Object(p.jsx)(d.a,{href:"https://github.com/L3thal14",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF"},children:"Karthik"})]}),Object(p.jsxs)(b.a,{style:{fontWeight:"bold",color:"#ffffff",marginBottom:"25px"},children:[" ","Checkout the project on"," ",Object(p.jsx)(d.a,{href:"https://github.com/L3thal14/chess-stats",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF"},children:"Github"})]}),Object(p.jsx)(b.a,{style:{fontWeight:"bold",color:"#ffffff",fontSize:"14px"},children:"Chess.com Stats Viewer is not affiliated with or endorsed by Chess.com."}),Object(p.jsxs)(b.a,{style:{fontWeight:"bold",color:"#ffffff",fontSize:"14px"},children:["It just utilises the"," ",Object(p.jsx)(d.a,{href:" https://www.chess.com/news/view/published-data-api",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#059BFF"},children:"chess.com public API"})," ","to get user stats."]})]})]})]})};var te=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(p.jsx)("div",{className:"app",style:{backgroundImage:"url(".concat(m,")")},children:n?Object(p.jsx)(ee,{uname:n}):Object(p.jsx)(g,{getUsername:function(e){r(e),console.log(typeof n)}})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(te,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.30114794.chunk.js.map