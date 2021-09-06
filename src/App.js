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
import MovieDownload from "./components/MovieDownload";

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
      <Router>
        <Switch>
         
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
            <Route exact path="/movie/:id/download">
              <MovieDownload />
            </Route>
            <Route>
              <PageNotFound/>
            </Route>
            
        </Switch>
      </Router>
          </QueryContext.Provider>
    </div>
  );
}

export default App;
