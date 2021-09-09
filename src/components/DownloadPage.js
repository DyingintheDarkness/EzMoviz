import React,{useState,useEffect} from 'react';
import { saveAs } from "file-saver";
const DownloadPage = () => {
const [seconds, setSeconds] = useState(10)
const [download, setDownload] = useState({link : "", fileName: ""})
const [disableButton, setDisableButton] = useState(true)
useEffect(() => {
    if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } 
      if(seconds === 0){
          setDisableButton(false)
          setDownload({link: "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?cs=srgb&dl=pexels-alex-andrews-821736.jpg&fm=jpgpexels-alex-andrews-821736.jpg",
          fileName: "pexels-alex-andrews-821736.jpg"
          })
      }

    },[seconds])
    const handleDownload = () => {
    saveAs(
        download.link,
        download.fileName
      );
    }
    return (
        <div>
            {seconds}
            <button onClick={handleDownload} disabled={disableButton}>Download</button>
        </div>
    );
}

export default DownloadPage;