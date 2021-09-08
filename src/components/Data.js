import { useContext,useEffect } from "react";
import { QueryContext } from "./QueryContext";
const Data = () => {
  const { setData} = useContext(QueryContext);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/meilisearch/MeiliSearch/main/datasets/movies/movies.json"
      ).then(res => res.json().then(data => {
        setData(data)
      }).catch(err => console.log(err)))
  }, [])
  return null
};
export default Data;
