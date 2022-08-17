import React, { useEffect, useState } from 'react';
import Menubar from '../components/Menubar';
import Pagination from '../components/Pagination';
import PaginationSelect from '../components/PaginationSelection';
import Submenu from '../components/Submenu';
import { filtros } from '../services/filtros';
import moment from 'moment';
import DatePicker from "react-datepicker";
import axios from 'axios';
import qs from 'qs';

import "react-datepicker/dist/react-datepicker.css";

import api from '../pages/api/api';

import { useRouter } from "next/router";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

interface filtros {
    "tipo" ?: Array<number>;
    "convenente" ?: Array<number>;
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

interface TipoProps {
    id: number;
    nome: string;
    registros: number;
}

interface ConvenenteProps {
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

export default function Contratos() {
    const [atualiza, setAtualiza] = useState(0);
    const [itens, setItens] = useState([]);

    const [clicked, setClicked] = useState(false);
    const handleToggle = () => {
      setClicked((prev) => !prev);
    };

    const [clickedSit, setClickedSit] = useState(false);
    const handleToggleSit = () => {
        setClickedSit((prev) => !prev);
    };

    const [clickedEnt, setClickedEnt] = useState(false);
    const handleToggleEnt = () => {
        setClickedEnt((prev) => !prev);
    };

    const [clickedReg, setClickedReg] = useState(false);
    const handleToggleReg = () => {
        setClickedReg((prev) => !prev);
    };

    const [clickedYear, setClickedYear] = useState(false);
    const handleToggleYear = () => {
        setClickedYear((prev) => !prev);
    };

    const [clickedPer, setClickedPer] = useState(false);
    const handleTogglePeriodo = () => {
        setClickedPer((prev) => !prev);
    };

    const testeJson:filtros = {
        tipo: [],
        convenente: [],
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

    const [tipos, setTipos] = useState<Array<TipoProps>>([]);
    const [convenentes, setConvenentes] = useState<Array<ConvenenteProps>>([]);
    const [entidades, setEntidades] = useState<Array<EntidadeProps>>([]);
    const [ids, setIds] = useState<Array<number>>([]);
    const [idsMod, setIdsMod] = useState<Array<number>>([]);
    const [idsSit, setIdsSit] = useState<Array<number>>([]);
    const [idsEnt, setIdsEnt] = useState<Array<number>>([]);
    const [regprecos, setRegprecos] = useState('');
    const [regYear, setRegYear] = useState(0);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('');
    const perPageDefault = 12;
    const [newpage, setNewPage] = useState(0);

    const datZero = "";

    function handleStartDate(dat) {
        setStartDate(dat)
    }

    function handleEndDate(dat) {
        setEndDate(dat)
    }

    function handleResetDate() {
        setStartDate(null)
        setEndDate(null)
    }

    useEffect(() => {           
        delete testeJson.tipo;
        delete testeJson.convenente;
        delete testeJson.entidade;
        delete testeJson.inicio
        delete testeJson.fim;
        delete testeJson.searchString;
        axios({
            method: 'post',    
            url: `https://webio.aparecida.go.gov.br/api/lict/v1/filtrar/convenios`,
            data: qs.stringify(testeJson),
        }).then(function(response) {
            setItens(response.data.items)
            setPages(response.data.paginate.lastPage);
        }).catch(function(error) {
            console.log(error)
        })

        api.get("https://webio.aparecida.go.gov.br/api/lict/convenios/categorias")
            .then(res => {
            setTipos(res.data)             
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });  
             
        api.get("https://webio.aparecida.go.gov.br/api/lict/fornecedores")
            .then(res => {
            setConvenentes(res.data)   
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
         
        api.get("https://webio.aparecida.go.gov.br/api/lict/licitacoes/entidades")
            .then(res => {
            setEntidades(res.data)   
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

        var anoAlfa = moment(new Date()).format('YYYY');
        var anoAtual = parseInt(anoAlfa);   
    
        setAtualiza(1);  
    }, [])
    
    useEffect(() => {
        setCurrentPage(0);
    }, [itensPerPage])

    const [filModalidades, setFilModalidades] = useState([router.query.licId]);   
    const [filSituacoes, setFilSituacoes] = useState([router.query.licId]);    
    
    useEffect(() => {      

        if(atualiza === 1) {
            if (idsMod.length > 0 ) {
                testeJson.tipo = [...idsMod]
            }else {
                delete testeJson.tipo;
            }
            if (idsSit.length > 0 ) {
                testeJson.convenente = [...idsSit]
            }else {
                delete testeJson.convenente;
            }
            if (idsEnt.length > 0 ) {
                testeJson.entidade = [...idsEnt]
            }else {
                delete testeJson.entidade;
            }
            if (startDate !== null && endDate !== null ) {
                testeJson.inicio = moment(startDate).format("YYYY-MM-DD")
                testeJson.fim = moment(endDate).format("YYYY-MM-DD");
            }else {
                delete testeJson.inicio
                delete testeJson.fim;
            }
            if (search !== "" ) {
                testeJson.searchString = search;
            }else {
                delete testeJson.searchString;                
            }

            setCurrentPage(1);
            delete testeJson.page;
            testeJson.page = currentPage;
            delete testeJson.per_page;
            testeJson.per_page = perPageDefault;
            //console.log(testeJson);

            axios({
                method: 'post',    
                url: `https://webio.aparecida.go.gov.br/api/lict/v1/filtrar/convenios`,
                data: qs.stringify(testeJson),
            }).then(function(response) {
                setItens(response.data.items)
                setPages(response.data.paginate.lastPage);
            }).catch(function(error) {
                console.log(error)
            })
        }    
    }, [atualiza, idsMod, idsSit, idsEnt, startDate, endDate, search])

    useEffect(() => {      
        if(newpage === 1) {
            if (idsMod.length > 0 ) {
                testeJson.tipo = [...idsMod]
            }else {
                delete testeJson.tipo;
            }
            if (idsSit.length > 0 ) {
                testeJson.convenente = [...idsSit]
            }else {
                delete testeJson.convenente;
            }
            if (idsEnt.length > 0 ) {
                testeJson.entidade = [...idsEnt]
            }else {
                delete testeJson.entidade;
            }
            if (startDate !== null && endDate !== null ) {
                testeJson.inicio = moment(startDate).format("YYYY-MM-DD")
                testeJson.fim = moment(endDate).format("YYYY-MM-DD");
            }else {
                delete testeJson.inicio
                delete testeJson.fim;
            }
            if (search !== "" ) {
                testeJson.searchString = search;
            }else {
                delete testeJson.searchString;                
            }
            delete testeJson.page;
            testeJson.page = currentPage;
            delete testeJson.per_page;
            testeJson.per_page = perPageDefault;

            //console.log(testeJson);

            axios({
                method: 'post',    
                url: `https://webio.aparecida.go.gov.br/api/lict/v1/filtrar/convenios`,
                data: qs.stringify(testeJson),
            }).then(function(response) {
                setItens(response.data.items)
            }).catch(function(error) {
                console.log(error)
            })              
        }    
    }, [currentPage ])

    const itemsSubmenu = [
        {
            menId: '1',
            menTitle: 'Convênios',
            breadcrumbs:[
              {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
            ]
        },
    ] 

    const selectModalidade = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedId = parseInt(event.target.value);
        if (idsMod.includes(selectedId)) {
          const newIds = idsMod.filter((id:any) => id !== selectedId);
          setIds(newIds);
          setIdsMod(newIds);
          setFilModalidades(selectedId);
        } else {
          const newIds = [...idsMod];
          newIds.push(selectedId);
          setIds(newIds);      
          setIdsMod(newIds);
          setFilModalidades(selectedId);
        }
        setAtualiza(1);
    };

    const selectSituacao = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedId = parseInt(event.target.value);
        if (idsSit.includes(selectedId)) {
          const newIds = idsSit.filter((id) => id !== selectedId);
          setIds(newIds);
          setIdsSit(newIds);
        } else {
          const newIds = [...idsSit];
          newIds.push(selectedId);
          setIds(newIds);
          setIdsSit(newIds);
        }
        setAtualiza(1);
    };

    const selectEntidade = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedId = parseInt(event.target.value);
        if (idsEnt.includes(selectedId)) {
          const newIds = idsEnt.filter((id) => id !== selectedId);
          setIdsEnt(newIds);
        } else {
          const newIds = [...idsEnt];
          newIds.push(selectedId);
          setIdsEnt(newIds);
        }
        setAtualiza(1);
    };
     
    function handleSearch() {
        setAtualiza(1);
    }

    return (
        <div className=" ">
            <Menubar />
            <Submenu options = {itemsSubmenu} /> 
            <div className='h-10 bg-gray-300'>
            </div>  
            <div className='flex flex-row ml-3 mr-3 md:ml-20 md:mr-20 mt-3 h-full '>     
                <div className='hidden md:flex md:justify-between md:w-128 md:h-full md:py-0 '>
                    <div className="w-80 p-2 absolute bg-[#F3F3F3] dark:bg-gray-900 mt-0 h-full">
                        FILTROS
                        <div className='w-72 mt-0 mb-3'>
                            <div>
                                <li className={`accordion_item ${clicked ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleToggle}>
                                        Tipos de Convênio
                                        <span className="control">{clicked ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clicked ? "active h-auto p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400" : "hidden"}`}> 
                                        <div className={`answer ${clicked ? "active" : "hidden"}` }>
                                            <div className="h-auto">
                                                {tipos.map((item) => (
                                                    <div key={item.id} className='flex flex-row justify-between items-center w-64'>
                                                        <span className="text-[11px] font-bold">{item.nome}</span>
                                                        <span>
                                                            <input
                                                                className="cursor-pointer"
                                                                type="checkbox"
                                                                value={item.id}
                                                                onChange={selectModalidade}
                                                                checked={idsMod.includes(item.id) ? true : false}
                                                            />
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>  
                                        </div>
                                    </div>
                                </li>                                
                            </div>
                        </div>
                        <div className='w-72 mt-0 mb-3'>                            
                            <div>
                                <li className={`accordion_item ${clickedSit ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleToggleSit}>
                                        Convenente
                                        <span className="control">{clickedSit ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clickedSit ? "active p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 h-80 overflow-y-scroll" : "hidden"}`}> 
                                        <div className={`answer ${clickedSit ? "active" : "hidden"}` }>
                                            <div className="h-auto">           
                                                {convenentes.map((item) => (
                                                    <div key={item.id} className='flex flex-row justify-between items-center w-64'>
                                                        <span className="text-[11px] font-bold">{item.nome}</span>
                                                        <span>
                                                            <input
                                                                className="cursor-pointer"
                                                                type="checkbox"
                                                                value={item.id}
                                                                onChange={selectSituacao}
                                                                checked={ids.includes(item.id) ? true : false}
                                                            />
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>  
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className='w-72 mt-0 mb-3'>
                            <div>
                                <li className={`accordion_item ${clickedEnt ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleToggleEnt}>
                                        Secretária Responsável
                                        <span className="control">{clickedEnt ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clickedEnt ? "active p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 h-80 overflow-y-scroll" : "hidden"}`}> 
                                        <div className={`answer ${clickedEnt ? "active" : "hidden"}` }>
                                            <div className="h-auto">              
                                                {entidades.map((item) => (
                                                    <div key={item.id} className='flex flex-row justify-between items-center w-64'>
                                                        <span className="text-[11px] font-bold">{item.nome}</span>
                                                        <span>
                                                            <input
                                                                className="cursor-pointer"
                                                                type="checkbox"
                                                                value={item.id}
                                                                onChange={selectEntidade}
                                                                checked={idsEnt.includes(item.id) ? true : false}
                                                            />
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>  
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div className='w-72 mt-0 mb-3'>
                            <div className="">
                                <div className={`accordion_item ${clickedPer ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleTogglePeriodo}>
                                        Escolha periodo desejado
                                        <span className="control">{clickedPer ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clickedPer ? "active h-auto p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400" : "hidden"}`}> 
                                        <div className={`answer ${clickedPer ? "active" : "hidden"}` }>
                                            <div className="h-auto">
                                                <div>
                                                    <span>Data inicial abertura</span>
                                                </div>
                                                <div>
                                                    <DatePicker selected={startDate} onChange={handleStartDate} />
                                                </div>  
                                                <div>
                                                    <span>Data final abertura</span>
                                                </div>
                                                <div>
                                                    <DatePicker selected={endDate} onChange={handleEndDate} />
                                                </div> 
                                                <button className="button p-2 text-green-700 font-bold text-[10px] bg-gray-200 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleResetDate}>
                                                    LIMPAR PERIODO                                                   
                                                </button>
                                            </div>     
                                        </div>   
                                    </div>
                                </div>
                            </div>                            
                        </div>                        
                    </div>
                </div>
                <div className='w-full h-full bg-white dark:bg-gray-900 overflow-auto'>
                    <div className='w-full bg-[#F3F3F3] dark:bg-gray-800 flex flex-col justify-start px-1 py-1'> 
                        <div className='flex flex-row justify-start items-center'>
                            <input type="search" 
                                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" 
                                placeholder="Busca" 
                                aria-label="Search" 
                                aria-describedby="button-addon3" 
                                value={search} 
                                onChange={(e) => {setSearch(e.target.value)}} />
                            <button 
                                className="btn inline-block px-6 py-2 border-1 border-green-600 text-white font-medium text-xs leading-tight uppercase rounded-r-lg bg-green-700 hover:bg-green-400 hover:text-black transition duration-150 ease-in-out" 
                                onClick={handleSearch}
                                type="button" 
                                id="button-search">
                                <FaSearch className="w-4 h-5 rounded-r-lg"/>
                            </button>
                        </div>              
                    </div>
                    
                    <div className='p-2 mb-3 border-b-2 border-gray-200 '>
                        <span className='text-3xl font-bold '>{titulo}</span>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full text-black p-2 bg-[#F3F3F3] dark:bg-gray-800'> 
                        <div className='w-full h-auto mr-2 dark:bg-[#F3F3F3] '> 
                        <div>                            
                        <div className='flex flex-col w-full h-full text-black'>
                            <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 ml-1 px-0 py-0 ">            
                            {itens.map((item:any, idx) => {
                                return <Link key={idx} href={`/convenios/${item.id}`}>
                                    <a className="bg-[#d7dddc]/50 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#d7dddc]" > 
                                <div className="flex flex-row items-start justify-between px-2">
                                  <div className="flex flex-col items-start px-2 py-1 ">
                                    <span className='text-[12px] font-bold'>Orgão</span>
                                    <div className="text-[12px] mb-0">{item.entidade}</div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between px-2 py-0 ">
                                  <div className="flex flex-col items-start px-2 py-1">
                                    <span className='text-[12px] font-bold'>Abertura</span>
                                    <div className="text-[12px] mb-0">{item.data}</div>
                                  </div>
                                  <div className="flex flex-col items-start px-2 py-1">
                                    <span className='text-[12px] font-bold'>Nº Processo</span>
                                    <div className="text-[12px] mb-0">{item.processo}</div>
                                  </div>
                                </div>                                
                                <div className="flex flex-row items-start justify-between px-2">
                                  <div className="flex flex-col items-start px-2 ">
                                    <span className='text-[12px] font-bold'>Categoria</span>
                                    <div className="text-[12px] mb-0">{item.categoria}</div>
                                  </div>
                                  <div className="flex flex-col items-start px-2 ">
                                    <span className='text-[12px] font-bold'>Valor Estimado</span>
                                    <div className="text-[12px] mb-0">{item.valor}</div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between px-2">
                                  <div className="flex flex-col items-start px-2 py-1">
                                    <span className='text-[12px] font-bold'>Titulo</span>
                                    <div className="text-[12px] mb-0">{item.titulo}</div>
                                  </div>                
                                </div>
                                <div className="flex flex-row items-start justify-between px-2 ">
                                  <div className="flex flex-col items-start px-2 py-2">
                                    <span className='text-[12px] font-bold'>Descrição</span>
                                    <div className="text-[12px] mb-0">{item.descricao}</div>
                                  </div>                
                                </div>
                                </a>                            
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