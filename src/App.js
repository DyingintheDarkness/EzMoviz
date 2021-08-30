import './App.css';
import Home from "./components/Home"
import Search from "./components/Search"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
<Switch>   
  <Route exact path="/">   
     <Home />
  </Route>
  <Route exact path="/search">   
     <Search/>
  </Route>
  </Switch>
      </Router>
    </div>
  );
}

export default App;
