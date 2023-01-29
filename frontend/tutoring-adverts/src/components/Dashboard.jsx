import {AiOutlineDown , AiOutlineUp} from "react-icons/ai"
import {BiSearch} from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import img_1 from "../assets/users/img_01.jpg"
import img_2 from "../assets/users/img_02.jpg"
import img_3 from "../assets/users/img_03.jpg"
import UserNavbar from "./UserNavbar";


const Dashboard = () => {

    const popularUsers = [
        {name:"Tarek Ichalalen" , img:img_1 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
        {name:"Jhon Doe" , img:img_2 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
        {name:"Massyl Hamar" , img:img_3 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
        {name:"Yanis Beldjilali" , img:img_2 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
    ]

    const [advancedSearch , setAdvancedSearch] = useState(false);

    const [previousUser , setPreviousUser] = useState(popularUsers[-1]);
    const [currentUser , setCurrentUser] = useState(popularUsers[0]);
    const [nextUser , setNextUser] = useState(popularUsers[1]); 

    
    const [previousIndex , setPreviousIndex] = useState(0);
    const [slideIndex , setSlideIndex] = useState(1);
    const [nextIndex , setNextIndex] = useState(2);

    const [changed , setChanged] = useState(false);

//-------------------------------------------------------------------------------------------------------------------------

    // const getWilayas = async () => {
    //     const response = await fetch(
    //         "https://github.com/othmanus/algeria-cities.git",
    //         {
    //             method:"GET",
    //             headers:{"Content-Type": "json"},
    //         }
    //     )
    //     const cities = await response.json();
    //     console.log(cities);
    // }

    // useEffect(() => {
    //     getWilayas();
    // },[])

//-------------------------------------------------------------------------------------------------------------------------
    
    
    useEffect(() => {
        const timer = setInterval(() => {
            setPreviousIndex(i => (i+1) % popularUsers.length)
            setSlideIndex(i => (i+1) % popularUsers.length);
            setNextIndex(i => (i+1) % popularUsers.length)
        }, 8000);
        
        return () => clearInterval(timer);
    },[])

    useEffect(() =>{
        const timer=setInterval(() => {
            setChanged(true);
        }, 7100);

        setPreviousUser(popularUsers[previousIndex]);
        setCurrentUser(popularUsers[slideIndex]);
        setNextUser(popularUsers[nextIndex]);
        setChanged(false); 

        return () => clearInterval(timer);
    }
    ,[slideIndex])
    return(
        <section
        className="w-full min-h-[150vh] p-5 flex flex-col gap-12"
        >
            <UserNavbar/>

{/*----------------------------------------------------------------------------------------------------------------------------*/}

            <div className="w-full min-h-[100vh]  mt-[25vh] flex flex-col gap-12">
                <div
                className="w-full h-[20vh] flex flex-row justify-center"
                >
                    <div className="w-2/3 flex flex-row gap-0 items-center h-full ">
                        <button 
                        className="h-[8vh] w-[8vh] bg-sky-300 p-3 flex items-center justify-center
                        text-3xl rounded-l-3xl
                        "
                        ><BiSearch/></button>
                        <input 
                        type="text"
                        className="border w-full p-3 border-l-0 rounded-r-3xl border-sky-600 h-[8vh]"
                        placeholder="Recherchez des annonces de cours "
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    {!advancedSearch && (
                        <button
                        className="bg-gradient-to-r from-sky-400 to-sky-300 p-3 font-medium rounded-lg shadow-lg
                        flex items-end flex-row gap-2 h-[8vh]
                        "
                        onClick={() => setAdvancedSearch(true)}
                        >Recherche Avancée <AiOutlineDown/></button>
                    )}
                    {advancedSearch && (
                        <div className="w-full">
                            <div
                            className="sm:grid sm:grid-cols-2 flex flex-col  gap-2 w-full items-start"
                            >
                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >
                                    <label 
                                    className="font-medium"
                                    >Wilaya:</label>
                                    <select
                                    className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                    placeholder="Wilaya"
                                    ></select>
                                </div>

                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >
                                    <label 
                                    className="font-medium"
                                    >Commune:</label>
                                    <select
                                    className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                    placeholder="Commune"
                                    ></select>
                                </div>

                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >   
                                    <label
                                    className="font-medium"
                                    >Publié entre : </label>
                                    <input type="date"
                                    className="h-[8vh] w-1/2 border border-sky-600 rounded-xl self-center"
                                    />
                                </div>
                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >   
                                    <label
                                    className="font-medium"
                                    >et : </label>
                                    <input type="date"
                                    className="h-[8vh] w-1/2 border border-sky-600 rounded-xl self-center"
                                    />
                                </div>
                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >
                                    <label 
                                    className="font-medium"
                                    >Déroulement:</label>
                                    <span className="flex flex-row gap-1 items-center"><input type="checkbox" value="oneline"/><label>En ligne</label></span>
                                    <span className="flex flex-row gap-1 items-center"><input type="checkbox" value="offline"/><label>En présentiel</label></span>
                                </div>

                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >
                                    <label 
                                    className="font-medium"
                                    >Matière:</label>
                                    <select
                                    className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                    placeholder="Matière"
                                    ></select>
                                </div>

                                <div
                                className="w-full flex flex-row justify-center items-center py-3 
                                gap-4
                                "
                                >
                                    <label 
                                    className="font-medium"
                                    >Niveau:</label>
                                    <select
                                    className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                    placeholder="Niveau"
                                    ></select>
                                </div>

                                
                                        
                            </div>
                            <div className="w-full flex justify-center mt-7">
                                <button className="bg-gradient-to-r from-sky-400 to-sky-300 p-3 font-medium rounded-lg shadow-lg
                                flex items-end flex-row gap-2"
                                type="button"
                                onClick={() => setAdvancedSearch(false)}
                                >
                                Recherche Simple <AiOutlineUp />
                                </button>
                            </div> 
                        </div>


                    )}
                </div>

                <div
                className="w-full flex justify-center mt-10"
                >
                    <div 
                    className="w-5/6 h-[2px] self-center bg-gradient-to-r from-sky-700 to-sky-400
                    "></div>
                </div>
                
                <div
                className="w-full flex flex-col gap-8"
                >
                    <div className="flex justify-center w-full">
                        <h1
                        className="text-[5vh] font-semibold text-sky-800"
                        >Nos Meilleurs Profs </h1>
                    </div>
                    <div className="w-full min-h-[80vh] mb-[20vh] flex flex-row gap-12 px-[10vh]">
                            {(previousUser) && (
                                <div
                                className={`w-[400px] h-[330px]  flex-col items-center gap-4 ease-in-out duration-1000
                                hidden laptop:flex
                                ${changed ? "opacity-0" :"opacity-70"}
                                `}
                                >
                                <img src={previousUser.img}
                                className={`rounded-full w-[160px] h-[160px] shadow-xl
                                `}
                                />
                                    <h1
                                    className="text-xl font-medium text-sky-800"
                                    >{previousUser.name}</h1>
                                    <p
                                    className="text-gray-700 text-center"
                                    >
                                        {previousUser.bio}
                                    </p>
                                </div>
                            )}

                            {(currentUser) && (
                                <div  className={`ease-in-out duration-1000 w-[700px] h-[700px] 
                                flex flex-col gap-4 items-center
                                ${changed ? "opacity-0" :"opacity-100"}
                                `}>
                                    <img src={currentUser.img}
                                    className={`rounded-full shadow-xl mt-7 w-[400px] h-[400px]
                                    `}
                                    />
                                    <h1
                                    className="text-2xl font-medium text-sky-800"
                                    >{currentUser.name}</h1>
                                    <p
                                    className="text-gray-700 text-center text-xl "
                                    >
                                        {currentUser.bio}
                                    </p>
                                    
                                </div>
                            )}

                            {(nextUser) && (
                                <div className={`w-[400px] h-[330px] flex-col items-center gap-4 ease-in-out duration-1000
                                hidden laptop:flex
                                ${changed ? "opacity-0" :"opacity-70"}`}>
                                    <img src={nextUser.img}
                                    className={`rounded-full w-[160px] h-[160px] shadow-xl
                                    `}
                                    />

                                    <h1
                                    className="text-xl font-medium text-sky-800"
                                    >{nextUser.name}</h1>
                                    <p
                                    className="text-gray-700 text-center"
                                    >
                                        {nextUser.bio}
                                    </p>
                                </div>
                            )}

                    </div>
                </div>
            </div>

            


        </section>
    )
}

export default Dashboard