import Home from "./components/Home";
import Search from "./components/Search";
import Trending from "./components/Trending";
import NewReleases from "./components/NewReleases";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
import { QueryContext } from "./components/QueryContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import MovieDownload from "./components/MovieDownload";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [generatedToken, setGeneratedToken] = useState("");
  const [useFilters, setUseFilters] = useState(false)
  const currentYear = new Date().getFullYear();
  const [filters, setFilters] = useState({
    year: "",
    genre: "",
  });

  
  return (
    <div className="App">
      <QueryContext.Provider
        value={{
          query,
          setQuery,
          data,
          setData,
          filters,
          setFilters,
          currentYear,
          flag,
          setFlag,
          generatedToken,
          setGeneratedToken,
          currentItem,
          setCurrentItem,
          useFilters,
          setUseFilters
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/new-releases">
              <NewReleases />
            </Route>
            <Route exact path="/trending">
              <Trending />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetails />
            </Route>
            <Route exact path="/movie/:id/:token/download">
              <MovieDownload />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </QueryContext.Provider>
    </div>
  );
};

export default App;
