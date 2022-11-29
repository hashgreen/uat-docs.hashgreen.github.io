"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5465],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),g=r,m=h["".concat(s,".").concat(g)]||h[g]||u[g]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7030:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905));const o={title:"Weekly Update #8",date:new Date("2022-05-16T00:00:00.000Z"),authors:["james"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup","wallet integration"],description:"Hashgreen updates on: light/dark scheme and Goby wallet integration on the testnet",image:"./assets/banner.png"},i=void 0,l={permalink:"/blog/weekly-update-8",source:"@site/blog/weekly-update-8/index.md",title:"Weekly Update #8",description:"Hashgreen updates on: light/dark scheme and Goby wallet integration on the testnet",date:"2022-05-16T00:00:00.000Z",formattedDate:"May 16, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"},{label:"wallet integration",permalink:"/blog/tags/wallet-integration"}],readingTime:2.62,hasTruncateMarker:!1,authors:[{name:"J.",title:"Community Lead",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/james.jpg",key:"james"}],frontMatter:{title:"Weekly Update #8",date:"2022-05-16T00:00:00.000Z",authors:["james"],tags:["update","hashgreen","chia","blockchain","dex","cryptocurrency","mit","startup","wallet integration"],description:"Hashgreen updates on: light/dark scheme and Goby wallet integration on the testnet",image:"./assets/banner.png"},prevItem:{title:"Weekly Update #9",permalink:"/blog/weekly-update-9"},nextItem:{title:"Weekly Update #7",permalink:"/blog/weekly-update-7"}},s={image:a(4853).Z,authorsImageUrls:[void 0]},c=[{value:"What&#39;s Been Done",id:"whats-been-done",level:2},{value:"What&#39;s Rolling",id:"whats-rolling",level:2},{value:"Follow the Steps to Test Goby Wallet Integration",id:"follow-the-steps-to-test-goby-wallet-integration",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"banner",src:a(4853).Z,width:"1200",height:"628"})),(0,r.kt)("h2",{id:"whats-been-done"},"What's Been Done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our team has finally released an official update for the light/dark scheme in ",(0,r.kt)("a",{parentName:"p",href:"https://hash.green/"},"Hashgreen DEX")," after fixing some bugs that occurred when switching between schemes.\nWe've also made small adjustments to the color composition of the page in different schemes to increase readability. You can set up dark mode by clicking the switch button at the navigation bar. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We've also worked through a few bugs of the frontend interface, making sure that your feedback is received and dealt with at all times."))),(0,r.kt)("h2",{id:"whats-rolling"},"What's Rolling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wallet integration for ",(0,r.kt)("a",{parentName:"p",href:"https://www.goby.app/"},"Goby")," is coming! \ud83d\ude0d\nThe development team has been devoting to finalizing wallet integration into our DEX, and now we are one step away from the one-click trading experience that you've all been waiting for. Before the launch of Goby integration, which will soon be announced, we would like to invite you to help us test the wallet integration on the testnet and give us some feedback. (Instructions are given below.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We have also started a poll at our ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HashgreenLabs/status/1526258001916530688"},"Twitter"),", inquiring your feedback of which part of the integration that you love the most and which part of it can be improved.\nAfter you've tried it out at the testnet, please visit the page, vote, and leave us a comment. You can also visit #ideas-and-feedback channel at our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/KXvqv6cwAk"},"Discord")," to share with us what's your thought about it."))),(0,r.kt)("admonition",{title:"How Can you help to test the wallet integration?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We will create a test market ",(0,r.kt)("strong",{parentName:"p"},"TFRIES/TXCH")," at the testnet and upload enough offers of ",(0,r.kt)("strong",{parentName:"p"},"TFRIES requetsing TXCH")," for you to make offers. You can also create offers with either one of the coins.")),(0,r.kt)("h3",{id:"follow-the-steps-to-test-goby-wallet-integration"},"Follow the Steps to Test Goby Wallet Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you have installed ",(0,r.kt)("a",{parentName:"li",href:"https://www.goby.app/"},"Goby")," wallet in your PC."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("a",{parentName:"li",href:"https://testnet10.hash.green/dex/TFRIES-TXCH"},"Hashgreen DEX's testnet"),".  "),(0,r.kt)("li",{parentName:"ol"},"Connect your Goby wallet with Hashgreen DEX.  ")),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,'Figure: Hit "Connect Wallet" at the navigation bar and the tab "Choose Wallet" will show up. ')),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:a(6759).Z,width:"600px"})),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,"Figure: Choose Goby as the wallet to connect. Then a tab will pop up. ")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:a(2847).Z,width:"600px"})),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,"Figure: Type your password to unlock your Goby wallet. ")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:a(7452).Z,width:"250px"})),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("b",null,'Figure: You have successfully "Connected with Goby". ')),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:a(1577).Z,width:"600px"})),(0,r.kt)("p",null),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Switch from Mainnet to Tesetnet10 in your Goby wallet.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open your Goby wallet web extension."),(0,r.kt)("li",{parentName:"ul"},"Go to Setting."),(0,r.kt)("li",{parentName:"ul"},"Hit Advanced Options."),(0,r.kt)("li",{parentName:"ul"},"Hit Networks."),(0,r.kt)("li",{parentName:"ul"},"Change from Mainnet to Testnet10.")))),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Once you've switched from Mainnet to Testnet10, the color of your Goby web extension should change from ",(0,r.kt)("span",{style:{color:"#7BA651"}},(0,r.kt)("b",null,"green"))," to ",(0,r.kt)("span",{style:{color:"#6B98F2"}},(0,r.kt)("b",null,"blue")),". That's one way to tell if you have done it successfully. \ud83d\ude0f")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Visit ",(0,r.kt)("a",{parentName:"li",href:"https://testnet10-faucet.chia.net/"},"this page")," and paste your address ",(0,r.kt)("strong",{parentName:"li"},'(It will be a long string beginning with "txch")')," to collect TXCH. You may wait several minutes until TXCH is received."),(0,r.kt)("li",{parentName:"ol"},"Go back to the trading page to make offers with TFRIES/TXCH.  "),(0,r.kt)("li",{parentName:"ol"},"Give us your feedback at our ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/HashgreenLabs/status/1526258001916530688"},"Twitter")," or ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/invite/KXvqv6cwAk"},"Discord"),".")))}u.isMDXComponent=!0},2847:function(e,t,a){t.Z=a.p+"assets/images/choose-wallet-c1430e7a1f8b1cefee93cceed978e82d.png"},1577:function(e,t,a){t.Z=a.p+"assets/images/connect-wallet-successful-40f9986a41e7963dcdd3f7758f6e871f.png"},6759:function(e,t,a){t.Z=a.p+"assets/images/connect-wallet-d5f7a5b51470670a991f18bd4b9247df.png"},7452:function(e,t,a){t.Z=a.p+"assets/images/log-in-19e26074b07d8494c166f61ae43c144f.png"},4853:function(e,t,a){t.Z=a.p+"assets/images/banner-aef29a44cb065c721f88e01aa2f06f88.png"}}]);