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
#### ✔️Babel is not created by facebook.(babeljs.com)
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
#### <-------------------------------------> 
### Assignment
### 🤔1.What is JSX?
#### ✔️JSX full form is javascript XML.it is like html or like xml.
#### ✔️it is not html in js.
#### ✔️basically tha javascript engine directly can't understand tha jsx.so babel library package is used to convert this code into react core code.
#### 👉Example :- 
```
const heading=<h1>...</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<heading/>);
``` 
### 🤔2.Superpowers of JSX 
#### 👉JSX is sanitizing that's mean it dosn't allow tha vireses which are can accesse tha our details in tha cookies or caches. 
#### ✔️it is used to eassy to write tha code.
#### ✔️code can be reduced.


#### ✔️🤔3.Role of type attribut in script tag?what options can i use there?
#### 👉The HTML script type Attribute is used to specify the MIME type of script and identify the content of the Tag. It has a Default value which is “text/javascript”.
#### ✔️Tha type values are :- 
#### 👉text/javascript (this is default):It is the basic standard of writing javascript code inside the script tag.
#### 👉text/ecmascript:this value indicates that the script is following the EcmaScript standards.
#### 👉module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
#### 👉text/typescript: As the name suggest the script is written in TypeScript
