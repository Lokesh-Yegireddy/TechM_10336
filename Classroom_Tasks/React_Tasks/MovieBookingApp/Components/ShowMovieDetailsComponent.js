import { useState, useEffect } from "react";
import "/styles/ShowMovieDetails.css";
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieLanguages
} from "../Utils/fetchData";

const ShowMovieDetailsComponent = ({ movie, onBack }) => {
  const [extraDetails, setExtraDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExtraData = async () => {
      setLoading(true);
      try {
        const details = await fetchMovieDetails(movie.id);
        const castData = await fetchMovieCast(movie.id);
        const languagesData = await fetchMovieLanguages(movie.id);

        setExtraDetails(details);
        setCast(castData);
        setLanguages(languagesData);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    getExtraData();
  }, [movie.id]);

  if (loading) {
    return <div className="loading">Loading details...</div>;
  }

  if (!extraDetails) {
    return (
      <div className="movie-details">
        <button onClick={onBack}>← Back</button>
        <p>Details not found!</p>
      </div>
    );
  }

  // ✅ Pick best available image
  const imagePath =
    extraDetails.poster_path || extraDetails.backdrop_path || movie.poster_path || movie.backdrop_path;

  return (
    <div className="movie-details">
      <button onClick={onBack} className="back-btn">
        ← Back
      </button>

      <div className="movie-details-content">
        {/* ✅ Left side image */}
        <div className="movie-image">
          {imagePath ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${imagePath}`}
              alt={extraDetails.title}
            />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
        </div>

        {/* ✅ Right side details */}
        <div className="movie-info">
          <h2>{extraDetails.title || movie.title}</h2>
          <p>
            <strong>Release Date:</strong>{" "}
            {extraDetails.release_date || movie.release_date || "N/A"}
          </p>
          <p>
            <strong>Language:</strong>{" "}
            {extraDetails.original_language?.toUpperCase() || "N/A"}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            {extraDetails.vote_average
              ? `${extraDetails.vote_average} ⭐`
              : "Not Rated"}
          </p>
          <p>
            <strong>Overview:</strong>{" "}
            {extraDetails.overview || movie.overview || "No description."}
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {extraDetails.genres && extraDetails.genres.length > 0
              ? extraDetails.genres.map((g) => g.name).join(", ")
              : "Not available"}
          </p>

          <p>
            <strong>Top Cast:</strong>{" "}
            {cast.length > 0
              ? cast.map((actor) => actor.name).join(", ")
              : "Not available"}
          </p>

          <p>
            <strong>Available Languages:</strong>{" "}
            {languages && languages.length > 0
              ? languages.slice(0, 5).join(", ")
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowMovieDetailsComponent;
