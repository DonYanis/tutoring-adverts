import {Formik} from "formik";
import * as yup from "yup";
import Dropzone from "react-dropzone"


// const registerSchema = yup.object().shape({
//     email
// })

const Register = () => {
    return (
        <section className="min-h-[150vh] grid sm:grid-cols-2 grid-cols-1 relative">
            <div
            className="w-1/6 h-[33vh] absolute top-0 z-0 rounded-br-full
            bg-gradient-to-r from-sky-800 to-sky-300 sm:block hidden
            "
            >
            </div>
            <div
            className="w-4/12 h-[70vh] absolute bottom-0 right-0 z-0 rounded-tl-full
            bg-gradient-to-r from-sky-800 to-sky-300 sm:block hidden 
            "
            >
            </div>

            <div 
            className="mt-[20vh] p-5 w-full flex flex-col items-center gap-7"
            >
                <h1 className="text-3xl font-bold text-sky-800 ">Register</h1>
            </div>

        </section>
    )
}

export default Register;