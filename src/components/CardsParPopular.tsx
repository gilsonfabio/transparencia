import participacao from "../services/data/participacao.json";
import CardItePopular from "./CardItePopular";

const CardsParPopular = () => {
  return (
    <ul className="accordion">  
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-2"> 
        {participacao.map((org, index) => (
          <CardItePopular key={index} org = {org} />
        ))} 
      </div>       
    </ul>
  );
};

export default CardsParPopular;