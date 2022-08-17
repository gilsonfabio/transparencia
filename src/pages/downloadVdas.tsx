import React, { useEffect, useState} from "react";
import api from './api/api';

interface dadosProps {
    descricao: string;
}
  
export default function App() {
    const [secretarias, setSecretarias] = useState([]);
    
    var dados = [];  
    
    const downloadTxtFile = () => {
        console.log(dados);
        const element = document.createElement("a");
        const file = new Blob(dados, {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
    };
    
    useEffect(() => {
        api.get(`/secretarias`).then(response => {
            setSecretarias(response.data)
            secretarias.map((row) => {
                dados.push(row.secDescricao)
            })
            console.log('dados:', dados);            
        })
    },[]);
    
    return (
        <div>            
            <button onClick={downloadTxtFile}>Download txt</button>
        </div>
    );
}