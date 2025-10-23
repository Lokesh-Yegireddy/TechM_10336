import { movies } from "../Utils/MoviesData";


const MovieGridComponent  = ({movies}) => {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
         {/* <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.name} />*/}
         <img src={movie.poster} alt={movie.name} />
          <h1 className="movie-title"><strong>{movie.name}</strong></h1>
            <p>
      <strong>Duration:</strong> {`${Math.floor(movie.running_time / 60)}h ${movie.running_time % 60}m`}
    </p>
          <p className="movie-details">
                {movie.genres.join(",")} | {movie.language}
          </p>
       {/*   <p className="movie-cast">Cast: {movie.cast.join(", ")}</p> */}
          <p className="movie-rating">Rating: {movie.rating} ⭐</p>
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