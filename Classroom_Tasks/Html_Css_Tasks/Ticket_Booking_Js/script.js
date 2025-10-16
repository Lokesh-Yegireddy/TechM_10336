// ===== HEADER SECTION =====

// Create header and wrapper div
const header = document.createElement("header");
header.classList.add("navbar");

const navDiv = document.createElement("div");
navDiv.classList.add("nav-div");

// === LOGO SECTION ===
const logoDiv = document.createElement("div");
logoDiv.classList.add("logo");

const logoImg = document.createElement("img");
logoImg.src = "assets/logo.png";
logoImg.alt = "BookMyMovie Logo";
logoImg.classList.add("logo-img");

const logoText = document.createElement("span");
logoText.classList.add("logo-text");
logoText.textContent = "BookMyMovie";

const locationLink = document.createElement("a");
locationLink.href = "#";
locationLink.classList.add("location-wrapper");

const locationIcon = document.createElement("img");
locationIcon.classList.add("location-icon");
locationIcon.src = "assets/Location-icon.png";
locationIcon.alt = "Select Location";

const currentLocation = document.createElement("span");
currentLocation.classList.add("current-location");
currentLocation.textContent = "(Vizag)";

// combine location parts
locationLink.append(locationIcon, currentLocation);
logoDiv.append(logoImg, logoText, locationLink);

// === SEARCH BAR ===
const searchDiv = document.createElement("div");
searchDiv.classList.add("search-bar");

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search for movies, theatres...";

searchDiv.appendChild(searchInput);

// === NAV LINKS ===
const navContainer = document.createElement("div");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
ul.classList.add("nav-links");

const navItems = ["Home", "Movies", "Theatres", "Bookings"];
navItems.forEach((text) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = text;
  li.appendChild(a);
  ul.appendChild(li);
});
nav.appendChild(ul);
navContainer.appendChild(nav);

// === AUTH LINKS ===
const authDiv = document.createElement("div");
authDiv.classList.add("auth-links");

const login = document.createElement("a");
login.href = "#";
login.textContent = "Login";

const signup = document.createElement("a");
signup.href = "#";
signup.textContent = "SignUp";

authDiv.append(login, signup);

// Combine header sections
navDiv.append(logoDiv, searchDiv, navContainer, authDiv);
header.appendChild(navDiv);
document.body.appendChild(header);

// ===== MOVIE HEADER =====
const movieHeader = document.createElement("div");
movieHeader.classList.add("movie-header");

const sectionTitle = document.createElement("h2");
sectionTitle.classList.add("section-title");
sectionTitle.textContent = "Now Showing";

const comingSoon = document.createElement("a");
comingSoon.href = "#";
comingSoon.classList.add("coming-soon");
comingSoon.textContent = "Coming Soon";

movieHeader.append(sectionTitle, comingSoon);
document.body.appendChild(movieHeader);

// ===== FILTER ROW =====
const filterRow = document.createElement("div");
filterRow.classList.add("filter-row");

// Filter Dropdown
const filterDropdown = document.createElement("div");
filterDropdown.classList.add("filter-dropdown");

const filterBtn = document.createElement("div");
filterBtn.classList.add("filter-btn");
filterBtn.textContent = "Filter ▼";

// Filter content
const filterContent = document.createElement("div");
filterContent.classList.add("filter-content");

// Helper to create filter groups
function createFilterGroup(title, options) {
  const group = document.createElement("div");
  group.classList.add("filter-group");

  const titleEl = document.createElement("p");
  titleEl.classList.add("filter-title");
  titleEl.textContent = title;
  group.appendChild(titleEl);

  options.forEach((opt) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    label.append(input, ` ${opt}`);
    group.appendChild(label);
  });

  return group;
}

// Add filter groups
filterContent.append(
  createFilterGroup("Languages", ["English", "Hindi", "Telugu", "Tamil"]),
  createFilterGroup("Genres", ["Action", "Drama", "Comedy", "Thriller"]),
  createFilterGroup("Format", ["2D", "3D", "IMAX"])
);

// Nest inside filter button
filterBtn.appendChild(filterContent);
filterDropdown.appendChild(filterBtn);

// Filtered options
const filteredOptions = document.createElement("div");
filteredOptions.classList.add("filtered-options");

["English", "Action", "2D"].forEach((opt) => {
  const span = document.createElement("span");
  span.classList.add("filter-chip");
  span.textContent = opt;
  filteredOptions.appendChild(span);
});

filterRow.append(filterDropdown, filteredOptions);
document.body.appendChild(filterRow);

// ===== MOVIE GRID =====
const moviesGrid = document.createElement("div");
moviesGrid.classList.add("movies-grid");

const movies = [
  { img: "assets/movie1.jpg", title: "Avengers: Endgame" },
  { img: "assets/movie2.jpg", title: "The Lion King" },
  { img: "assets/movie3.jpg", title: "Spider-Man: No Way Home" },
  { img: "assets/movie4.jpg", title: "Shang-Chi" },
  { img: "assets/movie5.jpg", title: "Fantastic Beasts" },
];

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  const img = document.createElement("img");
  img.src = movie.img;
  img.alt = movie.title;

  const title = document.createElement("p");
  title.classList.add("movie-title");
  title.textContent = movie.title;

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("movie-buttons");

  const detailsBtn = document.createElement("button");
  detailsBtn.textContent = "See Details";

  const bookBtn = document.createElement("button");
  bookBtn.textContent = "Book Now";

  btnDiv.append(detailsBtn, bookBtn);
  card.append(img, title, btnDiv);
  moviesGrid.appendChild(card);
});

document.body.appendChild(moviesGrid);
