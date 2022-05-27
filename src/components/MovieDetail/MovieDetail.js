import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getMovieOrShow, removeOneMovieOrShow } from '../../features/movies/movieSlice';
import { FaStar, FaThumbsUp, FaFilm, FaCalendarAlt } from 'react-icons/fa'
import "./style.scss"

export const MovieDetail = () => {

  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrShow);
  
  console.log(data)

  useEffect(()=>{
    dispatch( fetchAsyncMovieOrShowDetail(imdbID) )
    return ()=>{
      dispatch(removeOneMovieOrShow())
    }
  },[dispatch, imdbID]);

  return (
    <div className='movie-section'>
      {Object.keys(data).length ===0 ?
         (<div>...Loading</div>)  
    :(
      <>
      <div className='section-left'>
        <div className='movie-item'> {data.Title}</div>
        <div className='movie-rating'>
          <span> IMDB Rating <FaStar/> : {data.imdbRating}</span>
          <span> IMDB Votes <FaThumbsUp/> : {data.imdbVotes}</span>
          <span> Runtime <FaFilm/> : {data.Rating}</span>
          <span> Year <FaCalendarAlt /> : {data.Year}</span>
        </div>

        <div className='movie-plot'>{data.Plot} </div>
        <div className="movie-info">
            <div>
                <span>Director</span>
               <span>{data.Director}</span>
             </div>

             <div >
               <span>Stars</span>
                  <span>{data.Actors}</span>
              </div>

              <div >
                <span>Generes</span>
                  <span>{data.Genre}</span>
              </div>

              <div >
                <span>Language</span>
                  <span>{data.Language}</span>
              </div>

              <div >
                 <span>Awards</span>
                  <span>{data.Awards}</span>
              </div>
        </div>
      </div>

      <div className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </div>
      </>
  )}
    </div>
  )
}
export default MovieDetail;