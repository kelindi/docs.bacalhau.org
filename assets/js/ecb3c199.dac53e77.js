"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"csv-to-avro-or-parquet",sidebar_position:10},i="Convert CSV To Parquet Or Avro",l={unversionedId:"examples/data-engineering/csv-to-avro-or-parquet/index",id:"examples/data-engineering/csv-to-avro-or-parquet/index",title:"Convert CSV To Parquet Or Avro",description:"Open In Colab",source:"@site/docs/examples/data-engineering/csv-to-avro-or-parquet/index.md",sourceDirName:"examples/data-engineering/csv-to-avro-or-parquet",slug:"/examples/data-engineering/csv-to-avro-or-parquet/",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/csv-to-avro-or-parquet/index.md",tags:[],version:"current",lastUpdatedAt:1676486319,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"csv-to-avro-or-parquet",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"Ethereum Blockchain Analysis",permalink:"/examples/data-engineering/blockchain-etl/"},next:{title:"Oceanography - Data Conversion",permalink:"/examples/data-engineering/oceanography-conversion/"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running CSV to Arvo or Parquet Locally\u200b",id:"running-csv-to-arvo-or-parquet-locally",level:2},{value:"Setting up your Docker Container",id:"setting-up-your-docker-container",level:2},{value:"Building your Docker Container",id:"building-your-docker-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Mounting the CSV File from IPFS",id:"mounting-the-csv-file-from-ipfs",level:3},{value:"Mounting the CSV File from an URL",id:"mounting-the-csv-file-from-an-url",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convert-csv-to-parquet-or-avro"},"Convert CSV To Parquet Or Avro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/csv-to-avro-or-parquet/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/csv-to-avro-or-parquet/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Converting from csv to parquet or avro reduces the size of file and allows for faster read and write speeds. With Bacalhau, you can convert your csv files stored on ipfs or on the web without the need to download files and install dependencies locally."),(0,r.kt)("p",null,"In this example tutorial we will convert a csv file from a url to parquet format and save the converted parquet file to IPFS"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"running-csv-to-arvo-or-parquet-locally"},"Running CSV to Arvo or Parquet Locally\u200b"),(0,r.kt)("p",null,"Installing dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ngit clone https://github.com/js-ts/csv_to_avro_or_parquet/\npip3 install -r csv_to_avro_or_parquet/requirements.txt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%cd csv_to_avro_or_parquet\n")),(0,r.kt)("p",null,"Downloading the test dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!wget https://raw.githubusercontent.com/js-ts/csv_to_avro_or_parquet/master/movies.csv  \n")),(0,r.kt)("p",null,"Running the conversion script arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython3 src/converter.py ./movies.csv  ./movies.parquet parquet\n\n# python converter.py path_to_csv path_to_result_file extension\n")),(0,r.kt)("p",null,"Viewing the parquet file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\npd.read_parquet('./movies.parquet').head()\n")),(0,r.kt)("h2",{id:"setting-up-your-docker-container"},"Setting up your Docker Container"),(0,r.kt)("p",null,":::Info\nYou can skip this section entirely and directly go to running on bacalhau\n:::"),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to build your image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM python:3.8\n\nRUN apt update && apt install git\n\nRUN git clone https://github.com/js-ts/Sparkov_Data_Generation/\n\nWORKDIR /Sparkov_Data_Generation/\n\nRUN pip3 install -r requirements.txt\n")),(0,r.kt)("h3",{id:"building-your-docker-container"},"Building your Docker Container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"Follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub. Before pushing you first need to create a repo which you can create by following the instructions here ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/repos/"},"https://docs.docker.com/docker-hub/repos/")),(0,r.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on Bacalhau."),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"There are two ways to do this either by mounting the script from a IPFS or from an URL"),(0,r.kt)("h3",{id:"mounting-the-csv-file-from-ipfs"},"Mounting the CSV File from IPFS"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-i QmTAQMGiSv9xocaB4PUCT5nSBHrf9HZrYj21BAZ5nMTY2W  \\\n--wait \\\n--id-only \\\n jsacex/csv-to-arrow-or-parquet \\\n-- python3 src/converter.py ../inputs/transactions.csv  ../outputs/transactions.parquet parquet\n")),(0,r.kt)("h3",{id:"mounting-the-csv-file-from-an-url"},"Mounting the CSV File from an URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\n-u https://raw.githubusercontent.com/js-ts/csv_to_avro_or_parquet/master/movies.csv   jsacex/csv-to-arrow-or-parquet \\\n-- python3 src/converter.py ../inputs/movies.csv  ../outputs/movies.parquet parquet\n")),(0,r.kt)("p",null,"When a job is sumbitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"env: JOB_ID=94774248-1d07-4121-aac8-451aca4a636e\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 10:19:19 \x1b[0m\x1b[97;40m 94774248 \x1b[0m\x1b[97;40m Docker jsacex/csv-to... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmdHJaMmQHs9fE... \x1b[0m\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job '94774248-1d07-4121-aac8-451aca4a636e'...\nResults for job '94774248-1d07-4121-aac8-451aca4a636e' have been written to...\nresults\n\n\n2022/11/12 10:20:09 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),",",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/combined_results/stdout\n")),(0,r.kt)("p",null,"Alternatively, you can do this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport os\npd.read_parquet('results/combined_results/stdout/transactions.parquet')\n")))}p.isMDXComponent=!0}}]);