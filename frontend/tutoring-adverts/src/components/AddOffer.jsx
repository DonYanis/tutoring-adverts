import UserNavbar from "./UserNavbar";
import { Formik} from "formik";
import * as Yup from "yup";
import {useDropzone} from 'react-dropzone';
import { useState  , useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//    JSON.parse

const validationSchema = Yup.object().shape({
    title: Yup.string().required("titre obligatoire"),
    category:Yup.string().required("categorie obligatoire"),
    type: Yup.string().required("type de déroulement obligatoire"),
    theme: Yup.string().required("theme obligatoire"),
    description: Yup.string().required("description obligatoire"),
    tarif: Yup.number().required("tarif obligatoire"),
    images: Yup.array().of(Yup.mixed()),
    wilaya: Yup.string().required("le champs willaya est obligatoire"),
    commune: Yup.string().required("le champs commune est obligatoire"),
    adress: Yup.string().required("le champs adress est obligatoire")
})

const initialValues = {
    title:"",
    category:"",
    type:"",
    theme:"",    
    description:"",
    tarif:null,
    images:[],
    wilaya: "",
    commune: "",
    adress: ""
}


const AddOffer = () => {

    const [wilayas , setWilayas] = useState([]);
    const [createOfferResponse , setCreateOfferResponse] = useState(null)

    {/*--------------------------------------------------------------------------------------------------------------------------------*/}
    const notifySuccess = () => toast("Anonce créé avec succés!");
    const notifyError = () => toast("l'anonce n'a pas été créée");
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

    {/*--------------------------------------------------------------------------------------------------------------------------------*/}

      const addImages = async () => {
        const response = await fetch(

        )
      }

    {/*--------------------------------------------------------------------------------------------------------------------------------*/}

    const createOffer = async (offerBody) => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/adverts/`,
        {
          method:"POST",
          headers: {"Content-Type": "application/json"},
          body : JSON.stringify(offerBody)
        }
      )
      const data = response.json();
      setCreateOfferResponse(data);
    }


    {/*--------------------------------------------------------------------------------------------------------------------------------*/}


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
            props.setFieldValue("images" , acceptedFiles)
          }
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
              className="w-full h-[120px] flex flex-row gap-3 
              overflow-auto whitespace-nowrap
              scroll-smooth p-1 border-2 border-sky-800 border-t-0 border-dashed rounded-b-xl overflow-x-scroll
              "
              >
                {thumbs}
              </aside>
            </section>
          );
        }
      

    {/*---------------------------------------------------------------------------------------------------------------------------------*/}


    const handleFormSubmit = async (values,onSubmitProps) => {
        console.log({
          title: values.title,
          category: values.category,
          theme: values.theme,
          type: values.type,
          description : values.description,
          tarif : values.tarif,
          user:"2",
          addressName:values.adress,
          city: values.commune
    });
        await createOffer({
          title: values.title,
          category: values.category,
          theme: values.theme,
          type: values.type,
          description : values.description,
          tarif : values.tarif,
          user:"2",
          addressName:values.adress,
          city: values.commune
        })

        if (createOfferResponse.status === "success") {
          notifySuccess();
        }
        else if (createOfferResponse.status === "fail"){
          notifyError();
        }

        onSubmitProps.resetForm();
    }
    return (
        <section className="w-full min-h-[150vh] flex flex-col gap-12 bg-white"
        >
            <UserNavbar />
            <div
            className="flex flex-col gap-8 pt-[15vh] items-center w-full"
            >
                <h1
                className="text-2xl font-semibold text-sky-800"
                >Ajouter une anounce</h1>
                <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                className="w-full"
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
                        <form onSubmit={handleSubmit} 
                        className="w-full"
                        >
                            <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 p-5">
                              <div className="w-full">
                                  <input 
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.title}
                                  name="title"
                                  placeholder="Titre"
                                  className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                                  />
                                  {errors.title && touched.title ? (
                                  <div className="text-red-600">{errors.title}</div>
                                  ) : null}
                              </div>

                              <div className="w-full">
                              <input 
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.tarif}
                              name="tarif"
                              placeholder="Tarif Da/heure"
                              type="number"
                              className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                              />
                              {errors.tarif && touched.tarif ? (
                                  <div className="text-red-600">{errors.tarif}</div>
                              ) : null}
                              </div>

                              <div className="w-full">
                                  <textarea 
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.description}
                                  name="description"
                                  placeholder="Description"
                                  className="border-2 border-sky-800 p-3 rounded-2xl w-full h-[170px]"
                                  />
                                  {errors.description && touched.description ? (
                                      <div className="text-red-600">{errors.description}</div>
                                  ) : null}
                              </div>


                              <Previews setFieldValue={setFieldValue}/>

                              <div className="w-full">
                                  <select
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.category}
                                  name="category"
                                  placeholder="category"
                                  className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                                  >
                                      <option value="primaire">Primaire</option>
                                      <option value="collège">Moyen</option>
                                      <option value="lycée">Lycée</option>
                                  </select>
                                  {errors.category && touched.category ? (
                                      <div className="text-red-600">{errors.category}</div>
                                  ) : null}
                              </div>
                              
                              <div className="w-full">
                                  <select
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.wilaya}
                                  name="wilaya"
                                  placeholder="wilaya"
                                  className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                                  >
                                      {wilayas.map((wilaya) => {
                                        return(
                                            <option value={wilaya.id} >{wilaya.name}</option>
                                        )
                                      })}
                                  </select>
                                  {errors.willaya && touched.willaya ? (
                                      <div className="text-red-600">{errors.willaya}</div>
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

                              
                              <div className="w-full">
                              <input 
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.theme}
                              name="theme"
                              placeholder="Theme"
                              type="text"
                              className="border-2 border-sky-800 p-3 rounded-2xl w-full"
                              />

                              {errors.theme && touched.theme ? (
                                  <div className="text-red-600">{errors.theme}</div>
                              ) : null}
                              </div>

                              

                              {/* <select
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.theme}
                              name="theme"
                              placeholder="theme"
                              >
                                  <option value="physique">physique</option>
                                  <option value="math">math</option>
                              </select> */}
                              <div className="w-full">
                              <div
                              className="flex w-full h-[100px] pt-[10px]"
                              >
                                  <h1 className="w-1/3 font-medium">Déroulement: </h1>
                                  <div className="w-1/2 flex flex-row gap-5">
                                      <div>
                                          <input
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          value="online"
                                          type="radio"
                                          name="type"
                                          /> Online
                                          </div>
                                      <div>
                                          <input
                                          onBlur={handleBlur}
                                          onChange={handleChange}
                                          value="offline"
                                          type="radio"
                                          name="type"
                                          /> Offline
                                      </div>
                                  </div>
                              </div>
                              {errors.type && touched.type ? (
                                  <div className="text-red-600">{errors.type}</div>
                              ) : null}

                              </div>
                              
                              
                              

                              <div className="
                              w-full flex items-center justify-center h-[100px] pt-[50px]
                              ">
                              <button
                              type="submit"
                              className="text-gray-100 bg-gradient-to-tr w-full from-sky-500 to-sky-300 p-3 px-8 text-xl
                              rounded-xl shadow-lg
                              "
                              >submit</button>
                              </div>
                            </div>
                        </form>
                    )
                    }
                </Formik>
                <ToastContainer />


            </div>
        </section>
    )
} 
export default AddOffer;