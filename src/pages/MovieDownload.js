import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { QueryContext } from "../components/QueryContext";
import DownloadPage from "./DownloadPage";
import InvalidDownloadPage from "./InvalidDownloadPage";

const MovieDownload = () => {
  const { id, flag, token } = useParams();
  const { generatedToken } = useContext(QueryContext);
  const [validToken, setValidToken] = useState(false);

  useEffect(() => {
    if (token === generatedToken) {
      setValidToken(true);
    } else {
      setValidToken(false);
    }
  }, [token]);
  return <div>{validToken ? <DownloadPage /> : <InvalidDownloadPage />}</div>;
};

export default MovieDownload;
