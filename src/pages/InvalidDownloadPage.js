import React from "react";
import { Link } from "react-router-dom";

const InvalidDownloadPage = () => {
  return (
    <div className="flex flex-col items-center mt-40 bg-gray-200 pt-5 pb-5">
      <h1 className="text-xl font-bold text-red-800">Invalid Download Page</h1>
      <div className="p-6 flex flex-col font-medium text-gray-800 text-md">
        <p>You may have recieved this error cause of some reasons.</p>
        <p>Please try downloading again from original website page.</p>
      </div>
      <Link to="/" className="bg-green-200 p-2 font-bold rounded-md">
        Go Back Home
      </Link>
    </div>
  );
};

export default InvalidDownloadPage;
