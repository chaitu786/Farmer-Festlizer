import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Login } from '../Components/Auth/Login'
import { SignUp } from '../Components/Auth/Signup'
import { FarmerPage } from '../Components/Home/FarmerPage'
import { Cart } from "../Pages/Cart/CartPage"
import FileUpload from '../Pages/Upload/CreatePage'
import NavBar from '../Components/Home/Header'

import Weather from '../Pages/Weather'

import { MyPosts } from '../Pages/Post/MyPosts'


const MainRoutes = () => {
  return (
    <div>
      {/* <NavBar/> */}
<NavBar/>
        <Routes>
            <Route path="/" element={<FarmerPage/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/create" element={<FileUpload/>}></Route>
            <Route path='/weather' element={<Weather/>}></Route>
            <Route path="/myposts" element={<MyPosts/>}></Route>
           
        </Routes>
    </div>
  )
}

export default MainRoutes