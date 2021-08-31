import React,{useContext} from "react"
import {Link, useHistory} from "react-router-dom"
import { QueryContext } from './QueryContext';
import Data from "./Data"
const Home = (props) => {
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
    <Link to="/search">Search</Link>
    <div className="main-container">
        <div className="header-container">
    <h1>EzMoviz</h1>
        </div>
        <div className="search-container">
    <input type="text" value={query} onChange={handleChange}/>
        </div>
        <div className="card-container">
        </div>
        
    </div>
    </>
    
    )
}
export default Home;
