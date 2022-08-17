import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';
import { GetServerSideProps } from 'next';
import DropLicitacoes from '../components/DropLicitacoes';

interface apiProps {
  contadores: any;
  destaques: any;
  proximas: any;
  ultimas: any;
  covid: any;
}

export default function Licitacoes({contadores, destaques, proximas, ultimas, covid}: apiProps) {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [faqs, setFaqs] = useState([]);

  const itemsSubmenu = [
    {
        menId: '1',
        menTitle: 'Licitações',
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
          <DropLicitacoes />
        </div>
      </div>  
      <div className=' w-full h-full'>
      <div className='flex flex-row ml-3 mr-3 md:ml-20 md:mr-20 mt-3 h-[560px] '>     
        <div className='hidden md:flex md:justify-between md:w-128 md:h-full bg-white dark:bg-gray-900'>
          <div className="w-80 absolute bg-gray-300 mt-5">
            <ul className="relative">
              {contadores.map((cnt:any) => (
              <li key={cnt.id}className="relative">
                <div className="flex items-center text-md py-4 px-6 h-12 overflow-hidden border-b-2 border-white font-bold text-green-700 text-ellipsis whitespace-nowrap hover:text-green-900 hover:bg-gray-100 transition duration-300 ease-in-out hover:cursor-pointer" >
                  <Link href={`/licitacoes/${cnt.id}`} data-mdb-ripple="true" data-mdb-ripple-color="dark" >
                    <div className='flex flex-row justify-between w-full cursor-pointer'>  
                      <div>{cnt.nome}</div> 
                      <div>{cnt.registros}</div>
                    </div>
                  </Link>   
                </div>                  
              </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full h-full bg-white dark:bg-gray-900 '>        
          <div className='p-2 mb-3 border-b-2 border-gray-200'>
              <span className='text-3xl font-bold '>Destaques</span>
          </div>
          <div className='w-full h-full overflow-auto'>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-2 ">
              {destaques.map((item:any) => (
                <div key={item.id} className="bg-gray-100 dark:bg-gray-800 rounded shadow-lg mb-2" > 
                  <div className="flex flex-col items-start px-2 py-2">
                    <div className="font-bold text-xl mb-2">
                      {item.titulo}
                    </div>
                    <div className="text-gray-700 dark:text-gray-100 text-base mb-2">
                      {item.descricao}
                    </div>
                    <div className="bg-green-700 text-white hover:bg-green-300 hover:text-white border 1 border-black flex flex-row items-center justify-center ml-28 md:ml-0 w-28 p-1 rounded" >
                      <Link href={`/licdetalhes/${item.id}`}>
                        <p className="text-sm cursor-pointer">Veja +</p>
                      </Link>   
                    </div>
                  </div> 
                </div>      
              ))}
            </div>
          </div>
        </div>
      </div>  
      </div>
      <div className='ml-3 mr-3 md:ml-20 md:mr-20 mt-28 h-auto '>     
        <div className='flex flex-col justify-start w-full h-full bg-white dark:bg-gray-900'>
          <div className='p-2 mb-3 border-b-2 border-gray-200 '>
            <span className='text-3xl font-bold '>Próximas Licitações</span>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-2 p-2">
            {proximas.map((prx:any) => (
            <div key={prx.id} className="bg-white dark:bg-gray-800 hover:bg-gray-500 mb-2 border-l-2" > 
              <div className="flex flex-col items-start px-2 py-2 ">
                <Link href={`/licdetalhes/${prx.id}`}>
                  <div className='hover:bg-gray-500 hover:cursor-pointer rounded' >
                    <p className="text-lg text-green-500 cursor-pointer">{prx.id}</p>
                    <p className='text-black dark:text-gray-300 font-bold text-xl'>{prx.titulo}</p>
                    <p className='text-green-500'>{prx.data_abertura}</p>
                  </div>
                </Link>                    
              </div>   
            </div>
            ))}
          </div>
        </div>
      </div>  
      <div className='ml-3 mr-3 md:ml-20 md:mr-20 mt-16 h-auto'>     
        <div className='flex flex-col justify-start w-full h-full bg-white dark:bg-gray-900'>
          <div className='p-2 mb-3 border-b-2 border-gray-200'>
            <span className='text-3xl font-bold '>Últimas Licitações</span>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-2 p-2">
            {ultimas.map((ult:any) => (           
            <div key={ult.id} className="bg-white dark:bg-gray-800 mb-2 border-l-2" > 
              <div className="flex flex-col items-start px-2 py-2">
                <Link href={`/licdetalhes/${ult.processo_id}`}>
                  <div className='hover:bg-gray-200 hover:cursor-pointer rounded' >
                    <p className=" text-lg text-green-500 cursor-pointer">{ult.processo_id}</p>
                    <p className='text-black dark:text-gray-100 font-bold text-xl'>{ult.processo_nome}</p>
                    <p>{ult.data}</p>
                  </div>
                </Link>                    
              </div>   
            </div>
            ))}         
          </div>
        </div>
      </div>
      <div className='ml-3 mr-3 md:ml-20 md:mr-20 mt-16 h-auto'>     
        <div className='flex flex-col justify-start w-full h-full bg-white dark:bg-gray-900 '>
          <div className='p-2 mb-3 border-b-2 border-gray-200'>
            <span className='text-3xl font-bold '>Covid-19</span>
          </div>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-2 p-2">
            {covid.map((mdl:any) => (
            <div key={mdl.id} className="bg-white dark:bg-gray-800 mb-2 border-l-2" > 
              <div className="flex flex-col items-start px-2 py-2">
                <Link href={`/licdetalhes/${mdl.id}`}>
                  <div className='hover:bg-gray-200 hover:cursor-pointer rounded'>
                    <p className=" text-lg text-green-500 cursor-pointer">{mdl.id}</p>
                    <p className='text-black dark:text-gray-100 font-bold text-xl'>{mdl.titulo}</p>
                    <p>{mdl.data_abertura}</p>
                  </div>  
                </Link>                  
              </div>   
            </div>
            ))}
          </div>
        </div>
      </div>
      <div className='ml-3 mr-3 md:ml-20 md:mr-20 mt-16 h-auto'>     
        <div className='flex flex-col justify-start w-full h-full bg-white dark:bg-gray-900'>
          <div className='p-2 mb-3 border-b-2 border-gray-200'>
            <span className='text-3xl font-bold '>Links Relacionados</span>
          </div>
          <div className='flex flex-col mb-5 md:flex-row'>
            <div className='flex flex-col items-center justify-center w-full md:w-44 bg-white dark:bg-gray-800 border-r-2'>
              <p className='text-green-500 font-bold text-md'>Emitir Certidões</p>
            </div>
            
            <div className="grid grid-cols-1 gap-1 md:grid-cols-5 w-full h-full md:h-24 md:gap-2 p-2 ">
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md " target="_blank" href="https://www.comprasnet.go.gov.br/">
                  <p className='font-bold '>Cadastro de Fornecedores (CADFOR)</p>
                </a>
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                  <a className="flex flex-col items-center justify-center w-full h-full text-md" target="_blank" href="#">
                    <p className='font-bold '>Certidão Conjunta de Débitos</p>
                  </a>                   
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                  <a className="flex flex-col items-center justify-center w-full h-full text-md" target="_blank" href="https://www.tst.jus.br/certidao1">
                    <p className='font-bold '>Débitos Trabalhistas</p>
                  </a>
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                  <a className="flex flex-col items-center justify-center w-full h-full text-md" target="_blank" href="https://www.economia.go.gov.br/">
                    <p className='font-bold '>Tributos Estaduais SEFAZ/GO</p>
                  </a>
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 dark:bg-gray-800 text-black dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md " target="_blank" href="#">
                  <p className='font-bold '>Tributos Municipais</p>
                </a>
              </div>
            </div>
          </div>  
          <div className='flex flex-col mb-5 md:flex-row'>
            <div className='flex flex-col items-center justify-center w-full md:w-44 bg-white dark:bg-gray-800 border-r-2'>
              <p className='text-green-500 font-bold text-md ml-3 '>Fornecedores Impedidos</p>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-5 w-full h-full md:h-24 md:gap-2 p-2">
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col px-2 items-center justify-center w-full h-full text-md" target="_blank" href="#">
                  <p className='font-bold '>Empresas Suspensas no Município de Aparecida de Goiânia</p>
                </a>
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col px-2 items-center justify-center w-full h-full text-md " target="_blank" href="#">
                  <p className='font-bold '>Fornecedores Impedidos - Compras NET-GO</p>
                </a>
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col px-2 items-center justify-center w-full h-full text-md " target="_blank" href="https://www.portaldatransparencia.gov.br/sancoes/ceis?ordenarPor=nome&direcao=asc">
                  <p className='font-bold '>Cadastro Nacional de Empresas Inidôneas e Suspensas (CEIS) </p>
                </a>
              </div>    
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col px-2 items-center justify-center w-full h-full text-md " target="_blank" href="https://www.portaldatransparencia.gov.br/sancoes/cnep?ordenarPor=nome&direcao=asc">
                  <p className='font-bold '>Cadastro Nacional de Empresas Punidas (CNEP)</p>
                </a>
              </div>            
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col px-2 items-center justify-center w-full h-full text-md" target="_blank" href="https://www.tcm.go.gov.br/site/tcm-em-acao/impedidos-de-licitar-ou-contratar/">
                  <p className='font-bold '>Fornecedores Impedidos de Licitar ou Contratar - TCM-GO</p>
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col mb-5 md:flex-row'>
            <div className='flex flex-col items-center justify-center w-full md:w-44 bg-white dark:bg-gray-800 border-r-2'>
              <p className='text-green-500 font-bold text-md ml-3'>Legislação Pertinente</p>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-5 w-full h-full md:h-24 md:gap-2 p-2">
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md " target="_blank" href="https://www.planalto.gov.br/ccivil_03/leis/L8666cons.htm">
                  <p className='font-bold '>Lei nº 8.666/1993</p>
                </a>
              </div>   
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md" target="_blank" href="https://www.planalto.gov.br/ccivil_03/leis/2002/L10520.htm">
                  <p className='font-bold '>Lei nº 10.520/2002</p>
                </a>
              </div>                 
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md" target="_blank" href="https://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp123.htm">
                  <p className='font-bold '>Lei Complementar nº 123/2006</p>
                </a>
              </div>             
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md" target="_blank" href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm">
                  <p className='font-bold '>Lei nº 12.527/2011</p>
                </a>
              </div>
              <div className="flex flex-col items-start px-2 py-2 bg-gray-300 text-black dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-500 dark:hover:bg-gray-500 rounded">
                <a className="flex flex-col items-center justify-center w-full h-full text-md " target="_blank" href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/Lei/L12462.htm">
                  <p className='font-bold '>Lei nº 12.462/2011</p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>          
      <div className='mt-3'>   
        <Footer /> 
      </div>        
    </div>
  )
} 

export const getServerSideProps: GetServerSideProps = async () => {
  let urlContador = "https://webio.aparecida.go.gov.br/api/lict/modalidades/contador";
  const resContador = await fetch(urlContador);
  const dataContador = await resContador.json()

  let urlDestaques = "https://webio.aparecida.go.gov.br/api/lict/licitacoes/destaques";
  const resDestaques = await fetch(urlDestaques);
  const dataDestaques = await resDestaques.json()

  let urlProximas = "https://webio.aparecida.go.gov.br/api/lict/licitacoes/proximas";
  const resProximas = await fetch(urlProximas);
  const dataProximas = await resProximas.json()

  let urlUltimas = "https://webio.aparecida.go.gov.br/api/lict/licitacoes/ultimaspostagens";
  const resUltimas = await fetch(urlUltimas);
  const dataUltimas = await resUltimas.json()
  
  let urlCovid = "https://webio.aparecida.go.gov.br/api/lict/licitacoes/modalidade/99999";
  const resCovid = await fetch(urlCovid);
  const dataCovid = await resCovid.json()
  
  return {
     props: {
      contadores: dataContador,
      destaques: dataDestaques,
      proximas: dataProximas,
      ultimas: dataUltimas,
      covid: dataCovid,
     } 
  }
}


/*
useEffect(() => {
    api.get("https://webio.aparecida.go.gov.br/api/lict/licitacoes/destaques")
    .then(response => {
        setLicitacoes(response.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
    
    api.get("https://webio.aparecida.go.gov.br/api/lict/licitacoes/proximas")
    .then(resp => {
        setProximas(resp.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    api.get("https://webio.aparecida.go.gov.br/api/lict/licitacoes/ultimaspostagens")
    .then(res => {
        setUltimas(res.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    api.get("https://webio.aparecida.go.gov.br/api/lict/modalidades/contador")
    .then(res => {
        setContadores(res.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });

    api.get("https://webio.aparecida.go.gov.br/api/lict/licitacoes/modalidade/99999")
    .then(res => {
        setModalidades(res.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });    
  }, []);
*/