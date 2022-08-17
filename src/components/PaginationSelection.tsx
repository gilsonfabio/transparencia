import React from 'react';
import Pagination from './Pagination';

const PaginationSelect = ({itensPerPage, setItensPerPage}) => {
    return (               
        <div className='flex flex-row items-center w-48 px-2 '> 
            <span className='text-sm md:text-md font-bold mr-3'>Itens por página: </span>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))} >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
        </div>         
    )
}

export default PaginationSelect;