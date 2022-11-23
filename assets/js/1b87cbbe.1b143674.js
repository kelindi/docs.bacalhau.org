"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,b=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(b,l(l({ref:t},u),{},{components:n})):o.createElement(b,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Python - Hello World",sidebar_position:1},l="Python Hello World",i={unversionedId:"examples/workload-onboarding/trivial-python/index",id:"examples/workload-onboarding/trivial-python/index",title:"Python Hello World",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/trivial-python/index.md",sourceDirName:"examples/workload-onboarding/trivial-python",slug:"/examples/workload-onboarding/trivial-python/",permalink:"/examples/workload-onboarding/trivial-python/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/trivial-python/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Python - Hello World",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"How To's",permalink:"/examples/workload-onboarding/"},next:{title:"Python - Pandas",permalink:"/examples/workload-onboarding/python-pandas/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hello, world",id:"hello-world",level:2},{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Get Results",id:"get-results",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-hello-world"},"Python Hello World"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/trivial-python/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/trivial-python/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,a.kt)("p",null,"This example serves as an introduction to Bacalhau, running a Python file hosted on a website."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Make sure you have the latest ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau")," client installed by following the ",(0,a.kt)("a",{parentName:"p",href:"../../../getting-started/installation"},"getting started instructions")," or using the installation command below (which installs Bacalhau local to the notebook)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"env: PATH=./:./:./:/Users/phil/.pyenv/versions/3.9.7/bin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.gvm/bin:/opt/homebrew/opt/findutils/libexec/gnubin:/opt/homebrew/opt/coreutils/libexec/gnubin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.pyenv/shims:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/usr/local/MacGPG2/bin:/Users/phil/.nexustools\n")),(0,a.kt)("h2",{id:"hello-world"},"Hello, world"),(0,a.kt)("p",null,"For this example, we'll be using a very simple Python script which displays the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"traditional first greeting"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"%cat hello-world.py\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'print("Hello, world!")\n')),(0,a.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,a.kt)("p",null,"To submit a workload to Bacalhau you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. While you'll mainly be passing input data into the container using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)")," volumes, we will be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-u URL:path")," argument for a simplicity. This results in Bacalhau mounting a ",(0,a.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/blob/v0.2.3/cmd/bacalhau/docker_run.go#L64"},"Bacalhau overwrites the default entrypoint"),", so we must run the full command after the ",(0,a.kt)("inlineCode",{parentName:"p"},"--")," argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n  --input-urls https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py \\\n  python:3.10-slim -- python3 /inputs/hello-world.py\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Job successfully submitted. Job ID: 15f57de4-4ea1-45ca-899d-fba08fb53420\nChecking job status... (Enter Ctrl+C to exit at any time, your job will continue running):\n\n           Creating job for submission ... done \u2705\n           Finding node(s) for the job ... done \u2705\n                 Node accepted the job ... done \u2705\n       Job finished, verifying results ... done \u2705\n          Results accepted, publishing ... done \u2705\n                                      \nResults CID: QmehTNF6ogbESt26EgrSw9YGrApneSWhPesqw1A5T6ezBe\nJob Results By Node:\nNode QmXaXu9N:\n  Shard 0:\n    Status: Completed\n    Container Exit Code: 0\n    Stdout:\n      Hello, world!\n    Stderr: <NONE>\n\nTo download the results, execute:\n  bacalhau get 15f57de4-4ea1-45ca-899d-fba08fb53420\n\nTo get more details about the run, execute:\n  bacalhau describe 15f57de4-4ea1-45ca-899d-fba08fb53420\n")),(0,a.kt)("h2",{id:"get-results"},"Get Results"),(0,a.kt)("p",null,"If you look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," from the previous command you'll see that it successfully ran the python file."))}d.isMDXComponent=!0}}]);