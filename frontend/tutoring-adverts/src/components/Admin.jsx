import { useEffect } from "react";
import { useState } from "react";

const Admin = () => {

    const [isApprentusScrapping , setIsApprentusScrapping] =  useState(false);
    const [isProfScrapping , setIsProfScrapping] = useState(false);
    const [scrappingApprentusFininshed , setScrappingApprentusFinished] = useState(false);
    const [scrappingProfFininshed , setScrappingProfFinished] = useState(false);
    const [scrappedPage , setScrappedPage] = useState("")
    const [apprentusData , setApprentusData] = useState([]);
    const [profparticulierData , setProfparticulierData] = useState([]);

    //---------------------------------------------------------------------------------------------------------------------

    const scrappApprentus = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/api/scrap-apprentus/",
            {
                method:"GET",
                headers:{ "Content-Type": "application/json"},
            }
        )
        const data = await response.json();
        setApprentusData(data);
        setIsApprentusScrapping(false);
        setScrappingApprentusFinished(true)
    }

    // useEffect(() => {
    //     scrappApprentus();      
    // },[isApprentusScrapping])


    //-----------------------------------------------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------------------------------------------

    const scrappProfparticulier = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/api/scrap-profparticulier/",
            {
                method:"GET",
                headers:{ "Content-Type": "application/json"},
            }
        )
        const data = await response.json();
        setProfparticulierData(data.data);
        setIsProfScrapping(false);
        setScrappingProfFinished(true)
    }

    // useEffect(() => {
    //     scrappProfparticulier();      
    // },[isProfScrapping])


    //-----------------------------------------------------------------------------------------------------------------------

    console.log(apprentusData);
 
    return(
        <section
        className="w-full flex flex-col gap-10 pt-5"
        >
            <div
            className="w-1/2 self-center"
            >
                <h1
                className="text-center text-lg font-medium"
                >Autant qu'administrateur du site vous avez le prévilège d'éffectuer ces deux opérations</h1>
            </div>
            <div
            className="w-full p-3 m-0 h-[40vh] flex flex-row gap-[20vh] items-center justify-center"
            >
                
                <button
                className="text-2xl bg-gradient-to-r from-sky-600 to-sky-400 p-7
                rounded-xl shadow-lg font-semibold text-gray-200 hover:text-gray-300 ease-in-out duration-300
                "

                onClick={async () => {
                    setIsApprentusScrapping(true);
                    setScrappedPage("Apprentus.dz");
                    await scrappApprentus();
                }}
                >Scrap a partir du site Apprentus.dz</button>
                <button
                className="text-2xl bg-gradient-to-r from-sky-600 to-sky-400 p-7
                rounded-xl shadow-lg font-semibold text-gray-200 hover:text-gray-300 ease-in-out duration-300
                "
                onClick={async () => {
                    setIsProfScrapping(true)
                    setScrappedPage("Profparticulier.dz");
                    await scrappProfparticulier();
                }}
                >Scrap a partir de Profparticulier.dz</button>

            </div>
            {(isProfScrapping || isApprentusScrapping) && (
                <div
                className="w-full p-3 m-0 h-[40vh] flex sm:flex-row sm:gap-[20vh] flex-col gap-8 items-center justify-center"
                >
                    <div
                    className="rounded-full w-[50px] h-[50px] border-8 border-gray-400 border-b-sky-800 animate-spin"
                    ></div>
                    <p
                    className="text-center"
                    >Scrapping from page {scrappedPage} this may take a while</p>
                </div>
            )}
            {scrappingProfFininshed && (
                <div
                className="w-full p-5 pt-8 flex flex-col items-center gap-4"
                >
                    <h1
                    className="text-2xl text-sky-800 font-semibold text-center"
                    >
                        Les données collectées à partir du site profparticulier.dz
                    </h1>

                    <div
                    className="w-full grid gap-3 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1"
                    >
                        {profparticulierData.map((announce,key) => {return (
                            <div
                            id={key}
                            className="w-full h-auto min-h-[250px] border-2 rounded-xl border-sky-800 shadow-inner p-4"
                            >
                                <div
                                className="flex flex-col gap-2"
                                >

                                    <p> <span className="font-medium text-sky-800">Annouceur:</span> {announce.nomProf}</p>
                                    <p> <span className="font-medium text-sky-800">Titre:</span> {announce.titre}</p>
                                    <p> <span className="font-medium text-sky-800">Description:</span> {announce.description}</p>
                                    <p> <span className="font-medium text-sky-800">Module:</span> {announce.module}</p>
                                    <p> <span className="font-medium text-sky-800">Ville:</span> {announce.ville}</p>
                                    <p> <span className="font-medium text-sky-800">Prix:</span> {announce.prix}</p>
                                    <p> <span className="font-medium text-sky-800">Code Postal:</span> {announce.code_postal}</p>
                                </div>

                            </div>
                        )})}
                        
                    </div>
                </div>
            )}

            {scrappingApprentusFininshed  && (
                <div
                className="w-full p-5 pt-8 flex flex-col items-center gap-4"
                >
                    <h1
                    className="text-2xl text-sky-800 font-semibold text-center"
                    >
                        Les données collectées à partir du site apprentus.dz
                    </h1>

                    <div
                    className="w-full grid gap-3 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1"
                    >
                        {apprentusData.map((announce,key) => {return (
                            <div
                            id={key}
                            className="w-full h-auto min-h-[250px] border-2 rounded-xl border-sky-800 shadow-inner p-4"
                            >
                                <div
                                className="flex flex-col gap-2"
                                >

                                    <p> <span className="font-medium text-sky-800">Annouceur:</span> {announce.nomProf}</p>
                                    <p> <span className="font-medium text-sky-800">Titre:</span> {announce.titre}</p>
                                    <p> <span className="font-medium text-sky-800">Description:</span> {announce.description}</p>
                                    <p> <span className="font-medium text-sky-800">Module:</span> {announce.module}</p>
                                    <p> <span className="font-medium text-sky-800">Ville:</span> {announce.ville}</p>
                                    <p> <span className="font-medium text-sky-800">Prix:</span> {announce.prix}</p>
                                    <p> <span className="font-medium text-sky-800">Code Postal:</span> {announce.code_postal}</p>
                                    <div className="w-full flex justify-end">
                                    <img src={announce.Urlimage}
                                    className="slef-end w-[100px] h-[100px]"/>
                                    </div>
                                </div>

                            </div>
                        )})}
                        
                    </div>
                </div>

            ) 
                
            }

        </section>
    )
}
export default Admin;