# 🚀Namaste Let's_get_Hooked_Chapter_5❤️
## 🗒️ Note  
### ✔️we can follow any type of folder struture we want.but react is not recomandant tha struture of folder. 
### ✔️we can set any type of file extend as .js,.jsx,tsx to tha files of react files.
### 1.🤔What is the difference between Named export,Defauilt export and * as export? 
#### ✔️There are 2 types of import and export are there: 
#### - Named Export   
#### - Defauilt Export 
#### 1.✔️Defauilt Export is used only once export and import one file(data).
```
  export defauilt App; 

  import app from "./App";
```
#### 2.✔️Named Export is used to we can export and import multiple files(data).
```
  export {App,App2}; 

  import {app,App2}from "./App";
```
#### * used in import -> 
```
import * as objtype from "./App";
<objtype.Header />
``` 
### 2.What is importance of config.js (or) common.js files? 
#### ✔️In this file containes hard code like hard-data or src="urls" etc.this files are present in utils folder. 
### 3.What are React Hooks? 
#### ✔️it is normal js utility function given by tha facebook developers (react). 
### 4.Why do we need a useState Hook?
#### ✔️useState is a React Hook and gives tha two parameter resultes as a array.   
#### ✔️one is a state vairable which is maintain tha state of function component and when tha state value is upadated then re-render tha ui(particulare updated elementes).
#### ✔️another one is function which is used to update tha value of state vairable. 
```
import {useState} from "react";

const resuilts=useState([]);
const [stateVairable,setStateVairable]=resuilts;
```


