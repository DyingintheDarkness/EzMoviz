import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
const DownloadPage = () => {
  const [seconds, setSeconds] = useState(10);
  const [download, setDownload] = useState({ link: "", fileName: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    if (seconds === 0) {
      setIsDisabled(false);
      setDownload({
        link: "https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?cs=srgb&dl=pexels-alex-andrews-821736.jpg&fm=jpgpexels-alex-andrews-821736.jpg",
        fileName: "pexels-alex-andrews-821736.jpg",
      });
    }
  }, [seconds]);
  const handleDownload = () => {
    saveAs(download.link, download.fileName);
  };
  return (
    <div className="mt-10 flex flex-col items-center p-2 gap-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-2xl md:text-5xl md:p-3 border-4 border-blue-500 p-5 text-center w-20 rounded-full shadow-md">
          {seconds}
        </h2>
        <button
          onClick={handleDownload}
          disabled={isDisabled}
          className="border-2 border-gray-200 bg-green-200 p-1 shadow-sm rounded-md w-40 h-10 md:w-60 md:text-lg font-bold disabled:bg-red-200 disabled:pointer-events-none"
        >
          Download
        </button>
      </div>
      <p className="text-sm font-medium md:text-lg">
        Do not refresh the page please wait till the countdown is over.
        <br/>
        If you are facing any issues please download from original web site.
      </p>
    </div>
  );
};

export default DownloadPage;
