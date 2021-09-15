import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "../components/QueryContext";
import { useParams, useHistory } from "react-router-dom";
import Data from "../components/Data";
import PageNotFound from "./PageNotFound";
import uniqid from "uniqid";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { data, flag, setFlag, setCurrentItem, setGeneratedToken } =
    useContext(QueryContext);
  let { id } = useParams();
  useEffect(() => {
    setHasLoaded(true);
    const dataLength = Object.keys(data).length;
    try {
      if (isNaN(id) === false) {
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
      }
    } catch (err) {
      console.log(err);
    }
  }, [id, data, setCurrentItem, setFlag, setGeneratedToken]);

  return (
    <div className="mb-10 mt-10">
      {hasLoaded ? <Data /> : <Loading />}
      {flag ? <Item /> : <PageNotFound />}
    </div>
  );
};

const Item = () => {
  const history = useHistory();
  const { generatedToken, currentItem } = useContext(QueryContext);
  const { id, release_date, title, overview, poster } = currentItem;
  const handleClick = (e) => {
    history.push(`${id}/${generatedToken}/download`);
  };
  const d = new Date(release_date * 1000);
  let date = `${d.getDay()} ${d.toLocaleString("en-us", {
    month: "long",
  })} ${d.getFullYear()}`;
  return (
    <div className="flex flex-col items-center md:mb-16">
      <div className="flex flex-col items-center">
        <img src={poster} alt="" className="w-60 h-auto shadow-md md:w-70" />
        <h2 className="text-md font-bold md:text-2xl">{title}</h2>
        <h1 className="text-md font-thin md:text-xl">{date}</h1>
        <p className="font-regular text-sm p-4 md:text-lg">{overview}</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-green-300 rounded-lg w-25 h-7 font-bold p-3 flex items-center shadow-md md:text-xl md:w-30 md:p-4"
      >
        Download
      </button>
    </div>
  );
};

export default MovieDetails;
