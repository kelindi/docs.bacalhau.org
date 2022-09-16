"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const o={sidebar_label:"Docker Template",sidebar_position:2},l="Title of Example",i={unversionedId:"examples/templates/docker-template/index",id:"examples/templates/docker-template/index",title:"Title of Example",description:"This notebook shows how to use Docker in a notebook. Other simpler templates are available in the templates directory.",source:"@site/docs/examples/templates/docker-template/index.md",sourceDirName:"examples/templates/docker-template",slug:"/examples/templates/docker-template/",permalink:"/examples/templates/docker-template/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/templates/docker-template/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Docker Template",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Basic Template",permalink:"/examples/templates/basic-template/"},next:{title:"Overview",permalink:"/running-node/"}},c={},s=[{value:"Example Container Run",id:"example-container-run",level:2},{value:"Example Container Build and Run",id:"example-container-build-and-run",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"title-of-example"},"Title of Example"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This notebook shows how to use Docker in a notebook. Other simpler templates are available in the ",(0,r.kt)("a",{parentName:"p",href:".."},"templates")," directory.")),(0,r.kt)("p",null,"This example requires Docker. If you don't have Docker installed, you can install it from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'!command -v docker >/dev/null 2>&1 || { echo >&2 "I require docker but it\'s not installed.  Aborting."; exit 1; }\n')),(0,r.kt)("h2",{id:"example-container-run"},"Example Container Run"),(0,r.kt)("p",null,"This example runs a container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run --rm hello-world\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n    (arm64v8)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n')),(0,r.kt)("h2",{id:"example-container-build-and-run"},"Example Container Build and Run"),(0,r.kt)("p",null,"And this example shows you how to build a container and run it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM ubuntu:latest\nRUN echo "built"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Overwriting Dockerfile\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\ndocker build -t myimage .\ndocker run --rm myimage echo "works!"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"works!\n\n\n#1 [internal] load build definition from Dockerfile\n#1 sha256:74af154ae2ac123245b8df9e2b42787668440fd24078ceb686663bc3731b2578\n#1 transferring dockerfile: 78B done\n#1 DONE 0.0s\n\n#2 [internal] load .dockerignore\n#2 sha256:da1201b85feb52129655bd8a173ed303b1f452fec29db8561615e8945fa430a1\n#2 transferring context: 2B done\n#2 DONE 0.0s\n\n#3 [internal] load metadata for docker.io/library/ubuntu:latest\n#3 sha256:abd44fdc5704a1f31ce24272a9c459712f2a16d9c7c7ce9bcc7a9b6c11e01aa9\n#3 DONE 0.6s\n\n#4 [1/2] FROM docker.io/library/ubuntu:latest@sha256:20fa2d7bb4de7723f542be5923b06c4d704370f0390e4ae9e1c833c8785644c1\n#4 sha256:ecb55e1c6e99b222a30124fe4f604e87265732d794a19c4d0256314619091953\n#4 DONE 0.0s\n\n#5 [2/2] RUN echo \"built\"\n#5 sha256:055bd4b2d00eacbbdc2aed5df1c88d58721f8ea4b1b4e6c01536d6e656d64f49\n#5 CACHED\n\n#6 exporting to image\n#6 sha256:e8c613e07b0b7ff33893b694f7759a10d42e180f2b4dc349fb57dc6b71dcab00\n#6 exporting layers done\n#6 writing image sha256:13f4b7e419b299b9e194b5e50af30861ebaea6e93c2e734b413f6a1cc935d863 done\n#6 naming to docker.io/library/myimage done\n#6 DONE 0.0s\n\nUse 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them\n")))}p.isMDXComponent=!0}}]);