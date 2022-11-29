"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4795],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,h=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={title:"Weekly Update #5",date:new Date("2022-03-21T00:00:00.000Z"),authors:["stmharry"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup","amm","market statistics"],description:"Hashgreen updates on: fee UX, market selection UI, and market stat API",image:"./assets/banner.jpg"},o=void 0,s={permalink:"/blog/weekly-update-5",source:"@site/blog/weekly-update-5/index.md",title:"Weekly Update #5",description:"Hashgreen updates on: fee UX, market selection UI, and market stat API",date:"2022-03-21T00:00:00.000Z",formattedDate:"March 21, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"},{label:"amm",permalink:"/blog/tags/amm"},{label:"market statistics",permalink:"/blog/tags/market-statistics"}],readingTime:2.17,hasTruncateMarker:!1,authors:[{name:"H.",title:"Founder",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/h.jpg",key:"stmharry"}],frontMatter:{title:"Weekly Update #5",date:"2022-03-21T00:00:00.000Z",authors:["stmharry"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup","amm","market statistics"],description:"Hashgreen updates on: fee UX, market selection UI, and market stat API",image:"./assets/banner.jpg"},prevItem:{title:"Best Chia Projects Bootstrapped on Hashgreen DEX",permalink:"/blog/airdrop-on-hashgreen-dex"},nextItem:{title:"Weekly Update #4",permalink:"/blog/weekly-update-4"}},l={image:n(8502).Z,authorsImageUrls:[void 0]},p=[{value:"What&#39;s Been Done",id:"whats-been-done",level:2},{value:"What&#39;s Rolling",id:"whats-rolling",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"banner",src:n(8502).Z,width:"1200",height:"628"})),(0,r.kt)("h2",{id:"whats-been-done"},"What's Been Done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Over the past weeks, fees on the Chia Blockchain seems to be here to stay.\nTo allow our users get their transactions on chain quicker, we now provide users with the ability to supply fee by adding to the supplied Chia amount or removing from the requested Chia amount in their offers.\nThe suggested fee is hinted on the pop-up window for order book items, and is currently 0.0001 XCH.\nWe chose this number since it not only suffices to be on top of the mempool, but is miniscule (7 cents USD at the time of writing) for users.\nIn the future, we plan to implement more accurate fee estimators to give better fee hints and save you some bucks.")),(0,r.kt)("admonition",{title:"How is it done?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"With Chia offers, Hashgreen is able to redirect the provided fees into a temporary address, then we generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"SpendBundle")," on the fly to spend the extra amounts as fee.\nThis ",(0,r.kt)("inlineCode",{parentName:"p"},"SpendBundle")," is then aggregated with the user offers before we push it to the Chia Blockchain.")),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,"Figure: These are two different options you can provide to match an offer you like")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"fee-prompt",src:n(5875).Z,width:"589",height:"564"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We made it easier for users to submit your orders!\nSimply copy the amounts provided in the pop-up panel when you hover on the offers you want to match against with the copy button.\nYou can also paste your offer file string directly on the web interface.")),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,"Figure: Here are the button to copy your preferred amounts to supply")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"copy-fee",src:n(3607).Z,width:"588",height:"564"}))),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,"Figure: In the official Chia wallet, use this copy button to copy the raw offer file into your clipboard")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"copy-offer",src:n(1803).Z,width:"1918",height:"785"})),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,"Figure: Press this big paste button to upload your offer file")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"paste-offer",src:n(4556).Z,width:"1029",height:"159"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Many partners are starting to integrate our ",(0,r.kt)("a",{parentName:"p",href:"/dex/trading-api#get-market-statistics"},"Market Statistics API")," into their platforms.\nThe previous generation were slow and bulky, taking nearly 30 seconds to complete a call.\nWe have optimized it to return the results in under half a second.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New market selection menu is now available at ",(0,r.kt)("a",{parentName:"p",href:"https://testnet10.hash.green/dex"},"UAT interface"),".\nIf you want the UAT interface to connect with mainnet, head to ",(0,r.kt)("a",{parentName:"p",href:"https://testnet10.hash.green/dex/settings"},"UAT settings")," and toggle on ",(0,r.kt)("inlineCode",{parentName:"p"},"PROD"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"market-selection",src:n(875).Z,width:"1019",height:"607"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'We fixed many bugs on the frontend interface, including incorrect display of order status (sometimes it shows "Confirming undefined"), and user token retrieval errors.')),(0,r.kt)("h2",{id:"whats-rolling"},"What's Rolling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The smart coin team is coding up the first version of AMM coin driver for an MVP AMM protocol.\nAs time goes on, we will gradually implement more standard functionalities in current AMMs!")))}u.isMDXComponent=!0},8502:function(e,t,n){t.Z=n.p+"assets/images/banner-fcb757022fab48b224fb681136d5cbeb.jpg"},3607:function(e,t,n){t.Z=n.p+"assets/images/copy-fee-d15d2d0e5f0f289a71fd04c31a9bf66c.jpg"},1803:function(e,t,n){t.Z=n.p+"assets/images/copy-offer-ee42874a2d7e99ef9ddd6034e846f12b.jpg"},5875:function(e,t,n){t.Z=n.p+"assets/images/fee-prompt-8a3fc341f178a5f11f36f3fb865d73e0.jpg"},875:function(e,t,n){t.Z=n.p+"assets/images/market-selection-8511c37b3bdd7a662b4c3066b0a56a83.jpg"},4556:function(e,t,n){t.Z=n.p+"assets/images/paste-offer-3a6e7dccf0f68fc197bfa8119d4a5589.jpg"}}]);