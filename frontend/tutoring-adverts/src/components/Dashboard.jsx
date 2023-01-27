import {FaBell} from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai"
import {BiSearch} from "react-icons/bi";
import { useState } from "react";

const Dashboard = () => {

    const [isNotif , setIsNotif] = useState(true);
    const [anouncesHovered , setAnnouncesHovered] = useState(false);
    const [advancedSearch , setAdvancedSearch] = useState(false);

    return(
        <section
        className="w-full min-h-[150vh] p-5 flex flex-col gap-12"
        >
            <nav
            className="fixed flex flex-row justify-between top-0 w-full pt-2 bg-white"
            >
                <div
                className={`h-[10vh] text-gray-900
                p-2 text-3xl font-semibold laptop:w-[20vh] w-0 cursor-pointer`}
                >
                    LOGO
                </div>
                <div>
                    <ul
                    className="flex flex-row gap-12 text-base font-medium pt-3 pr-[10vh]"
                    >
                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end"
                        >Explorer </li>


                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end relative"
                        onMouseOver={() => setAnnouncesHovered(true)}
                        onMouseLeave={() => setAnnouncesHovered(false)}
                        >Vos Annonces <AiOutlineDown/>
                        <div
                        className={` w-full absolute  border-2 shadow-inner
                        rounded-xl ease-in-out duration-300 flex flex-col gap-5 p-3 bg-sky-200
                        text-gray-500
                        ${anouncesHovered ? "h-[20vh] opacity-100 bottom-[-20vh]" :"h-0 opacity-0 bottom-[20vh]"}
                        `}
                        >
                            <li className="ease-in-out hover:bg-sky-300 w-full p-1 rounded-xl hover:text-gray-800">Ajouter</li>
                            <li className="ease-in-out hover:bg-sky-300 w-full p-1 rounded-xl hover:text-gray-800">Voir vos annonces</li>
                        </div>
                        </li>


                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end "
                        >Favoris </li>
                        <li 
                        className="text-2xl cursor-pointer flex flex-row gap-1 px-3
                        items-end relative">
                        <FaBell />
                        <div className={`w-[8px] h-[8px] bg-red-500 rounded-full absolute
                        right-3 top-1
                        ${isNotif ? "block" : "hidden"}
                        `}>
                        </div></li>

                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end"
                        >Votre Compte</li>
                        
                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end"
                        >Logout</li>
                    </ul>
                </div>
            </nav>

            <div className="w-full h-full  mt-[25vh]">
                <div
                className="w-full h-[20vh] flex flex-row justify-center "
                >
                    <div className="w-2/3 flex flex-row gap-0 items-center h-full ">
                        <button 
                        className="h-[8vh] w-[8vh] bg-sky-300 p-3 flex items-center justify-center
                        text-3xl rounded-l-3xl
                        "
                        ><BiSearch/></button>
                        <input 
                        type="text"
                        className="border w-full p-3 border-l-0 rounded-r-3xl border-sky-600"
                        placeholder="Recherchez des annonces de cours "
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    {!advancedSearch && (
                        <button
                        className="bg-gradient-to-r from-sky-400 to-sky-300 p-3 font-medium rounded-lg shadow-lg
                        flex items-end flex-row gap-2
                        "
                        onClick={() => setAdvancedSearch(true)}
                        >Recherche Avancée <AiOutlineDown/></button>
                    )}
                    {advancedSearch && (
                        <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full"
                        >
                            <div
                            className="w-full flex justify-center"
                            >
                                <select
                                className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                ></select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Dashboard