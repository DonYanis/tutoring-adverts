import image_1 from "../assets/info/img_02.jpg"
import image_2 from "../assets/info/img_03.jpg"
import image_3 from "../assets/info/img_04.jpg"
import image_4 from "../assets/info/img_05.png"
import image_7 from "../assets/info/img_08.png"
import image_6 from "../assets/info/img_07.jpg"
import {BsArrowReturnRight} from "react-icons/bs"
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {MdOutlineLocalOffer} from "react-icons/md"

const HomeBody = () => {

    const FeedBack = ({username , text}) => {
        return (
            <div className="flex flex-col bg-sky-100 max-w-[50vh] p-3 rounded-lg m-1">
                <h1 className="text-xl font-medium">{username}</h1>
                <span>
                    <FaQuoteLeft/>
                    <p>
                    {text}
                    </p>
                    <FaQuoteRight/>
                </span>
            </div>
        )
    }

    return (
        <section
        className="px-5 py-10 pt-[20vh] flex flex-col gap-[10vh] sm:px-11"
        >
{/*----------------------------------------------------------------------------------------------------------------------*/}
            <div className="flex flex-col items-center gap-5 sm:items-start">
                <h1
                className="text-3xl text-sky-800 font-semibold text-center sm:text-left"
                >Découvrez ce que nos profs ont à offrir</h1>
                <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                <p
                className="text-xl relative"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries
                    <br/>
                    <span 
                    className="absolute bottom-0 right-5 text-sky-800"
                    >
                        <a 
                        className="flex items-end flex-row gap-1"
                        href="">
                            Voir les offres <BsArrowReturnRight/></a>
                    </span>
                </p>
                <img src={image_1} alt="image_1"
                className="w-[70vh] rounded-xl shadow-md"
                />
                </div>
            </div>

{/*----------------------------------------------------------------------------------------------------------------------*/}
            <div className="flex flex-col items-center gap-5 sm:items-start">
                <h1
                className="text-3xl text-sky-800 font-semibold text-center sm:text-left"
                >Pour les parents</h1>
                <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                <img src={image_2} alt="image_2"
                className="w-[70vh] rounded-xl shadow-md"
                />
                <p
                className="text-xl relative"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries
                    <br/>
                    <span 
                    className="absolute bottom-0 right-5 text-sky-800"
                    >
                        <a 
                        className="flex items-end flex-row gap-1"
                        href="">
                            Connectez vous<BsArrowReturnRight/></a>
                    </span>
                    </p>
                </div>
            </div>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <div className="flex flex-col items-center gap-5 sm:items-start">
                <h1
                className="text-3xl text-sky-800 font-semibold text-center sm:text-left"
                >Pour les étudiants</h1>
                <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                <p
                className="text-xl relative"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries
                    <br/>
                    <span 
                    className="absolute bottom-0 right-5 text-sky-800"
                    >
                        <a 
                        className="flex items-end flex-row gap-1"
                        href="">
                            Voir les offres <BsArrowReturnRight/></a>
                    </span>
                </p>
                <img src={image_3} alt="image_3"
                className="w-[70vh] rounded-xl shadow-md"
                />
                </div>
            </div>

{/*----------------------------------------------------------------------------------------------------------------------*/}

            <div className="flex flex-col items-center gap-5 sm:items-start">
                <h1
                className="text-3xl text-sky-800 font-semibold text-center sm:text-left"
                >Proposez vos services autant que prof</h1>
                <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                <img src={image_6} alt="image_6"
                className="w-[70vh] rounded-xl shadow-md"
                />
                <p
                className="text-xl relative"
                >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries
                    <br/>
                    <span 
                    className="absolute bottom-0 right-5 text-sky-800"
                    >
                        <a 
                        className="flex items-end flex-row gap-1"
                        href="">
                            Connectez vous <BsArrowReturnRight/></a>
                    </span>
                </p>
                </div>
            </div>

{/*----------------------------------------------------------------------------------------------------------------------*/}
{/*----------------------------------------------------------------------------------------------------------------------*/}


{/*----------------------------------------------------------------------------------------------------------------------*/}
        <div
        className="min-h-[55vh] w-full rounded-lg flex sm:flex-row flex-col gap-4 cursor-pointer
        bg-gradient-to-r from-sky-800 to-sky-400"
        >
            <div
            className="sm:w-[500px] w-full h-full flex justify-center"
            >
                <img src={image_4} alt="" 
                className="w-[400px]"/>
            </div>
            <div
            className="w-full flex flex-col gap-5 p-6"
            >
                <h1
                className="text-gray-100 text-3xl text-center sm:text-start"
                >Inscrivez vous comme étudiant </h1>
                <p 
                className="text-gray-300 text-xl"
                >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries 
                </p>
            </div>
        </div>
{/*----------------------------------------------------------------------------------------------------------------------*/}

        <div
        className="min-h-[55vh] w-ful rounded-lg flex sm:flex-row flex-col gap-4 cursor-pointer
        bg-gradient-to-r from-sky-800 to-sky-400"
        >
            <div
            className="sm:w-[500px] w-full h-full flex justify-center"
            >
                <img src={image_7} alt="" 
                className="w-[400px]"/>
            </div>
            <div
            className="w-full flex flex-col gap-5 p-6"
            >
                <h1
                className="text-gray-100 text-3xl text-center sm:text-start"
                >Inscrivez vous comme professionnel </h1>
                <p 
                className="text-gray-300 text-xl"
                >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries 
                </p>
            </div>
        </div>
{/*----------------------------------------------------------------------------------------------------------------------*/}
{/*----------------------------------------------------------------------------------------------------------------------*/}

        <div
        className="flex flex-col gap-7"
        >  
            <h1
            className="text-3xl font-semibold text-sky-800"
            >FeedBacks des utilisateurs </h1>

            <div
            className="sm:flex self-center sm:self-start"
            >
                <FeedBack username="tarek" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, has been the industry's standard dummy text ever since the 1500" />
                <FeedBack username="tarek" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's ," />
                <FeedBack username="tarek" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since" />
                <FeedBack username="tarek" text="Loremxt of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
                <FeedBack username="tarek" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
                <FeedBack username="tarek" text="Lorem Ipsum is simply dummy text of the printing and typesettings," />

            </div>

        </div>

{/*----------------------------------------------------------------------------------------------------------------------*/}
{/*----------------------------------------------------------------------------------------------------------------------*/}
        <br />
        <br />
        <div
        className="grid grid-cols-1 sm:grid-cols-2"
        >
            <div className="w-full flex items-center justify-center">
                <div
                className="flex flex-col gap-4"
                >
                    <span className="text-[20vh] text-gray-700"><FiUsers /></span>
                    <h1
                    className="text-xl font-semibold text-center"
                    >5738 Utilisateurs</h1>
                </div>
                
            </div>


            <div className="w-full flex items-center justify-center">
            <div
                className="flex flex-col gap-4"
                >
                    <span className="text-[20vh] text-gray-700"><MdOutlineLocalOffer /></span>
                    <h1
                    className="text-xl font-semibold text-center"
                    >1642 Offres</h1>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />

        </section>
    )
}

export default HomeBody;