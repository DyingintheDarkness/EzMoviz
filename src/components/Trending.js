import React, { useContext, useState,useEffect } from "react";
import Data from "./Data"
import { Movie } from "./Movies";
import { QueryContext } from "./QueryContext";
const Trending = () => {
    const { data } = useContext(QueryContext);
    const [trendingMovies, setTrendingMovies] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false)

    useEffect(()=> {
        setHasLoaded(true)
        setTrendingMovies(data.slice(10,20))
    }
    ,[data]
    )
    console.log(trendingMovies);
    return (
        <div>
            {hasLoaded ? <Data/> :  "Loading"}
            
            {data.length}
            <br/>
            {trendingMovies.length}
{trendingMovies.map(item => {
    return <Movie item={item} key={item.id}/>
})}
        
        </div>
    )
}

export default Trending;