import React from 'react'
import image1 from '../images/image1.jpg'
import "../style/style1.css"

export default function Banner() {
  return (
    <>
    <div className = " max-w-screen-2xl container md:mx-auto mx-2 md:px-20 flex flex-col md:flex-row w-full bg1 mt-10 mb-10" >
    <div className='order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12 ' >
       <div className='space-y-10'>
       <h1 className='md:text-4xl text-2xl font-bold text-white w-96 md:w-full '>
       Learn Something New Every Day at Our <span className='text-pink-500'>
        Bookstore
        </span>
       </h1>
       <p className='text-xl w-80 md:w-full'>
       Welcome to our bookstore, where we believe in the power of daily learning. Our diverse collection of books is curated to inspire curiosity and foster a love for knowledge. Whether you're looking to dive into a new subject, enhance your skills, or simply enjoy a captivating story, our shelves have something for everyone.
       </p>
       </div>
       <label className="input input-bordered flex items-center gap-2 mt-10 md:w-96  w-64 overflow-hidden">
            < input type="text" className="grow" placeholder="Enter your email"  />
        </label>
        <div className='text-white'> 
        <button className='mt-5 ml-3 text-pink-500 btn1 '>
          Submit
          </button>

        </div>
    </div>
    
    <div className='order-1 w-full md:w-1/2 mt-16 mb-2 mx-10 '>
  <img src={image1} alt="" className="md:w-full w-80 banner justify-items-centre rounded-full " />
</div>
    

    </div>
    </>
  )
}
