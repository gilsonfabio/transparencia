import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link'; 

const CardIteReuniao = ({org}:{[key:string]:any}) => {

  return (
    <Link key={org} href={org.link}>
    <li className="">
        <div className="bg-[#d7dddc]/50 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#d7dddc]"> 
            <div className="flex flex-row items-start justify-between px-2">
                <div className="flex flex-col items-start px-2 py-1 ">
                    <span className='text-[12px] font-bold'>Titulo:</span>
                    <div className="text-[15px] mb-0 font-bold text-green-600">{org.titulo}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>Pauta</span>
                    <div className="text-[12px] mb-0">{org.pauta}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>Data</span>
                    <div className="text-[12px] mb-0">{org.data}</div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                <div className="flex flex-col items-start px-2 py-1">
                    <span className='text-[12px] font-bold'>Descrição</span>
                    <div className="text-[12px] mb-0">{org.docto}</div>
                </div>
            </div>            
        </div>
    </li>
    </Link>
  );
};

export default CardIteReuniao;