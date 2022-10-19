import reavaliacao from "../services/data/reavaliacao.json";
import CardIteComis from "./CardIteComis";

const CardsComissao = () => {
  return (
    <ul className="accordion">  
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-2"> 
        {reavaliacao.map((org, index) => (
          <CardIteComis key={index} org = {org} />
        ))} 
      </div>       
    </ul>
  );
};

export default CardsComissao;