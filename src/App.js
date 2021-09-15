import Home from "./pages/Home";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import NewReleases from "./pages/NewReleases";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import { QueryContext } from "./components/QueryContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import MovieDownload from "./pages/MovieDownload";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(null);
  const [currentItem, setCurrentItem] = useState({});
  const [generatedToken, setGeneratedToken] = useState("");
  const [useFilters, setUseFilters] = useState(false);
  const currentYear = new Date().getFullYear();
  const [filters, setFilters] = useState({
    year: "",
    genre: "",
  });
  return (
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
        setUseFilters,
      }}
    >
      <Router>
        <Navbar />
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
        <Footer />
      </Router>
    </QueryContext.Provider>
  );
};

export default App;
