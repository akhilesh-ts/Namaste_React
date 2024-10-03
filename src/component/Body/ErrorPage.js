import { useRouteError } from "react-router"

const ErrorPage=()=>{
    const err=useRouteError()

    console.log(err);
    
    return (
        <h1>{err.data}</h1>
    )
}

export default ErrorPage