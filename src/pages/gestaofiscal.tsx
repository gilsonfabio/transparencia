import React, { useEffect, useState } from 'react';
import Menubar from '../components/Menubar';
import Pagination from '../components/Pagination';
import { GetServerSideProps } from 'next';
import PaginationSelect from '../components/PaginationSelection';
import Submenu from '../components/Submenu';
import { filtros } from '../services/filtros';
import moment from 'moment';
import DatePicker from "react-datepicker";
import axios from 'axios';
import qs from 'qs';

import "react-datepicker/dist/react-datepicker.css";

import api from './api/api';

import { useRouter } from "next/router";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

interface filtros {
    "tipo" ?: Array<number>;
    "fornecedor" ?: Array<number>;
    "entidade" ?: Array<number>;
    "inicio" ?: string;
    "fim" ?: string;
    "searchString" ?: string;
    "page" ?: number;
    "per_page" ?: number;
}

interface propsAno {
    arrayAno: number;
}

interface tiposProps {
    id: number;
    nome: string;
    registros: number;
}

interface FornecedorProps {
    id: number;
    nome: string;
    registros: number;
}

interface EntidadeProps {
    id: number;
    nome: string;
    registros: number;
}

interface dateProps {
    datZero: Date;
}

interface tipProps {
    tipmodalidade: string;
}

interface apiProps {
    categorias: any;
}

export default function GestãoFiscal({categorias}: apiProps) {
    const [atualiza, setAtualiza] = useState(0);
    const [itens, setItens] = useState([]);


    const testeJson:filtros = {
        tipo: [],
        fornecedor: [],
        entidade: [],
        inicio: "",
        fim: "",
        searchString: "",
        page: 1,
        per_page: 12
    }    

    const router = useRouter();
    const [titulo, setTitulo] = useState('');
    
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [pages, setPages] = useState(0);

    const perPageDefault = 12;
    const [newpage, setNewPage] = useState(0);

    const itemsSubmenu = [
        {
            menId: '1',
            menTitle: 'Relatório de Gestão Fiscal',
            breadcrumbs:[
              {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
              {descricao: "Relatórios", link: "/relatorios"},
            ]
        },
    ] 
         
    return (
        <div className=" ">
            <Menubar />
            <Submenu options = {itemsSubmenu} /> 
            <div className='h-10 bg-gray-300'>
            </div>  
            <div className='flex flex-row ml-3 mr-3 md:ml-20 md:mr-20 mt-3 h-full '>     
                
                <div className='w-full h-full bg-white dark:bg-gray-900 overflow-auto'>                                        
                    <div className='p-2 mb-3 border-b-2 border-gray-200 '>
                        <span className='text-3xl font-bold '>{titulo}</span>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full text-black p-2 bg-[#F3F3F3] dark:bg-gray-800'> 
                        <div className='w-full h-auto mr-2 dark:bg-[#F3F3F3] '> 
                        <div>                            
                        <div className='flex flex-col w-full h-full text-black'>
                            <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 ml-1 px-0 py-0 ">            
                            {categorias.map((item:any ) => {
                                return <Link key={item.ano} href='#'>
                                    <div className="bg-[#d7dddc]/50 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#d7dddc]" > 
                                        <div className="flex flex-row items-start justify-between px-2">
                                            <div className="flex flex-col items-start px-2 py-1 ">
                                                <span className='text-[12px] font-bold'>Ano</span>
                                                <div className="text-[12px] mb-0">{item.ano}</div>
                                            </div>
                                        </div>
                                        {item && 
                                            item.tipos.map((row:any) => (
                                            <div className="flex flex-row items-start justify-between px-2 py-0 ">
                                                <div className="flex flex-col items-start px-2 py-1">
                                                    <a href="" className='text-green-500 text-[12px] font-bold'>{row.name}</a>
                                                    <div className="text-[12px] mb-0"></div>
                                                </div>
                                            </div>                    
                                        ))}                                                           
                                    </div>                            
                                </Link>                  
                            })}
                            </div>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full text-black p-2 bg-gray-300 border-t-2 border-gray-200 '> 
                            <div className='w-64 h-auto mr-5 md:w-80 md:mr-10 '> 
                                
                            </div>
                            <div className='flex flex-row w-auto text-black p-2 bg-gray-300'>
                                <Pagination pages={pages} setCurrentPage={setCurrentPage} setNewPage={setNewPage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );    
}

export const getServerSideProps: GetServerSideProps = async () => {
    let urlCategorias = "https://webio.aparecida.go.gov.br/api/tnsp/gestaoorcamentaria/navs/3";
    const resCategoria = await fetch(urlCategorias);
    const dataCategoria = await resCategoria.json()
    
    return {
       props: {
        categorias: dataCategoria,
       } 
    }
  }
