import React, { useState } from 'react';
import axios from 'axios';


export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

function LoginAuth({ history }) {

    const [creds, setCreds] = useState({ username: "", password: "" })

    const handleChange = event => {
        setCreds({ ...creds, [event.target.name]: event.target.value })
    };
    const handleSubmit = event => {

        event.preventDefault();
        axios.post('https://silent-auction-api.herokuapp.com/auth/register', creds)
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
                placeholder="username"
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={creds.password}
                placeholder="password"
                onChange={handleChange} />
            <button type="submit">Log in</button>
        </form>


    )

}
export default LoginAuth;

