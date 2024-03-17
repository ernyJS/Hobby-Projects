export default function Movie({movie, selectedId, setSelectedId}){

    function handleSelectId(){
        setSelectedId(movie.imdbID);
    }



    return <li onClick={handleSelectId} className="movie-element">
        <img src={movie.Poster} className="movie-image"></img>
    </li>
}