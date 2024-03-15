import { useState, useRef } from 'react';
import Movie from './Movie.js';
import Loader from './Loader.js';
export default function MovieList({movies, error, isLoading, setError, text, results, selectedId, setSelectedId}){


    return <ul className={!text ? "movie-box-loader" : "movie-box"}>
        {!text && !error ? <div className='movielist-start'>🎥</div> : ""}
        {isLoading || error ? <Loader/> : movies?.map((movie) => <Movie movie={movie} id={movie.imdbID} selectedId={selectedId} setSelectedId={setSelectedId}/>)}
    </ul>
}