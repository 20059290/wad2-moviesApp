import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviesPage from "./pages/topratedMoviesPage";
import WatchlistMoviesPage from "./pages/watchlistMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000, 
        refetchOnWindowFocus: false
      },
    },
  });

  const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
              {" "}
            <Switch>
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route exact path="/movies/nowplaying" component={NowPlayingMoviesPage} />
                <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
                <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route exact path="/" component={HomePage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                <Redirect from="*" to="/" />
                </Switch>
            </MoviesContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
    };
  
  ReactDOM.render(<App />, document.getElementById("root"));