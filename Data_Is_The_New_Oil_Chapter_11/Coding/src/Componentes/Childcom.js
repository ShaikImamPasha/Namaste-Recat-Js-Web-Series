import React from "react";
class Childcom extends React.Component{
      constructor(props){
        super(props);
        //console.log(this.props.name+"construtor executed");
      }
      componentDidMount(){
      //  console.log(this.props.name+"cmpDidmount");
      }
      render(){
      //  console.log(this.props.name+"render")
        return(
            <>
            child{this.props.name}
            </>
        )
      }
}
export default Childcom;