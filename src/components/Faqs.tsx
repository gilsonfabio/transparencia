import { faC } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect } from 'react';
import api from '../pages/api/api';
import ReactHtmlParser from 'react-html-parser';

type faq = {
    id: number;
    pergunta: string;
    resposta: string;
    collapsed: boolean;
}

const Faqs = ({options}:{[key:string]:any}) => { 
    const [showOptions, setShowOptions] = useState(options[0].collapsed);
    
    const handleClick = () => {
        setShowOptions(!showOptions);      
    };

    return (        
        <>
        {options.map((faq:any) => (  
            <div key={faq.id} className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <div className="flex flex-row justify-between items-center accordion-header mb-0" id="headingOne">
                        <button onClick={handleClick} 
                            className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none justify-between
                            "type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapse">
                            <h2 className='w-80 md:w-full text-green-600 font-bold'>{faq.pergunta}</h2>
                            <span className="ml-2 mr-2 w-4 h-4 text-green-600 font-bold">{showOptions ? "—" : "+"} </span>
                        </button>
                    </div>
                    {showOptions && (
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body py-4 px-5 dark:text-black">
                                { ReactHtmlParser(faq.resposta) }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        ))}
        </>            
    );
}

export default Faqs;