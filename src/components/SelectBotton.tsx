import React, {useState, useEffect } from 'react';

const SelectBotton = ({options}:{[key:string]:any}) => {    
    return (
      <div className='flex flex-row justify-between items-center bg-gray-200 text-md font-bold px-2'>
        <div className='text-green-700'>
          Escolha o Ano
        </div>
        <div className="flex justify-center">
            <div className="xl:w-96">
                <select className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-green-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        {options.map((opc:any) => (
                          <option key={opc.selId} value={opc.selId}>{opc.selTitle} </option>
                        ))}
                </select>
            </div>
        </div> 
      </div>
    );
  };
  
  export default SelectBotton;