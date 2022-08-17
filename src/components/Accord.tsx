import { faqs } from "../services/data";
import AccordItem from "./AccordItem";

const Accord = () => {
  return (
    <ul className="accordion">   
      {faqs.map((faq, index) => (
        <AccordItem key={index} faq = {faq} />
      ))}      
    </ul>
  );
};

export default Accord;