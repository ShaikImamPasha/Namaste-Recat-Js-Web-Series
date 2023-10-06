import { useRouteError } from "react-router-dom";
const Error=()=>{
    const erorr=useRouteError();
   // console.log(erorr);
    return(
        <>
        opps!somthing wrong
        </>
    )
}
export default Error;