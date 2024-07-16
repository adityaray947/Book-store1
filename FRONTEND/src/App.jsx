import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
// import Login from './components/Login'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'
export default function App() {
  const [authUser, setAuthUser ] = useAuth();
  console.log(authUser);
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Course' element={authUser?<Courses/>:<Navigate to ="/signup" />}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Home/>}/>
    </Routes>
    <Toaster />
    </>
  )
}
