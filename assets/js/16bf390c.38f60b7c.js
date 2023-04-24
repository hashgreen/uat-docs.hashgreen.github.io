"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3571],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6747:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var a=r(3117),n=(r(7294),r(3905));const o={title:"Weekly Update #4",date:new Date("2022-03-10T00:00:00.000Z"),authors:["stmharry"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup"],description:"Hashgreen updates on: price/trade API, fee support, product facelift, and massive token listing",image:"./assets/banner.jpg"},i=void 0,l={permalink:"/blog/weekly-update-4",source:"@site/blog/weekly-update-4/index.md",title:"Weekly Update #4",description:"Hashgreen updates on: price/trade API, fee support, product facelift, and massive token listing",date:"2022-03-10T00:00:00.000Z",formattedDate:"March 10, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"}],readingTime:1.915,hasTruncateMarker:!1,authors:[{name:"H.",title:"Founder",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/h.jpg",key:"stmharry"}],frontMatter:{title:"Weekly Update #4",date:"2022-03-10T00:00:00.000Z",authors:["stmharry"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup"],description:"Hashgreen updates on: price/trade API, fee support, product facelift, and massive token listing",image:"./assets/banner.jpg"},prevItem:{title:"Weekly Update #5",permalink:"/blog/weekly-update-5"},nextItem:{title:"Weekly Update #3",permalink:"/blog/2022/03/02/weekly-update"}},s={image:r(992).Z,authorsImageUrls:[void 0]},p=[{value:"What&#39;s Been Done",id:"whats-been-done",level:2},{value:"What&#39;s Rolling",id:"whats-rolling",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"banner",src:r(992).Z,width:"1200",height:"628"})),(0,n.kt)("h2",{id:"whats-been-done"},"What's Been Done"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Over the weeks, we have been observing some users to submit deliberately mispriced orders and as a result, displacing the price reported in ",(0,n.kt)("a",{parentName:"p",href:"/dex/trading-api#get-trade-history"},"market statistics"),".\nWe have adopted feedback from our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/channels/920892922969354311/922958572407632024/943857984482738196"},"community member Bluemoon")," to filter trade prices according to the current order book.\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"price")," field now is a stabler measure of the market.\nFor existing API users who require stable price sources, there is nothing you need to do; for developers who want to see all trades including the mispriced ones, please check out ",(0,n.kt)("a",{parentName:"p",href:"/dex/trading-api#get-trade-history"},"Trade History API"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now access all market statistics with ",(0,n.kt)("a",{parentName:"p",href:"/dex/trading-api#get-trade-history"},"Market Statistics API")," by leaving the ",(0,n.kt)("inlineCode",{parentName:"p"},"market_id")," field blank.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Over the course of the week, we added several tokens, including ",(0,n.kt)("a",{parentName:"p",href:"https://littlelambocoin.com/"},"Little Lambo Coin"),", ",(0,n.kt)("a",{parentName:"p",href:"https://wings.green/"},"Green Wings"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://easteregg.tk/"},"Easter Egg"),".\nThese community developers are have a blast with all kinds of activities!\nActive participation from community members is a critical factor to a project's success, and we enjoy co-hosting all sorts of events to foster the communities.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We implemented support for fee on Hashgreen DEX and will soon roll out on the mainnet.\nUnder dust storm conditions, it might take a few hours to settle your trades, but now you will be able to optionally receive a little bit less XCH or pay a little more XCH as the network fee to expedite your orders.\nThe frontend will indicate the suggested fee according to network conditions, and usually a 0.0001 XCH will get your offers settled in no time!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The UI/UX team continues to implement the product facelift."))),(0,n.kt)("h2",{id:"whats-rolling"},"What's Rolling"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Goby integration, after reaching out to the Goby team, turns out to be not possible at the time of writing since the ability to make offers from Goby is still being implemented.\nCurrent integrations on other platforms rely on the offer taking feature, which has already been a part of previous Goby feature set.\nAs briefly explained in ",(0,n.kt)("a",{parentName:"p",href:"/blog/2022/01/29/introducing-hashgreen-dex"},"a blog post"),", we believe an efficient DeFi system would require the operators aggregate the offers, so we are now waiting good news from the Goby team about the offer making functionality.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We soon will start listing all tokens on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/"},"TAIL Database"),", compacted in the new market selection menu.\nYou can even star your favorite CATs!"))))}u.isMDXComponent=!0},992:function(e,t,r){t.Z=r.p+"assets/images/banner-ad2b466268de7ca15e61434f6b78ec22.jpg"}}]);