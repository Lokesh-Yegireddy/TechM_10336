import { movies } from "../Utils/MoviesData";


const MovieGridComponent  = ({movies}) => {
  return (
    <div className="movies-grid">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.imgUrl} alt={movie.title} />
          <p className="movie-title">{movie.title}</p>
          <p className="movie-details">
            {movie.genre} | {movie.duration} | {movie.language}
          </p>
          <p className="movie-cast">Cast: {movie.cast.join(", ")}</p>
          <p className="movie-rating">Rating: {movie.avgRating} ⭐</p>
          <div className="movie-buttons">
            <button>See Details</button>
            <button>Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGridComponent;