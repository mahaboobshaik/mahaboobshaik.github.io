(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{103:function(e,t,n){"use strict";n.r(t);var o=n(6),i=n(7),r=n(9),a=n(8),c=n(12),s=n(10),u=n(0),l=n.n(u),f=n(13),p=n(74),d=n(21),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(r.a)(this,Object(a.a)(t).call(this,e))).state={loggedIn:!1},n.onLoginSuccessFull=n.onLoginSuccessFull.bind(Object(c.a)(n)),n.onLoginError=n.onLoginError.bind(Object(c.a)(n)),n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"onLoginSuccessFull",value:function(e){console.log(e);var t={status:!0};t.name=e.w3.ig,t.id=e.w3.U3,t.fName=e.w3.ofa,t.lName=e.w3.wea,t.pPhoto=e.w3.Paa,t.accessToken=e.Zi.accessToken,t.tokenId=e.Zi.tokenId,this.props.updatingUserAuthData(t)}},{key:"onLoginError",value:function(e){var t={error:!0};t.errorData=e,this.props.updatingUserAuthData(t)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"auth_google"},l.a.createElement(p.GoogleLogin,{onSuccess:function(t){e.onLoginSuccessFull(t)},onFailure:this.onLoginError,clientId:this.props.config.clientId,isSignedIn:!0},l.a.createElement("span",null,"Sign-in With Google")))}}]),t}(u.Component);t.default=Object(f.b)(function(e){return{config:e.config}},function(e){return{updatingUserAuthData:function(t){e(Object(d.c)(t))}}})(g)},74:function(e,t,n){var o;"undefined"!=typeof self&&self,e.exports=(o=n(0),function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(t){return e[t]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e){e.exports=o},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function i(){}var r=n(3);i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var f=n(0),p=n.n(f),d=(n(1),function(e){return p.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},p.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement("g",{fill:"#000",fillRule:"evenodd"},p.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),p.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),p.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),p.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),p.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}),g=function(e){return p.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)},b=function(e,t,n,o,i){var r=e.getElementsByTagName(t)[0],a=r,c=r;(c=e.createElement(t)).id=n,c.src=o,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onload=i},h=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}(this,i(e).call(this,t))).signIn=n.signIn.bind(r(n)),n.enableButton=n.enableButton.bind(r(n)),n.state={disabled:!0,hovered:!1,active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(e,f.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.clientId,o=t.cookiePolicy,i=t.loginHint,r=t.hostedDomain,a=t.autoLoad,c=t.isSignedIn,s=t.fetchBasicProfile,u=t.redirectUri,l=t.discoveryDocs,f=t.onFailure,p=t.uxMode,d=t.scope,g=t.accessType,h=t.responseType;b(document,"script","google-login",t.jsSrc,function(){var t={client_id:n,cookie_policy:o,login_hint:i,hosted_domain:r,fetch_basic_profile:s,discoveryDocs:l,ux_mode:p,redirect_uri:u,scope:d,access_type:g};"code"===h&&(t.access_type="offline"),window.gapi.load("auth2",function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){c&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())},function(e){return f(e)}),a&&e.signIn()})})}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){};var e=document.getElementById("google-login");e.parentNode.removeChild(e)}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,i=o.onSuccess,r=o.onFailure,a=o.responseType,c={prompt:o.prompt};(0,o.onRequest)(),"code"===a?n.grantOfflineAccess(c).then(function(e){return i(e)},function(e){return r(e)}):n.signIn(c).then(function(e){return t.handleSigninSuccess(e)},function(e){return r(e)})}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,i=t.className,r=t.disabledStyle,a=t.buttonText,c=t.children,s=t.render,u=t.theme,l=t.icon,f=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signIn,disabled:f});var b={backgroundColor:"dark"===u?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},h={cursor:"pointer",backgroundColor:"dark"===u?"#3367D6":"#eee",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",opacity:1},y=f?Object.assign({},b,r):e.state.active?Object.assign({},b,h):e.state.hovered?Object.assign({},b,{cursor:"pointer",opacity:.9}):b;return p.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signIn,style:y,type:o,disabled:f,className:i},[l&&p.a.createElement(d,{key:1,active:this.state.active}),p.a.createElement(g,{icon:l,key:2},c||a)])}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(t.prototype,n),e;var t,n}();h.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){},jsSrc:"https://apis.google.com/js/api.js"};var y=h,m=function(){function e(t){var n;return function(t,n){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?u(e):t}(this,s(e).call(this,t))).signOut=n.signOut.bind(u(n)),n.enableButton=n.enableButton.bind(u(n)),n.state={disabled:!0,hovered:!1,active:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(e,f.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.onFailure,o=t.isSignedIn,i=t.clientId,r=t.cookiePolicy,a=t.loginHint,c=t.hostedDomain,s=t.fetchBasicProfile,u=t.discoveryDocs,l=t.uxMode,f=t.redirectUri,p=t.scope,d=t.accessType;b(document,"script","google-login",t.jsSrc,function(){var t={client_id:i,cookie_policy:r,login_hint:a,hosted_domain:c,fetch_basic_profile:s,discoveryDocs:u,ux_mode:l,redirect_uri:f,scope:p,access_type:d};window.gapi.load("auth2",function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){o&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())},function(e){return n(e)})})})}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){};var e=document.getElementById("google-login");e.parentNode.removeChild(e)}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signOut",value:function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(e.disconnect().then(this.props.onLogoutSuccess))}}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,i=t.className,r=t.disabledStyle,a=t.buttonText,c=t.children,s=t.render,u=t.theme,l=t.icon,f=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signOut,disabled:f});var b={backgroundColor:"dark"===u?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},h={cursor:"pointer",backgroundColor:"dark"===u?"#3367D6":"#eee",color:"dark"===u?"#fff":"rgba(0, 0, 0, .54)",opacity:1},y=f?Object.assign({},b,r):e.state.active?Object.assign({},b,h):e.state.hovered?Object.assign({},b,{cursor:"pointer",opacity:.9}):b;return p.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signOut,style:y,type:o,disabled:f,className:i},[l&&p.a.createElement(d,{key:1,active:this.state.active}),p.a.createElement(g,{icon:l,key:2},c||a)])}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(t.prototype,n),e;var t,n}();m.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var v=m;n.d(t,"default",function(){return y}),n.d(t,"GoogleLogin",function(){return y}),n.d(t,"GoogleLogout",function(){return v})}]))}}]);
//# sourceMappingURL=10.534977aa.chunk.js.map