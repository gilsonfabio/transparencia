import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import 'animate.css';

import {  FaUserCircle } from 'react-icons/fa';
import {  FaCity } from 'react-icons/fa';
import {  FaUsersCog } from 'react-icons/fa';
import {  FaClipboardList } from 'react-icons/fa';
import {  FaInfoCircle } from 'react-icons/fa';
import {  FaAdjust } from 'react-icons/fa';
import {  FaChevronCircleDown } from 'react-icons/fa';
import {  FaEllipsisV } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

interface itens {
    label?: string;
    link?: string;
}

function Submenu2({options}:{[key:string]:any}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
        {options.map((item: any, index: number) => (
            <nav key={index} className="bg-Teal-600 dark:bg-gray-900 h-20 ">
                <div className="max-w-7xl mx-auto px-4 lg:px-1">
                    <div className="flex items-center justify-between mr-16 h-20">
                        <div className="text-white dark:text-Lime-300 text-md mt-0 font-bold text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
                            {item.title}
                        </div>
                        <div className="flex items-center">  
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 "> 
                                    {item.itens.map((row:any, idx:number) => (
                                        <a key={idx} href={row.link} className="text-white dark:text-white hover:text-gray-400 dark:hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium">{row.label}</a>
                                    ))}    
                                </div>
                            </div>
                        </div>                        
                        <div className="-mr-2 flex md:hidden">                    
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="mt-3 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white-200 hover:bg-gray-200 "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <div className="animate__animated animate__bounce animate__delay-2s animate__slow animate__infinite infinite">
                                        <FaChevronCircleDown className="w-5 h-5 fa-solid" />
                                    </div>                                     
                                ) : (
                                    <FaTimes className="w-5 h-5 fa-solid"/>
                                )}
                            </button>
                        </div>
                    </div>            
                </div>                
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="z-40 md:hidden" id="mobile-menu">
                            <div className="z-40 bg-transparente flex flex-col lg:origin-center lg:absolute lg:ml-5 lg:px-2 ">
                                {item.itens.map((row:any, idx:number) => (
                                    <a key={idx} href={row.link} className="bg-gray-200 text-black hover:text-gray-400 h-10 px-3 py-2 text-sm font-medium z-50">{row.label}</a>
                                ))}
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>      
        ))}  
    </div>
  );
}

export default Submenu2;