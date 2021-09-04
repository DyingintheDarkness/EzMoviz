import { useContext } from "react";
import { QueryContext } from "./QueryContext";
import Data from "./Data";
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
  const { data, query } = useContext(QueryContext);
  return (
    <>
      <Data />
      {query ? data.map((item) => {
            if (String(item.title).startsWith(query)) {
              return <Movie item={item} key={item.id} />;
            }
          })
        : "No Results Found"}
    </>
  );
};

const RenderedMovies = (props) => {
  const { data, currentYear } = useContext(QueryContext);
  return (
    <>
      <Data />
      {data.map((item) => {
        // console.log(item.genres)
        const releaseYear = new Date(item.release_date * 1000).getFullYear();
        if (releaseYear === currentYear || releaseYear === currentYear - 1) {
          return <Movie item={item} key={item.id} />;
        }
      })}
    </>
  );
};

export { Movies, RenderedMovies };
