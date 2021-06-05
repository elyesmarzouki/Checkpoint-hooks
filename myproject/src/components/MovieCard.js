import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom"

function MovieCard({ movie }) {
    const styleObject ={width:225,height:350}
return (
    <Link to={`/Details/${movie.id}`} >
    <div id="moviecard">
    <img variant="top" style={styleObject} src={movie.posterUrl} alt="poster" />
    <div id="infos" className="Link">
        <p className="Link" id="title">{movie.title}</p>
        <p className="Link" id="description">{movie.description}</p>
        <i><StarRatingComponent value={movie.rate}/></i>
    </div>
    </div>
    </Link>
);
}

export default MovieCard;