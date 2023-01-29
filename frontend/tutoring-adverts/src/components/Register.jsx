import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Dropzone from 'react-dropzone';
import { useState } from "react";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
    image: Yup.mixed().required('Image is required')
});

const Register = () => {
    const [image, setImage] = useState(null);

    const handleSubmit = (values , onSubmitProps) => {
        console.log(values);
    }

    return (
        <section className="min-h-[150vh] grid sm:grid-cols-2 grid-cols-1 relative">
            <div
            className="w-1/6 h-[33vh] absolute top-0 z-0 rounded-br-full
            bg-gradient-to-r from-sky-800 to-sky-300 sm:block hidden
            "
            >
            </div>
            <div
            className="w-4/12 h-[70vh] absolute bottom-0 right-0 z-0 rounded-tl-full
            bg-gradient-to-r from-sky-800 to-sky-300 sm:block hidden 
            "
            >
            </div>

            <div 
            className="mt-[20vh] p-5 w-full flex flex-col items-center gap-7"
            >
                <h1 className="text-3xl font-bold text-sky-800 ">Register</h1>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        image:null,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    >
                    {({ isSubmitting, errors, touched }) => (
                        <Form>
                        <Field type="text" name="username" placeholder="Username" />
                        {errors.username && touched.username ? (
                            <div>{errors.username}</div>
                        ) : null}
                        <Field type="email" name="email" placeholder="Email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <Field type="password" name="password" placeholder="Password" />
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <div>{errors.confirmPassword}</div>
                        ) : null}
                        <Dropzone onDrop={acceptedFiles => setImage(acceptedFiles[0])}>
                            {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>
                                    Drag and drop an image here, or click to select a file
                                </p>
                                </div>
                                {image ? (
                                <img src={URL.createObjectURL(image)} alt="uploaded" />
                                ) : null}
                            </section>
                            )}
                        </Dropzone>
                        <button type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </section>
    )
}

export default Register;