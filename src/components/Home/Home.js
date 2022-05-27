import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'


export const Home = () => {

  const dispatch = useDispatch()
  const movieName = "Mask"
  const showName = "Friends"

  useEffect(()=> {
      dispatch(fetchAsyncMovies(movieName))
      dispatch(fetchAsyncShows(showName))
  },[dispatch]);

  return (
    <div>
      <div className='img-banner'></div>
      <MovieListing/>
    </div>
  )
}

export default Home;