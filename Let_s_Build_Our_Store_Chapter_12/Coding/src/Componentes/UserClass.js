import React from "react";
class UserClass extends React.Component{
    constructor(props){  //constructor is used for initialize and create an object with a class
        super(props); 
      //  console.log(this.props) when u are use tha props in this constructor then we pass props to super and constructor otherwise not need. 
    //   this.state={
    //     count:1,
    //     count2:1
    //   }\
   
      console.log(this.props.name+"child constructor");
     this.state={
        userData:{
            name:"pasha",
            created_at
            :"india",
            avatar_url:""
        }
     }
    }
    componentDidUpdate(){
      //  console.log("cpmDidUpdate"); //after update it will call
       
    }
    componentWillUnmount(){
      //    clearInterval(this.timer);        
      //  console.log("cmpWiilMount");
    }
   async componentDidMount(){  //it will call after mounting or load tha page
        var data=await fetch("https://api.github.com/users/ShaikImamPasha");
        const json=await data.json();
       this.setState({
        userData:json,
       })
       this.timer=setInterval(() => {
       // console.log("call");
    }, 1000)

    //  console.log(this.props.name+"child componentDidMount");
    }
   
    render(){
        //never update state vairable directly
      //  console.log(this.props.name+"child render mrthod");
        // const {name}=this.props;
      //  console.log(this.state.userData)
        return(
            <>
            <img src={this.state.userData.avatar_url}></img>
            <div>hii,{this.state.userData.name}</div>
            <div>locacyon:///{this.state.userData.created_at}</div>
            {/* <div>{this.state.count}</div> */}
            {/* <button onClick={()=>this.setState({count:this.state.count+1,})}>clk</button> */}
            </>
        )
    }
}
export default UserClass;