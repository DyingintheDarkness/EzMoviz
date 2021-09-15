import { useContext, useEffect, useState } from "react";
import { QueryContext } from "./QueryContext";
import { Link } from "react-router-dom";
const Movie = ({ item }) => {
  const { title, release_date, poster, id } = item;
  let d = new Date(release_date * 1000);

  return (
    <>
      <Link to={`/movie/${id}`}>
        <div className="w-60 h-100 border-2 border-gray-200 rounded-b-md pb-2 md:w-80 shadow-md overflow-hidden">
          <img src={poster} alt="" className="w-full h-auto" />
          <div className="flex flex-col items-center p-2 w-full">
            <p className="font-bold text-md font-main">{title}</p>
            <h4 className="font-main font-regular text-md">
              ({d.getFullYear()})
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};
const Movies = () => {
  const { data, query, useFilters, filters } = useContext(QueryContext);

  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:self-center md:gap-3 items-center w-full mt-10 gap-5">
        {query
          ? data.map((item) => {
              const releaseYear = new Date(
                item.release_date * 1000
              ).getFullYear();
              if (
                String(item.title).toLowerCase().startsWith(query.toLowerCase())
              ) {
                if (useFilters) {
                  if (
                    filters.genre !== "" &&
                    item.genres &&
                    item.genres.includes(filters.genre) &&
                    filters.year !== "" &&
                    releaseYear &&
                    releaseYear === parseInt(filters.year)
                  ) {
                    return <Movie item={item} key={item.id} />;
                  } else if (
                    filters.year === "" &&
                    filters.genre !== "" &&
                    item.genres &&
                    item.genres.includes(filters.genre)
                  ) {
                    return <Movie item={item} key={item.id} />;
                  } else if (
                    filters.genre === "" &&
                    filters.year !== "" &&
                    releaseYear &&
                    releaseYear === parseInt(filters.year)
                  ) {
                    return <Movie item={item} key={item.id} />;
                  }
                } else if (!useFilters) {
                  return <Movie item={item} key={item.id} />;
                }
              }
            })
          : "No Results Found"}
      </div>
    </>
  );
};

const RenderedMovies = (props) => {
  const { data, currentYear } = useContext(QueryContext);

  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:self-center md:gap-3 items-center w-full mt-10 gap-5">
        {data.map((item) => {
          let releaseYear = new Date(item.release_date * 1000).getFullYear();

          if (
            releaseYear === currentYear - 1 ||
            releaseYear === currentYear - 2
          ) {
            return <Movie item={item} key={item.id} />;
          }
        })}
      </div>
    </>
  );
};

export { Movies, RenderedMovies, Movie };
