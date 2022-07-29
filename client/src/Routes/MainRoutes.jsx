import React from 'react'
import { Route, Routes } from "react-router-dom"
import { SignUp } from '../Pages/Auth/SignUp'
import { Login } from '../Pages/Auth/Login'
import { FarmerPage } from '../Pages/Home/FarmerPage'

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