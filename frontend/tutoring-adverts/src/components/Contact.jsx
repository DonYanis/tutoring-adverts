import {FiTwitter ,FiFacebook ,FiInstagram} from "react-icons/fi"
import {AiOutlineCopyright , AiOutlineMail} from "react-icons/ai"

const Contact = () => {
    return(
        <div
        className="w-full min-h-[20vh] text-gray-200 bg-gray-900 flex gap-7 sm:gap-0 sm:justify-between sm:flex-row flex-col
        p-5
        "
        >
            <div className="flex flex-row gap-4 items-center cursor-pointer">
            <span
            className="text-3xl"
            ><AiOutlineMail/></span>
            <h1>ichalalentarek@gmail.com</h1>
            </div>


            <div
            className="flex flex-row gap-6 items-center cursor-pointer
            text-2xl
            "
            >
                <span
                className="flex flex-row gap-1 items-center"
                ><AiOutlineCopyright/> <span className="text-xl">Website</span> </span>
                <FiFacebook/>
                <FiTwitter/>
                <FiInstagram/>
            </div>
        </div>
    )
}

export default Contact;