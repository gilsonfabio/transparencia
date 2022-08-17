import Cards from '../components/Cards';
import Modal from '../components/Modal';
import Header from '../components/Header';
import Inform from '../components/Inform';
import Footer from '../components/Footer';
import Faqs from '../components/Faqs';
import Menubar from '../components/Menubar';

const itemsMenu = [
    {
      opc: '1',
      title: 'Portal da Transparência',
      itens: [
        {id:1, label:'Link-1',link:'/link01'},
        {id:2, label:'Link-2',link:'/link02'},
        {id:3, label:'Link-3',link:'/link03'},
        {id:4, label:'Link-4',link:'/link04'},
        {id:5, label:'Link-5',link:'/link05'},
        {id:6, label:'Link-6',link:'/link06'},
        {id:7, label:'Link-7',link:'/link07'},
        {id:8, label:'Link-8',link:'/link08'},
        {id:9, label:'Link-9',link:'/link09'},
      ]
    },
]  

const itemsAccordion1 = [
    {
      opc: '1',
      title: 'Gestão Contabil',
      icon: 'dollar',
      itens: [
        {label:'Receitas',link:'https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/comparativo-receita-prevista-com-arrecadada/', target:'_blank'},
        {label:'Despesas',link:'https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-despesa-simplificado/', target:'_blank'},
      ]
    },
]
  
const itemsAccordion2 = [
    {
      opc: '2',
      title: 'Gestão Pessoal',
      icon: 'usuarios',
      itens: [
        {label:'Concursos e Seleções',link:'/concursoseselecoes'},
        {label:'Diarias e Passagens',link:'https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-diaria-passagem/', target:'_blank'},
        {label:'Folha de Pagamento',link:'https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/transparencia-folha-pagamento/', target:'_blank'},
        {label:'Relação de Vagas Legais por Cargos',link:'https://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/vagas%20por%20cargo.pdf', target:'_blank'},
        {label:'Secretarias e Órgãos',link:'https://www.google.com/maps/d/viewer?mid=1WJ-xUxSkkxTnUq-u2cnDb8xw13s&ll=-16.793128750247075%2C-49.29152505000001&z=13', target:'_blank'},
        {label:'Tabela Salarial de Cargos',link:'https://transparencia.aparecida.go.gov.br/portaltransparencia/assets/docs/tabela%20salarial%20de%20cargos%20-%202017.pdf', target:'_blank'},
      ]
    },
]
  
const itemsAccordion3 = [
    {
      opc: '3',
      title: 'Lei Gestão Orçamentaria',
      icon: 'orcamento',
      itens: [
        {label:'Plano PluriAnual',link:'/planoplurianual', target:'_self'},
        {label:'Lei de Diretizes Orçamentárias',link:'/diretrizesorcamentarias', target:'_self'},
        {label:'Lei Orçamentária Anual',link:'/orcamentariaanual', target:'_self'},
        {label:'Relatórios',link:'/relatorios', target:'_self'},
        {label:'Balanço',link:'/balancos', target:'_self'},
      ]
    },
]
  
const itemsAccordion4 = [  
    {
      opc: '4',
      title: 'Licitações e Contratos',
      icon: 'licitacoes',
      itens: [
        {label:'Licitações',link:'/licitacoes', target:'_self'},
        {label:'Contratos',link:'/contratos', target:'_self'},
        {label:'Convênios',link:'/convenios', target:'_self'},
        {label:'Registro de Preços',link:'/registrodeprecos', target:'_self'},
      ]
    },
]
  
const itemsAccordion5 = [
    {
      opc: '5',
      title: 'Controle Social',
      icon: 'social',
      itens: [
        {label:'Conselho Municipal de Transparência',link:'/conselhotransparecia', target:'_self'},
        {label:'Conselho de Eficácia de Gestão',link:'/conselhodegestao', target:'_self'},
      ]
    },
]
  
const itemsAccordion6 = [
    {
      opc: '6',
      title: 'Outras Consultas',
      icon: 'outrasconsultas',
      itens: [
        {label:'Cartilhas e Manuais',link:'/cartilhasemanuais', target:'_self'},
        {label:'Diário Oficial',link:'https://doe.aparecida.go.gov.br/', target:'_blank'},
        {label:'Legislação',link:'https://camaradeaparecida.go.gov.br/legislacoes/', target:'_blank'},
        {label:'Lei Orgânica',link:'https://camaradeaparecida.go.gov.br/legislacoes/lei_organica.pdf', target:'_blank'},
        {label:'Participação Popular',link:'/participacaopopular', target:'_self'},
        {label:'Perguntas Frequentes',link:'itemsFaqs', target:'_self'},
      ]
    },
] 

const itemsCard1 = [
  {carId: 1, carTitle: 'e-SIC', carTexto: 'Pedidos de Acesso à Informação', carLink: 'https://webio.aparecida.go.gov.br/login', carImage:'001'},
  {carId: 2, carTitle: 'FAQ', carTexto: 'Perguntas Frequentes', carLink: '/itemsFaqs', carImage:'002'},
  {carId: 3, carTitle: 'Part. Popular', carTexto: 'Participação Popular', carLink: '#', carImage:'003'},  
]  

