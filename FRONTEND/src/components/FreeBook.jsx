import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';

function FreeBook() {
  
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res= await axios.get('https://book-store1-czne.onrender.com/book');
      //  console.log(res.data.filter((data) => data.category === 'free'));
       const data=res.data.filter((data) => data.category === 'free')
       setBook(data);

      } catch (error) {
        console.log("Error ",error);
      }
    }
    getBook();
  },[]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-screen-2xl container md:mx-auto mx-2 md:px-20 mt-20'>
      <div>
        <h1 className='text-xl pb-2 text-white'>Free Offered Books</h1>
        <p>
          Are you ready to embark on a journey of knowledge and discovery? We're excited to offer you a free book.
          Dive into comprehensive chapters that cover every aspect. Enjoy a well-written, easy-to-read book that keeps you engaged from start to finish.
        </p>
      </div>

      <div>
        <div className='slider-container'>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;
