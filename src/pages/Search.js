import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "../components/QueryContext";
import { Link } from "react-router-dom";
import { Movies, RenderedMovies } from "../components/Movies";
import Data from "../components/Data";
import Filters from "../components/Filters";
import Loading from "../components/Loading";
const Search = (props) => {
  const { query, setQuery } = useContext(QueryContext);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    setHasLoaded(true);
    document.title = "MovieDB";
  }, []);
  return (
    <>
      {hasLoaded ? <Data /> : <Loading/>}

      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col gap-1 md:w-2/3">
          <input
            type="text"
            className="border-2 border-gray-200 w-80 pl-2 pr-2 h-10 rounded-md md:w-full"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <Filters />
        </div>
      </div>
      <div>{query ? <Movies /> : <RenderedMovies />}</div>
    </>
  );
};

export default Search;
