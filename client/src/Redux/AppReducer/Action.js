import * as types from "../AppReducer/Actiontypes"
import axios from "axios"


export const Get_data=()=>(dispatch)=>{
 dispatch({type:types.PRODUCT_REQUEST});
 axios.get("http://localhost:8080/data").then((r)=>{
    dispatch({type:types.PRODUCT_SUCCESS,payload:r.data})
 }).catch((e)=>{
    dispatch({type:types.PRODUCT_FALIURE})
 })
};

export const Get_User=()=>(dispatch)=>{
   axios.get("http://localhost:8080/users").then((r)=>{
      console.log(r);
      dispatch({type:types.USER_DATA,payload:r.data})
   })
   .catch((err)=>{
      console.log(err);
   })
  };