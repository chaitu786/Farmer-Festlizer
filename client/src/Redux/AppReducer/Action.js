import * as types from "../AppReducer/Actiontypes"
import axios from "axios"

export const Get_All_Data=()=>(dispatch)=>{
   axios.get("http://localhost:8080/data").then((r)=>{
      dispatch({type:types.PRODUCT_SUCCESS,payload:r.data})
   })
   .catch((err)=>{
      console.log(err);
   })
};

export const Get_User=()=>(dispatch)=>{
   axios.get("http://localhost:8080/users").then((r)=>{
      console.log(r.data.data,);
      dispatch({type:types.USER_DATA,payload:r.data})
   })
   .catch((err)=>{
      console.log(err);
   })
};

export const Sigup_Success=(alert,payload,navigate)=>(dispatch)=>{
   axios.post("http://localhost:8080/signup",payload).then((r)=>{
      if(r.data.message==="user created"){
         alert.success("User Registration successfull")
         setTimeout(()=>{
            navigate("/login")
         },1000)
      }
      else if(r.data.message==="exists"){
         alert.send("User Already Exist")
      }
      else if (r.data.message==="error"){
         alert.error("Something Went Wrong")
      }
   })
   .catch((err)=>{
      console.log(err);
   })
}
