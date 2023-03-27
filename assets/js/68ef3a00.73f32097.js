"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const l={sidebar_label:"Apache Airflow",sidebar_position:1},i="Apache Airflow Provider for Bacalhau",r={unversionedId:"integration/apache-airflow",id:"integration/apache-airflow",title:"Apache Airflow Provider for Bacalhau",description:"This is bacalhau-airflow, a Python package that integrates Bacalhau with Apache Airflow.",source:"@site/docs/integration/apache-airflow.md",sourceDirName:"integration",slug:"/integration/apache-airflow",permalink:"/integration/apache-airflow",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/integration/apache-airflow.md",tags:[],version:"current",lastUpdatedAt:1679915215,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Apache Airflow",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"CLI Reference",permalink:"/all-flags"},next:{title:"Debugging Jobs",permalink:"/troubleshooting/debugging"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"From pypi",id:"from-pypi",level:2},{value:"From source",id:"from-source",level:2},{value:"Worked example",id:"worked-example",level:2},{value:"Setup",id:"setup",level:3},{value:"Example DAG: chaining jobs",id:"example-dag-chaining-jobs",level:3},{value:"Run it",id:"run-it",level:3},{value:"Development",id:"development",level:2},{value:"Unit tests",id:"unit-tests",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,o.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apache-airflow-provider-for-bacalhau"},"Apache Airflow Provider for Bacalhau"),(0,o.kt)("p",null,"This is ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau-airflow"),", a Python package that integrates ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},"Bacalhau")," with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/airflow"},"Apache Airflow"),".\nThe benefit is two fold.\nFirst, thanks to this package you can now write complex pipelines for Bacalhau.\nFor instance, jobs can communicate their output's CIDs to downstream jobs, that can use those as inputs.\nSecond, Apache Airflow provides a solid solution to reliably orchestrate your DAGs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f You may try this out using a local devstack until ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/issues/2038"},"https://github.com/bacalhau-project/bacalhau/issues/2038")," has been fixed. Please set the following environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"AIRFLOW_VAR_BACALHAU_API_HOST"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AIRFLOW_VAR_BACALHAU_API_PORT"),".")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create Airflow tasks that run on Bacalhau (via custom operator!)"),(0,o.kt)("li",{parentName:"ul"},"Support for sharded jobs: output shards can be passed downstream (via ",(0,o.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/xcoms.html"},"XComs"),")"),(0,o.kt)("li",{parentName:"ul"},"Coming soon...",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Lineage (see ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/enricorotundo/bacalhau-airflow-provider"},"OpenLineage proof-of-concept integration here"),")"),(0,o.kt)("li",{parentName:"ul"},"Various working code examples"),(0,o.kt)("li",{parentName:"ul"},"Hosting instructions")))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python 3.8+"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pypi.org/project/bacalhau-sdk/"},(0,o.kt)("inlineCode",{parentName:"a"},"bacalhau-sdk")," 0.3.25+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apache-airflow")," 2.3+")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The integration automatically registers itself for Airflow 2.3+ if it's installed on the Airflow worker's Python."),(0,o.kt)("h2",{id:"from-pypi"},"From pypi"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install bacalhau-airflow\n")),(0,o.kt)("h2",{id:"from-source"},"From source"),(0,o.kt)("p",null,"Clone the public repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/bacalhau-project/bacalhau/\n")),(0,o.kt)("p",null,"Once you have a copy of the source, you can install it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd integration/airflow/\npip install .\n")),(0,o.kt)("h2",{id:"worked-example"},"Worked example"),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In a production environment you may want to follow the ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/administration-and-deployment/production-deployment.html"},"official Airflow's instructions")," or pick one of the suggested ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/ecosystem/#airflow-as-a-service"},"hosted solutions"),".")),(0,o.kt)("p",null,"If you're just curious and want to give it a try on your ",(0,o.kt)("em",{parentName:"p"},"local machine"),", please follow the steps below."),(0,o.kt)("p",null,"First, install and initialize Airflow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install apache-airflow\nexport AIRFLOW_HOME=~/airflow\n$ airflow db init\n")),(0,o.kt)("p",null,"Then, we need to point Airflow to the absolute path of the folder where your pipelines live.\nTo do that we edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"dags_folder")," field in ",(0,o.kt)("inlineCode",{parentName:"p"},"${AIRFLOW_HOME}/airflow.cfg")," file.\nIn this example I'm going to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/tree/main/integration/airflow/example_dags"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"hello_world.py")," DAG shipped with this repository"),";\nfor the sake of completeness, the next section will walk you through the actual code."),(0,o.kt)("p",null,"My config file looks like what follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[core]\ndags_folder = /Users/enricorotundo/bacalhau/integration/airflow/example_dags\n...\n")),(0,o.kt)("p",null,"Optionally, to reduce clutter in the Airflow UI, you could disable the loading of the default example DAGs by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"load_examples")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,o.kt)("p",null,"Finally, we can launch Airflow locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"airflow standalone\n")),(0,o.kt)("h3",{id:"example-dag-chaining-jobs"},"Example DAG: chaining jobs"),(0,o.kt)("p",null,"While Airflow's pinwheel is warming up in the background, let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello_world.py")," break down below."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'In brief, the first task of this DAG prints out "Hello World" to stdout, then automatically pipe its output into the subsequent task as an input file. The second task will simply print out the content of its input file.')),(0,o.kt)("p",null,"All you need to import from this package is the ",(0,o.kt)("inlineCode",{parentName:"p"},"BacalhauSubmitJobOperator"),".\nIt allows you to submit a job spec comprised of the usual fields such as engine, image, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\nfrom airflow import DAG\nfrom bacalhau_airflow.operators import BacalhauSubmitJobOperator\n")),(0,o.kt)("p",null,"This operator supports chaining multiple jobs without the need to manually pass any CID along, in this regards a special note goes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"input_volumes")," parameter (see ",(0,o.kt)("inlineCode",{parentName:"p"},"task_2")," below).\nEvery time the operator runs a task, it stores a comma-separated string with the output shard-CIDs in an internal key-value store under the ",(0,o.kt)("inlineCode",{parentName:"p"},"cids")," key.\nThus, downstream tasks can read in those CIDs via the ",(0,o.kt)("inlineCode",{parentName:"p"},"input_volumes")," parameter."),(0,o.kt)("p",null,"All you need to do is (1) use the ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/xcoms.html"},"XComs syntax"),' (in curly brackets) to specify the "sender" task ids and the ',(0,o.kt)("inlineCode",{parentName:"p"},"cids")," key (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ task_instance.xcom_pull(task_ids='task_1', key='cids') }}"),"), (2) define a target mount point separated by a colon (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},":/task_1_output"),")."),(0,o.kt)("p",null,"Lastly, we define task dependencies simply with ",(0,o.kt)("inlineCode",{parentName:"p"},"task_1 >> task_2"),".\nTo learn more about ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html#task-dependencies"},"Airflow's DAG syntax please check out this page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'with DAG("bacalhau-helloworld-dag", start_date=datetime(2023, 3, 1)) as dag:\n    task_1 = BacalhauSubmitJobOperator(\n        task_id="task_1",\n        api_version="V1beta1",\n        job_spec=dict(\n            engine="Docker",\n            verifier="Noop",\n            publisher="IPFS",\n            docker=dict(\n                image="ubuntu",\n                entrypoint=["echo", "Hello World"],\n            ),\n            deal=dict(concurrency=1, confidence=0, min_bids=0),\n        ),\n    )\n\n    task_2 = BacalhauSubmitJobOperator(\n        task_id="task_2",\n        api_version="V1beta1",\n        input_volumes=[\n            "{{ task_instance.xcom_pull(task_ids=\'task_1\', key=\'cids\') }}:/task_1_output",\n        ],\n        job_spec=dict(\n            engine="Docker",\n            verifier="Noop",\n            publisher="IPFS",\n            docker=dict(\n                image="ubuntu",\n                entrypoint=["cat", "/task_1_output/stdout"],\n            ),\n            deal=dict(concurrency=1, confidence=0, min_bids=0),\n        ),\n    )\n\n    task_1 >> task_2\n')),(0,o.kt)("h3",{id:"run-it"},"Run it"),(0,o.kt)("p",null,"Now the we understand what the example DAG is supposed to do, let's just run it!\nHead over to ",(0,o.kt)("a",{parentName:"p",href:"http://0.0.0.0:8080"},"http://0.0.0.0:8080")," were Airflow UI is being served.\nThe screenshot below shows our hello world has been loaded correctly."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5178).Z,width:"2882",height:"2062"})),(0,o.kt)("p",null,"When you inspect a DAG, Airflow will render a graph depicting a color-coded topology (see image below).\nFor active (i.e. running) pipelines, this will be useful to oversee what the status of each task is."),(0,o.kt)("p",null,"To trigger a DAG please enable the toggle shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9139).Z,width:"2882",height:"2062"})),(0,o.kt)("p",null,"When all tasks have completed, we want to fetch the output of our pipeline.\nTo do so we need to retrieve the job-id of the last task.\nClick on a green box in the ",(0,o.kt)("inlineCode",{parentName:"p"},"task_2")," line and then open the XCom tab."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2549).Z,width:"2832",height:"2062"})),(0,o.kt)("p",null,"Here we find the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau_job_id"),".\nSelect that value and copy into your clipboard."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8377).Z,width:"2832",height:"2062"})),(0,o.kt)("p",null,"Lastly, we can use the bacalhau cli ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," command to fetch the output data as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ bacalhau get 8fdab73b-00fd-4d13-941c-8ba002f8178d\nFetching results of job '8fdab73b-00fd-4d13-941c-8ba002f8178d'...\n...\nResults for job '8fdab73b-00fd-4d13-941c-8ba002f8178d' have been written to...\n/tmp/dag-example/job-8fdab73b\n\n$ cat /tmp/dag-example/job-8fdab73b/combined_results/stdout\nHello World\n")),(0,o.kt)("p",null,"That's all folks \ud83c\udf08."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"pip install -r dev-requirements.txt\n")),(0,o.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tox\n")),(0,o.kt)("p",null,"You can also skip using ",(0,o.kt)("inlineCode",{parentName:"p"},"tox")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"pytest")," on your own dev environment."))}d.isMDXComponent=!0},5178:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airflow_01-856fd4d6a8983af140bb7a9d1234ff7d.png"},9139:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airflow_02-194f05da63b0c2a2f7e7e096ad9041e6.png"},2549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airflow_03-21bca78cf14affa0a12de9df898c20f4.png"},8377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/airflow_04-e25e5af140a8152fdd96d8872a9c2d71.png"}}]);