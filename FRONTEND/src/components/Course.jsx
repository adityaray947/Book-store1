import React, { useEffect, useState } from 'react'
import "../style/style1.css"
import Cards from './Cards'
import list from '../Data/list.json'
import { Link } from 'react-router-dom'
import axios from "axios"
export default function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res= await axios.get('https://book-store1-czne.onrender.com/book');
       console.log(res.data);
       setBook(res.data);

      } catch (error) {
        console.log("Error ",error);
      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className='max-w-screen-2xl bg-base-100 container mx-auto md:px-20' >
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-white text-2xl font-semibold md:text-4xl'>
          We are Delighted To have you <span className='text-pink-500'>  
              here! :)</span>
        </h1>
        <p className='mt-12'>
        Welcome to our comprehensive library of books, where knowledge and adventure await! Dive into a diverse selection of titles across various genres, from gripping novels and insightful non-fiction to educational textbooks and inspiring biographies. Whether you're seeking to expand your horizons, find your next favorite read, or simply indulge in the joy of reading, our collection has something for everyone.
        </p>
        <button className='mt-5 ml-3  text-pink-500'>
          <Link to="/">
            Back
          </Link>
          </button>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
         book.map((item)=>(
          <Cards key={item.id} item={item}/>
         ))
        }
      </div>
      </div>
      
      </>
  )
}
