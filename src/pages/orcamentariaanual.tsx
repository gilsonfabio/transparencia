import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';
import axios from 'axios';

interface apiProps {
    "contadores": any;
}

export default function OrcamentariaAnual() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [planos, setPlanos] = useState([]);
  const [years, setYears] = useState([]);

  const options = [
    {id:1, label:'TODOS', link:'TODOS'},
    {id:2, label:'2021', link:'2021'},
    {id:3, label:'2020', link:'2020'}, 
    {id:4, label:'2019', link:'2019'},
    {id:5, label:'2018', link:'2018'},
  ]

  useEffect(() => {      
    axios({
        method: 'get',    
        url: `https://webio.aparecida.go.gov.br/api/tnsp/gestaoorcamentaria/27`,
    }).then(function(response) {
        console.log(response)
        setPlanos(response.data.result)
    }).catch(function(error) {
        console.log(error)
    }) 

    axios({
        method: 'get',    
        url: `https://webio.aparecida.go.gov.br/api/tnsp/gestaoorcamentaria/anos/27`,
    }).then(function(resp) {
        console.log(resp)
        setYears(resp.data)
    }).catch(function(error) {
        console.log(error)
    })        
  }, [])

  const itemsSubmenu = [
    {
        menId: '1',
        menTitle: 'Lei Orçamentaria Anual',
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
            <div className='md:hidden'>
                Menu
            </div>
        </div>  
        <div className=' w-full h-full '>
            <div className='flex flex-row ml-3 mr-3 md:ml-20 md:mr-20 mt-3 h-auto '>     
                <div className='hidden md:flex md:justify-between md:w-128 md:h-full bg-white dark:bg-gray-900'>
                    <div className="w-80 absolute bg-gray-300 mt-5">
                        <ul className="relative">
                            {years.map((opc:any) => (
                                <li key={opc.id}className="relative">
                                    <div className="flex items-center text-md py-4 px-6 h-12 overflow-hidden border-b-2 border-white font-bold text-green-700 text-ellipsis whitespace-nowrap hover:text-green-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:cursor-pointer" >
                                        <Link href={`#`} data-mdb-ripple="true" data-mdb-ripple-color="dark" >
                                            <div className='flex flex-row justify-between w-full cursor-pointer'>  
                                                <div>{opc.ano}</div> 
                                            </div>
                                        </Link>   
                                    </div>                  
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full h-screen overflow-auto dark:bg-gray-900 '>        
                    {planos.map((opc:any) => (
                    <div key={opc.id} className="flex flex-col ml-11 p-2 mb-3 border-l-2 border-gray-300">  
                        <p className="text-[10px] md:text-lg uppercase text-green-600">{opc.ano}</p>
                        <p className="mb-3 text-black hover:cursor-pointer">{opc.nome}</p>                         
                        <Link href={`https://webio.aparecida.go.gov.br/api/tnsp/download/${opc.id}`} ><a target="_blank">
                            <div className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-2 mr-2 md:ml-0 md:mr-0 md:w-28 w-16 p-1 rounded-lg cursor-pointer text-sm font-bold">            
                                Download
                            </div>
                            </a>
                        </Link>

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