import reunioes from "../services/data/conselho/reunioes.json";
import CardIteReuniao from "./CardIteReuniao";

const CardsReuniao = () => {
  return (
    <ul className="accordion">  
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-2"> 
        {reunioes.map((org, index) => (
          <CardIteReuniao key={index} org = {org} />
        ))} 
      </div>       
    </ul>
  );
};

export default CardsReuniao;