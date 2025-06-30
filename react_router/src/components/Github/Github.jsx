import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Github(){
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/Ashish77393")
        .then(response=>response.json())
        .then(data=>{
            setData(data)
        })

    },[])
    return(
        <div className="bg-gray-300 text-center text-3xl p-4">
            <h1>Github id  {data.id}</h1>
            <Link to={data.login}></Link>
            {data ? (
        <img width={200} height={300} src={data.avatar_url} alt="ashish kumar singh" />
      ) : (
        <p>Loading...</p>
      )}
       </div>
    )
}