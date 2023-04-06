"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"FAQs",sidebar_position:90,hide_title:!0},o="Bacalhau FAQs",s={unversionedId:"faqs",id:"faqs",title:"Bacalhau FAQs",description:"Can I use multiple data sources in the same job?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/faqs",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/faqs.md",tags:[],version:"current",lastUpdatedAt:1680824686,formattedLastUpdatedAt:"Apr 6, 2023",sidebarPosition:90,frontMatter:{sidebar_label:"FAQs",sidebar_position:90,hide_title:!0},sidebar:"documentationSidebar",previous:{title:"Running a Private Cluster",permalink:"/quick-start-pvt-cluster"},next:{title:"Landscape",permalink:"/advanced-guides/compute-landscape"}},l={},u=[{value:"Can I use multiple data sources in the same job?",id:"can-i-use-multiple-data-sources-in-the-same-job",level:3},{value:"How can I submit Job requests through CLI to communicate with my Node directly?",id:"how-can-i-submit-job-requests-through-cli-to-communicate-with-my-node-directly",level:3},{value:"Why does my API server listening on <code>/ip4/127.0.0.1/tcp/5001</code> when I invoke IPFS Daemon when fetching an IPFS Multiaddress?",id:"why-does-my-api-server-listening-on-ip4127001tcp5001-when-i-invoke-ipfs-daemon-when-fetching-an-ipfs-multiaddress",level:3},{value:"What to do when I get error connection refused when running Bacalhau API?",id:"what-to-do-when-i-get-error-connection-refused-when-running-bacalhau-api",level:3},{value:"Problem",id:"problem",level:4},{value:"What to do",id:"what-to-do",level:4},{value:"Can I run Bacalhau in a containerized setup (nested containers)?",id:"can-i-run-bacalhau-in-a-containerized-setup-nested-containers",level:3},{value:"Can I run non Docker jobs?",id:"can-i-run-non-docker-jobs",level:3},{value:"How do I run a script that requires installing packages from a package repository like pypi or apt?",id:"how-do-i-run-a-script-that-requires-installing-packages-from-a-package-repository-like-pypi-or-apt",level:3},{value:"How do I see a job\u2019s progress while it\u2019s running?",id:"how-do-i-see-a-jobs-progress-while-its-running",level:2},{value:"How do I get an IPFS peer if I want to start Bacalhau Server?",id:"how-do-i-get-an-ipfs-peer-if-i-want-to-start-bacalhau-server",level:2},{value:"Can I run bacalhau serve on my home machine? What are the requirements?",id:"can-i-run-bacalhau-serve-on-my-home-machine-what-are-the-requirements",level:2},{value:"Can I stop a running job?",id:"can-i-stop-a-running-job",level:2}],c={toc:u},p="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bacalhau-faqs"},"Bacalhau FAQs"),(0,r.kt)("h3",{id:"can-i-use-multiple-data-sources-in-the-same-job"},"Can I use multiple data sources in the same job?"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--input-volumes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag multiple times with multiple different CIDs, and give each of them a path to be mounted at. "),(0,r.kt)("p",null,"For example, doing ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau run cat/main.wasm -v CID1:/input1 -v CID2:/input2")," will result in both the ",(0,r.kt)("inlineCode",{parentName:"p"},"input1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"input2")," folders being available to your running WASM with the CID contents. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," as many times as you need. "),(0,r.kt)("h3",{id:"how-can-i-submit-job-requests-through-cli-to-communicate-with-my-node-directly"},"How can I submit Job requests through CLI to communicate with my Node directly?"),(0,r.kt)("p",null,"To ensure the CLI can communicate with our node directly (",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"),"), you need to make sure the ",(0,r.kt)("strong",{parentName:"p"},"1234")," port is open."),(0,r.kt)("h3",{id:"why-does-my-api-server-listening-on-ip4127001tcp5001-when-i-invoke-ipfs-daemon-when-fetching-an-ipfs-multiaddress"},"Why does my API server listening on ",(0,r.kt)("inlineCode",{parentName:"h3"},"/ip4/127.0.0.1/tcp/5001")," when I invoke IPFS Daemon when fetching an IPFS Multiaddress?"),(0,r.kt)("p",null,"Bacalhau communicates with IPFS via it's API port and not the swarm port which is why it's ",(0,r.kt)("strong",{parentName:"p"},"5001")," and not ",(0,r.kt)("strong",{parentName:"p"},"4001"),"."),(0,r.kt)("p",null,"The key thing is whether the IPFS node is running on the same host as the Bacalhau daemon. If it is, then ",(0,r.kt)("strong",{parentName:"p"},"127.0.0.1")," is enough to route traffic between the two (because they are both on the same node). If IPFS is running on a different node than Bacalhau, then we need to replace ",(0,r.kt)("strong",{parentName:"p"},"127.0.0.1")," with the IP that the IPFS server is running on."),(0,r.kt)("h3",{id:"what-to-do-when-i-get-error-connection-refused-when-running-bacalhau-api"},"What to do when I get error connection refused when running Bacalhau API?"),(0,r.kt)("h4",{id:"problem"},"Problem"),(0,r.kt)("p",null,"When running ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"),"  and you get this error message: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Error running version: publicapi: after posting request: Post "http://127.0.0.1:1234/version": dial tcp 127.0.0.1:1234: connect: connection refused\n')),(0,r.kt)("h4",{id:"what-to-do"},"What to do"),(0,r.kt)("p",null,"First, you'll need to check that the bacalhau server is up and running on the same host then it should be connecting using ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". This can be checked by running ",(0,r.kt)("inlineCode",{parentName:"p"},"telnet 127.0.0.1 1234"),". If telnet is not connecting to ",(0,r.kt)("strong",{parentName:"p"},"127.0.0.1 1234")," on the machine that bacalhau is running then one of 3 things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bacalhau is running on a different machine"),(0,r.kt)("li",{parentName:"ul"},"it's running on a different port"),(0,r.kt)("li",{parentName:"ul"},"it's not running")),(0,r.kt)("h3",{id:"can-i-run-bacalhau-in-a-containerized-setup-nested-containers"},"Can I run Bacalhau in a containerized setup (nested containers)?"),(0,r.kt)("p",null,"We don't support this as it will result in the classic Dind(Docker In Docker) problem. "),(0,r.kt)("h3",{id:"can-i-run-non-docker-jobs"},"Can I run non Docker jobs?"),(0,r.kt)("p",null,"Yes! You can run programs using WebAssembly instead. See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/wasm-workload-onboarding"},"onboarding WebAssembly")," for information on how to do that."),(0,r.kt)("h3",{id:"how-do-i-run-a-script-that-requires-installing-packages-from-a-package-repository-like-pypi-or-apt"},"How do I run a script that requires installing packages from a package repository like pypi or apt?"),(0,r.kt)("p",null,"Networking is supported by Bacalhau which enables one to run a script that requires packages from external repository. This is only for Docker workloads"),(0,r.kt)("h2",{id:"how-do-i-see-a-jobs-progress-while-its-running"},"How do I see a job\u2019s progress while it\u2019s running?"),(0,r.kt)("p",null,"That's currently not possible"),(0,r.kt)("h2",{id:"how-do-i-get-an-ipfs-peer-if-i-want-to-start-bacalhau-server"},"How do I get an IPFS peer if I want to start Bacalhau Server?"),(0,r.kt)("p",null,"A viable option is to run your own IPFS daemon and fetch your multiaddress as explained ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/quick-start/#ensure-ipfs-is-running"},"here"),"."),(0,r.kt)("h2",{id:"can-i-run-bacalhau-serve-on-my-home-machine-what-are-the-requirements"},"Can I run bacalhau serve on my home machine? What are the requirements?"),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau serve")," on any machine that fits the prerequisites listed ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/quick-start/"},"here"),". "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The walkthrough in the docs has been tested only on Ubuntu 22, bacalhau is being developed on Linux/macOS environments and therefore should work fine there as well. However, Windows hosts are supported with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/windows-support/"},"limitations"),".")),(0,r.kt)("h2",{id:"can-i-stop-a-running-job"},"Can I stop a running job?"),(0,r.kt)("p",null,"No. Once a job has been submitted (and accepted), it is currently not possible to stop it from running"))}h.isMDXComponent=!0}}]);