import React, { useEffect, useState } from 'react';
import CardsConselho from '../components/CardsConselho';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';

import api from './api/api';

export default function Composicao() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [faqs, setFaqs] = useState([]);
  
  const itemsSubmenu = [
    {
        menId: '1',
        menTitle: 'Composição',
        breadcrumbs:[
          {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
          {descricao: "Conselho Municipal", link: "/conselhomunicipal"},
        ]
    },
  ] 
   
  const [download, setDownload] = useState(' ');
  const [atualiza, setAtualiza] = useState(0);
  const [count, setCount] = useState(0);
  
  return (
    <div className="" >
      <Menubar />
      <Submenu options = {itemsSubmenu} /> 
      <div className='bg-gray-200 h-10'>
             
      </div>  
      <div className='ml-3 mr-3 md:ml-24 md:mr-24 mt-3'>     
        <CardsConselho />
      </div>
      <div className='mt-3'>   
        <Footer /> 
      </div>        
    </div>
  )
} 