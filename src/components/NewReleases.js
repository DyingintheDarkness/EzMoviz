import React,{useContext,useState,useEffect} from 'react';
import { QueryContext } from './QueryContext';
import {Movie} from "./Movies"
import Data from "./Data"

const NewReleases = () => {
    const {data, currentYear} = useContext(QueryContext)
    const [hasLoaded, setHasLoaded] = useState(false)
    
  useEffect(()=> {
    setHasLoaded(true)}
  ,[])
    return (
        <div>
            {hasLoaded ? <Data/> : "Loading"}
            
            {data.map(item => {
                let releaseYear = new Date(item.release_date * 1000).getFullYear()
                if (
                    releaseYear === currentYear 
                  ) {
                    return <Movie item={item} key={item.id} />;
                  }
            })}
        </div>
    );
}

export default NewReleases;