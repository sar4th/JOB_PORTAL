import express from "express"
import {EmpModel} from "../models/empModel.js"


export const  empRegister=async()=>{


    const {name,email,organization,password} =req.body
try {
    const isEmp=await EmpModel.findOne({email})
    console.log(isEmp);
  
} catch (error) {
    console.log(error);
}
 



}

export const empLogin=()=>{

}