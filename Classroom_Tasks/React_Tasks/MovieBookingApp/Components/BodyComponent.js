import { languages,genres,formats } from "../Utils/FiltersData";


const BodyComponent = () => {

  // Function to render selected filters dynamically
  const renderSelectedFilters = () => {
    const selected = [];
    document.querySelectorAll(".filter-checkbox").forEach((cb) => {
      if (cb.checked) selected.push(cb.value);
    });

    const container = document.getElementById("filteredOptions");
    container.innerHTML = selected
      .map((f) => `<span class="filter-chip">${f}</span>`)
      .join("");
  };

  // Attach click listeners directly in render using onClick
  const createCheckbox = (value) => (
    <label key={value}>
      <input
        type="checkbox"
        value={value}
        className="filter-checkbox"
        onClick={renderSelectedFilters}
      />{" "}
      {value}
    </label>
  );

  return (
    <>
      <div className="movie-header">
        <h2 className="section-title">Now Showing</h2>
        <a href="#" className="coming-soon">Coming Soon</a>
      </div>

      <div className="filter-row">
        <div className="filter-dropdown">
          <div className="filter-btn">
            Filter ▼
            <div className="filter-content">
              <div className="filter-group">
                <p className="filter-title">Languages</p>
                {languages.map(createCheckbox)}
              </div>

              <div className="filter-group">
                <p className="filter-title">Genres</p>
                {genres.map(createCheckbox)}
              </div>

              <div className="filter-group">
                <p className="filter-title">Format</p>
v                {formats.map(createCheckbox)}
              </div>
            </div>
          </div>
        </div>

        <div className="filtered-options" id="filteredOptions"></div>
      </div>
    </>
  );
};

export default BodyComponent;