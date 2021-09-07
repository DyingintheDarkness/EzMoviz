import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "./QueryContext";
import { useParams, useHistory} from "react-router-dom";
import Data from "./Data";
import PageNotFound from "./PageNotFound";
import uniqid from 'uniqid';


const MovieDetails = () => {
  // id = parseInt(id)
  const { data,flag,setFlag,setCurrentItem } = useContext(QueryContext);
  let { id } = useParams();
  
  useEffect(() => {
    const dataLength = Object.keys(data).length;
    try {
      if (data && dataLength !== 0) {
        for (let i = 0; i <= dataLength; i++) {
          let item = Object(data)[i];
          if (parseInt(item.id) === parseInt(id)) {
            setCurrentItem(item);
            setFlag(true);
            break;
          } else {
            setFlag(false);
          }
        }
      } else {
        setFlag(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, [id, data]);
  
  return (
    <>
      <Data />
      {flag ? <Item /> : <PageNotFound />}
    </>
  );
};

const Item = () => {
  const history = useHistory();
  const {generatedToken, setGeneratedToken, currentItem} = useContext(QueryContext)
  const { id, release_date, title, overview } = currentItem;
  const handleClick = (e) => {
    setGeneratedToken("ok")
    console.log("Token:" + generatedToken);
    history.push(`${id}/${generatedToken}/download`)
  }
  return (
    <>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <p>{overview}</p>
      <button onClick={handleClick}>Download</button>
    </>
  );
};

export default MovieDetails;
