import {AiOutlineDown , AiOutlineUp} from "react-icons/ai"
import {BiSearch} from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import img_1 from "../assets/users/img_01.jpg"
import img_2 from "../assets/users/img_02.jpg"
import img_3 from "../assets/users/img_03.jpg"
import UserNavbar from "./UserNavbar";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup"


const searchSchema = yup.object().shape({
    searchString : yup.string(),
    wilaya: yup.string(),
    city: yup.string(),
    dateMin: yup.string(),
    dateMax: yup.string(),
    type : yup.string(),
    tarifMax : yup.number(),
    theme: yup.string(),
    category: yup.string(),
})

const initialValues = {
    searchString:"",
    wilaya:"",
    city:"",
    dateMin:"",
    dateMax:"",
    type:"",
    theme:"",
    category:"",
    tarifMax:0
}


const Dashboard = () => {

    const [wilayas , setWilayas] = useState([]);
    const [searchBody , setSearchBody] = useState({
    keyWords:[],
    wilaya:"",
    city:"",
    dateMin:"",
    dateMax:"",
    type:"",
    theme:"",
    category:"",
    tarifMax:0
    });
    const [searchResult , setSearchResult] = useState([]);


//---------------------------------------------------------------------------------------------------------------------
    const getWilayas = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/api/wilayas",
            {
              method:"GET",
              headers: { "Content-Type": "application/json"},
            }
          )
        const data = await response.json()
        setWilayas(data)
      }
  
      useEffect(() => {
        getWilayas();
      },[])

//---------------------------------------------------------------------------------------------------------------------

    const search = async (searchBody) => {
        const response = await fetch(
            "http://127.0.0.1:8000/api/search/",
            {
                method:"POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(searchBody),
            }
        )
        const data = await response.json();
        setSearchResult(data);
        console.log(data);
    }


