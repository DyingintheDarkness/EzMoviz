import React,{useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom"
import { QueryContext } from './QueryContext';

const MovieDownload = () => {
const {id,flag, token} = useParams()
const {generatedToken, setGeneratedToken} = useContext(QueryContext)
const [seconds, setSeconds] = useState(10)
const [validToken, setValidToken] = useState(false)
const [downloadLink, setDownloadLink] = useState("")


useEffect(() => {
    if(token === generatedToken){
        setValidToken(true)
        } else{
            setValidToken(false)
        }
    // if (seconds > 0) {
    //     setTimeout(() => setSeconds(seconds - 1), 1000);
    //   } else {
    //     setSeconds(0);
    //   }


},[token])
    return (
        <div>
            {validToken ? "You can download" : "Download From Original Site"}
        </div>
    );
}

export default MovieDownload;