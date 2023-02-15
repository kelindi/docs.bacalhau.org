"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Simple Image Processing",sidebar_position:1,description:"How to process images stored in IPFS with Bacalhau"},o="Simple Image Processing",s={unversionedId:"examples/data-engineering/image-processing/index",id:"examples/data-engineering/image-processing/index",title:"Simple Image Processing",description:"How to process images stored in IPFS with Bacalhau",source:"@site/docs/examples/data-engineering/image-processing/index.md",sourceDirName:"examples/data-engineering/image-processing",slug:"/examples/data-engineering/image-processing/",permalink:"/examples/data-engineering/image-processing/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/image-processing/index.md",tags:[],version:"current",lastUpdatedAt:1676497308,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Simple Image Processing",sidebar_position:1,description:"How to process images stored in IPFS with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"DuckDB",permalink:"/examples/data-engineering/DuckDB/"},next:{title:"Simple Parallel Workloads",permalink:"/examples/data-engineering/simple-parallel-workloads/"}},l={},p=[{value:"Prerequiste",id:"prerequiste",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Viewing image",id:"viewing-image",level:3},{value:"Need Support?",id:"need-support",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simple-image-processing"},"Simple Image Processing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/image-processing/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering%2Fimage-processing%2Findex.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("p",null,"In this example tutorial, we will show you how to use Bacalhau to process images on a ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72/"},"Landsat dataset"),". "),(0,r.kt)("p",null,"Bacalhau has the unique capability of operating at a massive scale in a distributed environment. This is made possible because data is naturally sharded across the IPFS network amongst many providers. We can take advantage of this to process images in parallel."),(0,r.kt)("h2",{id:"prerequiste"},"Prerequiste"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"To submit a workload to Bacalhau, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n  --wait \\\n  --wait-timeout-secs 100 \\\n  --id-only \\\n  -v QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n")),(0,r.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command allows to pass input data volume with a ",(0,r.kt)("inlineCode",{parentName:"p"},"-v CID:path")," argument just like Docker, except the left-hand side of the argument is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),". This results in Bacalhau mounting a ",(0,r.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,r.kt)("p",null,"Bacalhau also mounts a data volume to store output data. The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command creates an output data volume mounted at ",(0,r.kt)("inlineCode",{parentName:"p"},"/outputs"),". This is a convenient location to store the results of your job. "),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n 13:17:34  0e4119fd  Docker dpokidov/imag...  Completed            /ipfs/QmQnern37ueHrs... \n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results # Temporary directory to store the results\nbacalhau get ${JOB_ID} --output-dir results # Download the results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job '0e4119fd-12f9-42f5-8cd2-54a0d270541e'...\nResults for job '0e4119fd-12f9-42f5-8cd2-54a0d270541e' have been written to...\nresults\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -lah results/combined_results/outputs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"total 196K\ndrwxr-xr-x 2 gitpod gitpod 4.0K Dec 14 13:22 .\ndrwxr-xr-x 3 gitpod gitpod   49 Dec 14 13:22 ..\n-rw-r--r-- 3 gitpod gitpod  15K Dec 14 13:22 cafires_vir_2021231_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  34K Dec 14 13:22 greatsaltlake_oli_2017210_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  13K Dec 14 13:22 greecefires_oli_2021222_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  17K Dec 14 13:22 haitiearthquake_oli_20212_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  42K Dec 14 13:22 iwojima_tmo_2021225_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  11K Dec 14 13:22 lakemead_etm_2000220_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  14K Dec 14 13:22 lapalma_oli_2021141_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  14K Dec 14 13:22 spainfire_oli_2021227_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  16K Dec 14 13:22 sulphursprings_oli_2019254_lrg.jpg\n")),(0,r.kt)("h3",{id:"viewing-image"},"Viewing image"),(0,r.kt)("p",null,"To view the images, we will use ",(0,r.kt)("strong",{parentName:"p"},"glob")," to return all file paths that match a specific pattern. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom IPython.display import Image, display\nfor imageName in glob.glob('results/combined_results/outputs/*.jpg'):\n    display(Image(filename=imageName))\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(7076).Z,width:"100",height:"87"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(4239).Z,width:"100",height:"79"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(7321).Z,width:"100",height:"72"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(7099).Z,width:"100",height:"89"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(8989).Z,width:"100",height:"75"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(5098).Z,width:"94",height:"100"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(8917).Z,width:"100",height:"88"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(9219).Z,width:"100",height:"72"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(4242).Z,width:"100",height:"82"})),(0,r.kt)("h2",{id:"need-support"},"Need Support?"),(0,r.kt)("p",null,"For questions, feedback, please reach out in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}c.isMDXComponent=!0},7076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_0-6d86471f6f5224aff3a7681fa856c6c7.jpg"},4239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_1-8e2c87e8602032b3effac0d28205f613.jpg"},7321:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_2-d00b83ba4b35b9623cd36739dfed9ce8.jpg"},7099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_3-eccd956fa658f24f64d54b0b11cb479e.jpg"},8989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_4-284579a9a15ee50f872330fa318fecd0.jpg"},5098:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_5-15ce99181444dd71784a87734fe7e150.jpg"},8917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_6-ce1d76e887dbf8925dfa4caff69f2a8e.jpg"},9219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_7-8062fe8d98d74f02b0c65b844f9339a0.jpg"},4242:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_20_8-cc2844b1f2ae0e1e773774f3219c0025.jpg"}}]);