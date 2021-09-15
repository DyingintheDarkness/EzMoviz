import { useContext, useState } from "react";
import { QueryContext } from "./QueryContext";
import { uniqid } from "uniqid";
import { YearPicker } from "react-dropdown-date";
const Filters = () => {
  const { filters, setFilters, useFilters, setUseFilters } =
    useContext(QueryContext);
  const [hideFilters, setHideFliters] = useState(true);
  const genres = [
    "",
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
    "History",
  ];

  return (
    <div className="">
      <button
        className="bg-green-200 w-20 h-7 p-2 rounded-md flex flex-row items-center"
        onClick={() => setHideFliters(!hideFilters)}
      >
        Filters{" "}
        <span className="mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`flex flex-row gap-5 items-left mt-2 ${
          hideFilters ? "hidden" : ""
        }`}
      >
        <label htmlFor="toggle-switch">
          <input
            type="checkbox"
            id="toggle-switch"
            checked={useFilters}
            className="cursor-pointer w-20 h-8 rounded-full appearance-none bg-black bg-opacity-5 border-blue-200 border-2 checked:bg-blue-500 transition duration-200 relative"
            onChange={() => setUseFilters(!useFilters)}
          />
        </label>
        <YearPicker onChange={(e) => setFilters({ ...filters, year: e })} />
        <select
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        >
          {genres.map((genre) => {
            return (
              <option value={genre} key={uniqid}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filters;
