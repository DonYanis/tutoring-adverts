import UserNavbar from "./UserNavbar";
import img_1 from "../assets/offers/img_01.jpg";
import img_2 from "../assets/offers/img_02.jpg";
import img_3 from "../assets/offers/img_03.jpg";
import img_4 from "../assets/offers/img_04.jpg";
import { useParams } from "react-router-dom"
import { useEffect ,useState} from "react";


const UserAnnounces = () => {

    const [announces, setAnnounces] = useState([]);
    const userId = useParams().id

    const getAnnounces = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/posted/${userId}`,
            {
                method:"GET",
                headers: { "Content-Type": "application/json"},
            }
        )
        const data = await response.json();
        setAnnounces(data);
    }

    useEffect(() => {
        getAnnounces();
    },[])

    if(announces.length > 0){
        console.log(announces);
    }

    const announce = {
        title:"Hamar cours",
        category:"Université",
        type:"offline",
        theme:"Informatique",    
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        tarif:1000,
        images:[img_1 , img_2 , img_3 , img_4],
        willaya: "Bejaia",
        commune: "Amizour",
        adress: "ESTIN"
    }

    return (
        <section
        className="w-full min-h-[150vh] flex flex-col gap-12 bg-white py-[15vh] p-5"
        >
            <UserNavbar />
            <div
            className="w-full "
            >
                <h1
                className="text-2xl text-sky-800 font-semibold"
                >Vos Offres</h1>
                <div
                className="w-full flex flex-col sm:grid laptop:grid-cols-3 sm:grid-cols-2 gap-5 p-4"
                >
                    {/*---------------------------------------------------------------------------------------------*/}
                    {announces !== undefined && announces.length > 0 && announces.map((announce,key) => {return (
                        <div
                        className="w-full h-[550px] border-sky-800 rounded-xl border-2"
                        id={key}
                        >
                            <div
                            className="h-1/2 w-full rounded-t-xl offer-header"
                            >
                                <img src={announce.images !== undefined ? `http://127.0.0.1:8000/${announce.images[0]}` : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB3CAMAAAAq0mI9AAAAUVBMVEXy8vJmZmbz8/P29vZUVFT5+fm+vr6hoaGoqKi7u7t0dHT8/PxiYmJdXV3///+zs7Pe3t7p6emAgICHh4fOzs7X19eSkpKbm5vIyMhvb29PT0/vdghNAAAE5UlEQVR4nO2a65KDKBCFlRbvhJu37Ps/6DZoJppg4s4IyVZxpuZHjKVfTtNNoyRJVFRUVFRUVFRUVFRUVFRU1CkiX3qt1UWJl+ueJGL+4CRRL7+USl6eIy7BA17FsrPEqtMBiUxZkVenqGCpJOemCSF5pi8U6Bm6DNl0toGQZ0Vz0m9uiiz3w3eOLN/JORz5/qb/H9883/3mNgH48OrzdPelfHa6U0rnyS8KRQg+6FLWpi2rxX8HDMAHsm1TI1a/GoLur/zzERhZOovxncYQaEPd1wrAJ+sFL221wyYz++fFmLsNDMAnrje+tJau06XOGMtq6cIIMP7ufK2SLv+0jX/rhA+Rv7q9jb/CcSfK2e1bR3qHyN/un8U+5igwILKbvWx6TpIA4y8BjuUvxSKDnebmVmZmkermLgLaxcbmlBDxJTDVLGOqd8SPFiy9841PrXwI//BII4VsHHhkWuGlacYf+55g/ZWtzI83IvKabvU4Qj/b/8HAtnitCh7fHZncoDx7sO+pyHzSPyLaRzwE7DaAH42vcvC123kuEJ/rDrR4iq4FHNY8nxt/0Dncs0UmX00jgdZHcxu11XWHD4vMvU0M5B8kUm5v81Ra1kOQhuUjkKtrXcrV9EvzXTzTZwNZLAzSH5Ahw1iyq5kc5nthadmNbmqLzMIUYv1LlgVIu1rA6Vd4c5EhQfjQvp868gMIzxPHg4EDDcSX0FUitKktvrul5a7bUz/PfBildYM3O0hI+pbv1sn49m/Tfy6AZHyRuz8RVrbI+OVbrc3vIRZEHPGPleCXj5g8eHYKHWy6Q4BmPeCPj+x1AO1VXI44aBfEPuNLSvc4wyxu+v3Z927gSH3yNTt4c4j7t3h2GvHGRx4zd3PjVDSvZ7hF8uKNb9e9xUF6IMRs8OXf5c0Mhs0Chvg9YM698JWOwvLgYCrogSxmA/PAx+r3MwSG+HLAwdYL31u61IaYisfnB47TPsVnQ9y/PfV8PlId4zMhno7wnYuXgDjIh23emz7V8PWn7wahIztSfBe9OrPFSe78/QcJVPVZqlzP5f4sAGKWiH8X7Ly3+atOgfO2DWl+WHoGnx/Cr98itr6+NRMcx75FwsRbrt9eSderrI9J4UqMcn7PRFqWntLyN5JKmUfhHMw2hPmQMJaa0mGn1uUw2MdbYD542LP2QhrZDB+IapqBpAQhqxwPdGit4JNJ1GqSgsyHvCfFRkpoG99eVcVok6WqqNb5qMdJTdCpXHMqh5LjQOj1NPCw9iWKjtMF+YauaZQw62LOG9XRJCVNP9Cia4RuOn1pihLPoY2SIdObJIoIjXxES1yxm3eYUPFGi0TWhPQD4JBDOF4CTCMomYAS4egsXwKD4FxqjGxZmaz44YN+wP9C6UtRIeZI6mEYrcdh+fqx4lI5+WilevS3tHyJeXBKIWz5xvICuuQJjisYzW5I4Kv4NrgURr7qJ76UO3dKeJP1LW851Tj2a0FmPgzi7F+DK2Ecf53C/ChMflDnRgmP0qZjrSsq6lLb2mHqy4D+KfRvhFyVuu7oOBRYX6Qq1XT2guiNjB1YkgmR3fKKHz9I+wUxX/admZBlL6aCgOxE6Po87yifZ7L1wWRp3W2rLTCqyhQfPDFwfT4iQjqt+Rd1DU8iti34pr5wK1+9/Gn6esCoqKioqKioZ/0L/XhK3xV6SLgAAAAASUVORK5CYII="}
                                className="w-full h-full rounded"
                                />
                            </div>
    
                            <div
                            className="w-full h-auto flex flex-col gap-4 p-4"
                            >
                                <h1
                                className="text-xl font-medium text-sky-800 text-center"
                                >{announce.title}</h1>
    
                                <p><span className="font-medium">Category :</span> {announce.category}</p>
                                <p><span className="font-medium">Thème :</span> {announce.theme}</p>
                                <p><span className="font-medium">Adress :</span>{announce.address.city.name} - {announce.address.name}</p>
                                <div
                                className="w-full flex justify-end"
                                >
                                    <div className="grid grid-cols-3 pt-5 gap-2">
                                       <a href={`/offers/${announce.id}`}> <button 
                                        className="text-gray-200 bg-sky-600 rounded-xl p-2 flex items-center justify-center"
                                        >Détails</button></a>
                                        <button
                                        className="text-gray-200 bg-emerald-500 rounded-xl p-2 flex items-center justify-center"
                                        >Modifier</button>
                                        <button
                                        className="text-gray-200 bg-red-500 rounded-xl p-2 flex items-center justify-center"
                                        >Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}

                    {announces.length === 0 && (
                        <h1>Aucune offre</h1>
                    )}

                    
                    {/*---------------------------------------------------------------------------------------------*/}

                </div>
            </div>
        </section>
    )
}

export default UserAnnounces;
