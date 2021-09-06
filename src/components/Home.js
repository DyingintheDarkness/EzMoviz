import React,{useContext} from "react"
import {Link, useHistory} from "react-router-dom"
import { QueryContext } from './QueryContext';
import { RenderedMovies } from "./Movies";
const Home = () => {
    const {query, setQuery} = useContext(QueryContext)
    const history = useHistory();
    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query);
        setTimeout(() => {
            if(query){
                history.push("/search")
            }
        },500)
        
    }
    return (
        <>
        <nav>
    <Link to="/search">Search</Link>
    <Link to="/">Home</Link>
    <Link to="/trending">Trending</Link>
    <Link to="/top-10">Top 10</Link>

        </nav>
    <div className="main-container">
        <div className="header-container">
    <h1>EzMoviz</h1>
        </div>
        <div className="search-container">
    <input type="text" value={query} onChange={handleChange}/>
    <button>Lol</button>
        </div>
        <div className="card-container">
            <RenderedMovies/>
        </div>
        
    </div>
    </>
    
    )
}
export default Home;
