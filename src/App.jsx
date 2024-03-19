import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import NavBar from './Components/NavBar'
import AuthContextProvider from './API/AuthContext'

function App() {

  return (
    <>
    <AuthContextProvider>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
