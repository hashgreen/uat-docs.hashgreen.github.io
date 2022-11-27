"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5497],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(u,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9542:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={title:"\ud83c\udfca Liquidity Pool"},a=void 0,l={unversionedId:"liquidity-pool",id:"liquidity-pool",title:"\ud83c\udfca Liquidity Pool",description:"Again please refer to the schematics above.",source:"@site/docs/liquidity-pool.md",sourceDirName:".",slug:"/liquidity-pool",permalink:"/liquidity-pool",draft:!1,tags:[],version:"current",frontMatter:{title:"\ud83c\udfca Liquidity Pool"},sidebar:"sidebar",previous:{title:"\ud83d\udcb1 Exchange",permalink:"/exchange"},next:{title:"\ud83c\udf3e Yield Farming",permalink:"/yield-farming"}},u={},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("iframe",{width:"100%",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5DahW4PVVgaerSKb89I3tP%2FProject-Pyke-Participants-and-Stakeholders%3Fnode-id%3D0%253A1%26t%3D07JLKjL6BuOnajUV-1",allowfullscreen:!0}),(0,o.kt)("p",null,'Again please refer to the schematics above.\nThis time we talk from a liquidity provider perspective.\nA pool is a pair of tokens, and when you hold either token you can provide (or, "lock") your tokens in the liquidity pool to provide liquidity for swappers.\nIn return, you get the majority of the fee they are paying (0.25% out of 0.30%) automatically.\nIt is interesting to note you don\'t have to manually collect these fees, and the fees you collect over the period of your liquidity deposit will be rewarded back once you withdraw your liquidity after a period.\nUpon depositing liquidity, you\'ll get "liquidity pool tokens (LP tokens)" which one can then use in other products for yield farming.'),(0,o.kt)("p",null,"Try to cover some warnings like impermanent loss here."),(0,o.kt)("p",null,'We also introduce a functionality called "zap" (this naming is pretty set in stone and I believe it\'s from Pancakeswap or somewhere established).\nBasically in usual liquidity events you\'ll need to provide both sides of the liquidity (e.g., $100 worth of A token and $100 worth of B token) to "add liquidity", but you\'ll be able to "zap" and only provide one side in Hashgreenswap.\nThis ',(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/MinSwap/comments/tg6n8q/zap_function/"},"Reddit post")," provides a pretty good explanation."),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The content may resemble ",(0,o.kt)("a",{parentName:"li",href:"https://biswap.gitbook.io/biswap/core-products/liquidity-pool"},"Biswap"),".")))}s.isMDXComponent=!0}}]);