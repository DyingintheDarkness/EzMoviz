import './App.css';
import Home from "./components/Home"
import Search from "./components/Search"
import { useState } from 'react';

import { QueryContext} from './components/QueryContext';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState({})
  return (
    <div className="App">
      <Router>
<Switch>   
  <QueryContext.Provider value={{query, setQuery, data, setData}}>
  <Route exact path="/">   
     <Home />
  </Route>
  <Route exact path="/search">   
     <Search/>
  </Route>
  </QueryContext.Provider>
  </Switch>
      </Router>
    </div>
  );
}

export default App;
