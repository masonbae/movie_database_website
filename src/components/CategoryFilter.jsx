import React from 'react';

function CategoryFilter({ onCategoryChange, activeCategory }) {
    const categories = [
        { id: 'popular', name: '🔥 Popular', endpoint: 'popular' },
        { id: 'top_rated', name: '⭐ Top Rated', endpoint: 'top_rated' },
        { id: 'upcoming', name: '📅 Upcoming', endpoint: 'upcoming' },
        { id: 'now_playing', name: '🎬 Now Playing', endpoint: 'now_playing' }
    ];

    return (
        <div className="category-filter">
            {categories.map(category => (
                <button
                    key={category.id}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category.endpoint, category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;
