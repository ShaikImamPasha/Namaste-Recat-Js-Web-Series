# 🚀Namaste Laying_The_Foundation Chapter-3❤️
## 🗒️ Note 
#### ✔️parcel can be executed using npx parcel index.html 
#### ✔️ we have also another way to execute tha 👆 cmd using scripts in package.json 👇 
```
"scripts":{
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
``` 
#### ✔️npm start or npm run start. 
#### ✔️start is special keyword and we can write short-cohrt as npm start 
#### ✔️but we can't wite another cmd like npm build. we can write only npm run script name.

#### <------------------------------------->

### 🔥JSX🔥 
#### ✔️React js and jsx is supporate conceptes 
#### ✔️JSX is not HTML in JS.
#### ✔️it's like html syntax or like xml syntax.
#### ✔️by tha using of react js core (ex:React.creatElement) to build tha project is difficuilt.so facebook developers provides JSX.
```
const JSXheading=<h1>this is heading tag</h1>
```
#### ✔️Tha 👆 code is JSX and in tha browser js engine can't understand tha above code.if we are use tha babel library then it will convert into react core code and it's finnaly a object.
#### ✔️If we use tha parcel dependency then it will be install tha babel.
#### ✔️Babel is not created by facebook.
##### ✔️JSX => React.createElement =>HTML element 

#### <-------------------------------------> 

### 🔥React Compentes🔥
#### ✔️everything in React is component 
#### ✔️There are two types are there 
#### 👉1.class based component 
#### 👉2.functional component 
### Functional Component 😘
#### ✔️it is just a java script function which return reactelements or JSX.
#### ✔️we can call tha component like 
```
<Component_name/>
```
#### ✔️then only babel can understand this is a component.  
### Componenet composition 
#### ✔️put tha component in another component is called Component composition.
#### ✔️JSX is sanitizing.That's mean it doesn't allow virse code which is acceses tha caches or coockes of our data.  
```
const heading=<h1>...</h1>
const heading_rendering=()=>{
    return(
        <>
           {heading}
           <h1>heading 2</h1>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
```


