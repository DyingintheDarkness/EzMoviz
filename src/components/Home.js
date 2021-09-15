import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { QueryContext } from "./QueryContext";
import { RenderedMovies } from "./Movies";
import Data from "./Data";

const Home = () => {
  const { query, setQuery } = useContext(QueryContext);
  const [hasLoaded, setHasLoaded] = useState(false);

  const history = useHistory();
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
    setTimeout(() => {
      if (query) {
        history.push("/search");
      }
    }, 500);
  };

  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <>
      {hasLoaded ? <Data /> : "Loading"}
      <div className="flex items-center justify-center mt-20 w-full">
        <input
          type="text"
          className="border-2 border-gray-200 w-80 pl-2 pr-2 h-10 rounded-md md:w-2/3"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
      </div>
      <div className="card-container">
        <RenderedMovies />
      </div>
    </>
  );
};
export default Home;
