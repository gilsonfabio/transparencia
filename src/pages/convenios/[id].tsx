import React, {useEffect, useState } from 'react';
import Menubar from '../../components/Menubar';
import Submenu from '../../components/Submenu';
import { useRouter } from "next/router";

import Footer from '../../components/Footer';
import api from '../api/api';
import Link from 'next/link';

interface ConvenioProps {
    "id": number;
    "titulo": string;
    "descricao": string;
    "categoria": string;
    "processo": string;
    "observacao": string;
    "fornecedor": string;
    "contrato_pai_id": string;
    "contrato_pai_nome": string;
    "entidade": string;
    "data": string;
    "valor": string;
    "fiscal": string;
    "data_publicacao": string;
    "arquivos": string[];
    "licitacao": string[];
    "contratos_associados": string[];
}

export default function CnvDetalhes() {
    const [convenio, setConvenio] = useState<Array<ConvenioProps>>([]);

    const router = useRouter();
    const [idCnv, setIdCnv] = useState(router.query.id);
    
    const {query: { id }, } = router

    useEffect(() => {    
    
        setIdCnv(id);
  
        let buscalUrl = `https://webio.aparecida.go.gov.br/api/lict/convenios/${idCnv}`;
        const fetchData = async () => { 
            const result = await fetch(buscalUrl)
            .then(response => response.json())
            .then(data => data)
        
            setConvenio(result.data);

            //const result = await fetch("https://webio.aparecida.go.gov.br/api/lict/filtrar/licitacoes",{
            //    method: 'POST',
            //    body: JSON.stringify(testeJsom),
            //})
        }    
        fetchData() 
    }, [])
    
    const itemsSubmenu = [
        {
            menId: '1',
            menTitle: 'Detalhes Convênio',
            breadcrumbs:[
              {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
              {descricao: "Convênios", link: "/convenios"},
            ]
        },
    ] 

    function goBack() {
        window.history.back()
    }

    return (
        <div className=" ">
            <Menubar />
            <Submenu options = {itemsSubmenu} /> 
            <div className='h-10 bg-gray-300'>
            </div>
            <div className=''>
                {convenio.map((row) => (
                <div key={row.id} className='ml-20 mr-20'>                
                    <div className='flex flex-row justify-between items-center mt-3 border-b-2 border-gray-200 py-2 mb-11'> 
                        <div className='w-full h-auto text-2xl'>
                            {row.titulo} - {row.id}
                        </div>
                        <button onClick={goBack} className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-20 md:ml-0 w-20 p-2 rounded-lg" >
                            <span className='text-sm font-bold'>Voltar</span>
                        </button>
                    </div>
                    <div className='flex flex-col w-full mb-5'>
                        <span className='text-[#008C3D] font-bold'>DESCRIÇÃO</span>
                        <span className='text-black'>{row.descricao}</span>    
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 ">
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>CONVENENTE</span>
                            <span>{row.fornecedor}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>VALOR</span>
                            <span>{row.valor}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>Nº de PROTOCOLO</span>
                            <span>{row.processo}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>DATA PUBLICAÇÃO</span>
                            <span>{row.data_publicacao}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>ORGÃO(S)CONVENIADO(S)</span>
                            <span>{row.entidade}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>DATA DO CONTRATO</span>
                            <span>{row.data}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>OBSERVAÇÃO</span>
                            <span>{row.observacao}</span>    
                        </div>                        
                    </div>
                    <div className='w-full border-b-2 border-gray-200 py-2 mt-24 mb-6'>
                        <span className='text-[#008C3D] font-bold'>ARQUIVOS</span>
                    </div>
                    {row.arquivos.map((anexos,idx) => (
                    <div key={idx} className="grid grid-cols-1 gap-1 md:grid-cols-7 md:gap-2 h-auto ">                        
                        <div className='col-span-1'>{anexos.data}</div>
                        <div className='col-span-5 text-[14px]'>{anexos.nome}</div>
                        <div className='col-span-1 className="cursor-pointer hover:bg-green-500 hover:text-white rounded-full p-2 w-9 h-9 ml-16"'>
                            <Link href={`https://webio.aparecida.go.gov.br/api/lict/download/${anexos.id}`}><a target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                </svg>
                                </a>
                            </Link>
                        </div>                      
                    </div>
                    ))}                    
                    <div className='w-full border-b-2 border-gray-200 py-2 mt-40 mb-6'>
                        <span className='text-[#008C3D] font-bold mt-20' >LICITAÇÃO</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4 h-auto ">
                        {row.licitacao.map((lic) => (
                        <div key={lic.id} className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-20 md:ml-0 w-auto p-2 rounded-lg" >
                            <Link href={`/licitacao/${lic.id}`}>
                                <a>{lic.nome}</a>
                            </Link>    
                        </div>
                        ))}
                    </div>                        
                    <div className='w-full border-b-2 border-gray-200 py-2 mt-40 mb-6'>
                        <span className='text-[#008C3D] font-bold mt-20'>CONVÊNIOS ASSOCIADOS</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4 h-auto ">
                        {row.convenios_associados.map((cnv) => (
                        <div key={cnv.id} className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-20 md:ml-0 w-auto p-2 rounded-lg" >
                            <a target="_blank" href="#">{cnv.nome}</a>
                        </div>
                        ))}
                    </div>                    
                </div>
                ))}
            </div>
            <div className='mt-52'>
                <div className=""> 
                    <Footer />
                </div>  
            </div>                
        </div>
    );
}