import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Submenu from '../components/Submenu';

import api from './api/api';

export default function AcessoInformacao() {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);      
  };
  const [faqs, setFaqs] = useState([]);

  const itemsSubmenu = [
    {
        menId: '1',
        menTitle: 'Acesso a Informação',
        breadcrumbs:[
          {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
        ]
    },
  ] 

  return (
    <div className="h-screen" >
        <Menubar />
        <Submenu options = {itemsSubmenu} />  
        <div className='bg-gray-200 h-10'>                  
        </div> 
        <div className='flex flex-col justify-center bg-white h-2/4'>
            <div className='ml-5 mr-5 md:ml-24 md:mr-24'>
                <p>A <a href="https://webio.aparecida.go.gov.br/diariooficial/download/701" title="Link para a íntegra da Lei 3.366/2017 [Arquivo PDF]" className='text-green-500 hover:text-green-700 hover:cursor-pointer hover:font-bold'>Lei Municipal de Acesso à Informação <small>(nº 3.366/2017)</small></a> regulamenta o direito constitucional de obter informações públicas, ampliando a participação cidadã e fortalecendo os instrumentos de controle social da gestão pública por meio do Portal da Transparência.</p>
                <br />
                <p>No <a href="/portaltransparencia" title="Link para página inicial do Portal da Transparência de Aparecida de Goiânia" className='text-green-500 hover:text-green-700 hover:cursor-pointer hover:font-bold'>Portal da Transparência</a> da Prefeitura de Aparecida de Goiânia, o cidadão tem acesso a diversos dados e informações, tais como: receitas e despesas executadas pela administração municipal, gestão de pessoal, licitações, contratos e balanços orçamentários.</p>
                <br />
                <p>A Prefeitura de Aparecida, por meio da Secretaria-Executiva da Transparência, busca disponibilizar todas as informações no Portal da Transparência, promovendo assim a transparência pública ativa e passiva. Caso o cidadão não encontre a informação que busca no Portal da Transparência, o acesso à informação pode ser solicitado por meio do Sistema Eletrônico de Serviço de Informações ao Cidadão (e-SIC). Antes de solicitar a informação, confira se esta já se encontra disponível nas <a href="/itemsFaqs" title="Link para página Perguntas Frequentes" className='text-green-500 hover:text-green-700 hover:cursor-pointer hover:font-bold'>Perguntas Frequentes</a>.</p>
                <br />
                <p>Pelo e-SIC é possível solicitar uma informação, acompanhar o processo da resposta e consultar relatório estatístico de solicitações de informações. Qualquer pessoa, física ou jurídica, pode solicitar informações públicas dos órgãos da prefeitura, sem necessidade de justificativa. Para isso, basta fazer o cadastro, caso ainda não tenha, e preencher o formulário de solicitação. Solicite a informação de forma clara e objetiva.</p>
                <br />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-5 md:mt-5 md:ml-24 md:mr-24">
            <div className='w-full h-full p-3'>
                <a href='https://webio.aparecida.go.gov.br/' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-md justify-center items-center ">Solicitar Informação</span>
                    </div>                      
                </a>
            </div>
            <div className='w-full h-full p-3'>
                <a href='https://webio.aparecida.go.gov.br/' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-md justify-center items-center ">Acompanhar Solicitação</span>
                    </div>                      
                </a>
            </div>
            <div className='w-full h-full p-3'>
                <a href='#' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-md justify-center items-center ">Relatórios Estatísticos</span>
                    </div>                      
                </a>
            </div> 
            <div className='w-full h-full p-3'>
                <a href='/comissaomista' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-md justify-center items-center ">Comissão Mista de Reavaliação</span>
                    </div>                      
                </a>
            </div> 
            <div className='w-full h-full p-3'>
                <a href='/itemsFaqs' type="button" className="w-full h-36 flex flex-col md:flex-row items-center rounded-md shadow-lg justify-center md:justify-center drop-shadow-xl p-2 md:p-5 font-xs text-left dark:border-gray-700 border-b-0 text-black dark:text-white bg-Cerceta-100 dark:bg-gray-800 hover:bg-Teal-600 dark:hover:bg-gray-700 " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <div className="mt-3 ml-3 items-center">
                        <span className="text-md justify-center items-center ">Perguntas Frequentes</span>
                    </div>                      
                </a>
            </div>                       
        </div>
        <div className='flex flex-col justify-center bg-white h-2/4'>
            <div className='ml-5 mr-5 md:ml-24 md:mr-24'>    
                <br />
			    <p>A Prefeitura de Aparecida sempre busca responder as solicitações de forma célere e dentro do prazo legal - até 20 dias, sendo prorrogável por mais 10 dias. As respostas serão enviadas, preferencialmente, por e-mail. Porém, sendo presencial, pede-se que o solicitante disponibilize uma mídia, como <em>pen drive</em> ou CD/DVD, para salvar o arquivo.</p>
	            <br />
	            <p>Caso o cidadão deseje registrar elogios, sugestões ou críticas em relação ao serviço público da Prefeitura de Aparecida, o canal disponibilizado é a <a href="https://servico.aparecida.go.gov.br:8081/sig/app.html#/servicosonline/ouvidoria" title="Link para Sistema Eletrônico de Ouvidoria" target="_blank" className="text-green-500 hover:text-green-700 hover:cursor-pointer hover:font-bold">Ouvidoria</a>.</p>
				<br />
				<p><small>Saiba mais sobre a Lei de Acesso à Informação por meio desta <a href="http://www.acessoainformacao.gov.br/central-de-conteudo/publicacoes/arquivos/cartilhaacessoainformacao-1.pdf" title="Link para Cartilha Acesso à Informação Pública [abre em nova aba]" target="_blank" className='text-green-500 hover:text-green-700 hover:cursor-pointer hover:font-bold'>Cartilha</a> ou acessando o site oficial da <abbr title="Lei de Acesso à Informação" >LAI</abbr> organizado pela CGU - Controladoria Geral da União, no endereço: <a href="http://www.acessoainformacao.gov.br/" title="Link para o site Acesso à Informação do Governo Federal [abre em nova aba]" target="_blank" className='text-green-500 hover:text-green-700 hover:cursor-pointer hover:font-bold'>http://www.acessoainformacao.gov.br</a>.</small></p>
            </div>
        </div>
        <Footer /> 
    </div>
  )
} 
