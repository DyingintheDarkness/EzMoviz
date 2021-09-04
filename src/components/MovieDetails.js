import React, {useContext} from 'react';
import Data from "./Data"
import { QueryContext } from './QueryContext';
import { useParams } from "react-router-dom";



function MovieDetails() {
    const {id} = useParams()
    const {data} = useContext(QueryContext)
    return (
        <div>
            <Data/>
            {data.forEach(item => {
    if(item.id === id){
        console.log(`ITEM ID: ${item.id} URL ID: ${id}`)
        return <>
        {id}
        </>
        
    } 
    
}
            )}


        </div>
    );
}

export default MovieDetails;