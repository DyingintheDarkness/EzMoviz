import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      <h1 className="font-bold text-2xl md:text-4xl">404</h1>
      <h2 className="font-medium text-xl md:text-2xl">Page Not Found</h2>
      <p className="text-lg p-5 font-medium md:text-xl">
        Sorry, the page you were looking for could not be found.
      </p>
      <p className="text-lg font-medium md:text-xl">
        Want to go
        <Link
          to="/"
          className="font-bold pl-1 underline text-blue-800 cursor-pointer"
        >
          Back
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
