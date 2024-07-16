import React from 'react';
import '../style/signup.css';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userinfo = {
      fullname: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:3000/user/signup", userinfo);
      console.log(response.data);
      if (response.data) {
        toast.success('Successfully created!');
        navigate(from,{replace:true})
      } 
      localStorage.setItem("User", JSON.stringify(response.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };
  return (
    <>
    <div className="flex items-center justify-center min-h-screen  bg-gray-900 ">
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-white bg-gray-800 md:shadow-lg md:w-[600px] overflow-hidden overflow-x-hidden">
    <div className="text-2xl font-bold mb-2 text-white text-center">
                Welcome back to <span className="text-pink-500">BookStore</span>
              </div>
              <div className="text-sm font-normal mb-4 text-center text-white">
                Create Your Account
              </div>
              <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} >
              <div   className="block relative bac">
                  <label
                    htmlFor="name"
                    className="block text-gray-300 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder='Enter your Name'
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] bg-gray-800 text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 outline-0"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className="text-[12px] text-red-500 ">This field is required</span>}
                </div>
                <div className="block relative bac">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                     placeholder='Enter your Email'
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] bg-gray-800 text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 outline-0"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className="text-[12px] text-red-500 ">This field is required</span>}
                </div>
                <div className="block relative">
                  <label
                    htmlFor="password"
                    className="block text-gray-300 cursor-text text-sm leading-[140%] font-normal mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                     placeholder='Enter your Password'
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] bg-gray-800 text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className="text-[12px] text-red-500 ">This field is required</span>}
                </div>
                <div>
                  {/* <a className="text-sm text-pink-500" href="#">
                    Forgot your password?
                  </a> */}
                </div>
                <button
                  type="submit"
                  className=" w-max m-auto px-2 py-2 rounded text-white text-sm font-normal bg-pink-500"
                  style={{ transition: "none" }}
                >
                  Sign Up
                </button>
              </form>
              <div className="text-sm text-center mt-[1.6rem]">
                Already have an Account ?{" "}
                <Link to="/Login"
                 className="text-sm text-pink-500"
                 onClick={()=>document.getElementById("my_modal_2").showModal()}
                 >
                  Login
                </Link>
              </div>
              </div>
    </div>
    </>
  )
}
