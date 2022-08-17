import Footer from '../components/Footer';
import Menubar from '../components/Menubar';
import Navbar from '../components/Menubar';
import NavTabs from '../components/NavTabs';
import Submenu from '../components/Submenu';
import { Tabs } from '../components/Tabs';

const itemsNav = [
  {conId: 1, conTitle: 'INSCRIÇÕES ABERTAS'},
  {conId: 2, conTitle: 'PRÓXIMOS CONCURSOS'},
  {conId: 3, conTitle: 'EM ANDAMENTO'},
  {conId: 4, conTitle: 'ENCERRADOS'},
  {conId: 5, conTitle: 'ÚLTIMAS PUBLICAÇÕES'},  
]

const itemsSubmenu = [
  {
      menId: '1',
      menTitle: 'Concursos e Seleções',
      breadcrumbs:[
        {descricao: "Portal da Transparencia", link: "/portaltransparencia"},
      ]
  },
] 

export default function ConcursoseSelecoes() {
  return (
    <div className="dark:bg-zinc-900" >
      <Menubar />
      <div className='md:mt-0'>
        <Submenu options = {itemsSubmenu} />           
      </div>
      <div className=''>
        <Tabs />
      </div>
      <Footer />
    </div>
  )
};

