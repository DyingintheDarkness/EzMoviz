import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Trending from "./components/Trending";
import Top10 from "./components/Top10";
import PageNotFound from "./components/PageNotFound";

import { useState } from "react";

import { QueryContext } from "./components/QueryContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const currentYear = new Date().getFullYear();
  const [filters, setFilters] = useState({
    year: currentYear,
    genre: [""],
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <QueryContext.Provider
            value={{
              query,
              setQuery,
              data,
              setData,
              filters,
              setFilters,
              currentYear,
            }}
          >
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/top-10">
              <Top10 />
            </Route>
            <Route exact path="/trending">
              <Trending />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetails />
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>

          </QueryContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