//---------------------------------------------------------------------------------------------------------------------

    const popularUsers = [
        {name:"Tarek Ichalalen" , img:img_1 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
        {name:"Jhon Doe" , img:img_2 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
        {name:"Massyl Hamar" , img:img_3 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
        {name:"Yanis Beldjilali" , img:img_2 , bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"},
    ]
    const userId = useParams().id

    const [advancedSearch , setAdvancedSearch] = useState(false);

    const [previousUser , setPreviousUser] = useState(popularUsers[-1]);
    const [currentUser , setCurrentUser] = useState(popularUsers[0]);
    const [nextUser , setNextUser] = useState(popularUsers[1]); 

    
    const [previousIndex , setPreviousIndex] = useState(0);
    const [slideIndex , setSlideIndex] = useState(1);
    const [nextIndex , setNextIndex] = useState(2);

    const [changed , setChanged] = useState(false);

    const [user , setUser] = useState({});

    //--------------------------------------------------------------------------------------------------



    //-----------------------------------------------------------------------------------------
    
    
    useEffect(() => {
        const timer = setInterval(() => {
            setPreviousIndex(i => (i+1) % popularUsers.length)
            setSlideIndex(i => (i+1) % popularUsers.length);
            setNextIndex(i => (i+1) % popularUsers.length)
        }, 8000);
        
        return () => clearInterval(timer);
    },[])

    useEffect(() =>{
        const timer=setInterval(() => {
            setChanged(true);
        }, 7100);

        setPreviousUser(popularUsers[previousIndex]);
        setCurrentUser(popularUsers[slideIndex]);
        setNextUser(popularUsers[nextIndex]);
        setChanged(false); 

        return () => clearInterval(timer);
    }
    ,[slideIndex])


    const handleFormSubmit = async (values , onSubmitProps) => {
    
        const keyWords = values.searchString.split(" ");
        console.log({
            keyWords:keyWords , 
            wilaya: values.wilaya,
            city:values.city,
            dateMin:values.dateMin,
            dateMax:values.dateMax,
            type:values.type,
            theme:values.theme,
            category:values.category,
            tarifMax:values.tarifMax
        });
        await search({
            keyWords:keyWords , 
            wilaya: values.wilaya,
            city:values.city,
            dateMin:values.dateMin,
            dateMax:values.dateMax,
            type:values.type,
            theme:values.theme,
            category:values.category,
            tarifMax:values.tarifMax
        });
    }
    
    return(
        <section
        className="w-full min-h-[150vh] p-5 flex flex-col gap-12"
        >
            <UserNavbar/>

{/*----------------------------------------------------------------------------------------------------------------------------*/}

            
            <div className="w-full min-h-[100vh]  mt-[25vh] flex flex-col gap-12">
            <Formik
            validationSchema={searchSchema}
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            >
                {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        resetForm,
                        }) =>(
                <form onSubmit={handleSubmit}>

                <div
                className="w-full h-[20vh] flex flex-row justify-center"
                >
                    <div className="w-2/3 flex flex-row gap-0 items-center h-full ">
                        <button 
                        className="h-[8vh] w-[8vh] bg-sky-300 p-3 flex items-center justify-center
                        text-3xl rounded-l-3xl
                        "
                        type="submit"
                        onClick={() => setSearchResult([])}
                        ><BiSearch/></button>
                        <input
                        value={values.searchString}
                        name="searchString" 
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="border w-full p-3 border-l-0 rounded-r-3xl border-sky-600 h-[8vh]"
                        placeholder="Recherchez des annonces de cours "
                        />
                    </div>
                </div>

                {advancedSearch && (
                    <div className="w-full">
                        <div
                        className="sm:grid sm:grid-cols-2 flex flex-col  gap-2 w-full items-start"
                        >
                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >
                                <label 
                                className="font-medium"
                                >Wilaya:</label>
                                <select
                                value={values.wilaya}
                                name="wilaya" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                placeholder="Wilaya"
                                >
                                    {wilayas.map((wilaya , key) => {return(
                                        <option id={key} value={wilaya.id}>{wilaya.name}</option>
                                    )})}

                                </select>
                            </div>

                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >
                                <label 
                                className="font-medium"
                                >Commune:</label>
                                <select
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="city" 
                                className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                placeholder="city"
                                >
                                    {values.wilaya && wilayas.length > 0 && wilayas[values.wilaya -1].cities.map((city,key) =>{
                                          return(
                                            <option value={city.id}>{city.name}</option>
                                          )
                                        })}
                                </select>
                            </div>

                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >   
                                <label
                                className="font-medium"
                                >Publié entre : </label>
                                <input type="date"
                                value={values.dateMin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="dateMin" 
                                className="h-[8vh] w-1/2 border border-sky-600 rounded-xl self-center"
                                />
                            </div>
                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >   
                                <label
                                className="font-medium"
                                >et : </label>
                                <input type="date"
                                value={values.dateMax}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="dateMax" 
                                className="h-[8vh] w-1/2 border border-sky-600 rounded-xl self-center"
                                />
                            </div>
                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >
                                <label 
                                className="font-medium"
                                >Déroulement:</label>
                                <span className="flex flex-row gap-1 items-center">
                                    <input type="checkbox" value="oneline" name="type"  onChange={handleChange}
                                onBlur={handleBlur}/>
                                    <label>En ligne</label>
                                </span>
                                <span className="flex flex-row gap-1 items-center">
                                    <input type="checkbox" value="offline" name="type"  onChange={handleChange}
                                onBlur={handleBlur}/>
                                    <label>En présentiel</label>
                                </span>
                            </div>

                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >
                                <label 
                                className="font-medium"
                                >Theme:</label>
                                <input
                                value={values.theme}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="theme" 
                                type="text"
                                className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                placeholder="theme"
                                />
                            </div>

                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >
                                <label 
                                className="font-medium"
                                >Categorie:</label>
                                <select
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="category"
                                className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                placeholder="category"
                                >
                                    <option value="primaire">Primaire</option>
                                    <option value="collège">Moyen</option>
                                    <option value="lycée">Lycée</option>
                                </select>
                            </div>

                            <div
                            className="w-full flex flex-row justify-center items-center py-3 
                            gap-4
                            "
                            >
                                <label 
                                className="font-medium"
                                >Tarif maximal:</label>
                                <input
                                value={values.tarifMax}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="tarifMax" 
                                type="number"
                                className="h-[8vh] w-2/3 border border-sky-600 rounded-xl self-center"
                                placeholder="tarifMax"
                                />
                            </div>
                            
                            
                                    
                        </div>
                        <div
                        className="w-full flex justify-center"
                        >
                            <button
                            className="bg-gradient-to-r from-sky-400 to-sky-300 p-3 font-medium rounded-lg shadow-lg
                            flex items-end flex-row gap-2 self-center"
                            type="submit"
                            onClick={() => setSearchResult([])}
                            >Rechercher</button>
                        </div>

                        <div className="w-full flex justify-center mt-7">
                            <button className="bg-gradient-to-r from-sky-400 to-sky-300 p-3 font-medium rounded-lg shadow-lg
                            flex items-end flex-row gap-2"
                            type="button"
                            onClick={() => setAdvancedSearch(false)}
                            >
                            Recherche Simple <AiOutlineUp />
                            </button>
                        </div> 
                    </div>
                        
                    

                )}

                </form>
                 )}
                </Formik>
                

                
                <div className="flex justify-center w-full">
                    {!advancedSearch && (
                        <button
                        className="bg-gradient-to-r from-sky-400 to-sky-300 p-3 font-medium rounded-lg shadow-lg
                        flex items-end flex-row gap-2 h-[8vh]
                        "
                        onClick={() => setAdvancedSearch(true)}
                        >Recherche Avancée <AiOutlineDown/></button>
                    )}
                    
                </div>

                {searchResult.length > 0 && (
                    <div
                    className="w-full p-3 grid laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1
                    gap-3
                    "
                    >  
                        {searchResult.map((announce,key) => {return (
                            <div
                            className="w-full h-[350px] p-4 border-2 border-sky-800 rounded-xl shadow-inner"
                            id={key}
                            >
                                <div
                                className="w-full flex flex-col gap-3"
                                >
                                    <p><spa className="text-sky-800 font-medium">Titre: </spa>{announce.title}</p>
                                    <p><spa className="text-sky-800 font-medium">Theme: </spa>{announce.theme}</p>
                                    <p><spa className="text-sky-800 font-medium">Publié par : </spa>{announce.publisher.first_name} {announce.publisher.last_name}</p>
                                    <p><spa className="text-sky-800 font-medium">Le: </spa>{announce.created.slice(0,10)}</p>
                                    <p><spa className="text-sky-800 font-medium">Tarif horaire: </spa>{announce.tarif}</p>
                                    <p><spa className="text-sky-800 font-medium">Déroulement: </spa>{announce.type}</p>
                                    <p><spa className="text-sky-800 font-medium">Adresse: </spa>{announce.address.name} - {announce.address.city.name}</p>
                                </div>
                                <div
                                className="w-full flex justify-end"
                                >
                                    <a href={`/offers/${announce.id}`}>
                                        <button
                                        className="text-gray-100 bg-sky-600 p-2 rounded-xl shadow-lg"
                                        >Voir détails</button></a>
                                </div>
                            </div>

                        )})}
                    </div>
                )}

                <div
                className="w-full flex justify-center mt-10"
                >
                    <div 
                    className="w-5/6 h-[2px] self-center bg-gradient-to-r from-sky-700 to-sky-400
                    "></div>
                </div>
                
                <div
                className="w-full flex flex-col gap-8"
                >
                    <div className="flex justify-center w-full">
                        <h1
                        className="text-[5vh] font-semibold text-sky-800"
                        >Nos Meilleurs Profs </h1>
                    </div>
                    <div className="w-full min-h-[80vh] mb-[20vh] flex flex-row gap-12 px-[10vh]">
                            {(previousUser) && (
                                <div
                                className={`w-[400px] h-[330px]  flex-col items-center gap-4 ease-in-out duration-1000
                                hidden laptop:flex
                                ${changed ? "opacity-0" :"opacity-70"}
                                `}
                                >
                                <img src={previousUser.img}
                                className={`rounded-full w-[160px] h-[160px] shadow-xl
                                `}
                                />
                                    <h1
                                    className="text-xl font-medium text-sky-800"
                                    >{previousUser.name}</h1>
                                    <p
                                    className="text-gray-700 text-center"
                                    >
                                        {previousUser.bio}
                                    </p>
                                </div>
                            )}

                            {(currentUser) && (
                                <div  className={`ease-in-out duration-1000 w-[700px] h-[700px] 
                                flex flex-col gap-4 items-center
                                ${changed ? "opacity-0" :"opacity-100"}
                                `}>
                                    <img src={currentUser.img}
                                    className={`rounded-full shadow-xl mt-7 w-[400px] h-[400px]
                                    `}
                                    />
                                    <h1
                                    className="text-2xl font-medium text-sky-800"
                                    >{currentUser.name}</h1>
                                    <p
                                    className="text-gray-700 text-center text-xl "
                                    >
                                        {currentUser.bio}
                                    </p>
                                    
                                </div>
                            )}

                            {(nextUser) && (
                                <div className={`w-[400px] h-[330px] flex-col items-center gap-4 ease-in-out duration-1000
                                hidden laptop:flex
                                ${changed ? "opacity-0" :"opacity-70"}`}>
                                    <img src={nextUser.img}
                                    className={`rounded-full w-[160px] h-[160px] shadow-xl
                                    `}
                                    />

                                    <h1
                                    className="text-xl font-medium text-sky-800"
                                    >{nextUser.name}</h1>
                                    <p
                                    className="text-gray-700 text-center"
                                    >
                                        {nextUser.bio}
                                    </p>
                                </div>
                            )}

                    </div>
                </div>
            </div>

            


        </section>
    )
}

export default Dashboard