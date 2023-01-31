import UserNavbar from "./UserNavbar";
import img_1 from "../assets/users/img_01.jpg";
import {FiEdit3} from "react-icons/fi";
import {useState , useEffect} from "react"



const Account = () => {
    const user = {
        name:"Tarek ICHALALEN" , 
        img:img_1 , 
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    }

    return(
        <section
        className="w-full min-h-[150vh] flex flex-col gap-12 bg-white py-[15vh] p-5"
        >
            <UserNavbar />
            <div
            className="w-full flex flex-col items-center gap-8 "
            >
                <img src={img_1} alt="userImage" 
                className="rounded-full sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] shadow-xl"
                />
                <h1 className="text-2xl font-semibold text-sky-800 flex flex-row gap-3 items-center"> {user.name} <button><FiEdit3 /></button> </h1>
                <p className="text-center font-normal text-base w-[400px] flex flex-row gap-3 items-end"> {user.bio} <button className="text-2xl"><FiEdit3 /></button> </p>
            </div>

            <div
            className="flex laptop:flex-row flex-col justify-evenly items-center h-[40vh] laptop:h-auto laptop:items-start"
            >
                <h1 className="text-xl font-semibold text-sky-800 flex flex-row gap-1">Willaya : <span className="text-lg text-gray-800 flex flex-row gap-2 items-end">Bejaia <FiEdit3/></span></h1>
                <h1 className="text-xl font-semibold text-sky-800 flex flex-row gap-1">Adresse : <span className="text-lg text-gray-800 flex flex-row gap-2 items-end">Boukhalfa - Amizour <FiEdit3/></span></h1>
                <h1 className="text-xl font-semibold text-sky-800 flex flex-row gap-1">Email : <span className="text-lg text-gray-800 flex flex-row gap-2 items-end">ichalalentarek@gmail.com <FiEdit3/></span></h1>
            </div>





        </section>
    )
}

export default Account;