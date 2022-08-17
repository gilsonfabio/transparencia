import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import Sidebar from "./Sidebar";

interface options {
  opc: string;
  title: string;
  icon?: string;
  itens?: [
      {label: string;
      link: string;}
  ]
}

const itemsBtn = {
  btnStatus: 'true',
  btnTitle: 'Gestão Contabil',
}

const ButtonCards = ({options}:{[key:string]:any}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
      setShowOptions(!showOptions);      
  };

  return (
    <div>
      {options.map((option:any) => (
        <div key={option.opc}>
        <button onClick={handleClick} type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-start drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
          <div className="w-8 md:w-15 h-8 md:h-15 md:mt-3">
            <Image src={require(`../assets/icons/${option.icon}.png`)} alt="" width={50} height={50} />
          </div>     
          <div className="mt-3 ml-3 items-center">
            <span className="mt-3 ml-0 text-lg justify-center items-center ">{option.title}</span>
          </div>                      
        </button>
        {showOptions && (
          <div>
            <Sidebar dados = {options} />          
          </div>
        )}      
      </div>
      ))}            
    </div>  
  );
};

export default ButtonCards;