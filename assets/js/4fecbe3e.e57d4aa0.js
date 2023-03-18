"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6063],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Oceanography - Data Conversion",sidebar_position:10,description:"Oceanography data conversion with Bacalhau"},s="Oceanography - Data Conversion",i={unversionedId:"examples/data-engineering/oceanography-conversion/index",id:"examples/data-engineering/oceanography-conversion/index",title:"Oceanography - Data Conversion",description:"Oceanography data conversion with Bacalhau",source:"@site/docs/examples/data-engineering/oceanography-conversion/index.md",sourceDirName:"examples/data-engineering/oceanography-conversion",slug:"/examples/data-engineering/oceanography-conversion/",permalink:"/examples/data-engineering/oceanography-conversion/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/oceanography-conversion/index.md",tags:[],version:"current",lastUpdatedAt:1679157437,formattedLastUpdatedAt:"Mar 18, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"Oceanography - Data Conversion",sidebar_position:10,description:"Oceanography data conversion with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"csv-to-avro-or-parquet",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/"},next:{title:"Model Inference",permalink:"/examples/model-inference/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The Sample Data",id:"the-sample-data",level:2},{value:"Writing the Script",id:"writing-the-script",level:3},{value:"Data Conversion",id:"data-conversion",level:3},{value:"Upload the Data to IPFS",id:"upload-the-data-to-ipfs",level:2},{value:"Setting up Docker Container",id:"setting-up-docker-container",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Need Support?",id:"need-support",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oceanography---data-conversion"},"Oceanography - Data Conversion"),(0,r.kt)("p",null,"\u0192\n",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/oceanography-conversion/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/oceanography-conversion/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("p",null,"The Surface Ocean CO\u2082 Atlas (SOCAT) contains measurements of the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fugacity"},"fugacity")," of CO2 in seawater around the globe. But to calculate how much carbon the ocean is taking up from the atmosphere, these measurements need to be converted to the partial pressure of CO2. We will convert the units by combining measurements of the surface temperature and fugacity.  Python libraries (xarray, pandas, numpy) and the pyseaflux package facilitate this process."),(0,r.kt)("p",null,"In this example tutorial, we will investigate the data and convert the workload so that it can be executed on the Bacalhau network, to take advantage of the distributed storage and compute resources."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"the-sample-data"},"The Sample Data"),(0,r.kt)("p",null,"The raw data is available on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.socat.info/"},"SOCAT website"),". We will use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.socat.info/index.php/version-2021/"},"SOCATv2021"),' dataset in the "Gridded" format to perform this calculation. First, let\'s take a quick look at some data:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir -p inputs\ncurl --output ./inputs/SOCATv2022_tracks_gridded_monthly.nc.zip https://www.socat.info/socat_files/v2022/SOCATv2022_tracks_gridded_monthly.nc.zip\ncurl --output ./inputs/sst.mnmean.nc https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2/sst.mnmean.nc\n")),(0,r.kt)("p",null,"Next let's write the ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," and install the dependencies. This file will also be used by the Dockerfile to install the dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile requirements.txt\nBottleneck==1.3.5\ndask==2022.2.0\nfsspec==2022.5.0\nnetCDF4==1.6.0\nnumpy==1.21.6\npandas==1.3.5\npip==22.1.2\npyseaflux==2.2.1\nscipy==1.7.3\nxarray==0.20.2\nzarr>=2.0.0\n")),(0,r.kt)("p",null,"Installing dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install -r requirements.txt > /dev/null\n")),(0,r.kt)("h3",{id:"writing-the-script"},"Writing the Script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import fsspec # for reading remote files\nimport xarray as xr\nwith fsspec.open(\"./inputs/SOCATv2022_tracks_gridded_monthly.nc.zip\", compression='zip') as fp:\n    ds = xr.open_dataset(fp)\nds.info()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"time_slice = slice(\"2010\", \"2020\") # select a decade\nres = ds['sst_ave_unwtd'].sel(tmnth=time_slice).mean(dim='tmnth') # average over time\nres.plot() # plot the result\n\n")),(0,r.kt)("p",null,"We can see that the dataset contains lat-long coordinates, the date, and a series of seawater measurements. Above you can see a plot of the average surface sea temperature (sst) between 2010-2020, where recording buoys and boats have travelled."),(0,r.kt)("h3",{id:"data-conversion"},"Data Conversion"),(0,r.kt)("p",null,"To convert the data from fugacity of CO2 (fCO2) to partial pressure of CO2 (pCO2) we will combine the measurements of the surface temperature and fugacity. The conversion is performed by the ",(0,r.kt)("a",{parentName:"p",href:"https://seaflux.readthedocs.io/en/latest/api.html?highlight=fCO2_to_pCO2#pyseaflux.fco2_pco2_conversion.fCO2_to_pCO2"},"pyseaflux")," package."),(0,r.kt)("p",null,"To execute this workload on the Bacalhau network we need to perform three steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the data to IPFS"),(0,r.kt)("li",{parentName:"ul"},"Create a docker image with the code and dependencies"),(0,r.kt)("li",{parentName:"ul"},"Run a Bacalhau job with the docker image using the IPFS data")),(0,r.kt)("h2",{id:"upload-the-data-to-ipfs"},"Upload the Data to IPFS"),(0,r.kt)("p",null,'The first step is to upload the data to IPFS. The simplest way to do this is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,r.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage")," or ",(0,r.kt)("a",{parentName:"p",href:"https://pinata.cloud/"},"Pinata"),". Once registered you can use their UI or API or SDKs to upload files."),(0,r.kt)("p",null,"For the purposes of this example:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Downloaded the latest monthly data from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.socat.info/"},"SOCAT website")),(0,r.kt)("li",{parentName:"ol"},"Downloaded the latest long-term global sea surface temperature data from ",(0,r.kt)("a",{parentName:"li",href:"https://downloads.psl.noaa.gov/Datasets/noaa.oisst.v2/sst.mnmean.nc"},"NOAA")," - information about that dataset can be found ",(0,r.kt)("a",{parentName:"li",href:"https://psl.noaa.gov/data/gridded/data.noaa.oisst.v2.highres.html"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Pinned the data to IPFS")),(0,r.kt)("p",null,"This resulted in the IPFS CID of ",(0,r.kt)("inlineCode",{parentName:"p"},"bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile main.py\nimport fsspec\nimport xarray as xr\nimport pandas as pd\nimport numpy as np\nimport pyseaflux\n\n\ndef lon_360_to_180(ds=None, lonVar=None):\n    lonVar = "lon" if lonVar is None else lonVar\n    return (ds.assign_coords({lonVar: (((ds[lonVar] + 180) % 360) - 180)})\n            .sortby(lonVar)\n            .astype(dtype=\'float32\', order=\'C\'))\n\n\ndef center_dates(ds):\n    # start and end date\n    start_date = str(ds.time[0].dt.strftime(\'%Y-%m\').values)\n    end_date = str(ds.time[-1].dt.strftime(\'%Y-%m\').values)\n\n    # monthly dates centered on 15th of each month\n    dates = pd.date_range(start=f\'{start_date}-01T00:00:00.000000000\',\n                          end=f\'{end_date}-01T00:00:00.000000000\',\n                          freq=\'MS\') + np.timedelta64(14, \'D\')\n\n    return ds.assign(time=dates)\n\n\ndef get_and_process_sst(url=None):\n    # get noaa sst\n    if url is None:\n        url = ("/inputs/sst.mnmean.nc")\n\n    with fsspec.open(url) as fp:\n        ds = xr.open_dataset(fp)\n        ds = lon_360_to_180(ds)\n        ds = center_dates(ds)\n        return ds\n\n\ndef get_and_process_socat(url=None):\n    if url is None:\n        url = ("/inputs/SOCATv2022_tracks_gridded_monthly.nc.zip")\n\n    with fsspec.open(url, compression=\'zip\') as fp:\n        ds = xr.open_dataset(fp)\n        ds = ds.rename({"xlon": "lon", "ylat": "lat", "tmnth": "time"})\n        ds = center_dates(ds)\n        return ds\n\n\ndef main():\n    print("Load SST and SOCAT data")\n    ds_sst = get_and_process_sst()\n    ds_socat = get_and_process_socat()\n\n    print("Merge datasets together")\n    time_slice = slice("1981-12", "2022-05")\n    ds_out = xr.merge([ds_sst[\'sst\'].sel(time=time_slice),\n                       ds_socat[\'fco2_ave_unwtd\'].sel(time=time_slice)])\n\n    print("Calculate pco2 from fco2")\n    ds_out[\'pco2_ave_unwtd\'] = xr.apply_ufunc(\n        pyseaflux.fCO2_to_pCO2,\n        ds_out[\'fco2_ave_unwtd\'],\n        ds_out[\'sst\'])\n\n    print("Add metadata")\n    ds_out[\'pco2_ave_unwtd\'].attrs[\'units\'] = \'uatm\'\n    ds_out[\'pco2_ave_unwtd\'].attrs[\'notes\'] = ("calculated using" +\n                                               "NOAA OI SST V2" +\n                                               "and pyseaflux package")\n\n    print("Save data")\n    ds_out.to_zarr("/processed.zarr")\n    import shutil\n    shutil.make_archive("/outputs/processed.zarr", \'zip\', "/processed.zarr")\n    print("Zarr file written to disk, job completed successfully")\n\nif __name__ == "__main__":\n    main()\n')),(0,r.kt)("h2",{id:"setting-up-docker-container"},"Setting up Docker Container"),(0,r.kt)("p",null,"We will create a  ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and add the desired configuration to the file. These commands specify how the image will be built, and what extra requirements will be included."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM python:slim\n\nRUN apt-get update && apt-get -y upgrade \\\n    && apt-get install -y --no-install-recommends \\\n    g++ \\\n    && rm -rf /var/lib/apt/lists/*\n\nWORKDIR /project\n\nCOPY ./requirements.txt /project\n\nRUN pip3 install -r requirements.txt\n\nCOPY ./main.py /project\n\nCMD ["python","main.py"]\n')),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about working with custom containers, see the ",(0,r.kt)("a",{parentName:"p",href:"../../workload-onboarding/custom-containers/"},"custom containers example"),".")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"Now that we have the data in IPFS and the Docker image pushed, next is to run a job using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash  --out job_id\nbacalhau docker run \\\n        --inputs bafybeidunikexxu5qtuwc7eosjpuw6a75lxo7j5ezf3zurv52vbrmqwf6y \\\n        --id-only \\\n        --wait \\\n        ghcr.io/bacalhau-project/examples/socat:0.0.11 -- python main.py\n")),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%env JOB_ID={job_id}\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results\nmkdir -p ./results # Temporary directory to store the results\nbacalhau get --output-dir ./results ${JOB_ID} # Download the results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/combined_results/stdout\n")),(0,r.kt)("h2",{id:"need-support"},"Need Support?"),(0,r.kt)("p",null,"For questions, feedback, please reach out in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}c.isMDXComponent=!0}}]);