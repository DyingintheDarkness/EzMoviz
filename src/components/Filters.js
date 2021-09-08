import { useContext, useState } from "react";
import { QueryContext } from "./QueryContext";
// import YearPicker from "react-year-picker";
import { Switch } from "@chakra-ui/react";
import { uniqid } from "uniqid";
// import Datetime from "react-datetime"
import { YearPicker } from 'react-dropdown-date';
const Filters = () => {
  const {filters, setFilters, useFilters, setUseFilters } =
    useContext(QueryContext);
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
    <div>
      <Switch
        isChecked={useFilters}
        onChange={() => setUseFilters(!useFilters)}
      />
      <YearPicker onChange={(e) => setFilters({...filters, year: e})}/>
      <select onChange={(e) => setFilters({...filters, genre: e.target.value})}> 
        {genres.map((genre) => {
          return (
            <option value={genre} key={uniqid}>
              {genre}
            </option>
          );
        })}
      </select>
      {filters.genre}
      {filters.year}
    </div>
  );
};

export default Filters;
