import axios from "axios";
import React, { useEffect, useState } from 'react'
import requests from "../API/requests";
import { imageURL } from "../API/requests";

function Hero() {
   
    const [banner,setBanner] = useState([]);

    useEffect(() => {
          axios.get(requests.fetchPopularMovie).then((res) => {
          let randomBanner = res.data.results[Math.floor(Math.random() * res.data.results.length)];
          console.log(randomBanner)
          setBanner(randomBanner)
        })
    },[])
  const {title, overview, backdrop_path, release_date} = banner

  return (
    <div className='h-[450px] lg:h-[650px]'>
      <div className='w-full h-full'>
        <img className='w-full h-full object-cover object-top' src= {imageURL(backdrop_path, "original")} alt={banner.title} />


        <div className='absolute top-[15%] lg:top-[25%] p-4 md:p-8'>
          <h1 className='text-3xl font-bold md:text-5xl text-white'>{title}</h1>

          <div className='mt-8 mb-4'>
            <button className='py-2 px-4 border bg-gray-200 text-black font-medium'>Play</button>
            <button className='py-2 px-4 border text-white ml-5 font-medium'>Watch Later</button>
          </div>

          <p className='text-sm text-gray-200 mb-4'>{release_date}</p>
          <p className='w-full md:max-w-[50%] text-white'>{overview}</p>
        </div>
        
      </div>
    </div>  )
}

export default Hero