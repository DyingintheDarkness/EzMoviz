import React, { useContext, useState, useEffect } from "react";
import Data from "../components/Data";
import { Movie } from "../components/Movies";
import { QueryContext } from "../components/QueryContext";
import Loading from "../components/Loading";
const Trending = () => {
  const { data } = useContext(QueryContext);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
    setTrendingMovies(data.slice(10, 20));
  }, [data]);
  return (
    <div className="flex flex-col items-center w-full gap-3 mt-2 mb-10">
      {hasLoaded ? <Data /> : <Loading />}
      <h1 className="font-main text-4xl font-bold">Trending Movies</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:self-center gap-3">
        {trendingMovies.map((item) => {
          return <Movie item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
