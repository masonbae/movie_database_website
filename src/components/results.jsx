import React from "react";
import Result from "./result"

function Results({ results, openPopup }) {
    return (
        <section className="results">
            {results.length > 0 ? (
                results.map(result => (
                    <Result 
                        key={result.id} 
                        result={result} 
                        openPopup={openPopup}
                    />
                ))
            ) : (
                <div className="no-results">
                    <p>No movies found. Try a different search term.</p>
                </div>
            )}
        </section>
    );
}

export default Results