import React, { useState } from "react";
import Image from "next/image";

interface options {
  carId: number;
  carTitle: string;
  carTexto?: string;
  carLink?: string;
  carImage: string;
}

const Inform = ({options}:{[key:string]:any}) => {
    return (
        <div className="mb-2 p-2 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2"> 
            {options.map((option:any) => ( 
                <div key={option.infId} className="">
                    <div className="flex flex-col justify-center items-center text-2xl font-bold">
                        {option.infTitle}
                    </div>                
                    <div className="mt-2 mb-4">
                        {option.infTexto}
                    </div>
                    <div className="bg-green-700 text-white hover:bg-green-300 hover:text-black flex flex-row items-center justify-center ml-20 md:ml-0 w-60 p-2 rounded-lg" >
                        <a target="_blank" href={option.infLink}>{option.infLabel}</a>
                    </div>   
                </div>
            ))}                         
        </div>   
    );
}

export default Inform;