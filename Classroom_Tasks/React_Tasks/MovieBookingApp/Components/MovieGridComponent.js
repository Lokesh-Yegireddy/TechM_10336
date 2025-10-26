const MovieGridComponent = ({ movies, movieType }) => {
  if (movies) {
    return (
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              alt={movie.title}
            />

            {movieType === "upcoming" ? (
              <>
                <h1 style={{ fontSize: "18px" }} className="movie-title">
                  <strong>{movie.title}</strong>
                </h1>
                <p>
                  <strong>Release Date:</strong> {movie.release_date}
                </p>
                <p>
                  <strong>Language:</strong> {movie.original_language}
                </p>
                <p>
                  <strong>Popularity:</strong> {movie.popularity.toFixed(1)}
                </p>
                <div className="movie-buttons">
                  <button>See Details</button>
                 
                </div>
              </>
            ) : (
              <>
                <h1 style={{ fontSize: "18px" }} className="movie-title">
                  <strong>{movie.title}</strong>
                </h1>
                {movie.cast && (
                  <p style={{ textAlign: "center", fontSize: "12px" }}>
                    <strong>Cast:</strong>{" "}
                    {movie.cast.map((actor) => actor.name).join(" | ")}
                  </p>
                )}
                <p>
                  <strong>Language :</strong> {movie.original_language}
                </p>
                <p className="movie-rating">Rating: {movie.vote_average} ⭐</p>
                <div className="movie-buttons">
                  <button>See Details</button>
                  <button>Book Now</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  } else {
    return <strong style={{ color: "red" }}>No Data Found!</strong>;
  }
};

export default MovieGridComponent;
