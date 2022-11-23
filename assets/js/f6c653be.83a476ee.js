"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Data Ingestion",sidebar_position:10},r="How to Ingest Data For Use in Bacalhau",l={unversionedId:"examples/data-ingestion/index",id:"examples/data-ingestion/index",title:"How to Ingest Data For Use in Bacalhau",description:"Open In Colab",source:"@site/docs/examples/data-ingestion/index.md",sourceDirName:"examples/data-ingestion",slug:"/examples/data-ingestion/",permalink:"/examples/data-ingestion/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-ingestion/index.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Data Ingestion",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"R - Facebook Prophet - Custom Container",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/"},next:{title:"Data Engineering",permalink:"/examples/data-engineering/"}},s={},u=[{value:"Introduction",id:"introduction",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Moving Data via Bacalhau",id:"moving-data-via-bacalhau",level:2},{value:"URL -&gt; IPFS",id:"url---ipfs",level:3},{value:"Using a Third-Party to Pin Data",id:"using-a-third-party-to-pin-data",level:2},{value:"Web3.Storage",id:"web3storage",level:3},{value:"1. Create an Account",id:"1-create-an-account",level:4},{value:"2. Sign In and Create an API Key",id:"2-sign-in-and-create-an-api-key",level:4},{value:"3. Pin a Local File Using Their Test Client",id:"3-pin-a-local-file-using-their-test-client",level:4},{value:"4. Pin a Local File Via Curl",id:"4-pin-a-local-file-via-curl",level:4},{value:"5. Pin Multiple Local Files Via Node.JS",id:"5-pin-multiple-local-files-via-nodejs",level:4},{value:"6. Pin Files Via the IPFS CLI",id:"6-pin-files-via-the-ipfs-cli",level:4},{value:"7. Pin A File from a URL Via Curl",id:"7-pin-a-file-from-a-url-via-curl",level:4},{value:"8. Pin A File from a URL Via Node.JS",id:"8-pin-a-file-from-a-url-via-nodejs",level:4},{value:"Estuary",id:"estuary",level:3},{value:"1. Create an Account",id:"1-create-an-account-1",level:4},{value:"2. Create an API Key",id:"2-create-an-api-key",level:4},{value:"3. Pin a Local File via the Esturay UI",id:"3-pin-a-local-file-via-the-esturay-ui",level:4},{value:"4. Pin a Local File Via Curl",id:"4-pin-a-local-file-via-curl-1",level:4},{value:"5. View Pinned Files",id:"5-view-pinned-files",level:4}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-ingest-data-for-use-in-bacalhau"},"How to Ingest Data For Use in Bacalhau"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-ingestion/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-ingestion/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,i.kt)("p",null,"Before you can start crunching data, you need to make it addressable and accessible via ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),". This notebook will demonstrate several ways to do that."),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The goal of the Bacalhau project is to make it easy to perform distributed, decentralised computation next to where the data resides. So a key step in this process is making your data accessible."),(0,i.kt)("p",null,"IPFS is a set of protocols that allow data to be discovered and accessed in a decentralised way. Data is identified by its content identifier (CID) and can be accessed by anyone who knows the CID. This notebook will show you two ways of interacting with IPFS to move your data from one place (e.g. your machine) to IPFS."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"Bacalhau CLI")," (if you want to run the Bacalhau examples)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," (if you want to run the Docker examples)")),(0,i.kt)("h2",{id:"moving-data-via-bacalhau"},"Moving Data via Bacalhau"),(0,i.kt)("p",null,"The easiest way to move data into IPFS is by leveraging helper functions in the Bacalhau CLI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!(export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Your system is darwin_arm64\n\nBACALHAU CLI is detected:\nClient Version: v0.3.2\nServer Version: v0.3.2\nReinstalling BACALHAU CLI - ./bacalhau...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.2 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.2/bacalhau_v0.3.2_darwin_arm64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.2/bacalhau_v0.3.2_darwin_arm64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into . successfully.\nClient Version: v0.3.2\nServer Version: v0.3.2\nenv: PATH=./:./:./:./:./:/Users/phil/.pyenv/versions/3.9.7/bin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.gvm/bin:/opt/homebrew/opt/findutils/libexec/gnubin:/opt/homebrew/opt/coreutils/libexec/gnubin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.pyenv/shims:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/usr/local/MacGPG2/bin:/Users/phil/.nexustools\n")),(0,i.kt)("h3",{id:"url---ipfs"},"URL -> IPFS"),(0,i.kt)("p",null,"The Bacalhau binary includes a helper function to upload from a public URL. This is useful if you have data hosted on a website or in a public S3 bucket (for example)."),(0,i.kt)("p",null,"The following code copies the data from a specified URL to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/ouputs")," directory of a Bacalhau job, and then uploads it to IPFS. Bacalhau will return the CID of the uploaded data."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Be careful with the syntax of the command in this example. The ",(0,i.kt)("inlineCode",{parentName:"p"},"--input-urls")," flag only supports writing from a single URL that represents a file to a single path that includes a file. You cannot write to a directory."),(0,i.kt)("p",{parentName:"admonition"},"To make sure, you can add an ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," to the command to see what is exposed in the input directory and then download the result and look at the stdout.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n    --wait \\\n    --id-only \\\n    --input-urls http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz ubuntu -- cp -rv /inputs/. /outputs/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"env: JOB_ID=de712a10-37dc-4ceb-915d-571ad00a6bf4\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID} --wide\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED           \x1b[0m\x1b[92;100m ID                                   \x1b[0m\x1b[92;100m JOB                                      \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED                                            \x1b[0m\n\x1b[97;40m 22-10-11-10:04:01 \x1b[0m\x1b[97;40m de712a10-37dc-4ceb-915d-571ad00a6bf4 \x1b[0m\x1b[97;40m Docker ubuntu cp -rv /inputs/. /outputs/ \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/Qma5e6EDpPe2TsKuz3tumSPSta6vtx48A18f9k99HJATfp \x1b[0m\n")),(0,i.kt)("p",null,"The output of the list command presents the CID of the output directory. You can use this in subsequent jobs. For example, let's run a simple command to ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," the contents of that CID."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This file is not pinned. There is no guarantee that the file will exist in the future. If you want to ensure that the file is pinned, use a pinning service.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run --inputs Qma5e6EDpPe2TsKuz3tumSPSta6vtx48A18f9k99HJATfp ubuntu -- ls -l /inputs/outputs/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Job successfully submitted. Job ID: 28850250-687d-440e-b6e6-fb809ead8f97\nChecking job status... (Enter Ctrl+C to exit at any time, your job will continue running):\n\n           Creating job for submission ... done \u2705\n           Finding node(s) for the job ... done \u2705\n                 Node accepted the job ... done \u2705\n                                       ... done \u2705\n       Job finished, verifying results ... done \u2705\n          Results accepted, publishing ... done \u2705\n                                      \nResults CID: QmSTbh1wRkwcNkjTmCWjUWxwaBs1q2BtG5r2U6mere5ARc\nJob Results By Node:\nNode QmXaXu9N:\n  Shard 0:\n    Status: Cancelled\n    No RunOutput for this shard\nNode QmYgxZiy:\n  Shard 0:\n    Status: Completed\n    Container Exit Code: 0\n    Stdout:\n      total 9684\n-rw-r--r-- 1 root root 9912422 Oct 11 10:04 train-images-idx3-ubyte.gz\n    Stderr: <NONE>\nNode QmdZQ7Zb:\n  Shard 0:\n    Status: Cancelled\n    No RunOutput for this shard\n\nTo download the results, execute:\n  bacalhau get 28850250-687d-440e-b6e6-fb809ead8f97\n\nTo get more details about the run, execute:\n  bacalhau describe 28850250-687d-440e-b6e6-fb809ead8f97\n")),(0,i.kt)("h2",{id:"using-a-third-party-to-pin-data"},"Using a Third-Party to Pin Data"),(0,i.kt)("p",null,"If you have data that you want to make available to your Bacalhau jobs (or other people), you can pin it using a pinning service. Pinning services store data on behalf of users and expose the data over IPFS. The pinning provider is essentially guaranteeing that your data will be available if someone knows the CID. Implementation details differ, but the pinning services often use a combination of IPFS nodes and third-party storage providers which are paid for via cryptocurrencies like Filecoin. Most pinning services offer you a free tier, so you can try them out without spending any money."),(0,i.kt)("h3",{id:"web3storage"},"Web3.Storage"),(0,i.kt)("p",null,"This example will demonstrate how to pin data using Web3.Storage. Web3.Storage is a pinning service that is built on top of IPFS and Filecoin. It is free to use for small amounts of data, and has a generous free tier. You can find more information about Web3.Storage ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/"},"here"),"."),(0,i.kt)("h4",{id:"1-create-an-account"},"1. Create an Account"),(0,i.kt)("p",null,"First you need to create an account (if you don't have one already). Browse to ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/login/"},"https://web3.storage/login/")," and sign up."),(0,i.kt)("h4",{id:"2-sign-in-and-create-an-api-key"},"2. Sign In and Create an API Key"),(0,i.kt)("p",null,"Next, sign in and browse to the ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/tokens/?create=true"},'"Create API Key" page'),". Follow the instructions to create an API key. Once created, you will need to copy the API key to your clipboard."),(0,i.kt)("h4",{id:"3-pin-a-local-file-using-their-test-client"},"3. Pin a Local File Using Their Test Client"),(0,i.kt)("p",null,"To test that your API key is working, use ",(0,i.kt)("a",{parentName:"p",href:"https://bafybeic5r5yxjh5xpmeczfp34ysrjcoa66pllnjgffahopzrl5yhex7d7i.ipfs.dweb.link/"},"web3.storage's test client to test that it's working"),"."),(0,i.kt)("p",null,"You can now see (or upload) your file via the web3.storage account page: ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/account/"},"https://web3.storage/account/"),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Note that you shouldn't share your API key with anyone. Delete this API key once you have finished with this example.")),(0,i.kt)("h4",{id:"4-pin-a-local-file-via-curl"},"4. Pin a Local File Via Curl"),(0,i.kt)("p",null,"You can also pin a file via curl. Please view the ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/reference/http-api/"},"API documentation")," to see all available commands. This example submits a single file to be pinned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\necho hello world > foo.txt\ncurl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H "X-NAME: foo.txt" -d @foo.txt\n')),(0,i.kt)("h4",{id:"5-pin-multiple-local-files-via-nodejs"},"5. Pin Multiple Local Files Via Node.JS"),(0,i.kt)("p",null,"Web3.Storage has a ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/reference/js-client-library/"},"node.js library")," to interact with their API. The following example requires node.js to be installed. The following code uses a docker container. The javascript code is located on ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/intro/#create-the-upload-script"},"their website")," or on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/blob/main/data-ingestion/nodejs/put-files.js"},"github"),"."),(0,i.kt)("p",null,"First create some files to upload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile nodejs/test1.txt\nFirst test file\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Overwriting nodejs/test1.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile nodejs/test2.txt\nSecond test file\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Overwriting nodejs/test2.txt\n")),(0,i.kt)("p",null,"Then run the following command, which uses the environmental variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," to authenticate with the API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export TOKEN=YOUR_API_KEY\ndocker run --rm --env TOKEN=$TOKEN -v $PWD/nodejs:/nodejs node:18-alpine ash -c 'cd /nodejs && npm install && node put-files.js --token=$TOKEN test1.txt test2.txt'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nup to date, audited 245 packages in 706ms\n\n54 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\nUploading 2 files\nContent added with CID: bafybeic5smk3bgbsisp566kapp5clmo2ofgmvf223behdpcvjpndpnafka\n")),(0,i.kt)("p",null,"The CID listed at the bottom can now be used as an input to Bacalhau."),(0,i.kt)("h4",{id:"6-pin-files-via-the-ipfs-cli"},"6. Pin Files Via the IPFS CLI"),(0,i.kt)("p",null,"See the web3.storage documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/how-tos/pinning-services-api/#using-the-ipfs-cli"},"instructions on how to pin files via the IPFS CLI"),"."),(0,i.kt)("h4",{id:"7-pin-a-file-from-a-url-via-curl"},"7. Pin A File from a URL Via Curl"),(0,i.kt)("p",null,"You can use curl to download a file then re-upload to web3.storage. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\ncurl -o train-images-idx3-ubyte.gz http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz\ncurl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H "X-NAME: train-images-idx3-ubyte.gz" -d @train-images-idx3-ubyte.gz\n')),(0,i.kt)("p",null,"Which results in something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 9680k  100 9680k    0     0  6281k      0  0:00:01  0:00:01 --:--:-- 6318k\n{"cid":"bafybeiereqxn546lkskldoybaa4xe7wk5fricm33nor4oofrxphlaywwd4","carCid":"bagbaieran5ufs752r5vdforovbnjc2gur7kzrsanr3avphsyp7hd6fms7pia"}%  \n')),(0,i.kt)("h4",{id:"8-pin-a-file-from-a-url-via-nodejs"},"8. Pin A File from a URL Via Node.JS"),(0,i.kt)("p",null,"You can combine the node.js example above with a ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," to then upload it to web3.storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --env TOKEN=$TOKEN -v $PWD/nodejs:/nodejs node:18-alpine ash -c 'cd /nodejs && wget http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz && npm install && node put-files.js --token=$TOKEN train-images-idx3-ubyte.gz'\n")),(0,i.kt)("h3",{id:"estuary"},"Estuary"),(0,i.kt)("p",null,"This example show you how to pin data using ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"https://estuary.tech"),"."),(0,i.kt)("h4",{id:"1-create-an-account-1"},"1. Create an Account"),(0,i.kt)("p",null,"Before you can upload files via estuary, you need an account. ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech"},"Sign up"),"."),(0,i.kt)("h4",{id:"2-create-an-api-key"},"2. Create an API Key"),(0,i.kt)("p",null,"Browse to ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"the API Key mangement page")," and create a key."),(0,i.kt)("h4",{id:"3-pin-a-local-file-via-the-esturay-ui"},"3. Pin a Local File via the Esturay UI"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/upload"},"browse to the Estuary UI")," to upload a file via your web browser."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Due to the way Estuary batches files for pinning, it may take some time before your file is accessible/listable.")),(0,i.kt)("h4",{id:"4-pin-a-local-file-via-curl-1"},"4. Pin a Local File Via Curl"),(0,i.kt)("p",null,"Please view the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.estuary.tech/tutorial-uploading-your-first-file"},"API documentation")," to see all available commands. This example submits a single file to be pinned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\necho hello world > foo.txt\ncurl -X POST https://upload.estuary.tech/content/add -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: multipart/form-data" -F "data=@foo.txt"\n')),(0,i.kt)("p",null,"The response will return the CID of the file."),(0,i.kt)("h4",{id:"5-view-pinned-files"},"5. View Pinned Files"),(0,i.kt)("p",null,"If the upload was successful, you can view the file via your ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/home"},"estuary account page"),"."),(0,i.kt)("p",null,"Alternatively, you can obtain this information from the CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET -H "Authorization: Bearer ${TOKEN}" https://api.estuary.tech/content/list\n')))}c.isMDXComponent=!0}}]);