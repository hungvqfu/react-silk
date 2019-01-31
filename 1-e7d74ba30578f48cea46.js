(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{207:function(e,t,r){"use strict";r.r(t),r.d(t,"graphql",function(){return m}),r.d(t,"StaticQueryContext",function(){return f}),r.d(t,"StaticQuery",function(){return b});var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=r(213),l=r.n(c);r.d(t,"Link",function(){return l.a}),r.d(t,"withPrefix",function(){return c.withPrefix}),r.d(t,"navigate",function(){return c.navigate}),r.d(t,"push",function(){return c.push}),r.d(t,"replace",function(){return c.replace}),r.d(t,"navigateTo",function(){return c.navigateTo});var s=r(244),d=r.n(s);r.d(t,"PageRenderer",function(){return d.a});var u=r(70);r.d(t,"parsePath",function(){return u.a});var f=a.a.createContext({}),b=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},211:function(e,t,r){"use strict";var n=r(299),a=r(0),o=r.n(a),i=r(300),c=r.n(i),l=r(207),s=function(e){var t=e.description,r=e.lang,a=e.meta,i=e.keywords,s=void 0===i?[]:i,u=e.title;return o.a.createElement(l.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(a)})},data:n})};s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var d="1025518380"},212:function(e,t,r){"use strict";var n=r(257),a=r(0),o=r.n(a),i=r(3),c=r.n(i),l=r(207),s=r(10),d=r(214),u=r(209),f=u.a.nav.attrs({className:"container"}).withConfig({displayName:"header__Nav",componentId:"dlac5w-0"})(["display:flex;align-items:center;"]),b=u.a.ul.withConfig({displayName:"header__NavItems",componentId:"dlac5w-1"})(["list-style:none;display:flex;flex-direction:row;margin-left:auto;margin-bottom:0;padding:0;"]),m=u.a.li.withConfig({displayName:"header__NavItem",componentId:"dlac5w-2"})(["a{padding:1rem;display:block;color:#757575;:hover{text-decoration:none;color:#111;}}"]),p=Object(u.a)(l.Link).withConfig({displayName:"header__Brand",componentId:"dlac5w-3"})([":hover{text-decoration:none;}"]),g=s.a.create({brand:{color:"#111"}}),h=function(e){var t=e.siteTitle;return o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement(p,{to:"/"},o.a.createElement(d.d,{style:g.brand},t)),o.a.createElement(b,null,o.a.createElement(m,null,o.a.createElement(l.Link,{to:"/components/text"},"Components")),o.a.createElement(m,null,o.a.createElement(l.Link,{to:"/showcase"},"Showcase")),o.a.createElement(m,null,o.a.createElement("a",{href:"https://github.com/youngtailors/react-silk"},"Github")))))};h.defaultProps={siteTitle:""};var y=h,x=u.a.footer.attrs({className:"container-fluid"}).withConfig({displayName:"Footer__Wrapper",componentId:"sc-2uq88x-0"})(["padding:2rem 0;border-top:1px solid #dfdfdf;margin-top:2rem;text-align:center;"]),w=function(){return a.createElement(x,null,"© 2019 Young Tailors")},v=(r(297),r(298),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{className:"container"},t),o.a.createElement(w,null))},data:n})});v.propTypes={children:c.a.node.isRequired};t.a=v},214:function(e,t,r){"use strict";r.d(t,"j",function(){return p}),r.d(t,"b",function(){return g}),r.d(t,"c",function(){return h}),r.d(t,"d",function(){return y}),r.d(t,"e",function(){return x}),r.d(t,"f",function(){return w}),r.d(t,"g",function(){return v}),r.d(t,"a",function(){return j}),r.d(t,"i",function(){return G}),r.d(t,"h",function(){return q});r(261),r(54);var n=r(0),a=r.n(n),o=r(308),i=r(10),c=r(51),l=r(220),s=r(229),d=r(224),u=r(215),f=r(242);function b(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r}var m=i.a.create({baseText:{marginBottom:10},text:{fontSize:16},h1:{fontSize:30},h2:{fontSize:28},h3:{fontSize:26},h4:{fontSize:24},h5:{fontSize:22},h6:{fontSize:20}}),p=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.text,t]},r))},g=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.baseText,m.h1,t]},r))},h=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.baseText,m.h2,t]},r))},y=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.baseText,m.h3,t]},r))},x=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.baseText,m.h4,t]},r))},w=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.baseText,m.h5,t]},r))},v=function(e){var t=e.style,r=b(e,["style"]);return Object(n.createElement)(o.a.Text,Object.assign({style:[m.baseText,m.h6,t]},r))},k={primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",dark:"#343a40",transparent:"transparent",white:"#FFF",black:"#555",gray:"#a6a6a6",smokeWhite:"#f4f4f4"},E=i.a.create({primaryText:{color:k.primary},secondaryText:{color:k.secondary},successText:{color:k.success},dangerText:{color:k.danger},warningText:{color:k.warning},infoText:{color:k.info},lightText:{color:k.light},darkText:{color:k.dark}}),C=i.a.create({containerNatural:{alignSelf:"flex-start"},button:{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",paddingVertical:10,paddingHorizontal:15},disabledButton:{opacity:.6},primaryButton:{backgroundColor:k.primary,borderColor:k.primary},secondaryButton:{backgroundColor:k.secondary,borderColor:k.secondary},successButton:{backgroundColor:k.success,borderColor:k.success},dangerButton:{backgroundColor:k.danger,borderColor:k.danger},warningButton:{backgroundColor:k.warning,borderColor:k.warning},infoButton:{backgroundColor:k.info,borderColor:k.info},lightButton:{backgroundColor:k.light,borderColor:k.light},darkButton:{backgroundColor:k.dark,borderColor:k.dark},linkButton:{backgroundColor:k.transparent,borderColor:k.transparent},primaryGhostButton:{borderColor:k.primary},secondaryGhostButton:{borderColor:k.secondary},successGhostButton:{borderColor:k.success},dangerGhostButton:{borderColor:k.danger},warningGhostButton:{borderColor:k.warning},infoGhostButton:{borderColor:k.info},lightGhostButton:{borderColor:k.light},darkGhostButton:{borderColor:k.dark},linkGhostButton:{borderColor:k.transparent},lightText:{color:k.white},darkText:{color:k.black},buttonBorder:{borderWidth:1}}),O=["light","link"],j=function(e){var t=e.children,r=e.onPress,a=e.variant,o=e.disabled,i=e.block,d=e.ghost,u=[C.buttonBorder,C[a+(d?"Ghost":"")+"Button"]],f=[],b=function(e){return!~O.indexOf(e)}(a);d&&b?f.push(E[a+"Text"]):f.push(b?C.lightText:C.darkText),o&&u.push(C.disabledButton);var m=Object(n.createElement)(c.a,{style:[C.button].concat(u)},Object(n.createElement)(l.a,{style:f},t)),p=[];return i||p.push(C.containerNatural),r&&!o?Object(n.createElement)(s.a,{onPress:r,style:p},m):Object(n.createElement)(c.a,{style:p},m)};j.defaultProps={variant:"primary",ghost:!1,disabled:!1,block:!1};var T=i.a.create({container:{position:"absolute",top:0,left:0,right:0,bottom:0}}),B=function(e){return a.a.createElement(d.a,{onPress:e.onPress},a.a.createElement(c.a,{style:T.container}))},S=i.a.create({container:{position:"absolute",top:0,left:0,bottom:0,right:0,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0,0,0,.8)"},modal:{backgroundColor:k.white},body:{padding:15}}),G=function(e){var t=e.toggle,r=e.isOpen,a=e.children;if(!r)return null;if("web"!==u.a.OS)throw new Error("This component does not support modal on this native platform yet");return Object(n.createElement)("div",{style:{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:2}},Object(n.createElement)(c.a,{style:S.container},Object(n.createElement)(B,{onPress:t}),Object(n.createElement)(c.a,{style:S.modal},Object(n.createElement)(c.a,{style:S.body},a))))},P=i.a.create({container:{marginBottom:10},label:{marginBottom:5},textInput:{borderColor:k.gray,borderWidth:1,paddingVertical:5,paddingHorizontal:8},disabledView:{paddingVertical:5,paddingHorizontal:8,backgroundColor:k.smokeWhite,borderWidth:1,borderColor:k.smokeWhite,height:33},errorBorder:{borderColor:k.danger},errorMessage:{color:k.danger,fontSize:14}}),q=function(e){var t=e.label,r=e.placeholder,a=e.errorMessage,o=e.disabled,i=e.onChange,l=e.value,s=[];return a&&s.push(P.errorBorder),Object(n.createElement)(c.a,{style:P.container},t&&Object(n.createElement)(p,{style:P.label},t),o?Object(n.createElement)(c.a,{style:[P.disabledView].concat(s)},Object(n.createElement)(p,null,l||r)):Object(n.createElement)(f.a,{editable:!0,maxLength:40,style:[P.textInput].concat(s),underlineColorAndroid:"transparent",placeholder:r,onChangeText:i}),a&&Object(n.createElement)(p,{style:P.errorMessage},a))};q.defaultProps={disabled:!1}},244:function(e,t,r){var n;e.exports=(n=r(260))&&n.default||n},257:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk"}}}}},260:function(e,t,r){"use strict";r.r(t);r(54);var n=r(0),a=r.n(n),o=r(3),i=r.n(o),c=r(97),l=r(2),s=function(e){var t=e.location,r=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:r},r.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},297:function(e,t,r){},298:function(e,t,r){},299:function(e){e.exports={data:{site:{siteMetadata:{title:"React Silk",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@youngtailors"}}}}}}]);
//# sourceMappingURL=1-e7d74ba30578f48cea46.js.map