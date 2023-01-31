import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Register from "../components/Register"

const RegisterPage = () => {
    return(
        <section className="relative w-full">
            <Register />
            

            <div className="absolute bottom-0 w-full"><Contact/></div>
        </section>
    )
}

export default RegisterPage ; 