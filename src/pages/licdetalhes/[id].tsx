import React, {useEffect, useState } from 'react';
import Menubar from '../../components/Menubar';
import Submenu from '../../components/Submenu';
import { useRouter } from "next/router";
import moment from 'moment';

import Footer from '../../components/Footer';
import api from '../api/api';
import Link from 'next/link';

interface LicitacaoProps {
    "id": number;
    "titulo": string;
    "data_abertura": string;
    "status": string;
    "categoria": string; 
    "hora_abertura": string;
    "entidade": string;
    "modalidade": string;
    "secretaria": string;
    "descricao": string; 
    "licitacao_pai_id": string;
    "licitacao_pai_nome": string;
    "processo_prodata": string;
    "observacao": string;
    "data_publicacao": string;
    "resultado": string;
    "responsavel": string;
    "numero_bb": number;
    "srp": string;
    "valor_estimado": string;
    "valor_homologado": string;
    "arquivos": string[];
    "contratos": number[];
    "convenios": number[];
    "registroprecos": string[];
}

export default function LicDetalhes() {
    const [licitacao, setLicitacao] = useState<Array<LicitacaoProps>>([]);

    const router = useRouter();
    const [idLic, setIdLic] = useState(router.query.id);
    
    const {query: { id }, } = router

    useEffect(() => {    
    
        setIdLic(id);
  
        let buscalUrl = `https://webio.aparecida.go.gov.br/api/lict/licitacoes/${idLic}`;
        const fetchData = async () => { 
            const result = await fetch(buscalUrl)
            .then(response => response.json())
            .then(data => data)
        
            setLicitacao(result.data);

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
            menTitle: 'Detalhes Licitação',
            breadcrumbs:[
              {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
              {descricao: "Licitações", link: "/licitacoes"},
              {descricao: "Busca Licitações", link: "/licitacoes/"},
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
                {licitacao.map((row) => (
                <div key={row.id} className='ml-2 mr-2 md:ml-20 md:mr-20'>                
                    <div className='flex flex-row justify-between items-center mt-3 border-b-2 border-gray-200 py-2 mb-11'> 
                        <div className='w-full h-auto text-sm font-bold md:text-2xl'>
                            {row.titulo} - {row.id}
                        </div>
                        <button onClick={goBack} className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-20 md:ml-0 w-20 p-2 rounded-lg" >
                            <span className='text-sm font-bold'>Voltar</span>
                        </button>
                    </div>
                    <div className='flex flex-col w-full mb-5'>
                        <span className='text-[#008C3D] font-bold'>Objetivo</span>
                        <span className='text-black dark:text-gray-100 '>{row.descricao}</span>    
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 ">
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>MODALIDADE</span>
                            <span>{row.modalidade}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>Nº DE PROTOCOLO</span>
                            <span>{row.processo_prodata}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>DATA DE PUBLICAÇÃO</span>
                            <span>{row.data_publicacao}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>PREGOEIRO RESPONSÁVEL</span>
                            <span>{row.responsavel}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>JULGAMENTO</span>
                            <span>{row.categoria}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>VALOR ESTIMADO</span>
                            <span>{row.valor_estimado}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>SITUAÇÃO</span>
                            <span>{row.status}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>VALOR HOMOLOGADO</span>
                            <span>{row.valor_homologado}</span> 
                        </div>
                        
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>DATA DE ABERTURA</span>
                            <span>{row.data_abertura} - {row.hora_abertura}</span>    
                        </div>
                                                
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>SECRETÁRIA CONTRATANTE</span>
                            <span>{row.entidade}</span>    
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>RESULTADO:</span>
                            <span>{row.resultado}</span> 
                        </div>
                        <div className='flex flex-col w-full mt-3'>
                            <span className='text-[#008C3D] font-bold'>OBSERVACAO:</span>
                            <span>{row.observacao}</span> 
                        </div>
                    </div>
                    <div className='w-full border-b-2 border-gray-200 py-2 mt-24 mb-6'>
                        <span className='text-[#008C3D] font-bold'>ANEXOS</span>
                    </div>
                    {row.arquivos.map((anexos,idx) => (
                    <div key={idx} className="grid grid-cols-4 gap-1 md:grid-cols-7 md:gap-2 h-auto ">                        
                        <div className='col-span-1'>{anexos.data}</div>
                        <div className='col-span-2 w-62 md:w-full md:col-span-5 text-[14px]'>{anexos.nome}</div>
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
                    <div className='w-full border-b-2 border-gray-200 py-2 mt-24 mb-6'>
                        <span className='text-[#008C3D] font-bold'>CONTRATOS ASSOCIADOS</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4 h-auto ">
                        {row.contratos.map((cto) => (
                        <div key={cto.id} className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-0 md:ml-0 w-auto p-2 rounded-lg" >
                            <Link href={`/contratos/${cto.id}`}>
                                <a>{cto.nome}</a>
                            </Link>    
                        </div>
                        ))}
                        {row.convenios.map((cnv) => (
                        <div key={cnv.id} className="bg-white text-black border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-0 md:ml-0 w-auto p-2 rounded-lg" >
                            <Link href={`/convenios/${cnv.id}`}>
                                <a>{cnv.nome}</a>
                            </Link>    
                        </div>
                        ))}
                    </div>
                    <div className='w-full border-b-2 border-gray-200 py-2 mt-40 mb-6'>
                        <span className='text-[#008C3D] font-bold'>ATA DE REGISTRO DE PREÇOS</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4 h-auto ">
                        {row.registroprecos.map((reg) => (     
                        <div key={reg.id} className="bg-white text-black text-sm border border-[#008C3D] hover:bg-[#008C3D] hover:text-white flex flex-row items-center justify-center ml-0 md:ml-0 w-auto p-2 rounded-lg" >
                            <Link href={`/registrodeprecos/${reg.id}`}>
                                <a>{reg.nome}</a>
                            </Link>    
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
