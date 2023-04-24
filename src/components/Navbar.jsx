import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import MenuGestion from "./MenuGestion";
import LogoInsy2s from "./../images/LogoInsy2s.png";
import LogoIncubateur from "./../images/Incubateur.png";
import LogoDashboard from "./../images/Dashboard.png";
import LogoPlanning from "./../images/Planning.png";
import LogoLogin from "./../images/Login.png";


function Navbar() {
  return (
    <div>
    <nav className="bg-white py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <div className="flex items-center">
          <Link to="/">
            <img
              src={LogoInsy2s}
              alt="Logo Insy2s"
              className="h-10 w-auto mr-6"
            />
          </Link>
          </div>
        
        <div className="flex items-center">

        <img
          src={LogoIncubateur}
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
          src={LogoDashboard}
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
          src={LogoPlanning}
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
          <Link to="/login">
            <img
              src={LogoLogin}
              alt="Contact Logo"
              className="h-6 w-auto mr-3"
            />
          </Link>
        </div>
      </div>
    </nav>
    <div><MenuGestion/></div>
   </div>
  );
}

export default Navbar;