const itemsResp1 = [
  {
    "id": 1,
    "pergunta": "O que é o Portal da Transparência?",
    "resposta": "O Portal da Transparência é uma ferramenta que visa promover o amplo acesso aos dados referentes à aplicação dos recursos públicos pela Prefeitura. Por meio do Portal, qualquer cidadão pode acompanhar as ações da administração direta e indireta e a gestão das finanças municipais. Dessa forma, propicia o controle social e auxilia o combate à corrupção por diversos setores da sociedade, imprensa e pesquisadores.",
    "collapsed": true
  }
]  

const itemsResp2 = [
  {
    "id": 2,
    "pergunta": "É necessário justificar o pedido de informações?",
    "resposta": "Nos termos do Art. 10 da <a href='http://www.acessoainformacao.gov.br/assuntos/conheca-seu-direito/a-lei-de-acesso-a-informacao' title='Link para a Lei de Acesso à Informação [Abre em nova página]' target='_blank'>Lei de Acesso à Informação</a>, qualquer interessado poderá apresentar pedido de acesso a informações aos órgãos e entidades referidos no art. 1º desta Lei, por qualquer meio legítimo, devendo o pedido conter a identificação do requerente e a especificação da informação requerida. São vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público.",
    "collapsed": false
  },
]  
const itemsResp3 = [
  {
    "id": 3,
    "pergunta": "Como posso solicitar uma informação?",
    "resposta": "Solicitações de acesso à informação podem ser requeridas pelos seguintes meios:<br /><br /><ol><li>Através de requerimento online pelo <a href='https://webio.aparecida.go.gov.br/' title='Link para e-SIC'>e-SIC</a>;</li><li>No <abbr title='Serviço de Informação ao Cidadão'>SIC</abbr> Físico, localizado na sede da Secretaria Municipal de Transparência, Fiscalização e Controle, situado na Rua Benedito Batista de Toledo, Setor Central (próximo à Igreja Matriz).</li></ol>",
    "collapsed": false
  }, 
]  

const itemsInform = [
  {infId: 1, infTitle: 'Fale com o Ouvidor', infTexto: 'Para fazer um elogio, uma reclamação, uma sugestão, uma denúncia ou uma solicitação utilize o Sistema Eletrônico de Ouvidoria da Prefeitura de Aparecida de Goiânia.', infLabel:'Acesse o Sistema Eletrônico', infLink: 'https://sigp.aparecida.go.gov.br/sig/app.html#/servicosonline/ouvidoria'},  
  {infId: 2, infTitle: 'Atendimento Físico', infTexto: 'Secretaria Municipal de Transparência, Fiscalização e Controle Rua Benedito Batista de Toledo, Qd. 06, Lt. 03 – Sala 02, Centro Horário de Funcionamento: das 8 às 11h30 e das 13 às 17h30 (62) 3545-5929', infLabel:'Mais Informações', infLink: '#'},  
]  

export default function PortalTransparencia() {
  return (
    <div className="" >
      <Menubar />
      <div className='md:mt-20'>
      <Header />
      </div>
      <div className='bg-[#EEEEEE] dark:bg-black-origin w-full flex flex-col justify-center items-center'>
        <div className='w-full md:mt-6 md:mb-6 '>
        <div className='md:ml-20 md:mr-20 p-3'>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-2">
            <Modal options = {itemsAccordion1} />
            <Modal options = {itemsAccordion2} />
            <Modal options = {itemsAccordion3} />
            <Modal options = {itemsAccordion4} />
            <Modal options = {itemsAccordion5} />                
            <Modal options = {itemsAccordion6} />
          </div>
        </div>
        </div>
      </div>    
      <div className='md:ml-20 md:mr-20 mt-10 mb-10'>
        <Cards options={itemsCard1} />
      </div>
      <div className='bg-[#EEEEEE] dark:bg-black-origin w-full flex flex-col justify-center items-center'>
        <div className="flex flex-col items-center justify-center mt-15">
          <div className="md:mt-10 text-2xl md:text-4xl mb-2 font-bold dark:text-white">
            Perguntas Frequentes
          </div>
        </div>  
        <div className='w-full md:mt-11 md:ml-20 md:mr-20'>
          <div className='ml-2 mr-2 md:m-auto md:ml-20 md:mr-20'>
            <Faqs options = {itemsResp1} />
            <Faqs options = {itemsResp2} />
            <Faqs options = {itemsResp3} />
          </div>  
          <div className="flex flex-row justify-center" >
            <div className="mt-8 mb-8 md:-ml-20 md:mb-10 bg-green-700 text-white hover:bg-green-300 hover:text-black flex flex-row items-center justify-center w-60 p-2 rounded-lg" >
              <a href="/itemsFaqs">Mais Perguntas</a>
            </div>
          </div>  
        </div>
      </div>  
      <div className='md:ml-20 md:mr-20 mt-20'>
        <Inform options = {itemsInform} />
      </div> 
      <div className='bg-gray-200 dark:bg-black w-full mt-28' > 
        <div className="md:ml-20 md:mr-20 md:mt-28"> 
          <Footer />
        </div>  
      </div>  
    </div>
  )
}


