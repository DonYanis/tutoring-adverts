import { useState } from "react"

const Navbar = (bgColor) => {
    const [aboutUsHovered , setAboutUsHovered] = useState(false);
    const [contactUsHovered , setContactUsHovered] = useState(false);
    const [loginHovered , setLoginHovered] = useState(false);
    const [professionalsHovered , setProfessionalsHovered] = useState(false);

    return (
        <nav
        className={`w-full flex justify-between bg-${bgColor}`}
        >
            <div
            className="h-[15vh] text-orange-100
            p-5 text-3xl font-semibold laptop:w-[20vh] w-0 cursor-pointer"
            >
                LOGO
            </div>
            <div
            className="w-1/2 p-4 flex justify-around"
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
        </nav>
    )
}

export default Navbar