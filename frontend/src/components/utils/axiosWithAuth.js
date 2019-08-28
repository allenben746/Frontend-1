import axios from "axios";

const axiosWithAuth = () => {
  // const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJzaWxlbjJ0Iiwiand0SWQiOjEsImlhdCI6MTU2NzAxMzM0NiwiZXhwIjoxNTY3MDk5NzQ2fQ.Rv2aCkE2zBZMspwsxxO1V1Bnc0gc_xxQyOhA_MXrpvs'
    // {token}
    },
  });
};

export default axiosWithAuth;