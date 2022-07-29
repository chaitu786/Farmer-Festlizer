import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Component/Login'
import { FarmerPage } from '../Pages/FarmerPage'

export const MainRoutes = () => {
  return (
  <div>
    <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='/FarmerPage'  element={<FarmerPage/>}/>

    </Routes>

  </div>
  )
}
