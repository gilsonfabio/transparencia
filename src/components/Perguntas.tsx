import React, { useState } from "react";

interface options {
    id: number;
    label: string;
    link: string;
}[]

const Perguntas = ({options}:{[key:string]:any}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
      setShowOptions(!showOptions);      
  };

  const faqs = [
    {
	    "id": 1,
	    "pergunta": "O que é o Portal da Transparência?",
	    "resposta": "O Portal da Transparência é uma ferramenta que visa promover o amplo acesso aos dados referentes à aplicação dos recursos públicos pela Prefeitura. Por meio do Portal, qualquer cidadão pode acompanhar as ações da administração direta e indireta e a gestão das finanças municipais. Dessa forma, propicia o controle social e auxilia o combate à corrupção por diversos setores da sociedade, imprensa e pesquisadores.",
	    "collapsed": false
    }, 
    {
	    "id": 2,
    	"pergunta": "É necessário justificar o pedido de informações?",
    	"resposta": "Nos termos do Art. 10 da <a href='http://www.acessoainformacao.gov.br/assuntos/conheca-seu-direito/a-lei-de-acesso-a-informacao' title='Link para a Lei de Acesso à Informação [Abre em nova página]' target='_blank'>Lei de Acesso à Informação</a>, qualquer interessado poderá apresentar pedido de acesso a informações aos órgãos e entidades referidos no art. 1º desta Lei, por qualquer meio legítimo, devendo o pedido conter a identificação do requerente e a especificação da informação requerida. São vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.",
	    "collapsed": false
    },
    {
	    "id": 3,
	    "pergunta": "Como posso solicitar uma informação?",
	    "resposta": "Solicitações de acesso à informação podem ser requeridas pelos seguintes meios:<br /><br /><ol><li>Através de requerimento online pelo <a href='https://webio.aparecida.go.gov.br/' title='Link para e-SIC'>e-SIC</a>;</li><li>No <abbr title='Serviço de Informação ao Cidadão'>SIC</abbr> Físico, localizado na sede da Secretaria Municipal de Transparência, Fiscalização e Controle, situado na Rua Benedito Batista de Toledo, Setor Central (próximo à Igreja Matriz).</li></ol>",
	    "collapsed": false
    }, 
    {
	    "id": 4,
	    "pergunta": "O que é o PPA?",
	    "resposta": "O Plano Plurianual - PPA é a lei que define as prioridades do Governo pelo período de 4 (quatro) anos. O projeto de lei do PPA deve ser enviado pelo Chefe do Poder Executivo ao Poder Legislativo até o dia 31 de agosto do primeiro ano de seu mandato (4 meses antes do encerramento da sessão legislativa). Em Aparecida de Goiânia, a <a href='http://camaradeaparecida.go.gov.br/pagina/lei-organica/5' target='_blank' title='Link para Lei Orgânica de Aparecida de Goiânia'>Lei Orgânica Municipal</a> estabelece o prazo de envio até 30 de setembro. De acordo com a Constituição Federal, o PPA deve conter <span><em>\"as diretrizes, objetivos e metas da administração pública para as despesas de capital e outras delas decorrentes e para as relativas aos programas de duração continuada\".</em></span><br /><br /> Para conhecer melhor o PPA da Prefeitura de Aparecida de Goiânia <a href='http://transparencia.aparecida.go.gov.br/portaltransparencia/p/services/gestaomunicipal/orcamento/ppa/' title='Link para Página do PPA'>clique aqui</a>.",
	    "collapsed": false
    }
  ]

  return (
    <div className="ml-20 mr-20">       
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingOne">
                <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition
                    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingTwo">
                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition  
                    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                </div>
            </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingThree">
                <button className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition
                    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body py-4 px-5">
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Perguntas;