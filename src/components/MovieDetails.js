import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "./QueryContext";
import { useParams, useHistory } from "react-router-dom";
import Data from "./Data";
import PageNotFound from "./PageNotFound";
import uniqid from "uniqid";

const MovieDetails = () => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const { data, flag, setFlag, setCurrentItem, setGeneratedToken } =
    useContext(QueryContext);
  let { id } = useParams();

  useEffect(() => {
    setHasLoaded(true)
    const dataLength = Object.keys(data).length;
    try {
      if (data && dataLength !== 0) {
        for (let i = 0; i <= dataLength; i++) {
          let item = Object(data)[i];
          if (parseInt(item.id) === parseInt(id)) {
            setCurrentItem(item);
            setGeneratedToken(uniqid());
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
  }, [id, data, setCurrentItem, setFlag, setGeneratedToken]);

  return (
    <>
      {hasLoaded ? <Data/> :  "Loading"}
      {flag ? <Item /> : <PageNotFound />}
    </>
  );
};

const Item = () => {
  const history = useHistory();
  const { generatedToken, currentItem } = useContext(QueryContext);
  const { id, release_date, title, overview } = currentItem;
  const handleClick = (e) => {
    history.push(`${id}/${generatedToken}/download`);
  };
  const releaseYear = new Date(
    release_date * 1000
  ).getFullYear();  
  return (
    <>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h1>{releaseYear}</h1>
      <p>{overview}</p>

      <button onClick={handleClick}>Download</button>
    </>
  );
};

export default MovieDetails;
