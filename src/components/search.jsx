import React from "react";

function Search({ handleInput, search, loading, value }) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text" 
                value={value}
                placeholder={loading ? "Searching..." : "Search for movies, actors, genres..."} 
                className="searchbox" 
                onChange={handleInput}
                onKeyDown={search}
                disabled={loading}
            />
            <div className="search-icon">🔍</div>
            {loading && (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <div className="loading-text">Finding movies...</div>
                </div>
            )}
        </section>
    );
}

export default Search