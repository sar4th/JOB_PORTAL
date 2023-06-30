
import React, { useState } from 'react'
import axios from "axios"
import { Server } from '../App'
import "../styles/reg.css"

const UserLogin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleSubmit =async(e) =>{
  e.preventDefault()
  try {
   const user=await axios.post(`${Server}/users/login`,{
    email,
    password
    },{
      withCredentials:true
    }).then((res)=>{
      console.log(res);
      setEmail("")
      setPassword("")
    })
  } catch (error) {
    console.log("error is "+error);
  }


}
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
      </div>
    <button type="submit">Login</button>
  </form>
  )
}

export default UserLogin