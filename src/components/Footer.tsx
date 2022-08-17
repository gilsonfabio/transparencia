import React, { useState } from "react";
import Image from "next/image";

import imgCard from '../assets/images/001.jpg';
import imgBandeira from '../assets/images/bandeirabrasao.png'

interface options {
  carId: number;
  carTitle: string;
  carTexto?: string;
  carLink?: string;
  carImage: string;
}

const Footer = ({options}:{[key:string]:any}) => {
    return (
        <div className="bg-gray-200 dark:bg-black dark:text-white p-2 grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">  
            <div className='flex justify-center items-center col-span-1 p-2 mt-3 '>
                <Image src={imgBandeira} alt="" width={200} height={150} />  
            </div>

            <div className='col-span-1 mt-5 p-2 mr-20'>
                <div className="text-md md:mr-20 w-full ">
                    Rua Gervásio Pinheiro, APM Residencial Solar Central Park CEP: 74.968-500 Horário de Funcionamento: 08h as 11h30 - 13h as 17h30 Telefone: (62) 3545-5800 / 3545-5801  
                </div>                  
            </div>
        </div>   
    );
}

export default Footer;