import React, {useEffect, useState } from 'react';
import Menubar from '../../components/Menubar';
import Pagination from '../../components/Pagination';
import PaginationSelect from '../../components/PaginationSelection';
import Submenu from '../../components/Submenu';
import { filtros } from '../../services/filtros';
import moment from 'moment';
import DatePicker from "react-datepicker";
import axios from 'axios';
import qs from 'qs';

import "react-datepicker/dist/react-datepicker.css";

import api from '../../pages/api/api';

import { useRouter } from "next/router";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Footer from '../../components/Footer';

interface filtros {
    "modalidade" ?: Array<number>;
    "situacao" ?: Array<number>;
    "entidade" ?: Array<number>;
    "srp" ?: number;
    "ano" ?: number;
    "inicio" ?: string;
    "fim" ?: string;
    "searchString" ?: string;
    "page" ?: number;
    "per_page" ?: number;
}

interface propsAno {
    arrayAno: number;
}

interface Modalidade {
    id: number;
    nome: string;
    registros: number;
}

interface SituacaoProps {
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

export default function LicitacoesList() {
    const [atualiza, setAtualiza] = useState(0);
    const [itens, setItens] = useState([]);
    
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [pages, setPages] = useState(0);

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
        modalidade: [],
        situacao: [],
        entidade: [],
        srp: 0,
        ano: 0,
        inicio: "",
        fim: "",
        searchString: "",
        page: 1,
        per_page: 12
    }    

    const router = useRouter();
    const tipmodalidade = parseInt(router.query.licId);
    const [titulo, setTitulo] = useState('');

    const [itepages, setItePages] = useState(12);
      
    const [modalidades, setModalidades] = useState<Array<Modalidade>>([]);
    const [situacoes, setSituacoes] = useState<Array<SituacaoProps>>([]);
    const [entidades, setEntidades] = useState<Array<EntidadeProps>>([]);
    const [ids, setIds] = useState<Array<number>>([]);
    const [idsMod, setIdsMod] = useState<Array<number>>([tipmodalidade]);
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
        testeJson.modalidade = [...idsMod];
        delete testeJson.situacao;
        delete testeJson.entidade;
        delete testeJson.srp;
        delete testeJson.ano;
        delete testeJson.inicio
        delete testeJson.fim;
        delete testeJson.searchString;
        //delete testeJson.page;
        //delete testeJson.per_page;
        let paramsData = JSON.stringify(testeJson);  
        axios({
            method: 'post',    
            url: `https://webio.aparecida.go.gov.br/api/lict/v1/filtrar/licitacoes`,
            data: qs.stringify(testeJson),
        }).then(function(response) {
            setItens(response.data.items)
            setPages(response.data.paginate.lastPage);
        }).catch(function(error) {
            console.log(error)
        })
        
