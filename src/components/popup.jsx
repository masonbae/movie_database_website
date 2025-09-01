import React from "react";

function Popup({ selected, closePopup }) {
    // Hardcoded image base URL since .env isn't working
    const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
    
    const posterUrl = selected.poster_path 
        ? `${TMDB_IMAGE_BASE_URL}/w500${selected.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    const backdropUrl = selected.backdrop_path 
        ? `${TMDB_IMAGE_BASE_URL}/w1280${selected.backdrop_path}`
        : null;

    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.title}</h2>
                <p className="rating">
                    Rating: {selected.vote_average}/10 ({selected.vote_count} votes)
                </p>
                <div className="plot">
                    <img src={posterUrl} alt={`${selected.title} poster`} />
                    <div className="movie-info">
                        <p><strong>Release Date:</strong> {selected.release_date}</p>
                        <p><strong>Runtime:</strong> {selected.runtime} minutes</p>
                        <p><strong>Genres:</strong> {selected.genres?.map(g => g.name).join(', ')}</p>
                        <p><strong>Overview:</strong> {selected.overview}</p>
                        {selected.homepage && (
                            <p><strong>Official Site:</strong> 
                                <a href={selected.homepage} target="_blank" rel="noopener noreferrer">
                                    Visit
                                </a>
                            </p>
                        )}
                    </div>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
            {backdropUrl && (
                <div 
                    className="backdrop" 
                    style={{backgroundImage: `url(${backdropUrl})`}}
                    onClick={closePopup}
                />
            )}
        </section>
    );
}

export default Popup
