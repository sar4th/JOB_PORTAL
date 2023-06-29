
import React, { useState } from 'react'
import axios from "axios"
import { Server } from '../App'
const UserRegister = () => {

  const [name,setName] =useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleSubmit =async(e) =>{
  e.preventDefault()
  try {
   const user=await axios.post(`${Server}/users/register`,{
      name,email,password
    }).then((res)=>{
      console.log(res);
      setEmail("")
      setName("")
      setPassword("")
    })
  } catch (error) {
    console.log("error is "+error);
  }


}
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />
    </div>
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
    <button type="submit">Register</button>
  </form>
  )
}

export default UserRegister