import { useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export default function MyApp() {

    const key = "9eb7f10f";
    const [text, setText] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedId, setSelectedId] = useState("");





    useEffect(function(){
        async function fetchData(){
            try {
                if(text.length >= 3){
                    setIsLoading(true);
                }
                const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${text}`);
                const data = await res.json()
                setMovies(data.Search ?? []);
            } catch(err) {
                console.log(err.message);
                if(err.message === "Failed to fetch"){
                    setError("Failed to fetch...")
                }
            } finally {
                setIsLoading(false);
            }
        }
        if(text.length >= 0){
            fetchData();
        } else if(text === ""){
            setMovies([]);
        }
    }, [text])






    return <div className="app-box">
        <SearchBar text={text} setText={setText} results={movies.length}/>
        <MovieList movies={movies} error={error} setError={setError} isLoading={isLoading} setMovies={setMovies} text={text} setText={setText} results={movies.length} selectedId={selectedId} setSelectedId={setSelectedId}/>
        <MovieDetails selectedId={selectedId} setSelectedId={setSelectedId} text={text} error={error} setError={setError}/>
    </div>
}