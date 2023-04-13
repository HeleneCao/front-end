import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

function Navbar() {
  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <div className="flex items-center">
          <Link to="/">
            <img
              src="src\images\LogoInsy2s.png"
              alt="Logo Insy2s"
              className="h-10 w-auto mr-6"
            />
          </Link>
          </div>
        
        <div className="flex items-center">

        <img
          src="src\images\Incubateur.png"
          alt="Logo Incubateur"
          className="h6 w-auto mr-3"
        />
          <Link
            to="/incubateur"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            INCUBATEUR
          </Link>

          <img
          src="src\images\Dashbord.png"
          alt="Logo Incubateur"
          className="h-6 w-auto mr-3"
        />
          <Link
            to="/dashboard"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            DASHBOARD
          </Link>
          
          <img
          src="src\images\Planning.png"
          alt="Logo Planning"
          className="h-6 w-auto mr-3"
        />
          <Link
            to="/planning"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            PLANNING
          </Link>
          
          <SearchBar />
         
        </div>
        
        <div className="flex items-center">
          <Link to="/">
            <img
              src="src\images\Login.png"
              alt="Contact Logo"
              className="h-6 w-auto mr-3"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
