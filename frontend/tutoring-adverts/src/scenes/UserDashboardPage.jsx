import Dashboard from "../components/Dashboard";
import Contact from "../components/Contact";

const UserDashboardPage = () => {
    return (
        <section className="w-full h-full relative">
            <Dashboard />
            <div className="absolute bottom-0 w-full"><Contact  /></div>
        </section>
    )
}

export default UserDashboardPage;