import { useState, useRef } from 'react';
import Movie from './Movie.js';
import Loader from './Loader.js';
export default function MovieList({movies, error, isLoading, setError, text, results, selectedId, setSelectedId}){


    return <ul className={text.length >= 3 ? "movie-box" : "movie-box-loader"}>
        {text.length < 3 && !error ? <div className='movielist-start'>🎥</div> : ""}
        {isLoading || error ? <Loader/> : movies?.map((movie) => <Movie movie={movie} id={movie.imdbID} selectedId={selectedId} setSelectedId={setSelectedId}/>)}
    </ul>
}