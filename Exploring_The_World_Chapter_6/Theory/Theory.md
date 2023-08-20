# 🚀Namaste Exploring_The_World_Chapter_6❤️
## 🗒️ Note   
### 1.why do we need a useEffect Hook? 
#### ✔️Tha main concepte of useEffect is to eliminate tha side effect of using class-based componente.example featching data from api,DOM manupulation. 
#### ✔️it's render only once after componetes are render if tha array dependency is empyte. 
```
useEffect(()=>{console.log("rneder)},[])
```
#### ✔️if we write somthing state varable in array dependency then it re-render when tha state value is changed.
### 2.what is optional chaining? 
#### ✔️This is a operator for accesses tha properties or function of object.if we got an error while execute then it show the undifind or null insted of error. 
#### ✔️Example: 
```
var name=obj1?.name;
```
### 3.What is Shimmer UI?  
#### ✔️we are showing tha fake UI until tha orginal data fetch and render it for user best experincess. 
### 4.what is difference between js expresson and js statment?
#### ✔️JS statement perform an action and js expresson return some value. 
#### ✔️js statement we can't write in jsx. 
#### ✔️Example:
#### ✔️ js statment 
```
if(true){
    console.log("true");
}
```
#### ✔️js expresson 
```
true?console.log("true"):console.log("false");
(or)
a+b
```
#### ✔️If we need to write js statement in jsx them::- 
```
{(write here)}
``` 
### 5.What is Conditional Rendering,Expalin with a code 
#### ✔️Based on condional we are renndering tha UI. 
#### ✔️Example
```
     result.length===0?<Loading/>:<App/>
```
### ✔️From tha above exapmle if tha lenth of array is 0 or empyte then loading component is renderd in UI else render APP componenet.
### 6.what is cors? 
#### ✔️Tha local-hoest or  main domain is not allow tha othe domains requests.but using this cors we are accsess it. 
### 7.what is async and await? 
#### ✔️async/await is used for make js code to tha asynchornizaion.
#### ✔️async make a function to return a promise. 
#### ✔️await is make a function to wait a promise.
### 8.what is the use of 'const json=await data.json()'? 
#### ✔️await make this to wait a promise and this promise convert into json using json().


