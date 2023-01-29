import UserNavbar from "./UserNavbar";
import img_1 from "../assets/users/img_01.jpg";
import {FiEdit3} from "react-icons/fi"


const Account = () => {
    const user = {
        name:"Tarek ICHALALEN" , 
        img:img_1 , 
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
    }

    return(
        <section
        className="w-full min-h-[150vh] flex flex-col gap-12 bg-white"
        >
            <UserNavbar />
            <div
            className="w-full flex flex-col items-center gap-8 py-[15vh] p-5"
            >
                <img src={img_1} alt="userImage" 
                className="rounded-full sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] shadow-xl"
                />
                <h1 className="text-2xl font-semibold text-sky-800 flex flex-row gap-3 items-center"> {user.name} <button><FiEdit3 /></button> </h1>
                <p className="text-center font-normal text-base w-[400px] flex flex-row gap-3 items-end"> {user.bio} <button className="text-2xl"><FiEdit3 /></button> </p>
            </div>

        </section>
    )
}

export default Account;