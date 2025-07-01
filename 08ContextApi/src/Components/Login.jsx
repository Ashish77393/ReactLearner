import React from "react";
import { useState,useContext } from "react";
import userContext from "../Context/Context";

function Login(){
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const {setUser}=useContext(userContext)

    const sumbitButton=(e)=>{
   e.preventDefault()
   setUser({password,email})
    }
    return(
        <div>
        <h1>Login</h1>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"/>
        <input type="email"  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email"/>
        <button onClick={sumbitButton}>Submit</button>
        </div>
    )
}
export default Login;