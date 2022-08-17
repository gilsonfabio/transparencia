import { useRouter } from "next/router";

function ConcursoPage() {
    const router = useRouter();

    return (
        <div>
            <div className="mt-60">
                Concurso {router.query.conId}
            </div>
            <button onClick={() => {}} type="button" >
                <div className="rounded overflow-hidden shadow-lg mb-5" > 
                    
                    <div className="flex flex-col items-start px-2 py-4">
                        <div className="font-bold text-xl mb-2">
                            Titulo
                        </div>
                        <p className="text-gray-700 text-base">
                            SubTitulo
                        </p>
                    </div>                          
                </div>
            </button>
        </div>      
    )
}

export default ConcursoPage;
