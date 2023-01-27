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
    console.log(subtitle);
    console.log(slideIndex);
    return (
        <header
        className={`
        w-full h-[100vh]
        bg-gradient-to-r from-sky-800 to-sky-300
        flex flex-row
        relative
        `}
        >
            <div className="w-full z-40" ><Navbar bgColor="invesible"/></div>
            <img src={header} 
            alt="header"
            className="w-[120vh] h-[85%] ml-14 mt-9 sm:visible z-30 rounded-2xl bottom-0 absolute 
            "
            />
            <div
            className=" w-3/4 h-[120vh] rounded-tl-full 
            absolute right-0 bottom-0 bg-white
            "
            >
                <h1
                className={`text-[7vh] text-gray-900 w-[55vh] ml-[50vh] mt-[25%] font-medium ease-in-out duration-500 
                ${changed ? "opacity-0 translate-x-[40px]" : "opacity-100 translate-x-0"}`}
                >
                    {subtitle}
                </h1>
                <div
                className="text-[2vh] text-gray-900 w-[55vh] ml-[50vh] font-medium
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
                <a
                className="text-gray-900 absolute bottom-[6vh] right-[10vh] 
                text-xl font-medium "
                ><span className="cursor-pointer hover:text-red-500 flex flex-row items-center">See more <AiOutlineDownCircle/></span></a>
            </div>
            
            
        </header>
    )
}

export default Header;