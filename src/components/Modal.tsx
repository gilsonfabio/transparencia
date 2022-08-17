import Image from "next/image";
import React from "react";

const Modal = ({options}:{[key:string]:any}) => {  
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      {options.map((option:any) => (
        <div key={option.opc}>
        <button onClick={() => setShowModal(true)} type="button" className="bg-gray-100 dark:bg-gray-900 w-full flex flex-row rounded-r-md shadow-lg h-20 p-0 items-center mt-3 border border-green-500" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
          <div className="bg-green-500 w-20 h-20 flex flex-col items-center justify-center ">
            <Image src={require(`../assets/icons/${option.icon}.svg`)} alt="" width={50} height={50} />
          </div>     
          <div className="ml-3 items-center">
            <span className="ml-2 text-2xl justify-center items-center text-black dark:text-white font-bold">{option.title}</span>
          </div>                      
        </button>
        {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white dark:bg-gray-800 outline-none focus:outline-none shadow-2xl shadow-gray-800">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {option.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-gray-3500 text-lg leading-relaxed">
                    {option.itens.map((row: any, idx:number) => (
                      <div key={idx} className="flex fle-col items-center mt-3 p-1 rounded-md text-black dark:text-white hover:bg-green-500 hover:text-black">
                        <a className="text-md" href={row.link} target={row.target}>{row.label}</a>
                      </div>
                    ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-Red-500 hover:text-Red-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
      ))}  
    </div>
  );
}

export default Modal;