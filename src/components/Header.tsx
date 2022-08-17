import React, { useState } from "react";
import Image from "next/image";

import imgCard from '../assets/images/001.jpg';
import imgBrasao from '../assets/images/bandeirabrasao.png'

interface options {
  carId: number;
  carTitle: string;
  carTexto?: string;
  carLink?: string;
  carImage: string;
}

const Header = ({options}:{[key:string]:any}) => {
    return (
        <div className="p-2 grid grid-cols-1 gap-1 md:ml-20 md:mr-20 md:grid-cols-3 md:gap-2">  
            <div className='col-span-1 md:col-span-2 '>
                <div className="flex flex-col p-2" >
                  <div className="text-2xl md:text-4xl mb-3 font-bold">
                    Portal da Transparência
                  </div>
                  <div className="text-md ">
                    Portal da Transparencia é uma importante ferramenta de divulgação da utilização dos recursos públicos pela prefeitura, propiciando a participação popular, o aperfeiçoamento da gestão e o fortalecimento da democracia.
                  </div>                  
                </div>  
            </div>
            <div className='bg-white dark:bg-gray-300 flex justify-center items-center col-span-1 p-2 mt-0 md:mt-3 invisible md:visible'>
                <Image src={imgBrasao} alt="" width={200} height={150} />  
            </div>
        </div>   
    );
}

export default Header;