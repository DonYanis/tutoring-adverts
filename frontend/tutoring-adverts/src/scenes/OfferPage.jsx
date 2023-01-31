import Offer from "../components/Offer";
import Contact from "../components/Contact";

const OfferPage = () => {
    return (
        <section className="w-full h-full relative">
            <Offer/>
            <div className="absolute bottom-0 w-full"><Contact  /></div>
        </section>
    )
}

export default OfferPage;