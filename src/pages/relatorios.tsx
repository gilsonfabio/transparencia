import React, { useEffect, useState } from 'react';
import Accord from '../components/Accord';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';

import api from './api/api';

export default function ItemsFaqs() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [faqs, setFaqs] = useState([]);

  const itemsSubmenu = [
    {
        menId: '1',
        menTitle: 'Relatórios',
        breadcrumbs:[
          {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
        ]
    },
  ] 

  return (
    <div className="" >
      <Menubar />
      <Submenu options = {itemsSubmenu} />  
      <div className='bg-gray-200 h-10'>
                  
      </div>     
      <div className='h-80 mt-3 md:ml-24 md:mr-24'> 
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-4 ">
            <div className='w-full h-full p-3'>
                <a href='/execucaoorcamentaria' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-lg justify-center items-center ">Execução Orçamentária</span>
                    </div>                      
                </a>
            </div>
            <div className='w-full h-full p-3'>
                <a href='/gestaofiscal' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-lg justify-center items-center ">Gestão Fiscal</span>
                    </div>                      
                </a>
            </div>
                       
        </div>
      </div>
      <div className='mt-10 md:mt-3'>   
        <Footer /> 
      </div>        
    </div>
  )
} 

