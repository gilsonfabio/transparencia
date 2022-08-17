import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';
 

const AccordionItem = ({faq}:{[key:string]:any}) => {

  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={`accordion_item ${clicked ? "active mb-2" : ""}`}>
      <button className="button p-2 text-green-700 font-bold text-left bg-gray-200 border-l-2 border-gray-400 hover:cursor-pointertext-left flex flex-wrap w-full justify-between items-center px-2 mt-5 shadow-lg" onClick={handleToggle}>
        {faq.pergunta}
        <span className="control">{clicked ? "—" : "+"} </span>
      </button>

      <div
        className={`answer_wrapper ${clicked ? "active h-auto p-2 mb-5 bg-gray-200 border-l-2 border-gray-400" : "hidden"}`}> 

        <div className={`answer ${clicked ? "active" : "hidden"}` }>
          <div className="h-auto dark:text-black"> 
            { ReactHtmlParser(faq.resposta) }
          </div>  
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;