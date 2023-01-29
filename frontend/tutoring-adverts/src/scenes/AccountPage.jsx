import Account from "../components/Account";
import Contact from "../components/Contact";

const AccountPage = () => {
    return(
        <section className="w-full h-full relative">
            <Account />
            <div className="absolute bottom-0 w-full"><Contact  /></div>
        </section>
    )
}

export default AccountPage;