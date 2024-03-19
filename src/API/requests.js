const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = "https://api.themoviedb.org/3"

//https://api.themoviedb.org/3/movie/popular?api_key=

const requests = {

  fetchPopularMovie : `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`, 
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAction: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchCrime:`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`, 
  fetchHorror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,


  //TV Requests
  tvTrending: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&include_adult=false`,
  tvTopRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  tvNetflix: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  tvDocumentary: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=99`,
  tvAnimation: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
  tvAdventure: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10759`,
  tvComedy: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
  tvDrama: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=18`,

  
}

export function imageURL(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`
}


export default requests