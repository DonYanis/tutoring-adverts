import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Login from "../components/Login"

const LoginPage = () => {
    return(
        <section className="relative w-full min-h-[100vh]">
            
            <Login />
            

            <div className="absolute bottom-0 w-full"><Contact  /></div>
        </section>
    )
}

export default LoginPage ; 