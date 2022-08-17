import React, {useEffect, useState} from "react";

import api from '../pages/api/api';
import { Abertos } from "../pages/concursos/abertos";
import { Andamento } from "../pages/concursos/andamento";
import { Encerrados } from "../pages/concursos/encerrados";
import { Proximos } from "../pages/concursos/proximos";
import { Ultimosconcursos } from "../pages/concursos/ultimosconcursos";

interface concurso {
  id:number;
  nome:string;
  data:string;
  publicacao_id:number;
  concurso:string;
}

export const Tabs = () => {
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
    <div className="dark:bg-zinc-900">
      <div className="flex flex-wrap dark:bg-zinc-900">
        <div className="w-full dark:bg-zinc-900">
          <ul className="flex mb-0 list-none flex-wrap pt-1 pb-1 flex-row bg-gray-200" role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={"text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-gray-200 border-b-4 border-green-700 hover:border-b-4 hover:cursor-pointer hover:border-green-700"
                    : "text-black bg-gray-200 border-b-4 hover:cursor-pointer hover:border-green-700")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               INSCRIÇÕES ABERTAS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={"text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-gray-200 border-b-4 border-green-700 hover:border-b-4 hover:cursor-pointer hover:border-green-700"
                    : "text-black bg-gray-200 border-b-4 hover:cursor-pointer hover:border-green-700")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 PRÓXIMOS CONCURSOS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={"text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                  (openTab === 3
                    ? "text-black bg-gray-200 border-b-4 border-green-700 hover:border-b-4 hover:cursor-pointer hover:border-green-700"
                    : "text-black bg-gray-200 border-b-4 hover:cursor-pointer hover:border-green-700")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 EM ANDAMENTO
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={"text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                  (openTab === 4
                    ? "text-black bg-gray-200 border-b-4 border-green-700 hover:border-b-4 hover:cursor-pointer hover:border-green-700"
                    : "text-black bg-gray-200 border-b-4 hover:cursor-pointer hover:border-green-700")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 ENCERRADOS
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a className={"text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                  (openTab === 5
                    ? "text-black bg-gray-200 border-b-4 border-green-700 hover:border-b-4 hover:cursor-pointer hover:border-green-700"
                    : "text-black bg-gray-200 border-b-4 hover:cursor-pointer hover:border-green-700")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                 ÚLTIMAS PUBLICAÇÕES
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-zinc-900 w-full mb-6 ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Abertos />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Proximos />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Andamento />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <Encerrados /> 
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <Ultimosconcursos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

