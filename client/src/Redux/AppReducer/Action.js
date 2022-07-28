import * as types from "../AppReducer/Actiontypes"
import axios from "axios"


export const Get_data=()=>(dispatch)=>{
 dispatch({type:types.PRODUCT_REQUEST});
 axios.get("http://localhost:3000/Data").then((r)=>{
    dispatch({type:types.PRODUCT_SUCCESS,payload:r.data})
 }).catch((e)=>{
    dispatch({type:types.PRODUCT_FALIURE})
 })

};