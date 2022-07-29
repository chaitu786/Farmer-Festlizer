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

export const Get_Cart_Data=()=>(dispatch)=>{
   axios.get("http://localhost:8080/cart",{withCredentials:true}).then((r)=>{
      console.log(r.data.data,);
      dispatch({type:types.CART_DATA,payload:r.data.data})
   })
   .catch((err)=>{
      console.log(err);
   })
};


export const Get_MyPosts_Data=()=>(dispatch)=>{
   axios.get("http://localhost:8080/myposts",{withCredentials:true}).then((r)=>{
      console.log(r.data.data,);
      dispatch({type:types.MY_POSTS_DATA,payload:r.data.data})
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

 export const AddToCart=(Id,alert)=>(dispatch)=>{
    axios.get(`http://localhost:8080/${Id}/addtocart`,{withCredentials:true}).then((r)=>{
        console.log(r);
        if("item added to cart"===r.data.message){
            alert.success("Item Collected Successfully")
        }
    })
    .then(()=>{
      dispatch(Get_All_Data())
    })
    .catch((err)=>{
        alert.error("Something Went Wrong in axios")
        console.log(err);
   })
}

export const Upload_Issue=(formData,alert)=>(dispatch)=>{
   console.log(formData);
   axios.post("http://localhost:8080/uploadIssue",formData,{withCredentials:true},{headers:{"Content-Type":"multiple/form-data"}}).then((r)=>{
      console.log(r,"multer");
      if(r.data.message==="data uploaded"){
         alert.success("Your Post Uploaded uploaded")
      }
      else if(r.data.message==="exists"){
         alert.send("User Already Exist")
      }
      else if (r.data.message==="error"){
         alert.error("Something Went Wrong")
      }
   })
   .then(()=>{
      dispatch(Get_All_Data())
   })
   .catch((err)=>{
      console.log(err);
   })
}


export const Logout=()=>(dispatch)=>{
   console.log(1,"ji");
   axios.get(`http://localhost:8080/logout`,{withCredentials:true}).then((res)=>{
      console.log(res.data.message,"jil");
      if(res.data.message==="user logout successfully"){
         localStorage.setItem("isLogin",false)
         localStorage.setItem("user","")
         window.location.reload()
      }
   })
   .then(()=>{

   })
   .catch((err)=>{
       console.log(err)
   })
}

export const Delete=(Id,alert)=>()=>{
   axios.get(`http://localhost:8080/${Id}/delete`,{withCredentials:true}).then((r)=>{
       if("item marked as completed"===r.data.message){
           alert.success("item marked as completed")
       }
   })
   .catch((err)=>{
       alert.error("Something Went Wrong in axios")
       console.log(err);
  })
}


export const PermenentDelete=(Id,alert)=>(dispatch)=>{
   axios.get(`http://localhost:8080/${Id}/permenentDelete`,{withCredentials:true}).then((r)=>{
      console.log(r.data);
       if("item deleted successfully"===r.data.message){
           alert.success("item deleted successfully")
       }
   })
   .then(()=>{
      dispatch(Get_MyPosts_Data())
   })
   .catch((err)=>{
       alert.error("Something Went Wrong in axios")
       console.log(err);
  })
}
