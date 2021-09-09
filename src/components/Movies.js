import { useContext, useEffect, useState } from "react";
import { QueryContext } from "./QueryContext";
import { Link } from "react-router-dom";
const Movie = ({ item }) => {
  const { title, overview, release_date, id } = item;
  let d = new Date(release_date * 1000);
  let date = `${d.getDay()} ${d.toLocaleString("en-us", {
    month: "long",
  })} ${d.getFullYear()}`;


  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <h2>{date}</h2>
        <Link to={`/movie/${id}`}>{id}</Link>

      </div>
    </>
  );
};
const Movies = () => {
  const { data, query,useFilters,filters } = useContext(QueryContext);


  return (
    <>
    
      {query
        ? data.map((item) => {
          const releaseYear = new Date(
            item.release_date * 1000
          ).getFullYear();  
            if (String(item.title).toLowerCase().startsWith(query.toLowerCase())) {          
  
              
if(useFilters){
 if(filters.genre !== "" && item.genres && item.genres.includes(filters.genre) && filters.year !== "" && releaseYear  && releaseYear === parseInt(filters.year)){
   return <Movie item={item} key={item.id} />; 
  } else if(filters.year === "" && filters.genre !== "" && item.genres && item.genres.includes(filters.genre)){    
    return <Movie item={item} key={item.id} />; 
  } else if(filters.genre === "" && filters.year !== "" && releaseYear  && releaseYear === parseInt(filters.year)){
   return <Movie item={item} key={item.id}/>; 
 }

} else if(!useFilters){
  return <Movie item={item} key={item.id} />;
}
}

} 


)


        : "No Results Found"}
    </>
  );
};

const RenderedMovies = (props) => {
  const { data, currentYear } = useContext(QueryContext); 
  

  return (
    <>
    <div>

    {data.map((item) => {
     let releaseYear = new Date(item.release_date * 1000).getFullYear()

     if (
         releaseYear === currentYear - 1 ||
         releaseYear === currentYear - 2
       ) {
         return <Movie item={item} key={item.id} />;
       }
    })
  }
  </div>


    </>
  );
};

export { Movies, RenderedMovies,Movie };
