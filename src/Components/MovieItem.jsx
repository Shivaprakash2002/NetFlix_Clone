import React from 'react'
import { imageURL } from '../API/requests'

function MovieItem({movie}) {

  const {title, backdrop_path} = movie
  
  return (
    <>
      <div className='sm:w-[200px] md:w-[250px] lg:w-[300px] inline-block cursor-pointer overflow-hidden m-2 rounded relative'>

          <img src={imageURL(backdrop_path, "w500")} alt={title} />

            {/* TITLE ON HOVER  */}

          <div className='top-0 left-0 w-full opacity-0 hover:opacity-100 bg-black/60 absolute h-full'>

          <p className='flex justify-center items-center h-full text-white font-bold'>{title ? title : 'Puli'}</p>
          </div>
      </div>
    </>
  )
}

export default MovieItem