(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{217:function(e,i,n){"use strict";n(33),n(122),n(218),n(27),n(28),n(13),n(47),n(23),n(46),n(34),Object.defineProperty(i,"__esModule",{value:!0});var r,s=n(0),o=(r=s)&&"object"==typeof r&&"default"in r?r.default:r,t=new(n(220)),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),u=t.getOS(),c=t.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"==typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},b=function(e){var i=m();return i&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,i){for(var n=0;n<i.length;n++){var r=i[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function h(){return(h=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,i){return(E=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x="mobile",k="tablet",N="smarttv",S="console",T="wearable",C=void 0,V="Chrome",A="Firefox",P="Opera",M="Yandex",j="Safari",F="Internet Explorer",_="Edge",L="Chromium",B="IE",z="Mobile Safari",W="iOS",R="Android",D="Windows Phone",I={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},U=function(e,i,n,r,s){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(r.name),osVersion:w(r.version),userAgent:w(s)}},q=function(e,i,n,r){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?g(n,!0).forEach(function(i){v(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(r)})},G=function(e,i,n,r){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}},H=function(e,i,n,r){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}},X=function(e,i,n,r){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(r)}},K=function(e){switch(e){case x:return{isMobile:!0};case k:return{isTablet:!0};case N:return{isSmartTV:!0};case S:return{isConsole:!0};case T:return{isWearable:!0};case C:return{isBrowser:!0};default:return I}}(l.type);var Q,Y=function(){return b("iPad")},$=l.type===N,Z=l.type===S,J=l.type===T,ee=a.name===z,ie=a.name===L,ne=function(){switch(l.type){case x:case k:return!0;default:return!1}}()||Y(),re=l.type===x,se=l.type===k||Y(),oe=l.type===C,te=u.name===R,ae=u.name===D,le=u.name===W,de=a.name===V,ue=a.name===A,ce=a.name===j||a.name===z,we=a.name===P,me=a.name===F||a.name===B,be=w(u.version),pe=w(u.name),fe=w(a.version),ve=w(a.major),he=w(a.name),ge=w(l.vendor),ye=w(l.model),Ee=w(d.name),Oe=w(d.version),xe=w(c),ke=a.name===_,Ne=a.name===M,Se=w(l.type,"browser"),Te=(Q=m())&&(/iPad|iPhone|iPod/.test(Q.platform)||"MacIntel"===Q.platform&&Q.maxTouchPoints>1)&&!window.MSStream,Ce=Y(),Ve=b("iPhone"),Ae=b("iPod"),Pe=function(){var e=m(),i=e&&e.userAgent.toLowerCase();return"string"==typeof i&&/electron/.test(i)}();i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return te?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return oe?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return Z?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return e.condition?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return me?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return le?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return re?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return ne?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return $?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return se?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return J?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,r=e.viewClassName,t=e.style;return ae?i?o.createElement(s.Fragment,null,n):o.createElement("div",{className:r,style:t},n):null},i.browserName=he,i.browserVersion=ve,i.deviceDetect=function(){var e=K.isBrowser,i=K.isMobile,n=K.isTablet,r=K.isSmartTV,s=K.isConsole,o=K.isWearable;return e?U(e,a,d,u,c):r?G(r,d,u,c):s?H(s,d,u,c):i?q(K,l,u,c):n?q(K,l,u,c):o?X(o,d,u,c):void 0},i.deviceType=Se,i.engineName=Ee,i.engineVersion=Oe,i.fullBrowserVersion=fe,i.getUA=xe,i.isAndroid=te,i.isBrowser=oe,i.isChrome=de,i.isChromium=ie,i.isConsole=Z,i.isEdge=ke,i.isElectron=Pe,i.isFirefox=ue,i.isIE=me,i.isIOS=le,i.isIOS13=Te,i.isIPad13=Ce,i.isIPhone13=Ve,i.isIPod13=Ae,i.isMobile=ne,i.isMobileOnly=re,i.isMobileSafari=ee,i.isOpera=we,i.isSafari=ce,i.isSmartTV=$,i.isTablet=se,i.isWearable=J,i.isWinPhone=ae,i.isYandex=Ne,i.mobileModel=ye,i.mobileVendor=ge,i.osName=pe,i.osVersion=be,i.withOrientationChange=function(e){return function(i){function n(e){var i,r,s;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,(i=!(s=y(n).call(this,e))||"object"!=typeof s&&"function"!=typeof s?O(r):s).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(O(i)),i.onOrientationChange=i.onOrientationChange.bind(O(i)),i.onPageLoad=i.onPageLoad.bind(O(i)),i.state={isLandscape:!1,isPortrait:!1},i}var r,s,t;return function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&E(e,i)}(n,o.Component),r=n,(s=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"==typeof window?"undefined":p(window))&&ne&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,h({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&f(r.prototype,s),t&&f(r,t),n}()}},218:function(e,i,n){var r=n(6),s=n(219),o=n(29),t=n(84),a=n(123);r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var i,n,r=o(e),l=t.f,d=s(r),u={},c=0;d.length>c;)void 0!==(n=l(r,i=d[c++]))&&a(u,i,n);return u}})},219:function(e,i,n){var r=n(82),s=n(62),o=n(4),t=n(3).Reflect;e.exports=t&&t.ownKeys||function(e){var i=r.f(o(e)),n=s.f;return n?i.concat(n(e)):i}},220:function(e,i,n){var r;n(14),n(35),function(s,o){"use strict";var t="model",a="name",l="type",d="vendor",u="version",c="mobile",w="tablet",m="smarttv",b={extend:function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2==0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},p={rgx:function(e,i){for(var n,r,s,o,t,a,l=0;l<i.length&&!t;){var d=i[l],u=i[l+1];for(n=r=0;n<d.length&&!t;)if(t=d[n++].exec(e))for(s=0;s<u.length;s++)a=t[++r],"object"==typeof(o=u[s])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!=typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;l+=2}},str:function(e,i){for(var n in i)if("object"==typeof i[n]&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(b.has(i[n][r],e))return"?"===n?void 0:n}else if(b.has(i[n],e))return"?"===n?void 0:n;return e}},f={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],u],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,p.str,f.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[t,d,[l,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[t,[d,"Apple"],[l,w]],[/(apple\s{0,1}tv)/i],[[t,"Apple TV"],[d,"Apple"],[l,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,t,[l,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[t,[d,"Amazon"],[l,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[t,p.str,f.device.amazon.model],[d,"Amazon"],[l,c]],[/android.+aft([bms])\sbuild/i],[t,[d,"Amazon"],[l,m]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[t,d,[l,c]],[/\((ip[honed|\s\w*]+);/i],[t,[d,"Apple"],[l,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,t,[l,c]],[/\(bb10;\s(\w+)/i],[t,[d,"BlackBerry"],[l,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[t,[d,"Asus"],[l,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[t,"Xperia Tablet"],[l,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[t,[d,"Sony"],[l,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,t,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[t,[d,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[t,[d,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[d,p.str,f.device.sprint.vendor],[t,p.str,f.device.sprint.model],[l,c]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[t,/_/g," "],[l,c]],[/(nexus\s9)/i],[t,[d,"HTC"],[l,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[t,[d,"Huawei"],[l,c]],[/android.+(bah2?-a?[lw]\d{2})/i],[t,[d,"Huawei"],[l,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,t,[l,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[t,[d,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[d,"Microsoft"],[l,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[t,[d,"Motorola"],[l,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[t,[d,"Motorola"],[l,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,b.trim],[t,b.trim],[l,m]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[d,"Samsung"],[l,m]],[/\(dtv[\);].+(aquos)/i],[t,[d,"Sharp"],[l,m]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],t,[l,w]],[/smart-tv.+(samsung)/i],[d,[l,m],t],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],t,[l,c]],[/sie-(\w*)/i],[t,[d,"Siemens"],[l,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],t,[l,c]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[t,[d,"Acer"],[l,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[t,[d,"LG"],[l,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],t,[l,w]],[/(lg) netcast\.tv/i],[d,t,[l,m]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[t,[d,"LG"],[l,c]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,t,[l,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[t,[d,"Lenovo"],[l,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,t,[l,c]],[/linux;.+((jolla));/i],[d,t,[l,c]],[/((pebble))app\/[\d\.]+\s/i],[d,t,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,t,[l,c]],[/crkey/i],[[t,"Chromecast"],[d,"Google"],[l,m]],[/android.+;\s(glass)\s\d/i],[t,[d,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[t,[d,"Google"],[l,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[t,[d,"Google"],[l,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[d,"Xiaomi"],[l,c]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[d,"Xiaomi"],[l,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[t,[d,"Meizu"],[l,c]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],t,[l,c]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[t,[d,"OnePlus"],[l,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[t,[d,"RCA"],[l,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[t,[d,"Dell"],[l,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[t,[d,"Verizon"],[l,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[d,"Barnes & Noble"],t,[l,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[t,[d,"NuVision"],[l,w]],[/android.+;\s(k88)\sbuild/i],[t,[d,"ZTE"],[l,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[t,[d,"Swiss"],[l,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[t,[d,"Swiss"],[l,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[t,[d,"Zeki"],[l,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],t,[l,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[t,[d,"Insignia"],[l,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[t,[d,"NextBook"],[l,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],t,[l,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],t,[l,c]],[/android.+;\s(PH-1)\s/i],[t,[d,"Essential"],[l,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[t,[d,"Envizen"],[l,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,t,[l,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[t,[d,"MachSpeed"],[l,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,t,[l,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[t,[d,"Rotor"],[l,w]],[/android.+(KS(.+))\s+build/i],[t,[d,"Amazon"],[l,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,t,[l,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,b.lowerize],d,t],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,m]],[/(android[\w\.\s\-]{0,9});.+build/i],[t,[d,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,p.str,f.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,p.str,f.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},h=function e(i,n){if("object"==typeof i&&(n=i,i=void 0),!(this instanceof e))return new e(i,n).getResult();var r=i||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:""),o=n?b.extend(v,n):v;return this.getBrowser=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,r,o.browser),e.major=b.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return p.rgx.call(e,r,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return p.rgx.call(e,r,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,r,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return p.rgx.call(e,r,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this};h.VERSION="0.7.21",h.BROWSER={NAME:a,MAJOR:"major",VERSION:u},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:t,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:c,SMARTTV:m,TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:a,VERSION:u},h.OS={NAME:a,VERSION:u},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=h),i.UAParser=h):void 0===(r=function(){return h}.call(i,n,i,e))||(e.exports=r);var g=s&&(s.jQuery||s.Zepto);if(g&&!g.ua){var y=new h;g.ua=y.getResult(),g.ua.get=function(){return y.getUA()},g.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var n in i)g.ua[n]=i[n]}}}("object"==typeof window?window:this)}}]);
//# sourceMappingURL=13-a5cf5512252887be209a.js.map