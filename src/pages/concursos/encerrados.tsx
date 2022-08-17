import React, {useEffect, useState} from "react";
import axios from 'axios';
import { FaBars } from 'react-icons/fa';

import api from '../api/api';
import Dropdown from "../../components/DropDown";
import { ReadableStreamBYOBReader } from "stream/web";

interface concurso {
  id:number;
  nome:string;
  data:string;
  publicacao_id:number;
  concurso:string;
}


export const Encerrados = () => {
  const [concursos, setConcursos] = useState([]);
  const [openTab, setOpenTab] = React.useState(1);
  const [showOptions, setShowOptions] = useState(false);
  const [year, setYear] = useState('TODOS');

  const handleClick = () => {
      setShowOptions(!showOptions);      
  };

  const options = [
    {id:1, label:'TODOS', link:'TODOS'},
    {id:2, label:'2021', link:'2021'},
    {id:3, label:'2020', link:'2020'}, 
    {id:4, label:'2019', link:'2019'},
    {id:5, label:'2018', link:'2018'},
  ]

  useEffect(() => {
    api.get("https://webio.aparecida.go.gov.br/api/conc/publicacoes/ultimaspostagens")
    .then(response => {
        setConcursos(response.data)
        console.log(response.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  useEffect(() => {
    api.get("https://transparencia.aparecida.go.gov.br/portal-transparencia/assets/json/concursos.json")
    .then(response => {
        setConcursos(response.data)
        console.log(response.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
  }, [year]); 

  return (
    <>
        <div className="flex flex-row bg-gray-200 h-10 items-center p-2">
            <div className="md:ml-14 md:mr-5 dark:text-black font-bold ">
                Escolha o ano desejado
            </div>
            <div>
                <button onClick={handleClick} id="dropdownButton" data-dropdown-toggle="dropdown" type="button"
                    className="z-5 hover:text-gray-600 font-medium rounded-lg text-black text-sm px-2 py-2 text-center inline-flex items-center"> 
                    <FaBars className="w-4 h-4"/>
                </button>
                {showOptions && (
                    <div className="z-10 origin-top-left absolute left-1 md:origin-top-right md:absolute md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black dark:ring-white ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            {options && 
                                options.map((option: any) => (
                                    <button key={option.id} onClick={(e) => {setYear(option.link)}} 
                                        className="text-gray-700 dark:text-white block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:text-black" 
                                        role="menuitem" 
                                        id="menu-item-0"
                                        tabIndex={option.id}
                                    >
                                        {option.label}
                                    </button>  
                                ))
                            }
                        </div>
                    </div>
                )}
            </div>
            <div className="ml-11 dark:text-black font-bold">
                {year}
            </div>
        </div>
        {concursos.map((con:any) => (
            <div key={con.id} className="flex flex-row mb-1 p-1 md:mb-3 md:p-3" >
                <div className="flex flex-col p-0 ml-1 w-14 md:p-2 md:ml-11 md:w-64 items-center justify-center">
                    <p className="text-[10px] md:text-lg uppercase text-green-600">publicado em</p>
                    <p className="text-[10px] md:text-lg text-green-600">{Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(con.data))}</p>
                </div>
                <div className="flex flex-col ml-11 p-2 mb-3 border-l-2 border-gray-300">  
                    <a href="#" className="mb-3 text-green-600 hover:cursor-pointer">{con.nome}</a>
                    <p className="mb-3 ">{con.concurso}</p>
                </div>
            </div>   
        ))} 
    </>
  );
};