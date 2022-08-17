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
        menTitle: 'Faqs',
        breadcrumbs:[
          {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
        ]
    },
  ] 

  const [download, setDownload] = useState(' ');
  const [atualiza, setAtualiza] = useState(0);
  const [count, setCount] = useState(0);
 
  function handleFileTxt() {     
    api.get("/downloadTxt")
    .then(res => {
      console.log('Download concluido!')
    }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });        
  }

  return (
    <div className="" >
      <Menubar />
      <Submenu options = {itemsSubmenu} /> 
      <div className='bg-gray-200 h-10'>
        <button onClick={handleFileTxt} className='hidden w-36 bg-blue-500 text-white p-2 ml-20 hover:bg-blue-300 hover:text-black'>
          Menu 
        </button>        
      </div>  
      <div className='ml-3 mr-3 md:ml-24 md:mr-24 mt-3'>     
        <Accord />
      </div>
      <div className='mt-3'>   
        <Footer /> 
      </div>        
    </div>
  )
} 

//<a href="/downloadVdas" className='w-36 bg-blue-500 text-white p-2 ml-20 hover:bg-blue-300 hover:text-black'>
