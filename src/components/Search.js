import React,{useContext, useState} from "react"
import { QueryContext } from "./QueryContext";
import { Link } from "react-router-dom";
import {Movies,LocalMovies} from "./Movies"
const Search = (props) => {
    const {query, setQuery} = useContext(QueryContext)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const handleChange = (e) => {
        let value = String(e.target.value).trim()
        if(value !== query){
            setQuery(value)
            setHasSubmitted(false)
        }
    }
    const handleSubmit =(e) => {
        e.preventDefault()
        setHasSubmitted(true)
    }
    return(
        <>
    <Link to="/">Home</Link>
    <form onSubmit={handleSubmit}>
        <h1>Search</h1>
        <input type="text" value={query} onChange={handleChange} placeholder="Search...." autoFocus/>
        {hasSubmitted ? <Movies/>: ""}
    </form>
        </>
    )

}

export default Search;