import React, { useState } from "react";
import Image from "next/image";

import imgCard from '../assets/images/001.jpg';

interface options {
  carId: number;
  carTitle: string;
  carTexto?: string;
  carLink?: string;
  carImage: string;
}

const Cards = ({options}:{[key:string]:any}) => {
    return (
        <div className="p-2 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2">  
        {options.map((option:any) => (
            <a key={option.carId} href={option.carLink}>            
            <div className="rounded overflow-hidden shadow-lg mb-5" > 
                <div className="w-full">               
                    <Image src={require(`../assets/images/${option.carImage}.jpg`)} alt="" /> 
                </div>
                <div className="flex flex-col items-start px-2 py-4">
                    <div className="font-bold text-xl mb-2">
                        {option.carTitle}
                    </div>
                    <p className="text-gray-700 text-base">
                        {option.carTexto}
                    </p>
                </div>                          
            </div>
            </a>                           
        ))}
        </div>   
    );
}

export default Cards;