import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import CheckboxItem from "./CheckboxItem";

import { filtros } from "../services/licmodalidades";

interface options {
    opc: string;
    title: string;
    icon?: string;
    itens?: [
        {label: string;
        link: string;}
    ]
}

const Checkbox = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (options: any) => {
      setShowOptions(!showOptions);      
  };




  const [isCheckedA, setIsCheckedA] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };



  return (
    <div className="py-3 w-144 ">  
        {filtros.map((option:any) => (
            <div key={option.opc} id="accordion-color" data-accordion="collapse" className="dark:bg-gray-800 text-black dark:text-white dark:hover:bg-gray-700 ">
                <h2 id="accordion-color-heading-1">                           
                    <button onClick={handleClick} type="button" className="w-72 ml-3 mr-3 flex flex-row justify-between items-center drop-shadow-xl p-2 font-medium text-left border border-gray-200 dark:border-gray-700 text-black dark:text-white dark:bg-gray-800 hover:bg-Cerceta-300 dark:hover:bg-gray-700 rounded-lg " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                      <span className="mt-1 text-lg">{option.title}</span>   
                      <FaBars className="w-4 h-4"/>                 
                    </button>
                </h2>
                {showOptions && (
                    <div id="accordion-color-body-1" aria-labelledby="accordion-color-heading-1" className="w-72 ml-3 rounded-lg drop-shadow-xl dark:bg-gray-700 border ">
                      {filtros && 
                        <>
                          <div>
                            <CheckboxItem handleChange={handleChangeA} isChecked={isCheckedA} label="Carta Convite" />
                          </div>
                          <div>
                            <CheckboxItem handleChange={handleChangeB} isChecked={isCheckedB} label="Chamada Pública" />
                          </div>                          
                        </>  
                      }        
                    </div>                
                )}
            </div>
        ))}                              
    </div>
  );
};

export default Checkbox;   




//<a key={row.id} href={row.name} 
//className="text-black block px-4 py-2 text-sm hover:bg-Cerceta-300 " 
//role="menuitem" 
//
//id="menu-item-0"
//>
//{row.name}
//</a>
//