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
<div className="flex flex-col items-center w-full gap-3 mt-2 mb-10">
      <h1 className="font-main text-4xl font-bold">New Releases</h1>
<div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly md:self-center gap-3">            {hasLoaded ? <Data/> : "Loading"}
            {data.map(item => {
                let releaseYear = new Date(item.release_date * 1000).getFullYear()
                if (
                    releaseYear === currentYear 
                  ) {
                    return <Movie item={item} key={item.id} />;
                  }
            })}
        </div>
        </div>
    );
}

export default NewReleases;