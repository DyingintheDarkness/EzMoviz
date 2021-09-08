import React, { useContext, useState,useEffect } from "react";
import { QueryContext } from "./QueryContext";
import { Link } from "react-router-dom";
import { Movies, RenderedMovies } from "./Movies";
import Data from "./Data";
import Filters from "./Filters"

const Search = (props) => {
  const { query, setQuery} = useContext(QueryContext);
  const [hasLoaded, setHasLoaded] = useState(false)
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  
  useEffect(()=> {
    setHasLoaded(true)}
  ,[])
  return (
    <>
          {hasLoaded ? <Data/> :  "Loading"}

      <Link to="/">Home</Link>   
        <h1>Search</h1>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search...."
          autoFocus
        />
        <Filters />
        <div>
        {query ? <Movies/> : <RenderedMovies/>}
        </div>

    </>
  );
};

export default Search;
