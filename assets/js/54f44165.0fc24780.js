"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[152],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_label:"Installation",sidebar_position:2},u="Getting Started with the Public Bacalhau Network",p={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Getting Started with the Public Bacalhau Network",description:"Install the CLI",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/about-bacalhau/introduction"},next:{title:"Introduction",permalink:"/demos/hello-bacalhau"}},c=[{value:"Install the CLI",id:"install-the-cli",children:[],level:2},{value:"Run a &quot;hello world&quot; job",id:"run-a-hello-world-job",children:[],level:2},{value:"Introducing data and volumes",id:"introducing-data-and-volumes",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-the-public-bacalhau-network"},"Getting Started with the Public Bacalhau Network"),(0,o.kt)("h2",{id:"install-the-cli"},"Install the CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -sL https://bacalhau.org/install.sh | bash\n")),(0,o.kt)("h2",{id:"run-a-hello-world-job"},'Run a "hello world" job'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau run ubuntu echo hello\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[2207] INF jsonrpc/jsonrpc_client.go:73 > Submitted Job Id: fa11069f-17e0-47de-b8b5-37444cb396b5\nfa11069f-17e0-47de-b8b5-37444cb396b5\n")),(0,o.kt)("p",null,"Copy the first part of the job id, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"fa11069f"),", we'll use it in a moment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau list --wide |grep -A 2 JOB_ID\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"JOB_ID")," with the job id you copied in the last step."),(0,o.kt)("p",null,"Only one of the production servers accepted the job, because you only requested a concurrency setting of 1 (the default in ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau run"),")."),(0,o.kt)("p",null,"You should see something like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," fa11069f   QmdZQ7Zb  bid_rejected  /ipfs/\n            QmXaXu9N  complete      /ipfs/QmQtZKRPXehLU5JroBbzBCVdhNkgZT7m4MiSD7sUVxE3LD\n            QmYgxZiy  bid_rejected  /ipfs/\n")),(0,o.kt)("p",null,"Copy the CID (in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"QmQtZKRPXehLU5JroBbzBCVdhNkgZT7m4MiSD7sUVxE3LD"),"), and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipfs get CID\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CID")," with the CID you copied above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Saving file(s) to QmQtZKRPXehLU5JroBbzBCVdhNkgZT7m4MiSD7sUVxE3LD\n 120 B / 120 B [==================================================================] 100.00% 0s\n")),(0,o.kt)("p",null,"Now read the stdout"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat QmQtZKRPXehLU5JroBbzBCVdhNkgZT7m4MiSD7sUVxE3LD/stdout\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hello\n")),(0,o.kt)("p",null,"Hooray, you have just run a job on the Bacalhau network!"),(0,o.kt)("h2",{id:"introducing-data-and-volumes"},"Introducing data and volumes"),(0,o.kt)("p",null,"We are hosting some ",(0,o.kt)("a",{parentName:"p",href:"http://cloudflare-ipfs.com/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72"},"Landsat data on IPFS")," on the production Bacalhau nodes."),(0,o.kt)("p",null,"You can run a job against the data without having to download it!\nIn this example we resize all the images down to 100x100px."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau run")," takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," argument just like Docker, except the left hand side of the argument is a CID.\nIt then ensures that CID is mounted into the container at the desired location as an input volume."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau run")," also supports a ",(0,o.kt)("inlineCode",{parentName:"p"},"-o")," argument for output volumes. This is where you write the results of your job. See below for an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau run \\\n  -v QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  -o results:/output_images \\\n  dpokidov/imagemagick \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /output_images /input_images/*.jpg\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau list |grep -A 2 JOB_ID\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"JOB_ID")," with the first part of the job id from the last step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," ID        JOB          INPUTS  OUTPUTS  CONCURRENCY  NODE      STATE         RESULT\n eb9e5f9e  docker d...       1        1               QmdZQ7Zb  complete      /ipfs/QmWngMTGcn4rM81ePQjMvAEm7rMT4brWh2DXTxD71Le532\n")),(0,o.kt)("p",null,"Go look at the ",(0,o.kt)("a",{parentName:"p",href:"http://cloudflare-ipfs.com/ipfs/QmWngMTGcn4rM81ePQjMvAEm7rMT4brWh2DXTxD71Le532"},"output"),"!"),(0,o.kt)("p",null,"If you would like us to pin some other data you want to run processing jobs against, come ask us in the #bacalhau channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Filecoin slack"),"!"),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("p",null,"You can run an entire Bacalhau + IPFS network on your laptop with the following guide."),(0,o.kt)("p",null,"The easiest way to spin up bacalhau and run a fully local demo is to use the devstack command. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/blob/main/docs/running_locally.md"},"Running Locally")," for instructions."))}d.isMDXComponent=!0}}]);