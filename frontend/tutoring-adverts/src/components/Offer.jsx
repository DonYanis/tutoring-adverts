import UserNavbar from "./UserNavbar";
import img_1 from "../assets/offers/img_01.jpg";
import img_2 from "../assets/offers/img_02.jpg";
import img_3 from "../assets/offers/img_03.jpg";
import img_4 from "../assets/offers/img_04.jpg";
import { useState } from "react";
import {AiOutlineLeft,AiOutlineRight,AiOutlineMessage,AiOutlineFileAdd} from "react-icons/ai";
import { useEffect } from "react";
import {VscDebugBreakpointDataUnverified , VscDebugBreakpointData} from "react-icons/vsc"
import {FiSend , FiTrash2} from "react-icons/fi";


const Offer = () => {
    const images = [img_1,img_2,img_3,img_4];
    const [currentImage,setCurrentImage] = useState(images[0]);
    const [imagesIndex,setImagesIndex] = useState(0);
    const [contactVisible , setContactVisible] = useState(false);


    useEffect(() => {
        setCurrentImage(images[imagesIndex])
    },[imagesIndex])

    const incrementIndex = () => {
        if (imagesIndex < images.length-1){
            setImagesIndex(imagesIndex+1);
        }
        else if (imagesIndex === images.length-1) {
            setImagesIndex(0);
        }
    }

    const decrementIndex = () => {
        if (imagesIndex > 0) {
            setImagesIndex(imagesIndex-1);
        }
        else if (imagesIndex === 0){
            setImagesIndex(images.length-1);
        }
    }
    const address = 'akentas';
    const wilaya = "bejaia";
    const commune = "Feraoun"
    return (
        <section
        className="w-full min-h-[150vh] p-5 flex flex-col gap-12 pb-[30vh]"
        >
            <UserNavbar/>
            <div
            className="w-full flex flex-col gap-8 pt-10 p-3"
            >
                <div
                className="flex flex-col sm:flex-row gap-5 mt-8"
                >
                    <div
                    className="sm:w-5/12 w-full flex flex-col gap-5 items-center"
                    >
                        <div className="w-11/12 relative">
                            <img
                            src={currentImage}
                            className="w-full rounded-lg shadow-lg relative h-[50vh]"
                            />
                            <button className="absolute bg-white bg-opacity-40 text-2xl bottom-1/4 left-0 p-3 rounded-r-full
                            ease-in-out duration-300 hover:bg-opacity-70"
                            onClick={() => {decrementIndex()}}
                            ><AiOutlineLeft/></button>

                            <button className="absolute bg-white bg-opacity-40 text-2xl bottom-1/4 right-0 p-3 rounded-l-full
                            ease-in-out duration-300 hover:bg-opacity-70"
                            onClick={() => {incrementIndex()}}
                            ><AiOutlineRight/></button>
                        </div>
                        <div className="flex text-gray-800">
                            {images.map((image,index) => {
                                if (index === imagesIndex){
                                    return(
                                        <VscDebugBreakpointData />
                                    )
                                }
                                return <VscDebugBreakpointDataUnverified/>
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-7/12">
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Offert par:  </span>Roberto Carlos</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Matière:  </span>Mathématique</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Déroulement:  </span>En présentiel</h1>
                        <h1 className="text-lg"><span className="text-sky-800 font-medium text-xl">Description:  </span>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever 
                        since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book.</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Tarif/heur:  </span>1000 DA</h1>
                    </div>
                </div>

                <div
                className="flex flex-col sm:flex-row-reverse gap-5 mt-8 min-h-[70vh]"
                >
                    {/* GOOGLE MAPS API */}
                    <div className="sm:w-7/12 bg-gray-300 w-full h-[70vh] border-2 border-sky-800 rounded-lg border-dashed">
                    <iframe width="100%" height="100%" id="gmap_canvas" src={`https://maps.google.com/maps?q=${address}%20${commune},%20${wilaya}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>

                    <div className="flex flex-col gap-4 sm:w-5/12 w-full">
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Wilaya:  </span>Vgayeth</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Commune:  </span>Sidi Hmed</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Adresse offreur:  </span>Derguina</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Email:  </span>ichalalentarek@gmail.com</h1>
                        <h1 className="text-xl"><span className="text-sky-800 font-medium ">Téléphone:  </span>06 00 00 00 00</h1>

                        {!contactVisible && (
                            <button
                            className="mt-8 bg-gradient-to-tr from-sky-800 to-sky-500 p-2 text-gray-200 flex flex-row gap-2 self-end
                            items-center justify-center font-medium rounded-lg shadow-lg
                            "
                            onClick={() => setContactVisible(true)}
                            > <AiOutlineMessage/> Envoyer un message</button>
                        )}
                        {contactVisible && (
                            <form
                            className="mt-8 w-full"
                            >
                                <textarea 
                                className="border border-sky-800 rounded-xl w-full p-3"
                                />
                                <div
                                className="flex flex-row w-full justify-end p-4 gap-10 "
                                >
                                    <button 
                                    type="button"
                                    className="text-2xl text-red-600"
                                    ><FiTrash2/></button>
                                    <button
                                    className="text-2xl text-sky-800"
                                    ><FiSend/></button>
                                </div>
                            </form>
                        )}
                        <button
                        className="flex flex-row gap-3 items-center justify-center self-end mt-7 bg-red-400
                        rounded-lg p-2 text-gray-200 font-medium
                        "
                        ><AiOutlineFileAdd/> Ajouter aux favories</button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Offer