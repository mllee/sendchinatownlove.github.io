(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[11,16],{109:function(t,n,e){"use strict";e.d(n,"q",(function(){return h})),e.d(n,"p",(function(){return b})),e.d(n,"s",(function(){return v})),e.d(n,"r",(function(){return _})),e.d(n,"x",(function(){return w})),e.d(n,"i",(function(){return y})),e.d(n,"d",(function(){return O})),e.d(n,"e",(function(){return k})),e.d(n,"g",(function(){return j})),e.d(n,"k",(function(){return x})),e.d(n,"l",(function(){return E})),e.d(n,"n",(function(){return B})),e.d(n,"f",(function(){return N})),e.d(n,"b",(function(){return S})),e.d(n,"v",(function(){return F})),e.d(n,"a",(function(){return D})),e.d(n,"w",(function(){return I})),e.d(n,"o",(function(){return T})),e.d(n,"m",(function(){return H})),e.d(n,"u",(function(){return P})),e.d(n,"h",(function(){return U})),e.d(n,"c",(function(){return V})),e.d(n,"j",(function(){return z})),e.d(n,"t",(function(){return C}));var r=e(107),a=e.n(r),u=e(108),c=e(115),o=e.n(c),i=(e(116),"https://api.sendchinatownlove.com/"),s=i+"sellers/",l=i+"charges",f=i+"gift_cards/",p=i+"participating_sellers/",d=i+"contacts/",m=i+"sponsor_sellers/",h=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(s,{params:{locale:g(n)}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(s+n,{params:{locale:g(e)}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(a.a.mark((function t(n,e,r,c,i,s){var f,p,d,m;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f=c.email,p=c.name,d=c.idempotency_key,m=c.is_subscribed,t.next=5,o.a.post(l,{is_square:!0,nonce:n,line_items:r,email:f,name:p,seller_id:e,idempotency_key:d,is_subscribed:m,is_distribution:i,campaign_id:s},{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n);case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).catch((function(t){throw t}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r,a,u,c){return t.apply(this,arguments)}}(),_=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(f+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),w=function(){var t=Object(u.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.put(f+n,{amount:e}).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(s+n+"/gift_cards/"+e).then((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}();function g(t){switch(t){case"cn":return"zh-CN";case"en":default:return"en"}}var O=function(){var t=Object(u.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://api.sendchinatownlove.com/campaigns/").then((function(t){return t})).catch((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get(s+n+"/campaigns").then((function(t){return t})).catch((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://api.sendchinatownlove.com/distributors/"+n).then((function(t){return t})).catch((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),x=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(p+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),E=function(){var t=Object(u.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(p+n+"/tickets/"+e).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),B=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(d,{params:{email:n}}).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),N=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(d+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),S=function(){var t=Object(u.a)(a.a.mark((function t(n,e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={},r=e?{email:n,instagram:e}:{email:n},t.abrupt("return",o.a.post(d,r).then((function(t){return t})).catch((function(t){return t})));case 3:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.put(d+n,{instagram:e}).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),D=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("https://api.sendchinatownlove.com/tickets/"+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),I=function(){var t=Object(u.a)(a.a.mark((function t(n,e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.put("https://api.sendchinatownlove.com/tickets/"+n,{contact_id:e}).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),T=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(d+n+"/tickets").then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),H=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("https://api.sendchinatownlove.com/participating_sellers/"+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),P=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.post(d+n+"/rewards").then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),U=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get("https://api.sendchinatownlove.com/locations/"+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),V=function(){var t=Object(u.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(m).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.get(m+n).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),C=function(){var t=Object(u.a)(a.a.mark((function t(n,e,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.a.put(d+n+"/tickets/"+e,{tickets:r}).then((function(t){return t})).catch((function(t){return t})));case 1:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}()},122:function(t,n,e){t.exports=e.p+"static/media/404-error-image.f72ee016.png"},134:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var r=e(4),a=e(0),u=e.n(a),c=e(5),o=e(122),i=e.n(o);function s(){var t=Object(r.a)(["\n  font-weight: 450;\n  font-size: 1rem;\n  a {\n    color: #a7182d;\n  }\n"]);return s=function(){return t},t}function l(){var t=Object(r.a)(["\n  font-weight: 400;\n  margin: 0.2rem auto;\n"]);return l=function(){return t},t}function f(){var t=Object(r.a)(["\n  font-weight: 600;\n"]);return f=function(){return t},t}function p(){var t=Object(r.a)(["\n  margin: 0 auto;\n  width: 80%;\n  text-align: center;\n  display: ",";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]);return p=function(){return t},t}function d(){var t=Object(r.a)(["\n  width: 80%;\n  max-width: 480px;\n  margin: 0 auto;\n"]);return d=function(){return t},t}function m(){var t=Object(r.a)(["\n  font-family: futura;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return m=function(){return t},t}var h=function(t){return u.a.createElement(b,null,u.a.createElement(_,{menuOpen:t.menuOpen},u.a.createElement(v,{src:i.a,alt:"error"}),u.a.createElement(w,null," Sorry Your Dumpling Was Not Found! "),u.a.createElement(y,null," ","The page you are trying does not exist or has been moved."),u.a.createElement(y,null,"Please try going back to the homepage."),u.a.createElement(g,null,u.a.createElement("a",{href:"https://sendchinatownlove.com/"},"GO TO HOMEPAGE"))))},b=c.a.main(m()),v=c.a.img(d()),_=c.a.div(p(),(function(t){return t.menuOpen?"none":"flex"})),w=c.a.div(f()),y=c.a.div(l()),g=c.a.div(s())},237:function(t,n,e){t.exports={"button--filled":"styles_button--filled__3g-mZ","button--red-filled":"styles_button--red-filled__2hfQJ","button--outlined":"styles_button--outlined__1u9dK","button--redfilled":"styles_button--redfilled__1v7Uq","modalButton--back":"styles_modalButton--back__3fUEz","modalButton--outlined":"styles_modalButton--outlined__32v29","modalButton--filled":"styles_modalButton--filled__UrmGO","modalButton--nonfunctional":"styles_modalButton--nonfunctional__22Qm-","modalButton--selected":"styles_modalButton--selected__1JgjQ","modalButton--outline":"styles_modalButton--outline__2dPxe","closeButton--close":"styles_closeButton--close__2HmZM","modalForm--form":"styles_modalForm--form__3yk9T","modalInput--input":"styles_modalInput--input__3ZDiJ","filterable-table-container":"styles_filterable-table-container__3Djf-","header-row":"styles_header-row__1GHCT","filter-container":"styles_filter-container__1DUSK","filter-input":"styles_filter-input__ir8Rf","clear-filter":"styles_clear-filter__2EGMJ","record-count":"styles_record-count__1zy20",fa:"styles_fa__upKlt",active:"styles_active__2qlTg",disabled:"styles_disabled__2Bs57",header:"styles_header__QrHY9",metadataHeader:"styles_metadataHeader__3_rTB",metadataBlock:"styles_metadataBlock__mvj0_",noBreak:"styles_noBreak__1Tp9O"}},270:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return b}));var r=e(107),a=e.n(r),u=e(108),c=e(12),o=e(0),i=e.n(o),s=e(3),l=e(109),f=e(34),p=e(237),d=e.n(p),m=e(134),h=e(238),b=function(){var t=Object(o.useState)(!1),n=Object(c.a)(t,2),e=n[0],r=n[1],p=Object(o.useState)(!0),b=Object(c.a)(p,2),v=b[0],_=b[1],w=Object(o.useState)(),y=Object(c.a)(w,2),g=y[0],O=y[1],k=Object(o.useState)(),j=Object(c.a)(k,2),x=j[0],E=j[1],B=Object(s.g)().location.pathname.match(/\/[^/]+/g).map((function(t){return t.replace("/","")})),N={sellerId:B[0],secretId:B[2]},S=function(){var t=Object(u.a)(a.a.mark((function t(){var n,e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.i)(N.sellerId,N.secretId);case 3:return n=t.sent.data,t.next=6,Object(l.p)(N.sellerId);case 6:e=t.sent.data,O(n),E(e),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r(!0);case 14:_(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){S()}),[]);var F=function(t){return Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumSignificantDigits:4}).format(t.value/100)},D=function(t){return new Date(t.value).toISOString().substring(0,10)},I=[{name:"seller_gift_card_id",displayName:"Voucher Code \n \u793c\u54c1\u5238\u53f7\u7801",inputFilterable:!0,sortable:!0},{name:"email",displayName:"Email \n \u7535\u5b50\u90ae\u4ef6",inputFilterable:!0,sortable:!0},{name:"value",displayName:"Original Amount \n \u8d2d\u4e70\u91d1\u989d",inputFilterable:!0,sortable:!0,render:F},{name:"created_at",displayName:"Date Purchased \n \u8d2d\u4e70\u65e5\u671f",inputFilterable:!0,sortable:!0,render:D}];return i.a.createElement(i.a.Fragment,null,v?i.a.createElement(f.b,{isPage:!0}):e?i.a.createElement(m.default,{menuOpen:!1}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:d.a.header},i.a.createElement("h1",null,"Voucher Tracker ",i.a.createElement("span",{className:d.a.noBreak},"\u793c\u54c1\u5238\u8bb0\u5f55")),i.a.createElement("h2",null,x.name)),i.a.createElement("div",{className:d.a.metadataHeader},i.a.createElement("div",{className:d.a.metadataBlock},i.a.createElement("h1",null,"Last Updated"," ",i.a.createElement("span",{className:d.a.noBreak},"\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4")),i.a.createElement("h2",null,D({value:new Date}))),i.a.createElement("div",{className:d.a.metadataBlock},i.a.createElement("h1",null,"Active Vouchers"," ",i.a.createElement("span",{className:d.a.noBreak},"\u53ef\u4f7f\u7528\u7684\u793c\u54c1\u5238\u6570\u91cf")),i.a.createElement("h2",null,g&&g.length)),i.a.createElement("div",{className:d.a.metadataBlock},i.a.createElement("h1",null,"Total Balance ",i.a.createElement("span",{className:d.a.noBreak},"\u603b\u7ed3\u4f59")),i.a.createElement("h2",null,F({value:g.reduce((function(t,n){return t+n.value}),0)})))),i.a.createElement(h,{namespace:"Vouchers",initialSort:"seller_gift_card_id",data:g,fields:I,noRecordsMessage:"No vouchers in our system yet!",noFilteredRecordsMessage:"No vouchers found for filter",topPagerVisible:!1,pageSize:20,pageSizes:null,recordCountName:"Voucher",recordCountNamePlural:"Vouchers"})))}}}]);
//# sourceMappingURL=11.dc30a99a.chunk.js.map