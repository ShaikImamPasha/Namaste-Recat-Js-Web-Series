# 🚀Namaste Let's Get Classy Chapter 8❤️
## 🗒️ Note  
## class Component 
### it is a js class extend with Rect.Component (tha reason is react can understand it is class component) and contain render method which return tha JSX OR React code. 

## Life cycle of class components   
### 1.Mounting 
### 2.Updating
### 3.Unmounting
# --------------------------------------------
### There are 2 phases in each Life cycle are:-
#### --Render Phase 
#### --CommitPhase 

## 1.Mounting
### -Tha order of methods called in this cycle 
- Render Phase
### -constructor() it is called only intiail stage(when load tha class)
### -render() 
- Commit Phase 
### -Recat updates DOM & refs 
### -componentDidMount (ony initail called when load tha page)

### if we have single child in parent then tha Mounting Lify cicle:- 
- parent constructor 
- parent render 
- child constructor 
- child render 
- child cmpDidMount
- parent cmpDidMount
### if we have multiple child in parent then tha Mounting Lify cicle:-
### note:-here tha two phases of childerns will be combined for optimize 
- parent constructor 
- parent render 
- child_1 constructor 
- child_1 render 
- child_2 constructor 
- child_2 render 
- child_n render
- childe_n constructor 
### at a time update tha Dom all childes for optimize
- child_1 cmpDidMount() 
- child_2 cmpDidMount()
- child_n cmpDidMount()

## 2.Updating
### -Tha order of methods called in this cycle 
- Render Phase 
### -setState() or newProps or forceUpadate 
### -render() 
- Commit Phase  
### React updates DOM & refs 
### componentDidUpdate()  

## 3.Unmounting 
- after move to new function component or class component (like page )then this lify cycle will involved. 
- Render Phase 
## nothing 
- Commit Phase 
- componentWillUnMount() (it is used to remove or stop tha not-require to tha execute tha fuctions like intervel)

### ------------------------------------------------------------------ 
### never compare tha lify cycles of class && function based componentes. 
### There is no equal between useEffect and componentDidMount() 

#### NOTE :- 
### useEffect(()=>{},[])===componentDidUpdate();

### useEffect(()=>{},[vairable])===componentDidUpdate(); 

### useEffect( useEffect(()=>{
###    fetchdata()
### const timer=setInterval(()=>{console.log("useEffect")},1000);
###  return()=>{
###    clearInterval(timer);
###    console.log("useEffect Return")
###  }
### },[]);) === componetWillUnMonut(){clearInterVel(this.timer)} ;

### ✔️Assignment Questions and answers 
### 1.What is order of life cycle method calls in Class Based Components?  
#### ✔️constructor()
#### ✔️Render()
#### ✔️componentDidMount() 
#### ✔️componentDidUpdate() 
#### ✔️componentWillUnMount()

### 2.Why do we use componentDidMount?
#### ✔️it is a method for life cycle of mounting.here we mustly used for API's calls or fetching tha data.
### 3.Why do we use componentWillUnmount?Show with example  
#### ✔️This method is called during the Unmounting phase of the React Life-cycle i.e before the component gets unmounted.it is used when tha component is destryed.
### example 
### for class cmp:- 
```
componentDidMount(){  
       this.timer=setInterval(() => {
        console.log("call");
    }, 1000)
    }
 componentWillUnmount(){
         clearInterval(this.timer);        
    }
```
### for function cmpt:-
```
  useEffect(()=>{
    fetchdata()
 const timer=setInterval(()=>{console.log("useEffect")},1000);
  return()=>{
    clearInterval(timer);
    console.log("useEffect Return")
  }
},[]);
```
### 4.(Research) why do we use super(props) in constructor?
#### ✔️basically allows accessing this.props in a Constructor function.

### 5.why do we use tha constructor()?
#### ✔️it is used for initialize tha variables or state.
