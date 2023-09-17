import Childcom from "./Childcom";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){  //1.
        super(props);
        //console.log("parent constructor");
    }
    componentDidMount(){   //3.    it is used for make api calls.
       // console.log("parent componentDidMount");
    }
    componentWillUnmount(){
       // console.log("cpmWillUnmount")
    }
    render(){  //2.
     //   console.log("parent render method");
        return(
            <>
         {/* <Childcom name="child1"></Childcom> */}
         <UserClass name="child2"></UserClass>
            this is about page
            </>
        )
    }
}
export default About;
//                     mounting
//if we have single child in parent then 
// -parnet constructor -parent render -child contrutor -child render -child compDidMout --parent cmpDidMount
//if we have multiple childes in parent then 
// -parent constructor 
// -parent render()   here it's mearge tha constructor,render methodes of childens and cmp_Did_mOUNT() one by one below like this.
//    -child_1 constructor -child_1 render()  
//    -child_2 constructor -child_2 render() 
//    -child_3 constructor -child_2 render()
//    -------------------------so on 
//     <DOM UPDATED - in single batch(for optimize)>
//    finally -child_n comp_DidMount()..... 
// -parent componrtDidMoutn() 


//                 updating 
// setState() 
// render 
//update dom's
//componentDidUpdate 


//            unMounting when tha page is removed or moved to another page then it will call.