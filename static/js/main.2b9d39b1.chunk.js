(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{15:function(t,n,e){},19:function(t,n,e){"use strict";var o=e(6),r=e(7),a=e(9),i=e(8),c=e(10),u=e(0),l=e.n(u),s=e(33),f=e.n(s),E=(e(62),function(t){function n(){return Object(o.a)(this,n),Object(a.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return l.a.createElement("img",{src:f.a,className:"initial_loading",alt:""})}}]),n}(u.Component));n.a=E},2:function(t,n,e){"use strict";n.a={UPDATE_CONFIG_INFO:"UPDATE_CONFIG_INFO",UPDATE_USER_AUTH_DATA:"UPDATE_USER_AUTH_DATA",SET_TOGGLE_MOBILE_SIDEBAR:"SET_TOGGLE_MOBILE_SIDEBAR",UNSET_TOGGLE_MOBILE_SIDEBAR:"UNSET_TOGGLE_MOBILE_SIDEBAR"}},21:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return i});var o=e(2);function r(t){return{type:o.a.UPDATE_CONFIG_INFO,payload:t}}function a(t){return{type:o.a.UPDATE_USER_AUTH_DATA,payload:t}}function i(t){return t?{type:o.a.SET_TOGGLE_MOBILE_SIDEBAR}:{type:o.a.UNSET_TOGGLE_MOBILE_SIDEBAR}}},33:function(t,n,e){t.exports=e.p+"static/media/loading.e275bf6b.gif"},35:function(t){t.exports={config:{},userAuthData:{},activeMobileSideBar:!1}},37:function(t,n,e){t.exports=e(64)},62:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(14),i=e.n(a),c=(e(15),e(6)),u=e(7),l=e(9),s=e(8),f=e(10),E=e(12),O=e(13),g=e(32),_=e.n(g),d=e(20),h=e(19),b=Object(d.a)(function(t){return Promise.all([e.e(5),e.e(8)]).then(e.bind(null,109))},{fallback:r.a.createElement(h.a,null)}),p=e(21),T=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(s.a)(n).call(this,t))).state={configure:{},readConfigureDone:!1},e.getRoute=e.getRoute.bind(Object(E.a)(e)),e}return Object(f.a)(n,t),Object(u.a)(n,[{key:"componentWillMount",value:function(){console.log("Routes container");var t=this;_.a.get("configure.json").then(function(n){var e=n.data;t.props.updatingConfig(e),t.setState({configure:e,readConfigureDone:!0})}).catch(function(t){console.log(t),console.log("An error occurred configuration")})}},{key:"getRoute",value:function(t){return r.a.createElement(b,{config:this.state.configure})}},{key:"render",value:function(){return this.state.readConfigureDone&&this.state.configure.source?this.getRoute(this.state.configure.source):r.a.createElement("span",null)}}]),n}(o.Component),A=Object(O.b)(function(t){return{config:t.config}},function(t){return{updatingConfig:function(n){t(Object(p.a)(n))}}})(T),v=e(2),S=e(5),D=Object(S.c)({config:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type===v.a.UPDATE_CONFIG_INFO?n.payload:t},userAuthData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return n.type===v.a.UPDATE_USER_AUTH_DATA?n.payload:t},activeMobileSideBar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case v.a.SET_TOGGLE_MOBILE_SIDEBAR:return!0;case v.a.UNSET_TOGGLE_MOBILE_SIDEBAR:return!1;default:return t}}}),I=e(34),j=function(t){return function(t){return function(n){return t(n)}}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(S.a)(I.a,j)(S.d)(D,t)},y=e(35),B=void 0,G=function(t){B=t(y)},U=function(){return B},R=(e(63),function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){G(m);var t=U();return t.subscribe(function(){return localStorage["redux-store"]=JSON.stringify(t.getState())}),r.a.createElement(O.a,{store:t},r.a.createElement(A,null))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[37,2,3]]]);
//# sourceMappingURL=main.2b9d39b1.chunk.js.map