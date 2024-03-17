import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState} from "react";
import RatedMovie from './RatedMovie';
import Loader from './Loader';
export default function MovieDetails({selectedId, text, error, setError, setSelectedId}) {


    const [details, setDetails] = useState({});
    const key = "9eb7f10f";
    const [onId, setOnId] = useState(null);
    const [rating, setRating] = useState(null);
    const [ratedMovies, setRatedMovies] = useState(JSON.parse(localStorage.getItem('ratedMovies')) || []);
    const [ratedId, setRatedId] = useState(JSON.parse(localStorage.getItem('ratedId')) || []);
    const [detailLoading, setDetailLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem('ratedMovies', JSON.stringify(ratedMovies));
    }, [ratedMovies]);

    useEffect(() => {
        localStorage.setItem('ratedId', JSON.stringify(ratedId));
    }, [ratedId]);

    useEffect(function(){
        async function showDetails(){
            try {
                setDetailLoading(true);
                const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`)
                const data = await res.json();
                setDetails(data)
            } catch(err) {
                console.log(err.message);
                console.error(err.message === "Failed to fetch")
                if(err.message === "Failed to fetch"){
                    setError("Failed to fetch...")
                }
            } finally {
                setDetailLoading(false);
            }
        }
        showDetails();
        setOnId(0);
        setRating(0);
    }, [selectedId])

    function addToRated(){
        if(rating > 0){
            setRatedMovies([...ratedMovies, {title: details.Title, year: details.Year, rating: rating, img: details.Poster, id: details.imdbID}]);
        setRatedId([...ratedId, details.imdbID]);
        } else {
            return;
        }
    }

    function removeRated(){
        setRatedId(ratedId => ratedId.filter((ratedId) => ratedId !== selectedId));
        setRatedMovies(ratedMovies => ratedMovies.filter((ratedMovie) => ratedMovie.id !== selectedId));
    }

    return <div className={text.length >= 3 ? "details-box" : "details-box-notext"}>
        {selectedId && text.length >= 3 ? <>
        <div className="details-box-left">
            {detailLoading || error ? <Loader error={error} detailLoading={detailLoading}/> :
        <div className="details-box-left-con">
            <div className="details-poster-box">
                <img src={details.Poster} className="details-poster"></img>
            </div>
            <div className="details-summary-box">
                <h2>{details.Title} ({details.Year})</h2>
                <p>Director: <span>{details.Director}</span></p>
                <p>Box office: <span>{details.BoxOffice}</span></p>
                <p>IMDb: <span>{details.imdbRating}</span></p>
                <p>Runtime: <span>{details.Runtime}</span></p>
                <p className='details-summary-country'>Country: <span>{details.Country}</span></p>
                {ratedId.map((id) => id).includes(selectedId) ? "" : <StarsComponent onId={onId} setOnId={setOnId} setRating={setRating} rating={rating} selectedId={selectedId}/>}
                {ratedId.map((id) => id).includes(selectedId) ? <button className='rate-button' onClick={removeRated}>Change rating</button> : <button className='rate-button' onClick={addToRated}>Rate</button>}
                <p className='details-plot'>{details.Plot}</p>
            </div>
        </div>}
        </div>
        <div className="details-box-right">
            <div className='details-rated-title'>Rated</div>
            {ratedMovies?.map((newMovie) => <RatedMovie newMovie={newMovie} selectedId={selectedId} setSelectedId={setSelectedId}/>)}
        </div>
    </> : <div className='details-box-empty'><div>Copyright © 2024 Ernest Czaplewski</div></div>}
    </div>
}

function StarsComponent({onId, setOnId, rating, setRating, selectedId}){



    return <div className="stars">
        {Array.from({length: 10}, (_, i) => (<Star id={i + 1} onId={onId} setOnId={setOnId} rating={rating} setRating={setRating}/>))}
    </div>
}

function Star({id, onId, setOnId, handleMouseOn, rating, setRating}){

    function handleMouseOn(){
        setOnId(id + 1);
    }

    function handleMouseOff(){
        setOnId(0)
    }

    function handleRateMovie(){
        setRating(id + 1)
    }

    return <div className="star" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff} onClick={handleRateMovie}>
        {id >= onId && rating <= id ? <FontAwesomeIcon icon={faStar} style={{color: "#ffffff"}}/> : <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}}/>}
        </div>
}