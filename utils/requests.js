const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY


const requests = {
    fetchPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchForYou: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGenre: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=`,
    fetchBest: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTVPopular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    imgBase: 'https://image.tmdb.org/t/p/original/'
}

export default requests