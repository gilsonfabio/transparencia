import React, { useState } from "react";
import Link from 'next/link'; 

const NavTabs = ({options}:{[key:string]:any}) => {
  return (
    <div className="bg-gray-300 flex flex-row justify-center items-center w-screen">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-5 md:gap-2">
        {options.map((option:any) => (          
            <Link key={option.conId} href={`/concursos/${option.conId}`} >
              <div className="bg-gray-300 w-64 mb-1 hover:border-b-4 border-green-700 hover:cursor-pointer " > 
                <div className="flex flex-col items-center px-2 py-4">
                  <div className="font-bold text-lg mb-1 mt-1">
                    {option.conTitle}
                  </div>                  
                </div>                          
              </div>
            </Link>                           
        ))}      
      </div> 
    </div>
  );
};

export default NavTabs;
