import React, {useEffect, useState} from "react";
import axios from 'axios';

import api from '../api/api';

interface concurso {
  id:number;
  nome:string;
  data:string;
  publicacao_id:number;
  concurso:string;
}

export const Andamento = () => {
  const [concursos, setConcursos] = useState([]);
  const [openTab, setOpenTab] = React.useState(1);

  useEffect(() => {
    api.get("https://webio.aparecida.go.gov.br/api/conc/publicacoes/ultimaspostagens")
    .then(response => {
        setConcursos(response.data)
        console.log(response.data)
    }).catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
  }, []);
  
  return (
    <>
        {concursos.map((con:any) => (
            <div key={con.id} className="flex flex-row mb-1 p-1 md:mb-3 md:p-3" >
                <div className="flex flex-col p-0 ml-1 w-14 md:p-2 md:ml-11 md:w-64 items-center justify-center">
                    <p className="text-[10px] md:text-lg uppercase text-green-600">publicado em</p>
                    <p className="text-[10px] md:text-lg text-green-600">{Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(con.data))}</p>
                </div>
                <div className="flex flex-col ml-11 p-2 mb-3 border-l-2 border-gray-300">  
                    <a href="#" className="mb-3 text-green-600 hover:cursor-pointer">{con.nome}</a>
                    <p className="mb-3 ">{con.concurso}</p>
                </div>
            </div>  
        ))} 
    </>
  );
};