import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Login = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    }, [status]);
    return (
        <div className="login">
            <Form>
                <Field type="text" name="username" placeholder="username" />
                <Field type="text" name="password" placeholder="password" />

                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <label className="checkbox-container">
                    Keep me Log In
          <Field
                        type="checkbox"
                        name="keeplogin"
                        checked={values.keeplogin}
                    />
                    <span className="checkmark" />
                </label>
                <button type="submit">Place Bid Now</button>
            </Form>

            {users && users.map(user => (
                <ul key={user.id}>
                    <li>username: {user.username}</li>
                    <li>password: {user.password}</li>
                    {/* <li>auction_number: {user.auction_number}</li>
                <li>bid:{user.bid}</li>
                <li>tos: {user.tos}</li> */}
                </ul>
            ))}
        </div>
    );
};



const FormikLogin = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },

    validationSchema: Yup.object().shape({
        password: Yup.string().required("You funny"),
        bid: Yup.string().required("please input")
    }),

    handleSubmit(values, { setStatus }) {
        axios.post("https://silent-auction-api.herokuapp.com/auth/login", values).then(res => {
            console.log(res);
            setStatus(res.data);
        });
    }
})(Login);
export default FormikLogin;

