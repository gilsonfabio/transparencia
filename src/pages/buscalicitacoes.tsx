import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';

import api from '../pages/api/api';


export default function Licitacoes() {
  const [modalidades, setModalidades] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [titulo, setTitulo] = useState('');

  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [faqs, setFaqs] = useState([]);

  const itemsSubmenu = [
    {
        menId: '1',
        menTitle: 'Busca Licitações',
    },
  ] 

  useEffect(() => {
    api.get("https://webio.aparecida.go.gov.br/api/lict/licitacoes/modalidade/3")
    .then(res => {
        setModalidades(res.data)
        setTitulo(res.data[0].nome)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });    

  }, []);

  return (
    <div className=" ">
      <Menubar />
      <Submenu options = {itemsSubmenu} /> 
      <div className='bg-gray-200 h-10'>
      </div>  
      <div className='flex flex-row ml-3 mr-3 md:ml-20 md:mr-20 mt-3 h-full'>     
        <div className='flex justify-between w-128 h-full bg-white'>
          <div className="w-80 absolute bg-gray-300 mt-5">
            FILTROS
          </div>
        </div>
        <div className='w-full h-full bg-white overflow-auto'>
          <div className='p-2 mb-3 border-b-2 border-gray-200'>
            <span className='text-3xl font-bold '>{titulo}</span>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2 p-2">
            {modalidades.map((item:any) => (
            <div key={item.id} className="bg-gray-200 rounded overflow-hidden shadow-lg mb-2" > 
              <div className="flex flex-row items-start justify-between px-2 py-2">
                <div className="flex flex-col items-start px-2 py-1">
                  <span className='text-[12px] font-bold'>Abertura</span>
                  <div className="text-[12px] mb-0">20/02/2022</div>
                </div>
                <div className="flex flex-col items-start px-2 py-1">
                  <span className='text-[12px] font-bold'>Nº Processo</span>
                  <div className="text-[12px] mb-0">2022.000.165</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between px-2">
                <div className="flex flex-col items-start px-2 ">
                  <span className='text-[12px] font-bold'>Situação</span>
                  <div className="text-[12px] mb-0">EM ANDAMENTO</div>
                </div>
                <div className="flex flex-col items-start px-2 ">
                  <span className='text-[12px] font-bold'>Valor Estimado</span>
                  <div className="text-[12px] mb-0">R$ 5.900.000,00</div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between px-2">
                <div className="flex flex-col items-start px-2 py-2">
                  <span className='text-[12px] font-bold'>Licitação</span>
                  <div className="text-[12px] mb-0">PREGÃO Nº 165/2021 (ELETRÔNICO)</div>
                </div>                
              </div>
              <div className="flex flex-row items-start justify-between px-2 ">
                <div className="flex flex-col items-start px-2 py-2">
                  <span className='text-[12px] font-bold'>Objeto</span>
                  <div className="text-[12px] mb-0">Aquisição de armamento para a Guarda Civil de Aparecida de Goiânia/GO, conforme condições e especificações estabelecidas...</div>
                </div>                
              </div>                            
            </div>                  
            ))}          
          </div>
   

        </div>               
      </div>                      
      <div className='mt-3'>   
        <Footer /> 
      </div>        
    </div>
  )
}

