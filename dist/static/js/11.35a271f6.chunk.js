(this["webpackJsonpoort-frontend"]=this["webpackJsonpoort-frontend"]||[]).push([[11],{1103:function(t,e,n){"use strict";n.r(e);var r,c,o,a,i,s,u,b,j=n(8),l=n(0),d=n(2),f=n(4),O=n(112),p=n(58),x=n(16),h=n(330),v=n(1),m=Object(f.e)(d.l)(r||(r=Object(j.a)(["\n  background: url('/images/voting/bg.png');\n  padding-bottom: 40px;\n  padding-top: 40px;\n"]))),g=function(){var t=Object(x.b)().t;return Object(v.jsx)(m,{children:Object(v.jsx)(h.a,{children:Object(v.jsx)(d.L,{alignItems:"center",justifyContent:"space-between",children:Object(v.jsxs)(d.l,{pr:"32px",children:[Object(v.jsx)(d.N,{as:"h1",scale:"xxl",color:"#fff",mb:"16px",children:t("GOVERNANCE")}),Object(v.jsx)(d.N,{as:"h3",scale:"lg",mb:"16px",color:"#fff",children:t("Have your say in the future of the OortSwap Ecosystem")}),Object(v.jsx)(d.m,{style:{background:"url('/images/voting/button.png')",backgroundSize:"100% 100%"},startIcon:Object(v.jsx)(d.jb,{color:"currentColor",width:"24px"}),as:p.a,to:"/voting/proposal/create",children:t("Make a Proposal")})]})})})})},C=n(9),w=n(7),y=n(125),I=n(153),S=n(334),L=n(716),E=n(111),k=n(704),N=n(717),D=n.n(N),T=n(706),A=Object(f.e)(d.L)(c||(c=Object(j.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(t){return t.theme.colors.cardBorder})),M=f.e.div(o||(o=Object(j.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),A),P=function(){return Object(v.jsx)(M,{children:D()(T.d).map((function(t){return Object(v.jsxs)(A,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(v.jsxs)(d.l,{style:{flex:1},children:[Object(v.jsx)(d.nb,{height:"21px",width:"70%",mb:"4px"}),Object(v.jsx)(d.nb,{height:"21px",width:"30%",mb:"4px"}),Object(v.jsx)(d.nb,{height:"21px",width:"40%"})]}),Object(v.jsx)(d.nb,{height:"32px",width:"32px"})]},t)}))})},B=f.e.div(a||(a=Object(j.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(t){return t.theme.colors.input})),F=function(t){switch(t){case E.b.COMMUNITY:return 1;case E.b.ALL:return 2;case E.b.CORE:default:return 0}},V=function(t){var e=t.proposalType,n=t.onTypeChange,r=Object(x.b)().t;return Object(v.jsx)(B,{children:Object(v.jsxs)(d.sb,{activeIndex:F(e),onItemClick:function(t){n(function(t){switch(t){case 1:return E.b.COMMUNITY;case 2:return E.b.ALL;default:return E.b.CORE}}(t))},children:[Object(v.jsx)(d.rb,{children:Object(v.jsxs)(d.L,{alignItems:"center",children:[Object(v.jsx)(d.Fb,{color:"currentColor",mr:"4px"}),r("Core")]})}),Object(v.jsxs)(d.rb,{children:[" ",Object(v.jsxs)(d.L,{alignItems:"center",children:[Object(v.jsx)(d.D,{color:"currentColor",mr:"4px"}),r("Community")]})]}),Object(v.jsx)(d.rb,{children:"All"})]})})},G=n(694),R=n(1091),H=function(t){var e=Object(G.default)(1e3*t);return Object(R.default)(e,"MMM do, yyyy HH:mm")},J=function(t){var e=t.startDate,n=t.endDate,r=t.proposalState,c=Object(x.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return r===E.a.CLOSED?Object(v.jsx)(d.wb,Object(C.a)(Object(C.a)({},o),{},{children:c("Ended %date%",{date:H(n)})})):r===E.a.PENDING?Object(v.jsx)(d.wb,Object(C.a)(Object(C.a)({},o),{},{children:c("Starts %date%",{date:H(e)})})):Object(v.jsx)(d.wb,Object(C.a)(Object(C.a)({},o),{},{children:c("Ends %date%",{date:H(n)})}))},U=n(726),Y=Object(f.e)(p.a)(i||(i=Object(j.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.colors.dropdown})),z=function(t){var e=t.proposal,n="/voting/proposal/".concat(e.id);return Object(v.jsxs)(Y,{to:n,children:[Object(v.jsxs)(d.l,{as:"span",style:{flex:1},children:[Object(v.jsx)(d.wb,{bold:!0,mb:"8px",children:e.title}),Object(v.jsx)(d.L,{alignItems:"center",mb:"8px",children:Object(v.jsx)(J,{startDate:e.start,endDate:e.end,proposalState:e.state})}),Object(v.jsxs)(d.L,{alignItems:"center",children:[Object(v.jsx)(U.a,{proposalState:e.state}),Object(v.jsx)(U.b,{isCoreProposal:Object(k.h)(e),ml:"8px"})]})]}),Object(v.jsx)(d.P,{variant:"text",children:Object(v.jsx)(d.f,{width:"24px"})})]})},_=n(65),q=Object(f.e)(d.L).attrs({alignItems:"center"})(s||(s=Object(j.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(t){return t.theme.colors.cardBorder})),K=[{value:E.a.ACTIVE,label:"Vote Now"},{value:E.a.PENDING,label:"Soon"},{value:E.a.CLOSED,label:"Closed"}],Q=function(t){var e=t.filterState,n=t.onFilterChange,r=(t.isLoading,Object(x.b)().t);return Object(v.jsx)(q,{children:K.map((function(t){var c=t.value,o=t.label;return Object(v.jsx)(_.b,{isActive:e===c,onClick:function(){n(c)},children:Object(v.jsx)(_.a,{isActive:e===c,children:r(o)})},o)}))})},W=function(){var t=Object(x.b)().t,e=Object(l.useState)({proposalType:E.b.CORE,filterState:E.a.ACTIVE}),n=Object(w.a)(e,2),r=n[0],c=n[1],o=Object(L.b)(),a=Object(L.c)(),i=Object(I.b)(),s=r.proposalType,u=r.filterState,b=o===E.d.LOADING,j=o===E.d.IDLE;Object(l.useEffect)((function(){i(Object(S.c)({first:1e3,state:u}))}),[u,i]);var f=Object(k.b)(Object(k.c)(a,s),u);return Object(v.jsx)(h.a,{children:Object(v.jsx)(y.b,{children:Object(v.jsxs)(y.a,{children:[Object(v.jsx)(d.N,{as:"h2",scale:"xl",mb:"16px",pt:"16px",id:"voting-proposals",color:"#313240",children:t("Proposals")}),Object(v.jsxs)(d.q,{children:[Object(v.jsx)(V,{proposalType:s,onTypeChange:function(t){c((function(e){return Object(C.a)(Object(C.a)({},e),{},{proposalType:t})}))}}),Object(v.jsx)(Q,{filterState:u,onFilterChange:function(t){c((function(e){return Object(C.a)(Object(C.a)({},e),{},{filterState:t})}))},isLoading:b}),b&&Object(v.jsx)(P,{}),j&&f.length>0&&f.map((function(t){return Object(v.jsx)(z,{proposal:t},t.id)})),j&&0===f.length&&Object(v.jsx)(d.L,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(v.jsx)(d.N,{as:"h5",children:t("No proposals found")})})]})]})})})},X=f.e.div(u||(u=Object(j.a)(["\n  flex: none;\n"]))),Z=f.e.div(b||(b=Object(j.a)(["\n  flex: 1;\n  height: 100%;\n"])));e.default=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(O.a,{}),Object(v.jsxs)(d.L,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(v.jsx)(X,{children:Object(v.jsx)(g,{})}),Object(v.jsx)(Z,{children:Object(v.jsx)(W,{})})]})]})}},704:function(t,e,n){"use strict";n.d(e,"h",(function(){return f})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return x})),n.d(e,"e",(function(){return h})),n.d(e,"i",(function(){return v})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return g})),n.d(e,"f",(function(){return C}));var r=n(10),c=n(34),o=n(9),a=n(5),i=n.n(a),s=n(15),u=n(215),b=n(21),j=n(111),l=n(113),d=n(706),f=function(t){return d.a.includes(t.author.toLowerCase())},O=function(t,e){switch(e){case j.b.COMMUNITY:return t.filter((function(t){return!f(t)}));case j.b.CORE:return t.filter((function(t){return f(t)}));case j.b.ALL:default:return t}},p=function(t,e){return t.filter((function(t){return t.state===e}))},x=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:b.b.cake.address,decimals:18}}]}},h=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},v=function(){var t=Object(s.a)(i.a.mark((function t(e){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(u.b,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});case 2:if((n=t.sent).ok){t.next=8;break}return t.next=6,n.json();case 6:throw r=t.sent,new Error(null===r||void 0===r?void 0:r.error_description);case 8:return t.next=10,n.json();case 10:return c=t.sent,t.abrupt("return",c);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(i.a.mark((function t(e,n,r,c){var o,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,t.t0){t.next=5;break}return t.next=4,Object(l.a)(c).getBlockNumber();case 4:t.t0=t.sent;case 5:return o=t.t0,t.next=8,fetch("".concat(u.c,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:e,block:o,poolAddresses:n})});case 8:return a=t.sent,t.next=11,a.json();case 11:return s=t.sent,t.abrupt("return",s.data);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,c){return t.apply(this,arguments)}}(),g=function(t){return t.reduce((function(t,e){var n=e.proposal.choices[e.choice-1];return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},n,t[n]?[].concat(Object(c.a)(t[n]),[e]):[e]))}),{})},C=function(t){return t.reduce((function(t,e){var n,r=parseFloat(null===(n=e.metadata)||void 0===n?void 0:n.votingPower);return r||(r=0),t+r}),0)}},706:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"f",(function(){return s}));var r=10,c=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(t){return t.toLowerCase()})),o="https://gateway.ipfs.io/ipfs",a="0.1.3",i="cake.eth",s=10},711:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return b})),n.d(e,"e",(function(){return j})),n.d(e,"a",(function(){return l}));var r=n(9),c=(n(0),n(2)),o=n(16),a=n(1),i=function(t){return Object(a.jsx)(c.ub,Object(r.a)(Object(r.a)({variant:"textDisabled",outline:!0,startIcon:Object(a.jsx)(c.Fb,{})},t),{},{children:"Core"}))},s=function(t){return Object(a.jsx)(c.ub,Object(r.a)(Object(r.a)({variant:"textSubtle",outline:!0,startIcon:Object(a.jsx)(c.D,{})},t),{},{children:"Community"}))},u=function(t){return Object(a.jsx)(c.ub,Object(r.a)(Object(r.a)({variant:"textSubtle",outline:!0},t),{},{children:"Dual"}))},b=function(t){var e=Object(o.b)().t;return Object(a.jsx)(c.ub,Object(r.a)(Object(r.a)({variant:"success",startIcon:Object(a.jsx)(c.Gb,{width:"18px",color:"success",mr:"4px"})},t),{},{children:e("Vote Now")}))},j=function(t){var e=Object(o.b)().t;return Object(a.jsx)(c.ub,Object(r.a)(Object(r.a)({variant:"binance",startIcon:Object(a.jsx)(c.yb,{width:"18px",color:"success",mr:"4px"})},t),{},{children:e("Soon")}))},l=function(t){var e=Object(o.b)().t;return Object(a.jsx)(c.ub,Object(r.a)(Object(r.a)({variant:"textDisabled",startIcon:Object(a.jsx)(c.k,{width:"18px",color:"textDisabled",mr:"4px"})},t),{},{children:e("Closed")}))}},716:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return s}));var r=n(24),c=function(){var t=Object(r.c)((function(t){return t.voting.proposals}));return Object.values(t)},o=function(t){return Object(r.c)((function(e){return e.voting.proposals[t]}))},a=function(t){var e=Object(r.c)((function(e){return e.voting.votes[t]}));return e?e.filter((function(t){return!0!==t._inValid})):[]},i=function(){return Object(r.c)((function(t){return t.voting.voteLoadingStatus}))},s=function(){return Object(r.c)((function(t){return t.voting.proposalLoadingStatus}))}},717:function(t,e,n){var r=n(439),c=n(742),o=n(743),a=4294967295,i=Math.min;t.exports=function(t,e){if((t=o(t))<1||t>9007199254740991)return[];var n=a,s=i(t,a);e=c(e),t-=a;for(var u=r(s,e);++n<t;)e(n);return u}},726:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n(9),c=n(52),o=(n(0),n(711)),a=n(111),i=n(1),s=function(t){var e=t.proposalState,n=Object(c.a)(t,["proposalState"]);return e===a.a.ACTIVE?Object(i.jsx)(o.f,Object(r.a)({},n)):e===a.a.PENDING?Object(i.jsx)(o.e,Object(r.a)({},n)):Object(i.jsx)(o.a,Object(r.a)({},n))},u=function(t){var e=t.isCoreProposal,n=Object(c.a)(t,["isCoreProposal"]);return e?Object(i.jsx)(o.c,Object(r.a)({},n)):Object(i.jsx)(o.b,Object(r.a)({},n))}},742:function(t,e,n){var r=n(177);t.exports=function(t){return"function"==typeof t?t:r}},743:function(t,e,n){var r=n(438);t.exports=function(t){var e=r(t),n=e%1;return e===e?n?e-n:e:0}}}]);