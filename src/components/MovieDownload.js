import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom"

function MovieDownload() {
const {id} = useParams()
const [seconds, setSeconds] = useState(10)
const [downloadLink, setDownloadLink] = useState("")

useEffect(() => {
    if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds(0);
      }

})
    return (
        <div>
            {seconds}
            <a href="https://c.tenor.com/Z6gmDPeM6dgAAAAC/dance-moves.gif" download>Download</a>
        </div>
    );
}

export default MovieDownload;