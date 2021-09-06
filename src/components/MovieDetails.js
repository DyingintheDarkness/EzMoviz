import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "./QueryContext";
import { useParams, useHistory,  Link} from "react-router-dom";
import PageNotFound from "./PageNotFound";

const MovieDetails = () => {
  let { id } = useParams();
  // id = parseInt(id)
  const { data } = useContext(QueryContext);
  const history = useHistory()

  return (
    <>
      {
        data.map(item => {
          if(item.id === id){
          const {title, release_date, overview} = item
          return <>
          <h1>{id}</h1>
          <h2>{title}</h2>
          <h3>{release_date}</h3>
          <p>{overview}</p>
          </>
          } 
        })
      }
    
</>    
  );

};

export default MovieDetails;
