import Image from "next/image";
import { useState, useEffect } from "react";

interface dados {
    btnStatus: boolean;
    btnTitle: string;
}[]

const itemsMenu = [
  {
    opc: '1',
    title: 'Gestão Contabil',
    icon: 'simbolo-do-dolar',
    itens: [
      {label:'Receitas',link:'/receitas'},
      {label:'Despesas',link:'/despesas'},
    ]
  },
]

const Sidebar = ({dados}:{[key:string]:any}) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const pos = 'right';

  
  return (
    <>    
    {showSidebar ? (
      <button
          className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <></>
        /*<svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg> */ 
      )}
      {dados.map((option: any, index:number) => (        
      <div key={option.index} className={`top-0 right-0 w-[90vw] md:w-[35vw] bg-Teal-600/95 p-10 pl-20 text-black fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
        <div className="flex flex-row items-center mt-8 mb-8 ">
          <div className="w-11 h-11">
            <Image src={require(`../assets/icons/${option.icon}.png`)} alt="" width={50} height={50} />
          </div>  
          <div className="ml-2 md:text-2xl font-semibold text-black">
            {option.title}
          </div>
        </div>  
        {option && 
          option.itens.map((row: any, idx:number) => (
          <div key={row.idx} className="flex fle-col items-center mt-3 p-1 rounded-md text-black hover:bg-Cerceta-800 hover:text-white">
            <a className="text-md" href="#">{row.label}</a>
          </div>  
        ))}
      </div>   
      ))} 
  </>
  );
};

export default Sidebar;