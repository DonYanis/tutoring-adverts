import UserNavbar from "./UserNavbar";
import img_1 from "../assets/users/img_01.jpg"
import img_2 from "../assets/users/img_02.jpg"
import img_3 from "../assets/users/img_03.jpg"
import { useState } from "react";
import { useEffect } from "react";
import {BiSend} from "react-icons/bi";


const Chat = () => {
    const [toggledChat , setToggledChat] = useState(null);
    const [chatBody , setChatBody] = useState(null)
    const salons = [
        {image:img_1 , name:"Tarek ICHALALEN", notified:true,id:1 },
        {image:img_2 , name:"Massyl HAMAR" , notified:false,id:2 },
        {image:img_3 , name:"NOUNOU" , notified:false,id:3 },
    ]
    const chats = [
        {id:1 , messages: [{received:false , value:"Lorem Ipsum is simply dummy text of the printing"},{received:true , value:"Lorem Ipsum is simply dummy text of the printing"},{received:false , value:"Lorem Ipsum is simply dummy text of the printing"}]},
        {id:2 , messages: [{received:false , value:"Lorem Ipsum is simply dummy text of the printing"},{received:true , value:"Lorem Ipsum is simply dummy text of the printing"},{received:true , value:"Lorem Ipsum is simply dummy text of the printing"},{received:false , value:"Lorem Ipsum is simply dummy text of the printing"}]},
        {id:3 , messages: [{received:false , value:"Lorem Ipsum is simply dummy text of the printing"},{received:false , value:"Lorem Ipsum is simply dummy text of the printing"}]},
    ]

    useEffect(() => {
        if (toggledChat !== null) {
            setChatBody(chats.find(chat => chat.id === toggledChat));
        }
    },[toggledChat])
    return (
        <section className="w-full min-h-[150vh] flex flex-col gap-12 pb-[30vh] p-5"
        >
            <UserNavbar />
            <div
            className="w-full h-full pt-[15vh] flex flex-col gap-8 items-center"
            >
                <h1
                className="text-2xl text-sky-800 font-semibold text-center"
                >Vos discussions</h1>
                <div
                className="flex flex-col gap-4 w-full laptop:w-2/3"
                >
                    {salons.map((salon,key) => {
                        return(
                            <div className="w-full rounded-lg flex flex-col">
                                <div
                                className={`w-full flex justify-between items-center px-6 py-3
                                shadow-inner cursor-pointer ease-in-out
                                duration-500 hover:bg-sky-100 rounded-lg
                                ${toggledChat === salon.id && "bg-sky-100"}
                                `}
                                onClick={() => {
                                    if (salon.id === toggledChat) {
                                        setToggledChat(null)
                                    }
                                    else{
                                        setToggledChat(salon.id)
                                    }
                                    
                                }}
                                >
                                    <div
                                    className="flex flex-row gap-3 w-full items-center 
                                    "
                                    >
                                        <img src={salon.image} 
                                        className="rounded-full w-[90px] h-[90px] shadow-xl"
                                        />
                                        <p 
                                        className={`font-medium 
                                        ${salon.notified ? "text-red-500" : "text-sky-800"}
                                        `}
                                        > {salon.name} </p>
                                        
                                    </div>
                                    {salon.notified && (
                                        <div
                                        className="w-[15px] h-[15px] rounded-full bg-red-500"
                                        ></div>
                                    )}
                                </div>
                                <div
                                className={`
                                flex flex-col gap-2 ease-in-out duration-300
                                ${toggledChat === salon.id ? "h-[40vh] border-2" :"h-0"}
                                `}
                                >
                                    {toggledChat === salon.id && (
                                        <div
                                        className="flex flex-col gap-3 p-2"
                                        >
                                            <div className="flex flex-col gap-2 w-full h-[25vh]
                                            overflow-y-scroll 
                                            scroll-smooth
                                            ">
                                                {chatBody && chatBody.messages.map((message , key) => (
                                                    <div
                                                    className={`
                                                    p-3  rounded-xl w-1/2
                                                    ${message.received ? "bg-sky-200 self-start" :"bg-gray-300 self-end"}
                                                    `}
                                                    >
                                                        <p>{message.value}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <div 
                                            className="w-full h-[8vh] flex flex-row gap-0"
                                            >
                                                <input
                                                className="w-full p-2 rounded-l-full border-2"
                                                ></input>
                                                <button
                                                className="w-[12vh] text-2xl bg-sky-500 text-gray-200 rounded-r-full flex items-center justify-center
                                                "
                                                ><BiSend/></button>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Chat;
