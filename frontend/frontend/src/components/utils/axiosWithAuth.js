import axios from 'axios';

const axiosWithAuth = () => {

    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        },
        baseURL: "https://silentauction.netlify.com/"

    });
};
export default axiosWithAuth;