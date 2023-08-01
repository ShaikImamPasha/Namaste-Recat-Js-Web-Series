# 🚀Namaste Igniting_Our_App Chapter-1❤️
## 🗒️ Note 

#### ✔️React is also make app fast🚀 but we need another packages also need for make app fast.
#### ✔️npm doesn't have starnded name.
#### ✔️npm manage tha packages (or) libraryes.
### -->transitive dependency :-
#### ✔️That's mean tha dependency are depend upon another dependency.
#### ✔️every dependency have package.json in node_modules.
#### ✔️we don't need to put node_modules in git.
#### ✔️if we have package.json and pakage-lock.json then we can create or ganurate tha node_modules(npm install).

### React Can Injuctes This Following Ways:>
#### ✔️using cdn react links.(cdn linkes are not prefer to bring react into our project.it is coast becase its cakll network and alose we need upadte links respoctively react updates.)
#### ✔️using npm(npm create-react-app here automatically react and react-dom will be installed with template.)
#### ✔️using npm(npm install react and npm install react-dom) it is dipendency not dev dependency.

#### ::- 📚 [NPM js web site](https://www.npmjs.com/)
### ->NPM for install packeges.
#### 👉 npm init :: package.json
#### 👉 npm install :: based on package-lock.json tha required node_modules created.
#### 👉 npm install -D parcel :: parcel dependency installed and also package-lock.json and node_modules also.
#### ✔️ npx parcel file_name(index.html) for executing or it's create server and hoest our app on server with 1234 port number.
### -------------------------------------------------------------------------
### ->NPX meanes executing tha package.

### <--now inject react without uding cdn linkes--->
#### 👉1.npm install react
#### 👉2.npm install react-dom
#### 👉now import this react,react-dom/client where you need in code.
#### 👉and also u got one error that is Add type="module" to script becase browser can't understand import keyword and
#### 👉it's consider as a normal js.so that's why we need add type="module" in script tag.

### ->PARCEL (parceljs.org)
#### ✔️create loacal server 
#### ✔️HMR = Hot Module Replacement (automatic reloaded or updated).
#### ✔️parcel uses File watching algorithm which was written in c++ it's keep on track of our file.
#### ✔️it's uses caching- for fasting builds.
#### ✔️images optimization (Parcel supports resizing, converting, and optimizing images)
#### ✔️minification
#### ✔️boundling
#### ✔️compress(it rmove white spacess also).
#### ✔️consistent hashing.
#### ✔️code splitting 
#### ✔️Differential bundling(meanes app run older browsers)
#### ✔️(dignostics)good error handling(meanse eassily handle tha error where it preasent)
#### ✔️we can host on htpps also.(npx parcel index.html --htttps)
#### ✔️Tree Shaking algorthim.(meanes remove unuse code for u)
#### ✔️different dev and prod bundles(npx parcel build index.html)
#### ✔️we don't need to push dist and .parcel-cache code into git becase server will do automatic npm cmds(example npm install).
#### 👉so parcel also make fast our app  
 #### -----------------------------------------------------
### 👉Browserlist 
#### website:- https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z this can be used to viw tha how many peoples uses tha versiones of browsers in %.
```
"browserlist": [
    "Last 2 Chrome version",
    "Last 2 Firefox version"
  ]

```
#### ->👆tha above code mean work 100% our code in above mentioed versiones of browsers.



## Assisment --->
### 🤔1.what is `NPM`?
#### 👉 -->NPM is package manager and it doesn't have any proper name or starnded form.it is basically is the world's largest software registry.so many organization use npm to manage private development as well.by tha using of it we can inistall required packages in our application.
```
--npm init

```
### 🤔 2.what is 'parcel/webpack'?why do we need it?
#### 👉 -->parcel is a dependency.it is used for optimizes your whole app for production automatically and make fast our app.there is loat of uses are also  there like comprestion,build our app with less time,keep file tracking much more.
```
   --npm install -D parcel
```
### 🤔 3.what is '.parcel-cache'?
#### 👉 -->it is hoeld or store our project detailes.when we are re-build our peoject then it's not go re-analize from scrach.it take tha information from this folder and re-build it.

### 🤔 4.what is tree Shaking?
#### 👉 -->it is a alogorthim used for remove unnessesary codes in our project or dead code.

### 🤔 5.what is Hot Modeule Replacement?
#### 👉-->it is part of parcel.it is automatic upadate or remove our modules(code) whiling running our app without reloading.that's mean it is automatic reload tha page. 

### 🤔 6.List down you are favourite 5 superpoweres of parcel and describe any 3 of them in your own words?
#### 👉 -->1.HMR = Hot Module Replacement
#### 👉 -->2.dignostics
#### 👉 -->3.Tree Shaking algorthim
#### 👉 -->4.images optimization
#### 👉 -->5.create loacal server 
#### 👉 --->1.HMR
#### 👉 it is part of parcel.it is automatic upadate or remove our modules(code) whiling running our app without reloading.that's mean it is automatic reload tha page.
#### 👉 --->2.dignostics
#### 👉 it show tha perfect errors.that's mean we can eassy to identyfy where tha error will gotet.
#### 👉 ---->3.Tree Shaking algorthim
#### 👉it is a alogorthim used for remove unnessesary codes in our project or dead code

### 🤔 7.what is '.gitignore'?what should we add and not add into it?
#### 👉 --->it is a file.in this file we can specify tha files or folders which are not push in our repostry git.we can add which are re-ganurated automatically in tha server.we can't add which are not re-ganareted.

### 🤔 8.what is tha difference between 'package.json' and 'pacakage-lock.json'?
#### 👉 --->package.json is a npm configration and also it is maintain tha aproximently tha dependency versones.It records important metadata about the project.
#### 👉 --->package-lock.json is maintain tha current version of dependencys in package.json.  

### 🤔 9.why should i not modify tha 'package-lock.json'?
#### 👉 -->becase it keep tracks tha versions of our dependency in project.

### 🤔 10.what is node_modules? is it good idea to push that on git? 
#### 👉 -->node_modules is a folder containes our dependencys.it is large folder.so it is not good idea to push that on git.
#### 👉 there is not problem will ocuer.becase tha servel will automatic run tha npm install or reganurate tha code.

### 🤔 11.what is 'dist'(distribution) folder?
#### 👉 -->tha folder containes tha hosted files with optimized code.tha files can be take from '.parcel-cache' file.

### 🤔 12.what is 'browserlists' Read about diff boundlers:vite,webpack,parcel
#### 👉 -->browserlists is used to specify tha browser for run our app.that's mean our app 100% run tha code on that  browsers. 

### 🤔 13.read about ~(tilda) and ^(caret)
#### 👉 ^(caret):-can be used for minor version update not major version.
#### 👉 ~(tilda):-can be used for major version update not minor version.


