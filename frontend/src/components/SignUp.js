import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from "yup";

// send back -> first_name, last_name, email, username

const SignUpForm = ({ errors, touched, values, status }) => {
    return (
        <div className="userForm">
            <h1>User Sign-Up</h1>
            <Form>
                <Field type="text" name="first_name" placeholder="First name" />
                <Field type="text" name="last_name" placeholder="Last name" />
                <Field type="text" name="email" placeholder="Email" />
                <Field type="password" name="password" placeholder="Password" />
                <label>Bidder
                <Field type="checkbox" name="user_classification" />
                </label>
                <button type="submit">Submit Info</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    
    //Handles State
    mapPropsToValues({first_name, last_name, email, password, user_classification}){
        return {
            first_name: first_name || "",
            last_name: last_name || "",
            email: email || "",
            password: password || "",
            user_classification: user_classification || ""
        }
    },
    // Yup Validation
    validationSchema: Yup.object().shape({
        first_name: Yup.string()
        .required('First name is required'),
        last_name: Yup.string()
        .required('Last name is required'),
        email: Yup.string()
          .email()
          .required('Email is required'),
        password: Yup.string()
          .min(6)
          .max(20)
          .required('A password is required'),
          user_classification: Yup.boolean()
          .required('Checkbox is required')
      }),
     //Post request
    handleSubmit(values, {setStatus, resetForm}){
        console.log("Form submitted", values);
        axios.post("https://silent-auction-api.herokuapp.com/api/auth/register", values)
        .then(res => {
            setStatus(res.data)
            resetForm();
            console.log("Server response ->", res.data);
            console.log("Submitted");
            })
        .catch(err => console.log(err))
    }
})(SignUpForm);
export default FormikUserForm;