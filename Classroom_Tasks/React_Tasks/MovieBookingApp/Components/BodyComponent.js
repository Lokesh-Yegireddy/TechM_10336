import { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import MovieGridComponent from "./MovieGridComponent";
import SearchBarComponent from "./SearchBarComponent";
import ShimmerCardComponent from "./ShimmerCardComponent";
import FiltersComponent from "./FiltersComponent";
import ShowMovieDetailsComponent from "./ShowMovieDetailsComponent";
import { fetchNowShowingMovies, fetchUpcomingMovies } from "../Utils/fetchData";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [ListOfMovies, setListOfMovies] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [currentMovieType, setCurrentMovieType] = useState("nowShowing");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null); // 👈 main toggle

  // Load Now Showing
  const loadNowShowing = async () => {
    setLoading(true);
    const movies = await fetchNowShowingMovies();
    setListOfMovies(movies);
    setFilteredMovieList(movies);
    setCurrentMovieType("nowShowing");
    setLoading(false);
  };

  // Load Upcoming
  const loadUpcoming = async () => {
    setLoading(true);
    const movies = await fetchUpcomingMovies();
    setListOfMovies(movies);
    setFilteredMovieList(movies);
    setCurrentMovieType("upcoming");
    setLoading(false);
  };

  useEffect(() => {
    loadNowShowing();
  }, []);

  // 🔹 If a movie is selected, show only the details page
  if (selectedMovie) {
    return (
      <ShowMovieDetailsComponent
        movie={selectedMovie}
        onBack={() => setSelectedMovie(null)} // go back to full view
      />
    );
  }

  // 🔹 Otherwise show the normal full layout
  return (
    <>
      <div className="movie-header">
        <button
          className={`now-showing-btn ${currentMovieType === "nowShowing" ? "active" : ""}`}
          onClick={loadNowShowing}
        >
          Now Showing
        </button>

        <button
          className={`coming-soon-btn ${currentMovieType === "upcoming" ? "active" : ""}`}
          onClick={loadUpcoming}
        >
          Upcoming Movies
        </button>
      </div>

      <SearchBarComponent
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={() => {
          const filterMovies = ListOfMovies.filter((movie) =>
            movie.title.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredMovieList(filterMovies);
        }}
      />

      <FiltersComponent />

      {loading ? (
        <div className="shimmer-grid">
          {[...Array(7)].map((_, i) => (
            <ShimmerCardComponent key={i} />
          ))}
        </div>
      ) : filteredMovieList.length > 0 ? (
        <MovieGridComponent
          movies={filteredMovieList}
          movieType={currentMovieType}
          onSelectMovie={(movie) => setSelectedMovie(movie)} // 👈 pass function
        />
      ) : (
        <div style={{ textAlign: "center", color: "#e91748", marginTop: "40px" }}>
          No movies found for "{searchText}"
        </div>
      )}
    </>
  );
};

export default BodyComponent;
