import React, {useState} from 'react'
import Image from 'next/image'

import logoBarra from '../assets/images/logo-barra.png'
import Dropdown from './DropDown';
import Search from './Search';
import DropAcessib from './DropAcessib';

const options = [
    {id:1, label:'Diario Oficial', link:'/diariooficial'},
    {id:2, label:'Portal da Saúde', link:'/portaldasaude'},
    {id:3, label:'Portal da Educação', link:'/portaldaeducacao'}, 
    {id:4, label:'Portal da Prefeitura', link:'/portalprefeitura'},
    {id:5, label:'Portal da Transparência', link:'/portaltransparencia'},
]

const Menubar = () => {   
    const [showOptions, setShowOptions] = useState(false);

    const handleDropdown = () => {
        setShowOptions(!showOptions);      
    };  

    return (
        <nav className="bg-black">
            <div className="flex justify-between items-center mx-auto">
                <div className="flex flex-row items-center " >
                    <div className="flex items-center ml-5">
                        <a href="/portalprefeitura" ><Image src={logoBarra} alt="" width={170} height={40} /></a>                    
                    </div>
                    <div className="ml-5 ">
                        <Dropdown options={options} />
                    </div>
                    <div className="ml-5 ">
                        <Search />
                    </div>                
                </div>
                <div className="ml-5 ">
                    <DropAcessib />
                </div>                
            </div>
        </nav> 
    )
}

export default Menubar

