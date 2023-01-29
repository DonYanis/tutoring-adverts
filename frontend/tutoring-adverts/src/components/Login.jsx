import {FcGoogle} from "react-icons/fc";


const Login = () => {
    return (
        <section className="h-[150vh] grid sm:grid-cols-2 grid-cols-1">
            <div
            className="w-1/2 h-[100vh] absolute top-0 z-0 rounded-br-full
            bg-gradient-to-r from-sky-800 to-sky-300 sm:block hidden 
            "
            >
            </div>
            <div className="hidden sm:block"></div>
            <div className="mt-[20vh] p-5 w-full flex flex-col gap-7">
                <h1 className="text-3xl font-bold
                text-sky-800 text-center
                ">Se Connecter</h1>
                <button
                className="border p-2 shadow-inner text-xl flex
                items-center justify-center flex-row gap-3 border-sky-300 rounded-lg"
                ><span
                className="text-2xl"
                ><FcGoogle/></span> se connecter avec google</button>
                <p 
                className="self-center font-normal"
                >Vous n'avez pas de compte ? <a className="text-sky-800 cursor-pointer">inscrivez vous ici</a></p>
            </div>
        </section>
    )
}

export default Login