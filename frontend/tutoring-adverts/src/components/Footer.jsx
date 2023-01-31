import Contact from "./Contact";
import {FiSend} from "react-icons/fi"

const Footer = () => {
    return (
        <footer
        className="w-full bg-gray-900 text-gray-200 flex flex-col gap-7
        
        "
        >
            <div
            className="p-5 grid sm:grid-cols-2 grid-cols-1
            w-full h-full 
            "
            >
                <div
                className="flex flex-col gap-10 sm:flex-row sm:justify-between"
                >

                <div
                className="flex flex-col gap-8">
                    <h1 className="text-2xl font-medium">Trouver des profs: </h1>
                    <ul className="flex flex-col gap-8 pl-7 list-disc">
                        <li
                        className="cursor-pointer"
                        >Inscrivez vous</li>
                        <li
                        className="cursor-pointer"
                        >Connectez vous</li>
                        <li
                        className="cursor-pointer"
                        >En savoir plus</li>
                    </ul>
                </div>

                <div
                className="w-[90%] h-[1px] bg-gray-200 self-center sm:w-[1px] opacity-70 sm:h-full sm:self-start"
                ></div>
                </div>

                <div
                className="flex flex-col sm:flex-row sm:justify-between sm:pl-8 sm:mt-0 mt-7"
                >
                    <div
                    className="flex flex-col gap-8">
                        <h1 className="text-2xl font-medium">Devenir prof: </h1>
                        <ul className="flex flex-col gap-8 pl-7 list-disc">
                            <li
                            className="cursor-pointer"
                            >Inscrivez vous</li>
                            <li
                            className="cursor-pointer"
                            >Connectez vous</li>
                            <li
                            className="cursor-pointer"
                            >En savoir plus</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
            className="w-[90%] h-[1px] bg-gray-200 opacity-70 self-center"
            ></div>

            <div
            className="w-full flex flex-button sm:flex-row gap-7 jusitfy-center p-5"
            >
                <h1 
                className="w-[20vh]"
                >Contact Us: </h1>
                <form 
                className="flex flex-row gap-5 w-full"
                >
                    <textarea 
                    className="w-1/2 p-1 rounded-xl bg-gray-900 border-2 border-l-gray-400"
                    />
                    <button
                    className="text-3xl"
                    ><FiSend/></button>
                </form>
            </div>

            <div
            className="w-[90%] h-[1px] bg-gray-200 opacity-70 self-center"
            ></div>

            <Contact/>
        </footer>
    )
}

export default Footer;