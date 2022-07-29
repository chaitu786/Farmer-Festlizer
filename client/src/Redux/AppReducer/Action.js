import * as types from "./Actiontypes"
import axios from "axios"

export const Get_All_Data=()=>(dispatch)=>{
   axios.get("http://localhost:8080/data").then((r)=>{
      dispatch({type:types.PRODUCT_SUCCESS,payload:r.data})
   })
   .catch((err)=>{
      console.log(err);
   })
};

// export const Get_User=()=>(dispatch)=>{
//    axios.get("http://localhost:8080/users").then((r)=>{
//       console.log(r.data.data,);
//       dispatch({type:types.USER_DATA,payload:r.data})
//    })
//    .catch((err)=>{
//       console.log(err);
//    })
// };

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


export const Login_Success=(alert,payload,navigate)=>()=>{
    axios.post("http://localhost:8080/login",payload,{withCredentials:true}).then((r)=>{
       console.log(r.data.data.role,"ji");
       if(r.data.message==="login success"){
          localStorage.setItem("isLogin",true)
          localStorage.setItem("role",r.data.data.role)
          localStorage.setItem("user",`${r.data.data.First_Name},${r.data.data.Last_Name},${r.data.data.Mobile},${r.data.data.role}`)
          alert.success("Login Successfull")
          setTimeout(()=>{
             navigate("/")
          },1000)
       }
       else if (r.data.message==="Invalid Password"){
          alert.error("Invalid Password")
       }
       else if(r.data.message==="user does not exist"){
          alert.show("user does not exist")
          setTimeout(()=>{
             navigate("/signup")
          },1000)
       }
    })
    .catch((err)=>{
       alert.error("Something Went Wrong in axios")
       console.log(err);
    })
}

 export const AddToCart=(Id,alert)=>()=>{
    axios.get(`http://localhost:8080/${Id}/addtocart`,{withCredentials:true}).then((r)=>{
        console.log(r);
        if("item added to cart"===r.data.message){
            alert.success("Item Collected Successfully")
        }
    })
    .catch((err)=>{
        alert.error("Something Went Wrong in axios")
        console.log(err);
    })
}