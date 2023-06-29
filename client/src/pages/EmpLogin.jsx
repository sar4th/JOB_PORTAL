
import React, { useState } from 'react'
import axios from "axios"
import { Server } from '../App'
const EmpLogin = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleSubmit =async(e) =>{
  e.preventDefault()
  try {
   const emp=await axios.post(`${Server}/emp/login`,{
    email,
    password
    })
      console.log(emp);
      setEmail("")
      setPassword("")

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

export default EmpLogin