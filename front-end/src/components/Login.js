import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {

    const [creds, setCreds] = useState({ username: "", password: "" });

    const handleChange = event => {
        setCreds: ({ ...creds, [event.target.name]: event.target.value });
    };
    const handleSubmit = event => {

        event.preventDefault();
        axios.post('https://silent-auction-api.herokuapp.com/auth/login', creds)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload)
                history.push("/users")
            })
            .catch(err => console.log(err.response));
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text"
                name="username"
                value={creds.username}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={creds.password}
                onChange={handleChange} />
            <button type="submit">Log in</button>
        </form>


    )

}
export default Login;
