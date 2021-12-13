# Assignment 1 - ReactJS app.

Name: Stephen Carbery

## Overview.

A Web App that displays movies from themoviedb[.]org

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Feature 1 - Upcoming Movies can be added and removed from a watchlist
+ Feature 2 - The watchlist can be independently viewed in the watchlist page
+ Feature 3 - Now playing movies can also be viewed.
+ Feature 4 - Top rated movies can also be viewed

## Setup requirements.

N/A

## API endpoints.

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Upcoming movies - /movie/upcoming
+ Movie Images - /movie/:id/images
+ Movie Reviews - /movie/:id/reviews
+ Top rated movies - movie/top_rated
+ Now Playing - /movie/now_playing


## App Design.

### Component catalogue.

N/A

### UI Design.

N/A

### Routing.

+ /movies - displays list of movies.
+ /movies/toprated - displays top rated movies by TMDB.
+ /movies/upcoming - displays upcoming movies.
+ /movies/nowplaying - displays a particular blog.
+ /movies/watchlist - displays movies that were added to the watchlist by the user.
+ /movies/favorites - displays movies that were added to a favourites list by the user.
+ /movies/:id - displays high level overview of the selected movie
+ /reviews/:id - displays the full review of a movie.
