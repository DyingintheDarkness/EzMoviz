import React,{useContext} from "react"
import { QueryContext } from "./Home";

const Search = (props) => {
    const value = useContext(QueryContext)
    return(
        <>
        <h1>Search</h1>
        <h2>{value}</h2>
        <input type="text" autoFocus/>
        </>
    )

}

export default Search;