import { useState } from "react";
import {FaBell} from "react-icons/fa";
import {AiOutlineDown} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import {ReactComponent as Logo} from "../assets/logo/logo.svg"

const UserNavbar = () => {
    const [isNotif , setIsNotif] = useState(true);
    const [anouncesHovered , setAnnouncesHovered] = useState(false);
    const [navbarToggled , setNavbarToggled] = useState(false);
    return (
        <nav
            className="fixed flex flex-row justify-between top-0 w-full bg-white p-0 z-40 items-center"
            >
                <div
                className={`text-gray-900 text-3xl cursor-pointer`}
                >
                    <Logo className="sm:w-[180px] sm:h-[80px] w-[120px] h-[50px]"/>
                </div>
                <div className="hidden laptop:block">
                    <ul
                    className="flex flex-row gap-12 text-base font-medium pt-3 pr-[10vh] items-center"
                    >
                        <a
                        href="/home/:id"
                        >
                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end"
                        >Explorer </li>
                        </a>


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
                            <a href="/add-offer/:id"><li className="ease-in-out hover:bg-sky-300 w-full p-1 rounded-xl hover:text-gray-800">Ajouter</li></a>
                            <a href="/my-offers/:id"><li className="ease-in-out hover:bg-sky-300 w-full p-1 rounded-xl hover:text-gray-800">Voir vos annonces</li></a>
                        </div>
                        </li>


                        <a href="/my-favorites/:id">
                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end "
                        >Favoris </li>
                        </a>
                        <a href="/chat/:id">
                        <li 
                        className="text-2xl cursor-pointer flex flex-row gap-1 px-3
                        items-end relative">
                        <FaBell />
                        <div className={`w-[8px] h-[8px] bg-red-500 rounded-full absolute
                        right-3 top-1
                        ${isNotif ? "block" : "hidden"}
                        `}>
                        </div></li>
                        </a>

                        <a href="/account/:id">
                            <li
                            className="cursor-pointer flex flex-row gap-1 px-3
                            items-end"
                            >Votre Compte</li>
                        </a>
                        
                        <li
                        className="cursor-pointer flex flex-row gap-1 px-3
                        items-end"
                        >Logout</li>
                    </ul>
                </div>


                {!navbarToggled && (
                    <button
                    className="sm:hidden text-[7vh] text-gray-800 p-2 mr-5 absolute right-0"
                    onClick={() => setNavbarToggled(true)}
                    > <GiHamburgerMenu/> </button>
                )}


            <div className={`w-full ease-in-out duration-500 sm:hidden flex bg-white shadow-inner rounded-b-lg h-full
            ${navbarToggled ? "h-[80vh] border-2": "h-0"}
            relative
            `}>
                <button
                className={`
                absolute left-2 top-2
                ${navbarToggled ? "block" : "hidden"}
                text-3xl
                `}
                onClick={() => setNavbarToggled(false)}
                ><IoMdClose /></button>
                {navbarToggled && (
                    <div 
                    className={`w-full h-full grid grid-cols-3 grid-rows-2 gap-3
                    ${navbarToggled ? "block" : "hidden"}
                    pt-[8vh]
                    text-gray-700
                    p-2
                    `}
                    >
                        <div className="w-full h-full flex flex-col items-center gap-3 ease-in-out duration-300 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300">Explorer</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center gap-3 ease-in-out duration-300 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300">Vos Annonces</h1>
                            <p className="cursor-pointer hover:text-sky-800 ease-in-out duration-300">Ajouter une Annonce</p>
                            <p className="cursor-pointer hover:text-sky-800 ease-in-out duration-300">Voir vos annonces</p>
                        </div>

                        <div className="w-full h-full flex flex-col items-center gap-3 ease-in-out duration-300 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300">Favories</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center gap-3 ease-in-out duration-300 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300">Notifications</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center gap-3 ease-in-out duration-300 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300">Votre Compte</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center gap-3 ease-in-out duration-300 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300">Logout</h1>
                        </div>
                    </div>

                )}
            </div>


            </nav>
    )
}

export default UserNavbar; 