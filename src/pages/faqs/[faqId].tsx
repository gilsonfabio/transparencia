import React, {useState} from 'react';
import { useRouter } from "next/router";

function FaqPage() {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
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
        <div>
            <div className="mt-60">
                Faq {router.query.faqId}
            </div>
            {faqs.map((option:any) => (
        <div key={option.opc}>
        <button onClick={() => setShowModal(true)} type="button" className="bg-gray-100 dark:bg-gray-900 w-full flex flex-row rounded-md shadow-lg h-20 p-0 items-center mt-3 border border-green-500" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
          <div className="bg-green-500 w-20 h-20 flex flex-col items-center justify-center ">
            {option.id}
          </div>     
          <div className="ml-3 items-center">
            <span className="ml-2 text-lg justify-center items-center text-black dark:text-white font-bold">{option.pergunta}</span>
          </div>                      
        </button>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none shadow-2xl shadow-gray-800">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {option.pergunta}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-gray-500 text-lg leading-relaxed">
                    <div className="flex fle-col items-center mt-3 p-1 rounded-md text-black dark:text-white">
                      <p className="md:text-md md:w-144" >{option.resposta}</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-Red-500 hover:text-Red-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
      ))}  
        </div>      
    )
}

export default FaqPage;