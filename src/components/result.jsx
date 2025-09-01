import React from "react";

function Result({ result, openPopup }) {
    // Hardcoded image base URL since .env isn't working
    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    
    const posterUrl = result.poster_path 
        ? `${TMDB_IMAGE_BASE_URL}/w500${result.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    return (
        <div className="result" onClick={() => openPopup(result.id)}>
            <img 
                src={posterUrl} 
                alt={`${result.title} poster`}
                loading="lazy"
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x750/cccccc/666666?text=No+Image';
                }}
            />
            <div className="movie-card-info">
                <h3>{result.title}</h3>
                <p className="release-year">
                    {result.release_date ? new Date(result.release_date).getFullYear() : 'Unknown'}
                </p>
                <div className="rating">
                    <span>⭐</span>
                    <span>{result.vote_average ? result.vote_average.toFixed(1) : 'N/A'}</span>
                </div>
            </div>
        </div>
    );
}

export default Result