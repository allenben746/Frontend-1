import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
// import axios from 'axios';
// import * as Yup from "yup";

// send back -> first_name, last_name, email, username

const Form = ({ errors, touched, values, status }) => {
    return (
        <div className="userForm">
            <h1>User Sign-Up</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (
                    <p className='errorMessage'>{errors.name}</p>
                )}
                <Field type="text" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <label> I agree to the Terms of Service
                <Field type="checkbox" name="termsOfService" />
                </label>
                <button type="submit">Submit Info</button>
            </Form>
            <div>
                <h4>Don't have an account?</h4>
                <h5><Link to="/sign-up">Sign Up.</Link></h5>
            </div>
            {
                users.map(user => {
                    return <h3 key={user.id}>{user.username}, {user.id}</h3>
                })
            }
        </div>
    )
}

const FormikUserForm = withFormik({
    
    //Handles State
    mapPropsToValues({name, email, password}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
        }
    },
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
      }),
    //Post request
    handleSubmit(values, {setStatus, resetForm}){
        console.log("Form submitted", values);
        axios.post("https://reqres.in/api/users", values)
        .then(res => {
            setStatus(res.data)
            resetForm();
            })
        .catch(err => console.log(err))
    }
})(UserForm);
export default FormikUserForm;