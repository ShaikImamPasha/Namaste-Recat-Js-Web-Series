# 🚀Namaste Data_Is_The_New_Oil_Chapter_11❤️
### 1.What is prop drilling?
#### ✔️prop drilling meanes send tha data from parent to child then child to those children "n".This is very difficult to reach tha data from parent to n th child when there is more children's.so we can use tha react context. 

### 2.What is lifting the state up?
#### ✔️lifting the state up meanes we are controle tha states of children's from parent component.Tha parent component is called control component otherwise if not control then uncontrole component.

#### 3.What are Context Provider and Context Consumer? 
#### ✔️Context Provider is a Component and take tha "value" is a prop and change tha data in Context. 
#### Ex- 
```
<Context_Name.Provider value={{color: "red"}}>...</Context_Name.Provider >
```
#### ✔️Context Consumer is a component which is used to we can access tha data.
#### Ex- 
```
<Context_Name.Consumer>{(data)=>{console.log(data)}}</Context_Name.Consumer>
```
#### 4.If you  don't pass a value to the provider does it take the default value?
#### ✔️undefine
