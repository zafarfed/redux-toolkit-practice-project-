import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'


export const Header = () => {

  const dispatch = useDispatch();
  const [term, setTerm] = useState('')

  function submitHandle(e){
    e.preventDefault()
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
  }

  return (
    <div className='header'>
      <div>
          <Link to='/'>  Move App  </Link>
      </div>

      <div className='search-bar'> 

        <form onSubmit={submitHandle}>
          <input value={term} type="text" placeholder='Search Movie or Show' onChange={(e)=>setTerm(e.target.value)}/>
          <button type="submit"> <FaSearch/></button>
       </form>

      </div>

      <div>
        <Link to='/'> User</Link>
      </div>
    </div>
  )
}

export default Header;