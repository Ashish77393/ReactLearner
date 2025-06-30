import { useParams } from "react-router-dom"
export function User(){
    const {userid}=useParams()
    return (
        <>
        <h1 className="bg-gray-600 text-3xl text-center p-4 ">User : {userid} </h1>
        </>
    )
}