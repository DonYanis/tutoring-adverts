import UserNavbar from "./UserNavbar";
import { useState } from "react";
import {AiOutlineLeft,AiOutlineRight,AiOutlineMessage,AiOutlineFileAdd} from "react-icons/ai";
import { useEffect } from "react";
import {VscDebugBreakpointDataUnverified , VscDebugBreakpointData} from "react-icons/vsc";
import {FiSend , FiTrash2} from "react-icons/fi";
import {useParams} from "react-router-dom"


const Offer = () => {

    const offerId = useParams().id;


    const [images , setImages] = useState([]);
    const [currentImage,setCurrentImage] = useState('');
    const [imagesIndex,setImagesIndex] = useState(0);
    const [contactVisible , setContactVisible] = useState(false);
    const [announce , setAnnounce] = useState(null);

    
    
    //-----------------------------------------------------------------------------------------------------------------------------------

    const getAnnounce = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/adverts/${offerId}`,
            {
                method:"GET",
                headers: { "Content-Type": "application/json"},
            }
        )
        const data = await response.json();
        setAnnounce(data);

    }

    useEffect(() => {
        getAnnounce();
    },[]);


    //-----------------------------------------------------------------------------------------------------------------------------------

    const getImages = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/images/${offerId}`,
            {
                method:"GET",
                headers: { "Content-Type": "application/json"},
            }
        )
        const imagesFetched = await response.json();
        console.log(imagesFetched.data);
        setImages(imagesFetched.data);
    }

    useEffect(() => {
        getImages()
    },[])

    //-----------------------------------------------------------------------------------------------------------------------------------

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
    const address = 'Boukhalfa';
    const wilaya = "Bejaia";
    const commune = "Amizour"
    return (
        <section
        className="w-full min-h-[150vh] flex flex-col gap-12 pt-[15vh] pb-[30vh] p-5"
        >
            <UserNavbar/>
            {announce !== null && (
                <div
                className="w-full flex flex-col gap-8 pt-10 p-5"
                >
                    <div
                    className="flex flex-col sm:flex-row gap-5 mt-8"
                    >
                        <div
                        className="sm:w-5/12 w-full flex flex-col gap-5 items-center"
                        >
                            <div className="w-11/12 relative">
                                <img
                                src={`http://127.0.0.1:8000/${currentImage}`}
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
                                {images.length > 0 &&  images.map((image,index) => {
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
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Offert par:  </span>{announce.publisher.first_name} {announce.publisher.last_name}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Matière:  </span>{announce.theme}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Déroulement:  </span>{announce.type}</h1>
                            <h1 className="text-lg"><span className="text-sky-800 font-medium text-xl">Description:  </span>{announce.description}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Tarif/heur:  </span>{announce.tarif}</h1>
                        </div>
                    </div>
    
                    <div
                    className="flex flex-col sm:flex-row-reverse gap-5 mt-8 min-h-[70vh]"
                    >
                        {/* GOOGLE MAPS API */}
                        <div className="sm:w-7/12 bg-gray-300 w-full h-[70vh] border-2 border-sky-800 rounded-lg border-dashed">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            id="gmap_canvas" 
                            src={`https://maps.google.com/maps?q=${announce.address.name}%20${announce.address.city.name},%20${announce.wilaya}&t=&z=13&ie=UTF8&iwloc=&output=embed`} 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0">
                        </iframe>
                        </div>
    
                        <div className="flex flex-col gap-4 sm:w-5/12 w-full">
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Wilaya:  </span>{announce.wilaya}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Commune:  </span>{announce.address.city.name}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Adresse offreur:  </span>{announce.address.name}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Email:  </span>{announce.publisher.email}</h1>
                            <h1 className="text-xl"><span className="text-sky-800 font-medium ">Téléphone:  </span>{announce.publisher.phonenumber}</h1>
    
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
            )}
        </section>
    )
}

export default Offer