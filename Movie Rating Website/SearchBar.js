import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faFilm, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons' 

export default function SearchBar({text, movies, error, isLoading, setText, setMovies, results}){


    function handleReset(){
        setText("");
    }

    return <nav className="searchbar-box">
        <div className="s1">
            <p className='searchbar-title'>muuuVie</p>
            <p className="searchbar-title-logo"><FontAwesomeIcon icon={faFilm} style={{color: "#ffffff",}} /></p>
        </div>
        <div className="s2">
            <input className="searchbar-input" placeholder="Search movie..." value={text} onChange={(e) => setText(e.target.value)}></input>
            <button className="searchbar-reset" onClick={handleReset}>X</button>
            <p className="searchbar-results">Results: <span>{results}</span></p>
        </div>
        <div className="s3">
            <a href="https://www.facebook.com/ernest.czaplewski/" target="_blank"><p><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}}/></p></a>
            <a href="https://github.com/ernyJS" target="_blank"><p><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}}/></p></a>
        </div>
    </nav>
}