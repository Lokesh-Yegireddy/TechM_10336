

const SearchBarComponent = ({ searchText, setSearchText, onSearch }) => {
  return (
   
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="Search for movies, theatres..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="search-btn" onClick={onSearch}>Search</button>
      
     
    </div>

     
  );
};

export default SearchBarComponent;
