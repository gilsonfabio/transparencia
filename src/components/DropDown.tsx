import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';

interface options {
    id: number;
    label: string;
    link?: string;
}[]

const Dropdown = ({options}:{[key:string]:any}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
      setShowOptions(!showOptions);      
  };

  return (
    <div>
      <button onClick={handleClick} id="dropdownButton" data-dropdown-toggle="dropdown" type="button"
        className="z-5 hover:text-gray-600 font-medium rounded-lg text-white text-sm px-2 py-2 text-center inline-flex items-center"> 
        <FaBars className="w-4 h-4"/>
      </button>
      {showOptions && (
        <div className="z-10 origin-top-left absolute left-1 md:origin-top-right md:absolute md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black dark:ring-white ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
          <div className="py-1" role="none">
            {options && 
              options.map((option: any) => (
                <a key={option.id} href={option.link} 
                  className="text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:text-black" 
                  role="menuitem" 
                  id="menu-item-0"
                  tabIndex={option.id}
                >
                 {option.label}
                </a>  
              ))}
          </div>
        </div>
      )}
    </div>  
  );
};

export default Dropdown;