import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
export default function RatedMovie({newMovie, selectedId, setSelectedId}){


    function handleSelectId(){
        setSelectedId(newMovie.id);
        console.log(selectedId)
    }

    return <div className="ratedMovie" onClick={handleSelectId}>
        <div className="ratedMovie-poster-box">
            <img src={newMovie.img} className="ratedMovie-poster"></img>
        </div>
        <div className="ratedMovie-title-box">
            <p>{newMovie.title} ({newMovie.year})</p>
        </div>
        <div className='ratedMovie-mobile-box'>
            <img src={newMovie.img} className='ratedMovie-mobile-poster'></img>
            <div className='ratedMovie-mobile-cover'>
                <span className='ratedMovie-mobile-star'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}}/>
                    <p className='ratedMovie-mobile-rating'>{newMovie.rating - 1}</p>
                </span>
            </div>
        </div>
        <div className="ratedMovie-rating-box">
            <p><span className='ratedMovie-rating'>{newMovie.rating - 1}</span> <span className='ratedMovie-star'><FontAwesomeIcon icon={faStar} style={{color: "#FFD43B"}}/></span></p>
        </div>
    </div>
}
