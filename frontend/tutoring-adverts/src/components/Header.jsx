import { useState , useEffect } from "react";
import header from "../assets/header/header.png"
import Navbar from "./Navbar";
import {VscDebugBreakpointData , VscDebugBreakpointDataUnverified} from "react-icons/vsc"
import {AiOutlineDownCircle} from "react-icons/ai"


const Header = () => {

    const headerSubtitles = [
        "Trouvez les meilleurs profs pour les cours de soutien en Algerie",
        "Aidez vos enfants à décrocher leurs brevets avec les meilleurs profs",
        "Devenez l'un de nos associés en s'inscrivant avec un compte professionnel",
    ]

    const [subtitle , setSubtitle] = useState(headerSubtitles[0]);
    const [slideIndex , setSlideIndex] = useState(0)
    const [changed , setChanged] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex( i => (i+1) % headerSubtitles.length);
        }, 7000);
        
        return () => clearInterval(timer);
    },[])

    useEffect(() =>{
        const timer=setInterval(() => {
            setChanged(true);
        }, 6000);
        setSubtitle(headerSubtitles[slideIndex]);
        setChanged(false);
        return () => clearInterval(timer);
    }
    ,[slideIndex])
    return (
        <header
        className={`
        w-full h-[100vh]
        bg-gradient-to-r from-sky-800 to-sky-300
        flex flex-row
        relative
        `}
        >
            <Navbar/>
            <img src={header} 
            alt="header"
            className="w-[120vh] h-[85%] ml-14 mt-9 z-30 rounded-2xl bottom-0 absolute 
            laptop:block hidden
            "
            />
            <div
            className=" w-3/4 h-[120vh] rounded-tl-full 
            absolute left-1/4 bottom-0 bg-white self-start
            "
            >
                <h1
                className={`text-[7vh] text-gray-900 w-[55vh] laptop:ml-[50vh] laptop:mt-[25%] mt-[50%] font-medium ease-in-out duration-500 
                ${changed ? "opacity-0 translate-x-[40px]" : "opacity-100 translate-x-0"}`}
                >
                    {subtitle}

                    <div
                className="text-[2vh] text-gray-900 w-full font-medium
                flex flex-row mt-5
                "
                >
                    {headerSubtitles.map((subtitle,index) => {
                        if(index === slideIndex){
                            return <VscDebugBreakpointData />
                        }
                        
                        return <VscDebugBreakpointDataUnverified/>
                    
                    })}
                </div>
                </h1>
                
                <a
                className="text-gray-900 absolute bottom-[6vh] laptop:left-[60vh] left-1/2
                text-xl font-medium "
                ><span className="cursor-pointer hover:text-red-500 flex flex-row items-center">Voir plus <AiOutlineDownCircle/></span></a>
            </div>
            
            
        </header>
    )
}

export default Header;