import React,{useContext, useState} from "react"
import { QueryContext } from "./QueryContext";
import { Link } from "react-router-dom";
import Movies from "./Movies"
const Search = (props) => {
    const {query, setQuery} = useContext(QueryContext)
    const [hasData, setHasData] = useState(false)
    const handleChange = (e) => {
        let val = e.target.value
        if(val){
            setQuery(e.target.value)
        }
    setHasData(true)
    setTimeout(() => {
        setHasData(false)
    })
    }
    return(
        <>
    <Link to="/">Home</Link>
        <h1>Search</h1>
        {hasData ? <Movies/> : ""}
        <input type="text" value={query} onChange={handleChange} autoFocus/>
        </>
    )

}

export default Search;