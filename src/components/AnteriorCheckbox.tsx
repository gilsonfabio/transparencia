import React, { useState, useEffect } from "react";
import { filtros } from "../services/licmodalidades";

interface Filtro {
  id: number;
  name: string;
  checked: boolean;
}

const Checkbox = () => {
  const [ids, setIds] = useState<Array<number>>([]);

  const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);
    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id) => id !== selectedId);
      setIds(newIds);
    } else {
      const newIds = [...ids];
      newIds.push(selectedId);
      setIds(newIds);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 text-black font-bold w-72 p-2 ">
      <div className="w-60 ">
      {filtros.map((filtro) => (  
        <div key={filtro.id} className="flex flex-row justify-between text-black ">
          <span className="text-black text-sm">{filtro.name}</span>
          <span className="text-black text-sm">
            <input type="checkbox" value={filtro.id} onChange={selectUser} checked={ids.includes(filtro.id) ? true : false} />
          </span>
        </div>
      ))}
      </div>      
    </div>
  );
};

export default Checkbox;