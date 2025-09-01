import React, { useState, useEffect } from 'react'
import Search from './components/search'
import axios from 'axios'
import Results from './components/results.jsx'
import Popup from './components/popup.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'

function App() {
  // Temporary hardcoded API key - this will make movies show up immediately
  const TMDB_API_KEY = "cd5accd03d022d93e3cebe1cc66aff50";
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    loading: true, // Start with loading true to fetch featured movies
    error: null,
    isSearchResults: false, // Track if we're showing search results or featured movies
    activeCategory: 'popular' // Track active category
  });

  // Fetch movies by category
  const fetchMoviesByCategory = async (endpoint = 'popular', categoryId = 'popular') => {
    try {
      console.log(`🌟 Loading ${categoryId} movies...`);
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: null
      }));

      const response = await axios.get(`${TMDB_BASE_URL}/movie/${endpoint}`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'en-US',
          page: 1
        }
      });

      console.log(`✅ ${categoryId} movies loaded:`, response.data.results?.length || 0);
      
      setState(prevState => ({
        ...prevState,
        s: "", // Clear search input
        results: response.data.results || [],
        loading: false,
        isSearchResults: false,
        activeCategory: categoryId
      }));
    } catch (error) {
      console.error(`❌ Failed to load ${categoryId} movies:`, error);
      setState(prevState => ({
        ...prevState,
        results: [],
        loading: false,
        error: `Failed to load ${categoryId} movies`
      }));
    }
  };

  // Wrapper for backward compatibility
  const fetchFeaturedMovies = () => fetchMoviesByCategory('popular', 'popular');

  // Helper function to get display name for categories
  const getCategoryDisplayName = (categoryId) => {
    const categoryMap = {
      'popular': 'Popular Movies',
      'top_rated': 'Top Rated Movies',
      'upcoming': 'Upcoming Movies',
      'now_playing': 'Now Playing Movies'
    };
    return categoryMap[categoryId] || 'Movies';
  };

  // Load featured movies on component mount
  useEffect(() => {
    fetchFeaturedMovies();
  }, []);

  const search = async (e) => {
    if (e.key === "Enter" && state.s.trim()) {
      console.log('🔍 Searching for:', state.s);
      console.log('🔑 API Key:', TMDB_API_KEY ? 'Present' : 'Missing');
      
      setState(prevState => ({
        ...prevState, 
        loading: true, 
        error: null
      }));

      try {
        const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
          params: {
            api_key: TMDB_API_KEY,
            query: state.s,
            include_adult: false,
            language: 'en-US',
            page: 1
          }
        });

        console.log('✅ API Response:', response.data);
        console.log('🎬 Found movies:', response.data.results?.length || 0);

        setState(prevState => ({
          ...prevState, 
          results: response.data.results || [],
          loading: false,
          isSearchResults: true
        }));
      } catch (error) {
        console.error('❌ Search failed:', error);
        console.error('📋 Error details:', error.response?.data);
        setState(prevState => ({
          ...prevState, 
          results: [],
          loading: false,
          error: `API Error: ${error.response?.data?.status_message || error.message}`
        }));
      }
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => ({
      ...prevState, s: s 
    }));
  };

  const openPopup = async (id) => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'en-US'
        }
      });

      setState(prevState => ({
        ...prevState, 
        selected: response.data
      }));
    } catch (error) {
      console.error('Failed to fetch movie details:', error);
    }
  };

  const closePopup = () => {
    setState(prevState => ({
      ...prevState, 
      selected: {}
    }));
  };

    return (
    <div className='App'>
      <header>
        <h1>🎬 Movie Database</h1>
        <p className="subtitle">Discover your next favorite movie</p>
      </header>
      <main>
        <Search 
          handleInput={handleInput} 
          search={search}
          loading={state.loading}
          value={state.s}
        />
        
        {!state.isSearchResults && (
          <CategoryFilter 
            onCategoryChange={fetchMoviesByCategory}
            activeCategory={state.activeCategory}
          />
        )}
        {state.error && (
          <div className="error-message">{state.error}</div>
        )}
        
        {/* Section header */}
        {state.results.length > 0 && (
          <div className="section-header">
            <h2>
              {state.isSearchResults 
                ? `Search Results` 
                : getCategoryDisplayName(state.activeCategory)
              }
            </h2>
            {state.isSearchResults && (
              <button 
                className="back-to-featured" 
                onClick={fetchFeaturedMovies}
              >
                ← Back to Movies
              </button>
            )}
          </div>
        )}
        
        <Results 
          results={state.results} 
          openPopup={openPopup}
        />
        {(state.selected.id) && (
          <Popup 
            selected={state.selected} 
            closePopup={closePopup}
          />
        )}
        <ScrollToTop />
      </main>
    </div>
  )
}

export default App
