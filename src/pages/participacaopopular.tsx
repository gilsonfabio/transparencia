import React, { useEffect, useState } from 'react';
import CardsParPopular from '../components/CardsParPopular';
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
        menTitle: 'Participação Popular',
        breadcrumbs:[
          {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
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
        <CardsParPopular />
      </div>
      <div className='mt-3'>   
        <Footer /> 
      </div>        
    </div>
  )
} 