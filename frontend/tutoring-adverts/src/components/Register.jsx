import { Formik} from "formik";
import * as yup from "yup";
import {useDropzone} from 'react-dropzone';
import { useState,useEffect } from "react";
import {FcGoogle} from "react-icons/fc";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
    wilaya: yup.string().required("le champ wilaya obligatoire"),
    commune: yup.string().required("le champ commune obligatoire"),
    adress: yup.string(),
    image:yup.mixed(),
})

const initialValues = {
    wilaya:"",
    commune:"",
    adress:"",
    image:null,
}


const Register = () => {

    const navigate = useNavigate();
    
    const [wilayas , setWilayas] = useState([]);
    const [communes , setCommunes] = useState([]);
    const [currentWilaya , setCurrentWilaya]= useState('');
    const [registerToggled,setRegisterToggled] = useState(true);
    const [user , setUser] = useState({});
    const [userImage, setUserImage] = useState({})
    const userId = useParams().id;
    const [registerResponse , setRegisterResponse] = useState({});

    {/*----------------------------------------------------------------------------------------------------*/}
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

    {/*----------------------------------------------------------------------------------------------------*/}


    {/*----------------------------------------------------------------------------------------------------*/}

    useEffect(() => {
      if (wilayas.length > 0){
        setCommunes(wilayas[currentWilaya-1].cities);
      }
    } , [currentWilaya])

    {/*----------------------------------------------------------------------------------------------------*/}

    const createUser = async (user) => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/addresses/`,
        {
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(user),
        },
      )
      const data = await response.json();
      setRegisterResponse(data);
    }

    {/*----------------------------------------------------------------------------------------------------*/}

    const Previews = (props) => {
        const [files, setFiles] = useState([]);
        const {getRootProps, getInputProps} = useDropzone({
          accept: {
            'image/*': []
          },
          onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            })));
            props.setFieldValue("image" , acceptedFiles)
          },
          multiple:false,
        });
        
        const thumbs = files.map(file => (
          <div key={file.name} >
            <div
            >
              <img
                src={file.preview}
                // Revoke data uri after image is loaded
                onLoad={() => { URL.revokeObjectURL(file.preview) }}
                className="w-[90px] h-[90px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        ));
      
        useEffect(() => {
          // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
          return () => files.forEach(file => URL.revokeObjectURL(file.preview));
        }, []);
        return (
            <section className="container">
              <div {...getRootProps({className: 'dropzone'})  
            }
              className="w-full h-[60px] border-2 border-dashed border-sky-800 flex items-center justify-center
              text-gray-700 rounded-t-xl
              "
              >
                <input {...getInputProps()}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
              <aside
              className="w-full h-[120px] flex justify-center
               p-1 border-2 border-sky-800 border-t-0 border-dashed rounded-b-xl
              "
              >
                {thumbs}
              </aside>
            </section>
          );
        }



        const handleFormSubmit = async (values, onSubmitProps) => {
          
          await createUser({user:userId ,city:values.commune , address:values.adress});
          if(registerResponse.status === "success"){
            navigate("/home/:id");
          }
        }



    return (
        <section className="min-h-[100vh] relative w-full pt-[15vh] pb-[30vh]">
            <Navbar />
            <div
            className="w-4/12 h-[70vh] absolute bottom-0 right-0 z-0 rounded-tl-full
            bg-gradient-to-r from-sky-800 to-sky-300 sm:block hidden 
            "
            >
            </div>
            <h1 className="text-3xl font-bold text-sky-800 text-center">Register</h1>
            <div 
            className={`p-5 w-full flex items-center gap-7
            ${registerToggled? "flex-col-reverse" : "flex-col"}`}
            >

                <div
                className={`${registerToggled? "h-[80vh]" : "h-0"} ease-in-out duration-300 w-full sm:w-1/2
                `}
                >
                    {registerToggled&& (
                        <Formik
                        validationSchema={validationSchema}
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
                        }) => (
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                                <div className="w-full">
                                    <select
                                    onBlur={handleBlur}
                                    value={values.wilaya}
                                    onChange={handleChange}
                                    
                                    name="wilaya"
                                    placeholder="wilaya"
                                    className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                                    >
                                        {wilayas.map((wilaya,key) =>{return(
                                          <option value={wilaya.id} >{wilaya.name}</option>
                                        )})}
                                    </select>
                                    {errors.wilaya && touched.wilaya ? (
                                        <div className="text-red-600">{errors.wilaya}</div>
                                    ) : null}
                                </div>

                                <div className="w-full">
                                    <select
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.commune}
                                    name="commune"
                                    placeholder="commune"
                                    className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                                    >
                                        {values.wilaya && wilayas.length > 0 && wilayas[values.wilaya -1].cities.map((city,key) =>{
                                          return(
                                            <option value={city.id}>{city.name}</option>
                                          )
                                        })}
                                    </select>
                                    {errors.commune && touched.commune ? (
                                        <div className="text-red-600">{errors.commune}</div>
                                    ) : null}
                                </div>

                                <div className="w-full">
                                <input 
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.adress}
                                name="adress"
                                placeholder="adress"
                                type="text"
                                className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                                />

                                {errors.adress && touched.adress ? (
                                    <div className="text-red-600">{errors.adress}</div>
                                ) : null}
                                </div>

                                
                                <Previews setFieldValue={setFieldValue} />

                                <div
                                className="w-full flex justify-center"
                                >
                                    <button 
                                    className="flex flex-row justify-center items-center gap-4 text-xl font-medium text-gray-100 
                                    bg-gradient-to-tr from-sky-600 to-sky-400 p-3 px-8 shadow-xl rounded-lg
                                    "
                                    type="submit"
                                    >s'inscrire</button>
                                    <br /><br />
                                </div>
                            </form>
                        ) }

                        </Formik>
                    )}

                </div>

                
            </div>

        </section>
    )
}

export default Register;