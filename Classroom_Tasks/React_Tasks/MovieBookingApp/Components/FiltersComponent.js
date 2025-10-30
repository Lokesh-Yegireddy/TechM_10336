 import { languages,genres,formats } from "../Utils/FiltersData";


 const FiltersComponent = ()=>{

    return(

    
    <div className="filter-btns-div">

    <button className="filter-btns">Top Rated </button>

     {/* languages  */} 
     {languages.map((language,index)=>(
         <button key={index} className="filter-btns">
            {language}
         </button>
     ))}

        {/* genres  */}
      {genres.map((genre,index)=>(
         <button key={index} className="filter-btns">
            {genre}
         </button>
     ))}
     

    
       {/* formats  */}
       {formats.map((format,index)=>(
         <button key={index} className="filter-btns">
            {format}
         </button>
     ))}



      {/* <button className="filter-btns">Top Rated</button>
      <button className="filter-btns" >English</button>
      <button className="filter-btns">Telugu</button>
      <button className="filter-btns">Hindi</button> */}


      </div>
   
    );
 };

 export default FiltersComponent;