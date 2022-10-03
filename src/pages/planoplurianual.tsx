import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';
import axios from 'axios';
import qs from 'qs';

interface filtros {
    "ano" ?: number;
}

interface apiProps {
    "contadores": any;
}

interface YearsProps {
    "id": number;
    "nome": string;
    "data": string;
    "ano": number;
    "idPeriodo": number;
    "periodo": string;
}

export default function PlanoPluriAnual() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [planos, setPlanos] = useState([]);
  const [years, setYears] = useState([]);
  const [idYear, setIdYear] = useState(0);

  const options = [
    {id:1, label:'TODOS', link:'TODOS'},
    {id:2, label:'2021', link:'2021'},
    {id:3, label:'2020', link:'2020'}, 
    {id:4, label:'2019', link:'2019'},
    {id:5, label:'2018', link:'2018'},
  ]

  const testeJson:filtros = {
    ano: 0,
  }

  /*
   {
    "id": 2337,
    "nome": "Plano Plurianual para o quadriênio 2018-2021 - Lei Municipal nº 3.385/2017",
    "data": "2017-10-04",
    "ano": 2018,
    "idPeriodo": 24,
    "periodo": "PPA"
    },
  */

    useEffect(() => {      
        delete testeJson.ano;
        axios({
            method: 'post',    
            url: `https://webio.aparecida.go.gov.br/api/tnsp/gestao/23`,
            data: qs.stringify(testeJson),
        }).then(function(response) {
            setPlanos(response.data.items)
        }).catch(function(error) {
            console.log(error)
        })

        axios({
            method: 'get',    
            url: `https://webio.aparecida.go.gov.br/api/tnsp/gestaoorcamentaria/anos/23`,
        }).then(function(resp) {
            console.log(resp.data)
            setYears(resp.data)
        }).catch(function(error) {
            console.log(error)
        })        
        
    }, [])

    
    const itemsSubmenu = [
        {
            menId: '1',
            menTitle: 'Plano Plurianual',
            breadcrumbs:[
                {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
            ]
        },
    ]  

    useEffect(() => {      
        if (idYear != 0 ) {
            testeJson.ano = idYear
        }else {
            delete testeJson.ano;
        }
        axios({
            method: 'post',    
            url: `https://webio.aparecida.go.gov.br/api/tnsp/gestao/23`,
            data: qs.stringify(testeJson),
        }).then(function(response) {
            setPlanos(response.data.items)
        }).catch(function(error) {
            console.log(error)
        })
    }, [idYear]) 
         
    function handleYear(ano: any) {
        setIdYear(ano);
    }

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
                                <li key={opc.ano}className="relative">
                                    <div className="flex items-center text-md py-4 px-6 h-12 overflow-hidden border-b-2 border-white font-bold text-green-700 text-ellipsis whitespace-nowrap hover:text-green-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:cursor-pointer" >
                                        <button onClick={() => handleYear(opc.ano)} data-mdb-ripple="true" data-mdb-ripple-color="dark" >
                                            <div className='flex flex-row justify-between w-full cursor-pointer'>  
                                                <div>{opc.ano}</div> 
                                            </div>
                                        </button>   
                                    </div>                  
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full h-screen overflow-auto dark:bg-gray-900'>        
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
