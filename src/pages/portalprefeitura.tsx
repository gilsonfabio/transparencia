import Banner from '../components/Banner';
import Menubar from '../components/Menubar';
import Submenu2 from '../components/Submenu2';

const itemsMenu = [
    {
      opc: '1',
      title: 'Portal da Prefeitura',
      itens: [
        {id:1, label:'Link-1',link:'/link01'},
        {id:2, label:'Link-2',link:'/link02'},
        {id:3, label:'Link-3',link:'/link03'},
        {id:4, label:'Link-4',link:'/link04'},
        {id:5, label:'Link-5',link:'/link05'},        
      ]
    },
]  

export default function PortalPrefeitura() {
  return (
    <div className="" >
        <Menubar />
        <Submenu2 options={itemsMenu}/>
        <Banner /> 
    </div>
  )
}