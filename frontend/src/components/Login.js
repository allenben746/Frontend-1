import React from 'react';
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

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
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || "",
        }
    },
    //Yup Validation
    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required('Your username is required'),
        password: Yup.string()
          .required('Your password is required')
      }),
    //Post request
    handleSubmit(values, {setStatus, resetForm}){
        console.log("Logging in...", values);
        axios.post("https://silent-auction-api.herokuapp.com/api/auth/login", values)
        .then(res => {
            setStatus(res.data)
            resetForm();
            console.log("Server response ->", res.data);
            console.log("Logged In");
            })
        .catch(err => console.log(err))
    }
})(LoginForm);
export default FormikUserForm;