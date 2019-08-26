import React from 'react';
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
    return (
        <div className="userForm">
            <h1>Login</h1>
            <Form>
                <Field type="text" name="username" placeholder="Username" />
                <Field type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
            <div>
                <h4>Don't have an account?</h4>
                <h5><Link to="/sign-up">Sign Up.</Link></h5>
            </div>
        </div>
    )
}

const FormikUserForm = withFormik({
    
    //Handles State
    // mapPropsToValues({name, email, password}){
    //     return {
    //         name: name || "",
    //         email: email || "",
    //         password: password || "",
    //     }
    // },
    //Yup Validation
    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required('Name is required'),
        email: Yup.string()
          .email()
          .required('Email is required'),
        password: Yup.string()
          .min(6)
          .max(20)
          .required('A password is required')
      })
    //Post request
    // handleSubmit(values, {setStatus, resetForm}){
    //     console.log("Form submitted", values);
    //     axios.post("https://reqres.in/api/users", values)
    //     .then(res => {
    //         setStatus(res.data)
    //         resetForm();
    //         })
    //     .catch(err => console.log(err))
    // }
})(LoginForm);
export default FormikUserForm;