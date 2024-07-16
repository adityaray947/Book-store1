import React from "react";
import "../style/signup.css"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        const userinfo = {
          email: data.email,
          password: data.password,
        };
    
        try {
          const response = await axios.post("http://localhost:3000/user/login", userinfo);
          console.log(response.data);
          if (response.data) {
            toast.success('Loggedin successfully!');
            document.getElementById("my_modal_2").close();
            setTimeout(()=>{
               
              window.location.reload();
              localStorage.setItem("User", JSON.stringify(response.data.user));
            },3000)
          } 
        } catch (err) {
          if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
            setTimeout(()=>{},3000)
          }
        }
      };
  return (
    <>
      <div>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box justify-center items-center">
            <div className="max-w-md  relative flex flex-col p-4 rounded-md text-white bg-gray-800  w-96 md:w-[500px]">
              <div className="text-2xl font-bold mb-2 text-white text-center">
                Welcome back to <span className="text-pink-500">BookStore</span>
              </div>
              <div className="text-sm font-normal mb-4 text-center text-white">
                Log in to your account
              </div>
              <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="flex flex-col gap-3">
                <div className="block relative ">
                  <label
                    htmlFor="email"
                    className="block text-gray-300 cursor-text text-sm leading-[140%] font-normal mb-2"
                    
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
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
                    className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] bg-gray-800 text-white tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span className="text-[12px] text-red-500 ">This field is required!</span>}
                </div>
                <div>
                  <a className="text-sm text-pink-500" href="#">
                    Forgot your password?   
                  </a>
                </div>
                <button
                  type="submit"
                  className=" w-max m-auto px-2 py-2 rounded text-pink-500 text-sm font-normal btn1"
                 
                >
                  Login
                </button>   
              </form>
              <div className="text-sm text-center mt-[1.6rem]">
                Don’t have an account yet?{" "}
                <Link to="/Signup" className="text-sm text-pink-500">
                  Sign up for free!
                </Link>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}
