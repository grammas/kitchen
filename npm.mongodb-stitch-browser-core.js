(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{54:function(t,e,n){"use strict";var r,o,i=n(2),c=function(){return function(t,e,n){void 0===e&&(e=i.t.DEFAULT_NAME),void 0===n&&(n=i.t.TYPE),this.redirectUrl=t,this.providerName=e,this.providerType=n}}(),s=function(){return function(t,e,n){void 0===e&&(e=i.v.DEFAULT_NAME),void 0===n&&(n=i.v.TYPE),this.redirectUrl=t,this.providerName=e,this.providerType=n}}(),u=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(e,n){return t.call(this,e,n)||this}return u(e,t),e.prototype.createApiKey=function(e){return t.prototype.createApiKey.call(this,e)},e.prototype.fetchApiKey=function(e){return t.prototype.fetchApiKey.call(this,e)},e.prototype.fetchApiKeys=function(){return t.prototype.fetchApiKeys.call(this)},e.prototype.deleteApiKey=function(e){return t.prototype.deleteApiKey.call(this,e)},e.prototype.enableApiKey=function(e){return t.prototype.enableApiKey.call(this,e)},e.prototype.disableApiKey=function(e){return t.prototype.disableApiKey.call(this,e)},e}(i.n);(o||(o={})).factory=new(function(){function t(){}return t.prototype.getClient=function(t,e,n){return new a(t,n)},t}());var p,d=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t){function e(e,n){return t.call(this,i.V.DEFAULT_NAME,e,n)||this}return d(e,t),e.prototype.registerWithEmail=function(e,n){return t.prototype.registerWithEmailInternal.call(this,e,n)},e.prototype.confirmUser=function(e,n){return t.prototype.confirmUserInternal.call(this,e,n)},e.prototype.resendConfirmationEmail=function(e){return t.prototype.resendConfirmationEmailInternal.call(this,e)},e.prototype.resetPassword=function(e,n,r){return t.prototype.resetPasswordInternal.call(this,e,n,r)},e.prototype.sendResetPasswordEmail=function(e){return t.prototype.sendResetPasswordEmailInternal.call(this,e)},e}(i.o);(p||(p={})).factory=new(function(){function t(){}return t.prototype.getClient=function(t,e,n){return new h(e,n)},t}());var l,f=n(31),v=function(){function t(){}return t.prototype.roundTrip=function(t){var e=Object(f.fetch)(t.url,{body:t.body,headers:t.headers,method:t.method,mode:"cors"}),n=e.then(function(t){return t.text()});return Promise.all([e,n]).then(function(t){var e=t[0],n=t[1],r={};return e.headers.forEach(function(t,e){r[e]=t}),new i.z(r,e.status,n)})},t.prototype.stream=function(t,e,n){throw void 0===e&&(e=!0),new i.I(i.J.StreamingNotSupported)},t}(),y=function(){function t(t){this.suiteName=t}return t.prototype.get=function(t){return localStorage.getItem(this.getKey(t))},t.prototype.set=function(t,e){localStorage.setItem(this.getKey(t),e)},t.prototype.remove=function(t){localStorage.removeItem(this.getKey(t))},t.prototype.getKey=function(t){return"__stitch.client."+this.suiteName+"."+t},t}(),w=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),g=function(t){function e(e,n,r,o){var i=t.call(this,o)||this;return i.evtSrc=e,i.onOpenError=r,i.openedOnce=!1,i.evtSrc.onopen=function(t){n(i),i.openedOnce=!0},i.reset(),i}return w(e,t),e.prototype.open=function(){if(this.closed)throw new i.I(i.J.StreamClosed)},e.prototype.afterClose=function(){this.evtSrc.close()},e.prototype.onReconnect=function(t){this.evtSrc=t.evtSrc,this.reset(),this.events=t.events.concat(this.events)},e.prototype.reset=function(){var t=this;this.evtSrc.onmessage=function(e){t.events.push(new i.s(i.s.MESSAGE_EVENT,e.data)),t.poll()},this.evtSrc.onerror=function(e){return e instanceof MessageEvent?(t.lastErr=e.data,t.events.push(new i.s(i.L.ERROR_EVENT_NAME,t.lastErr)),t.close(),void t.poll()):t.openedOnce?(t.evtSrc.close(),void t.reconnect()):(t.close(),void t.onOpenError(new Error("event source failed to open and will not reconnect; check network log for more details")))}},e}(i.h),_=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),A=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.stream=function(t,e,n){void 0===e&&(e=!0);var r=A({},t.headers);return r[i.x.ACCEPT]=i.i.TEXT_EVENT_STREAM,r[i.x.CONTENT_TYPE]=i.i.TEXT_EVENT_STREAM,Object(f.fetch)(t.url+"&stitch_validate=true",{body:t.body,headers:r,method:t.method,mode:"cors"}).then(function(e){var r={};return e.headers.forEach(function(t,e){r[e]=t}),e.status<200||e.status>=300?e.text().then(function(t){return Object(i.Z)(new i.z(r,e.status,t))}):new Promise(function(e,r){return new g(new EventSource(t.url),function(t){return e(t)},function(t){return r(t)},n?function(){return n().then(function(t){return t})}:void 0)})})},e}(v),b=function(){function t(t){this.proxy=t}return t.prototype.callFunction=function(t,e,n){return this.proxy.callFunction(t,e,n)},t.prototype.streamFunction=function(t,e,n){return this.proxy.streamFunction(t,e,n)},t}(),E=n(55);!function(t){t.StitchError="_stitch_error",t.State="_stitch_state",t.UserAuth="_stitch_ua",t.LinkUser="_stitch_link_user",t.StitchLink="_stitch_link",t.ClientAppId="_stitch_client_app_id"}(l||(l={}));var R,I=l;!function(t){t.ProviderName="_stitch_redirect_provider_name",t.ProviderType="_stitch_redirect_provider_type",t.State="_stitch_redirect_state"}(R||(R={}));var U=R,O=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),C=function(t){function e(e){return t.call(this,e)||this}return O(e,t),e}(i.K),P=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(t){function e(e,n,r,o,i,c,s){var u=t.call(this,e,n,r,o,i,c)||this;return u.auth=s,u}return P(e,t),e.prototype.linkWithCredential=function(t){return this.auth.linkWithCredential(this,t)},e.prototype.linkUserWithRedirect=function(t){return this.auth.linkWithRedirectInternal(this,t)},e}(i.m),k=function(){function t(t){this.auth=t}return t.prototype.makeUser=function(t,e,n,r,o,i){return new S(t,e,n,r,o,i,this.auth)},t}(),j=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),L=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)c.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return c},T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",N=function(t){function e(e,n,r,o,i){void 0===i&&(i=window);var c=t.call(this,e,n,r)||this;return c.browserAuthRoutes=n,c.authStorage=r,c.appInfo=o,c.jsdomWindow=i,c.listeners=new Set,c.synchronousListeners=new Set,c}return j(e,t),Object.defineProperty(e.prototype,"userFactory",{get:function(){return new k(this)},enumerable:!0,configurable:!0}),e.prototype.getProviderClient=function(t,e){return function(t){return void 0!==t.getClient}(t)?t.getClient(this,this.requestClient,this.authRoutes):t.getNamedClient(e,this.requestClient,this.authRoutes)},e.prototype.loginWithCredential=function(e){return t.prototype.loginWithCredentialInternal.call(this,e)},e.prototype.loginWithRedirect=function(t){var e=this,n=this.prepareRedirect(t),r=n.redirectUrl,o=n.state;this.requestClient.getBaseURL().then(function(n){e.jsdomWindow.location.replace(n+e.browserAuthRoutes.getAuthProviderRedirectRoute(t,r,o,e.deviceInfo))})},e.prototype.linkWithRedirectInternal=function(t,n){var r=this;if(void 0!==this.user&&t.id!==this.user.id)return Promise.reject(new i.I(i.J.UserNoLongerValid));var o=this.prepareRedirect(n),c=o.redirectUrl,s=o.state;return this.requestClient.getBaseURL().then(function(t){var o=t+r.browserAuthRoutes.getAuthProviderLinkRedirectRoute(n,c,s,r.deviceInfo);return(e.injectedFetch?e.injectedFetch:fetch)(new Request(o,{credentials:"include",headers:{Authorization:"Bearer "+r.authInfo.accessToken},mode:"cors"}))}).then(function(t){r.jsdomWindow.location.replace(t.headers.get("X-Stitch-Location"))})},e.prototype.hasRedirectResult=function(){var t=!1;try{return t=this.parseRedirect().isValid}catch(t){return!1}finally{t||this.cleanupRedirect()}},e.prototype.handleRedirectResult=function(){try{var t=this.authStorage.get(U.ProviderName),e=this.authStorage.get(U.ProviderType),n=this.parseRedirect();return this.loginWithCredentialInternal(new i.H(this.processRedirectResult(n),e,t,n.asLink)).then(function(t){return t})}catch(t){return Promise.reject(t)}},e.prototype.linkWithCredential=function(e,n){return t.prototype.linkUserWithCredentialInternal.call(this,e,n)},e.prototype.logout=function(){return arguments.length>0?Promise.reject(new i.I(i.J.UnexpectedArguments)):t.prototype.logoutInternal.call(this)},e.prototype.logoutUserWithId=function(e){return t.prototype.logoutUserWithIdInternal.call(this,e)},e.prototype.removeUser=function(){return arguments.length>0?Promise.reject(new i.I(i.J.UnexpectedArguments)):t.prototype.removeUserInternal.call(this)},e.prototype.removeUserWithId=function(e){return t.prototype.removeUserWithIdInternal.call(this,e)},Object.defineProperty(e.prototype,"deviceInfo",{get:function(){var t={};this.hasDeviceId&&(t[i.r.DEVICE_ID]=this.deviceId),void 0!==this.appInfo.localAppName&&(t[i.r.APP_ID]=this.appInfo.localAppName),void 0!==this.appInfo.localAppVersion&&(t[i.r.APP_VERSION]=this.appInfo.localAppVersion);var e=Object(E.detect)();return e?(t[i.r.PLATFORM]=e.name,t[i.r.PLATFORM_VERSION]=e.version):(t[i.r.PLATFORM]="web",t[i.r.PLATFORM_VERSION]="0.0.0"),t[i.r.SDK_VERSION]="4.3.2",t},enumerable:!0,configurable:!0}),e.prototype.addAuthListener=function(t){this.listeners.add(t),this.onAuthEvent(t),this.dispatchAuthEvent({kind:i.d.ListenerRegistered})},e.prototype.addSynchronousAuthListener=function(t){this.listeners.add(t),this.onAuthEvent(t),this.dispatchAuthEvent({kind:i.d.ListenerRegistered})},e.prototype.removeAuthListener=function(t){this.listeners.delete(t)},e.prototype.onAuthEvent=function(t){var e=this;if(t)new Promise(function(n){t.onAuthEvent&&t.onAuthEvent(e),n(void 0)});else this.listeners.forEach(function(t){e.onAuthEvent(t)})},e.prototype.dispatchAuthEvent=function(t){var e=this;switch(t.kind){case i.d.ActiveUserChanged:this.dispatchBlockToListeners(function(n){n.onActiveUserChanged&&n.onActiveUserChanged(e,t.currentActiveUser,t.previousActiveUser)});break;case i.d.ListenerRegistered:this.dispatchBlockToListeners(function(t){t.onListenerRegistered&&t.onListenerRegistered(e)});break;case i.d.UserAdded:this.dispatchBlockToListeners(function(n){n.onUserAdded&&n.onUserAdded(e,t.addedUser)});break;case i.d.UserLinked:this.dispatchBlockToListeners(function(n){n.onUserLinked&&n.onUserLinked(e,t.linkedUser)});break;case i.d.UserLoggedIn:this.dispatchBlockToListeners(function(n){n.onUserLoggedIn&&n.onUserLoggedIn(e,t.loggedInUser)});break;case i.d.UserLoggedOut:this.dispatchBlockToListeners(function(n){n.onUserLoggedOut&&n.onUserLoggedOut(e,t.loggedOutUser)});break;case i.d.UserRemoved:this.dispatchBlockToListeners(function(n){n.onUserRemoved&&n.onUserRemoved(e,t.removedUser)});break;default:return this.assertNever(t)}},e.prototype.assertNever=function(t){throw new Error("unexpected object: "+t)},e.prototype.dispatchBlockToListeners=function(t){this.synchronousListeners.forEach(t),this.listeners.forEach(function(e){new Promise(function(n){t(e),n(void 0)})})},e.prototype.cleanupRedirect=function(){this.jsdomWindow.history.replaceState(null,"",this.pageRootUrl()),this.authStorage.remove(U.State),this.authStorage.remove(U.ProviderName),this.authStorage.remove(U.ProviderType)},e.prototype.parseRedirect=function(){if(void 0===this.jsdomWindow)throw new C("running in a non-browser environment");if(!this.jsdomWindow.location||!this.jsdomWindow.location.hash)throw new C("window location hash was undefined");var t=this.authStorage.get(U.State);return function(t,e,n){var r=t.split("&"),o=new W;return r.forEach(function(t){var r=t.split("=");switch(decodeURIComponent(r[0])){case I.StitchError:o.lastError=decodeURIComponent(r[1]);break;case I.UserAuth:try{o.authInfo=function(t){var e=t.split("$");if(4!==e.length)throw new C("invalid user auth data provided while marshalling user authentication data: "+t);var n=L(e,4),r=n[0],o=n[1],c=n[2],s=n[3];return new i.e(c,s,r,o)}(decodeURIComponent(r[1]))}catch(t){o.lastError=t}break;case I.StitchLink:"ok"===r[1]&&(o.asLink=!0);break;case I.State:var c=decodeURIComponent(r[1]);e===c&&(o.stateValid=!0);break;case I.ClientAppId:var s=decodeURIComponent(r[1]);n===s&&(o.clientAppIdValid=!0)}}),o}(this.jsdomWindow.location.hash.substring(1),t,this.appInfo.clientAppId)},e.prototype.processRedirectResult=function(t){try{if(!t.isValid)throw new C("invalid redirect result");if(t.lastError)throw new C("error handling redirect: "+t.lastError);if(!t.authInfo)throw new C("no user auth value was found: it could not be decoded from fragment")}catch(t){throw t}finally{this.cleanupRedirect()}return t.authInfo},e.prototype.prepareRedirect=function(t){this.authStorage.set(U.ProviderName,t.providerName),this.authStorage.set(U.ProviderType,t.providerType);var e=t.redirectUrl;void 0===e&&(e=this.pageRootUrl());var n=function(){for(var t="",e=0;e<64;++e)t+=T.charAt(Math.floor(Math.random()*T.length));return t}();return this.authStorage.set(U.State,n),{redirectUrl:e,state:n}},e.prototype.pageRootUrl=function(){return[this.jsdomWindow.location.protocol,"//",this.jsdomWindow.location.host,this.jsdomWindow.location.pathname].join("")},e}(i.k);var W=function(){function t(){this.stateValid=!1,this.clientAppIdValid=!1,this.asLink=!1}return Object.defineProperty(t.prototype,"isValid",{get:function(){return this.stateValid&&this.clientAppIdValid},enumerable:!0,configurable:!0}),t}();var V=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),F=function(t){function e(e){return t.call(this,e)||this}return V(e,t),e.prototype.getAuthProviderRedirectRoute=function(t,e,n,r){return this.getAuthProviderLoginRoute(t.providerName)+"?redirect="+encodeURI(e)+"&state="+n+"&device="+this.uriEncodeObject(r)},e.prototype.getAuthProviderLinkRedirectRoute=function(t,e,n,r){return this.getAuthProviderLoginRoute(t.providerName)+"?redirect="+encodeURI(e)+"&state="+n+"&device="+this.uriEncodeObject(r)+"&link=true&providerRedirectHeader=true"},e.prototype.uriEncodeObject=function(t){return encodeURIComponent(Object(i.Y)(JSON.stringify(t)))},e}(i.C),K=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(t){function e(e){var n=t.call(this,e)||this;return n.authRoutes=new F(e),n}return K(e,t),e}(i.G),D=function(){function t(t,e){this.info=new i.E(t,e.dataDirectory,e.localAppName,e.localAppVersion),this.routes=new B(this.info.clientAppId);var n=new i.F(t,e.baseUrl,e.transport);this.auth=new N(n,this.routes.authRoutes,e.storage,this.info),this.coreClient=new i.j(this.auth,this.routes),this.serviceClients=[],this.auth.addSynchronousAuthListener(this)}return t.prototype.getServiceClient=function(t,e){if(function(t){return void 0!==t.getClient}(t)){var n=new i.l(this.auth,this.routes.serviceRoutes,"");return this.bindServiceClient(n),t.getClient(n,this.info)}n=new i.l(this.auth,this.routes.serviceRoutes,e);return this.bindServiceClient(n),t.getNamedClient(n,this.info)},t.prototype.getGeneralServiceClient=function(t){var e=new i.l(this.auth,this.routes.serviceRoutes,t);return this.bindServiceClient(e),new b(e)},t.prototype.callFunction=function(t,e){return this.coreClient.callFunction(t,e)},t.prototype.onActiveUserChanged=function(t,e,n){this.onRebindEvent(new i.f({currentActiveUser:e,kind:i.d.ActiveUserChanged,previousActiveUser:n}))},t.prototype.bindServiceClient=function(t){this.serviceClients.push(t)},t.prototype.onRebindEvent=function(t){this.serviceClients.forEach(function(e){e.onRebindEvent(t)})},t}();var M={},x=function(){function t(){}return Object.defineProperty(t,"defaultAppClient",{get:function(){if(void 0===t.defaultClientAppId)throw new Error("default app client has not yet been initialized/set");return M[t.defaultClientAppId]},enumerable:!0,configurable:!0}),t.getAppClient=function(t){if(void 0===M[t])throw new Error("client for app '"+t+"' has not yet been initialized");return M[t]},t.hasAppClient=function(t){return void 0!==M[t]},t.initializeDefaultAppClient=function(e,n){if(void 0===n&&(n=(new i.D.Builder).build()),void 0===e||""===e)throw new Error("clientAppId must be set to a non-empty string");if(void 0!==t.defaultClientAppId)throw new Error("default app can only be set once; currently set to '"+t.defaultClientAppId+"'");var r=t.initializeAppClient(e,n);return t.defaultClientAppId=e,r},t.initializeAppClient=function(e,n){if(void 0===n&&(n=(new i.D.Builder).build()),void 0===e||""===e)throw new Error("clientAppId must be set to a non-empty string");if(void 0!==M[e])throw new Error("client for app '"+e+"' has already been initialized");var r=n.builder?n.builder():new i.D.Builder(n);void 0===r.storage&&r.withStorage(new y(e)),void 0===r.transport&&(window.EventSource?r.withTransport(new m):r.withTransport(new v)),void 0!==r.baseUrl&&""!==r.baseUrl||r.withBaseUrl("https://stitch.mongodb.com"),void 0!==r.localAppName&&""!==r.localAppName||r.withLocalAppName(t.localAppName),void 0!==r.localAppVersion&&""!==r.localAppVersion||r.withLocalAppVersion(t.localAppVersion);var o=new D(e,r.build());return M[e]=o,o},t.clearApps=function(){M={}},t}();n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b}),n.d(e,"c",function(){return i.g}),n.d(e,"d",function(){return v}),n.d(e,"e",function(){return i.p}),n.d(e,"f",function(){return i.q}),n.d(e,"g",function(){return i.t}),n.d(e,"h",function(){return i.u}),n.d(e,"i",function(){return c}),n.d(e,"j",function(){return i.v}),n.d(e,"k",function(){return i.w}),n.d(e,"l",function(){return s}),n.d(e,"m",function(){return i.y}),n.d(e,"n",function(){return i.A}),n.d(e,"o",function(){return i.B}),n.d(e,"p",function(){return x}),n.d(e,"q",function(){return i.D}),n.d(e,"r",function(){return i.E}),n.d(e,"s",function(){return i.I}),n.d(e,"t",function(){return i.J}),n.d(e,"u",function(){return i.M}),n.d(e,"v",function(){return i.N}),n.d(e,"w",function(){return i.O}),n.d(e,"x",function(){return i.P}),n.d(e,"y",function(){return i.Q}),n.d(e,"z",function(){return i.R}),n.d(e,"A",function(){return i.S}),n.d(e,"B",function(){return i.T}),n.d(e,"C",function(){return o}),n.d(e,"D",function(){return i.U}),n.d(e,"E",function(){return i.V}),n.d(e,"F",function(){return p}),n.d(e,"G",function(){return i.W}),n.d(e,"H",function(){return i.X})}}]);
//# sourceMappingURL=npm.mongodb-stitch-browser-core.js.map