import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

interface options {
    id: number;
    label: string;
    link: string;
}[]

const Search = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
      setShowOptions(!showOptions);      
  };

  return (
    <div>
      <button onClick={handleClick} id="dropdownButton" data-dropdown-toggle="dropdown" type="button"
        className="z-5 hover:text-white font-medium rounded-lg text-white text-sm px-2 py-2 text-center inline-flex items-center"> 
        <FaSearch className="w-4 h-4 hover:text-gray-600"/>
      </button>
      {showOptions && (
        <div className="z-10 origin-top-left absolute left-1 md:origin-top-right md:absolute md:right-0 mt-2 w-72 md:w-144 rounded-md shadow-lg shadow-gray-800 bg-white dark:bg-gray-900 ring-1 ring-black dark:ring-white ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="flex flex-row py-1" role="none">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Busca" aria-label="Search" aria-describedby="button-addon3" />
            <button className="btn inline-block px-6 py-2 border-2 border-blue-600 text-white font-medium text-xs leading-tight uppercase rounded bg-green-700 hover:bg-green-400 hover:text-black transition duration-150 ease-in-out" type="button" id="button-search"><FaSearch className="w-4 h-5 rounded-r-lg"/></button>              
          </div>
        </div>
      )}
    </div>  
  );
};

export default Search;