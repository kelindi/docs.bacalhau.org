"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=l,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_label:"Installation",sidebar_position:1},r="Getting Started with Bacalhau",i={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Getting Started with Bacalhau",description:"In this tutorial, you'll learn how to install and run a job with the Bacalhau client.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedAt:1677166483,formattedLastUpdatedAt:"Feb 23, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Installation",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Landscape",permalink:"/about-bacalhau/compute-landscape"},next:{title:"Onboard Docker Workload",permalink:"/getting-started/docker-workload-onboarding"}},s={},u=[{value:"Install the Bacalhau Client",id:"install-the-bacalhau-client",level:2},{value:"Installing the Bacalhau CLI Locally",id:"installing-the-bacalhau-cli-locally",level:3},{value:"Running The Bacalhau CLI Via Docker",id:"running-the-bacalhau-cli-via-docker",level:3},{value:"Verify the Installation",id:"verify-the-installation",level:3},{value:"Submit a &quot;Hello World&quot; job",id:"submit-a-hello-world-job",level:2},{value:"Get results",id:"get-results",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2},{value:"Need Support?",id:"need-support",level:2}],c={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getting-started-with-bacalhau"},"Getting Started with Bacalhau"),(0,l.kt)("p",null,"In this tutorial, you'll learn how to install and run a job with the Bacalhau client."),(0,l.kt)("h2",{id:"install-the-bacalhau-client"},"Install the Bacalhau Client"),(0,l.kt)("p",null,"The Bacalhau client is a command-line interface (CLI) that allows you to submit jobs to the Bacalhau network. The Bacalhau client is available for Linux, macOS, and Windows. It is also available as a Docker image."),(0,l.kt)("h3",{id:"installing-the-bacalhau-cli-locally"},"Installing the Bacalhau CLI Locally"),(0,l.kt)("p",null,"You can install or update the Bacalhau CLI by running the following command in a terminal.\nIt will prompt for the root password to copy the Bacalhau binary to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Windows users can download the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/releases"},"latest release tarball from Github")," and extract ",(0,l.kt)("inlineCode",{parentName:"p"},"bacalhau.exe")," to anywhere that is on the PATH.")),(0,l.kt)("h3",{id:"running-the-bacalhau-cli-via-docker"},"Running The Bacalhau CLI Via Docker"),(0,l.kt)("p",null,"Instead of installing the client, you can use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/orgs/bacalhau-project/packages/container/package/bacalhau"},"Bacalhau Docker image")," to run the client. There's also a ",(0,l.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/bacalhau-docker-image/"},"comprehensive example"),". To pull the latest image run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull ghcr.io/bacalhau-project/bacalhau:latest\n")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},'Remember that the "latest" tag is just a string. It doesn\'t refer to the latest version of the Bacalhau client, it refers to an image that has the "latest" tag. Therefore, if your machine has already downloaded the "latest" image, it won\'t download it again. To force a download, you can use the ',(0,l.kt)("inlineCode",{parentName:"p"},"--no-cache")," flag.")),(0,l.kt)("p",null,"Now you can run any Bacalhau client command by prefixing it with ",(0,l.kt)("inlineCode",{parentName:"p"},"docker run ghcr.io/bacalhau-project/bacalhau:latest"),". For example, to run the ",(0,l.kt)("inlineCode",{parentName:"p"},"version")," command, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -it ghcr.io/bacalhau-project/bacalhau:latest version\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you want to pass files between the Docker Bacalhau CLI and your desktop, don't forget to mount a volume. You can see an example of this in the ",(0,l.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/bacalhau-docker-image/"},"Bacalhau Docker example"),".")),(0,l.kt)("h3",{id:"verify-the-installation"},"Verify the Installation"),(0,l.kt)("p",null,"Once your Bacalhau client is installed, it will show the client and server version. Your client and server versions must be aligned before you can run a job with Bacalhau client. You can use the code below to check this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau version\n")),(0,l.kt)("p",null,"If you're wondering which server is being used, the Bacalhau Project has a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/#our-vision"},"public Bacalhau server network")," that's shared with the community. This server allows you to launch your jobs from your computer without maintaining a compute cluster on your own."),(0,l.kt)("p",null,"Going further, we will look at some commands to run a simple job. For a complete overview of the ",(0,l.kt)("inlineCode",{parentName:"p"},"bacalhau")," commands, take a look at the ",(0,l.kt)("a",{parentName:"p",href:"../all-flags"},"CLI Reference page"),"."),(0,l.kt)("h2",{id:"submit-a-hello-world-job"},'Submit a "Hello World" job'),(0,l.kt)("p",null,"The easiest way to submit a job is using the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker run")," verb. Let's take a quick look at its syntax:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bacalhau docker run [FLAGS] IMAGE[:TAG] [COMMAND]")),(0,l.kt)("p",null,"While the command is designed to resemble Docker's run command which you may be familiar with, Bacalhau introduces a whole new set of ",(0,l.kt)("a",{parentName:"p",href:"../all-flags#docker-run"},"available flags (see CLI Reference)")," to support its computing model."),(0,l.kt)("p",null,"The command below submits a job that runs an ",(0,l.kt)("inlineCode",{parentName:"p"},"echo")," program within an ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ubuntu"},"Ubuntu container"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau docker run ubuntu echo Hello World\n")),(0,l.kt)("p",null,"When a job is sumbitted, Bacalhau prints out the related job id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Job successfully submitted. Job ID: 3b39baee-5714-4f17-aa71-1f5824665ad6\nChecking job status...\n")),(0,l.kt)("p",null,"The job id above is shown in its full form. For convenience, you can use the shortened version, in this case: ",(0,l.kt)("inlineCode",{parentName:"p"},"3b39baee"),". We will store that portion of the job id in an environment variable so that we can reuse it later on."),(0,l.kt)("p",null,"After the above command is run, a job is submitted to the public network, which processes the job as described in the ",(0,l.kt)("a",{parentName:"p",href:"../about-bacalhau/architecture#job-lifecycle"},"Job Lifecycle page"),". To check the current job's state, we can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," verb as shown below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ export JOB_ID=3b39baee # make sure to use the right job id from the docker run command\n\n$ bacalhau list --id-filter=${JOB_ID}\n")),(0,l.kt)("p",null,"The list command prints out the following text:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  COMPLETED\n 07:20:32  3b39baee  Docker ubuntu echo H...  Published            /ipfs/bafybeidu4zm6w...\n")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Completed")," state indicates the job has completed successfully and the results are stored in the IPFS location under the ",(0,l.kt)("inlineCode",{parentName:"p"},"PUBLISHED")," column."),(0,l.kt)("p",null,"For a comprehensive list of flags you can pass to the list command check out ",(0,l.kt)("a",{parentName:"p",href:"../all-flags#list"},"the related CLI Reference page"),"."),(0,l.kt)("h2",{id:"get-results"},"Get results"),(0,l.kt)("p",null,"After the job has finished processing, its outputs are stored on IPFS. To download outputs locally."),(0,l.kt)("p",null,"First, we'll create a directory that will store our job outputs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p /tmp/myfolder\n$ cd /tmp/myfolder\n")),(0,l.kt)("p",null,"Next, we use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," verb to download the job outputs into the current directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau get ${JOB_ID}\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," command may be slow at times, please be patient or retry upon failure.")),(0,l.kt)("p",null,"At this point, the outputs have been downloaded locally and we are ready to inspect them. Each job creates 3 subfolders: the ",(0,l.kt)("em",{parentName:"p"},"combined_results"),", ",(0,l.kt)("em",{parentName:"p"},"per_shard")," files, and the ",(0,l.kt)("em",{parentName:"p"},"raw")," directory. In each of these sub_folders, you'll find the ",(0,l.kt)("em",{parentName:"p"},"stdout")," and ",(0,l.kt)("em",{parentName:"p"},"stderr")," file."),(0,l.kt)("p",null,"For the scope this of this guide, we will only look at the ",(0,l.kt)("strong",{parentName:"p"},"stdout")," file. To inspect the content of the file, use the code below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /tmp/myfolder/job-id/combined_results/stdout\n")),(0,l.kt)("p",null,"That should print out the string ",(0,l.kt)("inlineCode",{parentName:"p"},"Hello World"),".\nWith that, you have just sucessfully run a job on the Bacalhau network! \ud83d\udc1f"),(0,l.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,l.kt)("p",null,"Here are a few resources that provides a deeper dive into running jobs with Bacalhau:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/getting-started/docker-workload-onboarding"},"How to run an existing workload on Bacalhau")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/examples/data-engineering/image-processing/"},"Walk through a more data intensive demo")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all-flags"},"Check out the Bacalhau CLI Reference page"))),(0,l.kt)("h2",{id:"need-support"},"Need Support?"),(0,l.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,l.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Bacalhau team via Slack (#bacalhau channel)")))}h.isMDXComponent=!0}}]);