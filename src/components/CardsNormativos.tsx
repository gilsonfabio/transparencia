import normativos from "../services/data/conselho/normativos.json";
import CardIteNorma from "./CardIteNorma";

const CardsNormativos = () => {
  return (
    <ul className="accordion">  
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-2"> 
        {normativos.map((org, index) => (
          <CardIteNorma key={index} org = {org} />
        ))} 
      </div>       
    </ul>
  );
};

export default CardsNormativos;