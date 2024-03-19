/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from './Hero'
import Row from './Row'
import requests from '../API/requests'

function Home() {
  return (
   <>
    <Hero />
    <Row title="Trending" url={requests.fetchTrending} />
    <Row title = "Top Rated"  url={requests.fetchTopRated} />
    <Row title = "Action"   url={requests.fetchAction}/>
    <Row title = "Crime"   url={requests.fetchCrime}/>
    <Row title = "Animation"   url={requests.fetchAnimation}/>
    <Row title = "Horror"   url={requests.fetchHorror}/>
    <Row title = "Romance"   url={requests.fetchRomance}/>
    <Row title = "Comedy"  url={requests.fetchComedy} />
   </>
  )
}

export default Home