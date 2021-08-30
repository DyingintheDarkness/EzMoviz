import React,{useState, createContext} from "react"
import {Link, useHistory} from "react-router-dom"
const Home = (props) => {
    const [query, setQuery] = useState("Loser")
    const history = useHistory();
    const handleChange = (e) => {
        setQuery(e.target.value)
        console.log(query);
        if(query){
            history.push("/search")
            
        }
        
    }
    return (
        <>
    <div className="main-container">
        <div className="header-container">
    <h1>EzMoviz</h1>
        
    <Link to="/search">Search</Link>
        </div>
        <div className="search-container">
    <input type="text" value={query} onChange={handleChange}/>
        </div>
        <div className="card-container">
        </div>
    </div>
    <QueryContext.Provider value={"Hello"}>
        {props.children}
</QueryContext.Provider>
    </>
    
    )
}


export const QueryContext = createContext();
export default Home;
