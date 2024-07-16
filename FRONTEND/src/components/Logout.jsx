import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

export default function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const  hadlelogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("User")
            
            toast.success("logout successfully")
            setTimeout(()=>{
                window.location.reload();

            },1500)
        } catch (error) {
            toast.error("Error :",error.message)
        }
    }
  return (
    <div>

        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={hadlelogout}>
            Logout</button>
    </div>
  )
}
