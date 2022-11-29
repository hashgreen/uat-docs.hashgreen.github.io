"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[526],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3912:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905));const i={title:"Weekly Update #18",date:new Date("2022-08-04T00:00:00.000Z"),authors:["james"],tags:["update","hashgreen","chia","blockchain","cryptocurrency","mit","startup","dex","cat"],description:"Hashgreen updates on: Recapping the CAT standard upgrade and Hashgreen's actions.",image:"./assets/banner.png"},o=void 0,s={permalink:"/blog/weekly-update-18",source:"@site/blog/weekly-update-18/index.md",title:"Weekly Update #18",description:"Hashgreen updates on: Recapping the CAT standard upgrade and Hashgreen's actions.",date:"2022-08-04T00:00:00.000Z",formattedDate:"August 4, 2022",tags:[{label:"update",permalink:"/blog/tags/update"},{label:"hashgreen",permalink:"/blog/tags/hashgreen"},{label:"chia",permalink:"/blog/tags/chia"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"cryptocurrency",permalink:"/blog/tags/cryptocurrency"},{label:"mit",permalink:"/blog/tags/mit"},{label:"startup",permalink:"/blog/tags/startup"},{label:"dex",permalink:"/blog/tags/dex"},{label:"cat",permalink:"/blog/tags/cat"}],readingTime:2.88,hasTruncateMarker:!1,authors:[{name:"J.",title:"Community Lead",imageURL:"https://hashgreen-assets.s3.ca-central-1.amazonaws.com/people/james.jpg",key:"james"}],frontMatter:{title:"Weekly Update #18",date:"2022-08-04T00:00:00.000Z",authors:["james"],tags:["update","hashgreen","chia","blockchain","cryptocurrency","mit","startup","dex","cat"],description:"Hashgreen updates on: Recapping the CAT standard upgrade and Hashgreen's actions.",image:"./assets/banner.png"},prevItem:{title:"Picturing the Future Development in Chia: A Trusted Gateway System",permalink:"/blog/blog-1-a-trusted-gateway-system"},nextItem:{title:"Weekly Update #17",permalink:"/blog/weekly-update-17"}},l={image:a(793).Z,authorsImageUrls:[void 0]},c=[{value:"Timeline of Chia&#39;s actions",id:"timeline-of-chias-actions",level:3},{value:"What happened?",id:"what-happened",level:3},{value:"Actions for Hashgreen",id:"actions-for-hashgreen",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"banner",src:a(793).Z,width:"1200",height:"628"})),(0,r.kt)("p",null,"Hello Chia holders and Hashgreen's friends, welcome back to another Hashgreen's weekly update.\nLast week, there was a bit of turmoil after ",(0,r.kt)("a",{parentName:"p",href:"https://www.chia.net"},"Chia")," posted an announcement in their ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/chia_project/status/1551615648404422656?s=20&t=BPFATPgoK1yx8eETSe_VVQ"},"Twitter"),", stating that the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats/"},"Chia Asset Token (CAT)")," standard will be upgraded and CAT1 will be officially end-of-life (EOL) and replaced with CAT2. "),(0,r.kt)("p",null,"In weekly update #18, we're going to tell you about this incident, explaining what were the actions that we took in response to CAT2 standard and how ",(0,r.kt)("a",{parentName:"p",href:"https://hash.green/"},"Hashgreen DEX"),"'s approach enforces trading security."),(0,r.kt)("h3",{id:"timeline-of-chias-actions"},"Timeline of Chia's actions"),(0,r.kt)("blockquote",null,(0,r.kt)("ins",null,"Jul 26, 2022")," upgrading the CAT standard",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 26, 2022")," around 10am PDT (after block height 2,311,760) CAT1 EOL",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 27, 2022")," v1.5.0 live",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 28, 2022")," blog post updated",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 30, 2022")," CAT1 vulnerability explained"),(0,r.kt)("h3",{id:"what-happened"},"What happened?"),(0,r.kt)("p",null,"Within a few days, Chia continued to release a series of updates and announcements, finishing upgrading the CAT standard, bringing v1.5.0 live, and explaining what exactly was the vulnerability of CAT1 standard coin after the upgrade was finalized.\nDetails are included in their ",(0,r.kt)("a",{parentName:"p",href:"https://t.co/yEvX2e9RBC"},"blog post"),"."),(0,r.kt)("p",null,'Luckily, this "Cat Bleed" was never exploited, confirmed by Chia\'s team.\nThe concern was raised by ',(0,r.kt)("a",{parentName:"p",href:"https://www.trailofbits.com/"},"Trail of Bits"),', a security auditor which helps Chia to audit, addressing "a potential class of vulnerabilities that led the team to uncover a security vulnerability with CAT1".\nTo summarize it, the issue was a potential vulnerability that could be exploited by anyone to print as many fake CATs as they want.\nChia later released ',(0,r.kt)("a",{parentName:"p",href:"https://t.co/jbCSJKwpCO"},"a technical article")," explaining the vulnerability they uncovered for CAT1."),(0,r.kt)("p",null,"Chia also suggested actions for users and CAT issuers to follow in order to move forward from the EOL to CAT2.\nUsers are advised to download 1.5.0 client, cancel their offers, check their CAT1 balance, and wait for the airdrop of CAT2 from issuers.\nCAT issuers are provided with an official tool for the re-issuance."),(0,r.kt)("h3",{id:"actions-for-hashgreen"},"Actions for Hashgreen"),(0,r.kt)("blockquote",null,(0,r.kt)("ins",null,"Jul 26, 2022")," halting all trading activities",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 27, 2022")," reminding users to keep up-to-date",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 27, 2022")," Chia\u2019s official wallet and API trading back in our DEX",(0,r.kt)("br",null),(0,r.kt)("ins",null,"Jul 28, 2022")," trade resumed as issuers re-issuing their tokens"),(0,r.kt)("p",null,"Hashgreen were able to react after the news came out on July 26th.\nWe quickly took actions, incorporating frontend, backend, and operations to adapt to the change.\nWe halted all CAT trading activities and offer uploading from our API and ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/HashgreenLabs/status/1552110066677202944?s=20&t=jyVNiZ91VcNkR3lIv3tB8w"},"tweeted the information")," to the public, reminding users and token issuers what they should do and be aware of about the upgrade.\nBefore the release of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/releases/tag/1.5.0"},"Chia Blockchain 1.5.0"),", we had also hidden all the CAT1 markets to prepare for CAT2's data migration from ",(0,r.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/"},"TAIL Database"),"."),(0,r.kt)("p",null,"To prevent any exploit from happening, Chia suggested users to cancel offers that have been uploaded or shared on the internet, especially those providing XCH for CAT1s.\nWith our approach of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hash.green/blog/2022/01/29/introducing-hashgreen-dex#:~:text=a%20download%2Dfree,guaranteed%20by%20chialisp."},"aggregating offers"),", you don't have to cancel offers that you uploaded to our DEX since, essentially, no one will be able to take down any of it once all the trading activities are halted. "),(0,r.kt)("p",null,"Our team were able to upgrade Hashgreen DEX and resume all the trading activities hereafter as the CAT issuers continued re-issuing their coins.\nOnce again, if you are a trader, we recommend you to update to v1.5.0 as soon as possible and please beware that CAT1 is no longer acknowledged by Chia's wallet. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please beware that CAT2 has a different asset ID than its CAT1 version.")))}p.isMDXComponent=!0},793:function(e,t,a){t.Z=a.p+"assets/images/banner-22edec63c8afe067739b2cac0c7aec7b.png"}}]);