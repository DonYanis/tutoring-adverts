import { useState } from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdClose} from "react-icons/io"
import {AiOutlineInfoCircle} from "react-icons/ai";
import {FiLogIn,FiSend} from "react-icons/fi";
import {FaChalkboardTeacher} from "react-icons/fa";


const Navbar = (logoColor) => {
    const [aboutUsHovered , setAboutUsHovered] = useState(false);
    const [contactUsHovered , setContactUsHovered] = useState(false);
    const [loginHovered , setLoginHovered] = useState(false);
    const [professionalsHovered , setProfessionalsHovered] = useState(false);
    const [navbarBgHidden , setNavbarBgHidden] = useState(true);
    const [navbarToggled  , setNavbarToggled] = useState(false); 

    window.addEventListener("scroll" , () => setNavbarBgHidden(false));
    return (
        <nav
        className={`w-full flex justify-between z-40 top-0 fixed bg-opacity-70
        right-0 left-0
         ${navbarBgHidden ? "" :"bg-white"}
        `}
        >
            <div
            className={`h-[10vh] 
            p-2 text-3xl font-semibold laptop:w-[20vh] w-0 cursor-pointer 
            ${navbarBgHidden ? `text-${logoColor}` : "text-gray-900"}`}
            >
                LOGO
            </div>
            <div
            className="w-1/2 p-4 justify-around sm:flex hidden"
            >
                <li
                className="list-none text-lg cursor-pointer hover:text-red-500
                ease-in-out duration-300 font-medium
                "
                onMouseOver={() => setAboutUsHovered(true)}
                onMouseLeave={() => setAboutUsHovered(false)}
                >
                    About us
                    <div
                    className={`bg-red-500 h-[2px] ease-in-out duration-500
                    ${aboutUsHovered ? "w-full" : "w-0"}
                    `}
                    >

                    </div>
                </li>

                <li
                className="list-none text-lg cursor-pointer hover:text-red-500
                ease-in-out duration-300 font-medium
                "
                onMouseOver={() => setLoginHovered(true)}
                onMouseLeave={() => setLoginHovered(false)}
                >
                    Login
                    <div
                    className={`bg-red-500 h-[2px] ease-in-out duration-500
                    ${loginHovered ? "w-full" : "w-0"}
                    `}
                    >

                    </div>
                </li>


                <li
                className="list-none text-lg cursor-pointer hover:text-red-500
                ease-in-out duration-300 font-medium
                "
                onMouseOver={() => setProfessionalsHovered(true)}
                onMouseLeave={() => setProfessionalsHovered(false)}
                >
                    Professionals
                    <div
                    className={`bg-red-500 h-[2px] ease-in-out duration-500
                    ${professionalsHovered ? "w-full" : "w-0"}
                    `}
                    >

                    </div>
                </li>

                <li
                className="list-none text-lg cursor-pointer hover:text-red-500
                ease-in-out duration-300 font-medium
                "
                onMouseOver={() => setContactUsHovered(true)}
                onMouseLeave={() => setContactUsHovered(false)}
                >
                    Contact us
                    <div
                    className={`bg-red-500 h-[2px] ease-in-out duration-500
                    ${contactUsHovered ? "w-full" : "w-0"}
                    `}
                    >

                    </div>
                </li>

            </div>
            {!navbarToggled && (
                <button 
                className="sm:hidden text-[7vh] text-gray-800 p-2 mr-4 absolute right-0" 
                onClick={() => setNavbarToggled(true)}
                >
                    <GiHamburgerMenu />
                </button>
            )}
            
            {/* TOGGLED NAVBAR */}

            <div className={`w-full ease-in-out duration-500 sm:hidden flex bg-white shadow-inner rounded-b-lg h-full
            ${navbarToggled ? "h-[100vh] border-2": "h-0"}
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
                    className={`w-full h-full grid grid-rows-4 gap-3
                    ${navbarToggled ? "block" : "hidden"}
                    pt-[8vh]
                    text-gray-700
                    p-2
                    `}
                    >
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300 flex flex-row gap-2 items-center"><AiOutlineInfoCircle/> About us</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300 flex flex-row gap-2 items-center"><FiLogIn/> Login</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300 flex flex-row gap-2 items-center"><FaChalkboardTeacher/> Professionals</h1>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 hover:bg-sky-100">
                            <h1 className="text-xl font-medium text-center cursor-pointer hover:text-red-500 ease-in-out duration-300 flex flex-row gap-2 items-center"> <FiSend/> Contact</h1>
                        </div>
                    </div>

                )}
            </div>

        </nav>
    )
}

export default Navbar