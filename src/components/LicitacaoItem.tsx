import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import PaginationSelect from '../components/PaginationSelection';

export default function LicitacaoItem({ item}:any) {
    const [itens, setItens] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const [clicked, setClicked] = useState(false);
    const handleToggle = () => {
      setClicked((prev) => !prev);
    };

    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    <div className="bg-gray-100 rounded overflow-hidden shadow-lg mb-2" > 
                        <div className="flex flex-row items-start justify-between px-2 py-2">
                            <div className="flex flex-col items-start px-2 py-1">
                                <span className='text-[12px] font-bold'>
                                    Abertura
                                </span>
                                <div className="text-[12px] mb-0">
                                    {item.data_abertura}
                                </div>
                            </div>
                            <div className="flex flex-col items-start px-2 py-1">
                                <span className='text-[12px] font-bold'>
                                    Nº Processo
                                </span>
                                <div className="text-[12px] mb-0">
                                    2022.000.165
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-between px-2">
                            <div className="flex flex-col items-start px-2 ">
                                <span className='text-[12px] font-bold'>
                                    Situação
                                </span>
                                <div className="text-[12px] mb-0">
                                    {item.status}
                                </div>
                            </div>
                            <div className="flex flex-col items-start px-2 ">
                                <span className='text-[12px] font-bold'>
                                    Valor Estimado
                                </span>
                                <div className="text-[12px] mb-0">
                                    R$ 5.900.000,00
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-between px-2">
                            <div className="flex flex-col items-start px-2 py-2">
                                <span className='text-[12px] font-bold'>
                                    Licitação
                                </span>
                                <div className="text-[12px] mb-0">
                                    {item.titulo}
                                </div>
                            </div>                
                        </div>
                        <div className="flex flex-row items-start justify-between px-2 ">
                            <div className="flex flex-col items-start px-2 py-2">
                                <span className='text-[12px] font-bold'>
                                    Objeto
                                </span>
                                <div className="text-[12px] mb-0">
                                    Aquisição de armamento para a Guarda Civil de Aparecida de Goiânia/GO, conforme condições e especificações estabelecidas...
                                </div>
                            </div>                
                        </div>                            
                    </div>                  
                </div>
            </div>
        </div>
    );
}