        api.get("https://webio.aparecida.go.gov.br/api/lict/modalidades/contador")
            .then(res => {
            setModalidades(res.data)   
            const selectedId = parseInt(tipmodalidade);
            if (ids.includes(selectedId)) {
                const newIds = ids.filter((id:any) => id !== selectedId);
                setIds(newIds);
                setIdsMod(newIds);
            }else {
                const newIds = [...ids];
                newIds.push(selectedId);
                setIds(newIds);
                setIdsMod(newIds);
            }
        }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });  
             
        api.get("https://webio.aparecida.go.gov.br/api/lict/status")
            .then(res => {
            setSituacoes(res.data)   
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
    
        arrayYear.length = 0;
        for(var i=0; i < 13; i++) {
            arrayYear.push(anoAtual)
            anoAtual = anoAtual - 1;
        }
        setAtualiza(1);
    }, [])
    
    const [filModalidades, setFilModalidades] = useState([router.query.licId]);   
    const [filSituacoes, setFilSituacoes] = useState([router.query.licId]);    
    
    useEffect(() => {      
        if(atualiza === 1) {
            if (idsMod.length > 0 ) {
                testeJson.modalidade = [...idsMod]
            }else {
                delete testeJson.modalidade;
            }
            if (idsSit.length > 0 ) {
                testeJson.situacao = [...idsSit]
            }else {
                delete testeJson.situacao;
            }
            if (idsEnt.length > 0 ) {
                testeJson.entidade = [...idsEnt]
            }else {
                delete testeJson.entidade;
            }
            if (regprecos != "" ) {
                testeJson.srp = parseInt(regprecos)
            }else {
                delete testeJson.srp;
            }
            if (regYear != 0 ) {
                testeJson.ano = regYear
            }else {
                delete testeJson.ano;
            }
            if (startDate !== null && endDate !== null ) {
                testeJson.inicio = moment(startDate).format("YYYY-MM-DD")
                testeJson.fim = moment(endDate).format("YYYY-MM-DD");
            }else {
                delete testeJson.inicio
                delete testeJson.fim;
            }
            if (search !== "") {
                testeJson.searchString = search;
            }else {
                delete testeJson.searchString;                
            }
            let paramsData = JSON.stringify(testeJson);

            setCurrentPage(1);
            delete testeJson.page;
            testeJson.page = currentPage;
            delete testeJson.per_page;
            testeJson.per_page = perPageDefault;

            console.log('Página:', currentPage);

            axios({
                method: 'post',    
                url: `https://webio.aparecida.go.gov.br/api/lict/v1/filtrar/licitacoes`,
                data: qs.stringify(testeJson),
            }).then(function(response) {
                setItens(response.data.items)
                setPages(response.data.paginate.lastPage);
            }).catch(function(error) {
                console.log(error)
            })              
        }    
    }, [ idsMod, idsSit, idsEnt, regprecos, regYear, startDate, endDate, search])

    useEffect(() => {      
        if(newpage === 1) {
            if (idsMod.length > 0 ) {
                testeJson.modalidade = [...idsMod]
            }else {
                delete testeJson.modalidade;
            }
            if (idsSit.length > 0 ) {
                testeJson.situacao = [...idsSit]
            }else {
                delete testeJson.situacao;
            }
            if (idsEnt.length > 0 ) {
                testeJson.entidade = [...idsEnt]
            }else {
                delete testeJson.entidade;
            }
            if (regprecos != "" ) {
                testeJson.srp = parseInt(regprecos)
            }else {
                delete testeJson.srp;
            }
            if (regYear != 0 ) {
                testeJson.ano = regYear
            }else {
                delete testeJson.ano;
            }
            if (startDate !== null && endDate !== null ) {
                testeJson.inicio = moment(startDate).format("YYYY-MM-DD")
                testeJson.fim = moment(endDate).format("YYYY-MM-DD");
            }else {
                delete testeJson.inicio
                delete testeJson.fim;
            }
            if (search !== "") {
                testeJson.searchString = search;
            }else {
                delete testeJson.searchString;                
            }
            delete testeJson.page;
            testeJson.page = currentPage;
            delete testeJson.per_page;
            testeJson.per_page = perPageDefault;

            console.log(testeJson);

            axios({
                method: 'post',    
                url: `https://webio.aparecida.go.gov.br/api/lict/v1/filtrar/licitacoes`,
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
            menTitle: 'Busca Licitações',
            breadcrumbs:[
              {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
              {descricao: "Licitações", link: "/licitacoes"},
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
     
    const selectRegPrecos = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRegprecos(event.target.value);
      setAtualiza(1);
    }

    const itemsYear = [
        {anoId: 1, anoTitle: 2022},
        {anoId: 2, anoTitle: 2021},
        {anoId: 3, anoTitle: 2020},
        {anoId: 4, anoTitle: 2019},
        {anoId: 5, anoTitle: 2018},
        {anoId: 6, anoTitle: 2017},
        {anoId: 7, anoTitle: 2016},
        {anoId: 8, anoTitle: 2015},
        {anoId: 9, anoTitle: 2014},
        {anoId: 10, anoTitle: 2013},
    ]

    const arrayYear = [0];    
    const selectRegYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);
        setRegYear(selectedId);
        setAtualiza(1);
    }

    function handleSearch() {
        setAtualiza(1);
    }

    return (
        <div className=" ">
            <Menubar />
            <Submenu options = {itemsSubmenu} /> 
            <div className='h-10 bg-gray-300'>
            </div>  
            <div className='flex flex-row ml-3 mr-3 md:ml-20 md:mr-20 mt-3 h-auto '>     
                <div className='hidden md:flex md:justify-between md:w-128 md:h-full md:py-0 '>
                    <div className="w-80 p-2 bg-[#F3F3F3] dark:bg-gray-900 mt-0 h-full">
                        FILTROS
                        <div className='w-72 mt-0 mb-3'>
                            <div>
                                <li className={`accordion_item ${clicked ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleToggle}>
                                        Modalidades
                                        <span className="control">{clicked ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clicked ? "active h-auto p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400" : "hidden"}`}> 
                                        <div className={`answer ${clicked ? "active" : "hidden"}` }>
                                            <div className="h-auto">
                                                {modalidades.map((item) => (
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
                                        Situações
                                        <span className="control">{clickedSit ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clickedSit ? "active h-auto p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400" : "hidden"}`}> 
                                        <div className={`answer ${clickedSit ? "active" : "hidden"}` }>
                                            <div className="h-auto">           
                                                {situacoes.map((item) => (
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
                                        Orgão Contratante
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
                            <div>
                                <li className={`accordion_item ${clickedReg ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleToggleReg}>
                                        Registro de Preços
                                        <span className="control">{clickedReg ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clickedReg ? "active h-auto p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400" : "hidden"}`}> 
                                    <div className={`answer ${clickedReg ? "active" : "hidden"}` }>
                                        <div className="h-auto">
                                            <div className="flex justify-between ">
                                                <div>
                                                    <div className="flex fle-row justify-between w-full form-check py-1">
                                                        <label className="form-check-label inline-block text-[12px] font-bold w-64">
                                                            TODOS
                                                        </label>
                                                        <input 
                                                            className="
                                                            form-check-input 
                                                            appearance-none 
                                                            rounded-full 
                                                            h-4 
                                                            w-4 
                                                            border 
                                                            border-gray-300 
                                                            bg-white 
                                                            checked:bg-blue-600 
                                                            checked:border-blue-600 
                                                            focus:outline-none 
                                                            transition 
                                                            duration-200 
                                                            align-top 
                                                            bg-no-repeat 
                                                            bg-center 
                                                            bg-contain 
                                                            float-left 
                                                            mr-2 
                                                            cursor-pointer" 
                                                            type="radio" 
                                                            name="flexRadioDefault" 
                                                            id="flexRadioDefault1" 
                                                            value=""
                                                            onChange={selectRegPrecos} 
                                                        />  
                                                    </div>
                                                    <div className="flex fle-row justify-between w-full form-check py-1">
                                                        <label className="form-check-label inline-block text-gray-800 dark:text-gray-100 text-[12px] font-bold " >
                                                            SIM
                                                        </label>
                                                        <input 
                                                            className="
                                                            form-check-input 
                                                            appearance-none 
                                                            rounded-full 
                                                            h-4 
                                                            w-4 
                                                            border 
                                                            border-gray-300 
                                                            bg-white 
                                                            checked:bg-blue-600 
                                                            checked:border-blue-600 
                                                            focus:outline-none 
                                                            transition 
                                                            duration-200 
                                                            align-top 
                                                            bg-no-repeat 
                                                            bg-center 
                                                            bg-contain 
                                                            float-left 
                                                            mr-2 
                                                            cursor-pointer" 
                                                            type="radio" 
                                                            name="flexRadioDefault" 
                                                            id="flexRadioDefault2" 
                                                            value="1"
                                                            onChange={selectRegPrecos} />
                                                        </div>
                                                        <div className="flex fle-row justify-between w-full form-check py-1">
                                                            <label className="form-check-label inline-block text-gray-800 dark:text-gray-100 text-[12px] font-bold " >
                                                                NÃO
                                                            </label>
                                                            <input 
                                                            className="
                                                            form-check-input 
                                                            appearance-none 
                                                            rounded-full 
                                                            h-4 
                                                            w-4 
                                                            border 
                                                            border-gray-300 
                                                            bg-white 
                                                            checked:bg-blue-600 
                                                            checked:border-blue-600 
                                                            focus:outline-none 
                                                            transition 
                                                            duration-200 
                                                            align-top 
                                                            bg-no-repeat 
                                                            bg-center 
                                                            bg-contain 
                                                            float-left 
                                                            mr-2 
                                                            cursor-pointer" 
                                                            type="radio" 
                                                            name="flexRadioDefault" 
                                                            id="flexRadioDefault2" 
                                                            value="0"
                                                            onChange={selectRegPrecos} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </li>      
                            </div>
                        </div>
                        <div className='w-72 mt-0 mb-3'>
                            <div>
                                <li className={`accordion_item ${clickedYear ? "active mb-2" : ""} list-none`}>
                                    <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-6 shadow-lg" onClick={handleToggleYear}>
                                        Ano
                                        <span className="control">{clickedYear ? "—" : "+"} </span>
                                    </button>
                                    <div className={`answer_wrapper ${clickedYear ? "active h-auto p-2 mb-5 bg-gray-200 dark:bg-gray-800 border-l-2 border-gray-400" : "hidden"}`}> 
                                        <div className={`answer ${clickedYear ? "active" : "hidden"}` }>
                                            <div className="h-auto">
                                                <div className="flex justify-between ">
                                                    <div>
                                                        {itemsYear.map((ano, idx) => (
                                                            <div key={idx} className="flex fle-row justify-between w-full form-check py-1">
                                                                <label className="form-check-label inline-block text-[12px] dark:text-gray-100 font-bold w-64">
                                                                    {ano.anoTitle}
                                                                </label>
                                                                <input 
                                                                    className="
                                                                    form-check-input 
                                                                    appearance-none 
                                                                    rounded-full 
                                                                    h-4 
                                                                    w-4 
                                                                    border 
                                                                    border-gray-300 
                                                                    bg-white 
                                                                    checked:bg-blue-600 
                                                                    checked:border-blue-600 
                                                                    focus:outline-none 
                                                                    transition 
                                                                    duration-200 
                                                                    align-top 
                                                                    bg-no-repeat 
                                                                    bg-center 
                                                                    bg-contain 
                                                                    float-left 
                                                                    mr-2 
                                                                    cursor-pointer" 
                                                                    type="radio" 
                                                                    name="flexRadioDefault" 
                                                                    id="flexRadioDefault1" 
                                                                    value={ano.anoTitle}
                                                                    onChange={selectRegYear} 
                                                                />  
                                                            </div>
                                                        ))}  
                                                    </div>
                                                </div>
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
                    <div className='w-full bg-[#F3F3F3] dark:bg-gray-800 flex flex-col justify-start px-1 py-1'>
                        <div className="grid grid-cols-1 gap-1 md:grid-cols-5 md:gap-1 ">

                            <div className='flex flex-row justify-start items-center'>
                                <button className='w-4 h-4 bg-[#008C3D]/50 ml-1 mb-1 rounded'></button>
                                <span className='ml-1 text-[14px] md:text-[10px]'>Em Andamento / Adiado</span>
                            </div> 
                            <div className='flex flex-row justify-start items-center '>
                                <button className='w-4 h-4 bg-[#FFF402]/60 ml-1 mb-1 rounded'></button>
                                <span className='ml-1 text-[14px] md:text-[10px]'>Em Julgamento</span>
                            </div>
                            <div className='flex flex-row justify-start items-center '>
                                <button className='w-4 h-4 bg-[#FF0000]/40 ml-1 mb-1 rounded'></button>
                                <span className='ml-1 text-[14px] md:text-[10px]'>Anulado / Cancelado</span>
                            </div>
                            <div className='flex flex-row justify-start items-center '>
                                <button className='w-4 h-4 bg-[#0094FF]/50 ml-1 mb-1 rounded'></button>
                                <span className='ml-1 text-[14px] md:text-[10px]'>Homologado / Encerrado</span>
                            </div>
                            <div className='flex flex-row justify-start items-center '>
                                <button className='w-4 h-4 bg-[#7000FF]/50 ml-1 mb-1 rounded'></button>
                                <span className='ml-1 text-[14px] md:text-[10px]'>Suspenso / Deserto / Fracassado</span>
                            </div>                            
                                    
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
                                return <Link key={idx} href={`/licdetalhes/${item.id}`}>
                                    <a className={item.status === 'EM ANDAMENTO' || item.status === 'ADIADO' ? "bg-[#008C3D]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#008C3D]/40" :   
                                                  item.status === 'EM JULGAMENTO' ? "bg-[#FFF402]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#FFF402]/40" :
                                                  item.status === 'ANULADO' || item.status === 'CANCELADO' ? "bg-[#FF0000]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#FF0000]/40" : 
                                                  item.status === 'HOMOLOGADO' || item.status === 'ENCERRADO' ? "bg-[#0094FF]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#0094FF]/40" : 
                                                  item.status === 'SUSPENSO' || item.status === 'DESERTO' || item.status === 'FRACASSADO' ? "bg-[#7000FF]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#7000FF]/40" : 
                                                  "bg-[#d7dddc]/20 rounded overflow-hidden shadow-lg mb-1 hover:bg-[#d7dddc]/40" } > 
                                <div className="flex flex-row items-start justify-between px-2">
                                  <div className="flex flex-col items-start px-2 py-1 ">
                                    <span className='text-[12px] font-bold'>Orgão</span>
                                    <div className="text-[12px] mb-0">{item.entidade}</div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between px-2 py-0 ">
                                  <div className="flex flex-col items-start px-2 py-1">
                                    <span className='text-[12px] font-bold'>Abertura</span>
                                    <div className="text-[12px] mb-0">{item.data_abertura}</div>
                                  </div>
                                  <div className="flex flex-col items-start px-2 py-1">
                                    <span className='text-[12px] font-bold'>Nº Processo</span>
                                    <div className="text-[12px] mb-0">{item.processo_prodata}</div>
                                  </div>
                                </div>                                
                                <div className="flex flex-row items-start justify-between px-2">
                                  <div className="flex flex-col items-start px-2 ">
                                    <span className='text-[12px] font-bold'>Situação</span>
                                    <div className="text-[12px] mb-0">{item.status}</div>
                                  </div>
                                  <div className="flex flex-col items-start px-2 ">
                                    <span className='text-[12px] font-bold'>Valor Estimado</span>
                                    <div className="text-[12px] mb-0">{item.valor_estimado}</div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-start justify-between px-2">
                                  <div className="flex flex-col items-start px-2 py-1">
                                    <span className='text-[12px] font-bold'>Licitação</span>
                                    <div className="text-[12px] mb-0">{item.titulo}</div>
                                  </div>                
                                </div>
                                <div className="flex flex-row items-start justify-between px-2 ">
                                  <div className="flex flex-col items-start px-2 py-2">
                                    <span className='text-[12px] font-bold'>Objeto</span>
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
        <div className='mt-3'>   
            <Footer /> 
        </div>        
     </div>
    );
}