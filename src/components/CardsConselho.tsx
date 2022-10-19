import composicao from "../services/data/conselho/composicao.json";
import CardItem from "./CardItem";

const CardsConselho = () => {
  return (
    <ul className="accordion">  
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 p-2"> 
        {composicao.map((org, index) => (
          <CardItem key={index} org = {org} />
        ))} 
      </div>       
    </ul>
  );
};

export default CardsConselho;