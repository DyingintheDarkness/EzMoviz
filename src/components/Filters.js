import { useContext, useState } from "react";
import { QueryContext } from "./QueryContext";
function Filters() {
  const { setFilters, currentYear } = useContext(QueryContext);
  const [releaseYear, setReleaseYear] = useState(currentYear);
  const genres = [
      "Action",
      "Documentary",
      "Thriller",
      "Romance",
      "Drama",
      "Horror",
      "Animation",
      "Family",
      "War",
      "Science Fiction",
      "Fantasy",
      "Adventure",
      "Mystery",
      "History"
    ];
    const handleChange = (e) => {
    setReleaseYear(e.target.value);
    console.log(releaseYear);
  };
  return (
    <div>
      <input
        type="number"
        min="1900"
        max="2099"
        step="1"
        value={releaseYear}
        onChange={handleChange}
      />
      <select>
          {genres.map(genre => {
              return <option value={genre} key="">{genre}</option>
          })}
      </select>
    </div>
  );
}

export default Filters;
