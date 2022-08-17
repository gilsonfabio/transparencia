import React, { useState } from "react";

function Submenu({options}:{[key:string]:any}) {
  
  function goBack() {
    window.history.back()
  }
  
  return (    
    <div className="dark:bg-zinc-900">
      {options.map((option:any) => (
      <div key={option.menId} >  
        <nav className="flex flex-row bg-white dark:bg-zinc-900 rounded-md mt-10 ml-5 md:mt-16 md:ml-24">
          {option.breadcrumbs.map((row: any, idx:number) => (
            <ol key={idx} className="list-reset flex items-center">           
              <li><button onClick={goBack} className="text-green-600 hover:text-green-700 text-xs md:text-sx ">{row.descricao}</button></li>
              <li><span className="text-gray-500 md:mx-2 ml-1">/</span></li>
            </ol>
           ))} 
           <span className="text-gray-500 ml-1 mt-1 text-xs md:text-sx">{option.menTitle}</span>
        </nav> 
        <div className="text-2xl md:text-4xl mb-3 font-bold ml-5 md:ml-24">
          {option.menTitle}
        </div>
      </div>  
      ))}
    </div>
  );
}

export default Submenu;