const MovieGridComponent = ({ movies, movieType, onSelectMovie }) => {
  if (!movies || movies.length === 0)
    return <strong style={{ color: "red" }}>No Data Found!</strong>;

  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt={movie.title}
          />
          <h1 className="movie-title"><strong>{movie.title}</strong></h1>

          {movieType === "upcoming" ? (
            <>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Language:</strong> {movie.original_language}</p>
              <p><strong>Popularity:</strong> {movie.popularity.toFixed(1)}</p>
              <div className="movie-buttons">
                <button onClick={() => onSelectMovie(movie)}>See Details</button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Language:</strong> {movie.original_language}</p>
              <p className="movie-rating">Rating: {movie.vote_average} ⭐</p>
              <div className="movie-buttons">
                <button onClick={() => onSelectMovie(movie)}>See Details</button>
                <button>Book Now</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieGridComponent;
