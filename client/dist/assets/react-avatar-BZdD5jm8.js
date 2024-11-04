import{b as _,c as C,d as Ne,e as Te,f as I,g as u,h as x,i as A,_ as w,j as V}from"./@babel-CihsqhTw.js";import{_ as Re,a as j,b as se,c as ue,d as ce,e as Pe,f as X,g as m,h as K,i as O,j as le,k as pe,l as B,m as E,n as P}from"./core-js-pure-D91HoSut.js";import{R as v,r as Ie}from"./react-Cq8SGPnk.js";import{P as o}from"./prop-types-BpeVGpEB.js";import{r as Ae}from"./is-retina-ZyRGC3SP.js";import{m as ke}from"./md5-DIQITYX7.js";var $e="react-avatar/",W="failing",ae=function(){try{return"localStorage"in window&&window.localStorage}catch{return!1}}(),z=function(){function n(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};C(this,n);var e=a.cachePrefix,r=e===void 0?$e:e,t=a.sourceTTL,i=t===void 0?7*24*3600*1e3:t,s=a.sourceSize,c=s===void 0?20:s;this.cachePrefix=r,this.sourceTTL=i,this.sourceSize=c}return _(n,[{key:"set",value:function(e,r){if(ae){r=Re(r);try{localStorage.setItem(this.cachePrefix+e,r)}catch(t){console.error(t)}}}},{key:"get",value:function(e){if(!ae)return null;var r=localStorage.getItem(this.cachePrefix+e);return r?JSON.parse(r):null}},{key:"sourceFailed",value:function(e){var r=this.get(W)||[];return r=j(r).call(r,function(t){var i=t.expires>0&&t.expires<Date.now(),s=t===e||t.url==e;return!i&&!s}),r.unshift({url:e,expires:Date.now()+this.sourceTTL}),r=se(r).call(r,0,this.sourceSize-1),this.set(W,r)}},{key:"hasSourceFailedBefore",value:function(e){var r=this.get(W)||[];return r.some(function(t){var i=t.expires>0&&t.expires<Date.now(),s=t===e||t.url==e;return s&&!i})}}]),n}();const we=new z;var Oe=Ae(),fe=["#A62A21","#7e3794","#0B51C1","#3A6024","#A81563","#B3003C"],Ee=/^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/;function ze(n,a){for(var e,r=ue(e=Ne(n)).call(e,function(p){return p.charCodeAt(0)}),t=r.length,i=t%(a-1)+1,s=ce(r).call(r,function(p,l){return p+l})%a,c=r[0]%a,f=0;f<t;f++)c=(i*c+s)%a;return c}function Y(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:fe;if(!n)return"transparent";var e=ze(n,a.length);return a[e]}function F(n){n=""+n;var a=Ee.exec(n)||[],e=Te(a,3),r=e[1],t=r===void 0?0:r,i=e[2],s=i===void 0?"px":i;return{value:Pe(t),str:t+s,unit:s}}function D(n){return n=F(n),isNaN(n.value)?n=512:n.unit==="px"?n=n.value:n.value===0?n=0:n=512,Oe&&(n=n*2),n}function ve(n,a){var e,r,t,i=a.maxInitials;return se(e=j(r=ue(t=n.split(/\s/)).call(t,function(s){return s.substring(0,1).toUpperCase()})).call(r,function(s){return!!s})).call(e,0,i).join("").toUpperCase()}var $={};function je(n,a){if($[a]){$[a].push(n);return}var e=$[a]=[n];setTimeout(function(){delete $[a],e.forEach(function(r){return r()})},a)}function J(){for(var n=arguments.length,a=new Array(n),e=0;e<n;e++)a[e]=arguments[e];for(var r=0,t=a;r<t.length;r++){var i=t[r];if(i||i==="")return i;if(i===!1||i===null)return null}}function Q(n){if(n===!0)return"100%";if(n!==!1)return n}function Be(n){var a=Fe();return function(){var r=x(n),t;if(a){var i=x(this).constructor;t=m(r,arguments,i)}else t=r.apply(this,arguments);return A(this,t)}}function Fe(){if(typeof Reflect>"u"||!m||m.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(m(Boolean,[],function(){})),!0}catch{return!1}}var q={cache:we,colors:fe,initials:ve,avatarRedirectUrl:null},De=X(q),Z=v.createContext&&v.createContext(),U=!Z,Ue=U?null:Z.Consumer,Le=v.forwardRef||function(n){return n},N=function(n){I(e,n);var a=Be(e);function e(){return C(this,e),a.apply(this,arguments)}return _(e,[{key:"_getContext",value:function(){var t=this,i={};return De.forEach(function(s){typeof t.props[s]<"u"&&(i[s]=t.props[s])}),i}},{key:"render",value:function(){var t=this.props.children;return U?v.Children.only(t):v.createElement(Z.Provider,{value:this._getContext()},v.Children.only(t))}}]),e}(v.Component);u(N,"displayName","ConfigProvider");u(N,"propTypes",{cache:o.object,colors:o.arrayOf(o.string),initials:o.func,avatarRedirectUrl:o.string,children:o.node});var he=function(a){function e(r,t){if(U){var i=t&&t.reactAvatar;return v.createElement(a,w({},q,i,r))}return v.createElement(Ue,null,function(s){return v.createElement(a,w({ref:t},q,s,r))})}return e.contextTypes=N.childContextTypes,Le(e)};U&&(N.childContextTypes={reactAvatar:o.object},N.prototype.getChildContext=function(){return{reactAvatar:this._getContext()}});var Me=function(){function n(){C(this,n),this.sourcePointer=0,this.active=!0,this.fetch=null}return _(n,[{key:"isActive",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return!(e.internal!==this||!this.fetch||this.active!==!0)}}]),n}();function oe(n,a){var e=X(n);if(E){var r=E(n);a&&(r=j(r).call(r,function(t){return B(n,t).enumerable})),e.push.apply(e,r)}return e}function G(n){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?oe(Object(e),!0).forEach(function(r){u(n,r,e[r])}):O?le(n,O(e)):oe(Object(e)).forEach(function(r){pe(n,r,B(e,r))})}return n}function He(n){var a=We();return function(){var r=x(n),t;if(a){var i=x(this).constructor;t=m(r,arguments,i)}else t=r.apply(this,arguments);return A(this,t)}}function We(){if(typeof Reflect>"u"||!m||m.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(m(Boolean,[],function(){})),!0}catch{return!1}}function Ge(n,a,e){var r=a.cache,t=new n(a);if(!t.isCompatible(a))return e();t.get(function(i){var s=i&&i.src&&r.hasSourceFailedBefore(i.src);!s&&i?e(i):e()})}function Ve(n){var a=n.sources,e=a===void 0?[]:a,r=ce(e).call(e,function(i,s){return K(i,s.propTypes)},{}),t=function(i){I(c,i);var s=He(c);function c(f){var p;return C(this,c),p=s.call(this,f),u(V(p),"_createFetcher",function(l){return function(h){var d=p.props.cache;if(l.isActive(p.state)){h&&h.type==="error"&&d.sourceFailed(h.target.src);var g=l.sourcePointer;if(e.length!==g){var S=e[g];l.sourcePointer++,Ge(S,p.props,function(y){if(!y)return setTimeout(l.fetch,0);l.isActive(p.state)&&(y=G({src:null,value:null,color:null},y),p.setState(function(b){return l.isActive(b)?y:{}}))})}}}}),u(V(p),"fetch",function(){var l=new Me;l.fetch=p._createFetcher(l),p.setState({internal:l},l.fetch)}),p.state={internal:null,src:null,value:null,color:f.color},p}return _(c,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(p){var l=!1;for(var h in r)l=l||p[h]!==this.props[h];l&&setTimeout(this.fetch,0)}},{key:"componentWillUnmount",value:function(){this.state.internal&&(this.state.internal.active=!1)}},{key:"render",value:function(){var p=this.props,l=p.children,h=p.propertyName,d=this.state,g=d.src,S=d.value,y=d.color,b=d.sourceName,T=d.internal,R={src:g,value:S,color:y,sourceName:b,onRenderFailed:function(){return T&&T.fetch()}};if(typeof l=="function")return l(R);var k=v.Children.only(l);return v.cloneElement(k,u({},h,R))}}]),c}(Ie.PureComponent);return u(t,"displayName","AvatarDataProvider"),u(t,"propTypes",G(G({},r),{},{cache:o.object,propertyName:o.string})),u(t,"defaultProps",{propertyName:"avatar"}),u(t,"Cache",z),u(t,"ConfigProvider",N),K(he(t),{ConfigProvider:N,Cache:z})}function ie(n,a){var e=X(n);if(E){var r=E(n);a&&(r=j(r).call(r,function(t){return B(n,t).enumerable})),e.push.apply(e,r)}return e}function Ke(n){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?ie(Object(e),!0).forEach(function(r){u(n,r,e[r])}):O?le(n,O(e)):ie(Object(e)).forEach(function(r){pe(n,r,B(e,r))})}return n}function Je(n){var a=qe();return function(){var r=x(n),t;if(a){var i=x(this).constructor;t=m(r,arguments,i)}else t=r.apply(this,arguments);return A(this,t)}}function qe(){if(typeof Reflect>"u"||!m||m.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(m(Boolean,[],function(){})),!0}catch{return!1}}var ee=function(n){I(e,n);var a=Je(e);function e(){return C(this,e),a.apply(this,arguments)}return _(e,[{key:"render",value:function(){var t=this.props,i=t.className,s=t.unstyled,c=t.round,f=t.style,p=t.avatar,l=t.onClick,h=t.children,d=p.sourceName,g=F(this.props.size),S=s?null:Ke({display:"inline-block",verticalAlign:"middle",width:g.str,height:g.str,borderRadius:Q(c),fontFamily:"Helvetica, Arial, sans-serif"},f),y=[i,"sb-avatar"];if(d){var b=d.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");y.push("sb-avatar--"+b)}return v.createElement("div",{className:y.join(" "),onClick:l,style:S},h)}}]),e}(v.PureComponent);u(ee,"propTypes",{className:o.string,round:o.oneOfType([o.bool,o.string]),style:o.object,size:o.oneOfType([o.number,o.string]),unstyled:o.bool,avatar:o.object,onClick:o.func,children:o.node});function Xe(n){var a=Ye();return function(){var r=x(n),t;if(a){var i=x(this).constructor;t=m(r,arguments,i)}else t=r.apply(this,arguments);return A(this,t)}}function Ye(){if(typeof Reflect>"u"||!m||m.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(m(Boolean,[],function(){})),!0}catch{return!1}}var te=function(n){I(e,n);var a=Xe(e);function e(){return C(this,e),a.apply(this,arguments)}return _(e,[{key:"render",value:function(){var t=this.props,i=t.className,s=t.round,c=t.unstyled,f=t.alt,p=t.title,l=t.name,h=t.value,d=t.avatar,g=F(this.props.size),S=c?null:{maxWidth:"100%",width:g.str,height:g.str,borderRadius:Q(s)};return v.createElement(ee,this.props,v.createElement("img",{className:i+" sb-avatar__image",width:g.str,height:g.str,style:S,src:d.src,alt:J(f,l||h),title:J(p,l||h),onError:d.onRenderFailed}))}}]),e}(v.PureComponent);u(te,"propTypes",{alt:o.oneOfType([o.string,o.bool]),title:o.oneOfType([o.string,o.bool]),name:o.string,value:o.string,avatar:o.object,className:o.string,unstyled:o.bool,round:o.oneOfType([o.bool,o.string,o.number]),size:o.oneOfType([o.number,o.string])});u(te,"defaultProps",{className:"",round:!1,size:100,unstyled:!1});function Qe(n){var a=Ze();return function(){var r=x(n),t;if(a){var i=x(this).constructor;t=m(r,arguments,i)}else t=r.apply(this,arguments);return A(this,t)}}function Ze(){if(typeof Reflect>"u"||!m||m.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(m(Boolean,[],function(){})),!0}catch{return!1}}var re=function(n){I(e,n);var a=Qe(e);function e(){var r,t;C(this,e);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return t=a.call.apply(a,P(r=[this]).call(r,s)),u(V(t),"_scaleTextNode",function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:16,l=t.props,h=l.unstyled,d=l.textSizeRatio,g=l.textMarginRatio,S=l.avatar;if(t._node=f,!(!f||!f.parentNode||h||S.src||!t._mounted)){var y=f.parentNode,b=y.parentNode,T=y.getBoundingClientRect(),R=T.width,k=T.height;if(R==0&&k==0){var M=Math.min(p*1.5,500);je(function(){return t._scaleTextNode(f,M)},M);return}if(!b.style.fontSize){var be=k/d;b.style.fontSize="".concat(be,"px")}y.style.fontSize=null;var xe=f.getBoundingClientRect(),H=xe.width;if(!(H<0)){var ne=R*(1-2*g);H>ne&&(y.style.fontSize="calc(1em * ".concat(ne/H,")"))}}}),t}return _(e,[{key:"componentDidMount",value:function(){this._mounted=!0,this._scaleTextNode(this._node)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var t=this.props,i=t.className,s=t.round,c=t.unstyled,f=t.title,p=t.name,l=t.value,h=t.avatar,d=F(this.props.size),g=c?null:{width:d.str,height:d.str,lineHeight:"initial",textAlign:"center",color:this.props.fgColor,background:h.color,borderRadius:Q(s)},S=c?null:{display:"table",tableLayout:"fixed",width:"100%",height:"100%"},y=c?null:{display:"table-cell",verticalAlign:"middle",fontSize:"100%",whiteSpace:"nowrap"},b=[h.value,this.props.size].join("");return v.createElement(ee,this.props,v.createElement("div",{className:i+" sb-avatar__text",style:g,title:J(f,p||l)},v.createElement("div",{style:S},v.createElement("span",{style:y},v.createElement("span",{ref:this._scaleTextNode,key:b},h.value)))))}}]),e}(v.PureComponent);u(re,"propTypes",{name:o.string,value:o.string,avatar:o.object,title:o.oneOfType([o.string,o.bool]),className:o.string,unstyled:o.bool,fgColor:o.string,textSizeRatio:o.number,textMarginRatio:o.number,round:o.oneOfType([o.bool,o.string,o.number]),size:o.oneOfType([o.number,o.string])});u(re,"defaultProps",{className:"",fgColor:"#FFF",round:!1,size:100,textSizeRatio:3,textMarginRatio:.15,unstyled:!1});function et(n){var a=Ve(n),e=he(v.forwardRef(function(r,t){return v.createElement(a,w({},r,{propertyName:"avatar"}),function(i){var s=i.src?te:re;return v.createElement(s,w({},r,{avatar:i,ref:t}))})}));return K(e,{getRandomColor:Y,ConfigProvider:N,Cache:z})}var de=_(function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"isCompatible",function(){return!!e.props.email||!!e.props.md5Email}),u(this,"get",function(r){var t=e.props,i=t.md5Email||ke(t.email),s=D(t.size),c="https://secure.gravatar.com/avatar/".concat(i,"?d=404");s&&(c+="&s=".concat(s)),r({sourceName:"gravatar",src:c})}),this.props=a});u(de,"propTypes",{email:o.string,md5Email:o.string});var me=_(function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"isCompatible",function(){return!!e.props.facebookId}),u(this,"get",function(r){var t,i=e.props.facebookId,s=D(e.props.size),c="https://graph.facebook.com/".concat(i,"/picture");s&&(c+=P(t="?width=".concat(s,"&height=")).call(t,s)),r({sourceName:"facebook",src:c})}),this.props=a});u(me,"propTypes",{facebookId:o.string});var ge=_(function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"isCompatible",function(){return!!e.props.githubHandle}),u(this,"get",function(r){var t=e.props.githubHandle,i=D(e.props.size),s="https://avatars.githubusercontent.com/".concat(t,"?v=4");i&&(s+="&s=".concat(i)),r({sourceName:"github",src:s})}),this.props=a});u(ge,"propTypes",{githubHandle:o.string});var ye=_(function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"isCompatible",function(){return!!e.props.skypeId}),u(this,"get",function(r){var t=e.props.skypeId,i="https://api.skype.com/users/".concat(t,"/profile/avatar");r({sourceName:"skype",src:i})}),this.props=a});u(ye,"propTypes",{skypeId:o.string});var _e=function(){function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"isCompatible",function(){return!!(e.props.name||e.props.value||e.props.email)}),u(this,"get",function(r){var t=e.getValue();if(!t)return r(null);r({sourceName:"text",value:t,color:e.getColor()})}),this.props=a}return _(n,[{key:"getInitials",value:function(){var e=this.props,r=e.name,t=e.initials;return typeof t=="string"?t:typeof t=="function"?t(r,this.props):ve(r,this.props)}},{key:"getValue",value:function(){return this.props.name?this.getInitials():this.props.value?this.props.value:null}},{key:"getColor",value:function(){var e=this.props,r=e.color,t=e.colors,i=e.name,s=e.email,c=e.value,f=i||s||c;return r||Y(f,t)}}]),n}();u(_e,"propTypes",{color:o.string,name:o.string,value:o.string,email:o.string,maxInitials:o.number,initials:o.oneOfType([o.string,o.func])});var Ce=_(function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"isCompatible",function(){return!!e.props.src}),u(this,"get",function(r){r({sourceName:"src",src:e.props.src})}),this.props=a});u(Ce,"propTypes",{src:o.string});var Se=_(function n(a){var e=this;C(this,n),u(this,"props",null),u(this,"icon","✷"),u(this,"isCompatible",function(){return!0}),u(this,"get",function(r){var t=e.props,i=t.color,s=t.colors;r({sourceName:"icon",value:e.icon,color:i||Y(e.icon,s)})}),this.props=a});u(Se,"propTypes",{color:o.string});function L(n,a){var e;return e=_(function r(t){var i=this;C(this,r),u(this,"props",null),u(this,"isCompatible",function(){return!!i.props.avatarRedirectUrl&&!!i.props[a]}),u(this,"get",function(s){var c,f,p,l=i.props.avatarRedirectUrl,h=D(i.props.size),d=l.replace(/\/*$/,"/"),g=i.props[a],S=h?"size=".concat(h):"",y=P(c=P(f=P(p="".concat(d)).call(p,n,"/")).call(f,g,"?")).call(c,S);s({sourceName:n,src:y})}),this.props=t}),u(e,"propTypes",u({},a,o.oneOfType([o.string,o.number]))),e}const tt=L("twitter","twitterHandle"),rt=L("vkontakte","vkontakteId"),nt=L("instagram","instagramId"),at=L("google","googleId");var ot=[me,at,ge,tt,nt,rt,ye,de,Ce,_e,Se];const ft=et({sources:ot});export{ft as A};
