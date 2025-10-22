
import React from "react";
import HeaderComponent from "./Components/HeaderComponent.js";
import BodyComponent from "./Components/BodyComponent.js";
import { movies } from "./Utils/MoviesData.js";
import MovieGridComponent from "./Components/MovieGridComponent.js";
import FooterComponent from "./Components/FooterComponent.js";




const App = () => (
  <>
    <div className="scrollable-content">
      <HeaderComponent />
      <BodyComponent />
     <FooterComponent />
    </div>
   
  </>
);

export default App;



