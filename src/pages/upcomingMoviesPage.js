import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
// const UpcomingMoviesPage = (props) => {
//   const [movies, setMovies] = useState([]);
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))

//   const addToFavorites = (movieId) => {
//     const updatedMovies = movies.map((m) =>
//       m.id === movieId ? { ...m, favorite: true } : m
//     );
//     setMovies(updatedMovies);
//   };

//   useEffect(() => {
//     getUpcoming().then(movies => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlist = movies.filter(m => m.watchList)
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
  const addToWatchlist = (movieId) => true 

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchlistIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;