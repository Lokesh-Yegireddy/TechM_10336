import { useState } from "react";
import { languages, genres, formats } from "../Utils/FiltersData";
import HeaderComponent from "./HeaderComponent";
import MovieGridComponent from "./MovieGridComponent";
import { movies } from "/Utils/MoviesData";
import SearchBarComponent from "./SearchBarComponent";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [ListOfMovies, setListOfMovies] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [currentMovieType, setCurrentMovieType] = useState("nowShowing"); 
  const [genreMap, setGenreMap] = useState({});



  // ✅ moved fetchData outside if-block so both initial load & button can use it
  const fetchData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    );
    const jsonData = await response.json();

    const movies = jsonData.results;

    // ✅ Fetch cast details for each movie
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      const castResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      const castData = await castResponse.json();
     // console.log(castData);
      movie.cast = castData.cast ? castData.cast.slice(0, 5) : [];
    }

    setListOfMovies(movies);
    setFilteredMovieList(movies);
    console.log("Now Showing Movies:", movies);
  };

  // ✅ Only call once initially
  if (!dataFetched) {
    fetchData();
    setDataFetched(true);
  }

  const fetchUpcommingMovies = async () => {
    const upcommingData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
    );

    const upcommingMoviesData = await upcommingData.json();
 //   console.log("Upcoming Movies:", upcommingMoviesData.results);
    setListOfMovies(upcommingMoviesData.results);
    setFilteredMovieList(upcommingMoviesData.results);
     setCurrentMovieType("upcoming"); // update the state
  };

  return (
    <>
      <div className="movie-header">
  <button
    className={`now-showing-btn ${currentMovieType === "nowShowing" ? "active" : ""}`}
    onClick={() => {
      fetchData();
      setCurrentMovieType("nowShowing");
    }}
  >
    Now Showing
  </button>

  <button
    className={`coming-soon-btn ${currentMovieType === "upcoming" ? "active" : ""}`}
    onClick={fetchUpcommingMovies}
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

      {filteredMovieList.length > 0 ? (
        <MovieGridComponent movies={filteredMovieList} movieType={currentMovieType} />
      ) : searchText.trim() ? (
        <div
          style={{
            textAlign: "center",
            color: "#e91748",
            fontWeight: "600",
            marginTop: "40px",
            fontSize: "18px",
          }}
        >
          No movies found for "{searchText}"
        </div>
      ) : (
        <MovieGridComponent movies={ListOfMovies}  movieType={currentMovieType}  />
      )}
    </>
  );
};

export default BodyComponent;
