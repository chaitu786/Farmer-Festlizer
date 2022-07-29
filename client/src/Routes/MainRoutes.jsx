import React from 'react'
import { Route, Routes } from "react-router-dom"
import { Login } from '../Components/Auth/Login'
import { SignUp } from '../Components/Auth/Signup'
import { FarmerPage } from '../Components/Home/FarmerPage'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<FarmerPage/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes