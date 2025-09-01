# 🎬 Movie Database

A modern, responsive movie discovery application built with React and powered by The Movie Database (TMDb) API.

## 🌟 Key Features

### Core Functionality
- **Real-time Movie Search**: Instant search functionality with debounced API calls for optimal performance
- **Category Browsing**: Browse movies by Popular, Top Rated, Upcoming, and Now Playing categories
- **Detailed Movie Information**: Comprehensive movie details including ratings, genres, runtime, and official links
- **Responsive Design**: Fully responsive interface optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations, hover effects, and intuitive user interactions

### Technical Highlights
- **Modern React Architecture**: Built with React 19+ using functional components and hooks
- **State Management**: Centralized state management using React's useState and useEffect
- **API Integration**: Seamless integration with TMDb API for real-time movie data
- **Error Handling**: Robust error handling with user-friendly error messages
- **Performance Optimization**: Lazy loading images, efficient re-renders, and optimized API calls
- **Modern Build Tools**: Powered by Vite for fast development and builds

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Modern JavaScript library for building user interfaces
- **Vite 7.1.2** - Next-generation frontend tooling for fast development
- **CSS3** - Custom styling with modern CSS features (Grid, Flexbox, CSS Variables)
- **Axios 1.11.0** - Promise-based HTTP client for API requests

### Development Tools
- **ESLint** - Code quality and consistency enforcement
- **React DevTools** - Debugging and performance monitoring
- **Modern ES6+** - Arrow functions, async/await, destructuring, and more

### External APIs
- **The Movie Database (TMDb) API** - Comprehensive movie data and high-quality images

## 📸 Screenshots

<img width="1826" height="980" alt="image" src="https://github.com/user-attachments/assets/21b03a23-6ae2-4859-88cb-acdc98e9a9ce" />


## 🏗️ Architecture & Design Patterns

### Component Architecture
- **Modular Components**: Reusable, single-responsibility components
- **Props-based Communication**: Clean data flow between parent and child components
- **Custom Hooks**: Efficient state management and side effects handling

### Performance Optimizations
- **Lazy Loading**: Images load on-demand to improve initial page load
- **Debounced Search**: Prevents excessive API calls during user typing
- **Error Boundaries**: Graceful error handling to prevent app crashes
- **Responsive Images**: Optimized image sizes based on device capabilities

### Code Quality
- **Clean Code Principles**: Readable, maintainable, and well-documented code
- **Consistent Styling**: Organized CSS with CSS custom properties for theming
- **Error Handling**: Comprehensive error handling for network requests and user interactions

## 📋 Installation & Setup

### Prerequisites
- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher)
- **TMDb API Key** (free registration at [themoviedb.org](https://www.themoviedb.org/))

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-database.git
   cd movie-database/movie-db
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the movie-db directory
   echo "VITE_TMDB_API_KEY=your_api_key_here" > .env
   ```
   
   **Get your TMDb API key:**
   - Visit [The Movie Database](https://www.themoviedb.org/)
   - Create a free account
   - Go to Settings > API
   - Request an API key (choose "Developer" option)
   - Copy your API key to the .env file

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start exploring movies!

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Additional Commands

```bash
# Run ESLint for code quality checks
npm run lint

# Run ESLint with auto-fix
npm run lint -- --fix
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the `movie-db` directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### API Configuration
The application uses The Movie Database (TMDb) API v3:
- **Base URL**: `https://api.themoviedb.org/3`
- **Image Base URL**: `https://image.tmdb.org/t/p`
- **Required**: Valid API key for all requests
