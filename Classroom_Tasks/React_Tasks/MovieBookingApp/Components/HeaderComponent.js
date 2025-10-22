import { navLinks,authLinks } from "../Utils/links";


const HeaderComponent = ()=>{
    
return ( <>
     <div className="nav-div">
        <div className="logo">
          <img src="https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-movie-night-essentials-such-as-clapperboard-popcorn-and-tickets-png-image_16245533.png" alt="BookMyMovie Logo" className="logo-img" />
          <span className="logo-text">BookMyMovie</span>
          <a href="#" className="location-wrapper">
            <img
              className="location-icon"
              src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png"
              alt="Select Location"
            />
            <span className="current-location">(Vizag)</span>
          </a>
        </div>

       
      {/*  <div className="search-bar">
          <input type="text" placeholder="Search for movies, theatres..." />
          <button className="search-btn">Search</button>
        </div>
        
        */ }
        <div>
          <nav>
            <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
          </nav>
        </div>

        <div className="auth-links">
         {authLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
         ))}
        </div>
      </div>
        
    </>)   
}

export default HeaderComponent;