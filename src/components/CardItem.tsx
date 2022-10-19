import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';
 

const CardItem = ({org}:{[key:string]:any}) => {

  return (
    <li className="">
        <div className="bg-[#d7dddc]/50 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#d7dddc]" > 
            <div className="flex flex-row items-start justify-between px-2">
                <div className="flex flex-col items-start px-2 py-1 ">
                    <span className='text-[12px] font-bold'>Orgão:</span>
                    <div className="text-[15px] mb-0 font-bold text-green-600">{org.orgao}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>1º Titular</span>
                    <div className="text-[12px] mb-0">{org.titular1}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>Suplente</span>
                    <div className="text-[12px] mb-0">{org.suplente1}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>2º Titular</span>
                    <div className="text-[12px] mb-0">{org.titular2}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>Suplente</span>
                    <div className="text-[12px] mb-0">{org.suplente2}</div>
                </div>
            </div>
        </div>
    </li>
  );
};

export default CardItem;