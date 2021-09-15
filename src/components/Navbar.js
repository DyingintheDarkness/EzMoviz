import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header>

    <div className="flex flex-row sm:relative w-full justify-between sm:items-center p-1 shadow-md">
      <h1 className="font-bold lg:text-xl">MovieDB</h1>
      <nav className="md:flex md:flex-row md:w-1/2 md:justify-between md:visible md:items-center hidden">
        <Link className="lg:text-lg" to="/">
          Home
        </Link>
        <Link  className="lg:text-lg" to="/search">
          Browse Movies
        </Link>
        <Link className="lg:text-lg" to="/trending">
          Trending
        </Link>
        <Link  className="lg:text-lg mr-2" to="/new-releases">
          New Releases
        </Link>
      </nav>
      <nav
        className={`md:hidden bg-white border-t-2 border-t-blue-200 absolute top-0 w-full left-0 mt-8 z-10 transform ${
          navbar ? "-translate-y-0" : "-translate-y-60"
        } transition-all duration-500 ease-in-out`}
        >
        <div className="shadow-sm flex flex-col relative left-0 m-0 p-0 w-full gap-2">
          <Link
            className="text-center font-regular border-b-2 border-blue-200 shadow-sm shadow-blue-200"
            to="/"
            >
            Home
          </Link>
          <Link
            className="text-center font-regular border-b-2 border-blue-200 shadow-sm shadow-blue-200"
            to="/search"
            >
            Browse Movies
          </Link>
          <Link
            className="text-center font-regular border-b-2 border-blue-200 shadow-sm shadow-blue-200"
            to="/trending"
            >
            Trending
          </Link>
          <Link
            className="text-center font-regular border-b-2 border-blue-200 shadow-sm shadow-blue-200"
            to="/new-releases"
            >
            New Releases
          </Link>
        </div>
      </nav>
      <span className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setNavbar(!navbar)}
          >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
      </span>
    </div>
            </header>
  );
};

export default Navbar;
